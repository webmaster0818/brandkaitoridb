import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "サンローランの実売相場データ【2026年9月】",
  description:
    "サンローランのバッグ・財布・ライダース・ケイトについて、オークションで実際に売買が成立した価格を集計。落札件数・平均落札価格・最高値を出典つきで公開します。",
  alternates: { canonical: `${SITE_URL}/souba/saint-laurent/` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "実売相場", item: `${SITE_URL}/souba/` },
    { "@type": "ListItem", position: 3, name: "サンローラン", item: `${SITE_URL}/souba/saint-laurent/` },
  ],
};

// 実売データ（取得日2026年9月13日）
// 件数・平均＝オークファン落札相場ページの表示値（集計期間は同ページの表記に従う）
// 最高＝Yahoo!オークション落札相場を落札価格の高い順に確認した単品出品の最上位（まとめ売り・他ブランド・フリマ出品は除外）
const rows = [
  {
    category: "バッグ",
    count: "308件（直近30日）",
    avg: "21,082円",
    max: "459,600円",
    maxNote: "ジェイミー ジャイアント 800628（中古・単品出品）。落札日2026年8月15日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5b5a5f3a5eda1bca5e9a5f320a5d0a5c3a5b0/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%B5%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%A9%E3%83%B3%20%E3%83%90%E3%83%83%E3%82%B0/0/",
  },
  {
    category: "財布",
    count: "161件（直近30日）",
    avg: "13,392円",
    max: "148,000円",
    maxNote: "カサンドラ エンベロープ チェーンウォレット 393953（中古・単品出品）。これを上回る落札は複数ブランドの財布まとめ売りのため除外。落札日2026年6月25日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5b5a5f3a5eda1bca5e9a5f320bae2c9db/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%B5%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%A9%E3%83%B3%20%E8%B2%A1%E5%B8%83/0/",
  },
  {
    category: "ライダース",
    count: "13件（直近90日）",
    avg: "98,333円",
    max: "301,000円",
    maxNote: "エディ期 スタッズ レザーライダース（中古・単品出品）。落札日2026年4月4日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5b5a5f3a5eda1bca5e9a5f320a5e9a5a4a5c0a1bca5b9/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%B5%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%A9%E3%83%B3%20%E3%83%A9%E3%82%A4%E3%83%80%E3%83%BC%E3%82%B9/0/",
  },
  {
    category: "ケイト",
    count: "10件（直近30日）",
    avg: "18,183円",
    max: "97,990円",
    maxNote: "ケイト チェーンショルダー クロコ型押し 354119（中古・単品出品）。落札日2026年4月11日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5b5a5f3a5eda1bca5e9a5f320a5b1a5a4a5c8/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%B5%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%A9%E3%83%B3%20%E3%82%B1%E3%82%A4%E3%83%88/0/",
  },
];

export default function SaintLaurentSoubaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs
            items={[{ label: "実売相場", href: "/souba/" }, { label: "サンローラン" }]}
          />
          <p className="eyebrow mt-8 mb-4">MARKET DATA — SAINT LAURENT</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            サンローランの実売相場データ
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            業者の広告に載る「参考買取価格」ではなく、オークションで実際に売買が成立した価格だけを集計しました。サンローランはバッグ・財布に加え、エディ・スリマン期のレザーライダースが高値で動く、衣料の比重が大きいブランドです。査定に出す前の「相場の物差し」としてお使いください。
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
              <span className="font-bold text-ink">バッグの平均はケイトなど中価格帯モデルの厚みを反映しています。</span>
              バッグカテゴリは直近30日で308件・平均21,082円と件数が多く、ケイト・ルーといった10万円前後で動くモデルが中心です。ジェイミーなどの大型・現行モデルは40万円台の落札もあり、モデルによって上限が大きく違います。
            </p>
            <p>
              <span className="font-bold text-ink">ライダースは「時期」で相場が決まります。</span>
              ライダースの上位はエディ・スリマン期（2012〜2016年頃）のモデルで、新品タグ付きや年式の明記されたものが29万〜30万円台で落札されています。年式・サイズ・ラインが不明なものは同じ相場にはなりません。集計期間が直近90日である点にも注意してください。
            </p>
            <p>
              <span className="font-bold text-ink">ケイトは件数が少なく、状態の影響が大きいカテゴリです。</span>
              直近30日の落札件数は10件で、平均18,183円には小物や状態不良品が含まれます。クロコ型押し・タッセル付きの美品は8万〜10万円が上限の目安です。
            </p>
          </div>
        </div>
      </section>

      {/* 売る前の準備 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">売る前にやっておきたい準備</h2>
        <div className="max-w-3xl space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            サンローランは製造時期の判別が査定に影響します。バッグ・財布は内側の刻印（シリアル）と保存袋・ギャランティカード、ライダースは内タグのサイズ・年式表記を先に確認しておきましょう。ケイトはサイズ（ミディアム／スモール）とタッセルの有無を控えておくと照合がしやすくなります。
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
