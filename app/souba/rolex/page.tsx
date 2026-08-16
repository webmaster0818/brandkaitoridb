import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "ロレックスの実売相場データ【2026年8月】",
  description:
    "ロレックスのデイトナ・サブマリーナ・デイトジャスト・エクスプローラーについて、オークションで実際に売買が成立した価格を集計。落札件数・平均落札価格・最高値を出典つきで公開します。",
  alternates: { canonical: `${SITE_URL}/souba/rolex/` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "実売相場", item: `${SITE_URL}/souba/` },
    { "@type": "ListItem", position: 3, name: "ロレックス", item: `${SITE_URL}/souba/rolex/` },
  ],
};

// 実売データ（取得日2026年8月17日）
// 件数・平均＝オークファン落札相場ページの表示値（デイトナ・サブマリーナは同ページの集計期間が直近90日表記）
// 最高＝Yahoo!オークション落札相場（過去120日）の落札価格順で確認した単品出品の最上位
const rows = [
  {
    category: "デイトナ",
    count: "272件（直近90日）",
    avg: "151,437円",
    max: "7,200,000円",
    maxNote: "コスモグラフ デイトナ（美品・単品出品）",
    aucfanUrl: "https://aucfan.com/intro/q-~a5eda5eca5c3a5afa5b920a5c7a5a4a5c8a5ca/",
    yahooUrl:
      "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%AD%E3%83%AC%E3%83%83%E3%82%AF%E3%82%B9%20%E3%83%87%E3%82%A4%E3%83%88%E3%83%8A/0/",
  },
  {
    category: "サブマリーナ",
    count: "300件（直近90日）",
    avg: "67,221円",
    max: "4,280,000円",
    maxNote: "Ref.16618（18K無垢・単品出品）",
    aucfanUrl: "https://aucfan.com/intro/q-~a5eda5eca5c3a5afa5b920a5b5a5d6a5dea5eaa1bca5ca/",
    yahooUrl:
      "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%AD%E3%83%AC%E3%83%83%E3%82%AF%E3%82%B9%20%E3%82%B5%E3%83%96%E3%83%9E%E3%83%AA%E3%83%BC%E3%83%8A/0/",
  },
  {
    category: "デイトジャスト",
    count: "543件（直近30日）",
    avg: "236,916円",
    max: "2,775,850円",
    maxNote:
      "Ref.16018（中古・単品出品）。これを上回る落札（3,100,000円）は2本ペアセットのため除外",
    aucfanUrl: "https://aucfan.com/intro/q-~a5eda5eca5c3a5afa5b920a5c7a5a4a5c8a5b8a5e3a5b9a5c8/",
    yahooUrl:
      "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%AD%E3%83%AC%E3%83%83%E3%82%AF%E3%82%B9%20%E3%83%87%E3%82%A4%E3%83%88%E3%82%B8%E3%83%A3%E3%82%B9%E3%83%88/0/",
  },
  {
    category: "エクスプローラー",
    count: "68件（直近30日）",
    avg: "356,733円",
    max: "4,000,000円",
    maxNote: "エクスプローラーII Ref.1655（ヴィンテージ・単品出品）",
    aucfanUrl: "https://aucfan.com/intro/q-~a5eda5eca5c3a5afa5b920a5a8a5afa5b9a5d7a5eda1bca5e9a1bc/",
    yahooUrl:
      "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%AD%E3%83%AC%E3%83%83%E3%82%AF%E3%82%B9%20%E3%82%A8%E3%82%AF%E3%82%B9%E3%83%97%E3%83%AD%E3%83%BC%E3%83%A9%E3%83%BC/0/",
  },
];

export default function RolexSoubaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs
            items={[{ label: "実売相場", href: "/souba/" }, { label: "ロレックス" }]}
          />
          <p className="eyebrow mt-8 mb-4">MARKET DATA — ROLEX</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            ロレックスの実売相場データ
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            業者の広告に載る「参考買取価格」ではなく、オークションで実際に売買が成立した価格だけを集計しました。ロレックスはモデル系統（デイトナ・サブマリーナなど）とリファレンス番号で相場が決まる世界です。ここではモデル系統別のレンジを公開します。査定に出す前の「相場の物差し」としてお使いください。
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
        <h2 className="rule-gold text-2xl text-ink mb-4">モデル系統別の実売データ</h2>
        <p className="max-w-3xl text-[0.9rem] leading-relaxed text-ink-soft mb-8">
          落札件数・平均落札価格はオークファン（aucfan.com）の落札相場ページに表示されている集計値（集計期間は各行に記載）、最高落札価格はYahoo!オークションの落札相場（過去120日）を落札価格の高い順に確認した単品出品の最上位です。取得日はいずれも2026年8月17日です。
        </p>
        <div className="overflow-x-auto">
          <table className="table-lux min-w-[760px]">
            <thead>
              <tr>
                <th>モデル系統</th>
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
              <span className="font-bold text-ink">平均値は「動作良好な本体の相場」ではありません。</span>
              キーワード集計のため、純正パーツ（リューズ・ベルト等）・空箱・ジャンク品・社外品といった安値の周辺出品も多く含まれます。特にデイトナ・サブマリーナの平均が本体相場よりかなり低く見えるのはこのためで、正規の本体はレンジの大きく上側が目安になります。
            </p>
            <p>
              <span className="font-bold text-ink">高値側はリファレンス次第です。</span>
              最高落札価格はヴィンテージの希少リファレンスや金無垢モデルが中心です。同じ「サブマリーナ」でも、リファレンス番号・年式・ブレスの仕様で価格は桁違いに変わります。
            </p>
            <p>
              <span className="font-bold text-ink">集計元・期間が変わると平均も動きます。</span>
              例えばデイトナは、上表のオークファン集計（直近90日・272件）では平均151,437円ですが、Yahoo!オークション公式の過去120日集計（約867件）では平均110,044円と表示されています（取得日2026年8月17日）。査定額と比べるときは、出典リンク先で同じリファレンス・近い状態の落札例まで確認するのが確実です。
            </p>
          </div>
        </div>
      </section>

      {/* 売る前の準備 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">売る前にやっておきたい準備</h2>
        <div className="max-w-3xl space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            ロレックスは箱・ギャランティカード（保証書）・余りコマ・タグなどの付属品の有無が査定の条件を大きく左右します。特にギャランティカードは重要なので先に探しておきましょう。リファレンス番号（ブレスの12時側に刻印）とシリアル番号を控えておくと、実売データとの照合もしやすくなります。
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
