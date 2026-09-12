import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omnibus — Persoonlijke Groei & Psychotherapie",
  description: "Praktijk voor persoonlijke groei en psychotherapie met Jeroen Dekker in Tongeren-Borgloon. Brainspotting, cliëntgerichte therapie en intervisie.",
  keywords: ["psychotherapie", "persoonlijke groei", "psycholoog", "Brainspotting"],
  authors: [{ name: "Jeroen Dekker" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
