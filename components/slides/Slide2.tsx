import React from 'react';
import { ThumbsUp, AlertTriangle } from 'lucide-react';

const Slide2: React.FC = () => {
  return (
    <div className="h-full flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        
        {/* Column 1: O que já funciona */}
        <div className="bg-[#2A898D]/5 rounded-3xl p-8 border border-[#2A898D]/20 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <ThumbsUp className="w-32 h-32 text-[#2A898D]" />
          </div>
          
          <h3 className="text-2xl font-bold font-rubik text-[#2A898D] mb-6 flex items-center gap-3">
            <ThumbsUp className="w-8 h-8" /> O que já funciona
          </h3>
          
          <div className="space-y-4 text-gray-700 text-lg">
            <p className="leading-relaxed">
              Plano estruturado quando <strong className="text-[#225B8E]">nós vamos até a operação</strong>.
            </p>
            <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#3699BA]">
              <span className="text-sm font-bold text-[#3699BA] block mb-1">EXEMPLO REAL</span>
              <span className="font-semibold text-gray-800">Modelo BTG:</span> Diagnóstico, workshop e execução coordenada.
            </div>
            <p className="text-sm text-gray-500">Temos controle do início ao fim.</p>
          </div>
        </div>

        {/* Column 2: O ruído atual */}
        <div className="bg-[#3699BA]/10 rounded-3xl p-8 border border-[#3699BA]/30 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <AlertTriangle className="w-32 h-32 text-[#225B8E]" />
          </div>

          <h3 className="text-2xl font-bold font-rubik text-[#225B8E] mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8" /> O ruído atual
          </h3>

          <div className="space-y-4 text-gray-700 text-lg">
             <p className="leading-relaxed">
              Novas operações acionando <strong className="text-[#225B8E]">Sistemas / TI direto</strong> sem passar pela governança.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
              <li>Dispersão de esforço</li>
              <li>Retrabalho técnico</li>
              <li>Falta de previsibilidade</li>
              <li>"Quem pediu isso?"</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Statement */}
      <div className="bg-gradient-to-r from-[#225B8E] to-[#2A898D] p-6 rounded-xl text-white text-center shadow-lg">
        <p className="text-xl font-medium">
          Precisamos separar o que é <span className="font-bold bg-white/20 px-2 py-1 rounded">PEDIDO</span> do que é <span className="font-bold bg-white/20 px-2 py-1 rounded">GOVERNANÇA ATIVA</span>, com regras claras.
        </p>
      </div>
    </div>
  );
};

export default Slide2;
