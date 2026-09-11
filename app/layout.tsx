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
      <body className="relative">

        {/* ── Marca d'água diagonal "CAIQUE MARTINS" ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
        >
          <div
            style={{
              position: "absolute",
              width: "300%",
              height: "300%",
              top: "-100%",
              left: "-100%",
              transform: "rotate(-35deg)",
              display: "flex",
              flexDirection: "column",
              gap: "48px",
            }}
          >
            {Array.from({ length: 14 }).map((_, row) => (
              <div
                key={row}
                style={{
                  display: "flex",
                  gap: "80px",
                  whiteSpace: "nowrap",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "rgba(45,45,45,0.055)",
                  userSelect: "none",
                }}
              >
                {Array.from({ length: 8 }).map((_, col) => (
                  <span key={col}>CAIQUE MARTINS</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── Conteúdo principal ── */}
        <div className="relative z-10">{children}</div>

        {/* ── Badge "Built by Caique Martins" ── */}
        <a
          href="https://www.linkedin.com/in/caiquealmeidati/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Built by Caique Martins"
          className="
            fixed bottom-5 left-5 z-[9000]
            flex items-center gap-2
            px-4 py-2.5
            rounded-full
            text-[11px] font-medium tracking-wide text-[#E4DAC4]
            bg-[#2D2D2D]/90 backdrop-blur-md
            shadow-[0_8px_24px_rgba(0,0,0,0.25)]
            border border-white/5
            transition-all duration-300 ease-out
            hover:bg-[#D4A3A3]/90 hover:-translate-y-1
            hover:shadow-[0_12px_32px_rgba(212,163,163,0.3)]
            active:scale-95
          "
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A3A3] animate-pulse" />
          <span>&lt;/&gt; Built by <strong>Caique Martins</strong></span>
        </a>

      </body>
    </html>
  );
}
