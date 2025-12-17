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
      {/* Sidebar Left - Identidade Visual Executiva */}
      <aside className="h-full w-[4%] min-w-[70px] bg-gradient-to-b from-[#225B8E] to-[#2A898D] flex flex-col justify-end items-center pb-12 shadow-2xl z-20 shrink-0">
        <div className="relative h-full w-full flex flex-col justify-end items-center pb-20">
            <img
            src={timeLogo}
            alt="Logo TD&IA"
            className="object-contain rotate-[-90deg] origin-center w-[400%] max-w-none opacity-90"
            style={{ transform: "rotate(-90deg) translateX(50%)", width: "350px" }}
            />
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative h-full">
        {/* Header - Apenas se não for capa/principles */}
        {!hideHeader && (
          <header className="pt-12 px-16 pb-2 flex-none bg-white">
            {title && (
              <h1 className="text-4xl md:text-5xl font-bold font-rubik bg-clip-text text-transparent bg-gradient-to-r from-[#225B8E] to-[#2A898D] tracking-tight">
                {title}
              </h1>
            )}

            {subtitle && (
              <p className="font-poppins text-xl mt-2 font-medium text-[#3699BA] opacity-90">
                {subtitle}
              </p>
            )}

            {/* Linha de Separação Elegante */}
            <div className="h-[3px] w-full mt-6 bg-gradient-to-r from-[#225B8E] via-[#2A898D] to-transparent opacity-30 rounded-full" />
          </header>
        )}

        {/* Slide Content - Área de respiro otimizada para compartilhamento de tela */}
        <main className={`flex-1 px-16 ${hideHeader ? 'py-12' : 'py-8'} overflow-hidden relative`}>
          {children}
        </main>

        {/* Navigation - Canto inferior direito */}
        <footer className="absolute bottom-8 right-10 flex items-center gap-6 z-50 bg-white/80 backdrop-blur-sm pl-4 py-2 rounded-full shadow-sm">
          <div className="flex flex-col items-end">
            <span className="font-rubik text-xs font-bold text-[#225B8E] uppercase tracking-widest opacity-40">
                Progresso
            </span>
            <span className="font-poppins text-sm font-bold text-[#2A898D]">
                {String(currentSlide + 1).padStart(2, '0')} <span className="text-slate-300 mx-1">/</span> {String(totalSlides).padStart(2, '0')}
            </span>
          </div>

          <div className="flex items-center gap-2 border-l border-slate-100 pl-4">
            <button
              onClick={onPrev}
              disabled={isFirst}
              title="Anterior (Seta Esquerda)"
              className={`p-3 rounded-xl transition-all ${
                isFirst
                  ? "opacity-10 cursor-not-allowed"
                  : "hover:bg-slate-100 text-[#225B8E] active:scale-90"
              }`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 22H0L12 2z" transform="rotate(-90 12 12)" />
              </svg>
            </button>

            <button
              onClick={onNext}
              disabled={isLast}
              title="Próximo (Seta Direita)"
              className={`p-3 rounded-xl transition-all ${
                isLast
                  ? "opacity-10 cursor-not-allowed"
                  : "hover:bg-slate-100 text-[#2A898D] active:scale-90"
              }`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 22H0L12 2z" transform="rotate(90 12 12)" />
              </svg>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;