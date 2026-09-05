// サイト共通定数 — ドメイン確定時はここ1箇所を変更すれば全ページに反映される
export const SITE_URL = "https://brandkaitoridb-deploy.pages.dev"; // 開発環境URL(独自ドメイン確定後に差し替え)
export const SITE_NAME = "ブランド買取ナビ";
export const SITE_TAGLINE = "実売データで選ぶブランド買取比較";
export const OPERATOR = "株式会社MediaX";

// felmat案件（未提携・計測リンク受領後に url を差し替える。受領までCTA非表示）
// affiliateUrl が null の間はCTAを描画しない＝生URL掲載を防ぐ
export type Partner = {
  slug: string;
  name: string;
  company: string;
  affiliateUrl: string | null;
};
