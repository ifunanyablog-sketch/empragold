import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Crown, Home, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="bg-white text-[#C9A227] min-h-screen flex items-center justify-center px-4 text-center">
      <SEO title="Page Not Found | Empragold Real Estate" />

      <div className="max-w-md bg-white border border-[#C9A227]/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
        <div className="w-16 h-16 bg-amber-50 border border-[#C9A227] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Crown className="w-8 h-8 text-[#C9A227]" />
        </div>

        <span className="text-4xl font-serif font-bold text-[#C9A227] block mb-2">404</span>
        <h1 className="text-2xl font-serif font-bold text-[#C9A227] mb-3">Estate Residence Not Found</h1>
        <p className="text-xs text-[#C9A227]/80 leading-relaxed mb-8 font-normal">
          The requested page or private dossier may have been moved, renamed, or acquired off-market.
        </p>

        <div className="space-y-3">
          <Link
            to="/"
            className="w-full bg-[#C9A227] text-white hover:bg-[#B8860B] font-semibold text-xs uppercase tracking-wider py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
          >
            <Home className="w-4 h-4" /> Return to Main Hall
          </Link>
          <Link
            to="/properties"
            className="w-full bg-slate-50 hover:bg-slate-100 text-[#C9A227] font-semibold text-xs uppercase tracking-wider py-3 rounded-xl border border-[#C9A227]/30 transition-all block shadow-sm"
          >
            Browse Trophy Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};
