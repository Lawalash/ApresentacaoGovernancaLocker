import React from 'react';
import { ThumbsUp, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';

const Slide2: React.FC = () => {
  return (
    <div className="h-full flex flex-col gap-6 p-4">
      
      {/* Título do Slide */}
      <div className="mb-2">
        <h2 className="text-2xl font-bold font-rubik text-gray-800">Cenário Atual</h2>
        <p className="text-gray-500">O contraste entre o modelo governado e o fluxo descentralizado.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        
        {/* Column 1: O que já funciona */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg flex flex-col relative overflow-hidden group hover:border-[#2A898D] transition-all">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <ThumbsUp className="w-32 h-32 text-[#2A898D]" />
          </div>
          
          <h3 className="text-2xl font-bold font-rubik text-[#2A898D] mb-6 flex items-center gap-3">
            <ThumbsUp className="w-8 h-8" /> O que funciona (Modelo BTG)
          </h3>
          
          <div className="space-y-6 text-gray-700 text-lg flex-1">
            <p className="leading-relaxed border-l-4 border-[#2A898D] pl-4">
              Nós vamos até a operação com um plano estruturado (Diagnóstico + Ação).
            </p>
            
            <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-600 bg-slate-50 p-2 rounded-lg">
                    <CheckCircle2 size={16} className="text-[#2A898D]"/> Controle de ponta a ponta
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600 bg-slate-50 p-2 rounded-lg">
                    <CheckCircle2 size={16} className="text-[#2A898D]"/> Sem surpresas no faturamento
                </li>
            </ul>
          </div>

           <div className="mt-auto pt-4 border-t border-gray-100">
             <span className="text-xs font-bold text-[#2A898D] tracking-widest uppercase">Status: Governado</span>
           </div>
        </div>

        {/* Column 2: O ruído atual */}
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-inner flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <AlertTriangle className="w-32 h-32 text-[#E63946]" />
          </div>

          <h3 className="text-2xl font-bold font-rubik text-[#E63946] mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8" /> O Ruído (Ex: Madeira Madeira)
          </h3>

          <div className="space-y-4 text-gray-700 text-lg">
             <p className="leading-relaxed">
              Operações acionando <strong className="text-[#E63946]">Sistemas / TI / CMD direto</strong>.
            </p>
            
            <div className="bg-white p-4 rounded-xl border border-red-100 shadow-sm space-y-2">
                <p className="text-sm font-semibold text-gray-800">Consequências da falta de filtro:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm ml-1">
                    <li>Dispersão de esforço técnico (CMD perdido)</li>
                    <li>Retrabalho manual (Cartas de próprio punho)</li>
                    <li>Ninguém valida o impacto no Ponto (Sustentação ausente)</li>
                </ul>
            </div>
          </div>
          
           <div className="mt-auto pt-4 border-t border-gray-200">
             <span className="text-xs font-bold text-[#E63946] tracking-widest uppercase">Status: Crítico</span>
           </div>
        </div>
      </div>

      {/* Footer Statement - A SOLUÇÃO COM SUSTENTAÇÃO */}
      <div className="bg-gradient-to-r from-[#225B8E] to-[#2A898D] p-1 rounded-2xl shadow-xl mt-2">
        <div className="bg-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <div className="bg-[#225B8E]/10 p-3 rounded-full">
                    <ShieldCheck className="w-8 h-8 text-[#225B8E]" />
                </div>
                <div>
                    <h4 className="font-bold text-[#225B8E] text-lg">A Solução Proposta</h4>
                    <p className="text-gray-600 text-sm">Organizar a casa com dois guardiões.</p>
                </div>
            </div>
            
            <div className="flex items-center gap-2 text-gray-700 font-medium bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
                <span>Governança (Estratégia)</span>
                <span className="text-[#2A898D]">+</span>
                <span>Sustentação (Técnica/Ponto)</span>
            </div>
        </div>
      </div>
    </div>
  );
};

// Helper icon component just for this file to avoid errors if not imported
const CheckCircle2 = ({ size, className }: { size?: number, className?: string }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
);

export default Slide2;