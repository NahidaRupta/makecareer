const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://makecareer.jp";

function layout(body: string): string {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>MakeCareer</title>
<style>
  body { margin:0; padding:0; background:#f1f5f9; font-family:'Helvetica Neue',Arial,sans-serif; }
  .wrap { max-width:600px; margin:32px auto; background:#fff; border-radius:12px; overflow:hidden; }
  .header { background:#0a1628; padding:28px 32px; }
  .header-logo { color:#fff; font-size:22px; font-weight:900; letter-spacing:-0.5px; }
  .header-logo span { color:#d97706; }
  .content { padding:36px 32px; }
  h1 { margin:0 0 16px; font-size:20px; color:#0a1628; font-weight:800; }
  p { margin:0 0 14px; font-size:14px; color:#475569; line-height:1.8; }
  .btn { display:inline-block; background:#d97706; color:#fff !important; text-decoration:none; font-weight:700; font-size:14px; padding:14px 28px; border-radius:8px; margin:16px 0; }
  .divider { border:none; border-top:1px solid #e2e8f0; margin:24px 0; }
  .box { background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:20px; margin:20px 0; }
  .box-label { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:#94a3b8; margin:0 0 8px; }
  .box-value { font-size:14px; color:#0a1628; font-weight:600; margin:0; }
  .footer { background:#f8fafc; padding:20px 32px; border-top:1px solid #e2e8f0; }
  .footer p { font-size:11px; color:#94a3b8; margin:0; line-height:1.6; }
</style>
</head>
<body>
<div class="wrap">
  <div class="header">
    <div class="header-logo">Make<span>Career</span></div>
  </div>
  <div class="content">${body}</div>
  <div class="footer">
    <p>株式会社MakeCareer | 愛知県名古屋市中村区名駅四丁目1-1</p>
    <p>このメールは自動送信されています。返信はお受けできません。</p>
    <p>お問い合わせは <a href="${BASE_URL}/contact" style="color:#2b5bb8;">${BASE_URL}/contact</a> よりお願いします。</p>
  </div>
</div>
</body>
</html>`;
}

export function contactConfirmationHtml(name: string): string {
  return layout(`
    <h1>${name} 様</h1>
    <p>この度はMakeCareerへお問い合わせいただき、誠にありがとうございます。</p>
    <p>担当コンサルタントより、<strong>1営業日以内</strong>にご連絡いたします。しばらくお待ちください。</p>
    <hr class="divider" />
    <p>お急ぎの場合は、下記のフリーダイヤルまでお電話ください。</p>
    <div class="box">
      <p class="box-label">フリーダイヤル</p>
      <p class="box-value">0120-000-000（平日 9:00〜18:00）</p>
    </div>
    <a class="btn" href="${BASE_URL}/faq">よくあるご質問を見る</a>
  `);
}

export function contactNotificationHtml(data: {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  serviceInterest?: string;
  message: string;
}): string {
  return layout(`
    <h1>新しいお問い合わせが届きました</h1>
    <div class="box">
      <p class="box-label">お名前</p><p class="box-value">${data.name}</p>
    </div>
    ${data.company ? `<div class="box"><p class="box-label">会社名</p><p class="box-value">${data.company}</p></div>` : ""}
    <div class="box">
      <p class="box-label">メールアドレス</p><p class="box-value">${data.email}</p>
    </div>
    ${data.phone ? `<div class="box"><p class="box-label">電話番号</p><p class="box-value">${data.phone}</p></div>` : ""}
    ${data.serviceInterest ? `<div class="box"><p class="box-label">ご興味のあるサービス</p><p class="box-value">${data.serviceInterest}</p></div>` : ""}
    <div class="box">
      <p class="box-label">お問い合わせ内容</p>
      <p class="box-value" style="white-space:pre-wrap;">${data.message}</p>
    </div>
    <a class="btn" href="mailto:${data.email}">返信する</a>
  `);
}

export function downloadConfirmationHtml(name: string, resourceTitle: string): string {
  return layout(`
    <h1>${name} 様</h1>
    <p>この度は資料をご請求いただき、ありがとうございます。</p>
    <div class="box">
      <p class="box-label">ご請求資料</p>
      <p class="box-value">${resourceTitle}</p>
    </div>
    <p>資料は下記のボタンよりダウンロードいただけます。リンクの有効期限は7日間です。</p>
    <a class="btn" href="${BASE_URL}/downloads">資料をダウンロードする</a>
    <hr class="divider" />
    <p>他にもお役立ち資料を多数ご用意しております。ぜひご活用ください。</p>
  `);
}

export function downloadNotificationHtml(data: {
  name: string;
  email: string;
  resourceSlug: string;
}): string {
  return layout(`
    <h1>新しいダウンロードリクエスト</h1>
    <div class="box">
      <p class="box-label">お名前</p><p class="box-value">${data.name}</p>
    </div>
    <div class="box">
      <p class="box-label">メールアドレス</p><p class="box-value">${data.email}</p>
    </div>
    <div class="box">
      <p class="box-label">資料スラッグ</p><p class="box-value">${data.resourceSlug}</p>
    </div>
  `);
}

export function seminarConfirmationHtml(data: {
  name: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  eventFormat: string;
  eventLocation: string;
}): string {
  return layout(`
    <h1>${data.name} 様</h1>
    <p>この度はMakeCareerセミナーへのお申し込みありがとうございます。以下の内容で受け付けました。</p>
    <div class="box">
      <p class="box-label">セミナー名</p><p class="box-value">${data.eventName}</p>
    </div>
    <div class="box">
      <p class="box-label">開催日時</p><p class="box-value">${data.eventDate} ${data.eventTime}</p>
    </div>
    <div class="box">
      <p class="box-label">形式</p><p class="box-value">${data.eventFormat}</p>
    </div>
    <div class="box">
      <p class="box-label">会場・接続先</p><p class="box-value">${data.eventLocation}</p>
    </div>
    <p>オンライン開催の場合、開催前日までにZoom接続URLをお送りします。</p>
    <hr class="divider" />
    <p>ご不明な点は下記よりお問い合わせください。</p>
    <a class="btn" href="${BASE_URL}/contact">お問い合わせ</a>
  `);
}

export function seminarNotificationHtml(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  eventName: string;
  eventSlug: string;
}): string {
  return layout(`
    <h1>新しいセミナー申し込みが届きました</h1>
    <div class="box">
      <p class="box-label">セミナー</p><p class="box-value">${data.eventName}</p>
    </div>
    <div class="box">
      <p class="box-label">お名前</p><p class="box-value">${data.name}</p>
    </div>
    <div class="box">
      <p class="box-label">メールアドレス</p><p class="box-value">${data.email}</p>
    </div>
    ${data.company ? `<div class="box"><p class="box-label">会社名</p><p class="box-value">${data.company}</p></div>` : ""}
    ${data.phone ? `<div class="box"><p class="box-label">電話番号</p><p class="box-value">${data.phone}</p></div>` : ""}
  `);
}
