import React from 'react';

export const LogoIcon = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={`drop-shadow-[0_2px_8px_rgba(77,176,56,0.25)] ${className}`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Brand Theme Gradients */}
        <linearGradient id="themeGreenPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5cc945" />
          <stop offset="50%" stopColor="#4db038" />
          <stop offset="100%" stopColor="#318223" />
        </linearGradient>

        <linearGradient id="themeGreenDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#318223" />
          <stop offset="100%" stopColor="#1e5416" />
        </linearGradient>

        <linearGradient id="themeCharcoal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2c3748" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>

        <linearGradient id="themeAccentGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4db038" />
          <stop offset="100%" stopColor="#6ee854" />
        </linearGradient>
      </defs>

      <g>
        {/* Roof Structure Peak */}
        {/* Chimney on Left Slope */}
        <rect x="52" y="32" width="12" height="22" rx="1.5" fill="url(#themeGreenPrimary)" />

        {/* Outer Roof Peak Line */}
        <path 
          d="M 100 12 L 182 66 L 168 76 L 100 30 L 32 76 L 18 66 Z" 
          fill="url(#themeGreenPrimary)" 
        />
        {/* Roof 3D Under-Bevel Shadow */}
        <path 
          d="M 18 66 L 32 76 L 100 30 L 168 76 L 182 66 L 168 82 L 100 36 L 32 82 Z" 
          fill="url(#themeGreenDark)" 
          opacity="0.9"
        />

        {/* 4-Pane Window Grid under Peak */}
        <rect x="92" y="44" width="7" height="7" rx="1" fill="url(#themeGreenPrimary)" />
        <rect x="101" y="44" width="7" height="7" rx="1" fill="url(#themeGreenPrimary)" />
        <rect x="92" y="53" width="7" height="7" rx="1" fill="url(#themeGreenPrimary)" />
        <rect x="101" y="53" width="7" height="7" rx="1" fill="url(#themeGreenPrimary)" />

        {/* 3D Monogram "E" (Left Half - Theme Charcoal/Dark) */}
        <g transform="translate(0, 0)">
          {/* Back 3D extrusion */}
          <path 
            d="M 40 76 L 94 76 L 94 94 L 60 94 L 60 110 L 88 110 L 88 126 L 60 126 L 60 144 L 96 144 L 96 162 L 40 162 Z" 
            fill="url(#themeCharcoal)" 
          />
          {/* Front Face of 'E' */}
          <path 
            d="M 43 73 L 94 73 L 94 90 L 62 90 L 62 108 L 88 108 L 88 123 L 62 123 L 62 142 L 96 142 L 96 160 L 43 160 Z" 
            fill="url(#themeGreenDark)" 
          />
        </g>

        {/* 3D Monogram "G" (Right Half - Brand Theme Green) */}
        <g transform="translate(0, 0)">
          {/* Back 3D extrusion */}
          <path 
            d="M 104 76 L 158 76 L 158 94 L 122 94 L 122 144 L 142 144 L 142 122 L 132 122 L 132 108 L 158 108 L 158 162 L 104 162 Z" 
            fill="url(#themeGreenDark)" 
          />
          {/* Front Face of 'G' */}
          <path 
            d="M 104 73 L 158 73 L 158 90 L 122 90 L 122 142 L 140 142 L 140 120 L 130 120 L 130 106 L 158 106 L 158 160 L 104 160 Z" 
            fill="url(#themeGreenPrimary)" 
          />
        </g>
      </g>
    </svg>
  );
};

export const Logo = ({ layout = "horizontal", showRc = true, className = "" }) => {
  if (layout === "compact") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <LogoIcon className="w-10 h-10 shrink-0" />
        <div className="flex flex-col text-left leading-none">
          <span className="font-black text-lg tracking-tight text-[#111827] uppercase">
            EMPRAGOLD
          </span>
          <span className="text-[9px] font-bold text-[#4db038] tracking-widest uppercase mt-0.5">
            ESTATE REALTORS LTD
          </span>
          {showRc && (
            <span className="text-[8px] font-bold text-slate-500 tracking-wider mt-0.5">
              RC: 8323733
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <LogoIcon className="w-16 h-16 sm:w-20 sm:h-20 mb-2" />
      <div className="flex flex-col items-center leading-tight">
        <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-[#111827] uppercase">
          EMPRAGOLD
        </span>
        <span className="text-xs font-bold text-[#4db038] tracking-widest uppercase mt-0.5">
          ESTATE REALTORS LTD
        </span>
        {showRc && (
          <span className="text-[10px] font-bold text-slate-600 tracking-widest uppercase mt-1 bg-[#e2efe1] text-[#338424] px-2.5 py-0.5 rounded-full border border-emerald-200/60 shadow-2xs">
            RC: 8323733
          </span>
        )}
      </div>
    </div>
  );
};




