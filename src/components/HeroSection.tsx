import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export type TextLayoutCadence = 'cadence-balanced' | 'cadence-faithful' | 'cadence-punch';

interface HeroSectionProps {
  onOpenMembership: () => void;
  cadence?: TextLayoutCadence;
}

interface TypographyProps {
  cadence: TextLayoutCadence;
  isMobile?: boolean;
}

const TypographyBlock: React.FC<TypographyProps> = ({ cadence, isMobile = false }) => {
  return (
    <>
      {/* Cadência Equilibrada (Padrão) */}
      {cadence === 'cadence-balanced' && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={
            isMobile
              ? 'space-y-1.5 sm:space-y-2 flex flex-col items-center text-center'
              : 'space-y-1.5 sm:space-y-2 md:space-y-2.5'
          }
        >
          {/* Linha 1: "EMPREENDER EXIGE FORÇA" */}
          <h2
            className={
              isMobile
                ? 'text-xs sm:text-sm font-light text-neutral-100/95 tracking-[0.06em] uppercase leading-tight font-sans'
                : 'text-xs sm:text-base md:text-xl lg:text-2xl xl:text-[28px] font-light text-neutral-100/95 tracking-[0.06em] uppercase leading-tight font-sans'
            }
          >
            EMPREENDER EXIGE FORÇA
          </h2>

          {/* Linha 2: "MAS VOCÊ" */}
          <h1
            className={
              isMobile
                ? 'text-3xl sm:text-4xl font-black text-white tracking-tight uppercase leading-[0.91] font-sans drop-shadow-sm'
                : 'text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[76px] 2xl:text-[86px] font-black text-white tracking-tight uppercase leading-[0.91] font-sans drop-shadow-sm'
            }
          >
            MAS VOCÊ
          </h1>

          {/* Linha 3: "NÃO PRECISA" */}
          <h1
            className={
              isMobile
                ? 'text-3xl sm:text-4xl font-black text-white tracking-tight uppercase leading-[0.91] font-sans drop-shadow-sm'
                : 'text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[76px] 2xl:text-[86px] font-black text-white tracking-tight uppercase leading-[0.91] font-sans drop-shadow-sm'
            }
          >
            NÃO PRECISA
          </h1>

          {/* Linha 4: "FAZER ISSO SOZINHA !" */}
          <p
            className={
              isMobile
                ? 'text-base sm:text-lg font-light text-neutral-100/95 tracking-[0.04em] uppercase leading-tight pt-1 font-sans'
                : 'text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-[34px] font-light text-neutral-100/95 tracking-[0.04em] uppercase leading-tight pt-1 sm:pt-2 font-sans'
            }
          >
            FAZER ISSO{' '}
            <span className="text-white font-black underline decoration-fuchsia-300 decoration-3 sm:decoration-4 underline-offset-4 tracking-[0.03em] drop-shadow-[0_0_20px_rgba(217,70,239,0.7)]">
              SOZINHA !
            </span>
          </p>
        </motion.div>
      )}

      {/* Cadência Fiel */}
      {cadence === 'cadence-faithful' && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={
            isMobile
              ? 'space-y-1.5 sm:space-y-2 flex flex-col items-center text-center'
              : 'space-y-1.5 sm:space-y-2 md:space-y-2.5'
          }
        >
          <h2
            className={
              isMobile
                ? 'text-xs sm:text-sm font-light text-neutral-100/95 tracking-[0.06em] uppercase leading-tight font-sans'
                : 'text-xs sm:text-base md:text-xl lg:text-2xl xl:text-[28px] font-light text-neutral-100/95 tracking-[0.06em] uppercase leading-tight font-sans'
            }
          >
            EMPREENDER EXIGE FORÇA
          </h2>

          <h1
            className={
              isMobile
                ? 'text-2xl sm:text-3xl font-black text-white tracking-tight uppercase leading-[0.91] font-sans drop-shadow-sm'
                : 'text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[66px] 2xl:text-[74px] font-black text-white tracking-tight uppercase leading-[0.91] font-sans drop-shadow-sm'
            }
          >
            MAS VOCÊ NÃO
          </h1>

          <h1
            className={
              isMobile
                ? 'text-2xl sm:text-3xl font-black text-white tracking-tight uppercase leading-[0.91] font-sans drop-shadow-sm'
                : 'text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[66px] 2xl:text-[74px] font-black text-white tracking-tight uppercase leading-[0.91] font-sans drop-shadow-sm'
            }
          >
            PRECISA
          </h1>

          <p
            className={
              isMobile
                ? 'text-base sm:text-lg font-light text-neutral-100/95 tracking-[0.04em] uppercase leading-tight pt-1 font-sans'
                : 'text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-[34px] font-light text-neutral-100/95 tracking-[0.04em] uppercase leading-tight pt-1 sm:pt-2 font-sans'
            }
          >
            FAZER ISSO{' '}
            <span className="text-white font-black underline decoration-fuchsia-300 decoration-3 sm:decoration-4 underline-offset-4 tracking-[0.03em] drop-shadow-[0_0_20px_rgba(217,70,239,0.7)]">
              SOZINHA !
            </span>
          </p>
        </motion.div>
      )}

      {/* Cadência Punch */}
      {cadence === 'cadence-punch' && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={
            isMobile
              ? 'space-y-1.5 sm:space-y-2 flex flex-col items-center text-center'
              : 'space-y-1.5 sm:space-y-2 md:space-y-2.5'
          }
        >
          <h2
            className={
              isMobile
                ? 'text-xs sm:text-sm font-light text-neutral-100/95 tracking-[0.06em] uppercase leading-tight font-sans'
                : 'text-xs sm:text-base md:text-xl lg:text-2xl xl:text-[28px] font-light text-neutral-100/95 tracking-[0.06em] uppercase leading-tight font-sans'
            }
          >
            EMPREENDER EXIGE FORÇA,
          </h2>

          <h1
            className={
              isMobile
                ? 'text-xl sm:text-2xl font-black text-white tracking-tight uppercase leading-[0.94] font-sans drop-shadow-sm'
                : 'text-lg sm:text-2xl md:text-3xl lg:text-[40px] xl:text-[48px] font-black text-white tracking-tight uppercase leading-[0.94] font-sans drop-shadow-sm'
            }
          >
            MAS VOCÊ NÃO PRECISA
          </h1>

          <h1
            className={
              isMobile
                ? 'text-2xl sm:text-3xl font-black text-white tracking-tight uppercase leading-[0.91] font-sans drop-shadow-sm'
                : 'text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[66px] 2xl:text-[74px] font-black text-white tracking-tight uppercase leading-[0.91] font-sans drop-shadow-sm'
            }
          >
            FAZER ISSO
          </h1>

          <p
            className={
              isMobile
                ? 'text-2xl sm:text-3xl font-black text-white underline decoration-fuchsia-300 decoration-3 underline-offset-4 uppercase leading-tight pt-1 font-sans drop-shadow-[0_0_20px_rgba(217,70,239,0.7)]'
                : 'text-2xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[60px] font-black text-white underline decoration-fuchsia-300 decoration-3 sm:decoration-4 underline-offset-4 uppercase leading-tight pt-1 sm:pt-2 font-sans drop-shadow-[0_0_20px_rgba(217,70,239,0.7)]'
            }
          >
            SOZINHA !
          </p>
        </motion.div>
      )}
    </>
  );
};

interface ActionButtonProps {
  onOpen: () => void;
  isMobile?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onOpen, isMobile = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={isMobile ? 'mt-6 w-full flex justify-center' : 'mt-6 sm:mt-9 lg:mt-11'}
    >
      <button
        onClick={onOpen}
        className={`group relative inline-flex items-center justify-center gap-3 rounded-full bg-[#d946ef] hover:bg-[#e879f9] text-white font-medium tracking-wide btn-glow border border-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#580539] focus:ring-fuchsia-400 cursor-pointer transition-transform whitespace-nowrap ${
          isMobile
            ? 'w-full sm:w-auto px-8 py-3.5 text-sm shadow-[0_4px_25px_rgba(217,70,239,0.5)]'
            : 'px-6 sm:px-9 lg:px-11 py-3 sm:py-4 text-xs sm:text-base lg:text-lg'
        }`}
        aria-label="seja uma associada"
      >
        <span>seja uma associada</span>
        <ArrowRight
          size={isMobile ? 16 : 18}
          className="transition-transform duration-300 group-hover:translate-x-1.5"
          strokeWidth={2.2}
        />
      </button>
    </motion.div>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenMembership,
  cadence = 'cadence-balanced',
}) => {
  return (
    <>
      {/* ========================================================================= */}
      {/* LAYOUT MOBILE (md:hidden): Um fundo único tela cheia, exatamente como desktop */}
      {/* ========================================================================= */}
      <section className="md:hidden relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-end bg-transparent text-white px-6 pb-12 select-none">
        {/* O fundo mobile_full_bg.jpg cobre a tela inteira (fixed inset-0) no App.tsx */}
        {/* As mulheres ficam ao centro no topo do fundo; texto e botão ficam abaixo */}
        <div className="w-full max-w-md mx-auto flex flex-col items-center text-center z-10 pt-[78vw] sm:pt-[65vw]">
          <TypographyBlock cadence={cadence} isMobile={true} />
          <ActionButton onOpen={onOpenMembership} isMobile={true} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* LAYOUT DESKTOP (hidden md:flex): Lado a lado com imagem no fundo direito   */}
      {/* ========================================================================= */}
      <section className="hidden md:flex relative min-h-[calc(100vh-90px)] w-full items-center justify-start bg-transparent text-white px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden select-none">
        {/* O texto ocupa a metade esquerda, permitindo que as mulheres no lado direito da imagem fiquem visíveis */}
        <div className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 z-10">
          <div className="w-[55%] sm:w-[50%] md:w-[46%] lg:w-[43%] xl:w-[41%] max-w-xl flex flex-col items-start text-left">
            <TypographyBlock cadence={cadence} isMobile={false} />
            <ActionButton onOpen={onOpenMembership} isMobile={false} />
          </div>
        </div>
      </section>
    </>
  );
};
