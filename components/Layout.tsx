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
    <div className="flex h-screen w-screen overflow-hidden font-poppins text-slate-800">
      
      {/* Sidebar Left - SEU CÓDIGO ORIGINAL RESTAURADO */}
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
        {/* Header */}
        {!hideHeader && (
          <header className="pt-10 px-16 pb-4 flex-none bg-white">
            {title && (
              <h1 className="text-4xl md:text-5xl font-bold font-rubik bg-clip-text text-transparent bg-gradient-to-r from-[#225B8E] to-[#2A898D]">
                {title}
              </h1>
            )}

            {subtitle && (
              <p className="font-poppins text-xl mt-2 font-medium text-[#3699BA]">
                {subtitle}
              </p>
            )}

            <div className="h-[2px] w-full mt-4 bg-gradient-to-r from-[#225B8E] to-[#2A898D] opacity-70 rounded-full" />
          </header>
        )}

        {/* Slide Content */}
        <main className="flex-1 px-16 py-8 overflow-hidden">{children}</main>

        {/* Navigation - APENAS ESTE BLOCO FOI ALTERADO: < 01/09 > (Sem Blur) */}
        <footer className="absolute bottom-6 right-8 flex items-center gap-2 z-50 bg-white px-2 py-1">
          <button
            onClick={onPrev}
            disabled={isFirst}
            className={`p-2 transition-colors ${
              isFirst ? "opacity-10 cursor-not-allowed" : "text-[#225B8E] hover:bg-black/5 rounded-full"
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ transform: "rotate(-90deg)" }}>
              <path d="M24 22H0L12 2z" />
            </svg>
          </button>

          <span className="font-poppins text-sm font-bold text-[#225B8E] min-w-[55px] text-center">
            {String(currentSlide + 1).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}
          </span>

          <button
            onClick={onNext}
            disabled={isLast}
            className={`p-2 transition-colors ${
              isLast ? "opacity-10 cursor-not-allowed" : "text-[#2A898D] hover:bg-black/5 rounded-full"
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ transform: "rotate(90deg)" }}>
              <path d="M24 22H0L12 2z" />
            </svg>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Layout;