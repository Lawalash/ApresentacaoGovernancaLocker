import React from 'react';
import { Target, Calendar, CheckCircle2, Map } from 'lucide-react';

const Slide0: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center gap-6 p-4">
      {/* Header Visual */}
      <div className="flex items-center gap-4 mb-2">
         <div className="bg-[#225B8E] p-3 rounded-xl">
            <Map className="text-white w-8 h-8" />
         </div>
         <div>
            <h2 className="text-3xl font-rubik font-bold text-[#225B8E]">Governança Locker</h2>
            <p className="text-gray-500 text-lg">Definição de Modelo de Entrada e Sustentação</p>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        {/* Coluna da Esquerda: O Porquê e o Objetivo */}
        <div className="flex flex-col gap-6">
            
            {/* Card 1: Por que estamos aqui */}
            <div className="bg-white p-8 rounded-2xl shadow-md border-l-8 border-[#225B8E] flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-bold font-rubik text-[#225B8E] mb-3 uppercase tracking-wider">
                Propósito
            </h3>
            <p className="text-gray-600 text-xl leading-relaxed">
                Definir um fluxo único e governado para todas as demandas de Locker e Agente que hoje chegam de forma descentralizada e geram ineficiência.
            </p>
            </div>

            {/* Card 2: Objetivo */}
            <div className="bg-white p-8 rounded-2xl shadow-md border-l-8 border-[#2A898D] flex-1 flex flex-col justify-center">
            <h3 className="text-xl font-bold font-rubik text-[#2A898D] mb-3 uppercase tracking-wider">
                Objetivo do Encontro
            </h3>
            <p className="text-gray-600 text-xl leading-relaxed">
                Aprovar a "esteira" que organiza novas demandas (Trilho A) sem paralisar nossa governança ativa (Trilho B), definindo papéis claros de Sustentação.
            </p>
            </div>
        </div>

        {/* Coluna da Direita: Agenda e Saídas */}
        <div className="flex flex-col gap-6">
            
            {/* Card 3: Agenda */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm flex-1">
            <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-[#3699BA]" />
                <h3 className="text-xl font-bold font-rubik text-[#3699BA]">Agenda do Dia</h3>
            </div>
            <ul className="space-y-4 text-gray-600 text-lg font-medium">
                <li className="flex gap-3 items-center">
                    <span className="w-8 h-8 rounded-full bg-[#3699BA]/20 text-[#3699BA] flex items-center justify-center text-sm font-bold">1</span>
                    Contexto & Ruído Atual
                </li>
                <li className="flex gap-3 items-center">
                    <span className="w-8 h-8 rounded-full bg-[#3699BA]/20 text-[#3699BA] flex items-center justify-center text-sm font-bold">2</span>
                    Trilho A: Novas Operações
                </li>
                <li className="flex gap-3 items-center">
                    <span className="w-8 h-8 rounded-full bg-[#3699BA]/20 text-[#3699BA] flex items-center justify-center text-sm font-bold">3</span>
                    Trilho B: Governança Ativa
                </li>
                <li className="flex gap-3 items-center">
                    <span className="w-8 h-8 rounded-full bg-[#3699BA]/20 text-[#3699BA] flex items-center justify-center text-sm font-bold">4</span>
                    Papel da Sustentação (Novo)
                </li>
            </ul>
            </div>

            {/* Card 4: Saídas Esperadas */}
            <div className="bg-[#3BC2C7]/10 p-6 rounded-2xl border border-[#3BC2C7]/30">
                <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-[#2A898D]" />
                    <h3 className="text-lg font-bold font-rubik text-[#2A898D]">Saídas Esperadas</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white px-3 py-2 rounded-lg text-sm text-gray-600 font-semibold shadow-sm text-center">Fluxo Validado</div>
                    <div className="bg-white px-3 py-2 rounded-lg text-sm text-gray-600 font-semibold shadow-sm text-center">Checklist OK</div>
                    <div className="bg-white px-3 py-2 rounded-lg text-sm text-gray-600 font-semibold shadow-sm text-center">Papéis Definidos</div>
                    <div className="bg-white px-3 py-2 rounded-lg text-sm text-gray-600 font-semibold shadow-sm text-center">Go-Live</div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Slide0;