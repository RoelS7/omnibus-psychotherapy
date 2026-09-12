import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omnibus — Persoonlijke Groei & Psychotherapie",
  description: "Praktijk voor persoonlijke groei en psychotherapie met Jeroen Dekker in Tongeren-Borgloon. Brainspotting, cliëntgerichte therapie en intervisie.",
  keywords: ["psychotherapie", "persoonlijke groei", "psycholoog", "Brainspotting", "Tongeren", "Borgloon"],
  authors: [{ name: "Jeroen Dekker" }],
  openGraph: {
    title: "Omnibus — Persoonlijke Groei & Psychotherapie",
    description: "Praktijk voor persoonlijke groei en psychotherapie",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
