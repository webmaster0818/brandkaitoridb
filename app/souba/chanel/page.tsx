import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "シャネルの実売相場データ【2026年8月】",
  description:
    "シャネルのマトラッセ・バッグ・財布について、オークションで実際に売買が成立した価格を集計。落札件数・平均落札価格・最高値を出典つきで公開します。査定前の物差しにどうぞ。",
  alternates: { canonical: `${SITE_URL}/souba/chanel/` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "実売相場", item: `${SITE_URL}/souba/` },
    { "@type": "ListItem", position: 3, name: "シャネル", item: `${SITE_URL}/souba/chanel/` },
  ],
};

// 実売データ（取得日2026年8月17日）
// 件数・平均＝オークファン落札相場ページの表示値／最高＝Yahoo!オークション落札相場（過去120日）の落札価格順で確認した単品出品の最上位
const rows = [
  {
    category: "マトラッセ",
    count: "903件（直近30日）",
    avg: "151,848円",
    max: "1,101,000円",
    maxNote:
      "マトラッセ25 クラシックフラップ（キャビアスキン・新品未使用・単品出品）。これを上回る落札（1,552,100円）は約100点のまとめ売りのため除外",
    aucfanUrl: "https://aucfan.com/intro/q-~a5b7a5e3a5cda5eb20a5dea5c8a5e9a5c3a5bb/",
    yahooUrl:
      "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%B7%E3%83%A3%E3%83%8D%E3%83%AB%20%E3%83%9E%E3%83%88%E3%83%A9%E3%83%83%E3%82%BB/0/",
  },
  {
    category: "バッグ全体",
    count: "1,163件（直近30日）",
    avg: "110,725円",
    max: "1,280,000円",
    maxNote: "トートバッグ（単品出品）",
    aucfanUrl: "https://aucfan.com/intro/q-~a5b7a5e3a5cda5eb20a5d0a5c3a5b0/",
    yahooUrl:
      "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%B7%E3%83%A3%E3%83%8D%E3%83%AB%20%E3%83%90%E3%83%83%E3%82%B0/0/",
  },
  {
    category: "財布",
    count: "674件（直近30日）",
    avg: "38,574円",
    max: "384,484円",
    maxNote:
      "キャビアスキン カメリア型押し チェーンウォレット（美品・付属品あり・単品出品）。これを上回る落札はまとめ売りのため除外",
    aucfanUrl: "https://aucfan.com/intro/q-~a5b7a5e3a5cda5eb20bae2c9db/",
    yahooUrl:
      "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%B7%E3%83%A3%E3%83%8D%E3%83%AB%20%E8%B2%A1%E5%B8%83/0/",
  },
];

export default function ChanelSoubaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs
            items={[{ label: "実売相場", href: "/souba/" }, { label: "シャネル" }]}
          />
          <p className="eyebrow mt-8 mb-4">MARKET DATA — CHANEL</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            シャネルの実売相場データ
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            業者の広告に載る「参考買取価格」ではなく、オークションで実際に売買が成立した価格だけを集計しました。シャネルは定番のマトラッセが相場の中心で、実売でも平均15万円前後と高い水準を保っています。査定に出す前の「相場の物差し」としてお使いください。
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
          落札件数・平均落札価格はオークファン（aucfan.com）の落札相場ページに表示されている集計値、最高落札価格はYahoo!オークションの落札相場（過去120日）を落札価格の高い順に確認した単品出品の最上位です。取得日はいずれも2026年8月17日です。
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
            ※「マトラッセ」はライン全体の集計のため、バッグ・財布と対象が一部重複します。
          </li>
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
              <span className="font-bold text-ink">平均値は「状態の良い中古品の相場」ではありません。</span>
              集計には状態不良品・部品取り目的・小物（キーケース・ポーチなど）の安値の取引も含まれます。状態の良いバッグ本体であれば、平均より上のレンジが目安になります。
            </p>
            <p>
              <span className="font-bold text-ink">高値側は未使用・人気仕様の特殊例です。</span>
              最高落札価格は新品未使用のマトラッセ25など、人気サイズ×人気素材（キャビアスキン等）×状態極上の組み合わせが中心で、使用ありの通常品の上限とは限りません。なお、複数点のまとめ売りが単品の最高値を上回るケースは集計から除外しています。
            </p>
            <p>
              <span className="font-bold text-ink">集計元・期間が変わると平均も動きます。</span>
              例えばマトラッセは、上表のオークファン集計（直近30日・903件）では平均151,848円ですが、Yahoo!オークション公式の過去120日集計（約5,211件）では平均112,860円と表示されています（取得日2026年8月17日）。査定額と比べるときは、出典リンク先で同じサイズ・素材・近い状態の落札例まで確認するのが確実です。
            </p>
          </div>
        </div>
      </section>

      {/* 売る前の準備 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">売る前にやっておきたい準備</h2>
        <div className="max-w-3xl space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            シャネルはギャランティカードとシリアルシールの有無が査定の条件を大きく左右します。箱・保存袋・カメリア（付属の花飾り）・購入時のレシートと合わせて先に探しておきましょう。シリアル番号を控えておくと、実売データとの照合もしやすくなります。
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
