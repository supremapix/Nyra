import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const title = "Construções Inteligentes. Energia Sustentável.";

  return (
    <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920")',
          animation: 'slowZoom 20s infinite alternate'
        }}
      />
      {/* Multi-layered overlays for depth and readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1C22]/80 via-[#1A1C22]/60 to-[#1A1C22]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B192E] via-transparent to-transparent opacity-60" />
      
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-5xl">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 mb-8 bg-tech-cyan/10 border border-tech-cyan/20 text-tech-cyan text-[10px] md:text-xs font-black uppercase tracking-[0.25em] rounded-full animate-fade-up opacity-0">
            <span className="w-2 h-2 bg-tech-cyan rounded-full animate-pulse" />
            <span>Engenharia • Tecnologia • Energia</span>
          </div>
          
          <div className="relative">
            <h1 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8 glitch-text animate-fade-up opacity-0 delay-200 tracking-tighter text-white" 
              data-text={title}
            >
              Construções <span className="text-tech-cyan">Inteligentes.</span><br className="hidden md:block" />
              Energia <span className="text-tech-cyan">Sustentável.</span>
            </h1>
          </div>
          
          <p className="text-base md:text-2xl text-gray-300/80 mb-12 max-w-2xl font-light leading-relaxed animate-fade-up opacity-0 delay-400">
            A NYRA Corporation integra engenharia modular, inteligência predial e mobilidade elétrica para projetar o futuro do ambiente construído.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-up opacity-0 delay-600">
            <a 
              href="#contato" 
              className="w-full sm:w-auto bg-tech-cyan text-white px-10 py-5 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-deep-blue transition-all transform hover:-translate-y-1 shadow-2xl shadow-[#00909E]/30 text-center flex items-center justify-center space-x-3"
            >
              <span>Consultoria Técnica</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#portfolio" 
              className="w-full sm:w-auto border border-white/20 text-white px-10 py-5 rounded-xl font-black text-sm uppercase tracking-widest hover:border-tech-cyan hover:text-tech-cyan transition-all text-center backdrop-blur-md"
            >
              Explorar Portfólio
            </a>
          </div>
        </div>
      </div>

      {/* Pillars - Hidden on small mobile */}
      <div className="absolute bottom-12 left-0 w-full hidden sm:block animate-fade-up opacity-0 delay-600">
        <div className="container mx-auto px-6 flex flex-wrap justify-between items-center text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">
          <div className="flex items-center space-x-3 group cursor-default">
            <span className="text-tech-cyan font-black">01</span>
            <span className="group-hover:text-white transition-colors">Engenharia Modular</span>
          </div>
          <div className="flex items-center space-x-3 group cursor-default">
            <span className="text-tech-cyan font-black">02</span>
            <span className="group-hover:text-white transition-colors">Energia Solar Grid</span>
          </div>
          <div className="flex items-center space-x-3 group cursor-default">
            <span className="text-tech-cyan font-black">03</span>
            <span className="group-hover:text-white transition-colors">Mobilidade EV</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>

      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1.1); }
          to { transform: scale(1.3); }
        }

        .glitch-text {
          position: relative;
        }

        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          pointer-events: none;
          opacity: 0.2;
        }

        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          animation: glitch-anim-1 4s infinite linear alternate-reverse;
        }

        .glitch-text::after {
          left: -2px;
          text-shadow: -2px 0 #00fff9;
          animation: glitch-anim-2 3s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim-1 {
          0%, 100% { clip-path: inset(50% 0 30% 0); }
          20% { clip-path: inset(20% 0 60% 0); }
          40% { clip-path: inset(80% 0 10% 0); }
          60% { clip-path: inset(10% 0 80% 0); }
        }

        @keyframes glitch-anim-2 {
          0%, 100% { clip-path: inset(30% 0 50% 0); }
          50% { clip-path: inset(60% 0 20% 0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;