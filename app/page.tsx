import { comparisons } from "@/data/comparisons";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#0f0f0f" }}>
      {/* NAV */}
      <nav
        className="sticky top-0 z-50 px-4 md:px-8 lg:px-16 h-16 flex items-center justify-between border-b"
        style={{
          background: "rgba(15,15,15,0.95)",
          backdropFilter: "blur(20px)",
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        <span className="font-black text-xl">
          Finance<span className="gradient-text">Edge</span>
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "#94a3b8" }}>
          <a href="/calculator" className="hover:text-white transition-colors">
            Calculator
          </a>
          <a href="#picks" className="hover:text-white transition-colors">
            Top Picks
          </a>
          <a href="#picks" className="btn-primary text-sm py-2 px-4">
            Get Started
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-4 md:px-8 lg:px-16 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6"
            style={{
              background: "rgba(168,85,247,0.1)",
              border: "1px solid rgba(168,85,247,0.2)",
              color: "#a855f7",
            }}
          >
            ✦ Updated March 2026
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-none tracking-tight mb-6">
            The Best
            <br />
            <span className="gradient-text">Financial</span>
            <br />
            Products.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl" style={{ color: "#94a3b8" }}>
            We analyzed 200+ financial products so you don&apos;t have to. Independent reviews, real
            data, no BS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#picks" className="btn-primary text-center">
              See Top Picks →
            </a>
            <a href="/calculator" className="btn-secondary text-center">
              Compound Calculator
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="px-4 md:px-8 lg:px-16 py-6 border-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { n: "200+", l: "Products Reviewed" },
            { n: "$10k", l: "Avg signup bonus tracked" },
            { n: "50+", l: "Comparison guides" },
            { n: "2026", l: "Updated data" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-black gradient-text">{s.n}</div>
              <div className="text-xs mt-1" style={{ color: "#64748b" }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TOP PICKS */}
      <section id="picks" className="px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#a855f7" }}>
          Top Comparisons
        </p>
        <h2 className="text-3xl md:text-5xl font-black mb-12">
          Our Best <span className="gradient-text">Picks</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.slice(0, 6).map((c, i) => (
            <a key={i} href={`/${c.slug}`} className="card block group" style={{ textDecoration: "none" }}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#a855f7" }}>
                {c.category}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#ffffff" }}>
                {c.title}
              </h3>
              <div className="text-sm mb-4" style={{ color: "#64748b" }}>
                Winner: <span style={{ color: "#e2e8f0" }}>{c.winner}</span>
              </div>
              <div className="text-xs font-semibold" style={{ color: "#a855f7" }}>
                Read Review →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ALL COMPARISONS */}
      <section className="px-4 md:px-8 lg:px-16 py-8 pb-16 md:pb-24">
        <h2 className="text-2xl md:text-4xl font-black mb-8">
          All <span className="gradient-text">Comparisons</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {comparisons.slice(6).map((c, i) => (
            <a key={i} href={`/${c.slug}`} className="card block group" style={{ textDecoration: "none" }}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#a855f7" }}>
                {c.category}
              </div>
              <h3 className="text-base font-bold mb-1" style={{ color: "#ffffff" }}>
                {c.title}
              </h3>
              <div className="text-xs" style={{ color: "#64748b" }}>
                Winner: <span style={{ color: "#94a3b8" }}>{c.winner}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        className="px-4 md:px-8 lg:px-16 py-16 md:py-24 border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <h2 className="text-3xl md:text-5xl font-black mb-12">
          How We <span className="gradient-text">Review</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              n: "01",
              t: "Independent Research",
              d: "We test every product ourselves. No sponsored content, no paid rankings.",
            },
            {
              n: "02",
              t: "Real Data",
              d: "APY rates, fees, and bonuses updated monthly from official sources.",
            },
            {
              n: "03",
              t: "Clear Verdict",
              d: "One winner, clear reasoning. No endless 'it depends' non-answers.",
            },
          ].map((s, i) => (
            <div key={i}>
              <div
                className="text-6xl font-black mb-4"
                style={{ color: "rgba(168,85,247,0.2)" }}
              >
                {s.n}
              </div>
              <h3 className="text-xl font-bold mb-2">{s.t}</h3>
              <p style={{ color: "#64748b" }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div
          className="rounded-2xl p-8 md:p-16 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(123,94,167,0.1))",
            border: "1px solid rgba(168,85,247,0.2)",
          }}
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Ready to <span className="gradient-text">Invest Better?</span>
          </h2>
          <p className="mb-8 text-lg" style={{ color: "#94a3b8" }}>
            Find the best broker for your profile in 2 minutes.
          </p>
          <a href="#picks" className="btn-primary">
            Start Comparing →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-4 md:px-8 lg:px-16 py-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <span className="font-black">
          Finance<span className="gradient-text">Edge</span>
        </span>
        <p className="text-xs text-center" style={{ color: "#475569" }}>
          Independent financial comparisons. Not financial advice. Updated March 2026.
        </p>
      </footer>
    </main>
  );
}
