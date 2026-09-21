import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "ルイヴィトンの実売相場データ｜買取相場の目安【2026年9月更新】",
  description:
    "ルイヴィトンのバッグ・財布・モノグラムラインについて、オークションで実際に売買が成立した価格を集計。落札件数・平均落札価格・最高値を出典つきで公開します。査定前の物差しにどうぞ。",
  alternates: { canonical: `${SITE_URL}/souba/louis-vuitton/` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "実売相場", item: `${SITE_URL}/souba/` },
    {
      "@type": "ListItem",
      position: 3,
      name: "ルイヴィトン",
      item: `${SITE_URL}/souba/louis-vuitton/`,
    },
  ],
};

// 実売データ（取得日2026年8月17日）
// 件数・平均＝オークファン落札相場ページの表示値／最高＝Yahoo!オークション落札相場（過去120日）の落札価格順で確認した単品出品の最上位
const rows = [
  {
    category: "バッグ",
    count: "4,226件（直近30日）",
    avg: "47,451円",
    max: "1,300,000円",
    maxNote: "クロコダイル サハラ シティスティーマーPM（新品未使用・単品出品）",
    aucfanUrl: "https://aucfan.com/intro/q-~a5eba5a4a5f4a5a3a5c8a5f320a5d0a5c3a5b0/",
    yahooUrl:
      "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%AB%E3%82%A4%E3%83%B4%E3%82%A3%E3%83%88%E3%83%B3%20%E3%83%90%E3%83%83%E3%82%B0/0/",
  },
  {
    category: "財布",
    count: "3,289件（直近30日）",
    avg: "58,978円",
    max: "700,000円",
    maxNote:
      "ジッピーXL クロコダイル（限定品・単品出品）。これを上回る落札（852,500円など）は約170点のまとめ売りのため除外",
    aucfanUrl: "https://aucfan.com/intro/q-~a5eba5a4a5f4a5a3a5c8a5f320bae2c9db/",
    yahooUrl:
      "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%AB%E3%82%A4%E3%83%B4%E3%82%A3%E3%83%88%E3%83%B3%20%E8%B2%A1%E5%B8%83/0/",
  },
  {
    category: "モノグラム（ライン全体）",
    count: "8,248件（直近30日）",
    avg: "48,198円",
    max: "999,000円",
    maxNote: "村上隆コラボ チェリージーンズ（世界限定50枚・サイン入り・単品出品）",
    aucfanUrl: "https://aucfan.com/intro/q-~a5eba5a4a5f4a5a3a5c8a5f320a5e2a5cea5b0a5e9a5e0/",
    yahooUrl:
      "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%AB%E3%82%A4%E3%83%B4%E3%82%A3%E3%83%88%E3%83%B3%20%E3%83%A2%E3%83%8E%E3%82%B0%E3%83%A9%E3%83%A0/0/",
  },
];

// 型番・サイズ別の実売データ（取得日2026年9月21日・P1追補）
// 件数・平均＝オークファン落札相場ページの表示値／最高＝Yahoo!オークション落札一覧を落札価格順に確認した単品出品の最上位（まとめ売り・フリマ出品・関連小物は除外）
const modelRows = [
  {
    category: "モノグラム 財布",
    count: "1,528件（直近30日）",
    avg: "14,142円",
    max: "269,590円",
    maxNote: "スティーマー ウエアラブルウォレット モノグラム・エクリプス M81935（中古・単品出品）。落札一覧は複数ブランドの財布まとめ売りが上位を占めるため除外語付きで再取得。落札日2026年9月19日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5eba5a4a5f4a5a3a5c8a5f320a5e2a5cea5b0a5e9a5e020bae2c9db202da4dea4c8a4e1202da5bba5c3a5c8202dc5c0/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%AB%E3%82%A4%E3%83%B4%E3%82%A3%E3%83%88%E3%83%B3%20%E3%83%A2%E3%83%8E%E3%82%B0%E3%83%A9%E3%83%A0%20%E8%B2%A1%E5%B8%83%20-%E3%81%BE%E3%81%A8%E3%82%81%20-%E3%82%BB%E3%83%83%E3%83%88%20-%E7%82%B9/0/",
  },
  {
    category: "ダミエ 財布",
    count: "531件（直近30日）",
    avg: "11,957円",
    max: "138,000円",
    maxNote: "ダミエグラフィット オーガナイザー 長財布（中古・極美品・単品出品）。落札日2026年5月20日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5eba5a4a5f4a5a3a5c8a5f320a5c0a5dfa5a820bae2c9db202da4dea4c8a4e1202da5bba5c3a5c8202dc5c0/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%AB%E3%82%A4%E3%83%B4%E3%82%A3%E3%83%88%E3%83%B3%20%E3%83%80%E3%83%9F%E3%82%A8%20%E8%B2%A1%E5%B8%83%20-%E3%81%BE%E3%81%A8%E3%82%81%20-%E3%82%BB%E3%83%83%E3%83%88%20-%E7%82%B9/0/",
  },
  {
    category: "モノグラム バッグ",
    count: "2,624件（直近30日）",
    avg: "48,081円",
    max: "780,000円",
    maxNote: "ミニボックストランク モノグラム・エクリプス M21022（中古・単品出品）。これを上回る落札（980,000円）はまとめ売りのため除外。落札日2026年6月20日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5eba5a4a5f4a5a3a5c8a5f320a5e2a5cea5b0a5e9a5e020a5d0a5c3a5b0/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%AB%E3%82%A4%E3%83%B4%E3%82%A3%E3%83%88%E3%83%B3%20%E3%83%A2%E3%83%8E%E3%82%B0%E3%83%A9%E3%83%A0%20%E3%83%90%E3%83%83%E3%82%B0/0/",
  },
  {
    category: "ダミエ バッグ",
    count: "465件（直近30日）",
    avg: "63,631円",
    max: "816,600円",
    maxNote: "ダミエ デニム 3D スピーディ バンドリエール40 N00111（中古・単品出品）。落札日2026年8月19日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5eba5a4a5f4a5a3a5c8a5f320a5c0a5dfa5a820a5d0a5c3a5b0/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%AB%E3%82%A4%E3%83%B4%E3%82%A3%E3%83%88%E3%83%B3%20%E3%83%80%E3%83%9F%E3%82%A8%20%E3%83%90%E3%83%83%E3%82%B0/0/",
  },
  {
    category: "ネヴァーフル",
    count: "110件（直近30日）",
    avg: "85,416円",
    max: "412,374円",
    maxNote: "ネヴァーフル インサイドアウト BB M25657（未使用・単品出品）。落札日2026年8月14日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5eba5a4a5f4a5a3a5c8a5f320a5cda5f4a5a1a1bca5d5a5eb/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%AB%E3%82%A4%E3%83%B4%E3%82%A3%E3%83%88%E3%83%B3%20%E3%83%8D%E3%83%B4%E3%82%A1%E3%83%BC%E3%83%95%E3%83%AB/0/",
  },
  {
    category: "スピーディ",
    count: "370件（直近30日）",
    avg: "81,539円",
    max: "1,020,600円",
    maxNote: "モノグラモフラージュ スピーディ35 M95773（中古・限定コラボ・単品出品）。通常ラインの上限とは別物。落札日2026年6月7日",
    aucfanUrl: "https://aucfan.com/intro/q-~a5eba5a4a5f4a5a3a5c8a5f320a5b9a5d4a1bca5c7a5a3/",
    yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%AB%E3%82%A4%E3%83%B4%E3%82%A3%E3%83%88%E3%83%B3%20%E3%82%B9%E3%83%94%E3%83%BC%E3%83%87%E3%82%A3/0/",
  },
];

export default function LouisVuittonSoubaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs
            items={[{ label: "実売相場", href: "/souba/" }, { label: "ルイヴィトン" }]}
          />
          <p className="eyebrow mt-8 mb-4">MARKET DATA — LOUIS VUITTON</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            ルイヴィトンの実売相場データ
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            業者の広告に載る「参考買取価格」ではなく、オークションで実際に売買が成立した価格だけを集計しました。ルイヴィトンは中古市場で最も流通量が多いブランドのひとつで、バッグ・財布だけで直近30日に7,000件を超える売買が確認できます。査定に出す前の「相場の物差し」としてお使いください。
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
            ※「モノグラム」はライン全体の集計のため、バッグ・財布と対象が一部重複します。
          </li>
          <li>
            ※出典：オークファン（aucfan.com）各キーワードの落札相場ページ、およびYahoo!オークション落札相場（過去120日）。取得日：2026年8月17日。
          </li>
        </ul>
      </section>


      {/* 型番・サイズ別（P1・2026-09-21追補） */}
      <section className="bg-ivory-deep border-y border-line" id="models">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-4">型番・サイズ別の実売データ — 買取相場の目安</h2>
          <p className="max-w-3xl text-[0.9rem] leading-relaxed text-ink-soft mb-8">
            ライン別・モデル別に集計しました。財布はモノグラム・ダミエとも直近30日で500〜1,500件超と流通が非常に厚く、平均は1.2〜1.5万円台（小物・状態不良品を含む）ですが、パイソンなどエキゾチック素材や現行のウエアラブルウォレットは20万円超で落札されています。バッグはトランク系・限定コラボが上限を作り、ネヴァーフル・スピーディの通常品は平均8万円台です。
            取得日はいずれも2026年9月21日です。
          </p>
          <div className="overflow-x-auto">
            <table className="table-lux min-w-[760px]">
              <thead>
                <tr>
                  <th>型番・サイズ</th>
                  <th>落札件数（集計期間）</th>
                  <th>平均落札価格</th>
                  <th>最高落札価格（単品）</th>
                  <th>出典</th>
                </tr>
              </thead>
              <tbody>
                {modelRows.map((r) => (
                  <tr key={r.category}>
                    <td className="font-bold text-ink">{r.category}</td>
                    <td>{r.count}</td>
                    <td>{r.avg}</td>
                    <td>{r.max}</td>
                    <td className="whitespace-nowrap">
                      <a href={r.aucfanUrl} target="_blank" rel="noopener noreferrer" className="text-gold underline underline-offset-2">オークファン</a>
                      {" / "}
                      <a href={r.yahooUrl} target="_blank" rel="noopener noreferrer" className="text-gold underline underline-offset-2">ヤフオク</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-4 space-y-1 text-[0.8rem] text-muted">
            {modelRows.map((r) => (
              <li key={r.category}>※{r.category}の最高落札価格の内訳：{r.maxNote}。</li>
            ))}
            <li>※型番・サイズのキーワード集計には、関連する小物・パーツ・状態不良品も含まれます。平均値は「状態の良い本体の相場」ではなく、最高値は素材・状態の特殊例を含みます。買取査定額は実売より低くなるのが一般的です。</li>
          </ul>
        </div>
      </section>

      {/* データの読み方 */}
      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-8">このデータの読み方</h2>
          <div className="max-w-3xl space-y-5 text-[0.92rem] leading-loose text-ink-soft">
            <p>
              <span className="font-bold text-ink">平均値は「状態の良い中古品の相場」ではありません。</span>
              集計には状態不良品・部品取り目的・複数点のまとめ売りなど、極端な安値の取引も含まれます。流通量が非常に多いブランドのため、古い型や使用感の強い個体が平均を押し下げています。お手元の品物の状態が良ければ、平均より上のレンジが目安になります。
            </p>
            <p>
              <span className="font-bold text-ink">高値側は希少素材・限定品の特殊例です。</span>
              最高落札価格はクロコダイルなどのエキゾチックレザーやアーティストコラボ限定品が中心で、定番のモノグラム・ダミエの通常品の上限とは限りません。
            </p>
            <p>
              <span className="font-bold text-ink">集計元・期間が変わると平均も動きます。</span>
              例えば財布は、上表のオークファン集計（直近30日・3,289件）では平均58,978円ですが、Yahoo!オークション公式の過去120日集計（約30,831件）では平均19,767円と表示されています（取得日2026年8月17日）。対象キーワードの取り方と期間で平均は大きく変わるため、査定額と比べるときは、出典リンク先で同じ型番・近い状態の落札例まで確認するのが確実です。
            </p>
          </div>
        </div>
      </section>

      {/* 売る前の準備 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">売る前にやっておきたい準備</h2>
        <div className="max-w-3xl space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            箱・保存袋・ショルダーストラップ・パドロック（鍵）・購入時のレシートなどの付属品は、揃っているだけで査定の条件が変わります。製品内側の製造刻印（型番・シリアル）を控えておくと、実売データとの照合もしやすくなります。
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
