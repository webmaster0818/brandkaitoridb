import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, OPERATOR } from "../lib/site";

export const metadata: Metadata = {
  title: "検証ポリシー｜相場データの計測方法と業者情報の確認手順",
  description: `${SITE_NAME}が相場データをどう計測し、業者情報・口コミ・広告をどう扱っているかを公開します。相場は実際の売買成立価格のみ、業者情報は公式サイト確認＋確認日つき、架空の口コミは作成しません。`,
  alternates: { canonical: `${SITE_URL}/verification-policy/` },
};

export default function VerificationPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12 md:py-16">
      <nav className="breadcrumbs mb-8" aria-label="パンくずリスト">
        <ol>
          <li>
            <a href="/">ホーム</a>
          </li>
          <li>検証ポリシー</li>
        </ol>
      </nav>

      <p className="eyebrow mb-4">VERIFICATION POLICY</p>
      <h1 className="rule-gold text-2xl md:text-3xl text-ink mb-8">検証ポリシー</h1>
      <p className="text-[0.92rem] leading-loose text-ink-soft">
        {SITE_NAME}が、掲載している相場データ・業者情報・口コミを「どこから・どのように集め、どう確認しているか」を公開します。高額な取引に関わる情報を扱うサイトとして、正確性と透明性を最優先しています。
      </p>

      {/* 当サイトの立場 */}
      <section className="mt-12">
        <h2 className="rule-gold text-xl text-ink mb-6">当サイトの立場</h2>
        <p className="text-[0.92rem] leading-loose text-ink-soft">
          {SITE_NAME}（運営：{OPERATOR}）は、ブランド買取に関する情報提供・比較を行う
          <strong className="text-ink">情報メディア</strong>
          です。当サイト自身が買取を行う事業者ではありません。詳しくは
          <a href="/about/" className="text-gold underline underline-offset-4">
            運営者情報
          </a>
          をご覧ください。
        </p>
      </section>

      {/* ① 相場データの計測方法 */}
      <section className="mt-12">
        <h2 className="rule-gold text-xl text-ink mb-6">1. 相場データの計測方法</h2>
        <div className="space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            当サイトの相場は、事業者が広告として掲げる「参考買取価格」ではなく、
            <strong className="text-ink">実際に売買が成立した価格のデータ</strong>
            を収集して作成しています。具体的には次の手順で運用しています。
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-gold font-bold shrink-0">◆</span>
              <span>
                <strong className="text-ink">実売価格の収集：</strong>
                実際の売買成立価格のデータを収集します。裏付けのない金額や、成立が確認できない「買取実績」は採用しません。
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold shrink-0">◆</span>
              <span>
                <strong className="text-ink">データのクリーニング：</strong>
                相場を歪めるデータを除外します。まとめ売り・セット販売は除外して単品のみを集計し、明らかな異常値・対象商品と特定できないデータも取り除きます。
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold shrink-0">◆</span>
              <span>
                <strong className="text-ink">前提条件の明記：</strong>
                各相場データには、件数・平均価格・最高価格・収集期間・取得日を明記します。前提を示せないデータは掲載しません。
              </span>
            </li>
          </ul>
          <div className="note-box">
            <strong>実売価格と買取価格は同じではありません。</strong>
            実売価格は個人間・市場での売買が成立した価格であり、買取業者の査定額は、そこから業者の利益・手数料・在庫リスクなどを差し引いた金額になるのが一般的です。当サイトの相場は「査定額を判断する物差し」としてご利用ください。
          </div>
        </div>
      </section>

      {/* ② 業者情報の確認方法 */}
      <section className="mt-12">
        <h2 className="rule-gold text-xl text-ink mb-6">2. 業者情報の確認方法</h2>
        <div className="space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <p>
            掲載している各社の買取方法・手数料・古物商許可番号などの情報は、次の方針で確認しています。
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-gold font-bold shrink-0">◆</span>
              <span>
                <strong className="text-ink">公式サイトでの実確認：</strong>
                各社の公式サイトを実際に確認し、そこに記載されている表記のみを掲載します。
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold shrink-0">◆</span>
              <span>
                <strong className="text-ink">確認日の記載：</strong>
                いつ時点の情報かが分かるよう、確認日を記載します。サービス内容は変更されることがあるため、ご利用前に各社公式サイトで最新情報をご確認ください。
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold shrink-0">◆</span>
              <span>
                <strong className="text-ink">第三者サイトの数値は不採用：</strong>
                他の比較サイト・まとめサイトに載っている推定値・伝聞値は採用しません。公式サイトで確認できない項目は、想像で補わず「非公開」「公式表記なし」と明記します。
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ③ 口コミの方針 */}
      <section className="mt-12">
        <h2 className="rule-gold text-xl text-ink mb-6">3. 口コミ・評判の方針</h2>
        <div className="space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-gold font-bold shrink-0">◆</span>
              <span>
                <strong className="text-ink">実在するソースのみ：</strong>
                口コミ・評判として紹介するのは、実在が確認できるソースの投稿のみです。架空の口コミ・体験談は一切作成しません。
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold shrink-0">◆</span>
              <span>
                <strong className="text-ink">無いものは「少ない」と書く：</strong>
                確認できる口コミが少ない業者については、無理に評判をまとめず「第三者の口コミがまだ少ない」と正直に記載します。
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ④ 広告の方針 */}
      <section className="mt-12">
        <h2 className="rule-gold text-xl text-ink mb-6">4. 広告（PR）の方針</h2>
        <div className="space-y-4 text-[0.92rem] leading-loose text-ink-soft">
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-gold font-bold shrink-0">◆</span>
              <span>
                <strong className="text-ink">リンクは計測リンク受領後のみ：</strong>
                各社への申し込みリンクは、アフィリエイトプログラムの提携が成立し、正規の計測リンクを受領した場合にのみ設置します。提携前の業者に生のリンクを広告のように掲載することはありません。
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold shrink-0">◆</span>
              <span>
                <strong className="text-ink">報酬は評価に影響しない：</strong>
                広告提携の有無や報酬額が、評価内容・掲載順位に影響することは一切ありません。評価は本ポリシーに基づく実売データと公式確認情報のみで作成します。
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* 免責 */}
      <section className="mt-12">
        <h2 className="rule-gold text-xl text-ink mb-6">免責事項</h2>
        <p className="text-[0.92rem] leading-loose text-ink-soft">
          掲載情報は上記の方法による調査・確認に基づくものであり、完全性・正確性・最新性を保証するものではありません。相場は市況により変動し、実際の査定額は商品の状態・付属品・時期などによって異なります。ご利用に際しては各社に直接お問い合わせのうえ、最新情報をご確認ください。
        </p>
      </section>

      <div className="mt-12 flex flex-wrap gap-4">
        <a href="/about/" className="btn-line">
          運営者情報を見る
        </a>
        <a href="/contact/" className="btn-line">
          情報の訂正を申し立てる
        </a>
      </div>
    </main>
  );
}
