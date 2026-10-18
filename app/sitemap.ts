import type { MetadataRoute } from "next";
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import { SITE_URL } from "./lib/site";

export const dynamic = "force-static";

// 全ルート（ページ追加・削除時は必ずここも同一コミットで更新すること）
const paths = [
  "/",
  "/ranking/",
  "/souba/",
  "/souba/hermes/",
  "/souba/louis-vuitton/",
  "/souba/chanel/",
  "/souba/rolex/",
  "/souba/omega/",
  "/souba/gucci/",
  "/souba/prada/",
  "/souba/celine/",
  "/souba/tiffany/",
  "/souba/cartier/",
  "/souba/dior/",
  "/souba/fendi/",
  "/souba/bottega-veneta/",
  "/souba/loewe/",
  "/souba/saint-laurent/",
  "/souba/balenciaga/",
  "/souba/goyard/",
  "/souba/bvlgari/",
  "/souba/tag-heuer/",
  "/souba/grand-seiko/",
  "/reviews/",
  "/reviews/brandoff/",
  "/reviews/ecostyle/",
  "/reviews/komehyo/",
  "/reviews/first-class/",
  "/reviews/kaitori-daikichi/",
  "/reviews/ikuraya/",
  "/reviews/librand/",
  "/reviews/reclo/",
  "/reviews/uriel/",
  "/reviews/tifana/",
  "/reviews/akinaya/",
  "/reviews/brandoule/",
  "/reviews/netoff/",
  "/reviews/kindal/",
  "/reviews/manekiya/",
  "/reviews/nanboya/",
  "/reviews/ribla/",
  "/reviews/the-gold/",
  "/guide/",
  "/guide/houhou/",
  "/guide/cooling-off/",
  "/guide/watch/",
  "/guide/bag/",
  "/guide/wallet/",
  "/guide/shoes/",
  "/guide/no-box/",
  "/guide/damaged/",
  "/guide/not-accepted/",
  "/about/",
  "/contact/",
  "/privacy/",
  "/terms/",
  "/verification-policy/",
];

// lastmod は「そのページの中身を作るファイル」の最終コミット日（ビルド時刻にしない）。
// 未コミットの変更があるときだけ今日の日付にする。
// 前方一致で足すデータファイル（長い接頭辞を先に書く）
const DATA: [string, string[]][] = [
  ["/reviews/", ["app/lib/reviews.ts"]],
  ["/reviews/*", ["app/lib/reviews.ts"]],
  ["/guide/watch/", ["app/lib/reviews.ts"]],
  ["/guide/bag/", ["app/lib/reviews.ts"]],
  ["/guide/wallet/", ["app/lib/itemSouba.ts", "app/lib/reviews.ts"]],
  ["/guide/shoes/", ["app/lib/itemSouba.ts", "app/lib/reviews.ts"]],
  ["/guide/no-box/", ["app/lib/dealerPolicies.ts"]],
  ["/guide/damaged/", ["app/lib/dealerPolicies.ts"]],
  ["/guide/not-accepted/", ["app/lib/dealerPolicies.ts"]],
];

function sourcesFor(p: string): string[] {
  const files: string[] = [];
  const dir = `app${p}`.replace(/\/$/, "") || "app";
  const parent = dir.slice(0, dir.lastIndexOf("/"));
  if (p === "/") files.push("app/page.tsx");
  else if (existsSync(dir)) {
    const hasChild = readdirSync(dir, { withFileTypes: true }).some((d) => d.isDirectory());
    files.push(hasChild ? `${dir}/page.tsx` : dir);
  } else if (existsSync(`${parent}/[slug]`)) files.push(`${parent}/[slug]`);
  const hit = DATA.find(([prefix]) => p === prefix || (prefix.endsWith("*") && p.startsWith(prefix.slice(0, -1)) && p !== prefix.slice(0, -1)));
  if (hit) files.push(...hit[1]);
  return files;
}

function lastModifiedFor(p: string): Date | undefined {
  const files = sourcesFor(p);
  if (!files.length) return undefined;
  try {
    const dirty = execFileSync("git", ["status", "--porcelain", "--", ...files], { encoding: "utf8" }).trim();
    if (dirty) return new Date();
    const iso = execFileSync("git", ["log", "-1", "--format=%cI", "--", ...files], { encoding: "utf8" }).trim();
    return iso ? new Date(iso) : undefined;
  } catch {
    return undefined;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: lastModifiedFor(p),
  }));
}
