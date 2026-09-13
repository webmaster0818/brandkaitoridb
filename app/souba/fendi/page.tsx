import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "フェンディの実売相場データ【2026年9月】",
  description:
    "フェンディのバゲット・ピーカブー・財布・バッグについて、オークションで実際に売買が成立した価格を集計。落札件数・平均落札価格・最高値を出典つきで公開します。",
  alternates: { canonical: `${SITE_URL}/souba/fendi/` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "実売相場", item: `${SITE_URL}/souba/` },
    { "@type": "ListItem", position: 3, name: "フェンディ", item: `${SITE_URL}/souba/fendi/` },
  ],
};

// 実売データ（取得日2026年9月13日）
// 件数・平均＝オークファン落札相場ページの表示値（集計期間は同ページの表記に従う）
// 最高＝Yahoo!オークション落札相場を落札価格の高い順に確認した単品出品の最上位（まとめ売り・他ブランド・フリマ出品は除外）
const rows = [
  {
    category: "バゲット",
    count: "31件（直近30日）",
    avg: "142,689円",
    max: "636,400円",
    maxNote: "マンマバゲット レオパード ハラコ 8BR600（中古・単品出品）。落札日2026年8月20日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5d5a5a7a5f3a5c7a5a320a5d0a5b2a5c3a5c8/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%95%E3%82%A7%E3%83%B3%E3%83%87%E3%82%A3%20%E3%83%90%E3%82%B2%E3%83%83%E3%83%88/0/",
  },
  {
    category: "ピーカブー",
    count: "28件（直近30日）",
    avg: "67,746円",
    max: "378,468円",
    maxNote: "ピーカブー アイシーユー プチ 8BN335（中古・単品出品）。落札日2026年8月9日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5d5a5a7a5f3a5c7a5a320a5d4a1bca5aba5d6a1bc/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%95%E3%82%A7%E3%83%B3%E3%83%87%E3%82%A3%20%E3%83%94%E3%83%BC%E3%82%AB%E3%83%96%E3%83%BC/0/",
  },
  {
    category: "財布",
    count: "245件（直近30日）",
    avg: "10,395円",
    max: "98,000円",
    maxNote: "セレリア アリゲーターレザー 二つ折り財布（中古・単品出品）。これを上回る落札は複数ブランドのまとめ売りと他ブランドのバッグのため除外。落札日2026年4月19日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5d5a5a7a5f3a5c7a5a320bae2c9db/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%95%E3%82%A7%E3%83%B3%E3%83%87%E3%82%A3%20%E8%B2%A1%E5%B8%83/0/",
  },
  {
    category: "バッグ",
    count: "681件（直近30日）",
    avg: "42,029円",
    max: "898,000円",
    maxNote: "マンマバケット スエード ビーズ（中古・単品出品）。落札日2026年7月13日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5d5a5a7a5f3a5c7a5a320a5d0a5c3a5b0/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%95%E3%82%A7%E3%83%B3%E3%83%87%E3%82%A3%20%E3%83%90%E3%83%83%E3%82%B0/0/",
  },
];

export default function FendiSoubaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs
            items={[{ label: "実売相場", href: "/souba/" }, { label: "フェンディ" }]}
          />
          <p className="eyebrow mt-8 mb-4">MARKET DATA — FENDI</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            フェンディの実売相場データ
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            業者の広告に載る「参考買取価格」ではなく、オークションで実際に売買が成立した価格だけを集計しました。フェンディはバゲット・ピーカブーの2大アイコンに加え、1990〜2000年代のマンマバケットが高値で動くのが特徴です。査定に出す前の「相場の物差し」としてお使いください。
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
              <span className="font-bold text-ink">バゲットの高値はヴィンテージのマンマバケットが中心です。</span>
              最高落札価格の上位はハラコ・ビーズ・スパンコールといった1990年代〜2000年代前半の装飾モデルで、現行の無地レザーの上限とは限りません。ピーカブーは現行に近い型番（8BN335・8BN244など）が30万円台で落札されており、型番で相場を追いやすいカテゴリです。
            </p>
            <p>
              <span className="font-bold text-ink">財布の平均値は周辺出品に引き下げられています。</span>
              財布カテゴリは直近30日で245件と件数が多い一方、平均は10,395円と低めです。ズッカ柄の小物やまとめ売りが含まれるためで、状態の良い本体はレンジの上側が目安になります。
            </p>
            <p>
              <span className="font-bold text-ink">集計元・期間が変わると平均も動きます。</span>
              例えばバゲットは、上表のオークファン集計（直近30日・31件）では平均142,689円ですが、Yahoo!オークション側の一覧表示では平均78,729円と表示されています（取得日2026年9月13日）。査定額と比べるときは、出典リンク先で同じモデル・近い状態の落札例まで確認するのが確実です。
            </p>
          </div>
        </div>
      </section>

      {/* 売る前の準備 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">売る前にやっておきたい準備</h2>
        <div className="max-w-3xl space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            フェンディはヴィンテージ品の比率が高いため、製造時期がわかる刻印・ホログラムシール・付属のギャランティカードを先に確認しておきましょう。バゲットはサイズ（ミニ／ミディアム）、ピーカブーはサイズと型番（8BN〜）を控えておくと、実売データとの照合がしやすくなります。
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
