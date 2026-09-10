import type { Metadata } from "next";
import { SITE_URL } from "../lib/site";
import { REVIEWS } from "../lib/reviews";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "業者レビュー一覧",
  description:
    "ブランド買取業者のレビューを、公式サイトで確認した事実と確認日つきで公開するハブページ。買取方法・手数料・古物商許可を一次確認した業者から順に掲載しています。",
  alternates: { canonical: `${SITE_URL}/reviews/` },
};

const principles = [
  {
    eyebrow: "OFFICIAL",
    title: "公式サイトで確認した事実だけ",
    body: "手数料・買取方法・古物商許可番号などの基本情報は、各社の公式サイトで直接確認できたものだけを掲載します。伝聞やまとめ記事からの孫引きはしません。",
  },
  {
    eyebrow: "DATED",
    title: "すべての情報に確認日",
    body: "手数料やサービス内容は変わります。レビューに載せる情報には必ず「いつ確認したか」を添え、古くなった情報は確認日ごと更新します。",
  },
  {
    eyebrow: "NO FAKE",
    title: "架空の口コミゼロ",
    body: "当サイトは架空の口コミ・体験談を一切作成しません。第三者の評判を紹介する場合は、出どころを示せるものに限定します。広告（PR）の有無は評価に影響しません。",
  },
];

export default function ReviewsPage() {
  return (
    <main>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs items={[{ label: "業者レビュー" }]} />
          <p className="eyebrow mt-8 mb-4">REVIEWS</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">業者レビュー一覧</h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            当サイトの業者レビューは、各社公式サイトでの確認作業を経てから公開します。確認が終わっていない業者について、憶測でレビューを書くことはしません。このページでは、公開までの方針と「レビューをどう読むか」を先にお伝えします。
          </p>
        </div>
      </section>

      {/* レビューの読み方 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-10">当サイトのレビューの読み方</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title} className="card-lux p-7">
              <p className="eyebrow mb-3">{p.eyebrow}</p>
              <h3 className="text-lg text-ink mb-3">{p.title}</h3>
              <p className="text-[0.88rem] leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 公開済みレビュー */}
      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-4">公開済みのレビュー（{REVIEWS.length}社）</h2>
          <p className="max-w-3xl text-[0.92rem] leading-relaxed text-ink-soft mb-10">
            各社の公式サイトを直接確認し、運営会社・古物商許可・買取方法・手数料を照合できた業者から公開しています。確認できなかった項目は、各レビュー内で「確認できなかったこと」として明記しています。
          </p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r) => (
              <a key={r.slug} href={`/reviews/${r.slug}/`} className="card-lux p-6 block">
                <p className="eyebrow mb-2">{r.methods.join(" · ")}</p>
                <h3 className="text-lg text-ink mb-2">{r.name}</h3>
                <p className="text-[0.82rem] leading-relaxed text-ink-soft mb-3">
                  {r.company} ／ {r.genres.slice(0, 3).join("・")}ほか
                </p>
                <p className="text-[0.75rem] text-muted">公式サイト確認日: {r.confirmedAt}</p>
              </a>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/ranking/" className="btn-gold">比較の考え方を見る</a>
            <a href="/verification-policy/" className="btn-line">検証ポリシーを読む</a>
          </div>
        </div>
      </section>

      {/* ガイド導線 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <div className="max-w-3xl">
          <h2 className="rule-gold text-2xl text-ink mb-6">レビュー公開までに読んでおきたいガイド</h2>
          <p className="text-[0.92rem] leading-relaxed text-ink-soft mb-8">
            どの業者を選ぶにしても、「相場を知ってから査定に出す」「買取方法を自分で選ぶ」という基本は変わりません。ガイドで全体の流れを押さえておくと、レビューを比較の道具として使えるようになります。
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/guide/" className="btn-gold">売り方ガイドを読む</a>
            <a href="/souba/" className="btn-line">実売相場データを見る</a>
          </div>
        </div>
      </section>
    </main>
  );
}
