import React from 'react';
import { Target, Calendar, CheckCircle2, MessageSquare } from 'lucide-react';

const Slide0: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: Por que estamos aqui */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-[#225B8E] hover:translate-y-[-4px] transition-transform">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#225B8E]/10 rounded-full">
              <MessageSquare className="w-8 h-8 text-[#225B8E]" />
            </div>
            <h3 className="text-xl font-bold font-rubik text-[#225B8E]">Por que estamos aqui</h3>
          </div>
          <p className="text-gray-600 text-lg">
            Definir um fluxo único e governado para demandas de Locker e Agentes que chegam descentralizadas.
          </p>
        </div>

        {/* Card 2: Objetivo */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-[#2A898D] hover:translate-y-[-4px] transition-transform">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#2A898D]/10 rounded-full">
              <Target className="w-8 h-8 text-[#2A898D]" />
            </div>
            <h3 className="text-xl font-bold font-rubik text-[#2A898D]">Objetivo</h3>
          </div>
          <p className="text-gray-600 text-lg">
            Aprovar modelo centralizado que organiza novas demandas sem paralisar a governança ativa (modelo BTG).
          </p>
        </div>

        {/* Card 3: Agenda */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-[#3699BA] hover:translate-y-[-4px] transition-transform">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#3699BA]/10 rounded-full">
              <Calendar className="w-8 h-8 text-[#3699BA]" />
            </div>
            <h3 className="text-xl font-bold font-rubik text-[#3699BA]">Agenda</h3>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li className="flex gap-2 items-center"><span className="w-2 h-2 rounded-full bg-[#3699BA]"></span>Contexto & Ruído atual</li>
            <li className="flex gap-2 items-center"><span className="w-2 h-2 rounded-full bg-[#3699BA]"></span>Trilho A: Novas Operações</li>
            <li className="flex gap-2 items-center"><span className="w-2 h-2 rounded-full bg-[#3699BA]"></span>Trilho B: Governança Ativa</li>
            <li className="flex gap-2 items-center"><span className="w-2 h-2 rounded-full bg-[#3699BA]"></span>Checklist & Regras</li>
            <li className="flex gap-2 items-center"><span className="w-2 h-2 rounded-full bg-[#3699BA]"></span>Aprovações</li>
          </ul>
        </div>

        {/* Card 4: Saídas Esperadas */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-[#3BC2C7] hover:translate-y-[-4px] transition-transform">
           <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#3BC2C7]/10 rounded-full">
              <CheckCircle2 className="w-8 h-8 text-[#2A898D]" />
            </div>
            <h3 className="text-xl font-bold font-rubik text-[#2A898D]">Saídas esperadas</h3>
          </div>
          <ul className="space-y-3 font-medium text-gray-700">
            <li className="flex items-center gap-3">
              <div className="bg-green-100 text-green-700 p-1 rounded font-bold text-xs">OK</div> Fluxo aprovado
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-green-100 text-green-700 p-1 rounded font-bold text-xs">OK</div> Checklist aprovado
            </li>
            <li className="flex items-center gap-3">
               <div className="bg-green-100 text-green-700 p-1 rounded font-bold text-xs">OK</div> Regra de entrada
            </li>
            <li className="flex items-center gap-3">
               <div className="bg-green-100 text-green-700 p-1 rounded font-bold text-xs">OK</div> Próximos passos
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slide0;
