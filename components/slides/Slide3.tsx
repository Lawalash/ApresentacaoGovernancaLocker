import React from "react";
import { ArrowRight, Mail, Server, Users, CheckCircle, ClipboardList } from "lucide-react";

type StepCardProps = {
  number: number;
  title: string;
  desc: string;
  icon?: React.ReactNode;
  highlight?: boolean;
};

const StepCard: React.FC<StepCardProps> = ({ number, title, desc, icon, highlight }) => (
  <div
    className={[
      "relative rounded-2xl border p-5 shadow-sm",
      "bg-white",
      highlight
        ? "border-[#2A898D]/60 ring-2 ring-[#2A898D]/15"
        : "border-slate-200",
    ].join(" ")}
  >
    {/* Badge do número */}
    <div
      className={[
        "absolute -top-3 -left-3 w-9 h-9 rounded-full flex items-center justify-center",
        "font-rubik font-bold text-white shadow-md",
        highlight ? "bg-gradient-to-br from-[#225B8E] to-[#2A898D]" : "bg-slate-400",
      ].join(" ")}
    >
      {String(number).padStart(2, "0")}
    </div>

    {/* Ícone */}
    {icon && (
      <div
        className={[
          "mb-3 inline-flex items-center justify-center",
          "w-10 h-10 rounded-xl",
          highlight ? "bg-[#2A898D]/10 text-[#2A898D]" : "bg-[#225B8E]/10 text-[#225B8E]",
        ].join(" ")}
      >
        {icon}
      </div>
    )}

    <h4
      className={[
        "font-rubik font-bold text-[1.02rem] leading-tight mb-1",
        highlight ? "text-[#2A898D]" : "text-slate-800",
      ].join(" ")}
    >
      {title}
    </h4>

    <p className="text-[0.92rem] text-slate-600 leading-snug font-poppins">{desc}</p>
  </div>
);

/** Conector horizontal (→ ou ←) com bolinhas e seta */
const HConnector: React.FC<{ accent?: boolean; direction?: "right" | "left" }> = ({
  accent,
  direction = "right",
}) => {
  const isRight = direction === "right";
  return (
    <div
      className={[
        "hidden md:flex items-center gap-2",
        "absolute top-1/2 -translate-y-1/2",
        isRight ? "-right-[42px]" : "-left-[42px] flex-row-reverse",
      ].join(" ")}
      aria-hidden="true"
    >
      <div className={`w-2 h-2 rounded-full ${accent ? "bg-[#2A898D]" : "bg-slate-300"}`} />
      <div
        className={[
          "h-[2px] w-8 rounded-full",
          accent
            ? "bg-gradient-to-r from-[#225B8E] to-[#2A898D]"
            : "bg-gradient-to-r from-slate-300 to-slate-200",
        ].join(" ")}
      />
      <div className={`w-2 h-2 rounded-full ${accent ? "bg-[#2A898D]" : "bg-slate-300"}`} />

      <ArrowRight
        className={[
          "w-4 h-4",
          accent ? "text-[#2A898D]" : "text-slate-300",
          !isRight ? "rotate-180" : "",
        ].join(" ")}
      />
    </div>
  );
};

/** Conector vertical (↓) com bolinhas e seta */
const VConnectorDown: React.FC<{ accent?: boolean }> = ({ accent }) => {
  return (
    <div
      className="hidden md:flex flex-col items-center gap-2 absolute left-1/2 -translate-x-1/2 -bottom-[44px]"
      aria-hidden="true"
    >
      <div className={`w-2 h-2 rounded-full ${accent ? "bg-[#2A898D]" : "bg-slate-300"}`} />
      <div
        className={[
          "w-[2px] h-8 rounded-full",
          accent
            ? "bg-gradient-to-b from-[#2A898D] to-[#225B8E]"
            : "bg-gradient-to-b from-slate-300 to-slate-200",
        ].join(" ")}
      />
      <div className={`w-2 h-2 rounded-full ${accent ? "bg-[#2A898D]" : "bg-slate-300"}`} />
      <ArrowRight className={`w-4 h-4 rotate-90 ${accent ? "text-[#2A898D]" : "text-slate-300"}`} />
    </div>
  );
};

const Slide3: React.FC = () => {
  return (
    <div className="h-full flex flex-col py-2">
      {/* Área do fluxo */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Linha 1: 1 → 2 → 3 → 4 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="relative">
            <StepCard
              number={1}
              title="Solicitação"
              desc="Operação sinaliza a necessidade de Locker/Agente."
              icon={<Users className="w-5 h-5" />}
            />
            <HConnector direction="right" />
          </div>

          <div className="relative">
            <StepCard
              number={2}
              title="Abertura de Chamado"
              desc="Planejamento abre o chamado oficial (Gestão X / Help Tech)."
              highlight
              icon={<Server className="w-5 h-5" />}
            />
            <HConnector direction="right" accent />
          </div>

          <div className="relative">
            <StepCard
              number={3}
              title="Formalização"
              desc="Planejamento envia e-mail padrão à Governança com nº do chamado."
              highlight
              icon={<Mail className="w-5 h-5" />}
            />
            <HConnector direction="right" accent />
          </div>

          <div className="relative">
            <StepCard
              number={4}
              title="Triagem"
              desc="Governança responde solicitando o checklist obrigatório."
              icon={<ClipboardList className="w-5 h-5" />}
            />
            {/* Desce para a linha 2 */}
            <VConnectorDown />
          </div>
        </div>

        {/* Linha 2: (embaixo do 4) 5 → 6 → 7 (voltando para a esquerda) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          {/* Espaço col 1 vazio no desktop para “desenhar” o retorno */}
          <div className="hidden md:block" />

          {/* Step 7 fica na col 2 (fim visual da linha inferior) */}
          <div className="relative md:col-start-2">
            <StepCard
              number={7}
              title="Conclusão"
              desc="Governança valida “pronto” e comunica a operação."
              icon={<CheckCircle className="w-5 h-5" />}
              highlight
            />
          </div>

          <div className="relative">
            <StepCard
              number={6}
              title="Execução"
              desc="CMD / Sistemas / TI executam e atualizam o chamado."
              icon={<Server className="w-5 h-5" />}
            />
            {/* Conecta para a esquerda (→ invertido) */}
            <HConnector direction="left" />
          </div>

          <div className="relative">
            <StepCard
              number={5}
              title="Entrada na Esteira"
              desc="Checklist OK → prioridade definida + janela agendada."
              icon={<Users className="w-5 h-5" />}
            />
            <HConnector direction="left" />
          </div>
        </div>
      </div>

      {/* Observação / regra */}
      <div className="mt-6">
        <div className="bg-[#225B8E]/10 border border-[#225B8E]/40 rounded-2xl p-4 flex items-center justify-center gap-3">
          <Mail className="text-[#225B8E] w-5 h-5" />
          <p className="text-[#225B8E] font-poppins font-medium text-[0.98rem]">
            E-mail e Teams não substituem o chamado — servem apenas para formalizar e acompanhar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
