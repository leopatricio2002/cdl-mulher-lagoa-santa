import React from 'react';
import { SlidersHorizontal, Image as ImageIcon } from 'lucide-react';
import { TextLayoutCadence } from './HeroSection';

interface CadenceSelectorProps {
  cadence: TextLayoutCadence;
  setCadence: (cadence: TextLayoutCadence) => void;
  onOpenReference: () => void;
}

export const CadenceSelector: React.FC<CadenceSelectorProps> = ({
  cadence,
  setCadence,
  onOpenReference,
}) => {
  return (
    <aside 
      aria-label="Controles de Tipografia e Comparação"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-30 flex items-center gap-2 p-1.5 bg-neutral-950/90 border border-neutral-800/90 backdrop-blur-md rounded-full shadow-2xl text-xs"
    >
      <div className="flex items-center gap-1 pl-2 pr-1 text-neutral-400">
        <SlidersHorizontal size={13} className="text-[#d946ef]" />
        <span className="hidden sm:inline text-[11px] uppercase tracking-wider text-neutral-400">
          Quebra de Linha:
        </span>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={() => setCadence('cadence-faithful')}
          className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all ${
            cadence === 'cadence-faithful'
              ? 'bg-neutral-800 text-white shadow-sm'
              : 'text-neutral-400 hover:text-white'
          }`}
          title="Divisão 3-3-1-4 idêntica à distribuição original (MAS VOCÊ NÃO / PRECISA)"
        >
          1:1 Fiel
        </button>

        <button
          onClick={() => setCadence('cadence-balanced')}
          className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all ${
            cadence === 'cadence-balanced'
              ? 'bg-neutral-800 text-white shadow-sm'
              : 'text-neutral-400 hover:text-white'
          }`}
          title="Divisão equilibrada em 2 linhas (MAS VOCÊ / NÃO PRECISA)"
        >
          Equilibrada
        </button>

        <button
          onClick={() => setCadence('cadence-punch')}
          className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all ${
            cadence === 'cadence-punch'
              ? 'bg-neutral-800 text-white shadow-sm'
              : 'text-neutral-400 hover:text-white'
          }`}
          title="Divisão com foco no SOZINHA! isolado"
        >
          Enxuta
        </button>
      </div>

      <div className="h-4 w-px bg-neutral-800 mx-1" />

      <button
        onClick={onOpenReference}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors text-[11px]"
        title="Ver imagem original enviada"
      >
        <ImageIcon size={13} className="text-[#d946ef]" />
        <span className="hidden md:inline">Ver Original</span>
      </button>
    </aside>
  );
};
