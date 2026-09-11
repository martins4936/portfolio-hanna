"use client";

import { motion } from "framer-motion";

const highlights = [
  { emoji: "📢", label: "RP & Mídia", sub: "Relações Públicas" },
  { emoji: "🤖", label: "IA Generativa", sub: "Gemini · Claude" },
  { emoji: "🎨", label: "Design", sub: "Moodboard & Visual" },
  { emoji: "🎬", label: "Produção", sub: "Reels & Eventos" },
  { emoji: "📊", label: "Analytics", sub: "Tendências & BI" },
  { emoji: "✍️", label: "Copy", sub: "Legenda & Roteiro" },
];

const stats = [
  { value: "2+", label: "marcas atendidas" },
  { value: "AI-First", label: "mentalidade" },
  { value: "SP", label: "São Paulo" },
];

export default function ProfileSection() {
  return (
    <section id="perfil" className="pt-24 pb-0 max-w-5xl mx-auto px-6">

      {/* ── Profile card ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center md:items-start gap-8 py-10 border-b border-[#E8E0D8]"
      >
        {/* Avatar com anel rosé estilo story */}
        <div className="relative shrink-0">
          <div
            className="w-28 h-28 md:w-36 md:h-36 rounded-full p-[3px]"
            style={{ background: "linear-gradient(135deg, #D4A3A3, #c8848490)" }}
          >
            <div className="w-full h-full rounded-full bg-[#EDE7DF] flex items-center justify-center overflow-hidden border-2 border-[#FDFBF7]">
              {/* Substitua por <Image src="/hanna.jpg" .../> quando tiver foto */}
              <span className="font-[family-name:var(--font-display)] font-bold text-3xl text-[#D4A3A3] select-none">
                HM
              </span>
            </div>
          </div>
          {/* Disponível */}
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-[#7BC67E] rounded-full border-2 border-[#FDFBF7]" />
        </div>

        {/* Info ──────────────────────────────────────── */}
        <div className="flex-1 flex flex-col gap-5 text-center md:text-left">

          {/* Handle + nome */}
          <div>
            <p className="text-[#9A8F88] text-sm font-medium mb-0.5">@hannamell</p>
            <h1 className="font-[family-name:var(--font-display)] font-bold text-2xl md:text-3xl text-[#2D2D2D]">
              Hanna Mel da Silva
            </h1>
            {/* Localização */}
            <p className="text-xs text-[#9A8F88] mt-1 flex items-center justify-center md:justify-start gap-1">
              <span>📍</span> São Paulo - SP
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center md:items-start">
                <span className="font-[family-name:var(--font-display)] font-bold text-xl text-[#2D2D2D]">
                  {s.value}
                </span>
                <span className="text-[10px] text-[#9A8F88] leading-tight">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-1.5 text-sm text-[#2D2D2D] leading-relaxed max-w-md">
            <p>
              <span className="font-semibold">Publicidade & Propaganda</span> ·{" "}
              Anhanguera{" "}
              <span className="text-[#9A8F88] text-xs">(em curso)</span>
            </p>
            <p>
              <span className="font-semibold">Técnico em Design de Interiores</span> ·{" "}
              ETEC Albert Einstein{" "}
              <span className="text-[#9A8F88] text-xs">(Concluído Jul/2025)</span>
            </p>
            <p className="text-[#9A8F88] mt-1">
              Construindo conversas relevantes e conexões de impacto.
              Mentalidade{" "}
              <span className="text-[#D4A3A3] font-semibold">AI-First</span>{" "}
              aplicada à comunicação estratégica e reputação de marca.
            </p>
          </div>

          {/* Skill chips rápidas */}
          <div className="flex flex-wrap justify-center md:justify-start gap-1.5">
            {["Relações Públicas", "Social Media", "IA Generativa", "Canva", "Copywriting", "Power BI"].map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 text-[10px] font-medium bg-[#F5E6E6] text-[#C09090] rounded-full"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Botões de ação */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1">
            <a
              href="mailto:hannamell26@gmail.com"
              className="px-5 py-2 text-sm font-semibold bg-[#D4A3A3] text-white rounded-lg hover:bg-[#C09090] transition-colors"
            >
              Mensagem
            </a>
            <a
              href="https://www.linkedin.com/in/hanna-mel-62406b267/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-semibold bg-[#F5F1EB] text-[#2D2D2D] border border-[#E8E0D8] rounded-lg hover:bg-[#EDE7DF] transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="tel:+5511933037658"
              className="px-5 py-2 text-sm font-semibold bg-[#F5F1EB] text-[#2D2D2D] border border-[#E8E0D8] rounded-lg hover:bg-[#EDE7DF] transition-colors"
            >
              (11) 93303-7658
            </a>
          </div>
        </div>
      </motion.div>

      {/* ── Story Highlights ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex gap-6 py-6 overflow-x-auto border-b border-[#E8E0D8]"
        style={{ scrollbarWidth: "none" }}
      >
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.07 }}
            className="flex flex-col items-center gap-2 cursor-pointer group shrink-0"
          >
            <div className="w-16 h-16 rounded-full border-2 border-[#E8E0D8] group-hover:border-[#D4A3A3] transition-colors bg-[#F5F1EB] flex items-center justify-center text-2xl">
              {h.emoji}
            </div>
            <span className="text-[10px] text-[#9A8F88] font-medium text-center leading-tight group-hover:text-[#D4A3A3] transition-colors w-16">
              {h.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
