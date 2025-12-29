
import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#1A1C22]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 reveal">
          <h2 className="text-tech-cyan uppercase tracking-widest font-bold mb-4">Dúvidas Frequentes</h2>
          <h3 className="text-4xl font-black">Esclarecendo Suas <span className="text-tech-cyan">Dúvidas</span></h3>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => (
            <div key={idx} className="bg-[#0B192E]/40 border border-white/5 rounded-2xl overflow-hidden reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg md:text-xl pr-8">{faq.question}</span>
                {openIndex === idx ? <Minus className="text-tech-cyan" /> : <Plus className="text-tech-cyan" />}
              </button>
              <div className={`transition-all duration-300 ${openIndex === idx ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <p className="text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
