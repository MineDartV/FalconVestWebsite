import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-10", showText = true }) => {
  return (
    <div className="flex items-center space-x-3">
      {/* Falcon Logo SVG - Recreated based on the image */}
      <div className={`${className} relative`}>
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Falcon Head Circle */}
          <circle cx="80" cy="100" r="75" fill="#1a4d5a"/>
          
          {/* Falcon Details */}
          <path d="M70 85 Q65 80 60 85 Q65 90 70 85" fill="#fff"/>
          <circle cx="65" cy="85" r="5" fill="#0a1f2a"/>
          
          {/* Beak */}
          <path d="M55 95 L75 105 L55 110 Z" fill="#fff" stroke="#0a1f2a" strokeWidth="2"/>
          
          {/* Feathers */}
          <path d="M45 105 Q35 110 30 120 Q35 115 45 115 Z" fill="#2d6a7a" stroke="#0a1f2a" strokeWidth="1.5"/>
          <path d="M40 115 Q30 120 25 130 Q30 125 40 125 Z" fill="#2d6a7a" stroke="#0a1f2a" strokeWidth="1.5"/>
          <path d="M35 125 Q25 130 20 140 Q25 135 35 135 Z" fill="#2d6a7a" stroke="#0a1f2a" strokeWidth="1.5"/>
          
          {/* Chart Bars */}
          <rect x="120" y="130" width="15" height="40" fill="#2d6a7a" rx="2"/>
          <rect x="140" y="110" width="15" height="60" fill="#2d6a7a" rx="2"/>
          <rect x="160" y="90" width="15" height="80" fill="#2d6a7a" rx="2"/>
          
          {/* Upward Arrow */}
          <path d="M180 70 L190 60 L195 70 L190 65 L190 85 L185 85 L185 65 Z" fill="#2d6a7a"/>
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className="text-2xl font-black tracking-tight text-white leading-none">
            FALCONVEST
          </span>
          <span className="text-xs font-semibold tracking-widest text-dark-600">
            AI INVESTING
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
