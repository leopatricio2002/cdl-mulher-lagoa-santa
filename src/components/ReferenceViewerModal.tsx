import React from 'react';
import { X, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface ReferenceViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferenceViewerModal: React.FC<ReferenceViewerModalProps> = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = React.useState<'target' | 'bg' | 'layout'>('target');
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-4xl bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 text-white z-10 shadow-2xl"
      >
        <div className="flex items-center justify-between pb-4 border-b border-neutral-900 mb-6">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Galeria de Referências Enviadas
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              Visualize a imagem de fundo das empreendedoras e o layout minimalista de referência.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <button
            onClick={() => setSelectedImage('target')}
            className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-medium transition-colors ${
              selectedImage === 'target'
                ? 'bg-[#d946ef] text-white shadow-sm'
                : 'bg-neutral-900 text-neutral-400 hover:text-white'
            }`}
          >
            Layout Solicitado (Novo Screenshot)
          </button>
          <button
            onClick={() => setSelectedImage('bg')}
            className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-medium transition-colors ${
              selectedImage === 'bg'
                ? 'bg-[#d946ef] text-white shadow-sm'
                : 'bg-neutral-900 text-neutral-400 hover:text-white'
            }`}
          >
            Foto das Empreendedoras
          </button>
          <button
            onClick={() => setSelectedImage('layout')}
            className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-medium transition-colors ${
              selectedImage === 'layout'
                ? 'bg-[#d946ef] text-white shadow-sm'
                : 'bg-neutral-900 text-neutral-400 hover:text-white'
            }`}
          >
            Referência Inicial
          </button>
        </div>

        {/* Reference Image Container */}
        <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-black flex items-center justify-center min-h-[300px]">
          {selectedImage === 'target' && (
            <img
              src="/assets/aistudio/image_9dc39ec3.png"
              alt="Layout de referência exato solicitado"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[58vh] object-contain"
            />
          )}
          {selectedImage === 'bg' && (
            <img
              src="/assets/aistudio/image_d7b6c470_hd.jpg"
              alt="Fundo de toda a página em alta definição"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[58vh] object-contain"
            />
          )}
          {selectedImage === 'layout' && (
            <img
              src="/assets/aistudio/Gemini_Generated_Image_mov6h8mov6h8mov6_c184ef16.jfif"
              alt="Imagem original de layout hero section"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[58vh] object-contain"
            />
          )}
        </div>

        {/* Comparison Checklist */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 bg-neutral-900/60 border border-neutral-800/80 rounded-xl flex items-start gap-2.5">
            <Check size={16} className="text-[#d946ef] shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-semibold text-neutral-200 block">Fundo Preto</span>
              <span className="text-neutral-400">Totalmente preservado em #000000 puro.</span>
            </div>
          </div>
          <div className="p-3 bg-neutral-900/60 border border-neutral-800/80 rounded-xl flex items-start gap-2.5">
            <Check size={16} className="text-[#d946ef] shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-semibold text-neutral-200 block">Nova Frase Aplicada</span>
              <span className="text-neutral-400">Hierarquia tipográfica fiel respeitada.</span>
            </div>
          </div>
          <div className="p-3 bg-neutral-900/60 border border-neutral-800/80 rounded-xl flex items-start gap-2.5">
            <Check size={16} className="text-[#d946ef] shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-semibold text-neutral-200 block">Novo Botão CTA</span>
              <span className="text-neutral-400">"seja uma associada" com estilo pill e brilho.</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
