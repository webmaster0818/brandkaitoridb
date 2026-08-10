import type { Metadata } from "next";
import { Noto_Sans_JP, Zen_Old_Mincho } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SITE_URL, SITE_NAME, SITE_TAGLINE } from "./lib/site";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const zenOldMincho = Zen_Old_Mincho({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-zen-old-mincho",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME}｜${SITE_TAGLINE}`,
    template: `%s｜${SITE_NAME}`,
  },
  description:
    "ブランド品（バッグ・財布・時計・ジュエリー）の買取業者を、実際の売買データと公式確認情報で正直に比較。相場の実売レンジ、業者ごとの買取方法、売る前の準備まで。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${zenOldMincho.variable} antialiased`}>
        <Header />
        <p className="bg-ivory-deep border-b border-line text-center text-[11px] text-muted py-1 px-4">
          本サイトはプロモーション（PR）を含みます。
        </p>
        {children}
        <Footer />
      </body>
    </html>
  );
}
