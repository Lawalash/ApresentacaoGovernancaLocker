import React from "react";
import { Check } from "lucide-react";
import { SlideProps } from "../types";
import { SlideLayout } from "./SlideLayout";

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

export const SlidePrinciples: React.FC<SlideProps> = (props) => {
  return (
    <SlideLayout
      {...props}
      title="Princípios Inegociáveis"
      subtitle="Base mínima para uma esteira simples, rastreável e previsível"
    >
      <div className="h-full w-full flex flex-col overflow-hidden">
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
    </SlideLayout>
  );
};

// Mantém compatibilidade com imports default
export default SlidePrinciples;
