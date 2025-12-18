import React from 'react';
import { GitMerge, CalendarClock, ShieldCheck, Activity } from 'lucide-react';

const Slide6: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center gap-8 p-4">
      
      {/* Título da Seção */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold font-rubik text-[#225B8E] uppercase tracking-widest">
            Diretrizes de Governança e Operação
        </h2>
        <div className="h-1 w-20 bg-[#2A898D] mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Rule 1: Trilho A */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-[#225B8E] hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#225B8E] rounded text-white"><GitMerge size={20}/></div>
                <h3 className="text-lg font-bold font-rubik text-[#225B8E]">Trilho A: Pedidos</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
                Entrada exclusiva por <strong>chamado</strong> (Planejamento) + formalização por e-mail + checklist validado.
            </p>
        </div>

        {/* Rule 2: Trilho B */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-[#2A898D] hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#2A898D] rounded text-white"><ShieldCheck size={20}/></div>
                <h3 className="text-lg font-bold font-rubik text-[#2A898D]">Trilho B: Ativa</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
                Calendário e prospecção própria da Governança. Foco em operações críticas de <strong>Eficiência (EFPA)</strong>.
            </p>
        </div>

        {/* Rule 3: Sustentação */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-[#3699BA] hover:shadow-xl transition-shadow ring-2 ring-[#3699BA]/10">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#3699BA] rounded text-white"><Activity size={20}/></div>
                <h3 className="text-lg font-bold font-rubik text-[#3699BA]">Sustentação</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
                Triagem técnica e de ponto. Garante que erros sistêmicos não corrompam os ganhos de <strong>eficiência</strong>.
            </p>
        </div>

        {/* Rule 4: Capacidade */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-slate-400 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-400 rounded text-white"><CalendarClock size={20}/></div>
                <h3 className="text-lg font-bold font-rubik text-slate-700">Capacidade</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
                Demandas recebem <strong>data agendada</strong>. O plano estratégico não para por urgências desordenadas.
            </p>
        </div>
      </div>

      {/* Protection Phrase Box */}
      <div className="bg-gradient-to-r from-[#225B8E] to-[#2A898D] p-1 rounded-2xl shadow-lg mx-auto max-w-5xl w-full mt-4">
        <div className="bg-white rounded-xl p-6 text-center">
            <h4 className="text-[#225B8E] font-rubik font-bold text-sm mb-2 uppercase tracking-widest">Acordo de Hoje</h4>
            <p className="text-xl text-gray-700 font-light italic leading-relaxed">
                "Aprovamos o <strong>processo de entrada</strong> e a <strong>cadeia de responsabilidades</strong>. <br/>
                O Locker deixa de ser um 'acesso' para ser uma <strong>ferramenta de gestão governada</strong>."
            </p>
        </div>
      </div>

    </div>
  );
};

export default Slide6;