import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "ルイヴィトンの実売相場データ【2026年8月】",
  description:
    "ルイヴィトンのバッグ・財布・モノグラムラインについて、オークションで実際に売買が成立した価格を集計。落札件数・平均落札価格・最高値を出典つきで公開します。査定前の物差しにどうぞ。",
  alternates: { canonical: `${SITE_URL}/souba/louis-vuitton/` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "実売相場", item: `${SITE_URL}/souba/` },
    {
      "@type": "ListItem",
      position: 3,
      name: "ルイヴィトン",
      item: `${SITE_URL}/souba/louis-vuitton/`,
    },
  ],
};

// 実売データ（取得日2026年8月17日）
// 件数・平均＝オークファン落札相場ページの表示値／最高＝Yahoo!オークション落札相場（過去120日）の落札価格順で確認した単品出品の最上位
const rows = [
  {
    category: "バッグ",
    count: "4,226件（直近30日）",
    avg: "47,451円",
    max: "1,300,000円",
    maxNote: "クロコダイル サハラ シティスティーマーPM（新品未使用・単品出品）",
    aucfanUrl: "https://aucfan.com/intro/q-~a5eba5a4a5f4a5a3a5c8a5f320a5d0a5c3a5b0/",
    yahooUrl:
      "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%AB%E3%82%A4%E3%83%B4%E3%82%A3%E3%83%88%E3%83%B3%20%E3%83%90%E3%83%83%E3%82%B0/0/",
  },
  {
    category: "財布",
    count: "3,289件（直近30日）",
    avg: "58,978円",
    max: "700,000円",
    maxNote:
      "ジッピーXL クロコダイル（限定品・単品出品）。これを上回る落札（852,500円など）は約170点のまとめ売りのため除外",
    aucfanUrl: "https://aucfan.com/intro/q-~a5eba5a4a5f4a5a3a5c8a5f320bae2c9db/",
    yahooUrl:
      "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%AB%E3%82%A4%E3%83%B4%E3%82%A3%E3%83%88%E3%83%B3%20%E8%B2%A1%E5%B8%83/0/",
  },
  {
    category: "モノグラム（ライン全体）",
    count: "8,248件（直近30日）",
    avg: "48,198円",
    max: "999,000円",
    maxNote: "村上隆コラボ チェリージーンズ（世界限定50枚・サイン入り・単品出品）",
    aucfanUrl: "https://aucfan.com/intro/q-~a5eba5a4a5f4a5a3a5c8a5f320a5e2a5cea5b0a5e9a5e0/",
    yahooUrl:
      "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%AB%E3%82%A4%E3%83%B4%E3%82%A3%E3%83%88%E3%83%B3%20%E3%83%A2%E3%83%8E%E3%82%B0%E3%83%A9%E3%83%A0/0/",
  },
];

export default function LouisVuittonSoubaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs
            items={[{ label: "実売相場", href: "/souba/" }, { label: "ルイヴィトン" }]}
          />
          <p className="eyebrow mt-8 mb-4">MARKET DATA — LOUIS VUITTON</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            ルイヴィトンの実売相場データ
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            業者の広告に載る「参考買取価格」ではなく、オークションで実際に売買が成立した価格だけを集計しました。ルイヴィトンは中古市場で最も流通量が多いブランドのひとつで、バッグ・財布だけで直近30日に7,000件を超える売買が確認できます。査定に出す前の「相場の物差し」としてお使いください。
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
          落札件数・平均落札価格はオークファン（aucfan.com）の落札相場ページに表示されている集計値、最高落札価格はYahoo!オークションの落札相場（過去120日）を落札価格の高い順に確認した単品出品の最上位です。取得日はいずれも2026年8月17日です。
        </p>
        <div className="overflow-x-auto">
          <table className="table-lux min-w-[760px]">
            <thead>
              <tr>
                <th>カテゴリ</th>
                <th>落札件数（集計期間）</th>
                <th>平均落札価格</th>
                <th>最高落札価格（単品）</th>
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
                  <td className="whitespace-nowrap">
                    <a
                      href={r.aucfanUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold underline underline-offset-2"
                    >
                      オークファン
                    </a>
                    {" / "}
                    <a
                      href={r.yahooUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold underline underline-offset-2"
                    >
                      ヤフオク
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="mt-4 space-y-1 text-[0.8rem] text-muted">
          {rows.map((r) => (
            <li key={r.category}>
              ※{r.category}の最高落札価格の内訳：{r.maxNote}。
            </li>
          ))}
          <li>
            ※「モノグラム」はライン全体の集計のため、バッグ・財布と対象が一部重複します。
          </li>
          <li>
            ※出典：オークファン（aucfan.com）各キーワードの落札相場ページ、およびYahoo!オークション落札相場（過去120日）。取得日：2026年8月17日。
          </li>
        </ul>
      </section>

      {/* データの読み方 */}
      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-8">このデータの読み方</h2>
          <div className="max-w-3xl space-y-5 text-[0.92rem] leading-loose text-ink-soft">
            <p>
              <span className="font-bold text-ink">平均値は「状態の良い中古品の相場」ではありません。</span>
              集計には状態不良品・部品取り目的・複数点のまとめ売りなど、極端な安値の取引も含まれます。流通量が非常に多いブランドのため、古い型や使用感の強い個体が平均を押し下げています。お手元の品物の状態が良ければ、平均より上のレンジが目安になります。
            </p>
            <p>
              <span className="font-bold text-ink">高値側は希少素材・限定品の特殊例です。</span>
              最高落札価格はクロコダイルなどのエキゾチックレザーやアーティストコラボ限定品が中心で、定番のモノグラム・ダミエの通常品の上限とは限りません。
            </p>
            <p>
              <span className="font-bold text-ink">集計元・期間が変わると平均も動きます。</span>
              例えば財布は、上表のオークファン集計（直近30日・3,289件）では平均58,978円ですが、Yahoo!オークション公式の過去120日集計（約30,831件）では平均19,767円と表示されています（取得日2026年8月17日）。対象キーワードの取り方と期間で平均は大きく変わるため、査定額と比べるときは、出典リンク先で同じ型番・近い状態の落札例まで確認するのが確実です。
            </p>
          </div>
        </div>
      </section>

      {/* 売る前の準備 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">売る前にやっておきたい準備</h2>
        <div className="max-w-3xl space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            箱・保存袋・ショルダーストラップ・パドロック（鍵）・購入時のレシートなどの付属品は、揃っているだけで査定の条件が変わります。製品内側の製造刻印（型番・シリアル）を控えておくと、実売データとの照合もしやすくなります。
          </p>
          <p>
            そのうえで、1社で即決せず複数の業者に相見積もりを取り、提示額を上の実売レンジと見比べるのが基本です。
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
