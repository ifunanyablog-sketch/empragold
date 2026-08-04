import React from 'react';

export const LogoIcon = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      viewBox="0 0 300 300" 
      className={`drop-shadow-[0_0_12px_rgba(168,85,247,0.45)] ${className}`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Roof Glowing Violet/Fuchsia Gradient (Matching Villa Ambient Lighting) */}
        <linearGradient id="roofTwilight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0abfc" />
          <stop offset="40%" stopColor="#c084fc" />
          <stop offset="80%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>

        {/* Champagne Gold Metallic Gradient for 'E' */}
        <linearGradient id="goldTwilight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="35%" stopColor="#f59e0b" />
          <stop offset="70%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>

        {/* Electric Fuchsia/Purple Gradient for 'G' */}
        <linearGradient id="purpleTwilight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e879f9" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>

        {/* 3D Drop Shadows */}
        <filter id="shadow3d" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="3" dy="6" stdDeviation="5" floodColor="#0c0914" floodOpacity="0.85" />
        </filter>
      </defs>

      <g filter="url(#shadow3d)">
        {/* --- ROOF & CHIMNEY --- */}
        {/* Chimney */}
        <rect x="92" y="58" width="14" height="28" fill="url(#roofTwilight)" rx="1" />
        {/* Roof Line */}
        <path 
          d="M 150 35 L 265 105 L 250 115 L 150 55 L 50 115 L 35 105 Z" 
          fill="url(#roofTwilight)" 
        />

        {/* --- 4 GOLD WINDOW PANES --- */}
        <g fill="url(#goldTwilight)">
          <rect x="141" y="70" width="7" height="7" rx="1" />
          <rect x="152" y="70" width="7" height="7" rx="1" />
          <rect x="141" y="81" width="7" height="7" rx="1" />
          <rect x="152" y="81" width="7" height="7" rx="1" />
        </g>

        {/* --- STYLIZED MONOGRAM EG --- */}

        {/* 'E' Letter (Gold) */}
        <g fill="url(#goldTwilight)">
          {/* Main vertical stem of E */}
          <path d="M 88 95 L 145 95 L 145 120 L 105 120 L 105 145 L 140 145 L 140 170 L 105 170 L 105 195 L 145 195 L 145 220 L 88 220 Z" />
          {/* 3D Bevel Edge */}
          <path d="M 88 95 L 105 120 L 105 195 L 88 220 Z" fill="#78350f" opacity="0.45" />
        </g>

        {/* 'G' Letter (Purple/Violet) */}
        <g fill="url(#purpleTwilight)">
          {/* Outer G shape */}
          <path d="M 155 95 L 212 95 L 212 120 L 172 120 L 172 195 L 195 195 L 195 160 L 180 160 L 180 140 L 212 140 L 212 220 L 155 220 Z" />
          {/* 3D Bevel Edge */}
          <path d="M 212 95 L 172 120 L 172 195 L 212 220 Z" fill="#3b0764" opacity="0.45" />
        </g>
      </g>
    </svg>
  );
};

export const Logo = ({ layout = "horizontal", showRc = true, className = "" }) => {
  if (layout === "compact") {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <LogoIcon className="w-9 h-9 shrink-0" />
        <div className="flex flex-col text-left leading-none">
          <span className="font-black text-lg tracking-wider text-white uppercase drop-shadow-sm">
            EMPRAGOLD
          </span>
          <span className="text-[9px] font-extrabold text-purple-300 tracking-widest uppercase mt-0.5">
            ESTATE REALTORS LTD
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <LogoIcon className="w-16 h-16 sm:w-20 sm:h-20 mb-2" />
      <div className="flex flex-col items-center leading-tight">
        <span className="font-black text-2xl sm:text-3xl tracking-widest text-white uppercase drop-shadow-sm">
          EMPRAGOLD
        </span>
        <span className="text-xs sm:text-sm font-extrabold text-purple-300 tracking-[0.2em] uppercase mt-0.5">
          ESTATE REALTORS LTD
        </span>
        {showRc && (
          <span className="text-[10px] font-semibold text-purple-400/90 tracking-widest uppercase mt-1">
            RC: 8323733
          </span>
        )}
      </div>
    </div>
  );
};
