import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import { REVIEWS } from "../../lib/reviews";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "ブランドバッグを高く売るための実務ガイド",
  description:
    "ブランドバッグを売る前に確認したい付属品・刻印（シリアル）・状態・モデルとサイズの扱いを整理。エルメス・ルイヴィトン・シャネル・ディオール・ロエベなど13ブランドの実売相場データと、バッグを公式に取り扱う業者レビューへの導線つき。",
  alternates: { canonical: `${SITE_URL}/guide/bag/` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "売り方ガイド", item: `${SITE_URL}/guide/` },
    { "@type": "ListItem", position: 3, name: "バッグを高く売る実務", item: `${SITE_URL}/guide/bag/` },
  ],
};

// 実売相場データを公開しているバッグ主体のブランド（/souba/ 配下）
const bagBrands = [
  { name: "エルメス", slug: "hermes", note: "バーキン・ケリー・財布・スカーフ" },
  { name: "ルイヴィトン", slug: "louis-vuitton", note: "バッグ・財布・モノグラム（ライン全体）" },
  { name: "シャネル", slug: "chanel", note: "マトラッセ・バッグ全体・財布" },
  { name: "グッチ", slug: "gucci", note: "バッグ・財布" },
  { name: "プラダ", slug: "prada", note: "バッグ・財布" },
  { name: "セリーヌ", slug: "celine", note: "バッグ・財布" },
  { name: "ディオール", slug: "dior", note: "レディディオール・サドル・ブックトート・財布" },
  { name: "フェンディ", slug: "fendi", note: "バゲット・ピーカブー・財布・バッグ" },
  { name: "ボッテガ・ヴェネタ", slug: "bottega-veneta", note: "イントレチャート・カセット・財布・バッグ" },
  { name: "ロエベ", slug: "loewe", note: "パズル・ハンモック・アナグラム・財布" },
  { name: "サンローラン", slug: "saint-laurent", note: "バッグ・財布・ライダース・ケイト" },
  { name: "バレンシアガ", slug: "balenciaga", note: "バッグ・財布・トリプルS・シティ" },
  { name: "ゴヤール", slug: "goyard", note: "サンルイ・財布・カードケース・バッグ" },
];

const factors = [
  {
    title: "付属品（箱・保存袋・ギャランティ・ストラップ）",
    body: "箱・保存袋・ギャランティカードや購入時のレシート・取り外し式のストラップ・チャーム・カデナ（南京錠）と鍵・レインカバーを先に探しておきます。近年のモデルはギャランティカードの代わりにRFIDタグや刻印で管理するブランドもあるため、「カードがない＝付属品なし」ではありません。",
  },
  {
    title: "刻印・シリアル・製造年",
    body: "内側のタグや刻印（シリアル番号・製造年記号・型番）を控えておきます。同じモデル名でもサイズ・素材・製造年で実売価格が大きく違うため、相場データと照合するときはモデル名だけでなくサイズと素材まで揃えて落札例を探すのが確実です。",
  },
  {
    title: "状態（角スレ・持ち手・内側・金具）",
    body: "角のスレ、持ち手の黒ずみ、内側のべたつきや剥がれ、金具のメッキ剥がれ・くすみ、ファスナーの動きを確認しておきます。内側のべたつきや剥がれは外から見えにくいぶん査定で減額の理由になりやすいので、事前に把握して伝えるとやり取りがスムーズです。",
  },
  {
    title: "モデル・サイズ・色の需要",
    body: "アイコンモデル（バーキン・マトラッセ・レディディオール・パズルなど）は同じブランドの中でも別格の相場を持ちます。また同じモデルでも定番色と限定色、人気サイズと不人気サイズで価格が分かれます。相場データの「最高落札価格の内訳」で、どの素材・サイズ・色が高値だったかを確認してください。",
  },
  {
    title: "自分で補修・クリーニングしない",
    body: "革の色補修・金具の研磨・市販のクリーナーによる強い清掃は、かえって状態を悪化させたりオリジナルの風合いを失わせたりすることがあります。ほこりを柔らかい布で払う程度にとどめ、汚れや傷はそのまま業者に伝えてください。",
  },
];

const checklist = [
  "箱・保存袋・ギャランティ（またはレシート）・ストラップ・チャームなどを一か所にまとめた",
  "内側の刻印・シリアル・型番と、サイズ・素材を控えた",
  "角スレ・持ち手・内側のべたつき・金具の状態を確認し、気になる点を書き出した",
  "売りたいブランドの実売相場データで、同じモデル・サイズ・素材の落札例を見た",
  "業者を2〜3社に絞り、査定額と手数料（送料・返送料）を並べて比較する準備をした",
  "出張買取を使う場合は、訪問購入のクーリングオフのルールを確認した",
];

const faqs = [
  {
    q: "箱や保存袋がなくても売れますか？",
    a: "多くの業者では箱や保存袋がなくても査定・買取自体は可能です。ただし付属品がそろった個体と比べると提示額は下がるのが一般的です。ギャランティカードやレシートなど、正規流通の確認に使える書類があれば一緒に提示してください。",
  },
  {
    q: "古いモデルや使用感のあるバッグでも査定対象になりますか？",
    a: "ヴィンテージとして評価されるモデル（フェンディのマンマバケット、ディオールのガリアーノ期サドルなど）は、年式が古くても高値で実売されている例があります。一方で状態不良の減額は避けられないため、傷や汚れは隠さず申込み時に伝え、複数の業者で提示額を比べてください。",
  },
  {
    q: "実売相場と査定額はどのくらい違いますか？",
    a: "実売価格はオークション等で実際に売買が成立した価格で、買取業者の査定額はそこから業者の利益や販売コスト・補修費用を差し引いた金額になります。差の大きさはモデル・状態・業者によって異なり、一律の目安はありません。相場データは「提示額が妥当かどうかを判断する物差し」として使い、複数の業者の提示額と見比べてください。",
  },
];

export default function BagGuidePage() {
  const bagDealers = REVIEWS.filter((r) =>
    r.genres.some((g) => g.includes("バッグ") || g.includes("ブランド品")),
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs
            items={[{ label: "売り方ガイド", href: "/guide/" }, { label: "バッグを高く売る実務" }]}
          />
          <p className="eyebrow mt-8 mb-4">GUIDE — BAG</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            ブランドバッグを高く売るための実務ガイド
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            ブランドバッグは、同じモデルでも素材・サイズ・色・付属品・状態で実売価格が数倍変わる品目です。このガイドでは「相場を知る → 査定を左右する点を整える → バッグを扱う業者で相見積もりを取る」という順番で、売る前にやっておきたい実務を整理します。
          </p>
        </div>
      </section>

      {/* STEP1 相場 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-4">1. 売りたいブランドの実売相場を確認する</h2>
        <p className="max-w-3xl text-[0.9rem] leading-relaxed text-ink-soft mb-8">
          当サイトでは、業者の「参考買取価格」ではなく、オークションで実際に売買が成立した価格を件数・平均・最高値・出典・取得日つきで公開しています。バッグ主体のブランドは以下の13ブランドを公開中です。各ページの「最高落札価格の内訳」で、どの素材・サイズが高値だったかまで確認できます。
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
          {bagBrands.map((b) => (
            <a key={b.slug} href={`/souba/${b.slug}/`} className="card-lux p-6 block">
              <p className="eyebrow mb-2">MARKET DATA</p>
              <h3 className="text-base text-ink mb-1">{b.name}の実売相場データ</h3>
              <p className="text-[0.82rem] leading-relaxed text-ink-soft">{b.note}</p>
            </a>
          ))}
        </div>
        <div className="note-box mt-8 max-w-3xl">
          実売価格は買取査定額そのものではありません。査定額は実売から業者の利益・販売コスト・補修費用を差し引いた金額になるため、相場データは「提示額が妥当かどうかの物差し」としてお使いください。
        </div>
      </section>

      {/* STEP2 査定を左右する点 */}
      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-4">2. 査定額を左右する5つの確認項目</h2>
          <p className="max-w-3xl text-[0.9rem] leading-relaxed text-ink-soft mb-10">
            バッグの査定で必ず見られる項目です。査定に出す前に自分で確認しておくと、提示額の理由を理解しやすくなり、業者間の比較もしやすくなります。
          </p>
          <div className="grid gap-6 md:grid-cols-2 max-w-5xl">
            {factors.map((f, i) => (
              <div key={f.title} className="card-lux p-7">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="serif text-2xl text-gold-soft leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base text-ink">{f.title}</h3>
                </div>
                <p className="text-[0.86rem] leading-relaxed text-ink-soft">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEP3 チェックリスト */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">3. 査定に出す前のチェックリスト</h2>
        <ul className="max-w-3xl space-y-3">
          {checklist.map((c) => (
            <li key={c} className="flex items-baseline gap-3 text-[0.92rem] leading-relaxed text-ink-soft">
              <span className="text-gold text-[0.7rem] shrink-0">◆</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
        <div className="note-box mt-8 max-w-3xl">
          <p className="font-bold text-ink mb-1">まとめ売りと単品査定を分けて考える</p>
          <p>
            実売データでも、複数ブランドの財布・小物を数十点まとめた出品と、単品の出品では価格の性質が全く違います。高値が期待できるアイコンバッグは単品で査定を受け、小物のまとめ売りとは分けて比較するのが基本です。
          </p>
        </div>
      </section>

      {/* STEP4 業者 */}
      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-4">
            4. バッグを公式に取り扱う業者で相見積もりを取る（{bagDealers.length}社）
          </h2>
          <p className="max-w-3xl text-[0.9rem] leading-relaxed text-ink-soft mb-8">
            以下は、当サイトの業者レビューのうち、公式サイトの取扱ジャンルに「バッグ」または「ブランド品」を明記している業者です。各レビューでは買取方法・手数料・古物商許可番号を公式サイトで一次確認し、確認できなかった項目も正直に記載しています。2〜3社に絞って査定を依頼し、提示額と手数料を並べて比較してください。
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
            {bagDealers.map((r) => (
              <a key={r.slug} href={`/reviews/${r.slug}/`} className="card-lux p-5 block">
                <h3 className="text-base text-ink mb-1">{r.name}</h3>
                <p className="text-[0.8rem] leading-relaxed text-ink-soft">
                  {r.company} ／ {r.methods.join("・")}
                </p>
              </a>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/ranking/" className="btn-gold">買取業者の比較表を見る</a>
            <a href="/reviews/" className="btn-line">業者レビュー一覧へ</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
          <a href="/guide/watch/" className="btn-gold">腕時計を高く売る実務を読む</a>
          <a href="/guide/cooling-off/" className="btn-line">訪問購入のクーリングオフを読む</a>
          <a href="/guide/" className="btn-line">売り方ガイドに戻る</a>
        </div>
      </section>
    </main>
  );
}
