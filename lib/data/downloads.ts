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
    titleJa: "MakeCareer サービス総合パンフレット",
    descriptionJa:
      "人材派遣・工場請負・特定技能など全サービスの概要、料金の目安、対応エリアをまとめた資料です。初めてのお問い合わせ前の概要把握にご活用ください。",
    pages: "全12ページ",
    category: "サービス概要",
    imageSrc: "/images/downloads/service-brochure-preview.jpg",
    contentHighlights: [
      "サービス別の特徴・対応業種一覧",
      "料金体系の目安（参考価格）",
      "全国の対応エリアマップ",
      "よくある質問とその回答",
    ],
  },
  {
    slug: "hiring-guide",
    titleJa: "製造業 人材採用完全ガイド",
    descriptionJa:
      "即戦力人材の確保から定着率向上まで、製造業の採用担当者が押さえるべきポイントを解説します。採用コスト削減の実践的なヒントも収録。",
    pages: "全20ページ",
    category: "採用ガイド",
    imageSrc: "/images/downloads/hiring-guide-preview.jpg",
    contentHighlights: [
      "製造業の採用トレンド2025年版",
      "派遣・請負・直接雇用の比較表",
      "定着率を高める配置設計の考え方",
      "採用コストシミュレーション方法",
    ],
  },
  {
    slug: "specified-skills-guide",
    titleJa: "特定技能・技能実習 受け入れ手引き",
    descriptionJa:
      "外国人材の受け入れに必要な手続き・費用・注意点を、ステップ別にわかりやすくまとめました。初めての受け入れ検討にも対応。",
    pages: "全16ページ",
    category: "外国人材",
    imageSrc: "/images/downloads/specified-skills-guide-preview.jpg",
    contentHighlights: [
      "特定技能1号・2号の制度比較",
      "受け入れフロー（申請〜就業開始）",
      "費用の目安とコスト試算方法",
      "よくあるトラブルと対処法",
    ],
  },
  {
    slug: "dispatch-cost-calculator",
    titleJa: "人材派遣コスト試算シート（Excel）",
    descriptionJa:
      "派遣スタッフ活用時の総コスト・直接雇用との比較を簡単に試算できるExcelシートです。採用検討時の判断材料にご活用ください。",
    pages: "Excel形式",
    category: "ツール",
    imageSrc: "/images/downloads/cost-calculator-preview.jpg",
    contentHighlights: [
      "派遣コスト vs 直接雇用コスト比較シート",
      "人数・期間別のシミュレーション",
      "繁忙期対応コストの試算機能",
      "プリントアウト用サマリーシート付き",
    ],
  },
];

export function getDownloadBySlug(slug: string): DownloadData | undefined {
  return DOWNLOADS.find((d) => d.slug === slug);
}

export function getDownloadSlugs(): string[] {
  return DOWNLOADS.map((d) => d.slug);
}
