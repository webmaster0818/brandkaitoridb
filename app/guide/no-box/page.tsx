import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import GuideShell from "../../components/GuideShell";
import DealerPolicyTable from "../../components/DealerPolicyTable";

export const metadata: Metadata = {
  title: "箱なし・付属品なしのブランド品は売れる？買取業者18社の公式記載を照合",
  description:
    "箱・保存袋・ギャランティカード・保証書がないブランド品を売れるかどうか、買取業者18社の公式サイトの記載を原文で照合。付属品の役割、査定額への影響、申込み前に確認しておきたい点を整理します。",
  alternates: { canonical: `${SITE_URL}/guide/no-box/` },
};

const accessories = [
  {
    name: "箱・保存袋・ショッパー（紙袋）",
    role: "正規品の流通経路を示す補助材料であり、再販時に「フルセット」として扱えるかどうかに関わります。単体では価値が付かないことが多く、なんぼやのように「空き箱やショッパー（紙袋）は買取できかねます」と明記する業者もあります。",
  },
  {
    name: "ギャランティカード・保証書・購入時のレシート",
    role: "購入店・購入日・製品の識別に使われ、特に腕時計や高額ジュエリーで重視されます。カインドオルのように「時計や宝飾品などで、高価なお品物に関しては【保証書・証明書】【箱】などの付属品が必要」と条件を明記する業者があるため、時計・宝飾はバッグ・財布と扱いが分かれます。",
  },
  {
    name: "ストラップ・チャーム・カデナと鍵・レインカバー",
    role: "取り外し式の付属品は、揃っていると「モデル本来の状態」として評価されやすく、欠けていると同じモデルでも減額の理由になりやすい部分です。売る前に一か所にまとめておきます。",
  },
  {
    name: "刻印・シリアル・RFIDタグ",
    role: "近年のモデルでは、ギャランティカードの代わりに製品側の刻印やRFIDで管理するブランドがあります。「カードがない＝付属品なし」と一律に扱われるわけではないため、モデルごとの本来の付属品を確認しておくと話が早くなります。",
  },
];

const steps = [
  "売りたい品物の本来の付属品を確認する（同じブランドでも年代・モデルで異なる）",
  "手元にある付属品をすべて集め、無いものを書き出しておく",
  "時計・ジュエリーは付属品の要否が業者ごとに違うため、申込み前に条件を確認する",
  "実売相場データで、同じモデルの落札例が付属品ありなしでどう分かれているかを見る",
  "付属品なしでも査定可能と公式に明記している業者を2〜3社選び、提示額を比較する",
];

const faqs = [
  {
    q: "箱や保存袋がなくても、ブランド品は売れますか？",
    a: "今回照合した18社のうち、箱・付属品なしについて公式サイトに記載があった業者の多くは「本体のみでも査定・買取可能」としています。ただし付属品が揃った個体より提示額が下がる可能性はほぼ全社が示唆しており、時計や宝飾品では付属品を条件にする業者もあります。",
  },
  {
    q: "ギャランティカードだけ無い場合はどうなりますか？",
    a: "バッグ・財布ではカードなしでも本体の真贋確認を業者側で行い査定するのが一般的です。腕時計は保証書（ギャランティ）の有無で扱いが分かれるため、時計を売る場合は事前に業者へ確認してください。",
  },
  {
    q: "付属品だけを売ることはできますか？",
    a: "RECLOのように「付属品のみの買取は行なっておりません」と明記する業者や、なんぼやのように空き箱・ショッパーの買取不可を明記する業者があります。付属品は本体と一緒に出すのが基本です。",
  },
  {
    q: "付属品がない分、どのくらい安くなりますか？",
    a: "減額の幅はブランド・モデル・業者によって異なり、公式サイトに一律の目安を示している業者は今回の照合では確認できませんでした。実売相場データで同じモデルの落札例を見比べ、複数の業者の提示額を比較するのが確実です。",
  },
];

export default function NoBoxGuidePage() {
  return (
    <GuideShell
      path="/guide/no-box/"
      eyebrow="GUIDE — NO BOX / ACCESSORIES"
      crumb="箱なし・付属品なしで売る"
      title="箱なし・付属品なしのブランド品は売れる？買取業者18社の公式記載を照合"
      lead="箱・保存袋・ギャランティカードを捨ててしまった、引っ越しで見当たらない——そんな状態のブランド品でも売れるのか。当サイトでレビューしている買取業者18社の公式サイトから、付属品なしの扱いに関する記載を原文のまま集め、付属品の役割と申込み前に確認しておきたい点を整理しました。"
      faqs={faqs}
      related={[
        { href: "/guide/damaged/", label: "傷・使用感のある品を売る実務を読む", primary: true },
        { href: "/guide/not-accepted/", label: "買取不可になるものを確認する" },
        { href: "/reviews/", label: "業者レビュー一覧へ" },
      ]}
    >
      {/* 1. 照合表 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-4">1. 「箱なし・付属品なし」に関する公式記載（18社）</h2>
        <DealerPolicyTable
          field="accessories"
          caption="各社の公式サイト（よくある質問・買取案内・規約）から、箱・保存袋・ギャランティ・保証書などの付属品が無い場合の扱いに関する記載を集めました。"
        />
        <div className="note-box mt-8 max-w-3xl">
          <p className="font-bold text-ink mb-1">読み方</p>
          <p>
            「本体のみでも買取可」と明記する業者でも、付属品が揃っている個体より提示額が下がる可能性はほぼ共通して示唆されています。時計・宝飾品は付属品を条件にする業者があるため、品目によって記載を読み分けてください。
          </p>
        </div>
      </section>

      {/* 2. 付属品の役割 */}
      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-4">2. 付属品ごとの役割と、無いときの考え方</h2>
          <p className="max-w-3xl text-[0.9rem] leading-relaxed text-ink-soft mb-10">
            ひとくちに「付属品」といっても、査定での役割は種類ごとに違います。何が無いのかを整理してから業者に伝えると、提示額の理由を理解しやすくなります。
          </p>
          <div className="grid gap-6 md:grid-cols-2 max-w-5xl">
            {accessories.map((a, i) => (
              <div key={a.name} className="card-lux p-7">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="serif text-2xl text-gold-soft leading-none">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-base text-ink">{a.name}</h3>
                </div>
                <p className="text-[0.86rem] leading-relaxed text-ink-soft">{a.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 手順 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">3. 付属品が無いときに売る前にやること</h2>
        <ul className="max-w-3xl space-y-3">
          {steps.map((c) => (
            <li key={c} className="flex items-baseline gap-3 text-[0.92rem] leading-relaxed text-ink-soft">
              <span className="text-gold text-[0.7rem] shrink-0">◆</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="/souba/" className="btn-gold">実売相場データを見る</a>
          <a href="/ranking/" className="btn-line">買取業者の比較表を見る</a>
        </div>
      </section>
    </GuideShell>
  );
}
