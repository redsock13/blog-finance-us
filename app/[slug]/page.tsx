import { comparisons } from "@/data/comparisons";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = comparisons.find((c) => c.slug === slug);
  if (!item) notFound();

  return (
    <main className="min-h-screen px-4 md:px-8 lg:px-16 py-8" style={{ background: "#0f0f0f" }}>
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-8"
          style={{ color: "#a855f7", textDecoration: "none" }}
        >
          ← Back to all comparisons
        </a>

        {/* Category badge */}
        <div
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4"
          style={{
            background: "rgba(168,85,247,0.1)",
            border: "1px solid rgba(168,85,247,0.2)",
            color: "#a855f7",
          }}
        >
          {item.category}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">{item.title}</h1>
        <p className="text-base md:text-lg mb-8" style={{ color: "#94a3b8" }}>
          {item.description}
        </p>

        {/* Winner box */}
        <div
          className="card mb-8"
          style={{ borderColor: "#a855f7", borderWidth: "2px" }}
        >
          <div
            className="text-xs font-bold uppercase tracking-wider mb-2"
            style={{ color: "#a855f7" }}
          >
            🏆 Winner
          </div>
          <div className="text-2xl font-black">{item.winner}</div>
          <a
            href={item.winnerUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="btn-primary mt-4 inline-block"
          >
            Visit {item.winner} →
          </a>
        </div>

        {/* Comparison table */}
        <h2 className="text-xl font-black mb-4">Product Comparison</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full min-w-96 text-sm" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <th className="text-left py-3 pr-4 font-bold" style={{ color: "#94a3b8" }}>Product</th>
                <th className="text-left py-3 pr-4 font-bold" style={{ color: "#94a3b8" }}>Score</th>
                {item.products[0]?.apy && (
                  <th className="text-left py-3 pr-4 font-bold" style={{ color: "#94a3b8" }}>APY</th>
                )}
                {item.products[0]?.fee !== undefined && (
                  <th className="text-left py-3 pr-4 font-bold" style={{ color: "#94a3b8" }}>Fee</th>
                )}
                {item.products[0]?.bonus && (
                  <th className="text-left py-3 pr-4 font-bold" style={{ color: "#94a3b8" }}>Bonus</th>
                )}
                <th className="text-left py-3 font-bold" style={{ color: "#94a3b8" }}>Highlight</th>
              </tr>
            </thead>
            <tbody>
              {item.products.map((p, i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    background: i === 0 ? "rgba(168,85,247,0.05)" : "transparent",
                  }}
                >
                  <td className="py-3 pr-4 font-semibold">
                    {i === 0 && <span style={{ color: "#a855f7" }}>🏆 </span>}
                    {p.name}
                  </td>
                  <td className="py-3 pr-4 font-bold" style={{ color: "#a855f7" }}>
                    {p.score}/10
                  </td>
                  {item.products[0]?.apy && (
                    <td className="py-3 pr-4" style={{ color: "#e2e8f0" }}>{p.apy ?? "—"}</td>
                  )}
                  {item.products[0]?.fee !== undefined && (
                    <td className="py-3 pr-4" style={{ color: "#e2e8f0" }}>{p.fee ?? "—"}</td>
                  )}
                  {item.products[0]?.bonus && (
                    <td className="py-3 pr-4" style={{ color: "#e2e8f0" }}>{p.bonus ?? "—"}</td>
                  )}
                  <td className="py-3" style={{ color: "#64748b" }}>{p.highlight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pros / Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card">
            <h3 className="font-bold mb-4" style={{ color: "#4ade80" }}>✓ Pros</h3>
            <ul className="space-y-2">
              {item.pros.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#94a3b8" }}>
                  <span style={{ color: "#4ade80" }}>+</span> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3 className="font-bold mb-4" style={{ color: "#f87171" }}>✗ Cons</h3>
            <ul className="space-y-2">
              {item.cons.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#94a3b8" }}>
                  <span style={{ color: "#f87171" }}>−</span> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <a
          href={item.winnerUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="btn-primary w-full text-center block mb-12"
        >
          Open {item.winner} →
        </a>

        {/* FAQ */}
        <h2 className="text-2xl font-black mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-16">
          {item.faqs.map((faq, i) => (
            <div key={i} className="card">
              <h3 className="font-bold mb-2">{faq.q}</h3>
              <p className="text-sm" style={{ color: "#94a3b8" }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="border-t pt-8 text-xs text-center"
          style={{ borderColor: "rgba(255,255,255,0.06)", color: "#475569" }}
        >
          Independent financial comparisons. Not financial advice. Updated March 2026.
        </div>
      </div>
    </main>
  );
}
