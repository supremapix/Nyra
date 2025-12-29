
import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';

const PortfolioItem: React.FC<{ project: any }> = ({ project }) => {
  const [offset, setOffset] = useState(0);
  const [imageError, setImageError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      const clampedProgress = Math.max(0, Math.min(1, progress));
      const parallaxVal = (clampedProgress - 0.5) * 50;
      setOffset(parallaxVal);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="group relative h-[450px] overflow-hidden rounded-2xl border border-white/5 bg-[#0B192E]/20"
    >
      {/* Parallax Image Container */}
      <div 
        className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
        style={{ transform: `translateY(${offset}px)` }}
      >
        {!imageError ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 transform group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-[#1A1C22] flex items-center justify-center">
             <div className="text-center opacity-10">
                <span className="text-6xl font-black">NYRA</span>
             </div>
          </div>
        )}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B192E] via-[#0B192E]/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 p-8 w-full translate-y-6 group-hover:translate-y-0 transition-transform duration-500 z-10">
        <div className="flex items-center space-x-2 mb-3">
          <span className="w-8 h-px bg-tech-cyan"></span>
          <span className="text-tech-cyan text-xs font-bold uppercase tracking-widest">{project.category}</span>
        </div>
        <h4 className="text-2xl md:text-3xl font-black mb-3">{project.title}</h4>
        <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 max-w-sm">
          {project.details}
        </p>
        <div className="mt-8 h-[2px] w-0 group-hover:w-full bg-tech-cyan transition-all duration-1000 ease-in-out" />
      </div>

      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/5 group-hover:border-tech-cyan/30 transition-colors duration-500 rounded-tr-xl"></div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Containers', 'LSF', 'Energia Solar', 'Eletropontos'];

  const filteredProjects = filter === 'Todos' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-32 bg-[#1A1C22] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#00909E]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10">
          <div className="max-w-2xl reveal">
            <h2 className="text-tech-cyan uppercase tracking-[0.3em] font-bold mb-6 text-sm flex items-center">
              <span className="w-10 h-px bg-tech-cyan mr-4"></span>
              Excelência em Execução
            </h2>
            <h3 className="text-5xl md:text-7xl font-black leading-none">
              Nossos <br />
              <span className="text-tech-cyan">Projetos</span>
            </h3>
            <p className="text-gray-400 mt-8 text-lg font-light leading-relaxed">
              Explore como transformamos containers e estruturas industrializadas em verdadeiras obras de arte funcionais e sustentáveis.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 reveal" style={{ transitionDelay: '200ms' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-xl text-sm font-black border transition-all duration-300 uppercase tracking-widest ${
                  filter === cat 
                    ? 'bg-tech-cyan border-tech-cyan text-white shadow-lg shadow-[#00909E]/30 scale-105' 
                    : 'border-white/10 text-gray-500 hover:border-tech-cyan/50 hover:text-tech-cyan'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <PortfolioItem key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-20 text-center reveal">
          <p className="text-gray-500 mb-8 italic">Quer ver mais detalhes técnicos destes projetos?</p>
          <a 
            href="#contato" 
            className="inline-flex items-center space-x-4 text-tech-cyan font-bold hover:text-white transition-colors group"
          >
            <span className="text-xl">Agendar apresentação técnica</span>
            <span className="w-12 h-12 rounded-full border border-tech-cyan flex items-center justify-center group-hover:bg-tech-cyan transition-all">
               →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
