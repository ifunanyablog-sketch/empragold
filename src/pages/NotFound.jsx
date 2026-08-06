import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Home, ArrowLeft, Building2 } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="bg-white text-slate-800 min-h-screen flex items-center justify-center px-4 text-center">
      <SEO title="Page Not Found | Empragold Estate Realtors Ltd" />

      <div className="max-w-md bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-md">
        <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xs">
          <Building2 className="w-8 h-8 text-[#4db038]" />
        </div>

        <span className="text-4xl font-bold text-[#4db038] block mb-2">404</span>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">Property Listing Not Found</h1>
        <p className="text-xs text-slate-500 leading-relaxed mb-8 font-normal">
          The requested page or property listing may have been moved, sold, or updated.
        </p>

        <div className="space-y-3">
          <Link
            to="/"
            className="w-full bg-[#4db038] text-white hover:bg-[#338424] font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs"
          >
            <Home className="w-4 h-4" /> Return to Home
          </Link>
          <Link
            to="/properties"
            className="w-full bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider py-3 rounded-xl border border-slate-200 transition-all block shadow-2xs"
          >
            Browse Available Properties
          </Link>
        </div>
      </div>
    </div>
  );
};
