import React from 'react';
import logoImg from '../assets/images/empragold_logo_1786031008413.jpg';

export const LogoIcon = ({ className = "w-16 h-16" }) => {
  return (
    <img 
      src={logoImg} 
      alt="Empragold Estate Realtors Ltd Logo" 
      className={`object-cover object-center rounded-xl shadow-lg border border-slate-700/80 ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};

export const Logo = ({ layout = "horizontal", showRc = true, className = "" }) => {
  if (layout === "compact") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <img 
          src={logoImg} 
          alt="Empragold Estate Realtors Ltd" 
          className="h-20 sm:h-24 lg:h-28 w-auto object-cover object-center rounded-2xl shadow-xl border border-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <img 
        src={logoImg} 
        alt="Empragold Estate Realtors Ltd" 
        className="w-72 sm:w-96 lg:w-[420px] h-auto object-cover object-center rounded-2xl shadow-2xl border border-slate-800 transition-all duration-300 hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};





