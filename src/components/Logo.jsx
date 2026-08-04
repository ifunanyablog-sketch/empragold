import React from 'react';

export const LogoIcon = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      viewBox="0 0 300 300" 
      className={`drop-shadow-[0_4px_12px_rgba(0,117,255,0.25)] ${className}`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Bright Royal Blue 3D Gradients */}
        <linearGradient id="blueFront" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00A3FF" />
          <stop offset="40%" stopColor="#0075FF" />
          <stop offset="100%" stopColor="#0047AB" />
        </linearGradient>
        <linearGradient id="blueBevel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0047AB" />
          <stop offset="100%" stopColor="#002166" />
        </linearGradient>

        {/* 24K Pure Gold 3D Gradients */}
        <linearGradient id="goldFront" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2A1" />
          <stop offset="30%" stopColor="#FFDF00" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B38700" />
        </linearGradient>
        <linearGradient id="goldBevel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B38700" />
          <stop offset="100%" stopColor="#5E4300" />
        </linearGradient>

        {/* 3D Soft Shadow */}
        <filter id="shadow3d" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#000000" floodOpacity="0.35" />
        </filter>
      </defs>

      <g filter="url(#shadow3d)">
        {/* --- CHIMNEY --- */}
        {/* Chimney on Left Roof Slope */}
        <path d="M 92 52 L 108 52 L 108 80 L 92 70 Z" fill="url(#blueFront)" />
        <path d="M 108 52 L 113 52 L 113 83 L 108 80 Z" fill="url(#blueBevel)" />

        {/* --- 3D ROOF PEAK (Royal Blue) --- */}
        {/* Main Roof Outer/Front Face */}
        <path 
          d="M 150 20 L 268 92 L 250 104 L 150 42 L 50 104 L 32 92 Z" 
          fill="url(#blueFront)" 
        />
        {/* Roof 3D Bottom Bevel Edge */}
        <path 
          d="M 32 92 L 50 104 L 150 42 L 250 104 L 268 92 L 250 110 L 150 48 L 50 110 Z" 
          fill="url(#blueBevel)" 
        />

        {/* --- 4 GOLD WINDOW PANES (2x2 Grid under Roof Peak) --- */}
        <g fill="url(#goldFront)">
          <rect x="141" y="58" width="7" height="7" rx="0.5" />
          <rect x="152" y="58" width="7" height="7" rx="0.5" />
          <rect x="141" y="69" width="7" height="7" rx="0.5" />
          <rect x="152" y="69" width="7" height="7" rx="0.5" />
        </g>
        <g fill="url(#goldBevel)" opacity="0.8">
          <path d="M 141 65 L 148 65 L 148 65.8 L 141 65.8 Z" />
          <path d="M 152 65 L 159 65 L 159 65.8 L 152 65.8 Z" />
          <path d="M 141 76 L 148 76 L 148 76.8 L 141 76.8 Z" />
          <path d="M 152 76 L 159 76 L 159 76.8 L 152 76.8 Z" />
        </g>

        {/* --- STYLIZED MONOGRAM "E" (3D Gold) & "G" (3D Blue) --- */}

        {/* Letter "E" (Metallic 3D Gold) */}
        <g>
          {/* Main Front Face of E */}
          <path 
            d="M 85 88 L 144 88 L 144 112 L 105 112 L 105 136 L 138 136 L 138 160 L 105 160 L 105 186 L 144 186 L 144 210 L 85 210 Z" 
            fill="url(#goldFront)" 
          />
          {/* 3D Depth Sides & Bevels of E */}
          <path 
            d="M 85 210 L 144 210 L 144 216 L 79 216 L 79 88 L 85 88 Z" 
            fill="url(#goldBevel)" 
          />
          <path 
            d="M 105 112 L 144 112 L 144 117 L 105 117 Z" 
            fill="url(#goldBevel)" 
          />
          <path 
            d="M 105 160 L 138 160 L 138 165 L 105 165 Z" 
            fill="url(#goldBevel)" 
          />
        </g>

        {/* Letter "G" (Royal 3D Blue) */}
        <g>
          {/* Main Front Face of G */}
          <path 
            d="M 152 88 L 210 88 L 210 112 L 170 112 L 170 186 L 195 186 L 195 152 L 180 152 L 180 132 L 210 132 L 210 210 L 152 210 Z" 
            fill="url(#blueFront)" 
          />
          {/* 3D Depth Sides & Bevels of G */}
          <path 
            d="M 152 210 L 210 210 L 210 216 L 146 216 L 146 88 L 152 88 Z" 
            fill="url(#blueBevel)" 
          />
          <path 
            d="M 170 112 L 210 112 L 210 117 L 170 117 Z" 
            fill="url(#blueBevel)" 
          />
          <path 
            d="M 180 152 L 195 152 L 195 156 L 180 156 Z" 
            fill="url(#blueBevel)" 
          />
        </g>
      </g>
    </svg>
  );
};

export const Logo = ({ layout = "horizontal", showRc = true, className = "" }) => {
  if (layout === "compact") {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <LogoIcon className="w-10 h-10 shrink-0" />
        <div className="flex flex-col text-left leading-none">
          <span className="font-black text-lg tracking-wider text-gold-gradient uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
            EMPRAGOLD
          </span>
          <span className="text-[9.5px] font-black text-[#0075FF] tracking-wider uppercase mt-0.5">
            ESTATE REALTORS LTD
          </span>
          {showRc && (
            <span className="text-[8.5px] font-extrabold text-[#C58B00] tracking-wider uppercase mt-0.5">
              RC: 8323733
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <LogoIcon className="w-20 h-20 sm:w-24 sm:h-24 mb-2" />
      <div className="flex flex-col items-center leading-tight">
        <span className="font-black text-2xl sm:text-3xl tracking-widest text-gold-gradient uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
          EMPRAGOLD
        </span>
        <span className="text-xs sm:text-sm font-black text-[#0075FF] tracking-[0.2em] uppercase mt-0.5">
          ESTATE REALTORS LTD
        </span>
        {showRc && (
          <span className="text-[10.5px] sm:text-xs font-bold text-[#C58B00] tracking-widest uppercase mt-1">
            RC: 8323733
          </span>
        )}
      </div>
    </div>
  );
};


