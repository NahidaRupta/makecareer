import { z } from "zod";

export const jobApplySchema = z.object({
  jobId: z.string().cuid(),
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Valid email required"),
  phone: z.string().max(20).optional(),
  coverNote: z.string().max(2000).optional(),
  resumeUrl: z.string().url().optional(),
  _hp: z.string().max(0, "Bot detected").optional(),
});

export type JobApplyInput = z.infer<typeof jobApplySchema>;
