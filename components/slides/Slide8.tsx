import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const Slide8: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center relative px-8">
      
      {/* Main Thank You Message */}
      <div className="text-center mb-16">
        <h1 className="font-rubik text-7xl md:text-8xl font-bold bg-gradient-to-r from-[#225B8E] to-[#2A898D] bg-clip-text text-transparent mb-8">
          Obrigado
        </h1>
        <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[#225B8E] to-[#2A898D] rounded-full mb-8"></div>
        <p className="font-poppins text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Governança Locker é pilar de excelência e segurança
        </p>
      </div>

      {/* Contact Block */}
      <div className="bg-gradient-to-br from-[#225B8E]/5 to-[#2A898D]/5 rounded-2xl p-10 border border-[#3699BA]/20 shadow-lg text-center max-w-2xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <MessageCircle className="text-[#2A898D]" size={28} />
          <h3 className="font-rubik text-2xl font-bold text-[#225B8E]">Dúvidas?</h3>
        </div>
        
        <p className="font-poppins text-gray-600 mb-6 text-lg">
          Estamos à disposição para qualquer esclarecimento
        </p>
        
        <div className="bg-white px-8 py-4 rounded-full border-2 border-[#3699BA]/30 shadow-sm inline-flex items-center gap-3">
          <Mail className="text-[#3699BA]" size={20} />
          <span className="font-poppins font-semibold text-[#225B8E] text-base">
            &lt; AeC - Contact Center - Eficiencia Fora da PA &gt;
          </span>
        </div>
      </div>

      {/* Bottom Message */}
      <p className="mt-12 font-poppins text-lg text-[#2A898D] font-semibold">
        Vamos garantir 100% de aderência aos treinamentos
      </p>

      {/* Footer */}
      <div className="absolute bottom-8 text-center">
        <p className="text-xs text-gray-400 font-poppins tracking-wide">
          TRANSFORMAÇÃO DIGITAL & IA © 2025
        </p>
      </div>

    </div>
  );
};

export default Slide8;