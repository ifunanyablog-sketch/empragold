import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Crown, Mail, MapPin, Phone, ArrowRight, Instagram, Linkedin, Twitter, Youtube, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Logo } from './Logo';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useApp();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    setSubscribed(true);
    showToast('Subscribed to Empragold Private Wealth Journal', 'success');
  };

  return (
    <footer className="bg-white text-slate-800 border-t border-[#C9A227]/30 pt-16 pb-8 relative overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-[#C9A227]/40 blur-lg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#C9A227]/20">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block hover:opacity-95 transition-opacity">
              <Logo layout="full" showRc={true} className="!items-start !text-left" />
            </Link>

            <p className="text-xs text-[#9A7B1C] font-serif font-bold italic leading-relaxed pr-4">
              "Luxury Properties. Smart Investments. Trusted Excellence."
            </p>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Empragold is an ultra-luxury real estate brokerage and private wealth advisory representing trophy residences, penthouses, commercial towers, and prime land assets globally.
            </p>

            <div className="flex gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] hover:bg-[#C9A227] hover:text-black flex items-center justify-center transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] hover:bg-[#C9A227] hover:text-black flex items-center justify-center transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] hover:bg-[#C9A227] hover:text-black flex items-center justify-center transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] hover:bg-[#C9A227] hover:text-black flex items-center justify-center transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs text-slate-900 uppercase tracking-widest font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link to="/properties" className="text-slate-700 hover:text-[#C9A227] transition-colors">Trophy Listings</Link></li>
              <li><Link to="/about" className="text-slate-700 hover:text-[#C9A227] transition-colors">Company Story</Link></li>
              <li><Link to="/services" className="text-slate-700 hover:text-[#C9A227] transition-colors">Private Services</Link></li>
              <li><Link to="/property-management" className="text-slate-700 hover:text-[#C9A227] transition-colors">Asset Management</Link></li>
              <li><Link to="/agents" className="text-slate-700 hover:text-[#C9A227] transition-colors">Private Agents</Link></li>
              <li><Link to="/blog" className="text-slate-700 hover:text-[#C9A227] transition-colors">Wealth Journal</Link></li>
            </ul>
          </div>

          {/* Office Locations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs text-slate-900 uppercase tracking-widest font-bold">
              Global Headquarters
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <strong className="text-slate-900 block font-serif text-sm font-bold">Lagos Flagship</strong>
                <p className="flex items-start gap-1.5 text-slate-600 mt-1 font-normal">
                  <MapPin className="w-3.5 h-3.5 text-[#C9A227] shrink-0 mt-0.5" />
                  Plot 14 Admiralty Way, Lekki Phase 1, Lagos
                </p>
              </div>
              <div className="pt-1 text-slate-700 space-y-1.5">
                <a
                  href="https://wa.me/2348156789757"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#C9A227] transition-colors font-medium text-slate-800"
                >
                  <Phone className="w-3.5 h-3.5 text-[#25D366]" /> +234 815 678 9757 (WhatsApp)
                </a>
                <p className="flex items-center gap-1.5 text-slate-700 font-medium">
                  <Mail className="w-3.5 h-3.5 text-[#C9A227]" /> support@empragold.com
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-3 space-y-3 bg-slate-50 p-6 rounded-2xl border border-[#C9A227]/30">
            <h4 className="text-xs text-slate-900 uppercase tracking-widest font-bold">
              The Private Dispatch
            </h4>
            <p className="text-xs text-slate-600 font-normal">
              Subscribe to receive off-market penthouse opportunities, market intelligence reports, and private viewing invites.
            </p>

            {subscribed ? (
              <div className="p-3 bg-amber-50 border border-[#C9A227] rounded-xl text-center text-xs text-[#9A7B1C] font-semibold">
                <CheckCircle2 className="w-5 h-5 mx-auto mb-1 text-[#C9A227]" />
                You are registered for Empragold Private Dispatch.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter executive email..."
                  className="w-full bg-white border border-[#C9A227]/30 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C9A227]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#C9A227] text-black hover:bg-[#B8860B] hover:text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded-xl transition-all flex items-center justify-center gap-1 shadow-sm"
                >
                  Join VIP List <ArrowRight className="w-3.5 h-3.5 text-black hover:text-white" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4 font-normal">
          <p>© {new Date().getFullYear()} Empragold Real Estate Ltd. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-6 font-medium">
            <Link to="/privacy" className="hover:text-[#C9A227] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#C9A227] transition-colors">Terms of Service</Link>
            <Link to="/faq" className="hover:text-[#C9A227] transition-colors">FAQ</Link>
            <Link to="/careers" className="hover:text-[#C9A227] transition-colors">Careers</Link>
            <a href="/sitemap.xml" target="_blank" className="hover:text-[#C9A227] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
