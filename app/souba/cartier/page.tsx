import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "カルティエの実売相場データ【2026年8月】",
  description:
    "カルティエの時計・リング・ネックレスについて、オークションで実際に売買が成立した価格を集計。直近30日の件数・平均落札価格・最高値を出典つきで公開します。",
  alternates: { canonical: `${SITE_URL}/souba/cartier/` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "実売相場", item: `${SITE_URL}/souba/` },
    { "@type": "ListItem", position: 3, name: "カルティエ", item: `${SITE_URL}/souba/cartier/` },
  ],
};

// 実売データ（Yahoo!オークション落札分・オークファン集計・直近30日・取得日2026年8月17日）
const rows = [
  {
    category: "時計",
    count: "780件",
    avg: "217,531円",
    max: "604,000円",
    sourceUrl: "https://aucfan.com/search1/q-~a5aba5eba5c6a5a3a5a820bbfeb7d7/s-ya/",
  },
  {
    category: "リング",
    count: "252件",
    avg: "107,081円",
    max: "208,000円",
    sourceUrl: "https://aucfan.com/search1/q-~a5aba5eba5c6a5a3a5a820a5eaa5f3a5b0/s-ya/",
  },
  {
    category: "ネックレス",
    count: "69件",
    avg: "72,965円",
    max: "810,637円",
    sourceUrl: "https://aucfan.com/search1/q-~a5aba5eba5c6a5a3a5a820a5cda5c3a5afa5eca5b9/s-ya/",
  },
];

const pendingCategories: string[] = [];

export default function CartierSoubaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs
            items={[{ label: "実売相場", href: "/souba/" }, { label: "カルティエ" }]}
          />
          <p className="eyebrow mt-8 mb-4">MARKET DATA — CARTIER</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            カルティエの実売相場データ
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            業者の広告に載る「参考買取価格」ではなく、オークションで実際に売買が成立した価格だけを集計しました。カルティエは時計・ジュエリーとも1点あたりの単価が高く、平均落札価格が10万円を超えるカテゴリが並ぶブランドです。査定に出す前の「相場の物差し」としてお使いください。
          </p>
          <div className="note-box mt-8 max-w-3xl">
            <p className="font-bold text-ink mb-1">実売価格は買取査定額とは異なります</p>
            <p>
              実売価格（オークション等の売買成立額）は買取査定額とは異なります。買取店の査定は、業者の利益や販売コストが差し引かれるため、実売より低くなるのが一般的です。掲載レンジは状態・真贋・付属品の有無で大きく変わる幅の参考であり、査定額を保証するものではありません。
            </p>
          </div>
        </div>
      </section>

      {/* 実売データテーブル */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-4">カテゴリ別の実売データ</h2>
        <p className="max-w-3xl text-[0.9rem] leading-relaxed text-ink-soft mb-8">
          Yahoo!オークション（旧ヤフオク!）の落札データをオークファンの集計ページで確認したものです。集計期間はいずれも直近30日、取得日は2026年8月17日です。
        </p>
        <div className="overflow-x-auto">
          <table className="table-lux min-w-[640px]">
            <thead>
              <tr>
                <th>カテゴリ</th>
                <th>落札件数（直近30日）</th>
                <th>平均落札価格</th>
                <th>最高落札価格</th>
                <th>出典</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.category}>
                  <td className="font-bold text-ink">{r.category}</td>
                  <td>{r.count}</td>
                  <td>{r.avg}</td>
                  <td>{r.max}</td>
                  <td>
                    <a
                      href={r.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold underline underline-offset-2"
                    >
                      オークファン
                    </a>
                  </td>
                </tr>
              ))}
              {pendingCategories.map((c) => (
                <tr key={c}>
                  <td className="font-bold text-ink">{c}</td>
                  <td colSpan={4} className="text-muted">
                    データ検証中（検証が完了するまで数値は掲載しません）
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[0.8rem] text-muted">
          出典：オークファン（aucfan.com）のYahoo!オークション落札相場ページに表示されている集計値。取得日：2026年8月17日。
        </p>
      </section>

      {/* データの読み方 */}
      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-8">このデータの読み方</h2>
          <div className="max-w-3xl space-y-5 text-[0.92rem] leading-loose text-ink-soft">
            <p>
              <span className="font-bold text-ink">平均値は「状態の良い中古品の相場」ではありません。</span>
              集計には状態不良品・不動品（時計）・部品取り目的など、極端な安値の取引も含まれます。お手元の品物の状態が良ければ、平均より上のレンジが目安になります。
            </p>
            <p>
              <span className="font-bold text-ink">件数が少ないカテゴリは数値が振れやすくなります。</span>
              ネックレスは直近30日の落札が69件と少なく、1件の高額落札（最高810,637円）が平均を大きく動かします。件数の少ないカテゴリの平均は、幅のある目安として読んでください。
            </p>
            <p>
              <span className="font-bold text-ink">同じ「カルティエの時計」でもモデル・素材・年式で価格の桁が変わります。</span>
              上の数値はカテゴリ全体の集計です。査定額と比べるときは、出典リンク先で同じモデル・近い状態の落札例を確認するのが確実です。
            </p>
          </div>
        </div>
      </section>

      {/* 売る前の準備 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">売る前にやっておきたい準備</h2>
        <div className="max-w-3xl space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            箱・保証書（ギャランティ）・コマ（時計のブレス調整分）・レシートなどの付属品は、揃っているだけで査定の条件が変わります。時計は裏蓋のモデル番号・シリアル、ジュエリーは内側の刻印を控えておくと、実売データとの照合もしやすくなります。
          </p>
          <p>
            そのうえで、1社で即決せず複数の業者に相見積もりを取り、提示額を上の実売レンジと見比べるのが基本です。単価の高いブランドほど、業者間の提示額の差も大きくなりやすいカテゴリです。
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="/guide/" className="btn-gold">売り方ガイドを読む</a>
          <a href="/ranking/" className="btn-line">買取業者の比較を見る</a>
        </div>
      </section>

      {/* 計測方法 */}
      <section className="bg-ivory-deep border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-6">相場データの計測方法</h2>
          <p className="max-w-3xl text-[0.92rem] leading-relaxed text-ink-soft mb-8">
            当サイトの相場データは「実売価格の収集 → データのクリーニング → レンジとして公開」の3ステップで作成し、数値には必ず出典と取得日を添えます。詳しい方針は実売相場ハブでご確認ください。
          </p>
          <a href="/souba/" className="btn-line">実売相場データの作り方を見る</a>
        </div>
      </section>
    </main>
  );
}
