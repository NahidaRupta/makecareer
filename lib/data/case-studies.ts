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
    industry: "自動車部品製造",
    companyProfile: "愛知県・従業員500名規模",
    challenge:
      "新ラインの立ち上げで急遽20名の組立スタッフが必要になったが、通常の採用では間に合わなかった。",
    solution:
      "3日以内に20名を手配。事前研修済みスタッフを配置し、ライン稼働率を落とさずに新体制へ移行。",
    stat: "3",
    statLabel: "日以内に20名配置完了",
    fullChallenge:
      "自動車部品メーカーA社様は、新型車のモデルチェンジに伴う新ラインの立ち上げを急遽決定しました。当初の計画より3ヶ月前倒しでの稼働開始が必要となり、組立工程に20名の即戦力スタッフを確保しなければなりませんでした。ハローワーク求人や自社採用では対応スピードが追いつかず、生産スケジュールのリスクが生じていました。",
    fullSolution:
      "MakeCareerは即日対応チームを編成し、登録スタッフの中から組立経験者・自動車部品経験者を優先スクリーニング。2日間でプレ研修（安全教育・作業手順確認）を実施し、3日目には20名全員が現場配置となりました。現場管理者との連携を密にし、初週から稼働率95%以上を達成しました。",
    results: [
      { label: "配置完了日数", value: "3日" },
      { label: "配置人数", value: "20名" },
      { label: "初週稼働率", value: "95%以上" },
      { label: "ライン立ち上げ遅延", value: "ゼロ" },
    ],
    quote: {
      text: "まさかこの短期間で20名を揃えられるとは思いませんでした。事前研修も徹底されており、初日からスムーズに稼働できました。",
      author: "生産管理部長",
      role: "自動車部品メーカー A社",
    },
    relatedSlugs: ["foreign-worker-integration", "peak-season-logistics"],
  },
  {
    slug: "foreign-worker-integration",
    industry: "電機・電子部品",
    companyProfile: "神奈川県・従業員300名規模",
    challenge:
      "国内人材不足を補うため特定技能外国人材の受け入れを検討したが、ビザ申請や生活支援のノウハウがなかった。",
    solution:
      "ビザ申請〜入寮〜日本語サポートまで一括支援。半年間で15名の特定技能人材が安定稼働。",
    stat: "97",
    statLabel: "%の就業継続率を達成",
    fullChallenge:
      "精密電子部品を製造するB社様では、国内採用市場の競争激化により人員不足が深刻化。生産能力の維持に不安を感じていました。特定技能制度の活用を検討していましたが、在留資格の申請手続き・住居手配・日本語教育・生活サポートなど、多岐にわたる準備に社内リソースが追いつかない状況でした。",
    fullSolution:
      "MakeCareerは特定技能1号の受け入れ計画から入国後の生活定着まで、ワンストップでサポートしました。ベトナム人材15名の在留資格申請・航空券手配・社員寮の確保を行い、入国後2週間の日本語・職場オリエンテーションを実施。就業後も月次面談を行い、生活上の悩みを早期に把握することで離職を防ぎました。",
    results: [
      { label: "受け入れ人数", value: "15名" },
      { label: "就業継続率（半年後）", value: "97%" },
      { label: "生産ラインカバー率", value: "100%" },
      { label: "社内管理工数", value: "40%削減" },
    ],
    quote: {
      text: "手続きから生活サポートまでMakeCareerさんに任せきりで助かりました。スタッフも真面目で、今では欠かせない戦力です。",
      author: "人事部マネージャー",
      role: "電機・電子部品メーカー B社",
    },
    relatedSlugs: ["automotive-line-expansion", "peak-season-logistics"],
  },
  {
    slug: "peak-season-logistics",
    industry: "物流・倉庫",
    companyProfile: "大阪府・繁忙期スポット対応",
    challenge:
      "年末繁忙期の倉庫作業でピッキングスタッフが50名不足。直前1週間での手配が求められた。",
    solution:
      "登録スタッフプールから即戦力50名を手配。繁忙期ピーク中の出荷遅延ゼロを達成。",
    stat: "50",
    statLabel: "名を1週間で緊急手配",
    fullChallenge:
      "大手ECプラットフォームの物流を担うC社様では、年末の注文急増により倉庫内のピッキング・梱包スタッフが約50名不足することが判明。繁忙期直前の1週間という厳しい期限の中で、経験者を大量に確保する必要がありました。複数の人材会社に依頼したものの、必要数を満たせない状況でした。",
    fullSolution:
      "MakeCareerは即日、登録スタッフプールから倉庫作業経験者・ハンディターミナル使用経験者を優先的にリストアップ。5日間で50名全員の配置を完了しました。配置前に作業フローの事前説明会を実施し、現場のリーダー格スタッフを選定することで指導負担も軽減しました。繁忙期ピーク15日間を通じて出荷遅延ゼロを実現しました。",
    results: [
      { label: "配置完了日数", value: "5日" },
      { label: "配置人数", value: "50名" },
      { label: "ピーク期間中の出荷遅延", value: "ゼロ" },
      { label: "翌年リピート率", value: "100%" },
    ],
    quote: {
      text: "繁忙期ギリギリに依頼したにも関わらず、50名全員をきっちり揃えてもらいました。来年以降もお願いしたいです。",
      author: "倉庫運営マネージャー",
      role: "物流会社 C社",
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
