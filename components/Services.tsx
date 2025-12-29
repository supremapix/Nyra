
import React, { useState } from 'react';
import { SERVICES } from '../constants.tsx';
import { CheckCircle2, Box } from 'lucide-react';

const ServiceCard: React.FC<{ service: any; idx: number }> = ({ service, idx }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-3xl bg-[#0B192E]/40 border border-white/5 hover:border-tech-cyan/30 transition-all duration-700 reveal shadow-xl"
      style={{ transitionDelay: `${idx * 150}ms` }}
    >
      <div className="flex flex-col h-full">
        <div className="w-full h-64 md:h-80 overflow-hidden bg-deep-blue relative">
          {!imageError ? (
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 transform group-hover:scale-110"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-deep-blue to-black flex items-center justify-center">
              <Box className="w-16 h-16 text-tech-cyan/20" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-transparent to-transparent opacity-80" />
        </div>

        <div className="p-8 md:p-12 flex flex-col flex-grow">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-14 h-14 bg-tech-cyan/10 rounded-2xl flex items-center justify-center text-tech-cyan group-hover:bg-tech-cyan group-hover:text-white transition-all duration-500 shadow-lg">
              {service.icon}
            </div>
            <h4 className="text-xl md:text-2xl font-black text-white group-hover:text-tech-cyan transition-colors leading-tight">
              {service.title}
            </h4>
          </div>
          
          <ul className="space-y-4 mb-10 flex-grow">
            {service.description.map((item: string, i: number) => (
              <li key={i} className="flex items-start space-x-3 text-gray-400 text-sm leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-tech-cyan shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-8 border-t border-white/5">
            <button className="text-tech-cyan text-xs font-black uppercase tracking-[0.2em] flex items-center space-x-3 hover:translate-x-2 transition-transform group/btn">
              <span>Especificações Técnicas</span>
              <span className="w-8 h-8 rounded-full border border-tech-cyan/30 flex items-center justify-center group-hover/btn:bg-tech-cyan group-hover/btn:text-white transition-colors">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-[#1A1C22] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-8 reveal">
          <div className="max-w-2xl">
            <h2 className="text-tech-cyan uppercase tracking-[0.3em] font-black mb-6 text-xs flex items-center">
              <span className="w-10 h-px bg-tech-cyan mr-4" />
              Expertise de Engenharia
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Soluções Modulares <br />
              <span className="text-tech-cyan">Alta Performance</span>
            </h3>
          </div>
          <p className="text-gray-400 text-lg max-w-md font-light">
            Integramos tecnologia disruptiva em cada etapa da construção, garantindo eficiência energética absoluta e precisão industrial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={idx} service={service} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
