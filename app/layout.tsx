import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FinanceEdge — Best Financial Products 2026",
  description: "Independent reviews and comparisons of the best financial products. Brokers, savings accounts, credit cards, ETFs, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
