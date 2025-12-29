import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Sustentabilidade', href: '#sustentabilidade' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Conteúdo', href: '#blog' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0B192E]/80 backdrop-blur-xl py-3 border-b border-white/5 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-tech-cyan rounded-lg flex items-center justify-center font-black text-white text-xl shadow-[0_0_20px_rgba(0,144,158,0.3)] group-hover:scale-110 transition-transform">N</div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-white leading-none">NYRA</span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-tech-cyan leading-none mt-1 uppercase">Corporation</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="px-4 py-2 text-[11px] uppercase tracking-widest text-white/60 hover:text-tech-cyan hover:bg-white/5 rounded-lg transition-all font-bold"
            >
              {link.name}
            </a>
          ))}
          <div className="ml-6 pl-6 border-l border-white/10">
            <a 
              href="#contato" 
              className="bg-tech-cyan text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-deep-blue transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-[#00909E]/20"
            >
              Orçamento
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg border border-white/10 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Slide-over */}
      <div 
        className={`fixed inset-0 z-[-1] bg-black/60 backdrop-blur-md transition-opacity duration-500 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
      
      <div 
        className={`fixed top-0 right-0 h-screen w-[280px] bg-[#0B192E] border-l border-white/10 shadow-2xl transition-transform duration-500 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
             <span className="text-xs font-black text-tech-cyan uppercase tracking-widest">Navegação</span>
             <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white"><X className="w-5 h-5" /></button>
          </div>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-white/80 hover:text-tech-cyan transition-colors"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-auto">
            <a 
              href="#contato" 
              onClick={() => setIsOpen(false)}
              className="w-full bg-tech-cyan text-white py-4 rounded-xl font-black text-center block uppercase tracking-widest text-sm"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;