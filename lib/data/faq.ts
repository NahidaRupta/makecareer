export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "general",
    label: "About Our Services",
    items: [
      {
        question: "Which industries and job types does MakeCareer cover?",
        answer:
          "We cover automotive, electronics, food processing, chemicals, plastics, logistics, and warehousing, among others. Job types include line assembly, inspection, packing, equipment maintenance, and forklift operation.",
      },
      {
        question: "Which areas of Japan do you operate in?",
        answer:
          "We operate across all 47 prefectures. Our main offices are in Nagoya (head office), Tokyo, Osaka, and Fukuoka, but we have placement experience throughout Japan's major manufacturing regions. Contact us to discuss your location.",
      },
      {
        question: "We've never used a staffing agency before. Where do we start?",
        answer:
          "Simply call us on 0120-000-000 or send an enquiry via our contact form. A dedicated consultant will listen to your needs and walk you through the options and costs — no pressure, no obligation.",
      },
      {
        question: "What is the difference between dispatch, outsourcing, and direct placement?",
        answer:
          "Dispatch means workers operate under your direction. Outsourcing means MakeCareer manages the workers and delivers an agreed output — your team doesn't direct them directly. Direct placement is a matching service that results in the worker being hired directly by your company. Our team will explain the pros and cons of each.",
      },
    ],
  },
  {
    id: "for-companies",
    label: "For Employers",
    items: [
      {
        question: "How quickly can workers start after we place a request?",
        answer:
          "It depends on the skills and headcount required, but we have placed workers as early as the next business day. Typically, introductions happen within 1–3 business days. For peak periods, we recommend contacting us as early as possible.",
      },
      {
        question: "Can we review a candidate's skills and experience before they start?",
        answer:
          "Yes — we provide work histories, qualifications, and relevant experience before placement. Pre-placement interviews can also be arranged for direct placement roles.",
      },
      {
        question: "What happens if a dispatch worker leaves?",
        answer:
          "We arrange a replacement promptly. Our regular check-ins are designed to catch issues early, minimising the likelihood of sudden departures in the first place.",
      },
      {
        question: "How is pricing structured?",
        answer:
          "Dispatch pricing is based on an hourly rate that reflects the role, skills, and duration. We will provide a transparent quote for your specific requirements at no cost.",
      },
      {
        question: "We're thinking about hiring foreign workers for the first time. What's the first step?",
        answer:
          "Start by sharing your current staffing situation, the roles you need, and your housing availability. We'll explain the relevant programmes and put together a plan tailored to your business. Free consultations are available regularly.",
      },
    ],
  },
  {
    id: "for-jobseekers",
    label: "For Job Seekers",
    items: [
      {
        question: "How long does it take from registration to starting work?",
        answer:
          "In some cases, you can start within three days of registering. Share your preferred role, location, and start date and we'll give you a realistic timeline.",
      },
      {
        question: "Can I apply if I have no manufacturing experience?",
        answer:
          "Absolutely. We have many roles that welcome first-timers. A dedicated coordinator will support you every step of the way.",
      },
      {
        question: "Is accommodation available?",
        answer:
          "Many of our positions come with company housing (free or heavily subsidised), and some include a moving allowance. Ask us about the options in your area.",
      },
      {
        question: "What are the pay and benefits like for dispatch workers?",
        answer:
          "MakeCareer pays your wages directly. Social insurance, paid leave, and various allowances are all included. Your coordinator checks in regularly so you always have someone to turn to if something comes up.",
      },
      {
        question: "Can I apply if I am not Japanese?",
        answer:
          "Yes, provided you hold a work-eligible residence status. We welcome applicants on Specified Skills and Technical Intern visas. For those less confident in Japanese, we offer multilingual support in Vietnamese, English, and more.",
      },
    ],
  },
  {
    id: "contract",
    label: "Pricing & Contracts",
    items: [
      {
        question: "Is a cost estimate free?",
        answer:
          "Yes, all estimates are completely free. Share your requirements and we will provide a detailed breakdown.",
      },
      {
        question: "Is there a minimum contract length?",
        answer:
          "For dispatch, single-day spot placements are possible. Longer contracts may qualify for preferential rates — ask us for details.",
      },
      {
        question: "What is the process from signing the contract to work starting?",
        answer:
          "The typical flow is: consultation → estimate → contract → candidate selection → pre-start confirmation → first day. The whole process usually takes 1–5 business days.",
      },
      {
        question: "Can we adjust headcount mid-contract?",
        answer:
          "Yes — scaling up for a busy period or scaling down in quieter months is straightforward. Please give us as much notice as possible so we can plan accordingly.",
      },
    ],
  },
];
