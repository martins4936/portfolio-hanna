"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "2+", label: "Anos de aprendizado" },
  { value: "10+", label: "Projetos entregues" },
  { value: "∞", label: "Curiosidade" },
];

const skills = [
  "Social Media", "Copywriting", "React", "Next.js",
  "Figma", "Design System", "SQL", "Python",
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" ref={ref} className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-[#FF3B00] font-[family-name:var(--font-display)] font-bold text-sm tracking-widest uppercase">
            01 / Sobre
          </span>
          <span className="flex-1 h-px bg-[#2A2A2A]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Stats */}
          <div className="flex flex-col gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-end gap-6 group"
              >
                <span className="font-[family-name:var(--font-display)] font-bold text-6xl md:text-7xl text-[#FF3B00] leading-none group-hover:text-[#F2F2F0] transition-colors duration-300">
                  {stat.value}
                </span>
                <span className="text-sm text-[#8A8A88] pb-2 leading-tight">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Text + skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <p className="text-lg text-[#8A8A88] leading-relaxed">
              Sou estudante de{" "}
              <span className="text-[#F2F2F0] font-medium">
                Análise e Desenvolvimento de Sistemas na FATEC
              </span>{" "}
              e atuo como Jovem Aprendiz no{" "}
              <span className="text-[#FF3B00] font-medium">iFood</span>, onde
              gerencio e crio conteúdo para redes sociais. Acredito que as
              melhores soluções de comunicação nascem da interseção entre
              raciocínio analítico e sensibilidade estética —{" "}
              <span className="text-[#F2F2F0] font-medium">
                e é exatamente aí que eu vivo.
              </span>
            </p>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                  className="px-3 py-1.5 text-xs font-medium text-[#8A8A88] border border-[#2A2A2A] rounded-full hover:border-[#FF3B00] hover:text-[#FF3B00] transition-colors duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* CTA inline */}
            <button
              onClick={() =>
                document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })
              }
              className="self-start text-sm font-semibold text-[#FF3B00] hover:text-[#F2F2F0] transition-colors duration-200 group flex items-center gap-2"
            >
              Vamos conversar
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
