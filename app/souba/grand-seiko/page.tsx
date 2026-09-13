import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "グランドセイコーの実売相場データ【2026年9月】",
  description:
    "グランドセイコーのスプリングドライブ・クオーツ・メカニカル・ヘリテージについて、オークションで実際に売買が成立した価格を集計。落札件数・平均落札価格・最高値を出典つきで公開します。",
  alternates: { canonical: `${SITE_URL}/souba/grand-seiko/` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "実売相場", item: `${SITE_URL}/souba/` },
    { "@type": "ListItem", position: 3, name: "グランドセイコー", item: `${SITE_URL}/souba/grand-seiko/` },
  ],
};

// 実売データ（取得日2026年9月13日）
// 件数・平均＝オークファン落札相場ページの表示値（集計期間は同ページの表記に従う）
// 最高＝Yahoo!オークション落札相場を落札価格の高い順に確認した単品出品の最上位（まとめ売り・他ブランド・フリマ出品は除外）
const rows = [
  {
    category: "スプリングドライブ",
    count: "22件（直近30日）",
    avg: "371,950円",
    max: "1,405,000円",
    maxNote: "スプリングドライブ クロノグラフ GMT SBGC253（中古・単品出品）。落札日2026年6月19日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5b0a5e9a5f3a5c9a5bba5a4a5b3a1bc20a5b9a5d7a5eaa5f3a5b0a5c9a5e9a5a4a5d6/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%89%E3%82%BB%E3%82%A4%E3%82%B3%E3%83%BC%20%E3%82%B9%E3%83%97%E3%83%AA%E3%83%B3%E3%82%B0%E3%83%89%E3%83%A9%E3%82%A4%E3%83%96/0/",
  },
  {
    category: "クオーツ",
    count: "23件（直近30日）",
    avg: "100,405円",
    max: "765,600円",
    maxNote: "クォーツ K18YG SBGS002（中古・単品出品）。落札日2026年5月13日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5b0a5e9a5f3a5c9a5bba5a4a5b3a1bc20a5afa5aaa1bca5c4/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%89%E3%82%BB%E3%82%A4%E3%82%B3%E3%83%BC%20%E3%82%AF%E3%82%AA%E3%83%BC%E3%83%84/0/",
  },
  {
    category: "メカニカル",
    count: "15件（直近30日）",
    avg: "378,523円",
    max: "1,000,000円",
    maxNote: "メカニカル ハイビート SLGH027 岩手山 限定（中古・単品出品）。落札日2026年4月21日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5b0a5e9a5f3a5c9a5bba5a4a5b3a1bc20a5e1a5aba5cba5aba5eb/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%89%E3%82%BB%E3%82%A4%E3%82%B3%E3%83%BC%20%E3%83%A1%E3%82%AB%E3%83%8B%E3%82%AB%E3%83%AB/0/",
  },
  {
    category: "ヘリテージ",
    count: "37件（直近30日）",
    avg: "312,816円",
    max: "1,051,380円",
    maxNote: "ヘリテージコレクション SLGH005 白樺（中古・単品出品）。落札日2026年8月22日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5b0a5e9a5f3a5c9a5bba5a4a5b3a1bc20a5d8a5eaa5c6a1bca5b8/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%89%E3%82%BB%E3%82%A4%E3%82%B3%E3%83%BC%20%E3%83%98%E3%83%AA%E3%83%86%E3%83%BC%E3%82%B8/0/",
  },
];

export default function GrandSeikoSoubaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs
            items={[{ label: "実売相場", href: "/souba/" }, { label: "グランドセイコー" }]}
          />
          <p className="eyebrow mt-8 mb-4">MARKET DATA — GRAND SEIKO</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            グランドセイコーの実売相場データ
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            業者の広告に載る「参考買取価格」ではなく、オークションで実際に売買が成立した価格だけを集計しました。グランドセイコーは国産時計としては例外的に中古相場が高く、スプリングドライブ・メカニカルハイビート・9Fクオーツという3つのムーブメントで実売が分かれるブランドです。査定に出す前の「相場の物差し」としてお使いください。
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
          落札件数・平均落札価格はオークファン（aucfan.com）の落札相場ページに表示されている集計値、最高落札価格はYahoo!オークションの落札相場を落札価格の高い順に確認した単品出品の最上位です（複数ブランドのまとめ売り・他ブランド品・フリマ出品は除外）。取得日はいずれも2026年9月13日です。
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
            ※出典：オークファン（aucfan.com）各キーワードの落札相場ページ、およびYahoo!オークション落札相場（落札価格順）。取得日：2026年9月13日。
          </li>
        </ul>
      </section>

      {/* データの読み方 */}
      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-8">このデータの読み方</h2>
          <div className="max-w-3xl space-y-5 text-[0.92rem] leading-loose text-ink-soft">
            <p>
              <span className="font-bold text-ink">平均値が他ブランドより高いのは「本体主体」の集計だからです。</span>
              スプリングドライブ・メカニカルの平均は37万円台で、他ブランドのように小物が混じらず時計本体がほぼ全件を占めます。件数は各15〜37件と少なめなので、平均は数本の高額落札で動きます。
            </p>
            <p>
              <span className="font-bold text-ink">メカニカル・ヘリテージの上位はSLGH系（エボリューション9）です。</span>
              「白樺」SLGH005や限定のSLGH027が90万〜105万円台で落札されており、同じメカニカルでも旧世代の9S系は30万〜50万円台が中心です。キャリバー（9SA5／9S65など）で相場が分かれます。
            </p>
            <p>
              <span className="font-bold text-ink">クオーツの最高値は金無垢の特殊例です。</span>
              クオーツカテゴリの上位はK18無垢ケースの9581系で、地金価格が支えています。ステンレスの9Fクオーツは10万〜30万円台が目安で、平均100,405円はこの層を反映しています。
            </p>
          </div>
        </div>
      </section>

      {/* 売る前の準備 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">売る前にやっておきたい準備</h2>
        <div className="max-w-3xl space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            グランドセイコーは箱・保証書・余りコマ・購入店の記録がそろっているかで査定額が変わります。型番（SBGA／SBGX／SLGH／SBGCなど）を保証書か裏蓋で控えておくと、実売データとの照合がしやすくなります。
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
