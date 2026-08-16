import type { MetadataRoute } from "next";
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
  "/reviews/",
  "/guide/",
  "/guide/houhou/",
  "/guide/cooling-off/",
  "/about/",
  "/contact/",
  "/privacy/",
  "/terms/",
  "/verification-policy/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified,
  }));
}
