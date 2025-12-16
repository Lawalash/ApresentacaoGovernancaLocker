import React from 'react';
import { Search, Users, Settings, MessageCircle, GraduationCap, Flag } from 'lucide-react';

const ActionCard: React.FC<{ icon: React.ReactNode; title: string; step: number }> = ({ icon, title, step }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#3699BA] flex flex-col items-center text-center gap-4">
    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-sm mb-[-10px]">
        {step}
    </div>
    <div className="p-4 bg-[#3699BA]/12 rounded-full">
        <div className="text-[#225B8E] w-8 h-8">
            {icon}
        </div>
    </div>
    <h3 className="font-bold text-gray-700 font-rubik text-lg">{title}</h3>
  </div>
);

const Slide5: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
       <div className="mb-8 p-4 bg-[#225B8E]/10 rounded-lg border border-[#225B8E]/20">
        <p className="text-[#225B8E] font-medium text-center">
            Neste modelo, <span className="font-bold">nós</span> procuramos a operação. O planejamento é nosso.
        </p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
         <ActionCard step={1} icon={<Flag />} title="Alinhamento Executivo" />
         <ActionCard step={2} icon={<Search />} title="Diagnóstico (HE/Jornada)" />
         <ActionCard step={3} icon={<Users />} title="Workshops Liderança" />
         <ActionCard step={4} icon={<Settings />} title="Execução Coordenada" />
         <ActionCard step={5} icon={<MessageCircle />} title="Comunicação Operacional" />
         <ActionCard step={6} icon={<GraduationCap />} title="Treinamento + Acompanhamento" />
       </div>

       <div className="mt-8 text-center">
            <span className="inline-block bg-[#2A898D] text-white px-6 py-2 rounded-full font-bold shadow-md">
                Modelo validado no case BTG
            </span>
       </div>
    </div>
  );
};

export default Slide5;
