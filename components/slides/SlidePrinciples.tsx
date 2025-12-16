import React from "react";

const PRINCIPLES = [
  "ESTAMOS AQUI PARA FAZER MELHOR QUE TODOS.",
  "FOCAMOS A INOVAÇÃO CONSTANTEMENTE.",
  "SÓ ACREDITAMOS NO SIMPLES.",
  "SOMENTE ENTRAMOS NO MERCADO EM QUE PODEMOS FAZER UMA CONTRIBUIÇÃO SIGNIFICATIVA.",
  "TEMOS FOCO.",
  "ACREDITAMOS NA COLABORAÇÃO MÚTUA DOS NOSSOS GRUPOS.",
  "NÃO ACEITAMOS NADA QUE ESTEJA ABAIXO DO NÍVEL DE EXCELÊNCIA.",
  "SOMOS HUMILDES E HONESTOS PARA ADMITIR NOSSOS ERROS.",
  "SOMOS CORAJOSOS O SUFICIENTE PARA MUDARMOS QUANDO NECESSÁRIO.",
  "SOMOS FELIZES COM O QUE FAZEMOS.",
];

export const SlidePrinciples: React.FC = () => {
  return (
    <div className="relative h-full w-full flex flex-col">
      {/* Duas colunas */}
      <div className="flex-1 flex items-start gap-16 pt-6 px-8 overflow-hidden">
        {/* Coluna esquerda — título centralizado verticalmente */}
        <div className="w-[35%] flex flex-col justify-center">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold text-[#225B8E]/60 uppercase tracking-widest mb-2 font-poppins">
                Governança Locker
              </p>

              <h2 className="font-rubik text-[3.5rem] leading-[0.95] font-bold text-[#225B8E]">
                PRINCÍPIOS
                <br />
                INEGOCIÁVEIS
              </h2>
            </div>

            <div className="h-1 w-24 bg-gradient-to-r from-[#225B8E] to-[#2A898D] rounded-full" />
          </div>
        </div>

        {/* Coluna direita — princípios com fonte menor */}
        <div className="w-[65%] flex flex-col overflow-hidden">
          <div className="space-y-3">
            {PRINCIPLES.map((principle, index) => (
              <div
                key={principle}
                className="flex items-start gap-5 py-2 border-b border-[#225B8E]/10 last:border-b-0"
              >
                <span className="min-w-[52px] text-[1.4rem] font-rubik font-bold text-[#2A898D] leading-none pt-0.5">
                  {String(index + 1).padStart(2, "0")}.
                </span>

                <p className="text-[1.25rem] leading-[1.35] text-slate-800 font-poppins font-semibold">
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
