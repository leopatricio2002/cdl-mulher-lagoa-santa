import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MembershipModal: React.FC<MembershipModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    whatsapp: '',
    segment: 'tecnologia',
    stage: 'crescimento',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-lg bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-white z-10 my-8 overflow-hidden"
      >
        {/* Glow corner */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-60 h-60 rounded-full bg-fuchsia-600/20 blur-3xl" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#d946ef] block mb-1">
                Junte-se à Comunidade
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Seja uma associada
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1.5 leading-relaxed">
                Conecte-se com líderes, compartilhe desafios e acelere o crescimento do seu negócio ao lado de quem entende sua jornada.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-neutral-300 mb-1.5">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Helena Silveira"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d946ef] focus:ring-1 focus:ring-[#d946ef] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-neutral-300 mb-1.5">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="voce@empresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d946ef] focus:ring-1 focus:ring-[#d946ef] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-neutral-300 mb-1.5">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d946ef] focus:ring-1 focus:ring-[#d946ef] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-neutral-300 mb-1.5">
                    Sua Empresa ou Ideia
                  </label>
                  <input
                    type="text"
                    placeholder="Nome do seu negócio"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d946ef] focus:ring-1 focus:ring-[#d946ef] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-neutral-300 mb-1.5">
                    Segmento
                  </label>
                  <select
                    value={formData.segment}
                    onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                    className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#d946ef] focus:ring-1 focus:ring-[#d946ef] transition-colors"
                  >
                    <option value="tecnologia">Tecnologia & Inovação</option>
                    <option value="comercio">Comércio / Varejo</option>
                    <option value="servicos">Serviços / Consultoria</option>
                    <option value="saude">Saúde & Bem-estar</option>
                    <option value="educacao">Educação & Treinamento</option>
                    <option value="outro">Outro segmento</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#d946ef] hover:bg-[#e879f9] text-white font-medium text-sm tracking-wide btn-glow flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <span>Concluir pré-inscrição</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 pt-1">
                <ShieldCheck size={14} className="text-[#d946ef]" />
                <span>Sem taxa de adesão preliminar. Privacidade 100% garantida.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-fuchsia-950/80 border border-fuchsia-500/40 flex items-center justify-center text-[#d946ef]">
              <CheckCircle2 size={36} />
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">
              Bem-vinda à Rede!
            </h3>
            <p className="text-sm text-neutral-400 mb-6 max-w-sm mx-auto">
              Parabéns, <span className="text-white font-medium">{formData.name}</span>! Sua solicitação foi registrada com sucesso.
            </p>

            {/* Member Card Simulation */}
            <div className="relative bg-gradient-to-br from-neutral-900 via-neutral-950 to-fuchsia-950/40 border border-fuchsia-500/30 rounded-2xl p-5 text-left mb-6 shadow-xl">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#d946ef] font-semibold">
                    Cartão de Associada
                  </p>
                  <p className="text-lg font-bold text-white tracking-wide">
                    {formData.company || formData.name}
                  </p>
                </div>
                <Award size={24} className="text-[#d946ef]" />
              </div>

              <div className="flex justify-between items-end text-xs text-neutral-400 border-t border-neutral-800/80 pt-3">
                <div>
                  <span className="block text-[10px] text-neutral-400 uppercase">Membro</span>
                  <span className="text-neutral-200 font-mono">#{Math.floor(1000 + Math.random() * 9000)}</span>
                </div>
                <div className="text-right">
                  <span className="block text-[10px] text-neutral-400 uppercase">Status</span>
                  <span className="text-[#d946ef] font-medium">Ativação Confirmada</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white text-xs uppercase tracking-widest font-medium transition-colors"
            >
              Fechar e voltar ao site
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
