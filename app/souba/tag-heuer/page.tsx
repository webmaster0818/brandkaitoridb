import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "タグホイヤーの実売相場データ【2026年9月】",
  description:
    "タグホイヤーのカレラ・アクアレーサー・モナコ・フォーミュラ1について、オークションで実際に売買が成立した価格を集計。落札件数・平均落札価格・最高値を出典つきで公開します。",
  alternates: { canonical: `${SITE_URL}/souba/tag-heuer/` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "実売相場", item: `${SITE_URL}/souba/` },
    { "@type": "ListItem", position: 3, name: "タグホイヤー", item: `${SITE_URL}/souba/tag-heuer/` },
  ],
};

// 実売データ（取得日2026年9月13日）
// 件数・平均＝オークファン落札相場ページの表示値（集計期間は同ページの表記に従う）
// 最高＝Yahoo!オークション落札相場を落札価格の高い順に確認した単品出品の最上位（まとめ売り・他ブランド・フリマ出品は除外）
const rows = [
  {
    category: "カレラ",
    count: "194件（直近90日）",
    avg: "145,302円",
    max: "999,900円",
    maxNote: "カレラ ホイヤー02T トゥールビヨン クロノグラフ FT6071（中古・単品出品）。落札日2026年6月12日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5bfa5b0a5dba5a4a5e4a1bc20a5aba5eca5e9/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%BF%E3%82%B0%E3%83%9B%E3%82%A4%E3%83%A4%E3%83%BC%20%E3%82%AB%E3%83%AC%E3%83%A9/0/",
  },
  {
    category: "アクアレーサー",
    count: "57件（直近30日）",
    avg: "86,328円",
    max: "458,000円",
    maxNote: "アクアレーサー プロフェッショナル300 GMT WBP5114.BA0013（中古・単品出品）。落札日2026年6月19日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5bfa5b0a5dba5a4a5e4a1bc20a5a2a5afa5a2a5eca1bca5b5a1bc/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%BF%E3%82%B0%E3%83%9B%E3%82%A4%E3%83%A4%E3%83%BC%20%E3%82%A2%E3%82%AF%E3%82%A2%E3%83%AC%E3%83%BC%E3%82%B5%E3%83%BC/0/",
  },
  {
    category: "モナコ",
    count: "13件（直近30日）",
    avg: "166,375円",
    max: "954,690円",
    maxNote: "モナコ CAW211U アイボリー文字盤（中古・単品出品）。落札日2026年4月21日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5bfa5b0a5dba5a4a5e4a1bc20a5e2a5caa5b3/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%BF%E3%82%B0%E3%83%9B%E3%82%A4%E3%83%A4%E3%83%BC%20%E3%83%A2%E3%83%8A%E3%82%B3/0/",
  },
  {
    category: "フォーミュラ1",
    count: "304件（直近30日）",
    avg: "45,709円",
    max: "440,000円",
    maxNote: "フォーミュラ1 フラグメント デザイン CAZ201A（中古・単品出品）。落札日2026年6月18日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5bfa5b0a5dba5a4a5e4a1bc20a5d5a5a9a1bca5dfa5e5a5e931/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%BF%E3%82%B0%E3%83%9B%E3%82%A4%E3%83%A4%E3%83%BC%20%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9F%E3%83%A5%E3%83%A91/0/",
  },
];

export default function TagHeuerSoubaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs
            items={[{ label: "実売相場", href: "/souba/" }, { label: "タグホイヤー" }]}
          />
          <p className="eyebrow mt-8 mb-4">MARKET DATA — TAG HEUER</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            タグホイヤーの実売相場データ
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            業者の広告に載る「参考買取価格」ではなく、オークションで実際に売買が成立した価格だけを集計しました。タグホイヤーはカレラ・アクアレーサー・モナコ・フォーミュラ1の4ラインで実売の大半を占め、機械式クロノグラフと限定モデルが上限を作るブランドです。査定に出す前の「相場の物差し」としてお使いください。
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
              <span className="font-bold text-ink">カレラの平均は集計期間が直近90日である点に注意してください。</span>
              カレラは直近90日で194件・平均145,302円と、他のラインより長い期間で集計されています。最高値のトゥールビヨン（ホイヤー02T）は特殊例で、通常の自動巻きクロノグラフは30万〜60万円台が上限の目安です。
            </p>
            <p>
              <span className="font-bold text-ink">モナコは件数が少なく、リファレンスで価格が決まります。</span>
              直近30日の落札件数は13件で、平均166,375円は少数の落札に左右されます。スティーブ・マックイーン関連のCAW211系が60万〜95万円台、復刻CS2110のジャンク品は30万円前後と、同じ「モナコ」でも幅があります。
            </p>
            <p>
              <span className="font-bold text-ink">フォーミュラ1はクオーツ主体で、限定品だけが跳ねます。</span>
              直近30日で304件と件数が最も多いカテゴリですが、平均45,709円が示すとおりクオーツの通常モデルが中心です。最高値のフラグメント デザイン限定は別枠の相場と考えてください。
            </p>
          </div>
        </div>
      </section>

      {/* 売る前の準備 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">売る前にやっておきたい準備</h2>
        <div className="max-w-3xl space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            タグホイヤーは箱・保証書（ギャランティカード）・余りコマ・購入店の記録が査定に直結します。リファレンス番号（CBN・WBP・CAW・CAZなど）を裏蓋や保証書で控えておくと、実売データとの照合がしやすくなります。
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
