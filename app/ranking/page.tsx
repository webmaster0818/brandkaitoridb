import type { Metadata } from "next";
import { SITE_URL } from "../lib/site";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "ブランド買取業者の比較",
  description:
    "ブランド買取業者を「買取方法×得意ジャンル×手数料」の3軸で比較するためのハブページ。1社即決を避け、相見積もりで納得して売るための考え方と、今後掲載予定の業者一覧を紹介します。",
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
  { name: "ゴールドウィン", slug: null },
  { name: "Tifana", slug: "tifana" },
  { name: "あきなや", slug: "akinaya" },
  { name: "ブランドゥール", slug: "brandoule" },
  { name: "ネットオフ", slug: "netoff" },
  { name: "eあきんど", slug: null },
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
            当サイトでは、ブランド買取業者を「実際に確認できた事実」だけで比較します。各社の手数料や対応方法は現在、公式サイトでの確認作業を進めており、確認が済んだ業者から順にレビューを公開していきます。まずは、業者選びで失敗しないための「比較の考え方」から押さえてください。
          </p>
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
      </section>

      {/* 掲載業者 */}
      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-4">掲載業者</h2>
          <p className="max-w-3xl text-[0.92rem] leading-relaxed text-ink-soft mb-8">
            公式サイトでの確認・検証が完了した業者からレビューを公開しています。リンクのある業者はレビュー公開済みです（残りは現在確認中）。
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
            複数業者の査定額をまとめて比較できるサービスも、同様に掲載を予定しています。
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
