import type { ItemSoubaRow } from "../lib/itemSouba";

/** 品目別ガイドの実売相場表(件数・平均・最高値・出典・取得日)。 */
export default function ItemSoubaTable({ rows }: { rows: ItemSoubaRow[] }) {
  return (
    <div className="overflow-x-auto max-w-5xl">
      <table className="w-full text-[0.84rem] leading-relaxed border-collapse">
        <thead>
          <tr className="text-left border-b border-line">
            <th className="py-3 pr-4 font-bold text-ink whitespace-nowrap">ブランド／カテゴリ</th>
            <th className="py-3 pr-4 font-bold text-ink whitespace-nowrap">落札件数</th>
            <th className="py-3 pr-4 font-bold text-ink whitespace-nowrap">平均落札価格</th>
            <th className="py-3 pr-4 font-bold text-ink whitespace-nowrap">最高落札価格</th>
            <th className="py-3 font-bold text-ink whitespace-nowrap">出典・取得日</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={`${r.brand}-${r.category}`} className="border-b border-line align-top">
              <td className="py-3 pr-4">
                {r.slug ? (
                  <a href={`/souba/${r.slug}/`} className="font-bold text-ink hover:text-gold">
                    {r.brand}
                  </a>
                ) : (
                  <span className="font-bold text-ink">{r.brand}</span>
                )}
                <span className="block text-[0.78rem] text-ink-soft">{r.category}</span>
              </td>
              <td className="py-3 pr-4 text-ink-soft whitespace-nowrap">{r.count}</td>
              <td className="py-3 pr-4 text-ink whitespace-nowrap">{r.avg}</td>
              <td className="py-3 pr-4">
                <span className="text-ink whitespace-nowrap">{r.max}</span>
                {r.maxNote && <span className="block text-[0.76rem] text-ink-soft mt-1">{r.maxNote}</span>}
              </td>
              <td className="py-3 text-[0.76rem] text-ink-soft whitespace-nowrap">
                <a href={r.sourceUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline">
                  aucfan
                </a>
                <span className="block">{r.fetchedAt}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
