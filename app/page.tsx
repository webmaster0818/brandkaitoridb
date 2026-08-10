import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, SITE_TAGLINE } from "./lib/site";

export const metadata: Metadata = {
  title: `${SITE_NAME}｜${SITE_TAGLINE}`,
  description:
    "ブランド品（バッグ・財布・時計・ジュエリー）の買取業者を、実際の売買データと公式確認情報で正直に比較。相場の実売レンジ、買取方法の違い、売る前の準備までこの1サイトで。",
  alternates: { canonical: `${SITE_URL}/` },
};

const pillars = [
  {
    eyebrow: "DATA",
    title: "実売相場データ",
    body: "「参考買取価格」ではなく、実際に売買が成立した価格（件数・平均・最高・取得日・出典つき）でブランド別の相場を公開します。",
    href: "/souba/",
    cta: "相場データを見る",
  },
  {
    eyebrow: "REVIEW",
    title: "公式確認の業者レビュー",
    body: "手数料・買取方法・古物商許可番号まで各社公式サイトで確認し、確認日つきで掲載。架空の口コミは一切作成しません。",
    href: "/reviews/",
    cta: "業者レビューを見る",
  },
  {
    eyebrow: "GUIDE",
    title: "売る前の実務ガイド",
    body: "出張・宅配・店頭の違い、査定前の準備、訪問購入のクーリングオフ（特定商取引法）まで、後悔しないための知識を整理。",
    href: "/guide/",
    cta: "ガイドを読む",
  },
];

const flow = [
  { step: "01", title: "相場を知る", body: "売りたいブランドの実売レンジを確認し、査定額を判断する物差しを持つ。" },
  { step: "02", title: "業者を比較する", body: "買取方法（出張・宅配・店頭）と得意ジャンルで2〜3社に絞り込む。" },
  { step: "03", title: "複数査定で決める", body: "1社即決を避け、相見積もりで納得できる条件の業者に売る。" },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-14 md:pt-24 md:pb-20">
          <p className="eyebrow mb-5">HONEST COMPARISON</p>
          <h1 className="text-3xl md:text-[2.9rem] leading-[1.35] text-ink max-w-3xl">
            ブランド品を、
            <br className="md:hidden" />
            <span className="text-gold">実売データ</span>で正しく売る。
          </h1>
          <p className="mt-6 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            {SITE_NAME}は、バッグ・財布・時計・ジュエリーの買取業者を「実際に売れた価格」と「公式サイトで確認した事実」だけで比較する情報メディアです。誇張した買取実績や架空の口コミに頼らず、売る前に知るべきことを正直にお伝えします。
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="/ranking/" className="btn-gold">業者を比較する</a>
            <a href="/souba/" className="btn-line">実売相場を見る</a>
          </div>
        </div>
      </section>

      {/* 3 pillars */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h2 className="rule-gold text-2xl text-ink mb-10">このサイトでできること</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <a key={p.href} href={p.href} className="card-lux p-7 block">
              <p className="eyebrow mb-3">{p.eyebrow}</p>
              <h3 className="text-lg text-ink mb-3">{p.title}</h3>
              <p className="text-[0.88rem] leading-relaxed text-ink-soft mb-5">{p.body}</p>
              <span className="text-[0.82rem] font-bold text-gold">{p.cta} →</span>
            </a>
          ))}
        </div>
      </section>

      {/* 売り方の流れ */}
      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="rule-gold text-2xl text-ink mb-10">高く売るための3ステップ</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {flow.map((f) => (
              <div key={f.step} className="flex gap-5">
                <span className="serif text-3xl text-gold-soft leading-none">{f.step}</span>
                <div>
                  <h3 className="text-base text-ink mb-2">{f.title}</h3>
                  <p className="text-[0.86rem] leading-relaxed text-ink-soft">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 編集方針 */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="max-w-3xl">
          <h2 className="rule-gold text-2xl text-ink mb-8">当サイトの編集方針</h2>
          <ul className="space-y-4 text-[0.92rem] leading-relaxed text-ink-soft">
            <li className="flex gap-3">
              <span className="text-gold font-bold shrink-0">◆</span>
              <span>相場の数値は、実際の売買データ（出典・収集期間・取得日を明記）のみを使用します。裏付けのない「買取実績◯円」は掲載しません。</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold shrink-0">◆</span>
              <span>業者情報（手数料・買取方法・許可番号）は各社公式サイトで確認し、確認日を記載します。</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold shrink-0">◆</span>
              <span>架空の口コミ・体験談は作成しません。広告（PR）の有無は評価・掲載順位に影響しません。</span>
            </li>
          </ul>
          <a href="/verification-policy/" className="btn-line mt-8">検証ポリシーの詳細</a>
        </div>
      </section>
    </main>
  );
}
