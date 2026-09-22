import { REVIEWS } from "../lib/reviews";
import { DEALER_POLICIES, type DealerPolicy, type PolicyQuote } from "../lib/dealerPolicies";

type Field = "accessories" | "damaged" | "notAccepted";

/**
 * 業者18社の公式記載を並べる照合表。引用は公式ページ原文のみ(要約なし)、記載が見つからない社は「記載なし」と正直に表示。
 * 業者サイトへの外部リンクは設置しない(レビューページへ内部リンク)。
 */
export default function DealerPolicyTable({ field, caption }: { field: Field; caption: string }) {
  const rows = DEALER_POLICIES.map((p) => ({
    p,
    r: REVIEWS.find((x) => x.slug === p.slug)!,
    v: p[field] as PolicyQuote,
  })).filter((x) => x.r);
  const okCount = rows.filter((x) => x.v.status === "ok").length;

  return (
    <div className="max-w-5xl">
      <p className="text-[0.85rem] leading-relaxed text-ink-soft mb-5">
        {caption}
        該当する公式記載が確認できたのは{rows.length}社中{okCount}社です。引用は公式サイトの原文で、当サイトでの要約・言い換えはしていません（2026年9月22日確認）。記載が見つからなかった社は「記載なし」としています。
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-[0.84rem] leading-relaxed border-collapse">
          <thead>
            <tr className="text-left border-b border-line">
              <th className="py-3 pr-4 font-bold text-ink whitespace-nowrap">業者</th>
              <th className="py-3 pr-4 font-bold text-ink">公式サイトの記載（原文）</th>
              <th className="py-3 font-bold text-ink whitespace-nowrap">出典</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ p, r, v }) => (
              <tr key={p.slug} className="border-b border-line align-top">
                <td className="py-3 pr-4 whitespace-nowrap">
                  <a href={`/reviews/${p.slug}/`} className="font-bold text-ink hover:text-gold">
                    {r.name}
                  </a>
                </td>
                <td className="py-3 pr-4 text-ink-soft">
                  {v.status === "ok" ? (
                    <>
                      {v.q && <span className="block text-[0.78rem] text-ink mb-1">Q. {v.q}</span>}
                      <span className="block">「{v.quote}」</span>
                    </>
                  ) : (
                    <span className="text-ink-soft/70">記載なし（公式サイトで該当する記載を確認できませんでした）</span>
                  )}
                </td>
                <td className="py-3 whitespace-nowrap text-[0.78rem] text-ink-soft">
                  {v.status === "ok" ? `公式サイト ${v.source}` : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function dealersWithItem(item: "wallet" | "shoes"): DealerPolicy[] {
  return DEALER_POLICIES.filter((p) => p[item] === "yes");
}
