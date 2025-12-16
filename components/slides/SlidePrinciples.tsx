import React from "react";
import { Check } from "lucide-react";

const PRINCIPLES = [
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
      {/* Conteúdo principal em 2 colunas (igual ao layout referência) */}
      <div className="flex-1 flex flex-col md:flex-row gap-12 overflow-hidden">
        {/* Coluna esquerda (título + contexto) */}
        <div className="md:w-1/3 w-full flex flex-col justify-center overflow-hidden">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold font-poppins uppercase tracking-widest mb-2 text-[#225B8E]/60">
                Governança Locker
              </p>

              <h2 className="font-rubik text-5xl font-bold leading-tight text-[#225B8E]">
                PRINCÍPIOS
                <br />
                INEGOCIÁVEIS
              </h2>
            </div>

            <div className="h-1 w-24 bg-gradient-to-r from-[#225B8E] to-[#2A898D] rounded-full" />

            <p className="text-base font-poppins text-slate-600 leading-relaxed">
              Base mínima para manter uma esteira simples, rastreável e previsível
              nas demandas de Locker (implantação/ativação/integração).
            </p>
          </div>
        </div>

        {/* Coluna direita (lista) */}
        <div className="md:w-2/3 w-full overflow-hidden">
          <div className="h-full overflow-auto pr-2">
            <div className="space-y-4">
              {PRINCIPLES.map((principle, index) => (
                <div
                  key={`${index}-${principle}`}
                  className="flex items-start gap-5 pb-4 border-b border-[#225B8E]/10 last:border-b-0"
                >
                  <span className="font-rubik font-bold text-lg min-w-[44px] pt-1 text-[#2A898D]">
                    {String(index + 1).padStart(2, "0")}.
                  </span>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[#225B8E] to-[#2A898D] flex items-center justify-center text-white">
                      <Check className="w-4 h-4" />
                    </div>

                    <p className="text-base leading-relaxed pt-0.5 font-poppins text-slate-700 font-medium">
                      {principle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-[#225B8E]/60 text-sm font-poppins">
              Princípios fundamentais para a nova esteira de governança
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mantém compatibilidade com imports default
export default SlidePrinciples;
