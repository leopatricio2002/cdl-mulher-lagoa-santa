import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection, TextLayoutCadence } from './components/HeroSection';
import { MembershipModal } from './components/MembershipModal';
import { ReferenceViewerModal } from './components/ReferenceViewerModal';
import { CadenceSelector } from './components/CadenceSelector';
import { 
  Handshake, 
  Mail, 
  MapPin, 
  Send,
  MessageCircle,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';
import imgBeneficioConexao from './assets/images/beneficio_conexao_1794834634141.jpg';
import imgBeneficioDesenvolvimento from './assets/images/beneficio_desenvolvimento_1794834633400.jpg';
import imgBeneficioVisibilidade from './assets/images/beneficio_visibilidade_1794834633692.jpg';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [currentBenefit, setCurrentBenefit] = useState(0);
  const [cadence, setCadence] = useState<TextLayoutCadence>('cadence-balanced');
  const [membershipModalOpen, setMembershipModalOpen] = useState(false);
  const [referenceModalOpen, setReferenceModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  // Sincroniza a aba ativa conforme o usuário rola a página (IntersectionObserver)
  useEffect(() => {
    const sectionIds = ['inicio', 'quem-somos', 'beneficios', 'parcerias', 'contato', 'localizacao'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveTab(id);
            }
          });
        },
        {
          rootMargin: '-30% 0px -40% 0px',
          threshold: 0.1,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const baseWhatsAppMessage = 'Gostaria de saber mais sobre a CDL Lagoa Santa';
  const extraWhatsAppParts = [
    contactForm.name.trim() ? `Nome: ${contactForm.name.trim()}` : '',
    contactForm.email.trim() ? `E-mail: ${contactForm.email.trim()}` : '',
    contactForm.message.trim() ? `Sobre a empresa: ${contactForm.message.trim()}` : '',
  ].filter(Boolean);
  const fullWhatsAppText =
    extraWhatsAppParts.length > 0
      ? `${baseWhatsAppMessage}\n\n${extraWhatsAppParts.join('\n')}`
      : baseWhatsAppMessage;
  const whatsappContactUrl = `https://wa.me/5531989787066?text=${encodeURIComponent(fullWhatsAppText)}`;

  const scrollToContact = () => {
    const el = document.getElementById('contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative text-white flex flex-col justify-between selection:bg-[#d946ef] selection:text-white bg-[#580539] overflow-x-hidden">
      {/* Barra de Navegação Fixa com visual fosco e logo da CDL Mulher */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenMembership={() => setMembershipModalOpen(true)}
        onOpenReference={() => setReferenceModalOpen(true)}
      />

      {/* 
        CONTEÚDO EM PÁGINA ÚNICA (ONE-PAGE SCROLL)
        Todas as seções são visualizadas continuamente conforme o usuário rola para baixo
      */}
      <main className="flex-1 flex flex-col w-full -mt-[64px] sm:-mt-[80px]">
        {/* ========================================================================= */}
        {/* 1. SEÇÃO INÍCIO (HERO COM FUNDO EXCLUSIVO DA FOTO DAS MULHERES)          */}
        {/* ========================================================================= */}
        <section id="inicio" className="relative min-h-screen pt-[64px] sm:pt-[80px] flex flex-col justify-center overflow-hidden">
          {/* Fundo Desktop: mulheres à direita, texto à esquerda */}
          <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <img
              src="/assets/aistudio/image_d7b6c470_hd.jpg"
              alt="Fundo da página em alta definição com mulheres empreendedoras reunidas"
              className="w-full h-full object-cover object-right lg:object-right opacity-100 contrast-[1.03] saturate-[1.02]"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
            {/* Gradiente sutil no rodapé da seção inicial para fusão perfeita com o fundo #580539 */}
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#580539] via-[#580539]/60 to-transparent pointer-events-none" />
          </div>

          {/* Fundo Mobile: tela cheia contínua, mulheres perfeitamente ao centro */}
          <div className="md:hidden absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <img
              src="/assets/aistudio/mobile_full_bg.jpg"
              alt="Fundo da página mobile em alta definição com mulheres empreendedoras reunidas ao centro"
              className="w-full h-full object-cover object-top opacity-100 contrast-[1.03] saturate-[1.02]"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
            {/* Gradiente sutil no rodapé para fusão contínua com a próxima seção */}
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#580539] via-[#580539]/60 to-transparent pointer-events-none" />
          </div>

          {/* Conteúdo Hero */}
          <div className="relative z-10 w-full">
            <HeroSection
              onOpenMembership={() => setMembershipModalOpen(true)}
              cadence={cadence}
            />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. SEÇÃO QUEM SOMOS (ADAPTADA CONFORME A IMAGEM DE REFERÊNCIA)           */}
        {/* ========================================================================= */}
        <section
          id="quem-somos"
          className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-20 sm:py-28 scroll-mt-20 w-full"
        >
          {/* Título Principal Superior: "Conheça a CDL Mulher" (sem a tag "lagoa santa - mg") */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-sans">
              Conheça a CDL Mulher
            </h2>
          </div>

          {/* Layout 2 Colunas: Texto à esquerda ("Quem somos") e "FOTO" à direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Coluna Esquerda: Texto institucional com tipografia ajustada ao site */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                Quem somos
              </h3>

              <p className="text-neutral-100/90 text-sm sm:text-base lg:text-lg leading-relaxed font-sans font-light">
                Com o apoio da CDL Lagoa Santa a CDL Mulher Lagoa Santa nasceu para transformar a forma como as mulheres empreendem na cidade.
              </p>

              <p className="text-neutral-100/90 text-sm sm:text-base lg:text-lg leading-relaxed font-sans font-light">
                É um espaço pensado para unir empresárias, lojistas e empreendedoras em torno de algo que vai além dos negócios: conexão real, crescimento genuíno e desenvolvimento de lideranças femininas.
              </p>

              <p className="text-neutral-100/90 text-sm sm:text-base lg:text-lg leading-relaxed font-sans font-light">
                Por meio de eventos, capacitações e trocas que fortalecem tanto a mulher quanto o negócio, a CDL Mulher acredita que uma empreendedora bem conectada, bem preparada e bem apoiada tem tudo para ir mais longe — e fazer de Lagoa Santa uma cidade com negócios mais fortes.
              </p>
            </div>

            {/* Coluna Direita: Fotografia oficial da CDL Mulher Lagoa Santa */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-lg rounded-3xl overflow-hidden border border-[#760c4f]/80 shadow-[0_16px_50px_rgba(0,0,0,0.5)] group bg-[#300220]">
                <img
                  src="/assets/aistudio/image_7fafdc26.png"
                  alt="Mulheres empreendedoras e líderes da CDL Mulher Lagoa Santa"
                  className="w-full h-auto aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] object-cover object-center group-hover:scale-105 transition-transform duration-500 block"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
                <div className="absolute inset-0 rounded-3xl pointer-events-none ring-1 ring-inset ring-white/15" />
              </div>
            </div>
          </div>
        </section>

        {/* Divisor sutil entre seções */}
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-[#760c4f]/40 to-transparent" />
        </div>

        {/* ========================================================================= */}
        {/* 3. SEÇÃO BENEFÍCIOS (BARALHO DE CARDS EMPILHADOS)                         */}
        {/* ========================================================================= */}
        <section
          id="beneficios"
          className="relative max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 py-20 sm:py-28 scroll-mt-20 w-full"
        >
          {/* Título Principal Superior: "Benefícios" */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-sans">
              Benefícios
            </h2>
          </div>

          {/* Container do Baralho de Cards Empilhados */}
          <div className="relative w-full max-w-4xl mx-auto h-[460px] sm:h-[400px] md:h-[340px] px-2 sm:px-6">
            {[
              {
                id: 1,
                title: 'Conexão',
                description:
                  'Trocas que indicam, fazem parceria e fortalecem o seu negócio.',
                image: imgBeneficioConexao,
                alt: 'Mulheres empreendedoras conversando e fazendo conexões de negócios',
              },
              {
                id: 2,
                title: 'Desenvolvimento',
                description:
                  'Capacitações e vivências que ajudam você a decidir com mais segurança.',
                image: imgBeneficioDesenvolvimento,
                alt: 'Mulheres empreendedoras participando de capacitação e mentoria estratégica',
              },
              {
                id: 3,
                title: 'Visibilidade',
                description:
                  'Espaço para seu negócio aparecer e ser lembrado no comércio local.',
                image: imgBeneficioVisibilidade,
                alt: 'Empreendedora sorridente em seu negócio local com destaque e visibilidade',
              },
            ].map((benefit, idx) => {
              // diff 0 = carta ativa na frente; diff 1 = carta logo atrás; diff 2 = carta no fundo do baralho
              const diff = (idx - currentBenefit + 3) % 3;

              return (
                <motion.div
                  key={benefit.id}
                  animate={{
                    x: diff === 0 ? 0 : diff === 1 ? 14 : 28,
                    y: diff === 0 ? 0 : diff === 1 ? -12 : -24,
                    scale: diff === 0 ? 1 : diff === 1 ? 0.96 : 0.92,
                    zIndex: diff === 0 ? 30 : diff === 1 ? 20 : 10,
                    opacity: diff === 0 ? 1 : diff === 1 ? 0.88 : 0.65,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 280,
                    damping: 24,
                  }}
                  onClick={() => {
                    if (diff === 0) {
                      setCurrentBenefit((prev) => (prev + 1) % 3);
                    } else {
                      setCurrentBenefit(idx);
                    }
                  }}
                  className={`absolute inset-0 rounded-[26px] sm:rounded-[34px] overflow-hidden border cursor-pointer select-none transition-all shadow-2xl ${
                    diff === 0
                      ? 'border-[#760c4f] bg-[#3a0324] ring-1 ring-white/15'
                      : diff === 1
                      ? 'border-[#620942] bg-[#2d021c]'
                      : 'border-[#4c0733] bg-[#200114]'
                  } flex flex-col md:flex-row`}
                  title={diff === 0 ? 'Clique para passar para o próximo benefício' : `Ver ${benefit.title}`}
                >
                  {/* Botões redondos de navegação (somente seta, sem texto) dentro do card frontal */}
                  {diff === 0 && (
                    <>
                      {/* Seta Anterior (Botão redondo) */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentBenefit((prev) => (prev - 1 + 3) % 3);
                        }}
                        className="absolute left-3 sm:left-4 top-24 sm:top-26 md:top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1f0113]/90 hover:bg-[#d946ef] text-white border border-[#760c4f] hover:border-white/50 flex items-center justify-center shadow-2xl backdrop-blur-md cursor-pointer transition-all hover:scale-110 active:scale-95 group/arrow focus:outline-none focus:ring-2 focus:ring-[#d946ef]"
                        aria-label="Benefício anterior"
                        title="Benefício anterior"
                      >
                        <ChevronLeft size={20} className="transition-transform group-hover/arrow:-translate-x-0.5" />
                      </button>

                      {/* Seta Próximo (Botão redondo) */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentBenefit((prev) => (prev + 1) % 3);
                        }}
                        className="absolute right-3 sm:right-4 top-24 sm:top-26 md:top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1f0113]/90 hover:bg-[#d946ef] text-white border border-[#760c4f] hover:border-white/50 flex items-center justify-center shadow-2xl backdrop-blur-md cursor-pointer transition-all hover:scale-110 active:scale-95 group/arrow focus:outline-none focus:ring-2 focus:ring-[#d946ef]"
                        aria-label="Próximo benefício"
                        title="Próximo benefício"
                      >
                        <ChevronRight size={20} className="transition-transform group-hover/arrow:translate-x-0.5" />
                      </button>
                    </>
                  )}

                  {/* Lado Esquerdo: Foto do Benefício */}
                  <div className="md:w-5/12 h-48 sm:h-52 md:h-full relative overflow-hidden bg-[#28021a] border-b md:border-b-0 md:border-r border-[#760c4f]/80 shrink-0">
                    <img
                      src={benefit.image}
                      alt={benefit.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent pointer-events-none"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Lado Direito: Título do Benefício e Texto descritivo */}
                  <div className="flex-1 md:w-7/12 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 sm:px-8 py-6 md:pl-10 md:pr-20 md:py-10 space-y-2.5 sm:space-y-4">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase font-sans">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-200/90 text-sm sm:text-base lg:text-lg leading-relaxed font-sans font-light">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Divisor sutil entre seções */}
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-[#760c4f]/40 to-transparent" />
        </div>

        {/* ========================================================================= */}
        {/* 4. SEÇÃO PARCERIAS                                                        */}
        {/* ========================================================================= */}
        <section
          id="parcerias"
          className="relative max-w-5xl mx-auto px-6 sm:px-12 py-20 sm:py-28 scroll-mt-20 w-full"
        >
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d946ef] block mb-2">
              Ecossistema Colaborativo
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
              Nossas Parcerias
            </h2>
            <p className="text-neutral-300/90 text-sm sm:text-base leading-relaxed">
              Construímos pontes com empresas líderes de tecnologia, fundos de capital e hubs para acelerar empreendedoras.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {[
              { name: 'Hub Inovação SP', type: 'Espaço & Coworking', discount: 'Até 40% OFF' },
              { name: 'Venture Capital Mulheres', type: 'Fundos Anjo', discount: 'Aporte Direto' },
              { name: 'Cloud & Tech Solutions', type: 'Infraestrutura SaaS', discount: '$5.000 em créditos' },
              { name: 'Assessoria Contábil Pro', type: 'Legal & Fiscal', discount: 'Condição Especial' },
            ].map((partner, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#3f0329]/80 border border-[#760c4f]/50 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <Handshake size={20} className="text-[#d946ef] mb-3" />
                  <h4 className="text-sm font-bold text-white mb-1">{partner.name}</h4>
                  <p className="text-[11px] text-neutral-300">{partner.type}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#60083e]">
                  <span className="text-[10px] font-semibold text-[#d946ef] uppercase tracking-wider block">
                    {partner.discount}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#3f0329]/90 border border-[#760c4f]/60 backdrop-blur-sm rounded-3xl p-8 sm:p-10 text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
              Quer ser uma empresa parceira da Rede?
            </h3>
            <p className="text-neutral-300/90 text-xs sm:text-sm mb-6 leading-relaxed">
              Ofereça soluções, benefícios ou patrocine eventos e iniciativas que fomentam o protagonismo de mulheres no mercado.
            </p>
            <div className="flex justify-center">
              <button
                onClick={scrollToContact}
                className="px-8 py-3.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Falar com Novos Negócios
              </button>
            </div>
          </div>
        </section>

        {/* Divisor sutil entre seções */}
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-[#760c4f]/40 to-transparent" />
        </div>

        {/* ========================================================================= */}
        {/* 5. SEÇÃO CONTATO                                                          */}
        {/* ========================================================================= */}
        <section
          id="contato"
          className="relative max-w-5xl mx-auto px-6 sm:px-12 py-20 sm:py-28 scroll-mt-20 w-full"
        >
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d946ef] block mb-2">
              Canais Oficiais
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
              Entre em Contato
            </h2>
            <p className="text-neutral-300/90 text-sm sm:text-base leading-relaxed">
              Tire dúvidas sobre a associação, agende reuniões institucionais ou converse diretamente com nossa equipe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Lista de informações de contato */}
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-[#3f0329]/80 border border-[#760c4f]/50 backdrop-blur-sm flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#300220] text-[#d946ef] shrink-0 border border-[#6b0846]">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    WhatsApp da Comunidade
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1">
                    Atendimento rápido de segunda a sexta, das 09h às 18h.
                  </p>
                  <a
                    href="https://wa.me/5531989787066"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#d946ef] hover:underline mt-2 font-medium"
                  >
                    <span>(31) 98978-7066</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#3f0329]/80 border border-[#760c4f]/50 backdrop-blur-sm flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#300220] text-[#d946ef] shrink-0 border border-[#6b0846]">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    E-mail Institucional
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1">
                    Parcerias, novas associadas e suporte geral.
                  </p>
                  <a
                    href="mailto:cdlmulher@cdllagoasanta.com.br"
                    className="text-xs text-[#d946ef] hover:underline mt-2 inline-block font-medium"
                  >
                    cdlmulher@cdllagoasanta.com.br
                  </a>
                </div>
              </div>
            </div>

            {/* Formulário de Contato com redirecionamento para WhatsApp */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#3f0329]/90 border border-[#760c4f]/60 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">
                Envie uma mensagem
              </h3>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Como podemos te chamar?"
                    className="w-full bg-[#2a021c] border border-[#6b0846] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#d946ef]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1">
                    Seu E-mail
                  </label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="voce@dominio.com"
                    className="w-full bg-[#2a021c] border border-[#6b0846] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#d946ef]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    rows={3}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Conte mais sobre sua empresa"
                    className="w-full bg-[#2a021c] border border-[#6b0846] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#d946ef]"
                  />
                </div>

                <a
                  href={whatsappContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-[#d946ef] hover:bg-[#e879f9] text-white text-xs uppercase tracking-widest font-medium btn-glow flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Enviar Mensagem</span>
                  <Send size={14} />
                </a>
              </form>
            </div>
          </div>
        </section>

        {/* Divisor sutil entre seções */}
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-[#760c4f]/40 to-transparent" />
        </div>

        {/* ========================================================================= */}
        {/* 6. SEÇÃO LOCALIZAÇÃO (CONFORME IMAGEM DE REFERÊNCIA)                      */}
        {/* ========================================================================= */}
        <section
          id="localizacao"
          className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-20 sm:py-28 scroll-mt-20 w-full"
        >
          {/* Título Principal Superior: "Localização" */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-sans">
              Localização
            </h2>
          </div>

          {/* Layout 2 Colunas: Foto do Maps com link à esquerda | Local e Endereço à direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Coluna Esquerda: Foto/Prévia do Google Maps com Link interativo de destino */}
            <div className="lg:col-span-7 w-full">
              <a
                href="https://www.google.com/maps/search/?api=1&query=CDL+Lagoa+Santa+R.+Pinto+Alves,+4810+-+Vila+Maria+II,+Lagoa+Santa+-+MG,+33400-000"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full rounded-3xl overflow-hidden border border-[#760c4f]/80 shadow-[0_16px_50px_rgba(0,0,0,0.5)] bg-[#300220] transition-all duration-300 hover:border-[#d946ef] hover:shadow-[0_20px_60px_rgba(217,70,239,0.3)] cursor-pointer"
                title="Clique para abrir a CDL Lagoa Santa no Google Maps"
              >
                {/* Visualização do Mapa do Google Maps */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-[#260219]">
                  <iframe
                    title="Mapa Google Maps - CDL Lagoa Santa"
                    src="https://maps.google.com/maps?q=CDL+Lagoa+Santa,+R.+Pinto+Alves,+4810+-+Vila+Maria+II,+Lagoa+Santa+-+MG,+33400-000&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 pointer-events-none filter contrast-[1.08] saturate-[1.1]"
                    loading="lazy"
                  />
                  {/* Borda interna sutil */}
                  <div className="absolute inset-0 rounded-3xl pointer-events-none ring-1 ring-inset ring-white/15" />
                </div>

                {/* Banner de Ação sobre o mapa ao passar o mouse */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 sm:p-6 flex items-center justify-between gap-3 pointer-events-none transition-all group-hover:from-[#580539]/95">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#d946ef] flex items-center justify-center text-white shadow-md">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">CDL Lagoa Santa</span>
                      <span className="text-[11px] text-neutral-300">Abrir destino no Google Maps</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 group-hover:bg-[#d946ef] text-white text-xs font-medium border border-white/20 transition-colors">
                    <span>Ver no Maps</span>
                    <ExternalLink size={12} />
                  </span>
                </div>
              </a>
            </div>

            {/* Coluna Direita: Informações "Local" e "Endereço" */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-left">
              {/* Campo Local */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#3f0329]/90 border border-[#760c4f]/80 backdrop-blur-sm shadow-xl hover:border-fuchsia-500/40 transition-colors">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d946ef] block mb-2">
                  Local:
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight">
                  CDL Lagoa Santa
                </h3>
              </div>

              {/* Campo Endereço */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#3f0329]/90 border border-[#760c4f]/80 backdrop-blur-sm shadow-xl hover:border-fuchsia-500/40 transition-colors">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d946ef] block mb-2">
                  Endereço:
                </span>
                <p className="text-base sm:text-lg text-neutral-100 font-sans font-light leading-relaxed">
                  R. Pinto Alves, 4810 - Vila Maria II, Lagoa Santa - MG, 33400-000
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé elegante do site */}
      <footer className="w-full border-t border-[#760c4f]/50 bg-[#42042b] py-8 px-6 text-center text-xs text-neutral-300">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/aistudio/logo_cdl_mulher_trimmed.png"
              alt="Logo CDL Mulher Lagoa Santa"
              className="h-8 w-auto object-contain"
            />
            <span className="text-neutral-400 text-[11px]">
              © {new Date().getFullYear()} CDL Mulher Lagoa Santa. Todos os direitos reservados.
            </span>
          </div>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveTab('inicio');
            }}
            className="text-[11px] uppercase tracking-widest text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            Voltar ao topo ↑
          </button>
        </div>
      </footer>

      {/* Discrete bottom bar controls for testing line cadence and verifying against reference */}
      <CadenceSelector
        cadence={cadence}
        setCadence={setCadence}
        onOpenReference={() => setReferenceModalOpen(true)}
      />

      {/* Interactive Modals */}
      <MembershipModal
        isOpen={membershipModalOpen}
        onClose={() => setMembershipModalOpen(false)}
      />

      <ReferenceViewerModal
        isOpen={referenceModalOpen}
        onClose={() => setReferenceModalOpen(false)}
      />
    </div>
  );
}
