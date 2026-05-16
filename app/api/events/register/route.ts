import { type NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { eventRegisterSchema } from "@/lib/validations/event-register";
import { prisma } from "@/lib/db";
import { getSeminarBySlug } from "@/lib/data/seminars";
import {
  sendSeminarConfirmation,
  sendSeminarNotification,
} from "@/lib/email";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const ip = getClientIp(request);
    const { ok } = rateLimit(`seminar:${ip}`, 5);
    if (!ok) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again in a moment." },
        { status: 429 },
      );
    }

    const body: unknown = await request.json();
    const data = eventRegisterSchema.parse(body);

    if (data._hp) {
      return NextResponse.json({ success: true });
    }

    const seminar = getSeminarBySlug(data.eventSlug);
    if (!seminar) {
      return NextResponse.json(
        { success: false, error: "The requested seminar could not be found." },
        { status: 404 },
      );
    }

    if (seminar.spotsLeft <= 0) {
      return NextResponse.json(
        { success: false, error: "Sorry, this seminar is fully booked." },
        { status: 409 },
      );
    }

    try {
      await prisma.seminarRegistration.create({
        data: {
          eventSlug: data.eventSlug,
          eventName: data.eventName,
          name: data.name,
          email: data.email,
          company: data.company,
          phone: data.phone,
          ipAddress: ip,
        },
      });
    } catch (dbError: unknown) {
      const isDuplicate =
        dbError instanceof Error &&
        dbError.message.includes("Unique constraint");
      if (isDuplicate) {
        return NextResponse.json(
          { success: false, error: "This email address is already registered for this seminar." },
          { status: 409 },
        );
      }
      throw dbError;
    }

    await Promise.allSettled([
      sendSeminarConfirmation({
        to: data.email,
        name: data.name,
        eventName: seminar.titleJa,
        eventDate: seminar.date,
        eventTime: seminar.time,
        eventFormat: seminar.format,
        eventLocation: seminar.location,
      }),
      sendSeminarNotification({
        name: data.name,
        email: data.email,
        company: data.company,
        phone: data.phone,
        eventName: seminar.titleJa,
        eventSlug: seminar.slug,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { success: false, error: "Please check your input and try again.", details: error.flatten().fieldErrors },
        { status: 400 },
      );
    }
    console.error("[api/events/register]", error);
    return NextResponse.json(
      { success: false, error: "A server error occurred. Please try again later." },
      { status: 500 },
    );
  }
}
