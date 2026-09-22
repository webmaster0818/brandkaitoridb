import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import GuideShell from "../../components/GuideShell";
import DealerPolicyTable from "../../components/DealerPolicyTable";

export const metadata: Metadata = {
  title: "ボロボロ・傷あり・使用感のあるブランド品は売れる？買取業者18社の公式記載を照合",
  description:
    "角スレ・内側のベタつき・剥がれ・金具の傷・壊れた時計など、状態の悪いブランド品を売れるかどうかを買取業者18社の公式サイトの記載で照合。減額されやすい箇所、自分で直してはいけない理由、申込み前の準備を整理します。",
  alternates: { canonical: `${SITE_URL}/guide/damaged/` },
};

const damageTypes = [
  {
    name: "角スレ・持ち手の黒ずみ・型崩れ（バッグ）",
    body: "外から見える使用感で、査定では最初に見られる箇所です。多くの業者が「状態による」としつつ買取対象にしており、需要のあるモデルなら使用感があっても値が付くことが公式記載でも示されています。",
  },
  {
    name: "内側のベタつき・剥がれ・カビ臭（バッグ・財布）",
    body: "合成皮革の加水分解によるベタつきや内張りの剥がれは外から見えにくいぶん、査定で減額の理由になりやすい箇所です。ブランドオフのFAQは「内側がベタついていたり、剥がれているバッグ」への回答で「状態にもよってしまいますが買取可能です」としています。",
  },
  {
    name: "金具のメッキ剥がれ・ファスナー不良（バッグ・財布）",
    body: "いくらやのFAQは「角スレ、シミ、ファスナー不良などがあっても需要のあるモデルは高額査定になる場合があります」としています。修理前提で査定されるケースもあるため、修理費が差し引かれる可能性は念頭に置いてください。",
  },
  {
    name: "動かない・壊れた腕時計",
    body: "ティファナは「動かない、壊れた腕時計もお買取させて頂きます」、ザ・ゴールドは「破損などが原因で他店でお値段が付かなかったお品物でも、当社でお買取りできる場合がございます」と公式に記載しています。一方でカインドオルの規約は「電池切れの時計」を買取不可の例として挙げており、時計は業者ごとの差が大きい品目です。",
  },
  {
    name: "シミ・汚れ・破れが著しいもの",
    body: "エコスタイルは「シミや汚れが著しいものはハイブランドを除き買取できません」、コメ兵は「明らかな破損、ひどい汚れや劣化の激しい品物以外は、買取可能」と、程度によって線引きしています。「著しい」かどうかの判断は業者側に委ねられるため、複数社に見せるのが確実です。",
  },
];

const dont = [
  "革の色補修・市販クリーナーでの強い清掃・金具の研磨は、オリジナルの風合いを損ない、かえって減額の理由になることがある",
  "ベタつきをアルコールなどで拭き取ると、内張りが溶けたり剥がれが広がることがある",
  "自分で修理に出してから売る場合、修理費が査定額の上昇分を上回ることが多い（修理前提の査定を行う業者もある）",
  "傷や汚れを申告せずに宅配で送ると、査定額の説明に時間がかかる。写真と一緒に状態を先に伝える",
];

const faqs = [
  {
    q: "ボロボロのブランド品でも本当に売れますか？",
    a: "今回照合した18社の公式記載では、「状態による」「著しく悪いものは不可」と条件を付けつつ、傷・汚れ・使用感のある品を買取対象としている業者が大半でした。買取大吉のように「チャックが壊れてしまった財布や中がべたべたになってしまったバッグ等もお買取できます」と具体例を挙げる業者もあります。まず複数の業者に状態を見せて判断してもらうのが現実的です。",
  },
  {
    q: "壊れた時計はどこに出せばよいですか？",
    a: "動かない・壊れた時計の買取を公式に明記している業者（ティファナ・ザ・ゴールドなど）と、電池切れの時計を不可の例に挙げる業者（カインドオル）があり、時計は業者間の差が大きい品目です。照合表で「壊れた時計」に触れている業者から選んでください。",
  },
  {
    q: "自分でクリーニングや修理をしてから売ったほうが高くなりますか？",
    a: "一般的には推奨されません。市販のクリーナーや補修材はオリジナルの状態を変えてしまい、減額の理由になることがあります。ほこりを柔らかい布で払う程度にとどめ、傷や汚れはそのまま業者に伝えてください。",
  },
  {
    q: "状態が悪いと査定額はどのくらい下がりますか？",
    a: "減額の目安を公式サイトに示している業者は今回の照合では確認できませんでした。実売相場データの「最高落札価格の内訳」で新品・未使用と中古の落札例を見比べ、複数社の提示額と照らし合わせるのが確実です。",
  },
];

export default function DamagedGuidePage() {
  return (
    <GuideShell
      path="/guide/damaged/"
      eyebrow="GUIDE — DAMAGED / WORN"
      crumb="傷・使用感のある品を売る"
      title="ボロボロ・傷あり・使用感のあるブランド品は売れる？買取業者18社の公式記載を照合"
      lead="角スレ、内側のベタつき、金具の傷、動かなくなった時計——状態の悪いブランド品でも買い取ってもらえるのか。当サイトでレビューしている買取業者18社の公式サイトから、傷・汚れ・使用感・破損のある品の扱いに関する記載を原文のまま集め、減額されやすい箇所と申込み前の準備を整理しました。"
      faqs={faqs}
      related={[
        { href: "/guide/no-box/", label: "箱なし・付属品なしで売る実務を読む", primary: true },
        { href: "/guide/not-accepted/", label: "買取不可になるものを確認する" },
        { href: "/reviews/", label: "業者レビュー一覧へ" },
      ]}
    >
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-4">1. 「傷・使用感・破損」に関する公式記載（18社）</h2>
        <DealerPolicyTable
          field="damaged"
          caption="各社の公式サイト（よくある質問・買取案内・規約）から、傷・汚れ・使用感・破損のある品の扱いに関する記載を集めました。"
        />
        <div className="note-box mt-8 max-w-3xl">
          <p className="font-bold text-ink mb-1">読み方</p>
          <p>
            「買取可能」と記載する業者も、ほぼ例外なく「状態による」「著しく悪いものは除く」という条件を付けています。どの程度までを「著しい」と見るかは業者ごとの判断のため、1社の回答で諦めずに複数社へ状態を伝えてください。
          </p>
        </div>
      </section>

      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-4">2. ダメージの種類別に見る、公式記載の傾向</h2>
          <p className="max-w-3xl text-[0.9rem] leading-relaxed text-ink-soft mb-10">
            同じ「状態が悪い」でも、査定での扱いは箇所と品目で違います。照合表の記載を、ダメージの種類ごとに読み分けたものです。
          </p>
          <div className="grid gap-6 md:grid-cols-2 max-w-5xl">
            {damageTypes.map((d, i) => (
              <div key={d.name} className="card-lux p-7">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="serif text-2xl text-gold-soft leading-none">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-base text-ink">{d.name}</h3>
                </div>
                <p className="text-[0.86rem] leading-relaxed text-ink-soft">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">3. 売る前にやってはいけないこと</h2>
        <ul className="max-w-3xl space-y-3">
          {dont.map((c) => (
            <li key={c} className="flex items-baseline gap-3 text-[0.92rem] leading-relaxed text-ink-soft">
              <span className="text-gold text-[0.7rem] shrink-0">◆</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
        <div className="note-box mt-8 max-w-3xl">
          <p className="font-bold text-ink mb-1">実売相場で「状態差」を確認する</p>
          <p>
            当サイトの実売相場データは、最高落札価格の内訳に「新品・未使用」「中古」などの出品状態を併記しています。売りたいモデルの中古落札例を見ておくと、状態の悪い個体の提示額が妥当かどうかを判断する物差しになります。
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="/souba/" className="btn-gold">実売相場データを見る</a>
          <a href="/ranking/" className="btn-line">買取業者の比較表を見る</a>
        </div>
      </section>
    </GuideShell>
  );
}
