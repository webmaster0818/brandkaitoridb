import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "出張・宅配・店頭買取の違い",
  description:
    "ブランド品の3つの買取方法（出張・宅配・店頭）の仕組みと一般的な特徴を比較。それぞれの向き不向きと、選ぶときの考え方をFAQつきで解説します。",
  alternates: { canonical: `${SITE_URL}/guide/houhou/` },
};

const methods = [
  {
    name: "出張買取",
    how: "査定員が自宅に来て、その場で査定・買取する方法。",
    fit: "点数が多い、大きくて持ち運びにくい、外出が難しいという人に向きます。",
    care: "自宅に人を招く必要があります。訪問での買取（訪問購入）には特定商取引法のルールがあるので、契約前に確認しておきましょう。",
  },
  {
    name: "宅配買取",
    how: "品物を梱包して送り、業者が到着後に査定して結果を連絡する方法。",
    fit: "近くに店舗がない、自分のペースで進めたい、対面のやり取りが苦手という人に向きます。",
    care: "査定結果が出るまで品物が手元を離れます。送料・返送料・キャンセルの条件は業者ごとに異なるため、発送前の確認が欠かせません。",
  },
  {
    name: "店頭買取",
    how: "店舗に品物を持ち込み、目の前で査定してもらう方法。",
    fit: "すぐに現金化したい、査定員と対面で話しながら進めたい、点数が少ないという人に向きます。",
    care: "持ち運べる量に限られます。1店舗だけで即決せず、複数店を回る前提で予定を組むのがおすすめです。",
  },
];

const rows = [
  { label: "品物の移動", values: ["自宅から動かさない", "業者へ発送する", "自分で持ち込む"] },
  { label: "査定の立ち会い", values: ["その場で立ち会える", "立ち会えない", "その場で立ち会える"] },
  { label: "現金化までの早さ", values: ["早い傾向", "発送・査定の日数がかかる", "早い傾向"] },
  { label: "向いている量", values: ["多い・大きい品物", "中量・持ち運びにくい距離", "少量"] },
  {
    label: "注意したい点",
    values: ["訪問購入のルール確認", "送料・返送料の条件確認", "持ち込める量の制約"],
  },
];

const faqs = [
  {
    q: "3つの方法で査定額は変わりますか？",
    a: "同じ業者であれば、買取方法によって査定基準そのものが大きく変わるとは限りません。ただし、送料や出張の費用の扱いは業者ごとに異なり、手元に残る金額には影響します。方法を選んだうえで、複数の業者に相見積もりを取って比べるのが確実です。",
  },
  {
    q: "査定してもらったら必ず売らないといけませんか？",
    a: "いいえ。査定はあくまで金額の提示であり、納得できなければ断って構いません。ただし宅配買取ではキャンセル時の返送条件が業者ごとに異なるため、発送前に確認しておきましょう。出張買取（訪問購入）には、契約後でも一定期間は解除できるクーリングオフの制度があります。",
  },
  {
    q: "初めて売る場合はどの方法がよいですか？",
    a: "決まった正解はありませんが、まず売りたい品物の量と持ち運びのしやすさで絞るのが簡単です。少量なら店頭、多量や大型なら出張、店舗が遠いなら宅配が候補になります。どの方法でも「相場を知ってから査定に出す」「1社で即決しない」という基本は共通です。",
  },
];

export default function HouhouPage() {
  return (
    <main>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs
            items={[{ label: "売り方ガイド", href: "/guide/" }, { label: "買取方法の違い" }]}
          />
          <p className="eyebrow mt-8 mb-4">GUIDE — METHOD</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            出張・宅配・店頭買取の違い
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            ブランド品の買取方法は大きく「出張」「宅配」「店頭」の3つです。どれが優れているかではなく、品物の量・住んでいる場所・急ぎ具合によって向き不向きが決まります。ここでは一般的な仕組みと選び方を整理します。
          </p>
        </div>
      </section>

      {/* 3方式の解説 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-10">3つの買取方法の仕組み</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {methods.map((m) => (
            <div key={m.name} className="card-lux p-7">
              <h3 className="text-lg text-ink mb-3">{m.name}</h3>
              <p className="text-[0.88rem] leading-relaxed text-ink-soft mb-4">{m.how}</p>
              <p className="text-[0.85rem] leading-relaxed text-ink-soft mb-4">
                <span className="font-bold text-ink">向いている人：</span>
                {m.fit}
              </p>
              <p className="text-[0.85rem] leading-relaxed text-ink-soft">
                <span className="font-bold text-accent">注意点：</span>
                {m.care}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 比較表 */}
      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-4">3方式の比較表</h2>
          <p className="max-w-3xl text-[0.9rem] leading-relaxed text-ink-soft mb-8">
            以下は一般的な傾向の整理です。個別の条件（費用の扱い・対応エリア・査定日数など）は業者ごとに異なるため、依頼前に必ず各社の公式情報で確認してください。
          </p>
          <div className="overflow-x-auto">
            <table className="table-lux min-w-[640px]">
              <thead>
                <tr>
                  <th>比較項目</th>
                  <th>出張買取</th>
                  <th>宅配買取</th>
                  <th>店頭買取</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label}>
                    <td className="font-bold text-ink">{r.label}</td>
                    {r.values.map((v, i) => (
                      <td key={i}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="note-box mt-8 max-w-3xl">
            出張買取を検討する場合は、特定商取引法の「訪問購入」のルール（クーリングオフなど）も併せて確認しておくと安心です。
          </div>
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
          <a href="/guide/cooling-off/" className="btn-gold">訪問購入のクーリングオフを読む</a>
          <a href="/guide/" className="btn-line">売り方ガイドに戻る</a>
        </div>
      </section>
    </main>
  );
}
