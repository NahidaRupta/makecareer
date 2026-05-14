export type ActionState<T = undefined> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data?: T; message?: string }
  | { status: "error"; message: string };

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface JobSearchParams {
  q?: string;
  industry?: string;
  employmentType?: string;
  location?: string;
  visaSponsorship?: boolean;
  page?: number;
  limit?: number;
}
