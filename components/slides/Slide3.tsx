import React from "react";
import { 
  Server, 
  Users, 
  CheckCircle, 
  Search, 
  FileText, 
  PlayCircle,
  ShieldCheck,
  Filter
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
        ? "bg-white border-[#2A898D] shadow-[0_10px_25px_-5px_rgba(42,137,141,0.15)] ring-1 ring-[#2A898D]/20"
        : "bg-slate-50/50 border-slate-200 shadow-sm hover:shadow-md",
    ].join(" ")}
  >
    {/* Badge de Numeração */}
    <div
      className={[
        "absolute -top-3 -left-3 w-10 h-10 rounded-xl flex items-center justify-center",
        "font-rubik font-bold text-white shadow-lg transform -rotate-3",
        highlight ? "bg-gradient-to-br from-[#225B8E] to-[#2A898D]" : "bg-slate-400",
      ].join(" ")}
    >
      {String(number).padStart(2, "0")}
    </div>

    {/* Ícone com Container */}
    <div className={[
      "mb-4 w-10 h-10 rounded-lg flex items-center justify-center",
      highlight ? "bg-[#2A898D]/10 text-[#2A898D]" : "bg-slate-200/50 text-slate-500"
    ].join(" ")}>
      {React.cloneElement(icon as React.ReactElement, { size: 22 })}
    </div>

    <h4
      className={[
        "font-rubik font-bold mb-2 text-lg leading-tight",
        highlight ? "text-[#225B8E]" : "text-slate-800",
      ].join(" ")}
    >
      {title}
    </h4>

    <p className="text-[0.9rem] text-slate-600 leading-relaxed font-poppins">
      {desc}
    </p>
  </div>
);

const Slide3: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between py-2">
      {/* Container Principal do Fluxo */}
      <div className="flex-1 flex flex-col justify-center gap-8">
        
        {/* Linha 1: Entrada e Triagem (4 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StepCard
            number={1}
            title="Solicitação"
            desc="Operação sinaliza necessidade de Locker ou Agente ao Planejamento."
            icon={<Users />}
          />

          <StepCard
            number={2}
            title="Abertura (Gestão X)"
            desc="Planejamento abre chamado oficial. Fim das solicitações paralelas por e-mail."
            highlight
            icon={<Server />}
          />

          <StepCard
            number={3}
            title="Triagem N1 (Sustentação)"
            desc="Warlean filtra: Se for erro, corrige. Se for Implantação, encaminha para Governança."
            icon={<ShieldCheck />}
          />

          <StepCard
            number={4}
            title="Triagem N2 (Governança)"
            desc="Recebemos a demanda validada e analisamos a viabilidade estratégica."
            highlight
            icon={<Filter />}
          />
        </div>

        {/* Linha 2: Definição e Execução (4 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StepCard
            number={5}
            title="Checklist & Regras"
            desc="Solicitamos via chamado as definições técnicas (VDI, Rede, Ponto)."
            icon={<FileText />}
          />

          <StepCard
            number={6}
            title="Agendamento"
            desc="Com o checklist OK, definimos a data de execução conforme a fila."
            icon={<Search />}
          />

          <StepCard
            number={7}
            title="Execução Técnica"
            desc="CMD/TI recebe o chamado já 'mastigado' e apenas executa a configuração."
            icon={<PlayCircle />}
          />

          <StepCard
            number={8}
            title="Validação Final"
            desc="Governança homologa o funcionamento e encerra o chamado no sistema."
            highlight
            icon={<CheckCircle />}
          />
        </div>
      </div>

      {/* Alerta de Regra de Ouro (Footer do Slide) */}
      <div className="mt-8">
        <div className="bg-[#225B8E]/5 border border-[#225B8E]/20 rounded-2xl p-4 flex items-center justify-center gap-4">
          <div className="bg-[#225B8E] p-2 rounded-lg">
            <Server className="text-white w-5 h-5" />
          </div>
          <p className="text-[#225B8E] font-poppins font-semibold text-sm md:text-base italic">
            Regra de Ouro: <span className="font-normal text-slate-700">Não aceitamos demandas por e-mail/Teams. </span> 
            Tudo deve estar registrado no <span className="font-normal text-slate-700">Chamado (Gestão X)</span> para auditoria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide3;