import React from "react";
import { Check } from "lucide-react";

const principles = [
  "Uma entrada oficial e rastreável",
  "Pedido só existe com chamado",
  "Formalização obrigatória para Governança",
  "Checklist mínimo antes de executar",
  "Prioridade definida antes de iniciar",
  "Execução com responsáveis claros",
  "Validação simples de “pronto”",
  "Comunicação e treinamento fazem parte do processo",
  "Registro do que foi feito (rastreabilidade)",
  "Redução de ruído e retrabalho",
];

export const SlidePrinciples: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col overflow-hidden">
      <header className="pb-4">
        <h2 className="text-4xl font-bold font-rubik bg-clip-text text-transparent bg-gradient-to-r from-[#225B8E] to-[#2A898D]">
          Princípios Inegociáveis
        </h2>
        <p className="font-poppins text-lg mt-2 font-medium text-[#3699BA]">
          Base mínima para uma esteira simples, rastreável e previsível
        </p>
        <div className="h-[2px] w-full mt-4 bg-gradient-to-r from-[#225B8E] to-[#2A898D] opacity-70 rounded-full" />
      </header>

      {/* Conteúdo (grid) */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-auto pr-2">
          <div className="grid grid-cols-2 gap-4">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md border border-slate-100"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#225B8E] to-[#2A898D] flex items-center justify-center text-white">
                  <Check className="w-6 h-6" />
                </div>

                <span className="text-base font-medium text-slate-700 font-poppins leading-snug">
                  {principle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rodapé do conteúdo */}
      <div className="mt-6 text-center text-[#225B8E]/60 text-sm font-poppins">
        Princípios fundamentais para a nova esteira de governança
      </div>
    </div>
  );
};

// Mantém compatibilidade com imports default
export default SlidePrinciples;
