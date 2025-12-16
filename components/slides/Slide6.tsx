import React from 'react';
import { GitMerge, CalendarClock, ShieldCheck } from 'lucide-react';

const Slide6: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center gap-10">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Rule 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#225B8E] rounded text-white"><GitMerge size={20}/></div>
                <h3 className="text-xl font-bold font-rubik text-[#225B8E]">Trilho A: Pedidos</h3>
            </div>
            <p className="text-gray-600">
                Entrada exclusiva por <strong>chamado</strong> (Planejamento) + formalização por e-mail + checklist validado.
            </p>
        </div>

        {/* Rule 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#2A898D] rounded text-white"><ShieldCheck size={20}/></div>
                <h3 className="text-xl font-bold font-rubik text-[#2A898D]">Trilho B: Ativa</h3>
            </div>
            <p className="text-gray-600">
                Segue calendário e planejamento próprio da Governança. Não compete desordenadamente com os pedidos.
            </p>
        </div>

        {/* Rule 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#3699BA] rounded text-white"><CalendarClock size={20}/></div>
                <h3 className="text-xl font-bold font-rubik text-[#3699BA]">Capacidade</h3>
            </div>
            <p className="text-gray-600">
                Pedidos recebem <strong>data agendada</strong>. A governança ativa não para por causa de demandas soltas.
            </p>
        </div>
      </div>

      {/* Protection Phrase Box */}
      <div className="bg-gradient-to-r from-[#225B8E] to-[#2A898D] p-1 rounded-2xl shadow-2xl mx-auto max-w-4xl w-full">
        <div className="bg-white rounded-xl p-8 text-center">
            <h4 className="text-[#225B8E] font-rubik font-bold text-lg mb-2 uppercase tracking-wider">Acordo de Hoje</h4>
            <p className="text-2xl text-gray-700 font-light">
                "Hoje aprovamos o <strong>processo</strong> e a <strong>entrada</strong>. <br/>Detalhes técnicos serão tratados pelos times executores dentro do chamado."
            </p>
        </div>
      </div>

    </div>
  );
};

export default Slide6;
