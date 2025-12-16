import React from 'react';
import { ArrowRight, Mail, Server, Users, CheckCircle } from 'lucide-react';

const StepCard: React.FC<{ number: number; title: string; desc: string; icon?: React.ReactNode; highlight?: boolean }> = ({ number, title, desc, icon, highlight }) => (
  <div className={`relative p-5 rounded-xl border transition-all ${highlight ? 'bg-white border-[#2A898D] shadow-xl scale-105 z-10' : 'bg-slate-50 border-gray-200 shadow-sm opacity-90'}`}>
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
    <div className="h-full flex flex-col">
      {/* Visual Workflow */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
        
        <StepCard 
          number={1} 
          title="Solicitação" 
          desc="Operação solicita a demanda." 
        />
        
        <div className="md:col-span-2">
            <StepCard 
            number={2} 
            title="Abertura de Chamado" 
            desc="Planejamento abre chamado oficial no Gestão X / Help Tech."
            highlight={true}
            icon={<Server className="w-5 h-5" />}
            />
        </div>

        <StepCard 
          number={3} 
          title="Formalização" 
          desc="Planejamento envia E-MAIL PADRÃO para Governança com nº do chamado."
          highlight={true}
          icon={<Mail className="w-5 h-5" />}
        />

        <StepCard 
          number={4} 
          title="Triagem" 
          desc="Governança analisa e responde com o checklist obrigatório." 
        />

        <StepCard 
          number={5} 
          title="Entrada na Esteira" 
          desc="Checklist preenchido = prioridade definida + janela agendada." 
        />

        <StepCard 
          number={6} 
          title="Execução" 
          desc="CMD / Sistemas / TI executam e atualizam o chamado." 
        />

        <StepCard 
          number={7} 
          title="Conclusão" 
          desc="Governança valida 'pronto' e comunica a operação." 
          icon={<CheckCircle className="w-5 h-5 text-green-500" />}
        />
      </div>

      <div className="mt-auto pt-8">
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
