export interface CaseStudyData {
  slug: string;
  industry: string;
  companyProfile: string;
  challenge: string;
  solution: string;
  stat: string;
  statLabel: string;
  fullChallenge: string;
  fullSolution: string;
  results: { label: string; value: string }[];
  quote?: { text: string; author: string; role: string };
  relatedSlugs: string[];
}

export const CASE_STUDIES: CaseStudyData[] = [
  {
    slug: "automotive-line-expansion",
    industry: "Automotive Parts",
    companyProfile: "Aichi Prefecture · ~500 employees",
    challenge:
      "A new production line needed 20 assembly workers urgently — faster than conventional hiring could deliver.",
    solution:
      "All 20 workers placed within 3 days. Pre-trained staff deployed to keep line start-up on schedule with zero delay.",
    stat: "3",
    statLabel: "days to place 20 workers",
    fullChallenge:
      "Company A, an automotive parts manufacturer, brought forward a new model line start-up by three months. The assembly process needed 20 experienced workers immediately. Job board postings and direct recruitment could not move fast enough, putting the production schedule at risk.",
    fullSolution:
      "MakeCareer assembled an immediate response team, screening registered workers for assembly experience and automotive parts backgrounds. Two days of pre-deployment training — safety induction and process orientation — were completed on site. By day three, all 20 workers were in position, and line utilisation exceeded 95% from the first week.",
    results: [
      { label: "Days to full placement", value: "3" },
      { label: "Workers placed", value: "20" },
      { label: "Line utilisation, week 1", value: "95%+" },
      { label: "Line start-up delays", value: "Zero" },
    ],
    quote: {
      text: "We honestly didn't expect 20 people to be ready so quickly. The pre-training was thorough and they were productive from day one.",
      author: "Head of Production Planning",
      role: "Automotive Parts Manufacturer — Company A",
    },
    relatedSlugs: ["foreign-worker-integration", "peak-season-logistics"],
  },
  {
    slug: "foreign-worker-integration",
    industry: "Electronics & Components",
    companyProfile: "Kanagawa Prefecture · ~300 employees",
    challenge:
      "The company wanted to bring in Specified Skills foreign workers but had no in-house expertise in visa procedures or daily-life support.",
    solution:
      "End-to-end support from visa application through housing and language training. 15 workers placed, 97% still employed after six months.",
    stat: "97",
    statLabel: "% retention rate after 6 months",
    fullChallenge:
      "Precision electronics manufacturer Company B was facing critical understaffing as domestic recruitment grew increasingly competitive. The company had explored the Specified Skills programme but lacked the internal resources to manage visa paperwork, housing arrangements, Japanese language training, and ongoing welfare support across the board.",
    fullSolution:
      "MakeCareer handled the entire onboarding pipeline for 15 Vietnamese workers under Specified Skills Type 1: residence status applications, flights, company dormitory allocation, and a two-week Japanese language and workplace orientation on arrival. Monthly one-to-one interviews with each worker allowed early identification and resolution of any concerns, virtually eliminating attrition.",
    results: [
      { label: "Workers onboarded", value: "15" },
      { label: "Retention after 6 months", value: "97%" },
      { label: "Production line coverage", value: "100%" },
      { label: "Reduction in in-house admin load", value: "40%" },
    ],
    quote: {
      text: "MakeCareer handled everything from paperwork to daily life support. The workers are diligent and have become indispensable to our operation.",
      author: "HR Manager",
      role: "Electronics Manufacturer — Company B",
    },
    relatedSlugs: ["automotive-line-expansion", "peak-season-logistics"],
  },
  {
    slug: "peak-season-logistics",
    industry: "Logistics & Warehousing",
    companyProfile: "Osaka Prefecture · peak-season surge operation",
    challenge:
      "50 additional picking staff were needed for the year-end peak — with only one week until the start date.",
    solution:
      "50 experienced workers sourced from our registered pool. Zero shipment delays throughout the entire 15-day peak period.",
    stat: "50",
    statLabel: "workers placed in under 1 week",
    fullChallenge:
      "Company C, a logistics provider for a major e-commerce platform, projected a shortfall of approximately 50 picking and packing workers as year-end orders surged. The deadline was just one week away. Multiple staffing agencies had already been approached but failed to meet the volume requirement.",
    fullSolution:
      "MakeCareer immediately prioritised registered workers with warehouse and handheld terminal experience. All 50 were confirmed within five days. A pre-deployment briefing on workflows was held, and experienced workers were designated as informal team leaders to reduce on-floor supervision pressure. Throughout the 15-day peak window, there were zero shipment delays.",
    results: [
      { label: "Days to full placement", value: "5" },
      { label: "Workers placed", value: "50" },
      { label: "Shipment delays during peak", value: "Zero" },
      { label: "Repeat engagement next year", value: "100%" },
    ],
    quote: {
      text: "Even with barely a week's notice, every single one of the 50 positions was filled. We'll absolutely be working with MakeCareer again next year.",
      author: "Warehouse Operations Manager",
      role: "Logistics Company — Company C",
    },
    relatedSlugs: ["automotive-line-expansion", "foreign-worker-integration"],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((c) => c.slug);
}
