"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   🔑 ATALHO SECRETO: Shift + Alt + H
   Painel admin mantido.
───────────────────────────────────────────────────────────── */
const isSecretCombo = (e: KeyboardEvent) =>
  e.shiftKey && e.altKey && e.code === "KeyH";

const STORAGE_KEY = "hanna-photo-v1";

interface Settings {
  zoom: number;   
  posX: number;   
  posY: number;   
}

const DEFAULT: Settings = { zoom: 1.0, posX: 50, posY: 40 };

function load(): Settings {
  if (typeof window === "undefined") return DEFAULT;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...DEFAULT, ...JSON.parse(raw) } : DEFAULT;
  } catch {
    return DEFAULT;
  }
}

/* ─── Componente principal ─────────────────────────────────── */
export default function ProfilePhoto() {
  const [cfg, setCfg] = useState<Settings>(DEFAULT);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  // Efeitos 3D (Tilt / Magnetic)
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    setCfg(load());
    setReady(true);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (isSecretCombo(e)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const update = useCallback((patch: Partial<Settings>) => {
    setCfg((prev) => {
      const next = { ...prev, ...patch };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setCfg(DEFAULT);
  };

  const { zoom, posX, posY } = ready ? cfg : DEFAULT;

  return (
    <div className="shrink-0 flex flex-col items-center gap-2 relative z-10" style={{ perspective: "1000px" }}>

      {/* ── Aura brilhante flutuante atrás do card ── */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[#D4A3A3]/40 blur-[30px] rounded-full -z-10"
      />

      {/* ── Glass Card com 3D Tilt ── */}
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative p-3 pb-4 bg-white/40 backdrop-blur-xl border border-white/60 
                   rounded-[2rem] shadow-[0_20px_40px_rgba(212,163,163,0.15)] 
                   flex flex-col items-center gap-4 cursor-crosshair
                   transition-shadow duration-300 hover:shadow-[0_30px_60px_rgba(212,163,163,0.25)]"
      >
        {/* Foto Interna que flutua no eixo Z */}
        <div 
          className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden shadow-inner border border-white/40"
          style={{ transform: "translateZ(40px)" }}
        >
          <div
            className="absolute inset-0"
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: `${posX}% ${posY}%`,
              transition: "transform 0.35s ease",
            }}
          >
            <Image
              src="/hanna.jpg"
              alt="Hanna Mel da Silva"
              fill
              className="object-cover"
              style={{ objectPosition: `${posX}% ${posY}%` }}
              sizes="(max-width: 640px) 128px, 160px"
              priority
            />
          </div>
        </div>

        {/* Badge flutuante */}
        <div 
          className="flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-md 
                     border border-white/60 rounded-full shadow-sm"
          style={{ transform: "translateZ(60px)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#7BC67E] animate-pulse shadow-[0_0_8px_#7BC67E]" />
          <span className="text-[9px] text-[#2D2D2D] font-bold uppercase tracking-widest">
            Disponível
          </span>
        </div>
      </motion.div>

      {/* ── Painel de admin secreto ── */}
      {open && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-6 z-[9999]
                     bg-white border border-[#E8E0D8] rounded-2xl
                     shadow-[0_20px_60px_rgba(45,45,45,0.15)] p-5 w-72 text-left"
          onMouseDown={(e) => e.stopPropagation()}
        >
          {/* Header do painel */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-xs font-bold text-[#2D2D2D] tracking-wide">
                🔧 Ajustar foto
              </p>
              <p className="text-[9px] text-[#9A8F88] mt-0.5">
                Shift + Alt + H para abrir/fechar
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-6 h-6 flex items-center justify-center rounded-full
                         text-[#9A8F88] hover:bg-[#F5E6E6] hover:text-[#D4A3A3]
                         transition-colors text-base leading-none"
            >
              ×
            </button>
          </div>

          <label className="block mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-[10px] uppercase tracking-widest text-[#9A8F88] font-medium">Zoom</span>
              <span className="text-[10px] font-bold text-[#D4A3A3]">{zoom.toFixed(2)}×</span>
            </div>
            <input
              type="range" min="1" max="2.5" step="0.05" value={zoom}
              onChange={(e) => update({ zoom: parseFloat(e.target.value) })}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-[#D4A3A3]"
            />
          </label>

          <label className="block mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-[10px] uppercase tracking-widest text-[#9A8F88] font-medium">Horizontal</span>
              <span className="text-[10px] font-bold text-[#D4A3A3]">{posX}%</span>
            </div>
            <input
              type="range" min="0" max="100" step="1" value={posX}
              onChange={(e) => update({ posX: parseInt(e.target.value) })}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-[#D4A3A3]"
            />
          </label>

          <label className="block mb-5">
            <div className="flex justify-between mb-1">
              <span className="text-[10px] uppercase tracking-widest text-[#9A8F88] font-medium">Vertical</span>
              <span className="text-[10px] font-bold text-[#D4A3A3]">{posY}%</span>
            </div>
            <input
              type="range" min="0" max="100" step="1" value={posY}
              onChange={(e) => update({ posY: parseInt(e.target.value) })}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-[#D4A3A3]"
            />
          </label>

          <div className="flex gap-2">
            <button
              onClick={reset}
              className="flex-1 text-xs py-2 border border-[#E8E0D8] rounded-full
                         text-[#9A8F88] hover:border-[#D4A3A3] hover:text-[#D4A3A3]
                         active:scale-95 transition-all duration-200"
            >
              Resetar
            </button>
            <button
              onClick={() => setOpen(false)}
              className="flex-1 text-xs py-2 bg-[#D4A3A3] text-white rounded-full
                         hover:bg-[#C09090] active:scale-95 transition-all duration-200"
            >
              Salvar & Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
