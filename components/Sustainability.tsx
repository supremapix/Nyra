
import React, { useState } from 'react';
import { Leaf, Globe, Zap, Recycle } from 'lucide-react';

const Sustainability: React.FC = () => {
  const [imgErrors, setImgErrors] = useState<{ [key: string]: boolean }>({});

  const highlights = [
    { icon: <Recycle className="w-8 h-8" />, title: 'Zero Desperdício', text: 'Processo industrializado que elimina entulho de obra.' },
    { icon: <Leaf className="w-8 h-8" />, title: 'Baixa Emissão', text: 'Uso de materiais com menor pegada de carbono.' },
    { icon: <Zap className="w-8 h-8" />, title: 'Eficiência Energética', text: 'Isolamento térmico superior para menor consumo.' },
    { icon: <Globe className="w-8 h-8" />, title: 'Smart Cities', text: 'Infraestrutura preparada para redes inteligentes.' },
  ];

  const handleImageError = (id: string) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  const images = [
    { id: 'env1', src: "https://images.unsplash.com/photo-1509391366360-fe5bb629550d?auto=format&fit=crop&q=80&w=600", alt: "Sustentabilidade Solar" },
    { id: 'env2', src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600", alt: "Engenharia Limpa" }
  ];

  return (
    <section id="sustentabilidade" className="py-24 bg-[#0B192E]/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00909E]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 reveal">
            <h2 className="text-tech-cyan uppercase tracking-widest font-bold mb-4">Compromisso NYRA</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-8">Tecnologia que <br /><span className="text-tech-cyan">Preserva o Futuro</span></h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Na NYRA, a sustentabilidade não é um diferencial - é o nosso fundamento. Cada projeto é concebido para maximizar a eficiência de recursos, desde a escolha do aço até a integração de sistemas fotovoltaicos de última geração.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {highlights.map((h, i) => (
                <div key={i} className="flex space-x-4 group">
                  <div className="text-tech-cyan shrink-0 group-hover:scale-110 transition-transform">{h.icon}</div>
                  <div>
                    <h4 className="font-bold mb-1 text-white">{h.title}</h4>
                    <p className="text-sm text-gray-500">{h.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 reveal-img">
            {images.map((img, idx) => (
              <div key={img.id} className={`rounded-2xl overflow-hidden bg-[#0B192E] h-80 ${idx === 0 ? 'transform translate-y-8' : ''}`}>
                {!imgErrors[img.id] ? (
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover grayscale opacity-80"
                    onError={() => handleImageError(img.id)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#0B192E] to-[#1A1C22] flex items-center justify-center">
                    <Leaf className="w-12 h-12 text-[#00909E] opacity-20" />
                  </div>
                )}
              </div>
            ))}
            <div className="col-span-2 bg-tech-cyan/10 border border-tech-cyan/20 p-8 rounded-2xl backdrop-blur-sm mt-4">
              <h5 className="text-2xl font-bold mb-2 text-white">Construindo Cidades Inteligentes</h5>
              <p className="text-gray-400">Integramos carregadores de veículos elétricos e gestão de dados em nossas estruturas modulares de luxo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
