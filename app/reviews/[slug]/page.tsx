import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "../../lib/site";
import { REVIEWS } from "../../lib/reviews";
import Breadcrumbs from "../../components/Breadcrumbs";

export function generateStaticParams() {
  return REVIEWS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = REVIEWS.find((x) => x.slug === slug);
  if (!r) return {};
  return {
    title: `${r.name}のブランド買取を公式情報で検証【${r.confirmedAt.replace(/(\d+年\d+月).*/, "$1")}確認】`,
    description: `${r.name}(${r.company})の買取方法・手数料・古物商許可を公式サイトで一次確認して整理。確認できなかった項目も正直に記載します。架空の口コミは掲載しません。`,
    alternates: { canonical: `${SITE_URL}/reviews/${r.slug}/` },
  };
}

const METHOD_LABELS = ["宅配", "出張", "店頭"] as const;

export default async function ReviewDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = REVIEWS.find((x) => x.slug === slug);
  if (!r) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "業者レビュー", item: `${SITE_URL}/reviews/` },
      { "@type": "ListItem", position: 3, name: r.name, item: `${SITE_URL}/reviews/${r.slug}/` },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs items={[{ label: "業者レビュー", href: "/reviews/" }, { label: r.name }]} />
          <p className="eyebrow mt-8 mb-4">REVIEW — VERIFIED FACTS</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            {r.name}のブランド買取を公式情報で検証
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            このページの情報は、{r.name}の公式サイトを当サイトが直接確認して整理したものです（確認日: {r.confirmedAt}）。伝聞や口コミサイトからの引用はしていません。確認できなかった項目は「確認できなかったこと」として正直に記載します。
          </p>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">公式サイトで確認できた基本情報</h2>
        <div className="overflow-x-auto">
          <table className="table-lux min-w-[640px] max-w-4xl">
            <tbody>
              <tr>
                <th className="w-44 text-left">サービス名</th>
                <td className="font-bold text-ink">{r.name}</td>
              </tr>
              <tr>
                <th className="text-left">運営会社</th>
                <td>{r.company}</td>
              </tr>
              <tr>
                <th className="text-left">古物商許可</th>
                <td>{r.license ?? "公式サイト上で確認できませんでした"}</td>
              </tr>
              <tr>
                <th className="text-left">買取方法</th>
                <td>
                  <span className="inline-flex flex-wrap gap-2">
                    {METHOD_LABELS.map((m) => (
                      <span
                        key={m}
                        className={
                          r.methods.includes(m)
                            ? "inline-block border border-gold px-3 py-1 text-[0.82rem] text-ink"
                            : "inline-block border border-line px-3 py-1 text-[0.82rem] text-muted line-through"
                        }
                      >
                        {m}
                      </span>
                    ))}
                  </span>
                  <span className="mt-2 block text-[0.78rem] text-muted">
                    公式サイトに明記があった方法のみ表示しています
                  </span>
                </td>
              </tr>
              <tr>
                <th className="text-left">主な取扱ジャンル</th>
                <td>{r.genres.join(" / ")}</td>
              </tr>
              <tr>
                <th className="text-left">店舗</th>
                <td>{r.storesNote ?? "公式サイト上で確認できませんでした"}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[0.8rem] text-muted">
          出典: {r.name}公式サイト（当サイト確認日 {r.confirmedAt}）。内容は変更される場合があります。査定前に必ず公式サイトで最新情報をご確認ください。
        </p>
      </section>

      {/* 手数料 */}
      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <div className="max-w-3xl">
            <h2 className="rule-gold text-2xl text-ink mb-6">手数料・費用の公式記載</h2>
            {r.fees ? (
              <p className="text-[0.95rem] leading-loose text-ink-soft">{r.fees}</p>
            ) : (
              <p className="text-[0.95rem] leading-loose text-ink-soft">
                手数料・費用の条件は公式サイト上で明確な記載を確認できませんでした。査定前に直接確認することをおすすめします。
              </p>
            )}
            <div className="note-box mt-8">
              <p className="font-bold text-ink mb-1">「無料」の範囲は必ず条件ごと確認を</p>
              <p>
                査定料が無料でも、キャンセル時の返送料や出張エリア外の扱いなど、条件によって費用が発生する場合があります。上記は確認日時点の公式記載の要約であり、実際の条件は申込み前に公式サイトでご確認ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <div className="max-w-3xl">
          <h2 className="rule-gold text-2xl text-ink mb-8">公式サイトで確認できた特徴</h2>
          <ul className="space-y-4">
            {r.facts.map((f) => (
              <li key={f} className="flex items-baseline gap-3 text-[0.92rem] leading-relaxed text-ink-soft">
                <span className="text-gold shrink-0">◆</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 確認できなかったこと */}
      {r.unconfirmed.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 pb-14 md:pb-18">
          <div className="max-w-3xl">
            <h2 className="rule-gold text-2xl text-ink mb-6">確認できなかったこと</h2>
            <p className="text-[0.9rem] leading-relaxed text-ink-soft mb-4">
              以下の項目は、確認日時点で公式サイト上に記載を見つけられませんでした。該当する条件が気になる場合は、査定申込み前に直接お問い合わせください。
            </p>
            <ul className="space-y-2">
              {r.unconfirmed.map((u) => (
                <li key={u} className="flex items-baseline gap-3 text-[0.92rem] text-ink-soft">
                  <span className="text-muted shrink-0">—</span>
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 向き・事前チェック */}
      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-lux p-7">
              <p className="eyebrow mb-3">FIT</p>
              <h2 className="text-lg text-ink mb-3">確認できた事実から言える「向いているケース」</h2>
              <p className="text-[0.9rem] leading-relaxed text-ink-soft">{r.fitFor}</p>
            </div>
            <div className="card-lux p-7">
              <p className="eyebrow mb-3">CHECK</p>
              <h2 className="text-lg text-ink mb-3">査定に出す前に確認しておきたい点</h2>
              <p className="text-[0.9rem] leading-relaxed text-ink-soft">{r.checkBefore}</p>
            </div>
          </div>
          <div className="note-box mt-8 max-w-3xl">
            <p className="font-bold text-ink mb-1">1社即決は避けてください</p>
            <p>
              どの業者でも、査定額は品物・時期・状態で変わります。実売相場で物差しを持ち、2〜3社の相見積もりで比べてから売り先を決めることをおすすめします。
            </p>
          </div>
        </div>
      </section>

      {/* CTA(felmat計測リンク受領後のみ描画) */}
      {r.affiliateUrl && (
        <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <div className="max-w-3xl">
            <a href={r.affiliateUrl} rel="sponsored nofollow" className="btn-gold">
              {r.name}の無料査定を申し込む（公式サイト）
            </a>
            <p className="mt-3 text-[0.78rem] text-muted">
              上記は広告リンク（PR）です。広告の有無は当サイトの検証内容に影響しません。
            </p>
          </div>
        </section>
      )}

      {/* 関連導線 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <div className="max-w-3xl">
          <h2 className="rule-gold text-2xl text-ink mb-6">あわせて使いたいページ</h2>
          <p className="text-[0.92rem] leading-relaxed text-ink-soft mb-8">
            査定額を判断する物差しとして、実際に売買が成立した価格のデータを公開しています。レビューは「候補を絞る道具」、相場データは「査定額を測る道具」としてお使いください。
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/souba/" className="btn-gold">実売相場データを見る</a>
            <a href="/reviews/" className="btn-line">業者レビュー一覧へ戻る</a>
            <a href="/verification-policy/" className="btn-line">検証ポリシー</a>
          </div>
        </div>
      </section>
    </main>
  );
}
