import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import { REVIEWS } from "../../lib/reviews";
import { WALLET_SOUBA } from "../../lib/itemSouba";
import { dealersWithItem } from "../../components/DealerPolicyTable";
import GuideShell from "../../components/GuideShell";
import ItemSoubaTable from "../../components/ItemSoubaTable";

export const metadata: Metadata = {
  title: "ブランド財布の買取相場の目安と高く売る実務｜13ブランドの実売データ",
  description:
    "ルイヴィトン・シャネル・エルメス・グッチ・プラダなど13ブランドの財布の実売相場（落札件数・平均・最高値・出典つき）と、財布の査定で見られる点、財布を公式に取り扱う買取業者の一覧をまとめました。",
  alternates: { canonical: `${SITE_URL}/guide/wallet/` },
};

const factors = [
  {
    title: "ライン・素材・型",
    body: "同じブランドでもモノグラムとダミエ、ラムスキンとキャビアスキン、長財布と三つ折りで実売価格の帯が変わります。実売相場表ではブランドごとにライン別の集計を分けているものがあるので、自分の財布と同じラインの行を見てください。",
  },
  {
    title: "使用感（角・小銭入れ・ホック・カード段）",
    body: "財布はバッグより日常的に触れるため、角スレ・小銭入れの黒ずみ・ホックの緩み・カード段の伸びが査定で見られます。買取大吉は「チャックが壊れてしまった財布」も買取対象と公式に記載していますが、状態の良い個体との差は避けられません。",
  },
  {
    title: "付属品（箱・保存袋・ギャランティ）",
    body: "財布はバッグ・時計に比べて付属品の要否を条件にする業者が少なく、本体のみでの査定を公式に明記する業者が多い品目です。あれば一緒に出し、無い場合は「箱なし・付属品なしで売る」ガイドの照合表を確認してください。",
  },
  {
    title: "単品出品とまとめ売りの区別",
    body: "実売データでは、複数ブランドの財布を数十〜数百点まとめた出品が高額で落札されることがあり、単品の相場とは性質が違います。当サイトの最高落札価格はまとめ売りを除外した単品出品を採用しています。",
  },
];

const faqs = [
  {
    q: "古い財布や使い込んだ財布でも売れますか？",
    a: "多くの業者は状態次第で買取対象としており、ファスナー不良や角スレがあっても需要のあるモデルは値が付くことが公式記載でも示されています。減額は避けられないため、状態を伝えたうえで複数社の提示額を比べてください。",
  },
  {
    q: "財布の実売相場と査定額はどのくらい違いますか？",
    a: "実売価格はオークションで実際に売買が成立した価格で、業者の査定額はそこから利益・販売コスト・補修費を差し引いた金額になります。差はブランド・状態・業者によって異なるため、相場表は「提示額が妥当かどうかの物差し」として使い、複数社で比較してください。",
  },
  {
    q: "財布を取り扱っていない買取業者はありますか？",
    a: "今回照合した18社では、財布の取扱を公式サイトで確認できなかった業者はありませんでした（1社は取扱品目の記載が「ブランド品」と包括的で、財布の個別表記なし）。ただし高額品を中心に扱う業者では低価格帯の財布に値が付かないこともあります。",
  },
];

export default function WalletGuidePage() {
  const dealers = dealersWithItem("wallet")
    .map((p) => REVIEWS.find((r) => r.slug === p.slug)!)
    .filter(Boolean);

  return (
    <GuideShell
      path="/guide/wallet/"
      eyebrow="GUIDE — WALLET"
      crumb="財布を高く売る実務"
      title="ブランド財布の買取相場の目安と高く売る実務"
      lead="財布はブランド品のなかで最も流通量が多く、実売データが豊富な品目です。当サイトが公開している13ブランドの財布の実売相場をひとつの表にまとめ、財布の査定で見られる点と、財布を公式に取り扱う買取業者を整理しました。"
      faqs={faqs}
      related={[
        { href: "/guide/bag/", label: "バッグを高く売る実務を読む", primary: true },
        { href: "/guide/no-box/", label: "箱なし・付属品なしで売る実務を読む" },
        { href: "/guide/", label: "売り方ガイドに戻る" },
      ]}
    >
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-4">1. 財布の実売相場（{WALLET_SOUBA.length}行・13ブランド）</h2>
        <p className="max-w-3xl text-[0.9rem] leading-relaxed text-ink-soft mb-8">
          各ブランドの実売相場ページに掲載している財布カテゴリの集計を転記したものです（数値・取得日は各ページと同一）。落札件数はaucfanの集計期間内の件数、最高落札価格はまとめ売りを除外した単品出品の値です。ブランド名から各ページの内訳に移動できます。
        </p>
        <ItemSoubaTable rows={WALLET_SOUBA} />
        <div className="note-box mt-8 max-w-3xl">
          ルイヴィトンはモノグラムとダミエ、シャネルはマトラッセと、ライン別に集計を分けています。グッチの最高落札価格「—」は、取得時点で出典ページに最高値の表示がなかった項目です。
        </div>
      </section>

      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-4">2. 財布の査定で見られる4つの点</h2>
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
        <h2 className="rule-gold text-2xl text-ink mb-4">3. 財布を公式に取り扱う買取業者（{dealers.length}社）</h2>
        <p className="max-w-3xl text-[0.9rem] leading-relaxed text-ink-soft mb-8">
          当サイトの業者レビュー18社のうち、公式サイトの取扱品目に財布（または財布を含む小物）を明記している業者です（2026年9月22日確認）。各レビューでは買取方法・手数料・古物商許可番号を公式サイトで一次確認しています。
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
