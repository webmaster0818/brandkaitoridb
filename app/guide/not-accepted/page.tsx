import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import GuideShell from "../../components/GuideShell";
import DealerPolicyTable from "../../components/DealerPolicyTable";

export const metadata: Metadata = {
  title: "ブランド品の買取不可になるものは？買取業者18社の公式記載を照合",
  description:
    "コピー品・盗品・著しい破損・ノーブランド品・付属品のみ・ローン残債など、ブランド買取業者が公式に「買取できない」としている品を18社の記載で照合。断られる典型パターンと、不可と言われたときの選択肢を整理します。",
  alternates: { canonical: `${SITE_URL}/guide/not-accepted/` },
};

const patterns = [
  {
    name: "偽造品・コピー品・真贋が確認できないもの",
    body: "ほぼ全社に共通する不可条件です。エコスタイルは「有名ブランドの商標登録されたものを模したものは買取できません」、ブランドオフの規約は不正品の疑いがある場合に警察署への申告や法的対応をとる旨を明記しています。本物であっても真贋を確認できる材料（刻印・シリアル・付属品）が乏しいと、買取を見送られることがあります。",
  },
  {
    name: "盗品・第三者の権利を侵害するもの",
    body: "古物営業法上、業者は盗品の疑いがある品を扱えません。ネットオフは「盗品の疑いがある商品」、RECLOは「偽造品、盗難品その他第三者の権利を侵害している又は侵害していると疑われるもの」を不可としています。本人確認書類の提示が必要なのもこのためです。",
  },
  {
    name: "著しい破損・汚れ・臭い",
    body: "程度の問題ですが、コメ兵は「シミ・汚れ・破れ」などがある品物に値段を付けられない場合を明記し、ブランドゥールは「汚れ、破れ、痛みの著しい物」を不可としています。ティファナは公式に「買取できないもの」の一覧ページを持ち、使用感が著しいものや動物・タバコの臭いがあるものを挙げています。",
  },
  {
    name: "ノーブランド・ファストファッション・ニーズの低いデザイン",
    body: "RIBLAは「ノーブランドやファストファッションの買取はご遠慮いただいております」、いくらやは「基本的には対象外ですが、一部デザイン性や素材価値の高い商品はお取り扱いできる場合があります」としています。カインドオルの規約は「ニーズが低下したデザインのアイテム」も不可の例に含めています。",
  },
  {
    name: "付属品のみ・空き箱・ショッパー",
    body: "なんぼやは「ブランド問わず、空き箱やショッパー（紙袋）は買取できかねます」、RECLOは「付属品のみの買取は行なっておりません」と明記しています。箱や紙袋は本体と一緒に出すことで評価される性質のものです。",
  },
  {
    name: "ショッピングローンの残債があるもの",
    body: "ファーストクラスの宅配買取規約は「ショッピングローン残高がある商品はいかなる場合でも買取できません」としています。所有権が販売店やクレジット会社に留保されている可能性があるためで、他社でも同様の扱いになるのが一般的です。",
  },
];

const alternatives = [
  "不可の理由を確認する（真贋・状態・ジャンル外・付属品のどれに当たるか）。理由によって次の一手が変わる",
  "状態が理由なら、傷・破損品の買取を公式に明記している業者（傷・使用感ガイドの照合表）に改めて相談する",
  "ジャンル外が理由なら、そのジャンルを公式に取り扱う業者を選び直す（財布・靴・アパレルは業者ごとに扱いが分かれる）",
  "真贋が理由なら、購入店の記録・レシート・ギャランティなど正規流通を示せる材料を探す",
  "それでも値が付かない場合は、フリマ・オークションでの単品出品、または処分を検討する（実売相場データで需要の有無を確認）",
];

const faqs = [
  {
    q: "買取を断られる一番多い理由は何ですか？",
    a: "公式記載として最も多く共通していたのは偽造品・コピー品と、盗品の疑いがあるものです。次いで、著しい破損・汚れ・臭いなど状態を理由とする不可、ノーブランド・ファストファッションなどジャンルを理由とする不可が続きます。",
  },
  {
    q: "本物なのに「真贋が確認できない」と言われました。どうすればよいですか？",
    a: "刻印・シリアル・付属品・購入時の記録など、正規流通を示す材料を集めて別の業者に相談してください。真贋の判断基準は業者ごとに異なり、1社の判断がすべてではありません。",
  },
  {
    q: "1社で断られたら、他の業者でも買取不可ですか？",
    a: "そうとは限りません。ザ・ゴールドは「破損などが原因で他店でお値段が付かなかったお品物でも、当社でお買取りできる場合がございます」と公式に記載しており、状態やジャンルを理由とする不可は業者間で判断が分かれます。ただし偽造品や盗品の疑いによる不可は、どの業者でも同じ扱いになります。",
  },
  {
    q: "買取不可の品はどうやって処分すればよいですか？",
    a: "偽造品は販売・譲渡自体が法令に触れるおそれがあるため、フリマ等への出品は避けてください。本物で状態やジャンルが理由の場合は、フリマ・オークションでの単品出品や、自治体のルールに沿った処分を検討してください。",
  },
];

export default function NotAcceptedGuidePage() {
  return (
    <GuideShell
      path="/guide/not-accepted/"
      eyebrow="GUIDE — NOT ACCEPTED"
      crumb="買取不可になるもの"
      title="ブランド品の買取不可になるものは？買取業者18社の公式記載を照合"
      lead="申し込んでから「お取り扱いできません」と言われるのは時間の無駄です。当サイトでレビューしている買取業者18社の公式サイトから、買取不可・お断りの条件に関する記載を原文のまま集め、断られる典型パターンと、不可と言われたときの選択肢を整理しました。"
      faqs={faqs}
      related={[
        { href: "/guide/damaged/", label: "傷・使用感のある品を売る実務を読む", primary: true },
        { href: "/guide/no-box/", label: "箱なし・付属品なしで売る実務を読む" },
        { href: "/reviews/", label: "業者レビュー一覧へ" },
      ]}
    >
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-4">1. 「買取不可・お断り」に関する公式記載（18社）</h2>
        <DealerPolicyTable
          field="notAccepted"
          caption="各社の公式サイト（よくある質問・買取規約・買取できないもの一覧）から、買取不可・お断りの条件に関する記載を集めました。"
        />
        <div className="note-box mt-8 max-w-3xl">
          <p className="font-bold text-ink mb-1">読み方</p>
          <p>
            規約に「当社の買取基準に該当しない商品」「状態や当社規定によりお取扱いできない場合」といった包括的な条項を置く業者が多く、具体的な不可品目を一覧化している業者（ティファナ・ブランドゥール・カインドオルなど）は少数です。具体例がない業者は、申込み前に問い合わせるのが確実です。
          </p>
        </div>
      </section>

      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-4">2. 買取不可になる6つの典型パターン</h2>
          <p className="max-w-3xl text-[0.9rem] leading-relaxed text-ink-soft mb-10">
            照合表の記載を、不可の理由ごとに整理したものです。「どの理由で断られたか」がわかると、次に相談すべき業者が絞れます。
          </p>
          <div className="grid gap-6 md:grid-cols-2 max-w-5xl">
            {patterns.map((d, i) => (
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
        <h2 className="rule-gold text-2xl text-ink mb-8">3. 「買取不可」と言われたときの選択肢</h2>
        <ul className="max-w-3xl space-y-3">
          {alternatives.map((c) => (
            <li key={c} className="flex items-baseline gap-3 text-[0.92rem] leading-relaxed text-ink-soft">
              <span className="text-gold text-[0.7rem] shrink-0">◆</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="/ranking/" className="btn-gold">買取業者の比較表を見る</a>
          <a href="/souba/" className="btn-line">実売相場データを見る</a>
        </div>
      </section>
    </GuideShell>
  );
}
