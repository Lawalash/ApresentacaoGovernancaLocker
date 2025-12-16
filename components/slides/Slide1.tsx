import React from 'react';
import { Illustration } from '../Illustration';

const Slide1: React.FC = () => {
  return (
    <div className="h-full flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="md:w-1/2 space-y-8">
        <div className="inline-block px-4 py-2 bg-[#225B8E]/10 rounded-full text-[#225B8E] font-bold tracking-wide text-sm">
          ALINHAMENTO ESTRATÉGICO
        </div>
        
        <h1 className="text-6xl font-bold font-rubik leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#225B8E] to-[#2A898D]">
          Governança Locker
        </h1>
        
        <h2 className="text-3xl text-gray-600 font-light font-poppins">
          Esteira de novas operações <br/>
          <span className="text-[#3699BA] font-medium">+ Governança ativa (modelo BTG)</span>
        </h2>
        
        <div className="h-1 w-32 bg-gradient-to-r from-[#45C5DE] to-[#3BC2C7]"></div>
        
        <p className="text-xl text-gray-500 italic max-w-md">
          “Decisão centralizada. Execução coordenada. Comunicação padronizada.”
        </p>
      </div>
      
      <div className="md:w-1/2 flex justify-center">
        <Illustration className="w-full max-w-lg drop-shadow-2xl" />
      </div>
    </div>
  );
};

export default Slide1;
