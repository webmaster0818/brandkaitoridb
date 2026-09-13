import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "バレンシアガの実売相場データ【2026年9月】",
  description:
    "バレンシアガのバッグ・財布・トリプルS・シティについて、オークションで実際に売買が成立した価格を集計。落札件数・平均落札価格・最高値を出典つきで公開します。",
  alternates: { canonical: `${SITE_URL}/souba/balenciaga/` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "実売相場", item: `${SITE_URL}/souba/` },
    { "@type": "ListItem", position: 3, name: "バレンシアガ", item: `${SITE_URL}/souba/balenciaga/` },
  ],
};

// 実売データ（取得日2026年9月13日）
// 件数・平均＝オークファン落札相場ページの表示値（集計期間は同ページの表記に従う）
// 最高＝Yahoo!オークション落札相場を落札価格の高い順に確認した単品出品の最上位（まとめ売り・他ブランド・フリマ出品は除外）
const rows = [
  {
    category: "バッグ",
    count: "218件（直近30日）",
    avg: "24,529円",
    max: "430,116円",
    maxNote: "ロデオ ミディアム 789772（中古・単品出品）。落札日2026年7月21日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5d0a5eca5f3a5b7a5a2a5ac20a5d0a5c3a5b0/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%90%E3%83%AC%E3%83%B3%E3%82%B7%E3%82%A2%E3%82%AC%20%E3%83%90%E3%83%83%E3%82%B0/0/",
  },
  {
    category: "財布",
    count: "116件（直近30日）",
    avg: "7,982円",
    max: "99,000円",
    maxNote: "グッチ×バレンシアガ ザ ハッカープロジェクト コンチネンタルウォレット（中古・単品出品）。これを上回る落札は複数ブランドのまとめ売りのため除外。落札日2026年7月18日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5d0a5eca5f3a5b7a5a2a5ac20bae2c9db/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%90%E3%83%AC%E3%83%B3%E3%82%B7%E3%82%A2%E3%82%AC%20%E8%B2%A1%E5%B8%83/0/",
  },
  {
    category: "トリプルS",
    count: "16件（直近30日）",
    avg: "28,379円",
    max: "81,000円",
    maxNote: "アディダス×バレンシアガ トリプルS 712821（新品・単品出品）。落札日2026年8月10日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5d0a5eca5f3a5b7a5a2a5ac20a5c8a5eaa5d7a5eb53/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%90%E3%83%AC%E3%83%B3%E3%82%B7%E3%82%A2%E3%82%AC%20%E3%83%88%E3%83%AA%E3%83%97%E3%83%ABS/0/",
  },
  {
    category: "シティ",
    count: "20件（直近30日）",
    avg: "118,184円",
    max: "306,600円",
    maxNote: "ザ シティ 115748（中古・単品出品）。落札日2026年8月22日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5d0a5eca5f3a5b7a5a2a5ac20a5b7a5c6a5a3/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%90%E3%83%AC%E3%83%B3%E3%82%B7%E3%82%A2%E3%82%AC%20%E3%82%B7%E3%83%86%E3%82%A3/0/",
  },
];

export default function BalenciagaSoubaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs
            items={[{ label: "実売相場", href: "/souba/" }, { label: "バレンシアガ" }]}
          />
          <p className="eyebrow mt-8 mb-4">MARKET DATA — BALENCIAGA</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            バレンシアガの実売相場データ
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            業者の広告に載る「参考買取価格」ではなく、オークションで実際に売買が成立した価格だけを集計しました。バレンシアガは定番バッグ「シティ」に加え、スニーカーのトリプルS、グッチやアディダスとのコラボ品が実売を動かす、ストリート寄りのブランドです。査定に出す前の「相場の物差し」としてお使いください。
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
              <span className="font-bold text-ink">バッグの最高値は現行アイコン「ロデオ」です。</span>
              バッグカテゴリの上位はロデオ ミディアムが40万円前後、シティが30万円前後で、旧アイコンのシティより現行のロデオのほうが上限は高くなっています。平均24,529円には小物・状態不良品が含まれます。
            </p>
            <p>
              <span className="font-bold text-ink">財布・スニーカーはコラボ品が上位を占めます。</span>
              財布の最高値はグッチとの「ハッカープロジェクト」、トリプルSの最高値はアディダスとのコラボモデルで、いずれも通常ラインとは別の相場です。通常のトリプルSの中古は3万〜7万円が目安になります。
            </p>
            <p>
              <span className="font-bold text-ink">シティは件数が少なく、状態と年式で幅があります。</span>
              直近30日の落札件数は20件で、平均118,184円は美品・限定色に引っ張られています。使用感のある個体はレンジの下側が目安です。
            </p>
          </div>
        </div>
      </section>

      {/* 売る前の準備 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">売る前にやっておきたい準備</h2>
        <div className="max-w-3xl space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            バレンシアガはバッグの刻印（型番・製造番号）とスニーカーのサイズ・箱の有無が査定に直結します。保存袋・箱・替え紐・レシートを先に探し、コラボ品は型番を控えておくと、実売データとの照合がしやすくなります。
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
