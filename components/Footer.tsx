"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer id="contato" ref={ref} className="bg-[#2D2D2D] py-24 sm:py-32 rounded-t-[40px] md:rounded-t-[3rem] relative overflow-hidden mt-12">
      
      {/* Background Aura (brilho rosado sutil no fundo) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4A3A3]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#D4A3A3]" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#E4DAC4]/60">Contato</span>
        </motion.div>

        {/* Headline GIGANTE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-[family-name:var(--font-display)] text-5xl sm:text-7xl md:text-[5rem] text-[#E4DAC4] leading-[1.05] mb-8 tracking-tight"
        >
          A narrativa <br className="hidden sm:block" />
          <span className="text-[#D4A3A3] italic font-serif">certa</span> espera por nós.
        </motion.h2>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm sm:text-base text-[#E4DAC4]/70 max-w-lg mb-12 leading-relaxed"
        >
          Disponível para estágios, projetos freelance e novas oportunidades em <span className="text-[#E4DAC4] font-semibold">Comunicação, Marketing e Criação</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-24 w-full sm:w-auto"
        >
          <a
            href="https://wa.me/5511933037658"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#D4A3A3] text-white rounded-full font-bold text-sm hover:scale-105 hover:bg-[#C09090] transition-all duration-300 shadow-[0_0_30px_rgba(212,163,163,0.25)] active:scale-95"
          >
            Falar no WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/hanna-mel-62406b267/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#E4DAC4]/30 text-[#E4DAC4] rounded-full font-bold text-sm hover:bg-[#E4DAC4] hover:text-[#2D2D2D] transition-all duration-300 active:scale-95"
          >
            LinkedIn ↗
          </a>
          <a
            href="mailto:hannamell26@gmail.com"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#E4DAC4]/30 text-[#E4DAC4] rounded-full font-bold text-sm hover:bg-[#E4DAC4] hover:text-[#2D2D2D] transition-all duration-300 active:scale-95"
          >
            E-mail ↗
          </a>
        </motion.div>

        {/* Bottom Bar minimalista */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="w-full pt-8 border-t border-[#E4DAC4]/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] tracking-widest uppercase text-[#E4DAC4]/40"
        >
          <p>© {new Date().getFullYear()} Hanna Mel</p>
          <a
            href="https://github.com/martins4936"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#D4A3A3] transition-colors duration-300 group"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:opacity-100 transition-opacity">
              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
            </svg>
            Design &amp; Dev — Caique Martins
          </a>
          <p>São Paulo · SP · Brasil</p>
        </motion.div>
      </div>
    </footer>
  );
}
