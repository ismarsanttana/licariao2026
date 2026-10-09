import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Single Modern Font
import { createPageMetadata, siteUrl } from "@/lib/metadata";
import "./globals.css";

// Unified Font - Outfit for everything (Headings & Body)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  ...createPageMetadata({
    title: "Hebert Licarião - Assessoria em Transparência Pública e Horus",
    description:
      "Assessoria em Transparência Pública especializada para Órgãos Públicos e Software Horus.",
    path: "/",
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
