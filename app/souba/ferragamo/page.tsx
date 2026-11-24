import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "フェラガモの実売相場データ｜買取相場の目安【2026年11月】",
  description:
    "フェラガモのバッグ・財布・パンプス・ベルトについて、オークションで実際に売買が成立した価格を集計。落札件数・平均落札価格・単品の最高値を出典・取得日とともに公開します。",
  alternates: { canonical: `${SITE_URL}/souba/ferragamo/` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "実売相場", item: `${SITE_URL}/souba/` },
    { "@type": "ListItem", position: 3, name: "フェラガモ", item: `${SITE_URL}/souba/ferragamo/` },
  ],
};

// 実売データ（取得日2026年11月24日）
// 件数・平均＝オークファン落札相場ページの表示値（集計期間は同ページの表記に従う）
// 最高＝Yahoo!オークション落札相場を落札価格の高い順に確認した単品出品の最上位（まとめ売り・他ブランド・フリマ出品は除外）。特定できないものは「—」
// 生データ: ~/.openclaw/workspace/souba-collect/collect_kwexp_1124.json・collect_kwexp_1124_p2.json
const rows = [
  {
    "category": "バッグ",
    "count": "783件（直近30日）",
    "avg": "8,169円",
    "aucfanUrl": "https://aucfan.com/intro/q-~a5d5a5a7a5e9a5aca5e220a5d0a5c3a5b0/",
    "yahooUrl": "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%95%E3%82%A7%E3%83%A9%E3%82%AC%E3%83%A2%20%E3%83%90%E3%83%83%E3%82%B0/0/",
    "max": "205,000円",
    "maxNote": "ハグ 2wayショルダーバッグ Sサイズ（1回使用・単品出品）。これを上回る落札は複数ブランドのまとめ売りのため除外。落札日2026年10月28日"
  },
  {
    "category": "財布",
    "count": "328件（直近30日）",
    "avg": "4,367円",
    "aucfanUrl": "https://aucfan.com/intro/q-~a5d5a5a7a5e9a5aca5e220bae2c9db/",
    "yahooUrl": "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%95%E3%82%A7%E3%83%A9%E3%82%AC%E3%83%A2%20%E8%B2%A1%E5%B8%83/0/",
    "max": "75,800円",
    "maxNote": "ガンチーニ クリップ 二つ折り長財布（未使用・単品出品）。これを上回る落札は複数ブランドのまとめ売りのため除外。落札日2026年7月6日"
  },
  {
    "category": "パンプス",
    "count": "300件（直近90日）",
    "avg": "4,989円",
    "aucfanUrl": "https://aucfan.com/intro/q-~a5d5a5a7a5e9a5aca5e220a5d1a5f3a5d7a5b9/",
    "yahooUrl": "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%95%E3%82%A7%E3%83%A9%E3%82%AC%E3%83%A2%20%E3%83%91%E3%83%B3%E3%83%97%E3%82%B9/0/",
    "max": "37,500円",
    "maxNote": "ヴィヴァ55（新品未使用・単品出品）。これを上回る落札は複数点のまとめ売り・フリマ出品のため除外。落札日2026年7月24日"
  },
  {
    "category": "ベルト",
    "count": "121件（直近30日）",
    "avg": "9,293円",
    "aucfanUrl": "https://aucfan.com/intro/q-~a5d5a5a7a5e9a5aca5e220a5d9a5eba5c8/",
    "yahooUrl": "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%95%E3%82%A7%E3%83%A9%E3%82%AC%E3%83%A2%20%E3%83%99%E3%83%AB%E3%83%88/0/",
    "max": "33,300円",
    "maxNote": "ダブルガンチーニ ベルト サイズ105（未使用・単品出品）。これを上回る落札は複数点のまとめ売りと、ベルト付きのワンピースのため除外。落札日2026年5月31日"
  }
];

export default function FerragamoSoubaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs
            items={[{ label: "実売相場", href: "/souba/" }, { label: "フェラガモ" }]}
          />
          <p className="eyebrow mt-8 mb-4">MARKET DATA — FERRAGAMO</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            フェラガモの実売相場データ
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            業者の広告に載る「参考買取価格」ではなく、オークションで実際に売買が成立した価格だけを集計しました。フェラガモはバッグのハグに単品の高値が集まり、財布・靴・ベルトは数万円台が上限という分布です。査定に出す前の「相場の物差し」としてお使いください。
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
              <span className="font-bold text-ink">バッグの単品上位は「ハグ」です。</span>
              単品の上位はハグ（205,000円・161,680円ほか）と、スター トートバッグの未使用品（174,000円）でした。平均8,169円には、旧型のバッグやまとめ売りが含まれます。
            </p>
            <p>
              <span className="font-bold text-ink">財布は平均と単品の最高値の差が大きいブランドです。</span>
              財布の平均は4,367円ですが、単品の最上位は未使用のガンチーニ クリップ財布で75,800円でした。未使用・現行デザインかどうかで大きく変わります。
            </p>
            <p>
              <span className="font-bold text-ink">パンプスは集計期間が90日です。</span>
              オークファンのパンプスの集計は直近90日（300件）で、ほかのカテゴリ（30日）と期間が違います。件数は同列に比べないでください。
            </p>
          </div>
        </div>
      </section>

      {/* 売る前の準備 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">売却前に準備しておきたい事項</h2>
        <div className="max-w-3xl space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            実売データの単品上位は、ハグ・ヴィヴァ・ガンチーニなど型名の分かる出品でした。箱・保存袋などの付属品を先に探し、型名・サイズ・色を控えておくと、実売データとの照合がしやすくなります。
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

      {/* 同時期に公開したブランド */}
      <section className="mx-auto max-w-6xl px-5 pb-14 md:pb-18">
        <h2 className="rule-gold text-2xl text-ink mb-6">同じ時期に集計したブランド</h2>
        <p className="max-w-3xl text-[0.92rem] leading-relaxed text-ink-soft mb-8">
          2026年11月24日に同じ方法で集計したブランドです。全ブランドの一覧は実売相場ハブにまとめています。
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="/souba/burberry/" className="btn-line">バーバリーの実売相場データ</a>
          <a href="/souba/coach/" className="btn-line">コーチの実売相場データ</a>
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
