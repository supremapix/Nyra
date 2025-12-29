
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-suprema border-t border-[#00909E]/20 relative overflow-hidden">
      {/* Acenuto Ciano Refinado - Brilho Superior */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00909E] to-transparent opacity-60 shadow-[0_0_15px_rgba(0,144,158,0.5)]"></div>
      
      {/* Glow de fundo para profundidade */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#00909E]/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="footer-content relative z-10">
        <div className="footer-info">
          <h3 className="text-3xl font-black mb-4">NYRA <span className="text-tech-cyan">Corporation</span></h3>
          <p className="font-semibold text-tech-cyan mb-2 tracking-wide uppercase text-xs">Engenharia • Tecnologia • Energia</p>
          <div className="space-y-2 mt-4">
            <p className="text-gray-400 flex items-center space-x-2">
              <span className="text-tech-cyan">📍</span>
              <span>Rua José Carbone Filho, 355 - São Lourenço/MG</span>
            </p>
            <p className="text-gray-400 flex items-center space-x-2">
              <span className="text-tech-cyan">☎️</span>
              <span>(35) 99929-2725</span>
            </p>
            <p className="text-gray-400 flex items-center space-x-2">
              <span className="text-tech-cyan">📧</span>
              <span>nyracorp@gmail.com</span>
            </p>
          </div>
          
          <div className="mt-8 flex space-x-4">
             <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-xs text-gray-400 group hover:border-tech-cyan/50 transition-colors">
                <span className="block font-bold text-white mb-1 group-hover:text-tech-cyan transition-colors uppercase tracking-widest">Segunda a Sexta</span>
                08:00 — 18:00
             </div>
             <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-xs text-gray-400 group hover:border-tech-cyan/50 transition-colors">
                <span className="block font-bold text-white mb-1 group-hover:text-tech-cyan transition-colors uppercase tracking-widest">Sábado</span>
                08:00 — 13:00
             </div>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Navegação</h4>
          <a href="#">Início</a>
          <a href="#sobre">Sobre a NYRA</a>
          <a href="#servicos">Nossos Serviços</a>
          <a href="#portfolio">Portfólio de Projetos</a>
          <a href="#contato">Solicitar Orçamento</a>
        </div>
        
        <div className="footer-social">
          <h4>Conecte-se</h4>
          <a href="https://instagram.com/nyracorp" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://wa.me/5535999292725" target="_blank" rel="noreferrer">WhatsApp Business</a>
          <a href="#" target="_blank" rel="noreferrer">LinkedIn Corporate</a>
        </div>
      </div>
      
      <div className="footer-divider"></div>
      
      <div className="footer-bottom relative z-10 pb-10">
        <p>&copy; {new Date().getFullYear()} NYRA Corporation. Todos os direitos reservados.</p>
        <p className="footer-dev">
          Design & Tecnologia <span className="heart-beat">❤️</span> por 
          <a href="https://www.supremasite.com.br/" target="_blank" rel="noopener noreferrer" className="ml-1">
             Suprema Sites Express
          </a>
        </p>
      </div>

      <style>{`
        .footer-suprema {
          /* Gradiente refinado: Começa no Azul Petróleo Profundo e suaviza para o Grafite */
          background: linear-gradient(180deg, #0B192E 0%, #1A1C22 100%);
          color: #ffffff;
          padding: 100px 20px 40px;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 60px;
          margin-bottom: 40px;
        }

        .footer-info h3 {
          letter-spacing: -0.05em;
          filter: drop-shadow(0 0 8px rgba(0, 144, 158, 0.3));
        }

        .footer-info p {
          font-size: 14px;
          line-height: 1.6;
        }

        .footer-links h4,
        .footer-social h4 {
          color: #00909E;
          margin-bottom: 30px;
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .footer-links a,
        .footer-social a {
          display: block;
          color: #ffffff;
          text-decoration: none;
          margin: 14px 0;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          opacity: 0.6;
          font-size: 15px;
        }

        .footer-links a:hover,
        .footer-social a:hover {
          color: #00909E;
          opacity: 1;
          transform: translateX(10px);
        }

        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 144, 158, 0.2), transparent);
          margin: 50px auto;
          max-width: 1200px;
        }

        .footer-bottom {
          text-align: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-bottom p {
          margin: 10px 0;
          opacity: 0.4;
          font-size: 12px;
          letter-spacing: 0.05em;
        }

        .footer-dev {
          font-size: 13px;
          margin-top: 24px !important;
          opacity: 0.6 !important;
        }

        .footer-dev a {
          color: #00909E;
          text-decoration: none;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .footer-dev a:hover {
          color: #ffffff;
          text-shadow: 0 0 8px rgba(0, 144, 158, 0.8);
        }

        @media (max-width: 768px) {
          .footer-suprema {
            padding: 60px 20px 30px;
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
            transform: translateY(-3px);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
