import { SITE_NAME, OPERATOR } from "../lib/site";

export default function Footer() {
  const cols = [
    {
      title: "比較・相場",
      links: [
        { href: "/ranking/", label: "業者比較ランキング" },
        { href: "/souba/", label: "実売相場データ" },
        { href: "/reviews/", label: "業者レビュー一覧" },
      ],
    },
    {
      title: "売り方ガイド",
      links: [
        { href: "/guide/", label: "初めての方へ" },
        { href: "/guide/houhou/", label: "出張・宅配・店頭の違い" },
        { href: "/guide/cooling-off/", label: "訪問購入のクーリングオフ" },
        { href: "/guide/watch/", label: "腕時計を高く売る実務" },
        { href: "/guide/bag/", label: "バッグを高く売る実務" },
      ],
    },
    {
      title: "サイト情報",
      links: [
        { href: "/about/", label: "運営者情報" },
        { href: "/verification-policy/", label: "検証ポリシー" },
        { href: "/contact/", label: "お問い合わせ" },
        { href: "/privacy/", label: "プライバシーポリシー" },
        { href: "/terms/", label: "利用規約" },
      ],
    },
  ];
  return (
    <footer className="site-footer mt-20">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <p className="serif text-xl text-ivory">{SITE_NAME}</p>
            <p className="mt-1 text-[10px] tracking-[0.24em] text-gold-soft font-bold">
              BRAND KAITORI NAVI
            </p>
            <p className="mt-4 text-[0.82rem] leading-relaxed text-ivory/55">
              ブランド買取の比較情報メディアです。相場は実際の売買データ（出典・取得日つき）、業者情報は各社公式サイトの確認値のみを掲載し、架空の口コミ・体験談は作成しません。
            </p>
            <p className="mt-4 text-[0.74rem] text-ivory/40">
              運営: {OPERATOR}（情報メディアであり、買取サービスの提供事業者ではありません）
            </p>
          </div>
          {cols.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <p className="text-[0.7rem] font-bold tracking-[0.2em] text-gold-soft/80 mb-4">
                {c.title}
              </p>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <a className="footer-link" href={l.href}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-3 text-[0.72rem] text-ivory/40">
          <p>本サイトはプロモーション（PR）を含みます。広告の有無・報酬は評価や掲載順位に影響しません。</p>
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}</p>
        </div>
      </div>
    </footer>
  );
}
