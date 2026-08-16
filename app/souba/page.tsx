import type { Metadata } from "next";
import { SITE_URL } from "../lib/site";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "ブランド別の実売相場データ",
  description:
    "「参考買取価格」ではなく、実際に売買が成立した価格をもとにブランド別の相場を公開するハブページ。データの計測方法と、第1弾で公開予定の10ブランドを紹介します。",
  alternates: { canonical: `${SITE_URL}/souba/` },
};

const method = [
  {
    step: "01",
    title: "実売価格の収集",
    body: "業者が掲げる「参考買取価格」ではなく、実際に売買が成立した価格のみを収集対象とします。収集にあたっては出典・収集期間・取得日を記録します。",
  },
  {
    step: "02",
    title: "データのクリーニング",
    body: "型番・状態の表記ゆれや、明らかな異常値（真贋不明・部品取りなど通常の売買と条件が異なる取引）を除外し、同じ条件同士で比較できる形に整えます。",
  },
  {
    step: "03",
    title: "レンジとして公開",
    body: "1点の事例を「相場」と呼ぶことはせず、件数・平均・最高値をレンジとして公開します。数値には必ず出典と取得日を添えます。",
  },
];

const brands = [
  { name: "エルメス", slug: "hermes" },
  { name: "ルイヴィトン", slug: "louis-vuitton" },
  { name: "シャネル", slug: "chanel" },
  { name: "ロレックス", slug: "rolex" },
  { name: "オメガ", slug: "omega" },
  { name: "グッチ", slug: "gucci" },
  { name: "プラダ", slug: "prada" },
  { name: "セリーヌ", slug: "celine" },
  { name: "ティファニー", slug: "tiffany" },
  { name: "カルティエ", slug: "cartier" },
];

export default function SoubaPage() {
  return (
    <main>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs items={[{ label: "実売相場" }]} />
          <p className="eyebrow mt-8 mb-4">MARKET DATA</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            ブランド別の実売相場データ
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            当サイトの相場データは、業者の広告に載る「参考買取価格」ではなく、実際に売買が成立した価格だけを集計して作ります。第1弾として10ブランドの実売データ（出典・取得日付き）を公開中です。データは定期的に再確認し、更新日を明記します。
          </p>
        </div>
      </section>

      {/* 計測方法 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-10">相場データの作り方</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {method.map((m) => (
            <div key={m.step} className="flex gap-5">
              <span className="serif text-3xl text-gold-soft leading-none">{m.step}</span>
              <div>
                <h3 className="text-base text-ink mb-2">{m.title}</h3>
                <p className="text-[0.86rem] leading-relaxed text-ink-soft">{m.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="note-box mt-10 max-w-3xl">
          <p className="font-bold text-ink mb-1">実売価格は買取価格そのものではありません</p>
          <p>
            実売価格は「市場でその品物がいくらで取引されたか」を示す物差しであり、買取業者の査定額はここから業者の利益や販売コストを差し引いた金額になります。実売レンジは「査定額が妥当かどうかを判断する基準」としてお使いください。
          </p>
        </div>
      </section>

      {/* 公開予定ブランド */}
      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-4">第1弾で公開予定の10ブランド</h2>
          <p className="max-w-3xl text-[0.92rem] leading-relaxed text-ink-soft mb-8">
            まずは取引件数が多く相場の物差しとして需要の高い、以下の10ブランドからデータを公開します。数値は検証が完了するまで掲載しません。
          </p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-5 max-w-4xl">
            {brands.map((b) => (
              <li key={b.slug} className="flex items-baseline gap-2.5 text-[0.92rem] text-ink-soft">
                <span className="text-gold text-[0.7rem] shrink-0">◆</span>
                <a href={`/souba/${b.slug}/`} className="underline decoration-gold/40 underline-offset-4 hover:text-gold transition-colors">
                  {b.name}の実売相場データ
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 検証ポリシー導線 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <div className="max-w-3xl">
          <h2 className="rule-gold text-2xl text-ink mb-6">数値の裏付けについて</h2>
          <p className="text-[0.92rem] leading-relaxed text-ink-soft mb-8">
            当サイトが「どのようなデータを使い、どのような場合に数値を掲載しないか」は検証ポリシーとして明文化しています。相場データを読む前に一度ご覧ください。
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/verification-policy/" className="btn-gold">検証ポリシーを読む</a>
            <a href="/guide/" className="btn-line">売り方ガイドを読む</a>
          </div>
        </div>
      </section>
    </main>
  );
}
