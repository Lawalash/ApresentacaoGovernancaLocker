import React from 'react';
import { Check } from 'lucide-react';

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
  "Redução de ruído e retrabalho"
];

const SlidePrinciples: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {principles.map((principle, index) => (
          <div 
            key={index}
            className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#225B8E] to-[#2A898D] flex items-center justify-center text-white">
              <Check className="w-6 h-6" />
            </div>
            <span className="text-lg font-medium text-gray-700 font-poppins">{principle}</span>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center text-[#225B8E]/60 text-sm">
        Princípios fundamentais para a nova esteira de governança
      </div>
    </div>
  );
};

export default SlidePrinciples;
