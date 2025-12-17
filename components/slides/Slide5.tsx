import React from 'react';
import { Search, Users, Settings, MessageCircle, GraduationCap, Flag } from 'lucide-react';

const ActionCard: React.FC<{ icon: React.ReactNode; title: string; step: number }> = ({ icon, title, step }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border-t-4 border-[#3699BA] flex flex-col items-center text-center gap-3 h-full transition-all duration-300 hover:-translate-y-1">
    <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 font-bold text-xs mb-[-8px] z-10 relative">
        {step}
    </div>
    <div className="p-4 bg-[#3699BA]/10 rounded-full text-[#225B8E] transition-colors hover:bg-[#3699BA]/20 flex items-center justify-center">
        <div className="w-8 h-8 flex items-center justify-center">
            {icon}
        </div>
    </div>
    <h3 className="font-bold text-gray-700 font-rubik text-lg leading-tight">{title}</h3>
  </div>
);

const Slide5: React.FC = () => {
  return (
    <div className="h-full flex flex-col p-8 md:p-10 bg-slate-50">
       <div className="mb-10 p-6 bg-[#225B8E]/5 rounded-xl border border-[#225B8E]/10">
        <p className="text-[#225B8E] text-xl font-medium text-center">
            Neste modelo, <span className="font-bold border-b-2 border-[#3699BA]">nós</span> procuramos a operação. O planejamento é nosso.
        </p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 flex-1 w-full max-w-6xl mx-auto">
         <ActionCard step={1} icon={<Flag />} title="Alinhamento Executivo" />
         <ActionCard step={2} icon={<Search />} title="Diagnóstico (HE/Jornada)" />
         <ActionCard step={3} icon={<Users />} title="Workshops Liderança" />
         <ActionCard step={4} icon={<Settings />} title="Execução Coordenada" />
         <ActionCard step={5} icon={<MessageCircle />} title="Comunicação Operacional" />
         <ActionCard step={6} icon={<GraduationCap />} title="Treinamento + Acompanhamento" />
       </div>

       <div className="mt-10 text-center">
            <span className="inline-block bg-[#2A898D] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform duration-300">
                Modelo validado no case BTG
            </span>
       </div>
    </div>
  );
};

export default Slide5;