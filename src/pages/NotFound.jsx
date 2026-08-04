import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Crown, Home, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="bg-[#0F0F10] text-gray-100 min-h-screen flex items-center justify-center px-4 text-center">
      <SEO title="Page Not Found | Empragold Real Estate" />

      <div className="max-w-md bg-[#1A1A1D] border border-[#C9A227]/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
        <div className="w-16 h-16 bg-[#C9A227]/10 border border-[#C9A227] rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Crown className="w-8 h-8 text-[#C9A227]" />
        </div>

        <span className="text-4xl font-serif font-bold text-[#C9A227] block mb-2">404</span>
        <h1 className="text-2xl font-serif font-bold text-white mb-3">Estate Residence Not Found</h1>
        <p className="text-xs text-gray-400 leading-relaxed mb-8">
          The requested page or private dossier may have been moved, renamed, or acquired off-market.
        </p>

        <div className="space-y-3">
          <Link
            to="/"
            className="w-full bg-[#C9A227] text-black hover:bg-[#D4AF37] font-semibold text-xs uppercase tracking-wider py-3 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" /> Return to Main Hall
          </Link>
          <Link
            to="/properties"
            className="w-full bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider py-3 rounded-xl border border-white/10 transition-all block"
          >
            Browse Trophy Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};
