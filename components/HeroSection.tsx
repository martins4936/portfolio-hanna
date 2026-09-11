"use client";

import { motion } from "framer-motion";
import ProfilePhoto from "@/components/ProfilePhoto";

export default function HeroSection() {
  return (
    <section id="inicio" className="pt-32 pb-16 max-w-6xl mx-auto px-6">

      {/* ── Card de apresentação pessoal ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col sm:flex-row items-center sm:items-stretch gap-6 p-6 md:p-8
                   bg-[#F5F1EB] border border-[#E8E0D8] rounded-3xl mb-20
                   transition-shadow duration-500 ease-out
                   hover:shadow-[0_20px_60px_rgba(45,45,45,0.08)]"
      >
        {/* Foto + badge + painel admin secreto (Shift+Alt+H) */}
        <ProfilePhoto />

        {/* Divisor vertical */}
        <div className="hidden sm:block w-px bg-[#E8E0D8] self-stretch mx-2" />

        {/* Texto */}
        <div className="flex flex-col justify-center gap-3 text-center sm:text-left">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#9A8F88] font-medium mb-1">
              📍 São Paulo - SP
            </p>
            <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl md:text-3xl text-[#2D2D2D] leading-tight">
              Hanna Mel da Silva
            </h2>
          </div>

          <p className="text-sm text-[#9A8F88] leading-relaxed max-w-lg">
            Estudante de{" "}
            <span className="font-semibold text-[#2D2D2D]">Publicidade & Propaganda</span>{" "}
            e Técnica em Design de Interiores. Atuo como Social Media freelance,
            criando conteúdo estratégico, gerenciando comunidades e construindo{" "}
            <span className="text-[#D4A3A3] font-semibold">narrativas de marca autênticas</span>{" "}
            no ecossistema digital.
          </p>

          {/* Skill chips */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-1.5">
            {[
              "Relações Públicas", "Social Media",
              "Copywriting",       "Canva",
              "Power BI",          "Google Workspace",
            ].map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 text-[10px] font-medium text-[#C09090]
                           bg-[#F5E6E6] border border-[#E8C8C8] rounded-full
                           hover:bg-[#D4A3A3] hover:text-white hover:border-[#D4A3A3]
                           cursor-default transition-all duration-300 ease-in-out"
              >
                {s}
              </span>
            ))}
          </div>

          {/* CTAs com feedback tátil */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-1">
            <a
              href="mailto:hannamell26@gmail.com"
              className="px-4 py-2 text-xs font-semibold bg-[#D4A3A3] text-white rounded-full
                         hover:bg-[#C09090] hover:shadow-[0_4px_20px_rgba(212,163,163,0.4)]
                         active:scale-95 transition-all duration-300 ease-in-out"
            >
              Entrar em contato
            </a>
            <a
              href="https://www.linkedin.com/in/hanna-mel-62406b267/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold border border-[#E8E0D8] text-[#2D2D2D] rounded-full
                         hover:border-[#D4A3A3] hover:text-[#D4A3A3]
                         active:scale-95 transition-all duration-300 ease-in-out"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </motion.div>

      {/* ── Label + Título "Portfólio" ────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="flex flex-col items-center gap-5 text-center"
      >
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-[#D4A3A3]" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#9A8F88] font-medium">
            Trabalhos Selecionados
          </span>
          <span className="w-8 h-px bg-[#D4A3A3]" />
        </div>

        <h1 className="font-[family-name:var(--font-display)] font-bold text-6xl md:text-8xl text-[#2D2D2D] leading-none tracking-tight">
          Portfólio
        </h1>

        <p className="text-sm text-[#9A8F88] leading-relaxed max-w-xs">
          Uma seleção dos projetos mais recentes e relevantes.
        </p>
      </motion.div>
    </section>
  );
}
