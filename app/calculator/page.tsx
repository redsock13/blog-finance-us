"use client";
import { useState } from "react";

export default function Calculator() {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(20);
  const [monthly, setMonthly] = useState(200);

  const result = (() => {
    let total = principal;
    for (let y = 0; y < years; y++) {
      total = total * (1 + rate / 100) + monthly * 12;
    }
    return Math.round(total);
  })();

  const totalContributed = principal + monthly * 12 * years;
  const interest = result - totalContributed;

  return (
    <main className="min-h-screen px-4 md:px-8 lg:px-16 py-8" style={{ background: "#0f0f0f" }}>
      <div className="max-w-2xl mx-auto">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-8"
          style={{ color: "#a855f7", textDecoration: "none" }}
        >
          ← Back
        </a>

        <h1 className="text-3xl md:text-5xl font-black mb-2">
          Compound <span className="gradient-text">Calculator</span>
        </h1>
        <p className="mb-8" style={{ color: "#64748b" }}>
          See how your investments grow over time with compound interest.
        </p>

        <div className="card mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#94a3b8" }}>
                Initial Investment ($)
              </label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl text-white font-semibold outline-none"
                style={{
                  background: "#111",
                  border: "1px solid rgba(255,255,255,0.1)",
                  fontSize: "16px",
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#94a3b8" }}>
                Annual Return (%)
              </label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                step="0.1"
                className="w-full px-4 py-3 rounded-xl text-white font-semibold outline-none"
                style={{
                  background: "#111",
                  border: "1px solid rgba(255,255,255,0.1)",
                  fontSize: "16px",
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#94a3b8" }}>
                Years
              </label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl text-white font-semibold outline-none"
                style={{
                  background: "#111",
                  border: "1px solid rgba(255,255,255,0.1)",
                  fontSize: "16px",
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "#94a3b8" }}>
                Monthly Contribution ($)
              </label>
              <input
                type="number"
                value={monthly}
                onChange={(e) => setMonthly(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl text-white font-semibold outline-none"
                style={{
                  background: "#111",
                  border: "1px solid rgba(255,255,255,0.1)",
                  fontSize: "16px",
                }}
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div
          className="rounded-2xl p-8 mb-8 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(123,94,167,0.1))",
            border: "1px solid rgba(168,85,247,0.3)",
          }}
        >
          <p className="text-sm font-semibold mb-2" style={{ color: "#a855f7" }}>
            After {years} years
          </p>
          <div className="text-5xl md:text-6xl font-black gradient-text mb-2">
            ${result.toLocaleString()}
          </div>
          <p className="text-sm" style={{ color: "#64748b" }}>
            Total value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="card text-center">
            <div className="text-2xl font-black mb-1">${totalContributed.toLocaleString()}</div>
            <div className="text-sm" style={{ color: "#64748b" }}>
              Total contributed
            </div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-black mb-1 gradient-text">
              ${interest.toLocaleString()}
            </div>
            <div className="text-sm" style={{ color: "#64748b" }}>
              Interest earned
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="font-bold mb-4">Start investing today with our top picks</h2>
          <a href="/" className="btn-primary w-full text-center block">
            See Best Brokers →
          </a>
        </div>
      </div>
    </main>
  );
}
