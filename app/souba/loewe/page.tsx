import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "ロエベの実売相場データ【2026年9月】",
  description:
    "ロエベのパズル・ハンモック・アナグラム・財布について、オークションで実際に売買が成立した価格を集計。落札件数・平均落札価格・最高値を出典つきで公開します。",
  alternates: { canonical: `${SITE_URL}/souba/loewe/` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "実売相場", item: `${SITE_URL}/souba/` },
    { "@type": "ListItem", position: 3, name: "ロエベ", item: `${SITE_URL}/souba/loewe/` },
  ],
};

// 実売データ（取得日2026年9月13日）
// 件数・平均＝オークファン落札相場ページの表示値（集計期間は同ページの表記に従う）
// 最高＝Yahoo!オークション落札相場を落札価格の高い順に確認した単品出品の最上位（まとめ売り・他ブランド・フリマ出品は除外）
const rows = [
  {
    category: "パズル",
    count: "28件（直近30日）",
    avg: "88,174円",
    max: "401,368円",
    maxNote: "パズルバッグ バイカー ラージ シャイニーカーフ（中古・単品出品）。落札日2026年5月6日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5eda5a8a5d920a5d1a5baa5eb/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%AD%E3%82%A8%E3%83%99%20%E3%83%91%E3%82%BA%E3%83%AB/0/",
  },
  {
    category: "ハンモック",
    count: "15件（直近30日）",
    avg: "126,731円",
    max: "715,660円",
    maxNote: "ロエベ×スタジオジブリ ハンモック ドローストリング トトロ スモール（新品同様・単品出品）。落札日2026年6月28日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5eda5a8a5d920a5cfa5f3a5e2a5c3a5af/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%AD%E3%82%A8%E3%83%99%20%E3%83%8F%E3%83%B3%E3%83%A2%E3%83%83%E3%82%AF/0/",
  },
  {
    category: "アナグラム",
    count: "498件（直近30日）",
    avg: "19,024円",
    max: "226,600円",
    maxNote: "アナグラム パズルバッグ ミディアム（中古・単品出品）。出品タイトルに「アナグラム」表記のある単品のうち最上位。落札日2026年7月12日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5eda5a8a5d920a5a2a5caa5b0a5e9a5e0/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%AD%E3%82%A8%E3%83%99%20%E3%82%A2%E3%83%8A%E3%82%B0%E3%83%A9%E3%83%A0/0/",
  },
  {
    category: "財布",
    count: "169件（直近30日）",
    avg: "17,093円",
    max: "112,998円",
    maxNote: "パズル ジップアラウンド ウォレット（新品・単品出品）。これを上回る落札はリュックの出品と複数ブランドのまとめ売りのため除外。落札日2026年9月6日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5eda5a8a5d920bae2c9db/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%AD%E3%82%A8%E3%83%99%20%E8%B2%A1%E5%B8%83/0/",
  },
];

export default function LoeweSoubaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs
            items={[{ label: "実売相場", href: "/souba/" }, { label: "ロエベ" }]}
          />
          <p className="eyebrow mt-8 mb-4">MARKET DATA — LOEWE</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            ロエベの実売相場データ
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            業者の広告に載る「参考買取価格」ではなく、オークションで実際に売買が成立した価格だけを集計しました。ロエベはパズル・ハンモックという2つのアイコンバッグに実売が集中し、スタジオジブリなどのコラボ限定品が突出した高値をつけるのが特徴です。査定に出す前の「相場の物差し」としてお使いください。
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
              <span className="font-bold text-ink">ハンモックの最高値はコラボ限定品です。</span>
              70万円台・50万円台の落札はいずれもスタジオジブリとのコラボレーション限定モデルで、通常のレザー製ハンモックは20万〜33万円が上限の目安です。コラボ品をお持ちの場合は、通常品とは別の相場として査定額を見比べてください。
            </p>
            <p>
              <span className="font-bold text-ink">アナグラムは「柄」の集計なので幅が広い点に注意してください。</span>
              アナグラムはロエベのロゴ柄を指すため、バッグ・財布・小物・衣料が同じキーワードに含まれます。直近30日で498件と件数は多いものの、平均19,024円は小物込みの値です。
            </p>
            <p>
              <span className="font-bold text-ink">財布は新品条件が上位を占めています。</span>
              財布カテゴリの上位は未使用・並行輸入の新品が中心で、中古の本体は10万円未満が目安です。平均17,093円にはまとめ売りが含まれます。
            </p>
          </div>
        </div>
      </section>

      {/* 売る前の準備 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">売る前にやっておきたい準備</h2>
        <div className="max-w-3xl space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            ロエベは付属品と現行・旧ロゴの区別が査定に影響します。箱・保存袋・ギャランティカード（レシート）を先に探し、パズルはサイズ（ミニ／スモール／ミディアム／ラージ）、ハンモックはサイズとコラボの有無を控えておくと、実売データとの照合がしやすくなります。
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
