import type { Metadata } from "next";
import { SITE_URL } from "../lib/site";
import Breadcrumbs from "../components/Breadcrumbs";
import { REVIEWS } from "../lib/reviews";

export const metadata: Metadata = {
  title: "ブランド買取業者18社の比較表｜買取方法・取扱ジャンル・相見積もりの進め方",
  description:
    "ブランド買取業者18社を、公式サイトで確認できた買取方法（宅配・出張・店頭）と主な取扱ジャンルの一覧表で比較。1社即決を避けて相見積もりで売り先を決めるための考え方と、各社の検証レビューへの入口をまとめています。",
  alternates: { canonical: `${SITE_URL}/ranking/` },
};

const axes = [
  {
    eyebrow: "METHOD",
    title: "買取方法で選ぶ",
    body: "出張・宅配・店頭のどれに対応しているかは業者ごとに異なります。自分の生活スタイルと売りたい品物の量に合う方法を軸に絞り込みます。",
  },
  {
    eyebrow: "GENRE",
    title: "得意ジャンルで選ぶ",
    body: "バッグに強い業者、時計に強い業者、ノーブランド混在の整理に向く業者など、得意分野はさまざま。売りたい品物と業者の得意ジャンルを合わせることが高価買取の近道です。",
  },
  {
    eyebrow: "FEE",
    title: "手数料で選ぶ",
    body: "査定料・送料・出張料・キャンセル時の返送料など、費用の発生条件は業者ごとに異なります。査定額だけでなく「手元に残る金額」で比較します。",
  },
];

// レビュー公開済みは slug を持ち /reviews/ へリンクする。未公開(確認中)は slug: null
const partners: { name: string; slug: string | null }[] = [
  { name: "ブランドオフ", slug: "brandoff" },
  { name: "エコスタイル", slug: "ecostyle" },
  { name: "コメ兵", slug: "komehyo" },
  { name: "ファーストクラス", slug: "first-class" },
  { name: "買取大吉", slug: "kaitori-daikichi" },
  { name: "いくらや", slug: "ikuraya" },
  { name: "Librand", slug: "librand" },
  { name: "RECLO", slug: "reclo" },
  { name: "ウリエル", slug: "uriel" },
  { name: "Tifana", slug: "tifana" },
  { name: "あきなや", slug: "akinaya" },
  { name: "ブランドゥール", slug: "brandoule" },
  { name: "ネットオフ", slug: "netoff" },
  { name: "カインドオル", slug: "kindal" },
  { name: "まねきや", slug: "manekiya" },
  { name: "なんぼや", slug: "nanboya" },
  { name: "RIBLA", slug: "ribla" },
  { name: "ザ・ゴールド", slug: "the-gold" },
];

const aggregators = ["おいくら", "ヒカカク", "みんなの買取"];

export default function RankingPage() {
  return (
    <main>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs items={[{ label: "業者比較" }]} />
          <p className="eyebrow mt-8 mb-4">COMPARISON</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            ブランド買取業者の比較
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            当サイトでは、ブランド買取業者を「公式サイトで確認できた事実」だけで比較します。下の一覧表で買取方法と取扱ジャンルを見比べて候補を2〜3社に絞り、手数料などの詳細は各社の検証レビューで確認してください。
          </p>
        </div>
      </section>

      {/* 一覧比較表 */}
      <section id="hikaku" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-4">ブランド買取業者{REVIEWS.length}社の一覧比較表</h2>
          <p className="max-w-3xl text-[0.92rem] leading-relaxed text-ink-soft mb-6">
            各社の公式サイトに明記されている買取方法と主な取扱ジャンルを並べました。「○」は公式に記載がある方法、「—」は記載を確認できなかった方法です。査定料・送料・キャンセル時の扱いは条件が細かいため、各社のレビューで原文に近い形で確認してください。
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-[720px] w-full text-[0.86rem] text-ink-soft border-collapse">
              <thead>
                <tr className="border-b border-line text-left text-ink">
                  <th className="py-3 pr-3 font-normal">業者</th>
                  <th className="py-3 px-2 font-normal text-center">宅配</th>
                  <th className="py-3 px-2 font-normal text-center">出張</th>
                  <th className="py-3 px-2 font-normal text-center">店頭</th>
                  <th className="py-3 px-3 font-normal">主な取扱ジャンル（公式記載）</th>
                  <th className="py-3 pl-3 font-normal whitespace-nowrap">確認日</th>
                </tr>
              </thead>
              <tbody>
                {REVIEWS.map((r) => (
                  <tr key={r.slug} className="border-b border-line/60 align-top">
                    <td className="py-3 pr-3 whitespace-nowrap">
                      <a href={`/reviews/${r.slug}/`} className="underline decoration-gold/50 underline-offset-4 hover:text-ink">
                        {r.name}
                      </a>
                    </td>
                    {["宅配", "出張", "店頭"].map((m) => (
                      <td key={m} className="py-3 px-2 text-center">{r.methods.includes(m) ? "○" : "—"}</td>
                    ))}
                    <td className="py-3 px-3">{r.genres.slice(0, 4).join("・")}</td>
                    <td className="py-3 pl-3 whitespace-nowrap">{r.confirmedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[0.8rem] text-ink-soft">表は横にスクロールできます。掲載順は当サイトによる評価・推奨を意味しません。</p>
        </div>
      </section>

      {/* 比較の考え方 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-4">比較の考え方 — 3つの軸</h2>
        <p className="max-w-2xl text-[0.92rem] leading-relaxed text-ink-soft mb-10">
          「どこが一番高いか」を最初に探すのではなく、まず自分に合う業者の条件を決めてから候補を絞るのが失敗しない順序です。
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {axes.map((a) => (
            <div key={a.title} className="card-lux p-7">
              <p className="eyebrow mb-3">{a.eyebrow}</p>
              <h3 className="text-lg text-ink mb-3">{a.title}</h3>
              <p className="text-[0.88rem] leading-relaxed text-ink-soft">{a.body}</p>
            </div>
          ))}
        </div>
        <div className="note-box mt-10 max-w-3xl">
          <p className="font-bold text-ink mb-1">1社即決は避けてください</p>
          <p>
            ブランド品の査定額は業者間で差が出ることが珍しくありません。候補を2〜3社に絞ったうえで相見積もりを取り、査定額と手数料を見比べてから売り先を決めることをおすすめします。
          </p>
        </div>
        <div id="aimitsumori" className="mt-10 max-w-3xl">
          <h3 className="text-lg text-ink mb-4">相見積もりの進め方</h3>
          <ol className="list-decimal pl-5 space-y-3 text-[0.9rem] leading-relaxed text-ink-soft">
            <li>
              先に<a href="/souba/" className="underline decoration-gold/50 underline-offset-4 hover:text-ink">実売相場</a>を確認し、提示額が高いか安いかを判断できる状態にします。
            </li>
            <li>
              上の比較表で、使いたい買取方法（宅配・出張・店頭）に対応し、売りたい品目を扱う業者を2〜3社選びます。
            </li>
            <li>
              各社に同じ品物を、箱・保存袋・保証書などの付属品をそろえた同じ状態で見てもらいます。条件がそろっていないと金額を比べられません。
            </li>
            <li>
              査定額そのものではなく、送料・返送料・振込手数料などを差し引いた「手元に残る金額」で比べます。費用の条件は各社のレビューで確認できます。
            </li>
            <li>
              出張買取（訪問購入）で売った場合は、特定商取引法のクーリング・オフの制度があります。対象外の品目もあるため、<a href="/guide/cooling-off/" className="underline decoration-gold/50 underline-offset-4 hover:text-ink">訪問購入のクーリングオフ</a>で確認してください。
            </li>
          </ol>
        </div>
      </section>

      {/* 掲載業者 */}
      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-4">掲載業者</h2>
          <p className="max-w-3xl text-[0.92rem] leading-relaxed text-ink-soft mb-8">
            掲載している業者は、すべて公式サイトでの確認を終えてレビューを公開しています。業者名からレビューへ進めます。
          </p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-4 max-w-4xl">
            {partners.map((p) => (
              <li key={p.name} className="flex items-baseline gap-2.5 text-[0.92rem] text-ink-soft">
                <span className="text-gold text-[0.7rem] shrink-0">◆</span>
                {p.slug ? (
                  <a href={`/reviews/${p.slug}/`} className="underline decoration-gold/50 underline-offset-4 hover:text-ink">
                    {p.name}
                  </a>
                ) : (
                  p.name
                )}
              </li>
            ))}
          </ul>

          <h3 className="text-lg text-ink mt-12 mb-3">一括査定・価格比較サービス</h3>
          <p className="max-w-3xl text-[0.9rem] leading-relaxed text-ink-soft mb-5">
            複数業者の査定額をまとめて比較できるサービスもあります。当サイトでのレビューは準備中です。
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {aggregators.map((name) => (
              <li key={name} className="flex items-baseline gap-2.5 text-[0.92rem] text-ink-soft">
                <span className="text-gold text-[0.7rem] shrink-0">◆</span>
                {name}
              </li>
            ))}
          </ul>

          <div className="note-box mt-10 max-w-3xl">
            掲載順・掲載の有無は当サイトによる評価・推奨を意味するものではありません。レビューは公式サイトで確認できた事実の整理であり、各社公式サイトへのリンク（アフィリエイト計測リンク）は提携完了後に順次設置します。
          </div>
        </div>
      </section>

      {/* 次のアクション */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <div className="max-w-3xl">
          <h2 className="rule-gold text-2xl text-ink mb-6">比較の前にできる準備</h2>
          <p className="text-[0.92rem] leading-relaxed text-ink-soft mb-8">
            業者比較の前提になるのは「相場を知ること」と「売り方を決めること」です。以下の2つを先に読んでおくと、レビューを比較の道具として使えるようになります。
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/souba/" className="btn-gold">実売相場データを見る</a>
            <a href="/guide/" className="btn-line">売り方ガイドを読む</a>
          </div>
        </div>
      </section>
    </main>
  );
}
