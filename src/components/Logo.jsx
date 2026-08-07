import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/empragold_logo_1786031008413.jpg';

export const LogoIcon = ({ className = "w-16 h-16", to = "/" }) => {
  return (
    <Link to={to} className="inline-block cursor-pointer group">
      <img 
        src={logoImg} 
        alt="Empragold Estate Realtors Ltd Logo" 
        className={`object-cover object-center rounded-xl shadow-lg border border-slate-700/80 transition-all duration-300 group-hover:scale-105 ${className}`}
        referrerPolicy="no-referrer"
      />
    </Link>
  );
};

export const Logo = ({ layout = "horizontal", showRc = true, className = "", to = "/" }) => {
  if (layout === "compact") {
    return (
      <Link to={to} className="inline-block cursor-pointer group">
        <div className={`flex items-center gap-3 ${className}`}>
          <img 
            src={logoImg} 
            alt="Empragold Estate Realtors Ltd" 
            className="h-20 sm:h-24 lg:h-28 w-auto object-cover object-center rounded-2xl shadow-xl border border-slate-800 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl cursor-pointer"
            referrerPolicy="no-referrer"
          />
        </div>
      </Link>
    );
  }

  return (
    <Link to={to} className="inline-block cursor-pointer group">
      <div className={`flex flex-col items-start ${className}`}>
        <img 
          src={logoImg} 
          alt="Empragold Estate Realtors Ltd" 
          className="w-72 sm:w-96 lg:w-[420px] h-auto object-cover object-center rounded-2xl shadow-2xl border border-slate-800 transition-all duration-300 group-hover:scale-105 cursor-pointer"
          referrerPolicy="no-referrer"
        />
      </div>
    </Link>
  );
};






