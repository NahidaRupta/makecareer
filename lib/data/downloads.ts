export interface DownloadData {
  slug: string;
  titleJa: string;
  descriptionJa: string;
  pages: string;
  category: string;
  imageSrc: string;
  contentHighlights: string[];
}

export const DOWNLOADS: DownloadData[] = [
  {
    slug: "service-brochure",
    titleJa: "MakeCareer Services Overview Brochure",
    descriptionJa:
      "A concise overview of all our services — staffing dispatch, factory outsourcing, and Specified Skills — including pricing guidance and coverage areas. A great starting point before your first consultation.",
    pages: "12 pages",
    category: "Service Guide",
    imageSrc: "/images/downloads/service-brochure-preview.jpg",
    contentHighlights: [
      "Service-by-service feature summary and industry coverage",
      "Indicative pricing structure",
      "Nationwide coverage map",
      "Frequently asked questions and answers",
    ],
  },
  {
    slug: "hiring-guide",
    titleJa: "The Complete Manufacturing Recruitment Guide",
    descriptionJa:
      "Everything a manufacturing HR manager needs to know — from sourcing job-ready talent to improving retention. Includes practical tips for reducing recruitment costs.",
    pages: "20 pages",
    category: "Hiring Guide",
    imageSrc: "/images/downloads/hiring-guide-preview.jpg",
    contentHighlights: [
      "Manufacturing recruitment trends — 2025 edition",
      "Comparison table: dispatch vs. outsourcing vs. direct hire",
      "Workforce design principles that improve retention",
      "Recruitment cost simulation methodology",
    ],
  },
  {
    slug: "specified-skills-guide",
    titleJa: "Specified Skills & Technical Intern Onboarding Guide",
    descriptionJa:
      "A step-by-step guide to onboarding foreign workers under Japan's Specified Skills and Technical Intern programmes — covering procedures, costs, and common pitfalls. Written for first-time employers.",
    pages: "16 pages",
    category: "Foreign Workers",
    imageSrc: "/images/downloads/specified-skills-guide-preview.jpg",
    contentHighlights: [
      "Specified Skills Type 1 vs. Type 2 comparison",
      "Intake flow: from application to first day on-site",
      "Indicative costs and budget planning",
      "Common problems and how to avoid them",
    ],
  },
  {
    slug: "dispatch-cost-calculator",
    titleJa: "Staffing Cost Calculator (Excel)",
    descriptionJa:
      "An easy-to-use Excel tool for calculating the total cost of using dispatch workers versus direct employment. A practical decision-making aid when evaluating your options.",
    pages: "Excel file",
    category: "Tools",
    imageSrc: "/images/downloads/cost-calculator-preview.jpg",
    contentHighlights: [
      "Dispatch cost vs. direct hire cost comparison worksheet",
      "Headcount and duration simulation by scenario",
      "Peak-period cost modelling",
      "Print-ready executive summary sheet",
    ],
  },
];

export function getDownloadBySlug(slug: string): DownloadData | undefined {
  return DOWNLOADS.find((d) => d.slug === slug);
}

export function getDownloadSlugs(): string[] {
  return DOWNLOADS.map((d) => d.slug);
}
