export type * from "./api";

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  meta?: {
    total: number;
    page: number;
    limit: number;
  };
}

export interface NavItem {
  label: string;
  labelJa?: string;
  href: string;
  children?: NavItem[];
}

export interface StatItem {
  value: number;
  unit: string;
  label: string;
  labelJa?: string;
  suffix?: string;
}

export interface ServiceItem {
  slug: string;
  iconName: string;
  titleEn: string;
  titleJa: string;
  descriptionEn: string;
  descriptionJa: string;
}

export interface DifferentiatorItem {
  iconName: string;
  headingEn: string;
  headingJa: string;
  bodyEn: string;
  bodyJa: string;
}

export interface FaqItem {
  question: string;
  questionJa?: string;
  answer: string;
  answerJa?: string;
}
