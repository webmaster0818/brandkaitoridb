import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "ボッテガ・ヴェネタの実売相場データ【2026年9月】",
  description:
    "ボッテガ・ヴェネタのイントレチャート・カセット・財布・バッグについて、オークションで実際に売買が成立した価格を集計。落札件数・平均落札価格・最高値を出典つきで公開します。",
  alternates: { canonical: `${SITE_URL}/souba/bottega-veneta/` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "実売相場", item: `${SITE_URL}/souba/` },
    { "@type": "ListItem", position: 3, name: "ボッテガ・ヴェネタ", item: `${SITE_URL}/souba/bottega-veneta/` },
  ],
};

// 実売データ（取得日2026年9月13日）
// 件数・平均＝オークファン落札相場ページの表示値（集計期間は同ページの表記に従う）
// 最高＝Yahoo!オークション落札相場を落札価格の高い順に確認した単品出品の最上位（まとめ売り・他ブランド・フリマ出品は除外）
const rows = [
  {
    category: "イントレチャート",
    count: "770件（直近30日）",
    avg: "38,810円",
    max: "441,100円",
    maxNote: "カバMM イントレチャート ラージトート（中古・単品出品）。落札日2026年8月2日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5dca5c3a5c6a5aca5f4a5a7a5cda5bf20a5a4a5f3a5c8a5eca5c1a5e3a1bca5c8/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%9C%E3%83%83%E3%83%86%E3%82%AC%E3%83%B4%E3%82%A7%E3%83%8D%E3%82%BF%20%E3%82%A4%E3%83%B3%E3%83%88%E3%83%AC%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88/0/",
  },
  {
    category: "カセット",
    count: "71件（直近30日）",
    avg: "45,304円",
    max: "278,500円",
    maxNote: "パデッド カセット 591970（未使用・単品出品）。落札日2026年6月19日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5dca5c3a5c6a5aca5f4a5a7a5cda5bf20a5aba5bba5c3a5c8/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%9C%E3%83%83%E3%83%86%E3%82%AC%E3%83%B4%E3%82%A7%E3%83%8D%E3%82%BF%20%E3%82%AB%E3%82%BB%E3%83%83%E3%83%88/0/",
  },
  {
    category: "財布",
    count: "407件（直近30日）",
    avg: "15,420円",
    max: "159,800円",
    maxNote: "イントレチャート ジップウォレット 長財布（新品・単品出品）。これを上回る落札は複数ブランドの財布まとめ売りのため除外。落札日2026年8月6日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5dca5c3a5c6a5aca5f4a5a7a5cda5bf20bae2c9db/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%9C%E3%83%83%E3%83%86%E3%82%AC%E3%83%B4%E3%82%A7%E3%83%8D%E3%82%BF%20%E8%B2%A1%E5%B8%83/0/",
  },
  {
    category: "バッグ",
    count: "320件（直近30日）",
    avg: "42,874円",
    max: "441,100円",
    maxNote: "カバMM イントレチャート ラージトート（中古・単品出品。イントレチャートの最高値と同一出品）。落札日2026年8月2日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5dca5c3a5c6a5aca5f4a5a7a5cda5bf20a5d0a5c3a5b0/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%9C%E3%83%83%E3%83%86%E3%82%AC%E3%83%B4%E3%82%A7%E3%83%8D%E3%82%BF%20%E3%83%90%E3%83%83%E3%82%B0/0/",
  },
];

export default function BottegaVenetaSoubaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs
            items={[{ label: "実売相場", href: "/souba/" }, { label: "ボッテガ・ヴェネタ" }]}
          />
          <p className="eyebrow mt-8 mb-4">MARKET DATA — BOTTEGA VENETA</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            ボッテガ・ヴェネタの実売相場データ
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            業者の広告に載る「参考買取価格」ではなく、オークションで実際に売買が成立した価格だけを集計しました。ボッテガ・ヴェネタは編み込みレザー「イントレチャート」の出品が圧倒的に多く、カセットなど近年のアイコンバッグと、財布・小物の大量流通が同居するブランドです。査定に出す前の「相場の物差し」としてお使いください。
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
              <span className="font-bold text-ink">イントレチャートの平均は「小物込み」の値です。</span>
              直近30日で770件と件数が最も多いカテゴリですが、キーホルダー・カードケース・名刺入れといった小物も同じキーワードで集計されるため、平均38,810円はバッグ本体の相場より低めに出ています。バッグ本体はレンジの上側、小物は下側が目安です。
            </p>
            <p>
              <span className="font-bold text-ink">カセットは型番と状態で価格が読みやすいカテゴリです。</span>
              最高値は未使用品のパデッド カセットで、中古の美品も20万円台前半で落札されています。マキシイントレチャートの現行モデルは型番（591970など）が明記されることが多く、出典リンク先で同じ型番の落札例を探すと査定額の妥当性を判断しやすくなります。
            </p>
            <p>
              <span className="font-bold text-ink">財布は新品・未使用と中古で二層になっています。</span>
              財布カテゴリの上位は「国内完売」「未使用」といった新品条件が多く、中古の本体は10万円前後が上限の目安です。平均15,420円には小物・まとめ売りが含まれます。
            </p>
          </div>
        </div>
      </section>

      {/* 売る前の準備 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">売る前にやっておきたい準備</h2>
        <div className="max-w-3xl space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            ボッテガ・ヴェネタは編み込みの角スレ・型崩れが査定に直結します。保存袋・箱・ギャランティカード（近年はRFIDタグ）を先に探しておきましょう。カセットは型番、イントレチャートのバッグはライン名（カバ・アルコなど）とサイズを控えておくと、実売データとの照合がしやすくなります。
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
