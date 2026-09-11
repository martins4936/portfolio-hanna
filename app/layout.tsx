import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

// Fonte de display: Playfair Display — Alta Costura / Publicidade Clássica
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Fonte de corpo: Lato — humanista, calorosa e legível
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hanna Mel · Social Media & Marketing",
  description:
    "Portfólio de Hanna Mel — Social Media, Relações Públicas e Comunicação Estratégica. São Paulo - SP.",
  openGraph: {
    title: "Hanna Mel · Social Media & Marketing",
    description:
      "Construindo conversas relevantes e conexões de impacto. São Paulo - SP.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfairDisplay.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
