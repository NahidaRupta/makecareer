import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  company: z.string().max(200).optional(),
  email: z.string().email("Valid email required"),
  phone: z.string().max(20).optional(),
  serviceInterest: z
    .enum([
      "staffing",
      "team-dispatch",
      "dormitory",
      "specified-skills",
      "contract",
      "internship",
      "consulting",
      "other",
    ])
    .optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  _hp: z.string().max(0, "Bot detected").optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
