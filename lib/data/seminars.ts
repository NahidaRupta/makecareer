export type SeminarFormat = "Online" | "In-Person" | "Hybrid";

export interface SeminarData {
  slug: string;
  date: string;
  dateIso: string;
  time: string;
  titleJa: string;
  descriptionJa: string;
  format: SeminarFormat;
  location: string;
  targetJa: string;
  spotsTotal: number;
  spotsLeft: number;
  agenda: { time: string; titleJa: string }[];
  speaker: { name: string; role: string };
}

export const SEMINARS: SeminarData[] = [
  {
    slug: "2025-06-haken-basics",
    date: "5 Jun 2025 (Thu)",
    dateIso: "2025-06-05",
    time: "14:00–15:30",
    titleJa: "[Free Seminar] Manufacturing Staffing Fundamentals",
    descriptionJa:
      "A clear, jargon-free introduction to how manufacturing dispatch works — covering the difference between dispatch and outsourcing, typical costs, and common mistakes. Ideal for HR managers considering staffing services for the first time.",
    format: "Online",
    location: "Zoom",
    targetJa: "Manufacturing HR and operations managers — newcomers to staffing services welcome",
    spotsTotal: 30,
    spotsLeft: 12,
    agenda: [
      { time: "14:00", titleJa: "Staffing fundamentals: dispatch, outsourcing, and direct placement explained" },
      { time: "14:30", titleJa: "Three real-world case studies from manufacturing clients" },
      { time: "15:00", titleJa: "Costs, timelines, and the contracting process" },
      { time: "15:20", titleJa: "Q&A" },
    ],
    speaker: {
      name: "Seiichi Tanaka",
      role: "MakeCareer Senior Consultant — Manufacturing Specialist",
    },
  },
  {
    slug: "2025-06-ginoujisshu-guide",
    date: "18 Jun 2025 (Wed)",
    dateIso: "2025-06-18",
    time: "13:00–14:30",
    titleJa: "Complete Guide to Specified Skills & Technical Intern Programmes",
    descriptionJa:
      "A practical deep-dive into Specified Skills Type 1 and Type 2 — covering the intake process, costs, and real examples of what can go wrong and how to avoid it. Perfect for manufacturers and logistics companies exploring foreign worker onboarding.",
    format: "Hybrid",
    location: "Nagoya HQ + Zoom",
    targetJa: "HR and operations managers at manufacturing and logistics companies exploring foreign talent",
    spotsTotal: 20,
    spotsLeft: 5,
    agenda: [
      { time: "13:00", titleJa: "Specified Skills Type 1 & 2 explained — 2025 updates" },
      { time: "13:30", titleJa: "Full intake flow: application through first day on-site" },
      { time: "14:00", titleJa: "Costs, common pitfalls, and how to avoid them" },
      { time: "14:20", titleJa: "Q&A and one-to-one consultation slots" },
    ],
    speaker: {
      name: "Misaki Suzuki",
      role: "MakeCareer International Staffing Division Manager",
    },
  },
  {
    slug: "2025-07-ukeoi-cost",
    date: "10 Jul 2025 (Thu)",
    dateIso: "2025-07-10",
    time: "15:00–16:30",
    titleJa: "Cutting Costs with Factory Outsourcing — Three Success Stories",
    descriptionJa:
      "Learn how three manufacturers reduced costs and stabilised quality by switching production line operations to an outsourcing model. Includes a practical guide on when to switch and what to watch out for.",
    format: "In-Person",
    location: "Osaka Business Park Seminar Room (nearest station: Osakajokitazume)",
    targetJa: "Factory managers and production planning leads exploring line efficiency and cost reduction",
    spotsTotal: 25,
    spotsLeft: 18,
    agenda: [
      { time: "15:00", titleJa: "How factory outsourcing works and how it differs from dispatch" },
      { time: "15:30", titleJa: "Three cost-reduction case studies" },
      { time: "16:00", titleJa: "When to make the switch — and what to watch out for" },
      { time: "16:20", titleJa: "Q&A and networking" },
    ],
    speaker: {
      name: "Kenta Yamamoto",
      role: "MakeCareer Business Development Director",
    },
  },
];

export function getSeminarBySlug(slug: string): SeminarData | undefined {
  return SEMINARS.find((s) => s.slug === slug);
}

export function getSeminarSlugs(): string[] {
  return SEMINARS.map((s) => s.slug);
}
