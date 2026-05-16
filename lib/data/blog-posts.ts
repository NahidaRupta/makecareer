export interface BlogPost {
  slug: string;
  date: string;
  dateIso: string;
  category: string;
  titleJa: string;
  excerptJa: string;
  readMinutes: number;
  imageSrc: string;
  author: { name: string; role: string };
  content: { heading?: string; body: string }[];
  relatedSlugs: string[];
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "dispatch-vs-contract-2025",
    date: "8 May 2025",
    dateIso: "2025-05-08",
    category: "Staffing Basics",
    titleJa: "Dispatch vs. Outsourcing Explained — What Every Manufacturing HR Manager Needs to Know",
    excerptJa:
      "Dispatch and outsourcing may look similar on paper, but the legal, financial, and operational differences are significant. Here's how to choose the right model.",
    readMinutes: 8,
    imageSrc: "/images/blog/dispatch-vs-contract.jpg",
    author: { name: "Seiichi Tanaka", role: "Compliance Advisor" },
    content: [
      {
        heading: "The core difference: who gives the instructions?",
        body: "The most common question we hear from manufacturing HR teams is: 'Which is easier — dispatch or outsourcing?' The fundamental difference is where the chain of command sits. In dispatch, your company's supervisors direct the workers. In outsourcing, the staffing company (MakeCareer) takes responsibility for managing its own workers and delivering an agreed outcome.",
      },
      {
        heading: "Dispatch: advantages and things to watch",
        body: "Dispatch gives you day-to-day flexibility — workers follow your instructions so you can adapt quickly to process changes. The key constraints are: the same worker can only be dispatched to the same organisational unit for a maximum of three years, and you must comply with equal-pay obligations under Japan's same-work same-pay rules.",
      },
      {
        heading: "Outsourcing: advantages and things to watch",
        body: "Outsourcing reduces your management overhead and eliminates the risk of misclassified employment. Because MakeCareer takes full responsibility for the workers, your supervisors do not direct them. The important caveat: you must not give day-to-day instructions (on timing, methods, or location) to outsourced workers, as this constitutes illegal 'sham contracting' under Japanese law.",
      },
      {
        heading: "How to decide",
        body: "The decision hinges on two factors: how much daily supervision the work requires, and how much you want to reduce management overhead. If close, real-time direction is essential — choose dispatch. If you want to hand off an entire process — choose outsourcing. MakeCareer will help you analyse your situation and recommend the right structure.",
      },
    ],
    relatedSlugs: ["specified-skills-2025", "retention-rate-tips"],
    tags: ["staffing dispatch", "factory outsourcing", "compliance", "manufacturing"],
  },
  {
    slug: "specified-skills-2025",
    date: "22 April 2025",
    dateIso: "2025-04-22",
    category: "Foreign Workers",
    titleJa: "Transitioning to Specified Skills Type 2 — 2025 Updates and How Manufacturers Can Benefit",
    excerptJa:
      "Specified Skills Type 2 allows indefinite residency renewal. Here's what the latest 2025 rules mean for manufacturing businesses and how to prepare.",
    readMinutes: 10,
    imageSrc: "/images/blog/specified-skills-2025.jpg",
    author: { name: "Misaki Suzuki", role: "International Staffing Coordinator" },
    content: [
      {
        heading: "Type 1 vs. Type 2: what's the difference?",
        body: "Specified Skills Type 1 requires Japanese Language Proficiency Test N4 or above and a relevant skills test. The maximum stay is five years and family accompaniment is generally not permitted. Type 2 demands higher skills but allows indefinite stay renewals — effectively permanent residency — and permits family members to accompany the worker.",
      },
      {
        heading: "Type 2 in manufacturing (materials, industrial machinery, and electronics)",
        body: "Following a Cabinet decision in June 2022, manufacturing sectors including materials processing, industrial machinery, and electronics were added to the Type 2 programme. From 2023 the scope expanded further. Workers with five or more years of manufacturing experience can now transition to Type 2, providing a stable foundation for long-term employment.",
      },
      {
        heading: "Requirements and application process",
        body: "Moving from Type 1 to Type 2 requires passing the relevant skills test (Technical Intern Training Grade 3 completers may be exempt) and filing a residence status change application. Employers must ensure appropriate working conditions. MakeCareer's team supports the entire process, from requirement checks to submitting documentation.",
      },
      {
        heading: "Building a long-term employment environment",
        body: "Retaining Type 2 workers long-term requires more than paperwork — competitive pay, ongoing Japanese language support, and clear career pathways all matter. MakeCareer offers a post-placement follow-up programme designed to reduce attrition and build a more diverse, resilient workforce.",
      },
    ],
    relatedSlugs: ["dispatch-vs-contract-2025", "retention-rate-tips"],
    tags: ["specified skills", "foreign workers", "residence status", "manufacturing"],
  },
  {
    slug: "retention-rate-tips",
    date: "10 April 2025",
    dateIso: "2025-04-10",
    category: "Retention",
    titleJa: "5 Workplace Improvements That Boost Dispatch Worker Retention",
    excerptJa:
      "Retention starts with what happens after placement. From the welcome on day one to the three-month check-in, here are five practical steps that make a real difference.",
    readMinutes: 6,
    imageSrc: "/images/blog/retention-tips.jpg",
    author: { name: "Kenta Yamamoto", role: "Staffing Coordinator" },
    content: [
      {
        heading: "The critical window: the first 30 days",
        body: "Research shows that approximately 60% of dispatch worker departures happen within the first 30 days of placement. This is when workplace anxiety, interpersonal stress, and the challenge of learning new processes all converge. Close attention during this window has an outsized impact on long-term retention.",
      },
      {
        heading: "Tip 1: Make the first day count",
        body: "A warm welcome sets the tone. Have someone meet the worker at the factory entrance, walk them through the basics — break rooms, restrooms, safety procedures — and introduce them to the people they'll be working alongside. Feeling included on day one reduces early dropout significantly.",
      },
      {
        heading: "Tip 2: Schedule a one-week and one-month check-in",
        body: "MakeCareer coordinators conduct individual check-ins at the one-week and one-month marks. These conversations surface concerns — about the work, team dynamics, or physical demands — that workers might not raise with supervisors directly. Early detection means early resolution.",
      },
      {
        heading: "Tip 3: Invest in clear work instructions",
        body: "Verbal explanations alone lead to inconsistent understanding. Photo- and diagram-based standard operating procedures accelerate learning and reduce the anxiety of not knowing what to do. For foreign workers, multilingual SOPs are particularly effective.",
      },
      {
        heading: "Tip 4: Build early wins into the work design",
        body: "Start new workers on tasks where success is achievable, then increase complexity progressively. Earning a sense of accomplishment early on keeps motivation high and translates directly into better retention. MakeCareer pre-assesses aptitude before placement to help design a sensible onboarding workflow.",
      },
      {
        heading: "Tip 5: Conduct a candid three-month review",
        body: "At the three-month mark, workers have enough context to give you objective feedback on the environment. A structured conversation at this point uncovers improvement opportunities and — if acted on — signals that their wellbeing matters, reinforcing commitment for the long term.",
      },
    ],
    relatedSlugs: ["dispatch-vs-contract-2025", "specified-skills-2025"],
    tags: ["retention", "workforce management", "manufacturing", "dispatch workers"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogPostSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
