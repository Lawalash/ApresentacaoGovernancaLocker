import React from "react";
import { motion } from "framer-motion";

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

const SlidePrinciples: React.FC = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="h-full w-full flex gap-16">
        {/* Coluna esquerda */}
        <motion.section
          className="w-1/3 flex flex-col justify-center"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#225B8E]/60 font-poppins mb-2">
                TD&amp;IA • AeC
              </p>

              <h2 className="font-rubik text-5xl font-bold leading-tight text-[#225B8E]">
                PRINCÍPIOS
                <br />
                INEGOCIÁVEIS
              </h2>
            </div>

            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-[#225B8E] to-[#2A898D]" />

            <p className="font-poppins text-base text-slate-600 leading-relaxed">
              O que nos guia em cada decisão: foco no simples, inovação constante e excelência na entrega.
            </p>
          </div>
        </motion.section>

        {/* Coluna direita */}
        <motion.section
          className="w-2/3 overflow-hidden"
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <div className="h-full overflow-auto pr-2">
            <div className="space-y-4">
              {PRINCIPLES.map((principle, index) => (
                <motion.div
                  key={`${index}-${principle}`}
                  className="flex items-start gap-6 pb-4 border-b border-slate-200/80 last:border-b-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.08 + index * 0.04 }}
                >
                  <span className="text-[#2A898D] font-rubik font-bold text-lg min-w-[44px] pt-1">
                    {String(index + 1).padStart(2, "0")}.
                  </span>

                  <p
                    className={[
                      "font-poppins text-base leading-relaxed pt-1",
                      index === 1
                        ? "text-slate-900 font-semibold"
                        : "text-slate-700 font-medium",
                    ].join(" ")}
                  >
                    {principle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default SlidePrinciples;
