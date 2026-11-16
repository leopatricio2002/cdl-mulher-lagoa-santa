import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenMembership: () => void;
}

export interface NavItem {
  id: string;
  label: string;
  title: string;
}

export const navItems: NavItem[] = [
  { id: 'inicio', label: 'INÍCIO', title: 'Início' },
  { id: 'quem-somos', label: 'QUEM SOMOS', title: 'Quem Somos' },
  { id: 'beneficios', label: 'BENEFÍCIOS', title: 'Benefícios' },
  { id: 'parcerias', label: 'PARCERIAS', title: 'Parcerias' },
  { id: 'contato', label: 'CONTATO', title: 'Contato' },
  { id: 'localizacao', label: 'LOCALIZAÇÃO', title: 'Localização' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenMembership,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`sticky top-0 w-full z-40 transition-all duration-300 py-3 sm:py-4 border-none ${
        isScrolled 
          ? 'bg-[#580539]/95 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between relative">
        {/* Logo CDL Mulher no canto superior esquerdo */}
        <button
          onClick={() => scrollToSection('inicio')}
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-fuchsia-400 rounded-lg transition-transform hover:scale-105 cursor-pointer z-20 group"
          title="CDL Mulher Lagoa Santa - Início"
          aria-label="CDL Mulher Lagoa Santa"
        >
          <img
            src="/assets/aistudio/logo_cdl_mulher_trimmed.png"
            alt="Logo CDL Mulher Lagoa Santa"
            className="h-10 sm:h-12 md:h-13 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
          />
        </button>

        {/* Centered Navigation for Desktop */}
        <nav 
          aria-label="Navegação Principal" 
          className="hidden sm:flex items-center justify-center gap-6 md:gap-8 lg:gap-11 xl:gap-14 absolute left-1/2 -translate-x-1/2"
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-2 text-xs md:text-sm font-light uppercase tracking-[0.16em] transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-fuchsia-500 rounded px-1 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-white font-normal'
                    : 'text-neutral-300/80 hover:text-white'
                }`}
              >
                {item.label}
                
                {/* Active Indicator Line in vibrant magenta */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#d946ef] rounded-full shadow-[0_0_12px_rgba(217,70,239,0.8)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="sm:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-200 hover:text-white transition-colors focus:outline-none cursor-pointer"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-[#49042f] border-b border-fuchsia-800/40 px-6 py-5 mt-3 space-y-4 shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between text-left py-2.5 text-sm uppercase tracking-[0.2em] cursor-pointer ${
                      isActive ? 'text-[#d946ef] font-semibold' : 'text-neutral-200'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#d946ef]" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-fuchsia-900/50 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMembership();
                }}
                className="w-full py-3 rounded-full text-xs uppercase tracking-widest font-medium bg-[#d946ef] text-white text-center shadow-[0_4px_20px_rgba(217,70,239,0.35)] cursor-pointer"
              >
                Seja uma associada
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
