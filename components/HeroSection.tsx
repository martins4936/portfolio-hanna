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

      {/* ── Título Centralizado ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center mb-12"
      >
        <h1 className="font-[family-name:var(--font-display)] font-bold text-5xl md:text-7xl lg:text-8xl text-[#2D2D2D] leading-tight tracking-tight mb-4">
          Hanna Mel
        </h1>
        <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#9A8F88] font-medium">
          PUBLICIDADE E PROPAGANDA
        </p>
      </motion.div>

      {/* ── Container da Foto + Rabiscos SVG ───────────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative z-50 w-full max-w-3xl mx-auto flex justify-center mb-16"
      >
        {/* Estrela (Canto superior esquerdo) */}
        <motion.svg
          animate={{ rotate: 10, y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 left-10 md:left-24 w-12 h-12 md:w-16 md:h-16 text-[#D4A3A3]"
          viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 10 Q55 35 80 40 Q55 45 50 70 Q45 45 20 40 Q45 35 50 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>

        {/* Seta com loop (Canto direito médio) */}
        <motion.svg
          animate={{ rotate: -5, y: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-32 -right-4 md:right-12 w-16 h-16 md:w-24 md:h-24 text-[#D4A3A3]"
          viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 20 C 40 -10, 80 30, 40 40 C 10 50, 30 80, 70 90 M60 80 L70 90 L60 100" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>

        {/* Assinatura / Rabisco (Canto inferior esquerdo) */}
        <motion.svg
          animate={{ rotate: 5, x: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -bottom-8 -left-4 md:left-16 w-24 h-24 md:w-32 md:h-32 text-[#D4A3A3]"
          viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 70 C 40 20, 80 100, 100 50 C 110 20, 130 80, 140 60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>

        <ProfilePhoto />
      </motion.div>

      {/* ── Bio e CTA ────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-8 text-center mb-10"
      >
        <p className="text-sm md:text-base text-[#7A716C] leading-relaxed">
          Estudante de{" "}
          <span className="font-semibold text-[#2D2D2D]">Publicidade & Propaganda</span>{" "}
          e Técnica em Design de Interiores. Atuo como Social Media freelance,
          criando conteúdo estratégico, gerenciando comunidades e construindo{" "}
          <span className="text-[#D4A3A3] font-semibold italic">narrativas de marca autênticas</span>{" "}
          no ecossistema digital.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/5511933037658"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm font-semibold bg-[#D4A3A3] text-white rounded-full
                       hover:bg-[#C09090] hover:shadow-[0_8px_30px_rgba(212,163,163,0.4)]
                       active:scale-95 active:shadow-none
                       transition-all duration-300 ease-in-out"
          >
            Entrar em contato
          </a>
          <a
            href="https://www.linkedin.com/in/hanna-mel-62406b267/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm font-semibold bg-white/60 backdrop-blur-md border border-white/80 text-[#2D2D2D] rounded-full
                       hover:border-[#D4A3A3] hover:text-[#D4A3A3] hover:bg-white
                       active:scale-95 transition-all duration-300 ease-in-out"
          >
            LinkedIn ↗
          </a>
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
