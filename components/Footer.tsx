"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const links = [
  { emoji: "💼", label: "LinkedIn",  handle: "hanna-mel-62406b267",  href: "https://www.linkedin.com/in/hanna-mel-62406b267/" },
  { emoji: "✉️", label: "E-mail",    handle: "hannamell26@gmail.com", href: "mailto:hannamell26@gmail.com" },
  { emoji: "💬", label: "WhatsApp",  handle: "(11) 93303-7658",       href: "https://wa.me/5511933037658" },
];

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer id="contato" ref={ref} className="border-t border-[#E8E0D8] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* ── Headline ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-[#D4A3A3]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#9A8F88]">Contato</span>
            </div>

            <h2 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl text-[#2D2D2D] leading-[1.1]">
              Vamos construir<br />
              conversas{" "}
              <span className="text-[#D4A3A3]">relevantes</span>
              <br />juntas?
            </h2>

            <p className="text-sm text-[#9A8F88] leading-relaxed max-w-xs">
              Disponível para estágios, projetos freelance e oportunidades em{" "}
              <span className="font-semibold text-[#2D2D2D]">
                Social Media, Marketing Digital e Comunicação Estratégica
              </span>.
            </p>

            {/* Badge disponível */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5
                            bg-[#F5F1EB] border border-[#E8E0D8] rounded-full w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7BC67E] animate-pulse" />
              <span className="text-xs text-[#2D2D2D]">Disponível · São Paulo - SP</span>
            </div>

            {/* CTA de e-mail com feedback tátil completo */}
            <a
              href="https://wa.me/5511933037658"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start px-6 py-3 text-sm font-semibold bg-[#D4A3A3] text-white rounded-full
                         hover:bg-[#C09090] hover:shadow-[0_8px_30px_rgba(212,163,163,0.4)]
                         active:scale-95 active:shadow-none
                         transition-all duration-300 ease-in-out"
            >
              Enviar mensagem →
            </a>
          </motion.div>

          {/* ── Links de contato ── */}
          <div className="flex flex-col gap-2">
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                /*
                  Hover:
                  - -translate-y-1  → leve elevação
                  - shadow-md       → sombra de profundidade
                  - border rosé     → indicador de acento ativo
                  Active:
                  - scale-[0.98]    → compressão tátil ao clicar
                */
                className="group flex items-center gap-4 px-5 py-4
                           border border-[#E8E0D8] rounded-xl
                           bg-[#F4EFE6] hover:bg-[#F5E6E6]/40
                           hover:border-[#D4A3A3] hover:-translate-y-1
                           hover:shadow-[0_8px_24px_rgba(45,45,45,0.08)]
                           active:scale-[0.98] active:translate-y-0 active:shadow-none
                           transition-all duration-300 ease-in-out"
              >
                <span className="text-xl">{l.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] tracking-widest uppercase text-[#9A8F88]">{l.label}</p>
                  <p className="text-sm text-[#2D2D2D] group-hover:text-[#D4A3A3]
                                transition-colors duration-300 font-medium truncate">
                    {l.handle}
                  </p>
                </div>
                <span className="text-[#E8E0D8] group-hover:text-[#D4A3A3]
                                 group-hover:translate-x-1
                                 transition-all duration-300 ease-in-out">
                  →
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-16 pt-6 border-t border-[#E8E0D8]
                     flex flex-col sm:flex-row justify-between gap-2
                     text-[10px] tracking-widest uppercase text-[#9A8F88]"
        >
          <p>© {new Date().getFullYear()} Hanna Mel da Silva</p>
          <p>São Paulo · SP · Brasil</p>
        </motion.div>
      </div>
    </footer>
  );
}
