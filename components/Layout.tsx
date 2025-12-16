import React from "react";

// Se Layout.tsx estiver em components/, use este import:
import timeLogo from "./slides/assets/time-logo.png";

// Se Layout.tsx estiver em components/slides/, use este:
// import timeLogo from "./assets/time-logo.png";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  currentSlide: number; // 0-index
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  hideHeader?: boolean; // true para capa, se necessário
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
      {/* Sidebar Left (novo layout com logo) */}
      <aside className="h-full w-[4%] min-w-[60px] bg-gradient-to-b from-[#225B8E] to-[#2A898D] flex flex-col justify-end items-center pb-8 shadow-lg z-20 shrink-0">
        <img
          src={timeLogo}
          alt="Logo TD&IA"
          className="object-contain rotate-90"
          style={{ maxWidth: "450%", height: "auto", marginBottom: "110px" }}
        />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative h-full">
        {/* Header */}
        {!hideHeader && title && (
          <header className="pt-10 px-16 pb-4 flex-none bg-white">
            <h1 className="text-4xl md:text-5xl font-bold font-rubik bg-clip-text text-transparent bg-gradient-to-r from-[#225B8E] to-[#2A898D]">
              {title}
            </h1>

            {subtitle && (
              <p className="font-poppins text-xl mt-2 font-medium text-[#3699BA]">
                {subtitle}
              </p>
            )}

            {/* Gradient Divider */}
            <div className="h-[2px] w-full mt-4 bg-gradient-to-r from-[#225B8E] to-[#2A898D] opacity-70 rounded-full" />
          </header>
        )}

        {/* Slide Content */}
        <main className="flex-1 px-16 py-8 overflow-hidden">{children}</main>

        {/* Navigation (triângulos discretos, canto inferior direito) */}
        <footer className="absolute bottom-6 right-8 flex items-center gap-5 z-50">
          <span className="font-poppins text-sm font-medium text-[#225B8E] opacity-60">
            {currentSlide + 1} / {totalSlides}
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={onPrev}
              disabled={isFirst}
              aria-label="Voltar"
              className={`p-2 rounded-full transition-colors ${
                isFirst
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-black/5"
              }`}
            >
              {/* Triângulo esquerda */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#225B8E]"
                style={{ transform: "rotate(180deg)" }}
              >
                <path d="M24 22H0L12 2z" />
              </svg>
            </button>

            <button
              onClick={onNext}
              disabled={isLast}
              aria-label="Avançar"
              className={`p-2 rounded-full transition-colors ${
                isLast
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-black/5"
              }`}
            >
              {/* Triângulo direita */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#2A898D]"
                style={{ transform: "rotate(0deg)" }}
              >
                <path d="M24 22H0L12 2z" />
              </svg>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
