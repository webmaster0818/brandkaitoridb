import type { ReactNode } from "react";
import { SITE_URL } from "../lib/site";
import Breadcrumbs from "./Breadcrumbs";

export type Faq = { q: string; a: string };

/**
 * 売り方ガイド配下の共通シェル(パンくず+BreadcrumbList/FAQPage schema+ヒーロー+FAQ+末尾導線)。
 * 本文は children に各ページ固有のsectionを渡す。
 */
export default function GuideShell({
  path,
  eyebrow,
  crumb,
  title,
  lead,
  faqs,
  related,
  children,
}: {
  path: string; // 例 "/guide/no-box/"
  eyebrow: string;
  crumb: string;
  title: string;
  lead: string;
  faqs: Faq[];
  related: { href: string; label: string; primary?: boolean }[];
  children: ReactNode;
}) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "売り方ガイド", item: `${SITE_URL}/guide/` },
      { "@type": "ListItem", position: 3, name: crumb, item: `${SITE_URL}${path}` },
    ],
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs items={[{ label: "売り方ガイド", href: "/guide/" }, { label: crumb }]} />
          <p className="eyebrow mt-8 mb-4">{eyebrow}</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">{title}</h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">{lead}</p>
        </div>
      </section>

      {children}

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">よくある質問</h2>
        <div className="max-w-3xl">
          {faqs.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>{f.q}</summary>
              <div className="faq-body">{f.a}</div>
            </details>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          {related.map((r) => (
            <a key={r.href} href={r.href} className={r.primary ? "btn-gold" : "btn-line"}>
              {r.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
