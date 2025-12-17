import React, { useState, useEffect, useCallback } from "react";
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
import Slide8 from "./components/slides/Slide8";

type SlideConfig = {
  component: React.ReactNode;
  title: string;
  subtitle?: string;
  hideHeader?: boolean;
};

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slides: SlideConfig[] = [
    // SLIDE 1: Capa
    { component: <Slide1 />, title: "", subtitle: "", hideHeader: true },

    // SLIDE 2: Princípios Inegociáveis
    { component: <SlidePrinciples />, title: "", subtitle: "", hideHeader: true },

    // SLIDE 3: Contexto
    { component: <Slide2 />, title: "Contexto", subtitle: "O que funciona + Onde nasce o ruído" },

    // SLIDE 4: Abertura / Por que estamos aqui
    { component: <Slide0 />, title: "Abertura", subtitle: "Alinhamento Executivo | Governança Locker" },

    // SLIDE 5: Trilho A (O fluxo que acabamos de otimizar)
    { component: <Slide3 />, title: "Trilho A: Novas Operações", subtitle: "Fluxo de Pedido de Locker" },

    // SLIDE 6: Checklist
    { component: <Slide4 />, title: "Checklist Padrão", subtitle: "Filtro de entrada da Governança" },

    // SLIDE 7: Trilho B
    { component: <Slide5 />, title: "Trilho B: Governança Ativa", subtitle: "Nós vamos até a operação (Modelo BTG)" },

    // SLIDE 8: Operação em Paralelo
    { component: <Slide6 />, title: "Operação em Paralelo", subtitle: "Como rodamos sem conflitos" },

    // SLIDE 9: Próximos passos
    { component: <Slide7 />, title: "Aprovações & Próximos Passos", subtitle: "Saídas do encontro de hoje" },

    // SLIDE 10: Próximos passos
    { component: <Slide8 />, title: "Finalização", subtitle: "Finalização" },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Navegação por Teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

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