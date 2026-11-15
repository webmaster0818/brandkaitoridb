import type { Metadata } from "next";
import { SITE_URL } from "../lib/site";
import { REVIEWS } from "../lib/reviews";
import { HIKAKAKU, HIKAKAKU_CHECKED_AT } from "../lib/hikakaku";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "買取業者18社の検証レビュー一覧｜公式情報で確認した項目",
  description:
    "ブランド買取業者のレビューを、公式サイトで確認した事実を確認日とともに公開するハブページ。買取方法・手数料・古物商許可を一次確認した業者から順に掲載しています。",
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
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">買取業者の検証レビュー一覧</h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            当サイトの業者レビューは、各社公式サイトでの確認作業を経てから公開します。確認が終わっていない業者について、憶測でレビューを書くことはしません。このページでは、公開までの方針と「レビューをどう読むか」を先にお伝えします。なお当サイトのレビューは、運営会社・古物商許可番号・買取方法・手数料などを公式サイトで1項目ずつ確認した記録です。出典を示せない利用者の口コミは掲載していません。
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

      {/* 口コミの掲載状況（第三者サイトの評点一覧・2026-11-16） */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-4">口コミの掲載状況</h2>
        <p className="max-w-3xl text-[0.92rem] leading-relaxed text-ink-soft mb-8">
          当サイトは架空の口コミを作成しないため、利用者の声そのものは掲載していません。代わりに、第三者サイト（ヒカカク！）に評点の掲載がある
          {Object.keys(HIKAKAKU).length}社について、評点と件数を確認日つきで掲載します（当サイト確認日: {HIKAKAKU_CHECKED_AT}）。
          残り{REVIEWS.length - Object.keys(HIKAKAKU).length}社は、掲載がない・口コミ0件・対象分野が違うなどの理由を各レビュー内に記載しています。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-[0.9rem]">
            <thead>
              <tr className="border-b border-line text-left text-ink">
                <th className="py-2 pr-4 font-bold">業者</th>
                <th className="py-2 pr-4 font-bold">ヒカカク！の対象</th>
                <th className="py-2 pr-4 font-bold">口コミの評価</th>
                <th className="py-2 font-bold">口コミ件数</th>
              </tr>
            </thead>
            <tbody>
              {REVIEWS.filter((r) => HIKAKAKU[r.slug]).map((r) => (
                <tr key={r.slug} className="border-b border-line align-baseline">
                  <td className="py-3 pr-4">
                    <a href={`/reviews/${r.slug}/`}>{r.name}</a>
                  </td>
                  <td className="py-3 pr-4">
                    <a
                      href={`https://hikakaku.com/company/${HIKAKAKU[r.slug].id}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {HIKAKAKU[r.slug].listing}
                    </a>
                  </td>
                  <td className="py-3 pr-4">{HIKAKAKU[r.slug].score} / 5</td>
                  <td className="py-3">
                    {HIKAKAKU[r.slug].count.toLocaleString()}件
                    {HIKAKAKU[r.slug].count < 10 && "（10件未満）"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 max-w-3xl text-[0.85rem] leading-relaxed text-muted">
          評点はヒカカク！の投稿者による評価で、当サイトの評価ではありません。業者間で件数の差が大きく（{Math.min(
            ...Object.values(HIKAKAKU).map((h) => h.count)
          )}件〜{Math.max(...Object.values(HIKAKAKU).map((h) => h.count)).toLocaleString()}件）、件数が少ない社の評点は傾向として読めません。
          口コミの本文は著作権が投稿者にあるため、当サイトでは転載せず、評点・件数・出典リンクのみを掲載しています。
        </p>
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
