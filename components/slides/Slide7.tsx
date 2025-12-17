import React from 'react';
import { CheckSquare, ArrowRightCircle } from 'lucide-react';

const Slide7: React.FC = () => {
  return (
    <div className="h-full flex flex-col md:flex-row gap-12">
      
      {/* Col 1: Aprovações Necessárias */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold font-rubik text-[#225B8E] mb-6 flex items-center gap-2">
            <CheckSquare className="text-[#2A898D]" /> O que aprovamos hoje
        </h3>
        
        <div className="space-y-4">
            {[
                "Planejamento abre chamado oficial (Gestão X/Help Tech)",
                "Formalização obrigatória por e-mail para Governança",
                "Modelo de Checklist padrão",
                "Regra de bloqueio: \"Sem checklist, não entra\"",
                "Definição de SLA de retorno inicial da Governança"
            ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border-l-4 border-[#2A898D]">
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                </div>
            ))}
        </div>
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px bg-gradient-to-b from-[#225B8E]/20 to-[#2A898D]/20"></div>

      {/* Col 2: Próximos Passos */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold font-rubik text-[#3699BA] mb-6 flex items-center gap-2">
            <ArrowRightCircle /> Próximos dias
        </h3>

        <div className="bg-[#3699BA]/10 rounded-2xl p-8 relative">
            <div className="absolute top-0 left-8 -mt-3 bg-[#3699BA] text-white px-3 py-1 text-xs font-bold rounded uppercase">
                Plano de Ação
            </div>
            
            <ol className="relative border-l border-[#3699BA]/30 ml-3 space-y-8 mt-2">
                {[
                    { title: "Publicar Modelo", desc: "Documentar fluxo e oficializar." },
                    { title: "Comunicar Áreas", desc: "Alinhar com Planejamento e Operações." },
                    { title: "Rodar Piloto", desc: "Selecionar 1-2 novas operações para teste." },
                    { title: "Ajuste Fino", desc: "Coletar feedback da primeira semana." }
                ].map((step, idx) => (
                    <li key={idx} className="mb-2 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-[#3699BA] rounded-full -left-3 ring-4 ring-white text-white text-xs font-bold">
                            {idx + 1}
                        </span>
                        <h4 className="flex items-center mb-1 text-lg font-semibold text-gray-900">{step.title}</h4>
                        <p className="mb-4 text-base font-normal text-gray-500">{step.desc}</p>
                    </li>
                ))}
            </ol>
        </div>
      </div>

    </div>
  );
};

export default Slide7;
