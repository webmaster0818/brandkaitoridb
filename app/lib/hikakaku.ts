// 第三者サイト（ヒカカク！）の口コミ評点
// 2026-11-16 に hikakaku.com の各社ページを直接確認して取得。
// 評点・件数はページ内の構造化データ（ratingValue / ratingCount）の値。
// 口コミ本文は著作権が投稿者にあるため転載せず、評点・件数・出典リンクのみを掲載する。
// 掲載しない社は reason に理由を書く（当サイトの運営会社記載と一致を確認できない社・
// 対象分野が違うページ・口コミ0件の社は載せない）。

export const HIKAKAKU_CHECKED_AT = "2026年11月16日";

export type HikakakuEntry = {
  /** ヒカカク！側のページ名（当サイトの表記と違う場合があるためそのまま載せる） */
  listing: string;
  /** hikakaku.com の会社ページID */
  id: string;
  /** ratingValue（5点満点） */
  score: string;
  /** ratingCount */
  count: number;
};

export const HIKAKAKU: Record<string, HikakakuEntry> = {
  brandoff: { listing: "ブランドオフ", id: "157", score: "3.38", count: 24 },
  ecostyle: { listing: "エコスタイル", id: "852", score: "2.81", count: 139 },
  komehyo: { listing: "コメ兵", id: "106", score: "2.91", count: 167 },
  "kaitori-daikichi": { listing: "買取大吉", id: "613", score: "3.83", count: 1209 },
  reclo: { listing: "RECLO", id: "8315", score: "2.67", count: 3 },
  uriel: { listing: "ウリエル", id: "23566", score: "2.67", count: 3 },
  brandoule: { listing: "ブランドゥール", id: "260", score: "3.67", count: 3 },
  kindal: { listing: "kindal(カインドオル)", id: "3618", score: "3.67", count: 3 },
  manekiya: { listing: "まねきや", id: "1857", score: "3.22", count: 60 },
  nanboya: { listing: "なんぼや", id: "117", score: "1.83", count: 480 },
  "the-gold": { listing: "ザ・ゴールド（THE GOLD）", id: "1102", score: "2.33", count: 87 },
};

/** 評点を載せない社と、その理由（読者に理由まで見せる） */
export const HIKAKAKU_NONE: Record<string, string> = {
  tifana:
    "ヒカカク！には「リサイクルショップ ティファナ」のページがありますが、運営会社が当ページ記載の会社と同一であることを確認できなかったため、評点は掲載していません。",
  netoff:
    "ヒカカク！のページは「ネットオフ（家電）」で家電買取を対象にしたものでした。ブランド品の評価とは対象が違うため掲載していません。",
  "first-class":
    "ヒカカク！には「FIRSTCLASS (ファーストクラス)」のページがありますが、口コミが1件のみで傾向と言える件数ではなく、運営会社の一致も確認できなかったため掲載していません。",
  akinaya: "ヒカカク！に当社のページを確認できませんでした。",
  librand: "ヒカカク！に当社のページを確認できませんでした。",
  ikuraya:
    "ヒカカク！のページは「いくらや 東武宇都宮駅前店」など店舗単位で、確認した4店はいずれも口コミ0件でした。会社全体の評点は存在しないため掲載していません。",
  ribla: "ヒカカク！にページはありますが、口コミ0件のため評点がありません。",
};
