import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "ブルガリの実売相場データ【2026年9月】",
  description:
    "ブルガリのビーゼロワン・ネックレス・リング・時計について、オークションで実際に売買が成立した価格を集計。落札件数・平均落札価格・最高値を出典つきで公開します。",
  alternates: { canonical: `${SITE_URL}/souba/bvlgari/` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "実売相場", item: `${SITE_URL}/souba/` },
    { "@type": "ListItem", position: 3, name: "ブルガリ", item: `${SITE_URL}/souba/bvlgari/` },
  ],
};

// 実売データ（取得日2026年9月13日）
// 件数・平均＝オークファン落札相場ページの表示値（集計期間は同ページの表記に従う）
// 最高＝Yahoo!オークション落札相場を落札価格の高い順に確認した単品出品の最上位（まとめ売り・他ブランド・フリマ出品は除外）
const rows = [
  {
    category: "ビーゼロワン",
    count: "170件（直近30日）",
    avg: "72,044円",
    max: "608,319円",
    maxNote: "カテーネ 3BALL ビーゼロワン ネックレス K18 総重量約29g（中古・単品出品）。落札日2026年8月2日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5d6a5eba5aca5ea20a5d3a1bca5bca5eda5efa5f3/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%96%E3%83%AB%E3%82%AC%E3%83%AA%20%E3%83%93%E3%83%BC%E3%82%BC%E3%83%AD%E3%83%AF%E3%83%B3/0/",
  },
  {
    category: "ネックレス",
    count: "219件（直近90日）",
    avg: "51,369円",
    max: "1,005,400円",
    maxNote: "パッソドッピオ ネックレス K18YG 総重量約35.4g（中古・単品出品）。これを上回る落札（2,805,608円）は他ブランド（ギメル）のため除外。落札日2026年6月7日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5d6a5eba5aca5ea20a5cda5c3a5afa5eca5b9/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%96%E3%83%AB%E3%82%AC%E3%83%AA%20%E3%83%8D%E3%83%83%E3%82%AF%E3%83%AC%E3%82%B9/0/",
  },
  {
    category: "リング",
    count: "215件（直近30日）",
    avg: "49,953円",
    max: "899,990円",
    maxNote: "セルペンティ リング K18PG シェル×ダイヤ（中古・単品出品）。これを上回る落札（1,248,500円）は他ブランド（タサキ）のため除外。落札日2026年4月19日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5d6a5eba5aca5ea20a5eaa5f3a5b0/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%96%E3%83%AB%E3%82%AC%E3%83%AA%20%E3%83%AA%E3%83%B3%E3%82%B0/0/",
  },
  {
    category: "時計",
    count: "632件（直近30日）",
    avg: "38,318円",
    max: "648,000円",
    maxNote: "アショーマ オートマチック AA48SG K18YG/SS（中古・単品出品）。これを上回る落札（813,000円）は複数ブランドの時計17点まとめのため除外。落札日2026年8月29日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5d6a5eba5aca5ea20bbfeb7d7/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%96%E3%83%AB%E3%82%AC%E3%83%AA%20%E6%99%82%E8%A8%88/0/",
  },
];

export default function BvlgariSoubaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs
            items={[{ label: "実売相場", href: "/souba/" }, { label: "ブルガリ" }]}
          />
          <p className="eyebrow mt-8 mb-4">MARKET DATA — BVLGARI</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            ブルガリの実売相場データ
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            業者の広告に載る「参考買取価格」ではなく、オークションで実際に売買が成立した価格だけを集計しました。ブルガリはジュエリー（ビーゼロワン・セルペンティ）と時計（アショーマ・オクト）の両方で実売が厚く、金の重量とダイヤの有無が価格を決めるブランドです。査定に出す前の「相場の物差し」としてお使いください。
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
              <span className="font-bold text-ink">ジュエリーは「金の重量」が価格の土台です。</span>
              ネックレス・ビーゼロワンの上位はいずれもK18で総重量約29〜35gの個体で、地金価格が下支えしています。同じモデルでもサイズ（重量）で数十万円変わるため、査定額を比べるときは重量を揃えて見てください。
            </p>
            <p>
              <span className="font-bold text-ink">他ブランドの混入に注意してください。</span>
              「ブルガリ ネックレス」「ブルガリ リング」のキーワード検索には、説明文に比較対象として書かれた他ブランドの高額品が混じります。上表の最高値は出品タイトルでブルガリと確認できる単品に限定しています。
            </p>
            <p>
              <span className="font-bold text-ink">時計はコンビ（K18×SS）と限定モデルが上限を作ります。</span>
              アショーマのコンビや世界限定のオクトが60万円台で落札されている一方、ステンレスのクオーツモデルは数万円台が中心です。時計カテゴリは直近30日で632件と件数が多く、平均38,318円はこの幅の広さを反映しています。
            </p>
          </div>
        </div>
      </section>

      {/* 売る前の準備 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">売る前にやっておきたい準備</h2>
        <div className="max-w-3xl space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            ブルガリのジュエリーは刻印（BVLGARI・750・サイズ）と重量、時計は箱・保証書・ブレスの余りコマが査定に直結します。ダイヤ付きモデルは鑑別書があれば先に探しておきましょう。
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
