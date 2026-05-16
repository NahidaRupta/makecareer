export interface ServiceData {
  slug: string;
  iconKey: "Factory" | "ClipboardList" | "Globe" | "Wrench" | "Truck";
  titleJa: string;
  titleEn: string;
  taglineJa: string;
  descriptionJa: string;
  longDescriptionJa: string;
  features: string[];
  targetCompanies: string[];
  process: { titleJa: string; descriptionJa: string }[];
  faq: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: "haken",
    iconKey: "Factory",
    titleJa: "Manufacturing Staffing",
    titleEn: "Manufacturing Staffing",
    taglineJa: "Ready-to-deploy talent, next-day if needed",
    descriptionJa:
      "Line assembly, inspection, and production floor roles filled fast. Short-term to long-term — we flex to match your production schedule.",
    longDescriptionJa:
      "MakeCareer's manufacturing staffing service covers automotive, electronics, food, chemical, and a wide range of other sectors. With a pool of 5,000+ registered workers, we quickly match candidates to your required role, skill level, and location — from urgent cover to long-term headcount. After placement, a dedicated coordinator provides regular check-ins to keep your workforce stable.",
    features: [
      "Placement as fast as the next business day",
      "Candidates screened and matched by skill and experience",
      "92% retention rate, maintained through ongoing coordinator support",
      "Flexible scale-up during peak periods and scale-down in quiet seasons",
    ],
    targetCompanies: [
      "Manufacturers needing to respond quickly to sudden vacancies or ramp-ups",
      "Factories with significant seasonal or demand-driven staffing fluctuations",
      "Companies wanting a trial period before committing to direct hires",
      "High-mix, low-volume factories where line configurations change frequently",
    ],
    process: [
      {
        titleJa: "Consultation & Proposal",
        descriptionJa:
          "We gather your requirements — skill set, headcount, duration, and shift conditions — then propose the best staffing plan for your operation.",
      },
      {
        titleJa: "Candidate Matching",
        descriptionJa:
          "We screen our registered workforce and present shortlisted candidates with work histories and skills for your review before placement.",
      },
      {
        titleJa: "Placement & Follow-up",
        descriptionJa:
          "After workers start, we conduct regular check-ins and status reviews. Any issues are handled promptly so your line keeps running.",
      },
    ],
    faq: [
      {
        question: "How long does it take from request to first day on-site?",
        answer:
          "It depends on the requirements, but same-week placement is possible in many cases. Typically we can introduce candidates within 1–3 business days.",
      },
      {
        question: "Who directs the dispatch workers on the job?",
        answer:
          "In a dispatch arrangement, your company's supervisors issue instructions to the workers regarding tasks, hours, and location.",
      },
      {
        question: "Is there a maximum dispatch period?",
        answer:
          "Under Japanese law, the same worker can be dispatched to the same organisational unit for a maximum of three years. Please contact us for details on site-level limits.",
      },
    ],
    relatedSlugs: ["ukeoi", "maintenance"],
  },
  {
    slug: "ukeoi",
    iconKey: "ClipboardList",
    titleJa: "Factory Outsourcing",
    titleEn: "Factory Outsourcing",
    taglineJa: "Hand the entire production line to us",
    descriptionJa:
      "We take over part or all of your production line under a contract arrangement, handling quality and production management as a single, accountable partner.",
    longDescriptionJa:
      "In factory outsourcing, MakeCareer takes responsibility for executing a defined scope of manufacturing work. Our team manages its own workers — you don't need to direct them — which significantly reduces your supervisory overhead. We handle quality control, safety management, and production KPIs as an integrated package, freeing you to focus on core business while we continuously improve the line.",
    features: [
      "Full on-site management by MakeCareer — no direct supervision needed from your side",
      "Quality control, safety, and production management all included",
      "Convert fixed labour costs into a variable, output-linked expense",
      "Flexible worker adjustment as production volumes rise and fall",
    ],
    targetCompanies: [
      "Manufacturers that want to cut management overhead and focus on their core business",
      "Factories that need consistent quality on specific production processes",
      "Companies looking to outsource non-core operations",
      "Plants requiring flexible operations including night shifts and weekends",
    ],
    process: [
      {
        titleJa: "Site Visit & Process Analysis",
        descriptionJa:
          "We visit your facility to thoroughly understand the target processes, work procedures, and quality standards before committing to a scope.",
      },
      {
        titleJa: "Contract & Team Setup",
        descriptionJa:
          "We formalise the outsourcing contract and establish the on-site management structure, including a dedicated site manager and workers.",
      },
      {
        titleJa: "Operations & Continuous Improvement",
        descriptionJa:
          "After go-live, we share KPIs regularly and drive ongoing productivity and quality improvements as your long-term partner.",
      },
    ],
    faq: [
      {
        question: "What is the key difference between dispatch and outsourcing?",
        answer:
          "With dispatch, your company directs the workers. With outsourcing, MakeCareer manages them and delivers an agreed output. Outsourcing reduces your management burden and eliminates the risk of misclassified employment.",
      },
      {
        question: "What industries and processes do you cover?",
        answer:
          "We handle automotive, electronics, food, chemicals, plastics, and more. Processes include line assembly, inspection, packing, and logistics.",
      },
    ],
    relatedSlugs: ["haken", "ginoujisshu"],
  },
  {
    slug: "ginoujisshu",
    iconKey: "Globe",
    titleJa: "Specified Skills & Technical Intern",
    titleEn: "Specified Skills / Technical Intern",
    taglineJa: "End-to-end support for bringing international workers to Japan",
    descriptionJa:
      "Full-cycle support for foreign worker onboarding — from visa applications to on-the-job follow-up. We handle everything so you can focus on your factory.",
    longDescriptionJa:
      "As domestic labour shortages intensify, the Specified Skills and Technical Intern programmes are essential for manufacturing sustainability. MakeCareer provides a one-stop service covering residence status procedures, arrival logistics, housing arrangements, and Japanese language support. Our experienced team ensures a compliant, well-supported employment environment from day one.",
    features: [
      "End-to-end support: visa application, arrival, housing, and daily life assistance",
      "Coordination with registered support organisations to simplify paperwork",
      "Japanese language training and workplace orientation on arrival",
      "Compliant onboarding framework built to meet all regulatory requirements",
    ],
    targetCompanies: [
      "Manufacturers looking to supplement their workforce with foreign talent",
      "Companies taking on Specified Skills workers for the first time",
      "Factories that want daily-life support handled by a professional partner",
      "Employers considering transitioning Technical Interns to Specified Skills status",
    ],
    process: [
      {
        titleJa: "Intake Planning",
        descriptionJa:
          "We clarify the headcount, roles, nationalities, and duration you need, then recommend the most suitable programme (Specified Skills vs. Technical Intern).",
      },
      {
        titleJa: "Documentation & Arrival Support",
        descriptionJa:
          "We manage the residence status application, flight arrangements, and housing preparation — everything before the workers arrive.",
      },
      {
        titleJa: "Onboarding & Retention Support",
        descriptionJa:
          "After arrival, we provide Japanese language support and a daily-life help desk to keep workers settled, motivated, and on the job.",
      },
    ],
    faq: [
      {
        question: "What is the difference between Specified Skills and Technical Intern?",
        answer:
          "Technical Intern Training focuses on skills transfer (up to 5 years). Specified Skills Type 1 is capped at 5 years; Type 2 allows indefinite renewal. MakeCareer recommends the right programme based on your situation.",
      },
      {
        question: "What are the typical costs involved?",
        answer:
          "Costs include visa fees, flights, housing, and training. The total varies by nationality, headcount, and duration — please request a free quote.",
      },
      {
        question: "Which nationalities can you source?",
        answer:
          "We work with talent from Vietnam, the Philippines, Indonesia, Myanmar, Thailand, China, and other Asian countries.",
      },
    ],
    relatedSlugs: ["haken", "ukeoi"],
  },
  {
    slug: "maintenance",
    iconKey: "Wrench",
    titleJa: "Maintenance Staffing",
    titleEn: "Maintenance Staffing",
    taglineJa: "Specialists who keep your production equipment running",
    descriptionJa:
      "Certified mechanical and electrical maintenance technicians, placed to protect your uptime and prevent costly production stoppages.",
    longDescriptionJa:
      "Maintenance staff are the backbone of any production line. MakeCareer places specialists qualified in mechanical maintenance, electrical maintenance, and facilities management. From scheduled inspections to emergency breakdowns, our technicians minimise downtime risk and can also propose line improvements to reduce operating costs.",
    features: [
      "Large pool of workers with mechanical and electrical maintenance certifications",
      "Coverage from preventive maintenance to emergency breakdowns",
      "Improvement proposals to reduce equipment-related costs",
      "24/7 emergency response teams available on request",
    ],
    targetCompanies: [
      "Factories looking to reduce the risk of production stoppages from equipment failures",
      "Companies facing an ageing maintenance workforce with no succession plan",
      "Manufacturers that want to outsource maintenance and focus on production",
      "Sites introducing new equipment and needing specialist technicians",
    ],
    process: [
      {
        titleJa: "Equipment & Scope Review",
        descriptionJa:
          "We assess the equipment types, manufacturers, current condition, and the specific skills and certifications required.",
      },
      {
        titleJa: "Candidate Screening & Interview",
        descriptionJa:
          "We review certifications, hands-on experience, and past maintenance cases to present the most suitable candidates.",
      },
      {
        titleJa: "Placement & Monthly Reporting",
        descriptionJa:
          "After placement, we submit monthly work reports and equipment status updates to support ongoing improvement.",
      },
    ],
    faq: [
      {
        question: "Can I verify a candidate's certifications in advance?",
        answer:
          "Yes — we can provide evidence of qualifications such as Mechanical Maintenance Technician, Electrical Construction Engineer, and Hazardous Materials Handler before placement.",
      },
      {
        question: "Can you handle emergency call-outs?",
        answer:
          "We have dedicated emergency response teams and can arrange 24/7 coverage plans to minimise your downtime risk.",
      },
    ],
    relatedSlugs: ["haken", "ukeoi"],
  },
  {
    slug: "butsuryu",
    iconKey: "Truck",
    titleJa: "Logistics & Warehousing",
    titleEn: "Logistics & Warehousing",
    taglineJa: "Scale your warehouse team up or down — instantly",
    descriptionJa:
      "Picking, packing, inventory management, and forklift operation: we supply experienced warehouse workers who are ready to hit the ground running.",
    longDescriptionJa:
      "The growth of e-commerce and frequent small-batch deliveries means warehouse staffing demand has never been higher. MakeCareer supplies workers across all logistics functions — picking, packing, sorting, stocktaking, and forklift operation. When a peak period hits, our registered worker pool means we can respond fast, even at scale.",
    features: [
      "Full warehouse operations covered: picking, packing, sorting, and stocktaking",
      "Large pool of forklift-licensed operators (reach and counterbalance)",
      "Emergency scale-up for busy periods — same-day in some cases",
      "WMS and handheld terminal experience available on request",
    ],
    targetCompanies: [
      "E-commerce and mail-order businesses struggling with peak season demand",
      "Warehouses with high turnover that want to reduce recurring recruitment costs",
      "Companies with strongly seasonal products needing flexible headcount",
      "Logistics firms needing forklift operators at short notice",
    ],
    process: [
      {
        titleJa: "Volume & Peak Period Review",
        descriptionJa:
          "We discuss your seasonal patterns, specific tasks, and required skills to build an optimal staffing plan.",
      },
      {
        titleJa: "Candidate Selection & Placement",
        descriptionJa:
          "We screen for relevant experience, forklift licences, and physical suitability before confirming the placement.",
      },
      {
        titleJa: "Operations & Labour Management",
        descriptionJa:
          "MakeCareer handles attendance tracking and health and safety compliance so you can focus on the work.",
      },
    ],
    faq: [
      {
        question: "Can you supply forklift-licensed workers?",
        answer:
          "Yes — we have many registered workers who have completed forklift operation training. You can specify the licence type (reach, counterbalance, etc.) and we will match accordingly.",
      },
      {
        question: "Can workers cover night and early-morning shifts?",
        answer:
          "Many of our registered workers are available for night, early-morning, and weekend shifts. Please share your shift requirements and we will find the right people.",
      },
    ],
    relatedSlugs: ["haken", "ukeoi"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
