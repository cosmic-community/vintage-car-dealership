'use client';

import { useEffect, useState } from 'react';

export default function CarAnimation() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Animated Road Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-vintage-gold to-transparent opacity-30">
        <div className="road-line"></div>
      </div>
      
      {/* Main Car Container */}
      <div className={`car-container ${isLoaded ? 'animate-float' : ''}`}>
        {/* Car SVG */}
        <svg
          width="300"
          height="120"
          viewBox="0 0 300 120"
          className="car-svg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Car Body */}
          <g className="car-body">
            {/* Main Body */}
            <path
              d="M50 80 L70 50 L90 45 L210 45 L230 50 L250 80 L50 80 Z"
              fill="url(#carGradient)"
              stroke="rgba(243, 229, 171, 0.3)"
              strokeWidth="1"
            />
            
            {/* Roof */}
            <path
              d="M85 50 L95 35 L205 35 L215 50 L85 50 Z"
              fill="url(#roofGradient)"
              stroke="rgba(243, 229, 171, 0.2)"
              strokeWidth="1"
            />
            
            {/* Front Bumper */}
            <rect
              x="45"
              y="75"
              width="25"
              height="8"
              rx="4"
              fill="url(#bumperGradient)"
            />
            
            {/* Rear Bumper */}
            <rect
              x="230"
              y="75"
              width="25"
              height="8"
              rx="4"
              fill="url(#bumperGradient)"
            />
            
            {/* Chrome Details */}
            <line
              x1="70"
              y1="65"
              x2="230"
              y2="65"
              stroke="rgba(243, 229, 171, 0.4)"
              strokeWidth="2"
            />
          </g>
          
          {/* Wheels */}
          <g className="wheels">
            {/* Front Wheel */}
            <circle
              cx="90"
              cy="88"
              r="15"
              fill="url(#wheelGradient)"
              stroke="rgba(243, 229, 171, 0.5)"
              strokeWidth="2"
            />
            <circle
              cx="90"
              cy="88"
              r="8"
              fill="url(#hubGradient)"
            />
            
            {/* Rear Wheel */}
            <circle
              cx="210"
              cy="88"
              r="15"
              fill="url(#wheelGradient)"
              stroke="rgba(243, 229, 171, 0.5)"
              strokeWidth="2"
            />
            <circle
              cx="210"
              cy="88"
              r="8"
              fill="url(#hubGradient)"
            />
          </g>
          
          {/* Headlights */}
          <g className="headlights">
            <circle
              cx="55"
              cy="60"
              r="6"
              fill="url(#headlightGradient)"
              className="animate-pulse-glow"
            />
            <circle
              cx="55"
              cy="60"
              r="3"
              fill="rgba(255, 255, 255, 0.9)"
              className="animate-pulse-glow"
            />
          </g>
          
          {/* Windows */}
          <g className="windows">
            {/* Windshield */}
            <path
              d="M90 50 L95 38 L150 38 L150 50 L90 50 Z"
              fill="url(#windowGradient)"
              opacity="0.7"
            />
            
            {/* Side Windows */}
            <path
              d="M155 50 L155 38 L200 38 L210 50 L155 50 Z"
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