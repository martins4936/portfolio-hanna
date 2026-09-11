"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * BackToTop
 * ─────────
 * Botão flutuante fixado no canto inferior direito.
 * Aparece apenas após 300px de scroll (mantém a UI inicial limpa).
 * Retorna ao topo com scroll suave nativo.
 * Paleta: acento rosé (#D4A3A3) + sombra colorida no hover.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Monitora a rolagem da página via useEffect
  useEffect(() => {
    const handleScroll = () => {
      // Aparece somente após 300px — threshold ideal para não poluir a UI inicial
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          // Entrada: cresce a partir de 80% + sobe 10px
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          // Saída: encolhe e desce
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          className="
            fixed bottom-8 right-8 z-50
            w-11 h-11 rounded-full
            bg-[#D4A3A3] text-white
            flex items-center justify-center
            shadow-[0_4px_20px_rgba(212,163,163,0.35)]
            hover:bg-[#C09090]
            hover:shadow-[0_8px_30px_rgba(212,163,163,0.5)]
            hover:-translate-y-1
            active:scale-95 active:translate-y-0 active:shadow-none
            transition-all duration-300 ease-in-out
          "
        >
          {/* Seta para cima */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
