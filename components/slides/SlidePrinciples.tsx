import React from "react";

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
    <div className="relative h-full w-full flex flex-col">
      {/* Duas colunas (mesma estrutura) */}
      <div className="flex-1 flex items-start gap-[27rem] pt-10 overflow-hidden">
        {/* Coluna esquerda (título) */}
        <div className="w-1/3 flex flex-col">
          <div className="space-y-10">
            <div>
              <p className="text-sm font-semibold text-[#225B8E]/60 uppercase tracking-widest mb-3 font-poppins">
                Governança Locker
              </p>

              {/* “text-5xl” equivalente ao que você quer (5rem) sem override global */}
              <h2 className="font-rubik text-[5rem] leading-none font-bold text-[#225B8E]">
                PRINCÍPIOS
                <br />
                INEGOCIÁVEIS
              </h2>
            </div>

            <div className="h-1 w-28 bg-gradient-to-r from-[#225B8E] to-[#2A898D] rounded-full" />

            <p className="font-poppins text-lg text-slate-600 leading-relaxed max-w-[28ch]">
              Base mínima para uma esteira simples, rastreável e previsível.
            </p>
          </div>
        </div>

        {/* Coluna direita (lista) */}
        <div className="w-2/3 flex flex-col overflow-hidden">
          <div className="space-y-6">
            {PRINCIPLES.map((principle, index) => (
              <div
                key={principle}
                className="flex items-start gap-6 py-3 border-b border-[#225B8E]/10 last:border-b-0"
              >
                <span className="min-w-[56px] text-xl font-rubik font-bold text-[#2A898D]">
                  {String(index + 1).padStart(2, "0")}.
                </span>

                <p className="text-xl leading-snug text-slate-800 font-poppins font-medium">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidePrinciples;
