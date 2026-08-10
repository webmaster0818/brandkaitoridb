import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "訪問購入のクーリングオフ — 出張買取で知っておくべき制度",
  description:
    "出張買取（訪問購入）には特定商取引法のルールがあります。書面受領日から8日間はクーリングオフ（契約解除）が可能で、その間は物品の引き渡しを拒めるという制度の骨子と、勧誘時の注意点を解説します。",
  alternates: { canonical: `${SITE_URL}/guide/cooling-off/` },
};

const points = [
  {
    eyebrow: "8 DAYS",
    title: "書面受領日から8日間は契約解除できる",
    body: "訪問購入では、契約内容を記載した書面を受け取った日から8日間、クーリングオフ（無条件での契約解除）ができます。すでに代金を受け取っていても、期間内であれば契約をなかったことにできます。",
  },
  {
    eyebrow: "KEEP ITEMS",
    title: "その間は品物の引き渡しを拒める",
    body: "クーリングオフ期間中は、売り主は品物の引き渡しを拒むことができます。「今日持ち帰らせてほしい」と言われても、期間中は手元に置いたまま考え直すことが制度上認められています。",
  },
  {
    eyebrow: "CONSULT",
    title: "困ったら消費者ホットライン188",
    body: "契約を解除したいのに応じてもらえない、勧誘が強引で不安といった場合は、消費者ホットライン188（いやや）に電話すると、最寄りの消費生活相談窓口を案内してもらえます。",
  },
];

const cautions = [
  "頼んでいないのに「不用品はないか」と電話や訪問で勧誘され、そのまま買取契約になるケースには特に注意が必要です。",
  "「ブランド品だけのつもりが、貴金属も出すよう強く求められた」など、依頼していない品物への勧誘は断って構いません。",
  "契約する場合は、業者名・担当者名・品物・金額・クーリングオフについて記載された書面を必ず受け取り、保管してください。8日間の起算点はこの書面の受領日です。",
  "その場で判断を迫られても、即決する義務はありません。品物を渡す前に、家族や相談窓口に相談する時間を取りましょう。",
];

const faqs = [
  {
    q: "クーリングオフはどの買取方法でも使えますか？",
    a: "この制度は特定商取引法の「訪問購入」、つまり業者が自宅などを訪れて品物を買い取る取引を対象としたものです。自分から店舗に持ち込む店頭買取は対象外です。宅配買取のキャンセル条件は各社の規約によるため、発送前に確認してください。",
  },
  {
    q: "すでに品物を渡してしまいました。もう解除できませんか？",
    a: "品物を渡していても、書面受領日から8日間の期間内であればクーリングオフは可能です。ただし品物がすでに第三者に渡っていると取り戻しが難しくなる場合があるため、解除したいと思ったらできるだけ早く業者に通知し、不安があれば消費者ホットライン188に相談してください。",
  },
  {
    q: "クーリングオフはどうやって行えばよいですか？",
    a: "期間内に契約解除の意思を業者へ通知します。言った・言わないの争いを避けるため、書面など記録が残る方法で通知し、控えを保管するのが確実です。具体的な手順は消費者庁の特定商取引法ガイドで確認するか、消費者ホットライン188で案内を受けられます。",
  },
];

export default function CoolingOffPage() {
  return (
    <main>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs
            items={[
              { label: "売り方ガイド", href: "/guide/" },
              { label: "訪問購入のクーリングオフ" },
            ]}
          />
          <p className="eyebrow mt-8 mb-4">GUIDE — LAW</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            訪問購入のクーリングオフ
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            出張買取のように業者が自宅を訪れて品物を買い取る取引は、特定商取引法では「訪問購入」と呼ばれ、売り主を守るためのルールが定められています。出張買取を使う前に、最低限この制度の骨子だけは知っておいてください。
          </p>
        </div>
      </section>

      {/* 制度の骨子 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-10">制度の骨子 — 3つのポイント</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="card-lux p-7">
              <p className="eyebrow mb-3">{p.eyebrow}</p>
              <h3 className="text-lg text-ink mb-3">{p.title}</h3>
              <p className="text-[0.88rem] leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
        <div className="note-box mt-10 max-w-3xl">
          本ページは制度の概要をまとめた一般的な解説であり、個別の紛争についての法的助言ではありません。適用の可否や例外を含む正確な内容は、消費者庁の特定商取引法ガイド（
          <a
            href="https://www.no-trouble.caa.go.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            no-trouble.caa.go.jp
          </a>
          ）で確認してください。
        </div>
      </section>

      {/* 勧誘時の注意 */}
      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-8">勧誘を受けたときの注意点</h2>
          <ul className="space-y-4 max-w-3xl">
            {cautions.map((c) => (
              <li key={c} className="flex gap-3 text-[0.92rem] leading-relaxed text-ink-soft">
                <span className="text-gold font-bold shrink-0">◆</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">よくある質問</h2>
        <div className="max-w-3xl">
          {faqs.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>{f.q}</summary>
              <div className="faq-body">{f.a}</div>
            </details>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href="/guide/houhou/" className="btn-gold">買取方法の違いを読む</a>
          <a href="/guide/" className="btn-line">売り方ガイドに戻る</a>
        </div>
      </section>
    </main>
  );
}
