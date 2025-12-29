
import React, { useState } from 'react';
import { Target, Eye, ShieldCheck, Zap } from 'lucide-react';

const About: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const values = [
    { icon: <Zap className="w-6 h-6" />, title: 'Inovação', text: 'Sempre à frente com tecnologias de ponta.' },
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'Eficiência', text: 'Obras mais rápidas e com menor desperdício.' },
    { icon: <Target className="w-6 h-6" />, title: 'Sustentabilidade', text: 'Compromisso real com o meio ambiente.' },
    { icon: <Eye className="w-6 h-6" />, title: 'Visão Estratégica', text: 'Antecipando as demandas do futuro.' },
  ];

  return (
    <section id="sobre" className="py-24 bg-[#1A1C22] relative overflow-hidden">
      {/* Background Petrol Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0B192E] rounded-full blur-[120px] opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-5/12">
            <h2 className="text-[#00909E] uppercase tracking-[0.3em] font-bold mb-4 text-sm reveal">
              Sobre a NYRA
            </h2>
            <h3 className="text-5xl md:text-6xl font-black mb-8 leading-[1.1] text-white reveal" style={{ transitionDelay: '100ms' }}>
              Construindo as <br />
              <span className="text-[#00909E]">Soluções de Amanhã</span>
            </h3>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-12">
              <p className="reveal" style={{ transitionDelay: '200ms' }}>
                A NYRA Corporation é o ponto de encontro entre engenharia de precisão e sustentabilidade radical. Desenvolvemos ecossistemas inteligentes que integram construção industrializada, energia renovável e automação de última geração.
              </p>
              <p className="reveal" style={{ transitionDelay: '300ms' }}>
                Sediada em São Lourenço/MG, nossa missão é redefinir o conceito de habitar e produzir, criando infraestruturas prontas para os desafios climáticos e a nova era da mobilidade elétrica.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div 
                  key={i} 
                  className="flex flex-col space-y-3 p-5 bg-[#0B192E]/30 rounded-2xl border border-white/5 hover:border-[#00909E]/40 transition-all duration-500 group reveal" 
                  style={{ transitionDelay: `${400 + (i * 100)}ms` }}
                >
                  <div className="text-[#00909E] group-hover:scale-110 transition-transform duration-300">
                    {v.icon}
                  </div>
                  <h4 className="font-bold text-white">{v.title}</h4>
                  <p className="text-sm text-gray-500 leading-snug">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-7/12 relative group reveal-img">
            {/* Imagem de Alto Impacto com Fallback */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.7)] border border-white/10 aspect-square md:aspect-video lg:aspect-[4/3] xl:aspect-video bg-[#0B192E]">
              {!imageError ? (
                <img 
                  src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1600" 
                  alt="Engenharia Modular de Luxo NYRA" 
                  className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110 brightness-90"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#0B192E] via-[#1A1C22] to-[#00909E]/20 flex items-center justify-center p-12">
                   <div className="text-center opacity-40">
                      <Zap className="w-24 h-24 text-[#00909E] mx-auto mb-4" />
                      <p className="text-xl font-black uppercase tracking-widest">NYRA ARCHITECTURE</p>
                   </div>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 pointer-events-none" />
              
              <div className="absolute bottom-10 right-10 flex items-center pointer-events-none select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                <div className="flex items-center space-x-1">
                  <h4 className="text-7xl md:text-9xl font-black text-white tracking-[-0.08em] leading-none m-0">
                    NYRA<span className="text-[#00909E]">+</span>
                  </h4>
                </div>
              </div>

              <div className="absolute top-10 left-10 flex items-center space-x-3 bg-black/50 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full">
                <div className="w-3 h-3 bg-[#00909E] rounded-full animate-pulse shadow-[0_0_10px_#00909E]" />
                <span className="text-white text-[10px] font-black uppercase tracking-[0.25em]">Tecnologia Modular de Ponta</span>
              </div>
            </div>

            <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-[#00909E]/20 rounded-full blur-[120px] -z-1 opacity-50" />
            <div className="absolute top-1/4 -right-16 w-32 h-1/2 bg-gradient-to-b from-transparent via-[#00909E]/20 to-transparent blur-[100px] -z-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
