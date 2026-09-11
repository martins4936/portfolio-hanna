"use client";

import { motion } from "framer-motion";
import ProfilePhoto from "@/components/ProfilePhoto";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative pt-32 pb-16 max-w-6xl mx-auto px-6 overflow-hidden sm:overflow-visible">
      
      {/* ── Background Auras (Ambiente Premium) ── */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -40, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-20 w-[400px] h-[400px] bg-[#D4A3A3]/10 blur-[80px] rounded-full pointer-events-none -z-10"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#E8C8C8]/20 blur-[100px] rounded-full pointer-events-none -z-10"
      />

      {/* ── Card de apresentação pessoal ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col sm:flex-row items-center sm:items-stretch gap-6 
                   p-6 md:p-8 mb-24 max-w-4xl mx-auto rounded-[2.5rem]
                   bg-white/40 backdrop-blur-md border border-white/60
                   shadow-[0_8px_32px_rgba(212,163,163,0.08)]"
      >
        {/* Foto + badge + painel admin secreto (Shift+Alt+H) */}
        <ProfilePhoto />

        {/* Divisor vertical */}
        <div className="hidden sm:block w-px bg-gradient-to-b from-transparent via-[#E8E0D8] to-transparent self-stretch mx-2" />

        {/* Texto */}
        <div className="flex flex-col justify-center gap-4 text-center sm:text-left z-10">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#9A8F88] font-medium mb-1.5">
              📍 São Paulo - SP
            </p>
            <h2 className="font-[family-name:var(--font-display)] font-bold text-3xl md:text-4xl text-[#2D2D2D] leading-tight tracking-tight">
              Hanna Mel da Silva
            </h2>
          </div>

          <p className="text-sm text-[#7A716C] leading-relaxed max-w-lg">
            Estudante de{" "}
            <span className="font-semibold text-[#2D2D2D]">Publicidade & Propaganda</span>{" "}
            e Técnica em Design de Interiores. Atuo como Social Media freelance,
            criando conteúdo estratégico, gerenciando comunidades e construindo{" "}
            <span className="text-[#D4A3A3] font-semibold italic">narrativas de marca autênticas</span>{" "}
            no ecossistema digital.
          </p>

          {/* Skill chips (Premium feel) */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-2">
            {[
              "Relações Públicas", "Social Media",
              "Copywriting",       "Canva",
              "Power BI",          "Google Workspace",
            ].map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 text-[10px] font-medium text-[#B07070]
                           bg-white/60 backdrop-blur-sm border border-white/80 rounded-full
                           hover:bg-[#D4A3A3] hover:text-white hover:border-[#D4A3A3] hover:shadow-[0_4px_12px_rgba(212,163,163,0.3)]
                           cursor-default transition-all duration-300 ease-in-out"
              >
                {s}
              </span>
            ))}
          </div>

          {/* CTAs com feedback tátil */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-1">
            <a
              href="https://wa.me/5511933037658"
              target="_blank"
              rel="noopener noreferrer"
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
