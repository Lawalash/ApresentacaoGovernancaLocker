import React from 'react';
import { ArrowRight, Mail, Server, Users, CheckCircle } from 'lucide-react';

const StepCard: React.FC<{ number: number; title: string; desc: string; icon?: React.ReactNode; highlight?: boolean }> = ({ number, title, desc, icon, highlight }) => (
  <div className={`relative p-5 rounded-xl border ${highlight ? 'bg-white border-[#2A898D] shadow-lg' : 'bg-slate-50 border-gray-200 shadow-md opacity-95'}`}>
    <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shadow-md ${highlight ? 'bg-[#2A898D]' : 'bg-gray-400'}`}>
      {number}
    </div>
    <div className="mb-2 text-[#225B8E]">{icon}</div>
    <h4 className={`font-bold font-rubik mb-1 ${highlight ? 'text-[#2A898D]' : 'text-gray-700'}`}>{title}</h4>
    <p className="text-sm text-gray-600 leading-snug">{desc}</p>
  </div>
);

const Slide3: React.FC = () => {
  return (
    <div className="h-full flex flex-col py-4">
      {/* Visual Workflow - Linha Superior */}
      <div className="grid grid-cols-7 gap-4 mb-6">
        <div className="relative">
          <StepCard 
            number={1} 
            title="Solicitação" 
            desc="Operação solicita a demanda." 
          />
          <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
        </div>
        
        <div className="relative col-span-2">
          <StepCard 
            number={2} 
            title="Abertura de Chamado" 
            desc="Planejamento abre chamado oficial no Gestão X / Help Tech."
            highlight={true}
            icon={<Server className="w-5 h-5" />}
          />
          <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-[#2A898D] to-transparent"></div>
        </div>

        <div className="relative col-span-2">
          <StepCard 
            number={3} 
            title="Formalização" 
            desc="Planejamento envia E-MAIL PADRÃO para Governança com nº do chamado."
            highlight={true}
            icon={<Mail className="w-5 h-5" />}
          />
          <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-[#2A898D] to-transparent"></div>
        </div>

        <div className="relative col-span-2">
          <StepCard 
            number={4} 
            title="Triagem" 
            desc="Governança analisa e responde com o checklist obrigatório." 
          />
          <div className="hidden md:block absolute -bottom-4 left-1/2 w-0.5 h-4 bg-gradient-to-b from-gray-300 to-transparent"></div>
        </div>
      </div>

      {/* Linha Inferior */}
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-2 col-start-2 relative">
          <div className="hidden md:block absolute -top-4 right-1/2 w-0.5 h-4 bg-gradient-to-t from-gray-300 to-transparent"></div>
          <StepCard 
            number={5} 
            title="Entrada na Esteira" 
            desc="Checklist preenchido = prioridade definida + janela agendada." 
          />
          <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
        </div>

        <div className="relative col-span-2">
          <StepCard 
            number={6} 
            title="Execução" 
            desc="CMD / Sistemas / TI executam e atualizam o chamado." 
          />
          <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
        </div>

        <div className="relative col-span-2">
          <StepCard 
            number={7} 
            title="Conclusão" 
            desc="Governança valida 'pronto' e comunica a operação." 
            icon={<CheckCircle className="w-5 h-5 text-[#2A898D]" />}
          />
        </div>
      </div>

      <div className="mt-6">
        <div className="bg-[#225B8E]/10 border border-[#225B8E] rounded-lg p-4 flex items-center justify-center gap-3">
          <Mail className="text-[#225B8E]" />
          <p className="text-[#225B8E] font-medium">
            E-mail e Teams não substituem chamado. Servem apenas para formalizar e acompanhar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
