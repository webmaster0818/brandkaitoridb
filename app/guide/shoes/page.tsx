import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import { REVIEWS } from "../../lib/reviews";
import { SHOES_SOUBA } from "../../lib/itemSouba";
import { dealersWithItem } from "../../components/DealerPolicyTable";
import GuideShell from "../../components/GuideShell";
import ItemSoubaTable from "../../components/ItemSoubaTable";

export const metadata: Metadata = {
  title: "ブランド靴・スニーカーの買取相場の目安と高く売る実務｜10ブランドの実売データ",
  description:
    "ルブタン・グッチ・ルイヴィトン・ディオール・プラダ・バレンシアガ・エルメス・シャネル・フェラガモ・ジミーチュウの靴・スニーカーの実売相場（落札件数・平均・最高値・出典つき）と、靴の査定で見られる点、靴を公式に取り扱う買取業者の一覧をまとめました。",
  alternates: { canonical: `${SITE_URL}/guide/shoes/` },
};

const factors = [
  {
    title: "ソール・ヒール・つま先の減り",
    body: "靴は履くほど価値が落ちる品目で、ソールの減りとヒールの削れ、つま先のスレが最初に見られます。ルブタンの赤いソールのように、ブランドの象徴がソールにあるモデルは特にソールの状態が価格を左右します。",
  },
  {
    title: "サイズと箱",
    body: "実売データでは、同じモデルでも流通量の多いサイズと少ないサイズで落札のされ方が変わります。靴は箱（シューズボックス）と保存袋が揃っている出品が高値になりやすい一方、ティファナのように「箱やその他の付属品が無い靴も取り扱っております」と公式に明記する業者もあります。",
  },
  {
    title: "新品・未使用と中古の差",
    body: "今回の実売データでも、最高落札価格の多くは新品・未使用品の出品でした。試着のみ・保管品であれば、その旨を状態欄で伝えられるよう購入時期と使用回数を控えておきます。",
  },
  {
    title: "コラボ・限定モデル",
    body: "adidas×GUCCI、adidas×BALENCIAGAのようなコラボレーションや限定モデルは、通常ラインと相場の性質が違います。相場表の最高落札価格の内訳で、コラボかどうかを確認してください。",
  },
];

const faqs = [
  {
    q: "履いた靴でも買取してもらえますか？",
    a: "靴を公式に取り扱う業者の多くは中古の靴も査定対象としています。エコスタイルは「スニーカーやブーツ、革靴まで幅広く買取しております。使用感のあるお品物もぜひお売りください」と公式に記載しています。ただしソールの減りや汚れが著しいものは値が付かないことがあります。",
  },
  {
    q: "箱がないスニーカーは売れますか？",
    a: "ティファナは靴の箱・付属品が無くても取り扱う旨を公式に明記しています。他の業者も本体のみの査定に対応するのが一般的ですが、箱ありの個体より提示額は下がる傾向があります。",
  },
  {
    q: "靴を取り扱っていない買取業者はありますか？",
    a: "今回照合した18社では、靴の取扱を公式サイトで確認できなかった業者が2社ありました（取扱品目の記載が包括的で靴の個別表記なし）。ザ・ゴールドのように「洋服や靴などのアパレル品は、エルメスやルイ・ヴィトンなど一部のブランドで取扱いが可能」とブランドを限定する業者もあるため、申込み前に品目ページを確認してください。",
  },
];

export default function ShoesGuidePage() {
  const dealers = dealersWithItem("shoes")
    .map((p) => REVIEWS.find((r) => r.slug === p.slug)!)
    .filter(Boolean);

  return (
    <GuideShell
      path="/guide/shoes/"
      eyebrow="GUIDE — SHOES / SNEAKERS"
      crumb="靴・スニーカーを高く売る実務"
      title="ブランド靴・スニーカーの買取相場の目安と高く売る実務"
      lead="靴はブランド品のなかでも状態による価格差が大きく、業者によって取扱の有無が分かれる品目です。10ブランド13カテゴリの靴・スニーカーの実売相場を出典つきでまとめ、靴の査定で見られる点と、靴を公式に取り扱う買取業者を整理しました。"
      faqs={faqs}
      related={[
        { href: "/guide/wallet/", label: "財布を高く売る実務を読む", primary: true },
        { href: "/guide/damaged/", label: "傷・使用感のある品を売る実務を読む" },
        { href: "/guide/", label: "売り方ガイドに戻る" },
      ]}
    >
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-4">1. 靴・スニーカーの実売相場（{SHOES_SOUBA.length}行・10ブランド）</h2>
        <p className="max-w-3xl text-[0.9rem] leading-relaxed text-ink-soft mb-8">
          オークファン（aucfan.com）のYahoo!オークション落札相場の集計値（落札件数・平均落札価格）と、落札実績から選んだ単品出品の最高落札価格です。複数足のまとめ売り、他ブランドの混在、バッグなど靴以外の誤ヒットは除外しています。取得日は2026年9月22日。ブランド名にリンクがあるものは、当サイトの実売相場ページに他カテゴリの内訳があります。
        </p>
        <ItemSoubaTable rows={SHOES_SOUBA} />
        <div className="note-box mt-8 max-w-3xl">
          パンプス系（ルブタン・フェラガモ・ジミーチュウ）は集計期間が90日、それ以外は30日です。期間が違うため落札件数は同列に比較しないでください。
        </div>
      </section>

      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-4">2. 靴の査定で見られる4つの点</h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-5xl">
            {factors.map((f, i) => (
              <div key={f.title} className="card-lux p-7">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="serif text-2xl text-gold-soft leading-none">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-base text-ink">{f.title}</h3>
                </div>
                <p className="text-[0.86rem] leading-relaxed text-ink-soft">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-4">3. 靴を公式に取り扱う買取業者（{dealers.length}社）</h2>
        <p className="max-w-3xl text-[0.9rem] leading-relaxed text-ink-soft mb-8">
          当サイトの業者レビュー18社のうち、公式サイトの取扱品目に靴・スニーカー・シューズ（またはアパレル全般）を明記している業者です（2026年9月22日確認）。ブランドを限定して靴を扱う業者もあるため、各レビューの取扱ジャンルもあわせて確認してください。
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
          {dealers.map((r) => (
            <a key={r.slug} href={`/reviews/${r.slug}/`} className="card-lux p-5 block">
              <h3 className="text-base text-ink mb-1">{r.name}</h3>
              <p className="text-[0.8rem] leading-relaxed text-ink-soft">
                {r.company} ／ {r.methods.join("・")}
              </p>
            </a>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="/ranking/" className="btn-gold">買取業者の比較表を見る</a>
          <a href="/reviews/" className="btn-line">業者レビュー一覧へ</a>
        </div>
      </section>
    </GuideShell>
  );
}
