import React from 'react';

// Using the provided palette to recolor a generic SVG structure that mimics unDraw style
export const Illustration: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 800 600" 
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#225B8E', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#2A898D', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    
    {/* Abstract Background Shapes */}
    <circle cx="600" cy="300" r="150" fill="#3699BA" opacity="0.1" />
    <path d="M50,550 Q200,450 350,550 T650,550" fill="none" stroke="#2A898D" strokeWidth="2" opacity="0.3" />
    
    {/* Character/Object Representation - Geometric & Clean */}
    <rect x="250" y="200" width="200" height="140" rx="10" fill="url(#grad1)" />
    <rect x="270" y="220" width="160" height="80" rx="5" fill="#ffffff" opacity="0.9" />
    <circle cx="350" cy="260" r="20" fill="#45C5DE" />
    
    {/* "Locker" representation */}
    <rect x="480" y="150" width="100" height="200" rx="4" fill="#225B8E" />
    <rect x="490" y="160" width="80" height="20" rx="2" fill="#3BC2C7" />
    <rect x="490" y="190" width="80" height="20" rx="2" fill="#3BC2C7" opacity="0.8" />
    <rect x="490" y="220" width="80" height="20" rx="2" fill="#3BC2C7" opacity="0.6" />
    
    {/* Person simplified */}
    <circle cx="200" cy="250" r="40" fill="#2A898D" />
    <path d="M160,350 Q200,290 240,350 V450 H160 Z" fill="#225B8E" />
    
    {/* Decorative dots */}
    <circle cx="700" cy="100" r="5" fill="#45C5DE" />
    <circle cx="720" cy="120" r="8" fill="#3699BA" />
    <circle cx="100" cy="500" r="10" fill="#225B8E" opacity="0.2" />
  </svg>
);
