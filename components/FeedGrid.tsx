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
function PortfolioCard({ card, index, priority, onImageClick }: { card: Card; index: number; priority?: boolean; onImageClick: (src: string) => void }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const minH =
    card.h === "lg" ? "min-h-[420px]" :
    card.h === "md" ? "min-h-[300px]" : "min-h-[200px]";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      className="mb-3 break-inside-avoid"
    >
      <div
        onClick={() => {
          if (card.image) onImageClick(card.image);
        }}
        className={`
          relative rounded-2xl overflow-hidden group cursor-pointer ${minH} flex flex-col
          border border-[#E8E0D8]
          hover:-translate-y-2
          hover:shadow-[0_24px_60px_rgba(45,45,45,0.14)]
          hover:border-[#D4A3A3]
          active:scale-[0.98] active:translate-y-0
          transition-all duration-500 ease-out
        `}
        style={{ backgroundColor: card.bg }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Imagem real de fundo */}
        {card.image && (
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
            priority={priority}
            loading={priority ? "eager" : "lazy"}
          />
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = active === "todos" ? cards : cards.filter((c) => c.filter === active);

  const closeImage = () => setSelectedImage(null);

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
            onClick={() => setActive(f.key)}
            className={`
              px-4 py-1.5 rounded-full text-xs font-medium tracking-wide
              active:scale-95 transition-all duration-300 ease-in-out
              ${active === f.key
                ? "bg-[#2D2D2D] text-[#F4EFE6] shadow-[0_4px_12px_rgba(45,45,45,0.15)]"
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
            onImageClick={setSelectedImage}
          />
        ))}
      </div>

      {/* Lightbox / Imagem Full Screen */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
            onClick={closeImage}
          >
            {/* Botão Fechar */}
            <button
              onClick={closeImage}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors z-50 text-xl"
              aria-label="Fechar"
            >
              ×
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-full max-h-[90vh] rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()} // evita fechar ao clicar na imagem
            >
              <Image
                src={selectedImage}
                alt="Expandida"
                fill
                className="object-contain"
                sizes="100vw"
                quality={90}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
