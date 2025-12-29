
import React from 'react';
import { Phone, Mail, Instagram, MapPin, Send, MessageSquare } from 'lucide-react';
import { CITIES } from '../constants.tsx';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-[#0B192E]/20 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-tech-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5 reveal">
            <h2 className="text-tech-cyan uppercase tracking-[0.3em] font-black mb-6 text-xs flex items-center">
              <span className="w-10 h-px bg-tech-cyan mr-4" />
              Canais de Atendimento
            </h2>
            <h3 className="text-4xl md:text-6xl font-black mb-10 text-white leading-tight">
              Inicie seu <br />
              <span className="text-tech-cyan">Projeto Agora</span>
            </h3>
            
            <div className="space-y-6 mb-16">
              {[
                { icon: <Phone className="w-5 h-5" />, label: 'WhatsApp / Call', value: '(35) 99929-2725' },
                { icon: <Mail className="w-5 h-5" />, label: 'E-mail Corporate', value: 'nyracorp@gmail.com' },
                { icon: <MapPin className="w-5 h-5" />, label: 'Unidade Industrial', value: 'São Lourenço, MG - Brasil' },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-6 group p-4 rounded-2xl border border-transparent hover:border-white/5 hover:bg-white/5 transition-all">
                  <div className="w-12 h-12 bg-tech-cyan/10 rounded-xl flex items-center justify-center text-tech-cyan group-hover:bg-tech-cyan group-hover:text-white transition-all shadow-lg">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest font-black mb-1">{item.label}</p>
                    <p className="text-lg font-bold text-white group-hover:text-tech-cyan transition-colors">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="w-5 h-5 text-tech-cyan" />
                <h4 className="font-black text-white uppercase tracking-widest text-xs">Área de Atuação</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Operamos com logística integrada em todo o Sul de Minas e principais capitais, garantindo montagem técnica especializada.
              </p>
              <div className="flex flex-wrap gap-2">
                {CITIES.slice(0, 8).map(city => (
                  <span key={city} className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-bold text-gray-300 uppercase tracking-wider">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 reveal" style={{ transitionDelay: '200ms' }}>
            <div className="bg-[#1A1C22] p-8 md:p-16 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-tech-cyan/5 rounded-full blur-3xl group-hover:bg-tech-cyan/10 transition-all" />
              
              <h4 className="text-2xl font-black mb-10 text-white flex items-center">
                <span className="text-tech-cyan mr-3">#</span> Enviar Briefing
              </h4>
              
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group/input">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3 block font-black">Identificação</label>
                    <input type="text" className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-3 focus:border-tech-cyan focus:outline-none transition-all text-white placeholder:text-white/20 font-medium" placeholder="Seu nome completo" />
                  </div>
                  <div className="relative group/input">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3 block font-black">Contato</label>
                    <input type="tel" className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-3 focus:border-tech-cyan focus:outline-none transition-all text-white placeholder:text-white/20 font-medium" placeholder="(00) 00000-0000" />
                  </div>
                </div>
                
                <div className="relative group/input">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3 block font-black">E-mail Corporativo</label>
                  <input type="email" className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-3 focus:border-tech-cyan focus:outline-none transition-all text-white placeholder:text-white/20 font-medium" placeholder="contato@empresa.com.br" />
                </div>

                <div className="relative group/input">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3 block font-black">Segmento de Interesse</label>
                  <div className="relative">
                    <select className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-3 focus:border-tech-cyan focus:outline-none transition-all text-white appearance-none font-medium cursor-pointer">
                      <option className="bg-[#1A1C22]">Engenharia Modular (Luxo)</option>
                      <option className="bg-[#1A1C22]">Light Steel Frame High-End</option>
                      <option className="bg-[#1A1C22]">Infraestrutura para Mobilidade Elétrica</option>
                      <option className="bg-[#1A1C22]">Sistemas de Automação Predial</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-tech-cyan">↓</div>
                  </div>
                </div>

                <div className="relative group/input">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3 block font-black">Escopo da Idea</label>
                  <textarea rows={3} className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-3 focus:border-tech-cyan focus:outline-none transition-all text-white placeholder:text-white/20 font-medium resize-none" placeholder="Breve descrição do seu objetivo..."></textarea>
                </div>

                <button className="w-full bg-tech-cyan text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-deep-blue transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center space-x-4 shadow-xl shadow-[#00909E]/20">
                  <span>Transmitir Dados</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
