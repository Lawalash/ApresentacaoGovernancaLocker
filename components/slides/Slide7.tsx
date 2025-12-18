import React from 'react';
import { CheckSquare, ArrowRightCircle, ShieldCheck } from 'lucide-react';

const Slide7: React.FC = () => (
  <div className="h-full flex flex-col md:flex-row gap-10 p-2">
    <div className="flex-[1.2]">
      <h3 className="text-2xl font-bold font-rubik text-[#225B8E] mb-6 flex items-center gap-2">
        <CheckSquare className="text-[#2A898D]" /> O que aprovamos hoje
      </h3>
      <div className="space-y-3">
        {[
          { title: "Funil de Entrada", desc: "Planejamento aciona Governança para priorizar esteira (Trilha A)." },
          { title: "Gestão de Dados", desc: "Checklist preenchido no chamado de Governança e enviado ao CMD." },
          { title: "Selo de Aval", desc: "Trilha B aciona CMD diretamente apenas com estratégia pré-validada." },
          { title: "Regra de Bloqueio", desc: "Sem checklist completo e priorização, a demanda não entra em fila." },
          { title: "Braço Sustentação", desc: "Warlean como ponto focal de triagem técnica e ajustes de ponto." }
        ].map((item, idx) => (
          <div key={idx} className="p-4 bg-white rounded-xl shadow-sm border-l-4 border-[#2A898D] flex flex-col gap-1">
            <span className="text-[#225B8E] font-bold text-sm uppercase tracking-wider">{item.title}</span>
            <span className="text-gray-600 text-sm leading-tight">{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="hidden md:block w-px bg-gradient-to-b from-[#225B8E]/20 to-[#2A898D]/20"></div>
    <div className="flex-1">
      <h3 className="text-2xl font-bold font-rubik text-[#3699BA] mb-6 flex items-center gap-2">
        <ArrowRightCircle /> Próximos Passos
      </h3>
      <div className="bg-[#3699BA]/5 rounded-2xl p-6 border border-[#3699BA]/10">
        <ol className="relative border-l border-[#3699BA]/30 ml-3 space-y-6 mt-2">
          {[
            { title: "Oficializar Fluxo", desc: "Publicação do modelo para Planejamento e CMD." },
            { title: "Comunicação às Áreas", desc: "Alinhamento das novas regras com as operações." },
            { title: "Piloto Operacional", desc: "Aplicar o novo funil nas primeiras 2 solicitações." },
            { title: "Ajuste na Sustentação", desc: "Definição do fluxo de triagem Warlean x Sistemas." }
          ].map((step, idx) => (
            <li key={idx} className="ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-[#3699BA] rounded-full -left-3 ring-4 ring-white text-white text-xs font-bold">
                {idx + 1}
              </span>
              <h4 className="text-base font-bold text-gray-800 leading-none mb-1">{step.title}</h4>
              <p className="text-xs text-gray-500 leading-tight">{step.desc}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 p-4 bg-white rounded-lg border border-dashed border-[#3699BA]/40 text-center">
          <p className="text-[10px] text-[#225B8E] font-bold uppercase tracking-widest">
            Governança Locker: Eficiência acima da técnica.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Slide7;