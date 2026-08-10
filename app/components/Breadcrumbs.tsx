type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="パンくずリスト" className="breadcrumbs">
      <ol>
        <li>
          <a href="/">ホーム</a>
        </li>
        {items.map((c) => (
          <li key={c.label}>{c.href ? <a href={c.href}>{c.label}</a> : c.label}</li>
        ))}
      </ol>
    </nav>
  );
}
