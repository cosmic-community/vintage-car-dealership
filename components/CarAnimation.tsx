'use client';

import { useEffect, useState } from 'react';

export default function CarAnimation() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Animated Road Lines */}
      <div className="absolute bottom-8 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-vintage-gold to-transparent opacity-30">
        <div className="road-line"></div>
      </div>
      
      {/* Main Car Container */}
      <div className={`car-container ${isLoaded ? 'animate-float' : ''}`}>
        {/* Car SVG */}
        <svg
          width="320"
          height="140"
          viewBox="0 0 320 140"
          className="car-svg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Car Body */}
          <g className="car-body">
            {/* Main Body */}
            <path
              d="M60 90 L80 60 L100 55 L220 55 L240 60 L260 90 L60 90 Z"
              fill="url(#carGradient)"
              stroke="rgba(243, 229, 171, 0.3)"
              strokeWidth="2"
            />
            
            {/* Roof */}
            <path
              d="M95 60 L105 45 L215 45 L225 60 L95 60 Z"
              fill="url(#roofGradient)"
              stroke="rgba(243, 229, 171, 0.2)"
              strokeWidth="1"
            />
            
            {/* Front Bumper */}
            <rect
              x="55"
              y="85"
              width="25"
              height="10"
              rx="5"
              fill="url(#bumperGradient)"
            />
            
            {/* Rear Bumper */}
            <rect
              x="240"
              y="85"
              width="25"
              height="10"
              rx="5"
              fill="url(#bumperGradient)"
            />
            
            {/* Chrome Details */}
            <line
              x1="80"
              y1="75"
              x2="240"
              y2="75"
              stroke="rgba(243, 229, 171, 0.4)"
              strokeWidth="2"
            />
            
            {/* Grille */}
            <rect
              x="45"
              y="65"
              width="15"
              height="15"
              rx="2"
              fill="url(#grilleGradient)"
            />
          </g>
          
          {/* Wheels */}
          <g className="wheels">
            {/* Front Wheel */}
            <circle
              cx="100"
              cy="98"
              r="18"
              fill="url(#wheelGradient)"
              stroke="rgba(243, 229, 171, 0.5)"
              strokeWidth="2"
            />
            <circle
              cx="100"
              cy="98"
              r="10"
              fill="url(#hubGradient)"
            />
            
            {/* Rear Wheel */}
            <circle
              cx="220"
              cy="98"
              r="18"
              fill="url(#wheelGradient)"
              stroke="rgba(243, 229, 171, 0.5)"
              strokeWidth="2"
            />
            <circle
              cx="220"
              cy="98"
              r="10"
              fill="url(#hubGradient)"
            />
          </g>
          
          {/* Headlights */}
          <g className="headlights">
            <circle
              cx="65"
              cy="70"
              r="8"
              fill="url(#headlightGradient)"
              className="animate-pulse-glow"
            />
            <circle
              cx="65"
              cy="70"
              r="4"
              fill="rgba(255, 255, 255, 0.9)"
              className="animate-pulse-glow"
            />
          </g>
          
          {/* Windows */}
          <g className="windows">
            {/* Windshield */}
            <path
              d="M100 60 L105 48 L160 48 L160 60 L100 60 Z"
              fill="url(#windowGradient)"
              opacity="0.7"
            />
            
            {/* Side Windows */}
            <path
              d="M165 60 L165 48 L210 48 L220 60 L165 60 Z"
              fill="url(#windowGradient)"
              opacity="0.7"
            />
          </g>
          
          {/* Gradients */}
          <defs>
            <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(139, 69, 19, 0.9)" />
              <stop offset="50%" stopColor="rgba(160, 82, 45, 0.8)" />
              <stop offset="100%" stopColor="rgba(101, 67, 33, 0.9)" />
            </linearGradient>
            
            <linearGradient id="roofGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(101, 67, 33, 0.9)" />
              <stop offset="100%" stopColor="rgba(139, 69, 19, 0.8)" />
            </linearGradient>
            
            <linearGradient id="bumperGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(218, 165, 32, 0.8)" />
              <stop offset="100%" stopColor="rgba(184, 134, 11, 0.9)" />
            </linearGradient>
            
            <linearGradient id="grilleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(28, 25, 23, 1)" />
              <stop offset="100%" stopColor="rgba(41, 37, 36, 0.9)" />
            </linearGradient>
            
            <radialGradient id="wheelGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(41, 37, 36, 0.9)" />
              <stop offset="100%" stopColor="rgba(28, 25, 23, 1)" />
            </radialGradient>
            
            <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(218, 165, 32, 0.8)" />
              <stop offset="100%" stopColor="rgba(184, 134, 11, 0.9)" />
            </radialGradient>
            
            <radialGradient id="headlightGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
              <stop offset="100%" stopColor="rgba(218, 165, 32, 0.7)" />
            </radialGradient>
            
            <linearGradient id="windowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(135, 206, 235, 0.3)" />
              <stop offset="100%" stopColor="rgba(25, 25, 112, 0.5)" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Exhaust Smoke */}
        <div className="exhaust-smoke">
          <div className="smoke-puff smoke-1"></div>
          <div className="smoke-puff smoke-2"></div>
          <div className="smoke-puff smoke-3"></div>
        </div>
      </div>
      
      {/* Decorative Sparkles */}
      <div className="sparkles">
        <div className="sparkle sparkle-1"></div>
        <div className="sparkle sparkle-2"></div>
        <div className="sparkle sparkle-3"></div>
        <div className="sparkle sparkle-4"></div>
      </div>
    </div>
  );
}