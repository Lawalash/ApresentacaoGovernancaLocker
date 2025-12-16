import React, { useState } from 'react';
import Layout from './components/Layout';
import Slide0 from './components/slides/Slide0';
import Slide1 from './components/slides/Slide1';
import SlidePrinciples from './components/slides/SlidePrinciples';
import Slide2 from './components/slides/Slide2';
import Slide3 from './components/slides/Slide3';
import Slide4 from './components/slides/Slide4';
import Slide5 from './components/slides/Slide5';
import Slide6 from './components/slides/Slide6';
import Slide7 from './components/slides/Slide7';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Define slides configuration
  const slides = [
    { component: <Slide1 />, title: "", subtitle: "", hideHeader: true }, // Capa
    { component: <SlidePrinciples />, title: "Princípios", subtitle: "Fundamentos da Governança" },
    { component: <Slide3 />, title: "Trilho A: Novas Operações", subtitle: "Fluxo de Pedido de Locker" },
    { component: <Slide2 />, title: "Contexto", subtitle: "O que funciona + Onde nasce o ruído" },
    { component: <Slide0 />, title: "Abertura", subtitle: "Alinhamento Executivo | Governança Locker" },
    { component: <Slide4 />, title: "Checklist Padrão", subtitle: "Filtro de entrada da Governança" },
    { component: <Slide5 />, title: "Trilho B: Governança Ativa", subtitle: "Nós vamos até a operação (Modelo BTG)" },
    { component: <Slide6 />, title: "Operação em Paralelo", subtitle: "Como rodamos sem conflitos" },
    { component: <Slide7 />, title: "Aprovações & Próximos Passos", subtitle: "Saídas do encontro de hoje" },
  ];

  const nextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
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
