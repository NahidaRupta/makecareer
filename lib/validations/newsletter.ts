import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().email("Valid email required"),
  source: z.string().max(100).optional(),
  _hp: z.string().max(0, "Bot detected").optional(),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
