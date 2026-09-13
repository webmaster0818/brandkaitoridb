import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import { REVIEWS } from "../../lib/reviews";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "腕時計を高く売るための実務ガイド",
  description:
    "ブランド腕時計を売る前に確認したい付属品・リファレンス・動作状態・オーバーホール履歴の扱いを整理。実売相場データ（ロレックス・オメガ・カルティエ・ブルガリ・タグホイヤー・グランドセイコー）と、時計を公式に取り扱う業者レビューへの導線つき。",
  alternates: { canonical: `${SITE_URL}/guide/watch/` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "売り方ガイド", item: `${SITE_URL}/guide/` },
    { "@type": "ListItem", position: 3, name: "腕時計を高く売る実務", item: `${SITE_URL}/guide/watch/` },
  ],
};

// 実売相場データを公開している時計ブランド（/souba/ 配下）
const watchBrands = [
  { name: "ロレックス", slug: "rolex", note: "デイトナ・サブマリーナ・デイトジャスト・エクスプローラー" },
  { name: "オメガ", slug: "omega", note: "スピードマスター・シーマスター・コンステレーション" },
  { name: "カルティエ", slug: "cartier", note: "時計・リング・ネックレス（時計カテゴリの実売）" },
  { name: "ブルガリ", slug: "bvlgari", note: "アショーマ・オクトほか（時計カテゴリ）" },
  { name: "タグホイヤー", slug: "tag-heuer", note: "カレラ・アクアレーサー・モナコ・フォーミュラ1" },
  { name: "グランドセイコー", slug: "grand-seiko", note: "スプリングドライブ・クオーツ・メカニカル・ヘリテージ" },
];

// 査定を左右する確認項目
const factors = [
  {
    title: "付属品（箱・保証書・余りコマ）",
    body: "時計は付属品の影響が特に大きい品目です。購入時の箱・保証書（ギャランティカード）・取扱説明書・ブレスレットの余りコマ・購入店のレシートを、査定の前に全て探しておきます。保証書は「その個体の正規流通の証明」として扱われるため、有無で提示額が変わるのが一般的です。",
  },
  {
    title: "リファレンス番号と製造時期",
    body: "裏蓋・ケースサイド・保証書に記載されたリファレンス番号（型番）を控えておきます。同じモデル名でも世代（リファレンス）で実売価格が大きく違うため、相場データと照合するときはモデル名ではなくリファレンスで探すのが確実です。",
  },
  {
    title: "動作状態と精度",
    body: "現在動いているか、止まる・遅れる・日付が変わらないなどの不具合がないかを確認しておきます。不具合は隠さず伝えたほうが、査定後の減額や返送のやり取りを避けられます。長期間放置していた機械式時計は、査定前に一度ゼンマイを巻いて動作を確認しておきましょう。",
  },
  {
    title: "オーバーホール（分解掃除）の履歴",
    body: "メーカーや時計店で分解掃除をした記録（明細・保証書）があれば、査定時に提示できるようにしておきます。これから売るためにオーバーホールを新たに行うかどうかは、費用が査定額の上乗せを上回る場合があるため、先に業者へ「未整備のままの査定額」を確認してから判断するのが安全です。",
  },
  {
    title: "外装の状態（傷・研磨歴）",
    body: "ケースやブレスの傷、ガラスの欠け、ベゼルの色あせなどを確認しておきます。自分で研磨や補修をするのは避けてください。仕上げの質によってはかえって評価が下がるうえ、オリジナルの状態が失われるためです。",
  },
];

const checklist = [
  "箱・保証書・取扱説明書・余りコマ・レシートを一か所にまとめた",
  "リファレンス番号を裏蓋または保証書で控えた",
  "動作と日付表示を確認し、不具合があれば書き出した",
  "オーバーホール・修理の明細があれば用意した",
  "売りたいブランドの実売相場データで同じリファレンスの落札例を見た",
  "業者を2〜3社に絞り、査定額と手数料（送料・返送料）を並べて比較する準備をした",
];

const faqs = [
  {
    q: "保証書がない時計は売れませんか？",
    a: "多くの業者では保証書がなくても査定・買取自体は可能ですが、保証書ありの個体と比べて提示額が下がるのが一般的です。保証書の代わりに購入店のレシートやオーバーホールの明細があれば、一緒に提示してください。真贋の確認方法や条件は業者ごとに異なるため、事前に確認しておくと安心です。",
  },
  {
    q: "止まっている時計や傷のある時計でも査定してもらえますか？",
    a: "動作不良や傷があっても査定対象になることは多いです。ただし修理費用を見込んだ提示額になるため、動作品より低くなります。不具合の内容は隠さず、申込み時点で伝えておくと査定後のやり取りがスムーズです。",
  },
  {
    q: "実売相場と査定額はどのくらい違いますか？",
    a: "実売価格はオークション等で実際に売買が成立した価格で、買取業者の査定額はそこから業者の利益や販売コスト・整備費用を差し引いた金額になります。差の大きさはモデル・状態・業者によって異なり、一律の目安はありません。相場データは「提示額が妥当かどうかを判断する物差し」として使い、複数の業者の提示額と見比べてください。",
  },
];

export default function WatchGuidePage() {
  const watchDealers = REVIEWS.filter((r) => r.genres.some((g) => g.includes("時計")));

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-12 md:pt-14 md:pb-16">
          <Breadcrumbs
            items={[{ label: "売り方ガイド", href: "/guide/" }, { label: "腕時計を高く売る実務" }]}
          />
          <p className="eyebrow mt-8 mb-4">GUIDE — WATCH</p>
          <h1 className="text-3xl md:text-4xl leading-snug text-ink">
            腕時計を高く売るための実務ガイド
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            ブランド腕時計は、同じモデルでも付属品の有無・リファレンス・動作状態で提示額が大きく変わる品目です。このガイドでは「相場を知る → 査定を左右する点を整える → 時計を扱う業者で相見積もりを取る」という順番で、売る前にやっておきたい実務を整理します。
          </p>
        </div>
      </section>

      {/* STEP1 相場 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-4">1. 売りたいブランドの実売相場を確認する</h2>
        <p className="max-w-3xl text-[0.9rem] leading-relaxed text-ink-soft mb-8">
          当サイトでは、業者の「参考買取価格」ではなく、オークションで実際に売買が成立した価格を件数・平均・最高値・出典・取得日つきで公開しています。時計は以下のブランドを公開中です。モデル名ではなくリファレンス（型番）で落札例を探すと、査定額との比較が正確になります。
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
          {watchBrands.map((b) => (
            <a key={b.slug} href={`/souba/${b.slug}/`} className="card-lux p-6 block">
              <p className="eyebrow mb-2">MARKET DATA</p>
              <h3 className="text-base text-ink mb-1">{b.name}の実売相場データ</h3>
              <p className="text-[0.82rem] leading-relaxed text-ink-soft">{b.note}</p>
            </a>
          ))}
        </div>
        <div className="note-box mt-8 max-w-3xl">
          実売価格は買取査定額そのものではありません。査定額は実売から業者の利益・販売コスト・整備費用を差し引いた金額になるため、相場データは「提示額が妥当かどうかの物差し」としてお使いください。
        </div>
      </section>

      {/* STEP2 査定を左右する点 */}
      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-4">2. 査定額を左右する5つの確認項目</h2>
          <p className="max-w-3xl text-[0.9rem] leading-relaxed text-ink-soft mb-10">
            時計の査定で必ず見られる項目です。査定に出す前に自分で確認しておくと、提示額の理由を理解しやすくなり、業者間の比較もしやすくなります。
          </p>
          <div className="grid gap-6 md:grid-cols-2 max-w-5xl">
            {factors.map((f, i) => (
              <div key={f.title} className="card-lux p-7">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="serif text-2xl text-gold-soft leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base text-ink">{f.title}</h3>
                </div>
                <p className="text-[0.86rem] leading-relaxed text-ink-soft">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEP3 チェックリスト */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-18">
        <h2 className="rule-gold text-2xl text-ink mb-8">3. 査定に出す前のチェックリスト</h2>
        <ul className="max-w-3xl space-y-3">
          {checklist.map((c) => (
            <li key={c} className="flex items-baseline gap-3 text-[0.92rem] leading-relaxed text-ink-soft">
              <span className="text-gold text-[0.7rem] shrink-0">◆</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
        <div className="note-box mt-8 max-w-3xl">
          <p className="font-bold text-ink mb-1">自分で磨かない・分解しない</p>
          <p>
            外装の研磨や裏蓋の開閉を自分で行うと、オリジナルの状態が失われたり内部に傷やほこりが入ったりして、評価が下がることがあります。気になる傷や不具合は、そのまま業者に伝えてください。
          </p>
        </div>
      </section>

      {/* STEP4 業者 */}
      <section className="bg-ivory-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-18">
          <h2 className="rule-gold text-2xl text-ink mb-4">
            4. 時計を公式に取り扱う業者で相見積もりを取る（{watchDealers.length}社）
          </h2>
          <p className="max-w-3xl text-[0.9rem] leading-relaxed text-ink-soft mb-8">
            以下は、当サイトの業者レビューのうち、公式サイトの取扱ジャンルに「時計」を明記している業者です。各レビューでは買取方法・手数料・古物商許可番号を公式サイトで一次確認し、確認できなかった項目も正直に記載しています。2〜3社に絞って査定を依頼し、提示額と手数料を並べて比較してください。
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
            {watchDealers.map((r) => (
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
          <a href="/guide/bag/" className="btn-gold">バッグを高く売る実務を読む</a>
          <a href="/guide/houhou/" className="btn-line">出張・宅配・店頭の違いを読む</a>
          <a href="/guide/" className="btn-line">売り方ガイドに戻る</a>
        </div>
      </section>
    </main>
  );
}
