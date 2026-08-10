import type { Metadata } from "next";
import { SITE_URL } from "../lib/site";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "ブランド品の売り方ガイド",
  description:
    "ブランド品を初めて売る人のための実務ガイド。相場を知る、業者を絞る、相見積もりで決めるという全体の流れと、買取方法の違い・訪問購入のクーリングオフの解説記事を案内します。",
  alternates: { canonical: `${SITE_URL}/guide/` },
};

const flow = [
  {
    step: "01",
    title: "相場を知る",
    body: "査定額が妥当かどうかを判断するには、先に「市場でいくらで売れているか」という物差しが必要です。売りたいブランドの実売レンジを確認しておきます。",
    href: "/souba/",
    cta: "実売相場データへ",
  },
  {
    step: "02",
    title: "業者を絞る",
    body: "出張・宅配・店頭のどの方法で売るかを決め、売りたい品物のジャンルを得意とする業者を2〜3社に絞ります。この段階ではまだ1社に決めません。",
    href: "/ranking/",
    cta: "業者比較へ",
  },
  {
    step: "03",
    title: "相見積もりで決める",
    body: "絞った業者に査定を依頼し、査定額と手数料を並べて比較します。その場での即決を求められても、比較が終わるまで返事を保留して構いません。",
    href: "/ranking/",
    cta: "比較の考え方へ",
  },
];

const guides = [
  {
    eyebrow: "METHOD",
    title: "出張・宅配・店頭買取の違い",
    body: "3つの買取方法の仕組みと向き不向きを比較表で整理。自分の状況に合う売り方を選ぶための基礎知識です。",
    href: "/guide/houhou/",
  },
  {
    eyebrow: "LAW",
    title: "訪問購入のクーリングオフ",
    body: "出張買取（訪問購入）には特定商取引法のルールがあります。契約解除できる期間と、勧誘時の注意点を解説します。",
    href: "/guide/cooling-off/",
  },
];

export default function GuidePage() {
  return (
    <main>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs items={[{ label: "売り方ガイド" }]} />
          <p className="eyebrow mt-8 mb-4">GUIDE</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            ブランド品の売り方ガイド
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            初めてブランド品を売るときに迷いやすいのは、「いくらが妥当なのか」「どの方法で売るのか」「どう比較するのか」の3点です。このガイドでは、後悔しない売却のための全体像を、順番どおりに整理します。
          </p>
        </div>
      </section>

      {/* 全体の流れ */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-10">売却の全体像 — 3ステップ</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {flow.map((f) => (
            <div key={f.step} className="card-lux p-7">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="serif text-3xl text-gold-soft leading-none">{f.step}</span>
                <h3 className="text-lg text-ink">{f.title}</h3>
              </div>
              <p className="text-[0.88rem] leading-relaxed text-ink-soft mb-5">{f.body}</p>
              <a href={f.href} className="text-[0.82rem] font-bold text-gold">
                {f.cta} →
              </a>
            </div>
          ))}
        </div>
        <div className="note-box mt-10 max-w-3xl">
          順番が大切です。相場を知らないまま業者に会うと、提示された査定額が高いのか安いのか判断できません。「相場→業者→相見積もり」の順で進めてください。
        </div>
      </section>

      {/* 個別ガイド */}
      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-10">売る前に読んでおきたいガイド</h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            {guides.map((g) => (
              <a key={g.href} href={g.href} className="card-lux p-7 block">
                <p className="eyebrow mb-3">{g.eyebrow}</p>
                <h3 className="text-lg text-ink mb-3">{g.title}</h3>
                <p className="text-[0.88rem] leading-relaxed text-ink-soft mb-5">{g.body}</p>
                <span className="text-[0.82rem] font-bold text-gold">読む →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
