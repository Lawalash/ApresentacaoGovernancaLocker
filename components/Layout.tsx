import React from 'react';
import { Hexagon } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  hideHeader?: boolean; // For the cover slide if needed, though prompt implies consistent layout
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title, 
  subtitle,
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev,
  hideHeader = false
}) => {
  return (
    <div className="flex h-screen w-screen bg-slate-50 overflow-hidden text-slate-800 font-poppins">
      {/* Sidebar Left */}
      <div className="w-24 h-full bg-gradient-to-b from-[#225B8E] to-[#2A898D] flex flex-col items-center justify-between py-8 shadow-lg z-20 relative">
        <div className="text-white/80 text-xs font-rubik tracking-[0.3em] -rotate-90 mt-12 whitespace-nowrap">
          GOVERNANÇA LOCKER
        </div>
        
        {/* Decorative elements representing "circuit" or "tech" */}
        <div className="flex flex-col gap-4 items-center opacity-30">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-1 h-12 bg-white rounded-full"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>

        {/* Logo Footer Placeholder */}
        <div className="mb-4">
          <Hexagon className="text-white w-10 h-10 stroke-[1.5]" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative h-full">
        {/* Top Header Area */}
        {!hideHeader && title && (
          <div className="pt-10 px-16 pb-4 flex-none z-10 bg-slate-50">
            <h1 className="text-4xl md:text-5xl font-bold font-rubik uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#225B8E] to-[#2A898D]">
              {title}
            </h1>
            {subtitle && (
              <p className="text-[#3699BA] font-poppins text-xl mt-2 font-semibold tracking-tight">
                {subtitle}
              </p>
            )}
            {/* Gradient Line Divider */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#225B8E] to-[#2A898D] mt-4 rounded-full opacity-90 shadow-sm"></div>
          </div>
        )}

        {/* Scrollable Slide Content */}
        <div className="flex-1 px-16 py-8 relative overflow-hidden">
          {children}
        </div>

        {/* Navigation - Bottom Right */}
        <div className="absolute bottom-6 right-8 flex items-center gap-3 z-50">
          <span className="text-[#225B8E] font-rubik font-semibold text-sm opacity-70">
            {currentSlide + 1} / {totalSlides}
          </span>
          <button
            aria-label="Voltar"
            onClick={onPrev}
            disabled={currentSlide === 0}
            className="w-10 h-10 flex items-center justify-center rounded-md bg-white/90 shadow-md border border-white/40 text-[#225B8E] disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="rotate-180">
              <path d="M24 22h-24l12-20z" />
            </svg>
          </button>
          <button
            aria-label="Avançar"
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className="w-10 h-10 flex items-center justify-center rounded-md bg-gradient-to-br from-[#225B8E] to-[#2A898D] shadow-md text-white disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="rotate-90">
              <path d="M24 22h-24l12-20z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout;
