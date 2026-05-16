import { z } from "zod";

export const eventRegisterSchema = z.object({
  name: z.string().min(1, "Please enter your name").max(100),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().max(200).optional(),
  phone: z.string().max(20).optional(),
  eventSlug: z.string().min(1),
  eventName: z.string().min(1),
  _hp: z.string().max(0, "Bot detected").optional(),
});

export type EventRegisterInput = z.infer<typeof eventRegisterSchema>;
