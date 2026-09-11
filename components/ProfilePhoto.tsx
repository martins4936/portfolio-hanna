"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────────
   🔑 ATALHO SECRETO: Shift + Alt + H
   Só quem sabe o atalho consegue abrir o painel.
   Visitantes nunca veem este controle.
───────────────────────────────────────────────────────────── */
const isSecretCombo = (e: KeyboardEvent) =>
  e.shiftKey && e.altKey && e.code === "KeyH";

const STORAGE_KEY = "hanna-photo-v1";

interface Settings {
  zoom: number;   // 1.0 → 2.5  (escala CSS)
  posX: number;   // 0 → 100%   (foco horizontal)
  posY: number;   // 0 → 100%   (foco vertical — 0 = topo)
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
  const [ready, setReady] = useState(false); // evita flash de configurações no SSR

  // Carrega do localStorage após mount
  useEffect(() => {
    setCfg(load());
    setReady(true);
  }, []);

  // Ouve o atalho secreto globalmente
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

  // Atualiza state + persiste
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
    <div className="shrink-0 flex flex-col items-center gap-2 relative">

      {/* ── Foto ── */}
      <div
        className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden
                   border-2 border-[#E8E0D8]
                   transition-transform duration-500 ease-out hover:scale-[1.03]"
      >
        {/* Wrapper de zoom — aplica scale + origin sem mover o container */}
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
            sizes="(max-width: 640px) 112px, 144px"
            priority
          />
        </div>
      </div>

      {/* ── Badge disponível ── */}
      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#FDFBF7] border border-[#E8E0D8] rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-[#7BC67E] animate-pulse" />
        <span className="text-[9px] text-[#9A8F88] font-medium">Disponível</span>
      </div>

      {/* ── Painel de admin (invisível para visitantes) ── */}
      {open && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-[9999]
                     bg-white border border-[#E8E0D8] rounded-2xl
                     shadow-[0_20px_60px_rgba(45,45,45,0.15)] p-5 w-72 text-left"
          // Impede que o clique dentro do painel feche-o involuntariamente
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

          {/* Slider: Zoom */}
          <label className="block mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-[10px] uppercase tracking-widest text-[#9A8F88] font-medium">
                Zoom
              </span>
              <span className="text-[10px] font-bold text-[#D4A3A3]">
                {zoom.toFixed(2)}×
              </span>
            </div>
            <input
              type="range" min="1" max="2.5" step="0.05"
              value={zoom}
              onChange={(e) => update({ zoom: parseFloat(e.target.value) })}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-[#D4A3A3]"
            />
            <div className="flex justify-between mt-0.5">
              <span className="text-[8px] text-[#9A8F88]">Normal</span>
              <span className="text-[8px] text-[#9A8F88]">2.5×</span>
            </div>
          </label>

          {/* Slider: Posição Horizontal */}
          <label className="block mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-[10px] uppercase tracking-widest text-[#9A8F88] font-medium">
                Posição Horizontal
              </span>
              <span className="text-[10px] font-bold text-[#D4A3A3]">
                {posX}%
              </span>
            </div>
            <input
              type="range" min="0" max="100" step="1"
              value={posX}
              onChange={(e) => update({ posX: parseInt(e.target.value) })}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-[#D4A3A3]"
            />
            <div className="flex justify-between mt-0.5">
              <span className="text-[8px] text-[#9A8F88]">Esquerda</span>
              <span className="text-[8px] text-[#9A8F88]">Direita</span>
            </div>
          </label>

          {/* Slider: Posição Vertical */}
          <label className="block mb-5">
            <div className="flex justify-between mb-1">
              <span className="text-[10px] uppercase tracking-widest text-[#9A8F88] font-medium">
                Posição Vertical
              </span>
              <span className="text-[10px] font-bold text-[#D4A3A3]">
                {posY}%
              </span>
            </div>
            <input
              type="range" min="0" max="100" step="1"
              value={posY}
              onChange={(e) => update({ posY: parseInt(e.target.value) })}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-[#D4A3A3]"
            />
            <div className="flex justify-between mt-0.5">
              <span className="text-[8px] text-[#9A8F88]">Topo</span>
              <span className="text-[8px] text-[#9A8F88]">Base</span>
            </div>
          </label>

          {/* Botões */}
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
