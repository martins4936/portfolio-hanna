"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ─── Types ──────────────────────────────────────────────── */
type Filter = "todos" | "social" | "branding" | "eventos";

interface Card {
  id: number;
  filter: Exclude<Filter, "todos">;
  category: string;
  title: string;
  subtitle?: string;
  tags: string[];
  image?: string;
  bg: string;
  emoji: string;
  igStyle?: boolean;
  igHandle?: string;
  igLocation?: string;
  h: "sm" | "md" | "lg";
}

/* ─── Dados — apenas cards com imagem real + card de perfil ── */
const cards: Card[] = [
  /* ── Social Media ───────────────────────────────────────── */
  {
    id: 2, filter: "social", h: "lg",
    category: "COPYWRITING / EDITORIAL",
    title: "Consistência é a única Magia",
    tags: ["Roteiro", "Copywriting", "Reels"],
    image: "/portfolio/consistencia-magica.jpg",
    bg: "#F5E6E6", emoji: "🎬",
  },
  {
    id: 3, filter: "social", h: "md",
    category: "COPYWRITING / EDITORIAL",
    title: "O acessório que combina com a sua FOME!",
    subtitle: "@mimosalgados.oficial",
    tags: ["Copy", "Colagem", "Tom de Voz"],
    image: "/portfolio/mimo-fome.jpg",
    bg: "#F5E6E6", emoji: "✍️",
  },
  {
    id: 4, filter: "social", h: "lg",
    category: "SOCIAL MEDIA / CAMPANHA",
    title: "Mimo Salgados · Portal Abriu",
    subtitle: "Campanha temática @mimosalgados.oficial",
    tags: ["Campanha", "Criação", "Storytelling"],
    image: "/portfolio/mimo-stranger.jpg",
    bg: "#1A0A0A", emoji: "🌀",
  },

  /* ── Branding ────────────────────────────────────────────── */
  {
    id: 5, filter: "branding", h: "lg",
    category: "BRANDING / CAMPANHA",
    title: "Campanha Kiko Milano",
    subtitle: "O Toque Final · Product Ad",
    tags: ["Branding", "Produto", "Campanha"],
    image: "/portfolio/kiko-produto.jpg",
    bg: "#F5E6E6", emoji: "💄",
  },
  {
    id: 6, filter: "branding", h: "md",
    category: "BRANDING / OOH MOCKUP",
    title: "Kiko · Mídia Out of Home",
    subtitle: "Mockup de busdoor · Sydney",
    tags: ["OOH", "Mockup", "Mídia"],
    image: "/portfolio/kiko-billboard.jpg",
    bg: "#F5F1EB", emoji: "🏙️",
  },
  {
    id: 7, filter: "branding", h: "lg",
    category: "BRANDING / CAMPANHA",
    title: "Vizzano · Saltos Altos. Problemas Baixos.",
    subtitle: "Campanha conceitual de calçados",
    tags: ["Campanha", "Moda", "Conceitual"],
    image: "/portfolio/vizzano.jpg",
    bg: "#1A1A2E", emoji: "👠",
  },
  {
    id: 8, filter: "branding", h: "lg",
    category: "BRANDING / CASE",
    title: "Por que a Zara não investe em publicidade tradicional?",
    subtitle: "@secretmartinisociety · Análise de marca",
    tags: ["Branding", "Case", "Estratégia"],
    image: "/portfolio/zara-publicidade.jpg",
    bg: "#F0EDE8", emoji: "🏷️",
  },
  {
    id: 9, filter: "branding", h: "md",
    category: "BRANDING / EDITORIAL",
    title: "Zara · Logística como estratégia de marca",
    subtitle: "Supply Chain & Branding Silencioso",
    tags: ["Análise", "Editorial", "Moda"],
    image: "/portfolio/zara-logistica.jpg",
    bg: "#F0EDE8", emoji: "🧵",
  },

  /* ── Eventos & RP ────────────────────────────────────────── */
  {
    id: 10, filter: "eventos", h: "lg",
    category: "RP / EDITORIAL DE EVENTOS",
    title: "O que define um bom show?",
    subtitle: "Colagem editorial · Coachella",
    tags: ["Eventos", "Editorial", "RP"],
    image: "/portfolio/coachella.jpg",
    bg: "#FFF3E0", emoji: "🎤",
  },
];

/* ─── Card Component ─────────────────────────────────────── */
function PortfolioCard({ card, index, priority, onCardClick }: { card: Card; index: number; priority?: boolean; onCardClick: (idx: number) => void }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const minH =
    card.h === "lg" ? "min-h-[420px]" :
    card.h === "md" ? "min-h-[300px]" : "min-h-[200px]";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.7, y: 50 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ 
        type: "spring", 
        stiffness: 110, 
        damping: 14, 
        delay: index * 0.05 
      }}
      whileHover={{ 
        scale: 1.03, 
        rotate: index % 2 === 0 ? 1.5 : -1.5,
        transition: { type: "spring", stiffness: 300, damping: 12 }
      }}
      whileTap={{ scale: 0.95 }}
      className="mb-4 break-inside-avoid"
    >
      <div
        onClick={() => {
          if (card.image) onCardClick(index);
        }}
        className={`
          relative rounded-2xl overflow-hidden group cursor-pointer ${minH} flex flex-col
          border border-[#E8E0D8]
          hover:shadow-[0_30px_60px_rgba(45,45,45,0.12)]
          hover:border-[#D4A3A3]
          transition-colors duration-300
        `}
        style={{ backgroundColor: card.bg }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Imagem real de fundo */}
        {card.image && (
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
              priority={priority}
              loading={priority ? "eager" : "lazy"}
            />
          </div>
        )}

        {/* Header estilo Instagram (card de perfil) */}
        {card.igStyle && (
          <div className="relative z-20 flex items-center justify-between px-3 py-2.5
                          border-b border-black/8 bg-white/50 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#D4A3A3] to-[#B07070]
                              flex items-center justify-center text-[9px] font-bold text-white shrink-0">
                HM
              </div>
              <div>
                <p className="text-[10px] font-semibold text-[#2D2D2D] leading-tight">{card.igHandle}</p>
                <p className="text-[8px] text-[#9A8F88] leading-tight">{card.igLocation}</p>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/hanna-mel-62406b267/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[9px] font-semibold px-2.5 py-1 rounded-full
                         border border-[#D4A3A3] text-[#D4A3A3]
                         hover:bg-[#D4A3A3] hover:text-white active:scale-95
                         transition-all duration-300 ease-in-out"
            >
              Ver perfil
            </a>
          </div>
        )}

        {/* Área de conteúdo para card sem imagem (card de perfil) */}
        {!card.image && (
          <div className="flex-1 relative flex items-center justify-center p-6 overflow-hidden">
            <span className="absolute text-8xl opacity-[0.12] select-none pointer-events-none
                             group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 ease-out">
              {card.emoji}
            </span>
          </div>
        )}

        {/* Spacer para cards com imagem */}
        {card.image && <div className="flex-1" />}

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`absolute inset-0 flex flex-col justify-center items-center gap-3 p-5 text-center z-30
                ${card.image ? "bg-black/65 backdrop-blur-sm" : "bg-white/75 backdrop-blur-sm"}`}
            >
              <p className={`font-[family-name:var(--font-display)] font-bold text-base leading-tight
                ${card.image ? "text-white" : "text-[#2D2D2D]"}`}>
                {card.title}
              </p>
              {card.subtitle && (
                <p className={`text-xs ${card.image ? "text-white/75" : "text-[#9A8F88]"}`}>
                  {card.subtitle}
                </p>
              )}
              <div className="flex flex-wrap justify-center gap-1.5 mt-1">
                {card.tags.map((t) => (
                  <span key={t}
                    className="px-2.5 py-0.5 text-[10px] rounded-full font-medium
                               bg-[#D4A3A3]/20 border border-[#D4A3A3]/60 text-[#D4A3A3]">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gradiente + label na base (só cards com imagem) */}
        {card.image && (
          <div className="absolute bottom-0 left-0 right-0 z-20
                          bg-gradient-to-t from-black/60 via-black/20 to-transparent
                          px-4 py-4 pointer-events-none">
            <p className="text-[9px] tracking-[0.2em] uppercase text-white/60 font-medium">
              {card.category}
            </p>
            <p className="text-sm font-[family-name:var(--font-display)] font-semibold text-white leading-tight">
              {card.title}
            </p>
          </div>
        )}
      </div>

      {/* Label abaixo do card */}
      <div className="px-1 pt-2 pb-1">
        <p className="text-[9px] tracking-[0.2em] uppercase text-[#9A8F88] font-medium">
          {card.category}
        </p>
        <p className="text-sm font-[family-name:var(--font-display)] font-semibold text-[#2D2D2D] leading-tight">
          {card.title}
        </p>
        {card.subtitle && (
          <p className="text-[10px] text-[#9A8F88] mt-0.5">{card.subtitle}</p>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Filtros ────────────────────────────────────────────── */
const filters: { key: Filter; label: string }[] = [
  { key: "todos",    label: "Todos" },
  { key: "social",   label: "Social Media" },
  { key: "branding", label: "Branding" },
  { key: "eventos",  label: "RP & Eventos" },
];

/* ─── Main ───────────────────────────────────────────────── */
export default function FeedGrid() {
  const [active, setActive] = useState<Filter>("todos");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = active === "todos" ? cards : cards.filter((c) => c.filter === active);

  const closeImage = () => setSelectedIndex(null);
  
  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null && selectedIndex < filtered.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };
  
  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <section id="trabalhos" ref={ref} className="max-w-6xl mx-auto px-6 pb-24">

      {/* Filtros pill */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap gap-2 justify-center mb-10"
      >
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => { setActive(f.key); setSelectedIndex(null); }}
            className={`
              px-4 py-1.5 rounded-full text-xs font-medium tracking-wide
              active:scale-95 transition-all duration-300 ease-in-out
              ${active === f.key
                ? "bg-[#2D2D2D] text-[#E4DAC4] shadow-[0_4px_12px_rgba(45,45,45,0.15)]"
                : "border border-[#E8E0D8] text-[#9A8F88] hover:border-[#D4A3A3] hover:text-[#D4A3A3] hover:bg-[#F5E6E6]/50"
              }
            `}
          >
            {f.label}
          </button>
        ))}
      </motion.div>

      {/* Masonry via CSS columns */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        {filtered.map((card, i) => (
          <PortfolioCard
            key={card.id}
            card={card}
            index={i}
            priority={i < 5}
            onCardClick={setSelectedIndex}
          />
        ))}
      </div>

      {/* Lightbox / Post Modal */}
      <AnimatePresence>
        {selectedIndex !== null && filtered[selectedIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-12"
            onClick={closeImage}
          >
            {/* Navegação (Lado de fora do Modal) */}
            {selectedIndex > 0 && (
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#ffffff", color: "#2D2D2D" }}
                whileTap={{ scale: 0.9 }}
                onClick={prevImage}
                className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 hidden sm:flex items-center justify-center rounded-full bg-white/10 text-white shadow-lg backdrop-blur-md z-40 transition-colors"
                aria-label="Anterior"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </motion.button>
            )}
            
            {selectedIndex < filtered.length - 1 && (
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#ffffff", color: "#2D2D2D" }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImage}
                className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 hidden sm:flex items-center justify-center rounded-full bg-white/10 text-white shadow-lg backdrop-blur-md z-40 transition-colors"
                aria-label="Próximo"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </motion.button>
            )}

            {/* Container Principal do Post */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 30, stiffness: 350 }}
              className="relative w-full max-w-lg bg-[#FDFBF7] rounded-[20px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)] flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()} 
            >
              {/* Botão Fechar (Mobile principalmente) */}
              <button
                onClick={closeImage}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 backdrop-blur-md transition-colors z-50 text-sm"
              >
                ✕
              </button>

              {/* Área da Imagem (100% à mostra) */}
              <div className="relative w-full max-h-[50vh] flex items-center justify-center shrink-0" style={{ backgroundColor: filtered[selectedIndex].bg }}>
                <Image
                  src={filtered[selectedIndex].image!}
                  alt={filtered[selectedIndex].title}
                  width={800}
                  height={800}
                  className="w-full h-auto max-h-[50vh] object-contain"
                  priority
                />
              </div>

              {/* Área do Texto (Legenda estilo post) */}
              <div className="p-6 bg-white border-t border-[#E8E0D8] overflow-y-auto">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#D4A3A3] font-bold mb-2">
                  {filtered[selectedIndex].category}
                </p>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-2xl text-[#2D2D2D] mb-2 leading-tight">
                  {filtered[selectedIndex].title}
                </h3>
                {filtered[selectedIndex].subtitle && (
                  <p className="text-sm text-[#7A716C] mb-4 font-medium">
                    {filtered[selectedIndex].subtitle}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {filtered[selectedIndex].tags.map((t) => (
                    <span key={t} className="px-3 py-1 bg-[#F5F2EB] text-[#7A716C] border border-[#E8E0D8] text-[10px] uppercase font-bold rounded-full tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Controles de Navegação para Mobile (Aparece apenas se a tela for pequena) */}
              <div className="flex sm:hidden w-full border-t border-[#E8E0D8] bg-white">
                <button 
                  onClick={prevImage} 
                  disabled={selectedIndex === 0}
                  className="flex-1 py-3 flex justify-center text-[#2D2D2D] disabled:opacity-30 active:bg-gray-100"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <div className="w-px bg-[#E8E0D8]" />
                <button 
                  onClick={nextImage} 
                  disabled={selectedIndex === filtered.length - 1}
                  className="flex-1 py-3 flex justify-center text-[#2D2D2D] disabled:opacity-30 active:bg-gray-100"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
