import React from 'react';
import { CheckSquare } from 'lucide-react';

const ChecklistItem: React.FC<{ label: string; sub?: string }> = ({ label, sub }) => (
  <div className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
    <div className="mt-1">
      <CheckSquare className="w-5 h-5 text-[#2A898D]" />
    </div>
    <div>
      <p className="font-medium text-gray-800">{label}</p>
      {sub && <p className="text-sm text-[#3699BA] mt-0.5">{sub}</p>}
    </div>
  </div>
);

const Slide4: React.FC = () => {
  return (
    <div className="h-full flex gap-8">
      {/* Left: The Visual Representation of the Email/Form */}
      <div className="w-full md:w-2/3 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
        <div className="bg-[#225B8E] p-4 text-white flex items-center justify-between">
          <span className="font-bold font-rubik">Checklist Obrigatório de Entrada</span>
          <span className="bg-white/20 text-xs px-2 py-1 rounded">Via E-mail</span>
        </div>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            <ChecklistItem label="Operação / Cliente" />
            <ChecklistItem label="Segmentos" sub="ID + Nome" />
            
            <ChecklistItem label="Objetivo do Pedido" sub="Implantar / Ativar / Integrar / Ajustar" />
            <ChecklistItem label="Segmento Espelho" sub="Operação similar já parametrizada" />
            
            <ChecklistItem label="Buffer Desejado" sub="Padrão sugerido: Entrada 3 / Saída 2" />
            <ChecklistItem label="Ativar Agente?" sub="Sim / Não" />
            
            <ChecklistItem label="Usa VDI?" sub="Sim / Não" />
            <ChecklistItem label="Tipo de Atendimento" />
            
            <ChecklistItem label="Considera apuração de ponto?" sub="Sim / Não" />
            <ChecklistItem label="Contato para validação" sub="Nome + Canal" />
            
            <div className="col-span-1 md:col-span-2 pt-4">
                 <ChecklistItem label="Data desejada / Urgência" />
            </div>
        </div>
      </div>

      {/* Right: Rules/Notes */}
      <div className="w-full md:w-1/3 flex flex-col justify-center gap-6">
        <div className="bg-[#225B8E]/10 border-l-4 border-[#225B8E] p-6 rounded-r-xl shadow-md">
            <h4 className="font-bold text-[#225B8E] mb-2 font-rubik">Regra de Ouro</h4>
            <p className="text-[#1f4f7a] leading-relaxed">
                Sem checklist completo, o status permanece como <strong className="bg-white px-1 rounded text-[#225B8E]">Aguardando Informações</strong>.
            </p>
            <p className="text-sm text-[#225B8E]/80 mt-4 italic">
                A demanda NÃO entra na esteira de execução sem isso.
            </p>
        </div>

        <div className="text-gray-500 text-sm">
            <p>Este checklist é a resposta padrão da Governança ao receber a formalização do Planejamento.</p>
        </div>
      </div>
    </div>
  );
};

export default Slide4;
