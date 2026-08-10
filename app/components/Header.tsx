import { SITE_NAME } from "../lib/site";

export default function Header() {
  const nav = [
    { href: "/ranking/", label: "業者比較" },
    { href: "/souba/", label: "実売相場" },
    { href: "/reviews/", label: "業者レビュー" },
    { href: "/guide/", label: "売り方ガイド" },
  ];
  return (
    <header className="site-header sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between gap-4">
        <a href="/" className="flex items-baseline gap-2.5 shrink-0">
          <span className="serif text-[1.35rem] leading-none text-ink">{SITE_NAME}</span>
          <span className="hidden sm:inline text-[10px] tracking-[0.24em] text-gold font-bold">
            BRAND KAITORI NAVI
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-7" aria-label="グローバルナビゲーション">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="nav-link text-[0.9rem] font-medium text-ink-soft">
              {n.label}
            </a>
          ))}
          <a href="/ranking/" className="btn-gold text-xs px-5 py-2.5">
            比較表を見る
          </a>
        </nav>
        <a href="/ranking/" className="btn-gold only-mobile text-xs px-4 py-2">
          比較表
        </a>
      </div>
      <div className="only-mobile overflow-x-auto border-t border-line bg-ivory">
        <div className="flex whitespace-nowrap px-4 py-2 gap-4">
          <a className="text-xs font-medium text-ink-soft" href="/">トップ</a>
          {nav.map((n) => (
            <a key={n.href} className="text-xs font-medium text-ink-soft" href={n.href}>
              {n.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
