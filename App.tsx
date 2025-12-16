import React, { useState } from "react";
import Layout from "./components/Layout";

import Slide0 from "./components/slides/Slide0";
import Slide1 from "./components/slides/Slide1";
import SlidePrinciples from "./components/slides/SlidePrinciples";
import Slide2 from "./components/slides/Slide2";
import Slide3 from "./components/slides/Slide3";
import Slide4 from "./components/slides/Slide4";
import Slide5 from "./components/slides/Slide5";
import Slide6 from "./components/slides/Slide6";
import Slide7 from "./components/slides/Slide7";

type SlideConfig = {
  component: React.ReactNode;
  title: string;
  subtitle?: string;
  hideHeader?: boolean;
};

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slides: SlideConfig[] = [
    // 1) Capa
    { component: <Slide1 />, title: "", subtitle: "", hideHeader: true },

    // 2) Principles (sem header global do Layout)
    { component: <SlidePrinciples />, title: "", subtitle: "", hideHeader: true },

    // 3) Trilho A
    { component: <Slide3 />, title: "Trilho A: Novas Operações", subtitle: "Fluxo de Pedido de Locker" },

    // 4) Contexto
    { component: <Slide2 />, title: "Contexto", subtitle: "O que funciona + Onde nasce o ruído" },

    // 5) Abertura (se quiser que esse venha antes do Contexto, é só trocar a posição)
    { component: <Slide0 />, title: "Abertura", subtitle: "Alinhamento Executivo | Governança Locker" },

    // 6) Checklist
    { component: <Slide4 />, title: "Checklist Padrão", subtitle: "Filtro de entrada da Governança" },

    // 7) Trilho B
    { component: <Slide5 />, title: "Trilho B: Governança Ativa", subtitle: "Nós vamos até a operação (Modelo BTG)" },

    // 8) Operação em Paralelo
    { component: <Slide6 />, title: "Operação em Paralelo", subtitle: "Como rodamos sem conflitos" },

    // 9) Próximos passos
    { component: <Slide7 />, title: "Aprovações & Próximos Passos", subtitle: "Saídas do encontro de hoje" },
  ];

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  };

  const currentSlideConfig = slides[currentSlideIndex];

  return (
    <Layout
      currentSlide={currentSlideIndex}
      totalSlides={slides.length}
      onNext={nextSlide}
      onPrev={prevSlide}
      title={currentSlideConfig.title}
      subtitle={currentSlideConfig.subtitle}
      hideHeader={currentSlideConfig.hideHeader}
    >
      {currentSlideConfig.component}
    </Layout>
  );
};

export default App;
