import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "エルメスの実売相場データ【2026年8月】",
  description:
    "エルメスのバーキン・ケリー・財布・スカーフについて、オークションで実際に売買が成立した価格を集計。落札件数・平均落札価格・最高値を出典つきで公開します。査定前の物差しにどうぞ。",
  alternates: { canonical: `${SITE_URL}/souba/hermes/` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "実売相場", item: `${SITE_URL}/souba/` },
    { "@type": "ListItem", position: 3, name: "エルメス", item: `${SITE_URL}/souba/hermes/` },
  ],
};

// 実売データ（取得日2026年8月17日）
// 件数・平均＝オークファン落札相場ページの表示値／最高＝Yahoo!オークション落札相場（過去120日）の落札価格順最上位
const rows = [
  {
    category: "バーキン",
    count: "17件（直近30日）",
    avg: "145,119円",
    max: "4,015,000円",
    maxNote: "新品同様のバーキン25（トゴ・単品出品）",
    aucfanUrl: "https://aucfan.com/intro/q-~a5a8a5eba5e1a5b9a5d0a1bca5ada5f3/",
    yahooUrl:
      "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%A8%E3%83%AB%E3%83%A1%E3%82%B9%20%E3%83%90%E3%83%BC%E3%82%AD%E3%83%B3/0/",
  },
  {
    category: "ケリー",
    count: "238件（直近30日）",
    avg: "63,509円",
    max: "3,600,000円",
    maxNote: "ミニケリー（リザード・単品出品）",
    aucfanUrl: "https://aucfan.com/intro/q-~a5a8a5eba5e1a5b920a5b1a5eaa1bc/",
    yahooUrl:
      "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%A8%E3%83%AB%E3%83%A1%E3%82%B9%20%E3%82%B1%E3%83%AA%E3%83%BC/0/",
  },
  {
    category: "財布",
    count: "162件（直近30日）",
    avg: "73,762円",
    max: "1,700,000円",
    maxNote: "コンスタンスロング（アリゲーター・未使用保管品）",
    aucfanUrl: "https://aucfan.com/intro/q-~a5a8a5eba5e1a5b920bae2c9db/",
    yahooUrl:
      "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%A8%E3%83%AB%E3%83%A1%E3%82%B9%20%E8%B2%A1%E5%B8%83/0/",
  },
  {
    category: "スカーフ（カレ）",
    count: "1,090件（直近30日）",
    avg: "25,947円",
    max: "318,000円",
    maxNote: "カレジェアン カシミヤシルク大判（未使用）",
    aucfanUrl: "https://aucfan.com/intro/q-~a5a8a5eba5e1a5b920a5b9a5aba1bca5d5/",
    yahooUrl:
      "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%A8%E3%83%AB%E3%83%A1%E3%82%B9%20%E3%82%B9%E3%82%AB%E3%83%BC%E3%83%95/0/",
  },
];

export default function HermesSoubaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs
            items={[{ label: "実売相場", href: "/souba/" }, { label: "エルメス" }]}
          />
          <p className="eyebrow mt-8 mb-4">MARKET DATA — HERMES</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            エルメスの実売相場データ
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            業者の広告に載る「参考買取価格」ではなく、オークションで実際に売買が成立した価格だけを集計しました。エルメスはバーキン・ケリーを頂点に、同じカテゴリ内でも素材やサイズで価格が数十倍変わる特殊なブランドです。査定に出す前の「相場の物差し」としてお使いください。
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
              <span className="font-bold text-ink">平均値は「状態の良い本体の相場」ではありません。</span>
              キーワード集計のため、バッグ用カデナ（南京錠）や空箱・付属品単体、状態不良品といった安値の周辺出品も含まれます。特に「ケリー」「スカーフ」の平均が低めに見えるのはこのためで、状態の良い本体はレンジの上側が目安になります。
            </p>
            <p>
              <span className="font-bold text-ink">高値側は素材と状態の特殊例です。</span>
              最高落札価格はクロコダイル・リザードといった希少素材や、新品同様・未使用の個体が中心です。通常のレザー・使用ありの個体の上限とは限りません。
            </p>
            <p>
              <span className="font-bold text-ink">集計元・期間が変わると平均も動きます。</span>
              例えばバーキンは、上表のオークファン集計（直近30日・17件）では平均145,119円ですが、Yahoo!オークション公式の過去120日集計（約672件）では平均106,912円と表示されています（取得日2026年8月17日）。査定額と比べるときは、出典リンク先で同じモデル・素材・近い状態の落札例まで確認するのが確実です。
            </p>
          </div>
        </div>
      </section>

      {/* 売る前の準備 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">売る前にやっておきたい準備</h2>
        <div className="max-w-3xl space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            エルメスは付属品の影響が特に大きいブランドです。箱・保存袋・レインカバー・カデナ・クロシェット（キー含む）・購入時のレシートを先に探しておきましょう。刻印（製造年記号）や素材名を控えておくと、実売データとの照合もしやすくなります。
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
