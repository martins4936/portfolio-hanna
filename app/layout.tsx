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

        {/* ── Terminal Badge "Built by Caique Martins" ── */}
        <style>{`
          @keyframes terminal-blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .terminal-cursor {
            display: inline-block;
            width: 7px;
            height: 12px;
            background: #D4A3A3;
            margin-left: 3px;
            vertical-align: middle;
            animation: terminal-blink 1s step-end infinite;
          }
          .terminal-badge-wrap {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .terminal-badge-wrap:hover {
            transform: translateY(-3px);
            box-shadow: 0 16px 40px rgba(0,0,0,0.35) !important;
          }
        `}</style>
        <a
          href="https://www.linkedin.com/in/caiquealmeidati/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Built by Caique Martins"
          className="terminal-badge-wrap fixed bottom-5 left-5 z-[9000] block"
          style={{
            background: "#1A1A1A",
            borderRadius: "10px",
            padding: "10px 14px",
            border: "1px solid #333",
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            minWidth: "200px",
            textDecoration: "none",
          }}
        >
          {/* Dots */}
          <div style={{ display: "flex", gap: "5px", marginBottom: "8px" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF5F57", display: "block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFBD2E", display: "block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#28CA41", display: "block" }} />
          </div>
          {/* Line 1 */}
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: "11px", display: "flex", gap: "5px", alignItems: "center" }}>
            <span style={{ color: "#4EC9B0" }}>dev</span>
            <span style={{ color: "#555" }}>@</span>
            <span style={{ color: "#D4D4D4" }}>portfolio</span>
            <span style={{ color: "#555" }}>~$</span>
          </div>
          {/* Line 2 */}
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: "11px", display: "flex", alignItems: "center", marginTop: "3px" }}>
            <span style={{ color: "#9A8F88" }}>built by&nbsp;</span>
            <span style={{ color: "#D4A3A3", fontWeight: 600 }}>Caique Martins</span>
            <span className="terminal-cursor" />
          </div>
        </a>

      </body>
    </html>
  );
}
