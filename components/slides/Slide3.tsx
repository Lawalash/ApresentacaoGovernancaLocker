import React from "react";
import { Mail, Server, Users, CheckCircle } from "lucide-react";

const StepCard: React.FC<{
  number: number;
  title: string;
  desc: string;
  icon?: React.ReactNode;
  highlight?: boolean;
}> = ({ number, title, desc, icon, highlight }) => (
  <div
    className={[
      "relative p-5 rounded-2xl border transition-shadow",
      highlight
        ? "bg-white border-[#2A898D]/50 shadow-lg"
        : "bg-slate-50 border-slate-200 shadow-sm",
    ].join(" ")}
  >
    <div
      className={[
        "absolute -top-3 -left-3 w-9 h-9 rounded-full flex items-center justify-center",
        "font-rubik font-bold text-white shadow-md",
        highlight ? "bg-[#2A898D]" : "bg-slate-400",
      ].join(" ")}
    >
      {String(number).padStart(2, "0")}
    </div>

    <div className="mb-3 text-[#225B8E]">{icon}</div>

    <h4
      className={[
        "font-rubik font-bold mb-1 leading-tight",
        highlight ? "text-[#2A898D]" : "text-slate-800",
      ].join(" ")}
    >
      {title}
    </h4>

    <p className="text-sm text-slate-600 leading-snug font-poppins">{desc}</p>
  </div>
);

const Slide3: React.FC = () => {
  return (
    <div className="h-full flex flex-col py-4">
      {/* Fluxo (cards) */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Linha 1 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <StepCard
            number={1}
            title="Solicitação"
            desc="Operação sinaliza a necessidade de Locker/Agente."
            icon={<Users className="w-5 h-5" />}
          />

          <StepCard
            number={2}
            title="Abertura de Chamado"
            desc="Planejamento abre chamado oficial no Gestão X / Help Tech."
            highlight
            icon={<Server className="w-5 h-5" />}
          />

          <StepCard
            number={3}
            title="Formalização"
            desc="Planejamento envia E-MAIL PADRÃO para Governança com nº do chamado."
            highlight
            icon={<Mail className="w-5 h-5" />}
          />

          <StepCard
            number={4}
            title="Triagem"
            desc="Governança analisa e responde com o checklist obrigatório."
          />
        </div>

        {/* Linha 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6 md:mt-8">
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
            desc="Governança valida “pronto” e comunica a operação."
            icon={<CheckCircle className="w-5 h-5 text-[#2A898D]" />}
          />
        </div>
      </div>

      {/* Observação */}
      <div className="mt-6">
        <div className="bg-[#225B8E]/10 border border-[#225B8E]/30 rounded-2xl p-4 flex items-center justify-center gap-3">
          <Mail className="text-[#225B8E] w-5 h-5" />
          <p className="text-[#225B8E] font-poppins font-medium text-sm md:text-[0.95rem] text-center">
            E-mail e Teams não substituem chamado. Servem apenas para formalizar e acompanhar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
