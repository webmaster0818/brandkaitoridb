import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "バーバリーの実売相場データ｜買取相場の目安【2026年11月】",
  description:
    "バーバリーのトレンチコート・マフラー・バッグ・財布について、オークションで実際に売買が成立した価格を集計。落札件数・平均落札価格・単品の最高値を出典・取得日とともに公開します。",
  alternates: { canonical: `${SITE_URL}/souba/burberry/` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "実売相場", item: `${SITE_URL}/souba/` },
    { "@type": "ListItem", position: 3, name: "バーバリー", item: `${SITE_URL}/souba/burberry/` },
  ],
};

// 実売データ（取得日2026年11月24日）
// 件数・平均＝オークファン落札相場ページの表示値（集計期間は同ページの表記に従う）
// 最高＝Yahoo!オークション落札相場を落札価格の高い順に確認した単品出品の最上位（まとめ売り・他ブランド・フリマ出品は除外）。特定できないものは「—」
// 生データ: ~/.openclaw/workspace/souba-collect/collect_kwexp_1124.json・collect_kwexp_1124_p2.json
const rows = [
  {
    "category": "トレンチコート",
    "count": "533件（直近30日）",
    "avg": "12,482円",
    "aucfanUrl": "https://aucfan.com/intro/q-~a5d0a1bca5d0a5eaa1bc20a5c8a5eca5f3a5c1a5b3a1bca5c8/",
    "yahooUrl": "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%90%E3%83%BC%E3%83%90%E3%83%AA%E3%83%BC%20%E3%83%88%E3%83%AC%E3%83%B3%E3%83%81%E3%82%B3%E3%83%BC%E3%83%88/0/",
    "max": "190,000円",
    "maxNote": "バーバリーブラックレーベル「The Last トレンチコート」10周年記念復刻（新品・タグ付き・単品出品）。落札日2026年10月12日"
  },
  {
    "category": "マフラー",
    "count": "716件（直近30日）",
    "avg": "8,322円",
    "aucfanUrl": "https://aucfan.com/intro/q-~a5d0a1bca5d0a5eaa1bc20a5dea5d5a5e9a1bc/",
    "yahooUrl": "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%90%E3%83%BC%E3%83%90%E3%83%AA%E3%83%BC%20%E3%83%9E%E3%83%95%E3%83%A9%E3%83%BC/0/",
    "max": "40,000円",
    "maxNote": "リバーシブル カシミヤ100% マフラー（未使用品・単品出品）。上位は複数点のまとめ売りが大半で、マフラー・ケープ・ポンチョ兼用の出品とフリマ出品は除外。落札日2026年11月24日"
  },
  {
    "category": "バッグ",
    "count": "1,309件（直近30日）",
    "avg": "12,453円",
    "aucfanUrl": "https://aucfan.com/intro/q-~a5d0a1bca5d0a5eaa1bc20a5d0a5c3a5b0/",
    "yahooUrl": "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%90%E3%83%BC%E3%83%90%E3%83%AA%E3%83%BC%20%E3%83%90%E3%83%83%E3%82%B0/0/",
    "max": "151,800円",
    "maxNote": "ヴィンテージチェック スモール ローラ ショルダーバッグ（新品同様・単品出品）。これを上回るフリマ出品と複数ブランドのまとめ売りは除外。落札日2026年11月20日"
  },
  {
    "category": "財布",
    "count": "335件（直近30日）",
    "avg": "10,318円",
    "aucfanUrl": "https://aucfan.com/intro/q-~a5d0a1bca5d0a5eaa1bc20bae2c9db/",
    "yahooUrl": "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%90%E3%83%BC%E3%83%90%E3%83%AA%E3%83%BC%20%E8%B2%A1%E5%B8%83/0/",
    "max": "63,500円",
    "maxNote": "メタルロゴ アコーディオン ジップアラウンドウォレット（未使用・箱付き・単品出品）。落札価格の上位20件は複数ブランドのまとめ売りと他ブランド品のため、21件目以降で確認。落札日2026年6月17日"
  }
];

export default function BurberrySoubaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs
            items={[{ label: "実売相場", href: "/souba/" }, { label: "バーバリー" }]}
          />
          <p className="eyebrow mt-8 mb-4">MARKET DATA — BURBERRY</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            バーバリーの実売相場データ
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            業者の広告に載る「参考買取価格」ではなく、オークションで実際に売買が成立した価格だけを集計しました。バーバリーはトレンチコートとマフラーに実売が集まり、バッグ・財布の上位は複数ブランドのまとめ売りが占めるのが特徴です。査定に出す前の「相場の物差し」としてお使いください。
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
          落札件数・平均落札価格はオークファン（aucfan.com）の落札相場ページに表示されている集計値、最高落札価格はYahoo!オークションの落札相場を落札価格の高い順に確認した単品出品の最上位です（複数ブランドのまとめ売り・他ブランド品・フリマ出品は除外）。取得日はいずれも2026年11月24日です。
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
            ※出典：オークファン（aucfan.com）各キーワードの落札相場ページ、およびYahoo!オークション落札相場（落札価格順）。取得日：2026年11月24日。
          </li>
        </ul>
      </section>

      {/* データの読み方 */}
      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-8">このデータの読み方</h2>
          <div className="max-w-3xl space-y-5 text-[0.92rem] leading-loose text-ink-soft">
            <p>
              <span className="font-bold text-ink">トレンチコートの最高値は限定品とビンテージです。</span>
              単品の上位は、ブラックレーベルの10周年記念復刻品（190,000円）や、旧ロゴ「Burberrys」表記のビンテージ（188,000円）でした。現行の定番モデルはケンジントンの未使用品で160,000円が上位の目安です。平均12,482円には、通常の中古品が多く含まれます。
            </p>
            <p>
              <span className="font-bold text-ink">マフラーは件数が多く、単品の上限は4万円台です。</span>
              直近30日の落札は716件と多いものの、高値の出品は複数点のまとめ売りが中心でした。単品ではカシミヤ100%の未使用品が40,000円で、平均は8,322円です。
            </p>
            <p>
              <span className="font-bold text-ink">財布・バッグは「単品の価格」を見てください。</span>
              財布・バッグの落札価格の上位には、他ブランドと混ぜたまとめ売りが並びます。単品で見ると、財布は未使用品で63,500円、バッグは新品同様で151,800円が最上位でした。
            </p>
          </div>
        </div>
      </section>

      {/* 売る前の準備 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">売却前に準備しておきたい事項</h2>
        <div className="max-w-3xl space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            実売データの上位を見ると、同じトレンチコートでもモデル名（ケンジントン等）・サイズ・未使用かどうかで価格が大きく分かれています。タグ・保存袋・箱を先に探し、モデル名・サイズ・素材表記を控えておくと、実売データとの照合がしやすくなります。
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
