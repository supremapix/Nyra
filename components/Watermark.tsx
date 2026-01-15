
import React from 'react';

const Watermark: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden select-none opacity-[0.03] md:opacity-[0.05]">
      <div 
        className="absolute inset-[-100%] flex flex-wrap gap-x-32 gap-y-48 items-center justify-center transform -rotate-[25deg] origin-center"
      >
        {Array.from({ length: 120 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <a 
              href="https://www.supremasite.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="pointer-events-auto cursor-pointer"
            >
              <span className="text-sm md:text-lg font-black tracking-widest uppercase whitespace-nowrap text-white">
                Desenvolvido <span className="text-[#ff0055]">❤️</span> por Suprema Sites Express
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watermark;
