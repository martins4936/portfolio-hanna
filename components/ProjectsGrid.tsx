"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Types ─────────────────────────────────────────────────────────── */
type Category = "faculdade" | "instagram";

interface Project {
  id: number;
  category: Category;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  tags: string[];
  /** Visual accent: spans 1 or 2 columns in masonry */
  span?: "normal" | "wide" | "tall";
  color: string;
}

/* ─── Data ───────────────────────────────────────────────────────────── */
const projects: Project[] = [
  {
    id: 1,
    category: "faculdade",
    title: "Sistema de Gestão de Estoque",
    subtitle: "Projeto Integrador · FATEC",
    challenge: "Criar uma solução web para controle de inventário em pequenos comércios.",
    solution: "Aplicação full-stack com Next.js e banco de dados relacional, com dashboard analítico.",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    color: "#1A1A2E",
  },
  {
    id: 2,
    category: "faculdade",
    title: "API de Análise de Sentimentos",
    subtitle: "Disciplina de IA · FATEC",
    challenge: "Classificar reviews de clientes em positivo/negativo/neutro automaticamente.",
    solution: "Pipeline em Python com NLTK e scikit-learn, integrado via REST API.",
    tags: ["Python", "NLTK", "Flask", "API REST"],
    color: "#1A2E1A",
  },
  {
    id: 3,
    category: "faculdade",
    title: "App Mobile de Delivery",
    subtitle: "Desenvolvimento Mobile · FATEC",
    challenge: "Prototipar um app de delivery com UX intuitiva para o TCC de extensão.",
    solution: "Design system completo no Figma + protótipo navegável com fluxo de pedido.",
    tags: ["Figma", "UX Design", "Prototipação"],
    color: "#2E1A1A",
  },
  {
    id: 4,
    category: "instagram",
    title: "Campanha de Lançamento",
    subtitle: "iFood · Instagram",
    challenge: "Comunicar novo produto em tempo recorde com alcance orgânico.",
    solution: "Série de Reels + carrossel com copy emocional, +40% de engajamento.",
    tags: ["Reels", "Copywriting", "Stories"],
    span: "tall",
    color: "#2E2E0A",
  },
  {
    id: 5,
    category: "instagram",
    title: "Post Institucional",
    subtitle: "iFood · Feed",
    challenge: "Humanizar a marca em datas comemorativas.",
    solution: "Visual clean com tipografia emocional e paleta de identidade da marca.",
    tags: ["Design Gráfico", "Identidade"],
    span: "normal",
    color: "#0A1A2E",
  },
  {
    id: 6,
    category: "instagram",
    title: "Stories de Engajamento",
    subtitle: "iFood · Stories",
    challenge: "Aumentar interação da audiência com enquetes e stickers.",
    solution: "Sequência de 5 stories com CTA progressivo, triplicou respostas.",
    tags: ["Stories", "CTA", "Interatividade"],
    span: "normal",
    color: "#2E0A2E",
  },
  {
    id: 7,
    category: "instagram",
    title: "Calendário Editorial Mensal",
    subtitle: "iFood · Estratégia",
    challenge: "Planejar 30 dias de conteúdo alinhado ao calendário de campanhas.",
    solution: "Grid editorial com 4 pilares de conteúdo, aumentando consistência de posting em 80%.",
    tags: ["Estratégia", "Planejamento", "Editorial"],
    span: "wide",
    color: "#0A2E1A",
  },
];

/* ─── Card: Faculdade ────────────────────────────────────────────────── */
function CollegeCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-[#141414] border border-[#2A2A2A] rounded-2xl overflow-hidden hover:border-[#FF3B00]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-10px_rgba(255,59,0,0.15)]"
    >
      {/* Color accent bar */}
      <div className="h-1 w-full bg-[#FF3B00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Visual placeholder */}
      <div
        className="h-48 flex items-center justify-center text-4xl"
        style={{ backgroundColor: project.color }}
      >
        <span className="font-[family-name:var(--font-display)] font-bold text-[#F2F2F0]/10 text-6xl select-none">
          {String(project.id).padStart(2, "0")}
        </span>
      </div>

      <div className="p-6 flex flex-col gap-4">
        <div>
          <p className="text-xs text-[#FF3B00] font-semibold tracking-wide mb-1">
            {project.subtitle}
          </p>
          <h3 className="font-[family-name:var(--font-display)] font-bold text-lg text-[#F2F2F0] group-hover:text-[#FF3B00] transition-colors duration-200">
            {project.title}
          </h3>
        </div>

        <div className="flex flex-col gap-2 text-sm text-[#8A8A88]">
          <p>
            <span className="text-[#F2F2F0] font-medium">Desafio: </span>
            {project.challenge}
          </p>
          <p>
            <span className="text-[#F2F2F0] font-medium">Solução: </span>
            {project.solution}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs rounded-full border border-[#2A2A2A] text-[#8A8A88]"
            >
              {tag}
            </span>
          ))}
        </div>

        <button className="self-start text-xs font-semibold text-[#FF3B00] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
          Ver case completo <span>→</span>
        </button>
      </div>
    </motion.div>
  );
}

/* ─── Card: Instagram (Masonry) ──────────────────────────────────────── */
function InstagramCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const heightClass =
    project.span === "tall" ? "row-span-2" : "row-span-1";
  const colClass =
    project.span === "wide" ? "md:col-span-2" : "md:col-span-1";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-2xl overflow-hidden border border-[#2A2A2A] hover:border-[#FF3B00]/50 transition-all duration-300 cursor-pointer ${heightClass} ${colClass}`}
      style={{ minHeight: project.span === "tall" ? "480px" : "220px" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
        style={{
          background: `linear-gradient(135deg, ${project.color} 0%, #0A0A0A 100%)`,
        }}
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-[#FF3B00]/0 group-hover:bg-[#FF3B00]/5 transition-all duration-300" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-5">
        {/* Tags top */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-semibold rounded-full border border-[#F2F2F0]/20 text-[#F2F2F0]/60 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom info */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] text-[#FF3B00] font-semibold tracking-wide">
            {project.subtitle}
          </span>
          <h3 className="font-[family-name:var(--font-display)] font-bold text-base text-[#F2F2F0] group-hover:text-[#FF3B00] transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-xs text-[#8A8A88] leading-relaxed line-clamp-2">
            {project.solution}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Section ───────────────────────────────────────────────────── */
export default function ProjectsGrid() {
  const [activeTab, setActiveTab] = useState<Category>("faculdade");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = projects.filter((p) => p.category === activeTab);

  return (
    <section id="projetos" ref={ref} className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-[#FF3B00] font-[family-name:var(--font-display)] font-bold text-sm tracking-widest uppercase">
            02 / Projetos
          </span>
          <span className="flex-1 h-px bg-[#2A2A2A]" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-2 mb-12"
        >
          {(["faculdade", "instagram"] as Category[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 capitalize ${
                activeTab === tab
                  ? "bg-[#FF3B00] text-[#F2F2F0]"
                  : "border border-[#2A2A2A] text-[#8A8A88] hover:border-[#FF3B00] hover:text-[#FF3B00]"
              }`}
            >
              {tab === "faculdade" ? "🎓 Faculdade" : "📱 Instagram"}
            </button>
          ))}
        </motion.div>

        {/* Grid: College */}
        {activeTab === "faculdade" && (
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <CollegeCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}

        {/* Grid: Instagram (Masonry) */}
        {activeTab === "instagram" && (
          <div className="grid md:grid-cols-3 grid-rows-auto gap-4 auto-rows-[220px]">
            {filtered.map((project, i) => (
              <InstagramCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
