import React from "react";
import timeLogo from "./slides/assets/time-logo.png";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  hideHeader?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  subtitle,
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  hideHeader = false,
}) => {
  const isFirst = currentSlide === 0;
  const isLast = currentSlide === totalSlides - 1;

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-white font-poppins text-slate-800">
      {/* Sidebar Left */}
      <aside className="h-full w-[4%] min-w-[70px] bg-gradient-to-b from-[#225B8E] to-[#2A898D] flex flex-col justify-end items-center pb-12 shadow-2xl z-20 shrink-0">
        <div className="relative h-full w-full flex flex-col justify-end items-center pb-20">
          <img
            src={timeLogo}
            alt="Logo TD&IA"
            className="object-contain"
            style={{ 
              transform: "rotate(-90deg)", 
              width: "350px", 
              marginBottom: "80px",
              filter: "brightness(0) invert(1)" // Garante que a logo fique branca se necessário
            }}
          />
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative h-full">
        {!hideHeader && (
          <header className="pt-12 px-16 pb-2 flex-none bg-white">
            <h1 className="text-4xl md:text-5xl font-bold font-rubik bg-clip-text text-transparent bg-gradient-to-r from-[#225B8E] to-[#2A898D] tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="font-poppins text-xl mt-2 font-medium text-[#3699BA] opacity-90">
                {subtitle}
              </p>
            )}
            <div className="h-[3px] w-full mt-6 bg-gradient-to-r from-[#225B8E] via-[#2A898D] to-transparent opacity-30 rounded-full" />
          </header>
        )}

        <main className={`flex-1 px-16 ${hideHeader ? 'py-12' : 'py-8'} overflow-hidden relative`}>
          {children}
        </main>

        {/* Navigation - Novo layout: < 01/09 > */}
        <footer className="absolute bottom-8 right-10 flex items-center gap-2 z-50 bg-white px-3 py-1 rounded-lg">
          {/* Botão Voltar */}
          <button
            onClick={onPrev}
            disabled={isFirst}
            className={`p-2 transition-all ${
              isFirst ? "opacity-10 cursor-not-allowed" : "hover:text-[#225B8E] text-slate-400 active:scale-90"
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 22H0L12 2z" transform="rotate(-90 12 12)" />
            </svg>
          </button>

          {/* Contador Centralizado */}
          <div className="flex items-center justify-center min-w-[60px]">
            <span className="font-rubik text-sm font-bold text-slate-700 tracking-tighter">
              {String(currentSlide + 1).padStart(2, '0')}
              <span className="text-slate-300 mx-1 font-light">/</span>
              {String(totalSlides).padStart(2, '0')}
            </span>
          </div>

          {/* Botão Avançar */}
          <button
            onClick={onNext}
            disabled={isLast}
            className={`p-2 transition-all ${
              isLast ? "opacity-10 cursor-not-allowed" : "hover:text-[#2A898D] text-slate-400 active:scale-90"
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 22H0L12 2z" transform="rotate(90 12 12)" />
            </svg>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Layout;