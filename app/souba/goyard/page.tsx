import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "ゴヤールの実売相場データ【2026年9月】",
  description:
    "ゴヤールのサンルイ・財布・カードケース・バッグについて、オークションで実際に売買が成立した価格を集計。落札件数・平均落札価格・最高値を出典つきで公開します。",
  alternates: { canonical: `${SITE_URL}/souba/goyard/` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "実売相場", item: `${SITE_URL}/souba/` },
    { "@type": "ListItem", position: 3, name: "ゴヤール", item: `${SITE_URL}/souba/goyard/` },
  ],
};

// 実売データ（取得日2026年9月13日）
// 件数・平均＝オークファン落札相場ページの表示値（集計期間は同ページの表記に従う）
// 最高＝Yahoo!オークション落札相場を落札価格の高い順に確認した単品出品の最上位（まとめ売り・他ブランド・フリマ出品は除外）
const rows = [
  {
    category: "サンルイ",
    count: "19件（直近30日）",
    avg: "124,771円",
    max: "550,000円",
    maxNote: "サンルイ GM 限定色シルバー（新品未使用・単品出品）。落札日2026年7月21日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5b4a5e4a1bca5eb20a5b5a5f3a5eba5a4/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%B4%E3%83%A4%E3%83%BC%E3%83%AB%20%E3%82%B5%E3%83%B3%E3%83%AB%E3%82%A4/0/",
  },
  {
    category: "財布",
    count: "9件（直近30日）",
    avg: "39,300円",
    max: "195,800円",
    maxNote: "ヴァレンヌ ポーチウォレット（未使用・単品出品）。落札日2026年8月12日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5b4a5e4a1bca5eb20bae2c9db/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%B4%E3%83%A4%E3%83%BC%E3%83%AB%20%E8%B2%A1%E5%B8%83/0/",
  },
  {
    category: "カードケース",
    count: "7件（直近90日）",
    avg: "52,567円",
    max: "135,520円",
    maxNote: "ブルボン 2026年限定 メドウグリーン（中古・単品出品）。落札日2026年8月28日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5b4a5e4a1bca5eb20a5aba1bca5c9a5b1a1bca5b9/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%B4%E3%83%A4%E3%83%BC%E3%83%AB%20%E3%82%AB%E3%83%BC%E3%83%89%E3%82%B1%E3%83%BC%E3%82%B9/0/",
  },
  {
    category: "バッグ",
    count: "30件（直近30日）",
    avg: "139,979円",
    max: "474,000円",
    maxNote: "ミノディエール ショルダーバッグ（中古・単品出品）。落札日2026年5月3日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5b4a5e4a1bca5eb20a5d0a5c3a5b0/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%B4%E3%83%A4%E3%83%BC%E3%83%AB%20%E3%83%90%E3%83%83%E3%82%B0/0/",
  },
];

export default function GoyardSoubaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs
            items={[{ label: "実売相場", href: "/souba/" }, { label: "ゴヤール" }]}
          />
          <p className="eyebrow mt-8 mb-4">MARKET DATA — GOYARD</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            ゴヤールの実売相場データ
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            業者の広告に載る「参考買取価格」ではなく、オークションで実際に売買が成立した価格だけを集計しました。ゴヤールは公式のオンライン販売がなく国内店舗も限られるため、定番トート「サンルイ」を中心に新品・未使用品が高値で動くのが特徴です。査定に出す前の「相場の物差し」としてお使いください。
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
              <span className="font-bold text-ink">新品・未使用が相場の上限を作っています。</span>
              サンルイの最高値は限定色の新品未使用で、未使用のPMも35万円前後で落札されています。中古の美品は30万円前後が目安で、状態による差より「新品か中古か」の差が大きいカテゴリです。
            </p>
            <p>
              <span className="font-bold text-ink">カードケース・財布は件数が少なく、限定色で跳ねます。</span>
              カードケースは直近90日で7件、財布は直近30日で9件と少なく、平均は少数の落札に左右されます。最高値の13万円台は2026年限定色の例で、通常色は3万〜5万円が目安です。
            </p>
            <p>
              <span className="font-bold text-ink">バッグ全体の平均は比較的高めに出ています。</span>
              バッグカテゴリの平均139,979円は、サンルイ・アルトワなどトート本体の出品比率が高いためで、小物込みの他ブランドの平均とは性質が異なります。
            </p>
          </div>
        </div>
      </section>

      {/* 売る前の準備 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">売る前にやっておきたい準備</h2>
        <div className="max-w-3xl space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            ゴヤールは真贋確認の観点から、購入店のレシート・箱・保存袋の有無が査定に大きく影響します。サンルイはサイズ（PM／GM）と付属ポーチの有無、限定色かどうかを先に控えておきましょう。
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
