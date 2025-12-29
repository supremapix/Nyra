import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="bg-deep-blue py-16 md:py-24 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(#00909E_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center group reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative mb-4">
                <span className="text-5xl md:text-7xl font-black text-white group-hover:text-tech-cyan transition-colors duration-500 tabular-nums">
                  {stat.value}
                </span>
                <span className="text-2xl md:text-4xl font-black text-tech-cyan ml-1">
                  {stat.suffix}
                </span>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-tech-cyan/20 group-hover:w-16 group-hover:bg-tech-cyan transition-all duration-500" />
              </div>
              <div className="text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-[0.3em] mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;