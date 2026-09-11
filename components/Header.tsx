"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Navega para a seção via âncora nativa com offset compensado pelo CSS scroll-margin-top
  const go = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#E4DAC4]/90 backdrop-blur-lg border-b border-[#E8E0D8] shadow-[0_1px_20px_rgba(45,45,45,0.06)]"
          : "bg-[#E4DAC4]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* ── Logo ── */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-[family-name:var(--font-display)] font-bold text-sm tracking-[0.15em] text-[#2D2D2D] uppercase
                     hover:text-[#D4A3A3] active:scale-95
                     transition-all duration-300 ease-in-out"
        >
          HANNA<span className="text-[#D4A3A3]">.</span>
        </button>

        {/* ── Nav centrada (desktop) ── */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => go(link.href)}
              className="relative text-xs tracking-widest uppercase text-[#9A8F88]
                         hover:text-[#2D2D2D] active:scale-95
                         transition-all duration-300 ease-in-out group"
            >
              {link.label}
              {/* Sublinhado animado no hover */}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#D4A3A3]
                               group-hover:w-full transition-all duration-300 ease-out" />
            </button>
          ))}
        </nav>

        {/* ── CTA "Vamos Conversar" (desktop) ── */}
        <button
          onClick={() => go("#contato")}
          className="hidden md:block text-xs tracking-widest uppercase font-semibold
                     text-[#D4A3A3] hover:text-[#2D2D2D] active:scale-95
                     transition-all duration-300 ease-in-out"
        >
          Vamos Conversar
        </button>

        {/* ── Hamburger (mobile) ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="md:hidden flex flex-col gap-1.5 p-1 active:scale-90 transition-transform duration-200"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-px bg-[#2D2D2D] transition-all duration-300 ${
                i === 0 ? `w-5 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}` :
                i === 1 ? `w-5 ${menuOpen ? "opacity-0 scale-x-0" : ""}` :
                `w-3 ${menuOpen ? "w-5 -rotate-45 -translate-y-[7px]" : ""}`
              }`}
            />
          ))}
        </button>
      </div>

      {/* ── Menu mobile ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-[#E4DAC4] border-t border-[#E8E0D8] overflow-hidden"
          >
            <div className="flex flex-col px-6 py-5 gap-5">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => go(l.href)}
                  className="text-left text-xs tracking-widest uppercase text-[#9A8F88]
                             hover:text-[#2D2D2D] active:scale-95
                             transition-all duration-300 ease-in-out"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => go("#contato")}
                className="text-xs tracking-widest uppercase font-semibold text-[#D4A3A3]
                           active:scale-95 transition-transform duration-200"
              >
                Vamos Conversar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
