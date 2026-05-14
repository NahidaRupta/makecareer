import { z } from "zod";

export const downloadSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Valid email required"),
  resourceSlug: z.string().min(1),
  _hp: z.string().max(0, "Bot detected").optional(),
});

export type DownloadInput = z.infer<typeof downloadSchema>;
