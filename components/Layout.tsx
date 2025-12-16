import React from 'react';
import { ChevronRight, ChevronLeft, Hexagon } from 'lucide-react';

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
    <div className="flex h-screen w-screen bg-slate-50 overflow-hidden text-slate-800">
      {/* Sidebar Left */}
      <div className="w-24 h-full bg-gradient-to-b from-[#225B8E] to-[#2A898D] flex flex-col items-center justify-between py-8 shadow-2xl z-20 relative">
        <div className="text-white/80 text-xs font-rubik tracking-widest -rotate-90 mt-12 whitespace-nowrap">
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
              <p className="text-[#3699BA] font-rubik text-xl mt-2 font-medium">
                {subtitle}
              </p>
            )}
            {/* Gradient Line Divider */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#225B8E] to-[#2A898D] mt-4 rounded-full opacity-80 shadow-sm"></div>
          </div>
        )}

        {/* Scrollable Slide Content */}
        <div className="flex-1 overflow-y-auto px-16 py-8 relative">
          {children}
        </div>

        {/* Navigation - Bottom Right */}
        <div className="absolute bottom-8 right-12 flex items-center gap-6 z-50">
           <span className="text-[#225B8E] font-rubik font-bold text-lg opacity-40 mr-4">
            {currentSlide + 1} / {totalSlides}
          </span>
          <button 
            onClick={onPrev} 
            disabled={currentSlide === 0}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-[#225B8E]"
          >
            {/* Triangle pointing left */}
             <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="rotate-180">
                <path d="M24 22h-24l12-20z" />
            </svg>
          </button>
          
          <button 
            onClick={onNext} 
            disabled={currentSlide === totalSlides - 1}
            className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#225B8E] to-[#2A898D] shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-white"
          >
             {/* Triangle pointing right */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="rotate-90 translate-x-1">
                <path d="M24 22h-24l12-20z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout;
