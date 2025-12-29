
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-suprema border-t border-[#00909E]/20 relative overflow-hidden">
      {/* Cyan Accent - Top Glow */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00909E] to-transparent opacity-80 shadow-[0_0_20px_rgba(0,144,158,0.6)]"></div>
      
      {/* Deep Background Glow for Depth */}
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-[#00909E]/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute -top-48 -left-48 w-[400px] h-[400px] bg-[#0B192E]/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="footer-content relative z-10">
        <div className="footer-info">
          <h3 className="text-3xl font-black mb-4">NYRA <span className="text-tech-cyan">Corporation</span></h3>
          <p className="font-semibold text-tech-cyan mb-2 tracking-widest uppercase text-[10px]">Engenharia • Tecnologia • Energia</p>
          <div className="space-y-3 mt-6">
            <p className="text-gray-400 flex items-start space-x-3 text-sm">
              <span className="text-tech-cyan mt-1">📍</span>
              <span className="leading-relaxed">Rua José Carbone Filho, 355<br/>São Lourenço/MG - Brasil</span>
            </p>
            <p className="text-gray-400 flex items-center space-x-3 text-sm">
              <span className="text-tech-cyan">☎️</span>
              <span>(35) 99929-2725</span>
            </p>
            <p className="text-gray-400 flex items-center space-x-3 text-sm">
              <span className="text-tech-cyan">📧</span>
              <span>nyracorp@gmail.com</span>
            </p>
          </div>
          
          <div className="mt-10 flex flex-wrap gap-3">
             <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-[10px] text-gray-400 group hover:border-tech-cyan/40 transition-all duration-500 backdrop-blur-sm">
                <span className="block font-black text-white mb-1 group-hover:text-tech-cyan transition-colors uppercase tracking-[0.2em]">Operação</span>
                SEG — SEX: 08:00 — 18:00
             </div>
             <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-[10px] text-gray-400 group hover:border-tech-cyan/40 transition-all duration-500 backdrop-blur-sm">
                <span className="block font-black text-white mb-1 group-hover:text-tech-cyan transition-colors uppercase tracking-[0.2em]">Plantão</span>
                SÁBADO: 08:00 — 13:00
             </div>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Navegação Estratégica</h4>
          <a href="#">Início / Dashboard</a>
          <a href="#sobre">Nossa História</a>
          <a href="#servicos">Expertise Técnica</a>
          <a href="#portfolio">Projetos Executados</a>
          <a href="#contato">Solicitar Viabilidade</a>
        </div>
        
        <div className="footer-social">
          <h4>Ecossistema Social</h4>
          <a href="https://instagram.com/nyracorp" target="_blank" rel="noreferrer">Instagram Corporate</a>
          <a href="https://wa.me/5535999292725" target="_blank" rel="noreferrer">WhatsApp Business</a>
          <a href="#" target="_blank" rel="noreferrer">LinkedIn Network</a>
          <a href="#" target="_blank" rel="noreferrer">Canal YouTube Tech</a>
        </div>
      </div>
      
      <div className="footer-divider"></div>
      
      <div className="footer-bottom relative z-10 pb-12">
        <p>&copy; {new Date().getFullYear()} NYRA Corporation. Engenharia Modular & Tecnologia em Energia. Todos os direitos reservados.</p>
        <p className="footer-dev">
          Interface & Tecnologia <span className="heart-beat">❤️</span> por 
          <a href="https://www.supremasite.com.br/" target="_blank" rel="noopener noreferrer" className="ml-2 font-black tracking-tighter">
             SUPREMA <span className="text-tech-cyan">SITES EXPRESS</span>
          </a>
        </p>
      </div>

      <style>{`
        .footer-suprema {
          /* Refined Gradient: Deep Petrol Blue to Softer Graphite */
          background: linear-gradient(180deg, #0B192E 0%, #1A1C22 100%);
          color: #ffffff;
          padding: 120px 24px 40px;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 80px;
          margin-bottom: 60px;
        }

        .footer-info h3 {
          letter-spacing: -0.06em;
          filter: drop-shadow(0 0 12px rgba(0, 144, 158, 0.4));
        }

        .footer-links h4,
        .footer-social h4 {
          color: #00909E;
          margin-bottom: 35px;
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.3em;
        }

        .footer-links a,
        .footer-social a {
          display: block;
          color: #94a3b8;
          text-decoration: none;
          margin: 16px 0;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          font-size: 14px;
          font-weight: 500;
        }

        .footer-links a:hover,
        .footer-social a:hover {
          color: #00909E;
          transform: translateX(12px);
          filter: drop-shadow(0 0 5px rgba(0, 144, 158, 0.5));
        }

        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 144, 158, 0.3), transparent);
          margin: 60px auto;
          max-width: 1200px;
        }

        .footer-bottom {
          text-align: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-bottom p {
          margin: 12px 0;
          opacity: 0.3;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .footer-dev {
          font-size: 12px !important;
          margin-top: 30px !important;
          opacity: 0.7 !important;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-dev a {
          color: #ffffff;
          text-decoration: none;
          transition: all 0.4s ease;
        }

        .footer-dev a:hover {
          color: #00909E;
          text-shadow: 0 0 15px rgba(0, 144, 158, 0.8);
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 60px;
          }
        }

        @media (max-width: 768px) {
          .footer-suprema {
            padding: 80px 24px 40px;
          }
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 50px;
          }
          .footer-info .flex {
            justify-content: center;
          }
          .footer-links a:hover,
          .footer-social a:hover {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
