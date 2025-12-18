import React from "react";
import { 
  Search, 
  Users, 
  Settings, 
  MessageCircle, 
  GraduationCap, 
  Flag,
  BarChart3,
  ShieldCheck
} from "lucide-react";

const StepCard: React.FC<{
  number: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
  highlight?: boolean;
}> = ({ number, title, desc, icon, highlight }) => (
  <div
    className={[
      "relative p-6 rounded-2xl border transition-all duration-300 h-full",
      highlight
        ? "bg-white border-[#3699BA] shadow-[0_10px_25px_-5px_rgba(54,153,186,0.15)] ring-1 ring-[#3699BA]/20"
        : "bg-slate-50/50 border-slate-200 shadow-sm hover:shadow-md",
    ].join(" ")}
  >
    <div
      className={[
        "absolute -top-3 -left-3 w-10 h-10 rounded-xl flex items-center justify-center",
        "font-rubik font-bold text-white shadow-lg transform -rotate-3",
        highlight ? "bg-gradient-to-br from-[#225B8E] to-[#3699BA]" : "bg-slate-400",
      ].join(" ")}
    >
      {String(number).padStart(2, "0")}
    </div>

    <div className={[
      "mb-4 w-10 h-10 rounded-lg flex items-center justify-center",
      highlight ? "bg-[#3699BA]/10 text-[#3699BA]" : "bg-slate-200/50 text-slate-500"
    ].join(" ")}>
      {React.cloneElement(icon as React.ReactElement, { size: 22 })}
    </div>

    <h4 className={[
        "font-rubik font-bold mb-2 text-lg leading-tight",
        highlight ? "text-[#225B8E]" : "text-slate-800",
      ].join(" ")}>
      {title}
    </h4>

    <p className="text-[0.85rem] text-slate-600 leading-relaxed font-poppins">
      {desc}
    </p>
  </div>
);

const Slide5: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between py-2 bg-white">
      {/* Header Informativo */}
      <div className="mb-4 p-4 bg-[#225B8E]/5 rounded-xl border border-[#225B8E]/10 text-center">
        <p className="text-[#225B8E] text-lg font-medium">
            <span className="font-bold">Trilho B: Governança Ativa</span> – Prospecção estratégica baseada em Eficiência (EFPA).
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-6">
        {/* Linha 1: Diagnóstico e Alinhamento */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StepCard
            number={1}
            title="Diagnóstico de HE"
            desc="Identificação de operações com alto desvio de jornada e ineficiência de ponto."
            icon={<Search />}
          />
          <StepCard
            number={2}
            title="Alinhamento Executivo"
            desc="Apresentação do projeto para a diretoria/gerência da operação alvo."
            highlight
            icon={<Flag />}
          />
          <StepCard
            number={3}
            title="Workshops Liderança"
            desc="Engajamento de coordenadores e supervisores sobre as novas regras."
            icon={<Users />}
          />
          <StepCard
            number={4}
            title="Desenho de Regras"
            desc="Definição técnica: Buffers, horários de bloqueio e permissões de HE."
            highlight
            icon={<Settings />}
          />
        </div>

        {/* Linha 2: Implementação e Controle */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StepCard
            number={5}
            title="Comunicação Operacional"
            desc="Divulgação oficial para os agentes sobre o uso obrigatório do Locker."
            icon={<MessageCircle />}
          />
          <StepCard
            number={6}
            title="Treinamento (Click)"
            desc="Capacitação técnica e trilha de conhecimento para 100% do público."
            highlight
            icon={<GraduationCap />}
          />
          <StepCard
            number={7}
            title="Execução Coordenada"
            desc="Virada de chave monitorada pelo time de Governança e Sustentação."
            icon={<ShieldCheck />}
          />
          <StepCard
            number={8}
            title="Acompanhamento/ROI"
            desc="Análise dos indicadores de redução de HE e validação do ganho de eficiência."
            highlight
            icon={<BarChart3 />}
          />
        </div>
      </div>

      {/* Badge de Validação */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[#2A898D]/10 text-[#2A898D] px-6 py-2 rounded-full font-bold text-sm border border-[#2A898D]/20 shadow-sm">
           <ShieldCheck size={16} /> Modelo validado no case BTG Pactual
        </div>
      </div>
    </div>
  );
};

export default Slide5;