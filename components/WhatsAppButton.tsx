
import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5535999292725" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-tech-cyan text-black p-4 rounded-full shadow-2xl pulse-whatsapp hover:scale-110 transition-transform flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.887-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.335 11.892-11.891 11.892-1.996 0-3.974-.501-5.734-1.451l-6.254 1.657zm5.835-3.332c1.804 1.073 3.54 1.554 5.413 1.554 5.679 0 10.305-4.628 10.308-10.308.002-2.753-1.071-5.341-3.021-7.29-1.95-1.948-4.537-3.021-7.291-3.021-5.678 0-10.306 4.629-10.308 10.309 0 2.016.546 3.86 1.583 5.347l-.991 3.616 3.715-.984zm11.723-8.04c-.133-.222-.49-.355-.1.028-.511-.089-.133-.111-.355 0-.222.133-1.331.666-1.331 1.621 0 .954.688 1.887.799 2.02.088.133 1.354 2.069 3.28 2.903.454.197.811.315 1.09.403.454.144.869.123 1.198.074.366-.054 1.127-.461 1.284-.903.158-.444.158-.822.111-.902-.047-.08-.177-.122-.354-.211z" />
      </svg>
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold">
        Falar com Especialista
      </span>
    </a>
  );
};

export default WhatsAppButton;
