import React from "react";

const PRINCIPLES = [
  "Uma entrada oficial e rastreável",
  "Pedido só existe com chamado",
  "Formalização obrigatória para Governança",
  "Checklist mínimo antes de executar",
  "Prioridade definida antes de iniciar",
  "Execução com responsáveis claros",
  "Validação simples de "pronto"",
  "Comunicação e treinamento fazem parte do processo",
  "Registro do que foi feito (rastreabilidade)",
  "Redução de ruído e retrabalho",
];

export const SlidePrinciples: React.FC = () => {
  return (
    <div className="relative h-full w-full flex flex-col">
      {/* Duas colunas (mesma estrutura do layout de referência) */}
      <div className="flex-1 flex gap-16 relative overflow-hidden">
        {/* Coluna esquerda (bloco de título/descrição) */}
        <div className="w-1/3 flex flex-col justify-center">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-[#225B8E]/60 uppercase tracking-widest mb-2 font-poppins">
                Governança Locker
              </p>
              <h2 className="font-rubik text-5xl font-bold text-[#225B8E] leading-tight">
                PRINCÍPIOS
                <br />
                INEGOCIÁVEIS
              </h2>
            </div>

            <div className="h-1 w-24 bg-gradient-to-r from-[#225B8E] to-[#2A898D] rounded-full" />
          </div>
        </div>

        {/* Coluna direita (lista) */}
        <div className="w-2/3 flex flex-col">
          <div className="space-y-3">
            {PRINCIPLES.map((principle, index) => (
              <div
                key={principle}
                className="flex items-start gap-4 pb-3 border-b border-[#225B8E]/10 last:border-b-0"
              >
                <div className="flex-1">
                  <p className="text-sm leading-relaxed text-slate-800 font-poppins font-semibold">
                    {String(index + 1).padStart(2, "0")}.
                    <span className="ml-2 text-slate-700 font-medium">{principle}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SlidePrinciples;