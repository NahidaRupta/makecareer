export type SeminarFormat = "オンライン" | "会場" | "ハイブリッド";

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
    date: "2025年6月5日（木）",
    dateIso: "2025-06-05",
    time: "14:00〜15:30",
    titleJa: "【無料セミナー】製造業の人材派遣 基礎と活用法",
    descriptionJa:
      "人材派遣の仕組みをゼロから解説。派遣と請負の違い、費用感、よくある失敗パターンまで、初めて派遣を検討する採用担当者向けの内容です。",
    format: "オンライン",
    location: "Zoom開催",
    targetJa: "製造業の採用・人事担当者様（初めて派遣を検討される方歓迎）",
    spotsTotal: 30,
    spotsLeft: 12,
    agenda: [
      { time: "14:00", titleJa: "人材派遣の基礎知識（派遣・請負・紹介の違い）" },
      { time: "14:30", titleJa: "製造業での活用事例 3社紹介" },
      { time: "15:00", titleJa: "費用感・手続きの流れ" },
      { time: "15:20", titleJa: "質疑応答" },
    ],
    speaker: {
      name: "田中 誠一",
      role: "MakeCareer シニアコンサルタント（製造業専門）",
    },
  },
  {
    slug: "2025-06-ginoujisshu-guide",
    date: "2025年6月18日（水）",
    dateIso: "2025-06-18",
    time: "13:00〜14:30",
    titleJa: "特定技能・技能実習 受け入れ完全ガイド",
    descriptionJa:
      "特定技能1号・2号の制度解説から、受け入れフロー・費用・よくあるトラブルまで実践的な内容を凝縮。外国人材受け入れを検討中の企業様に最適なセミナーです。",
    format: "ハイブリッド",
    location: "名古屋本社 + Zoom",
    targetJa: "外国人材の受け入れを検討している製造業・物流業の担当者様",
    spotsTotal: 20,
    spotsLeft: 5,
    agenda: [
      { time: "13:00", titleJa: "特定技能1号・2号の制度解説と2025年最新情報" },
      { time: "13:30", titleJa: "受け入れフロー（申請〜入国〜就業）の全体像" },
      { time: "14:00", titleJa: "費用・よくあるトラブル事例と対処法" },
      { time: "14:20", titleJa: "質疑応答・個別相談" },
    ],
    speaker: {
      name: "鈴木 美咲",
      role: "MakeCareer 外国人材部門 マネージャー",
    },
  },
  {
    slug: "2025-07-ukeoi-cost",
    date: "2025年7月10日（木）",
    dateIso: "2025-07-10",
    time: "15:00〜16:30",
    titleJa: "工場請負でコスト最適化 ― 成功事例から学ぶ",
    descriptionJa:
      "工場請負の仕組みと、コスト削減・品質安定に成功した3社の事例を詳解。派遣との違い・切り替えのタイミングと注意点も解説します。",
    format: "会場",
    location: "大阪ビジネスパーク セミナールーム（最寄り：大阪城北詰駅）",
    targetJa: "製造ライン効率化・コスト削減を検討中の生産管理・工場長様",
    spotsTotal: 25,
    spotsLeft: 18,
    agenda: [
      { time: "15:00", titleJa: "工場請負の仕組みと派遣との違い" },
      { time: "15:30", titleJa: "コスト削減に成功した3社の事例紹介" },
      { time: "16:00", titleJa: "切り替えのタイミングと注意点" },
      { time: "16:20", titleJa: "質疑応答・名刺交換" },
    ],
    speaker: {
      name: "山本 健太",
      role: "MakeCareer 事業推進部 部長",
    },
  },
];

export function getSeminarBySlug(slug: string): SeminarData | undefined {
  return SEMINARS.find((s) => s.slug === slug);
}

export function getSeminarSlugs(): string[] {
  return SEMINARS.map((s) => s.slug);
}
