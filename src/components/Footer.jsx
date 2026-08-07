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
    showToast('Subscribed to Empragold Real Estate updates', 'success');
  };

  return (
    <footer className="bg-white text-slate-800 border-t border-slate-200/80 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Logo layout="full" showRc={true} className="!items-start !text-left" />

            <p className="text-xs text-[#338424] font-bold italic leading-relaxed pr-4">
              "Trusted Properties. Smart Investments. Outstanding Service."
            </p>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Empragold Estate Realtors Ltd (RC 8323733) represents premier residential, commercial, and land properties across Ikotun, Ikeja, Alimosho, and major Lagos growth corridors.
            </p>

            <div className="flex gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-100 text-slate-700 hover:bg-[#111827] hover:text-white flex items-center justify-center transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-100 text-slate-700 hover:bg-[#111827] hover:text-white flex items-center justify-center transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-100 text-slate-700 hover:bg-[#111827] hover:text-white flex items-center justify-center transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-100 text-slate-700 hover:bg-[#111827] hover:text-white flex items-center justify-center transition-all">
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
              <li><Link to="/properties" className="text-slate-600 hover:text-[#4db038] transition-colors">Property Listings</Link></li>
              <li><Link to="/about" className="text-slate-600 hover:text-[#4db038] transition-colors">About Empragold</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-[#4db038] transition-colors">Our Services</Link></li>
              <li><Link to="/property-management" className="text-slate-600 hover:text-[#4db038] transition-colors">Property Management</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-[#4db038] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Office Locations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs text-slate-900 uppercase tracking-widest font-bold">
              Headquarters & Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <strong className="text-slate-900 block text-sm font-bold">Empragold Estate Realtors Ltd</strong>
                <p className="flex items-start gap-1.5 text-slate-600 mt-1 font-normal">
                  <MapPin className="w-3.5 h-3.5 text-[#4db038] shrink-0 mt-0.5" />
                  Abaranje, Ikotun Axis / Opebi Ikeja, Lagos State
                </p>
              </div>
              <div className="pt-1 text-slate-700 space-y-1.5">
                <a
                  href="https://wa.me/2348156789757"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#4db038] transition-colors font-medium text-slate-800"
                >
                  <Phone className="w-3.5 h-3.5 text-[#25D366]" /> +234 815 678 9757 (WhatsApp)
                </a>
                <p className="flex items-center gap-1.5 text-slate-700 font-medium">
                  <Mail className="w-3.5 h-3.5 text-[#4db038]" /> adediresesan@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-3 space-y-3 bg-[#f8faf8] p-6 rounded-2xl border border-slate-200/80">
            <h4 className="text-xs text-slate-900 uppercase tracking-widest font-bold">
              Stay Updated
            </h4>
            <p className="text-xs text-slate-600 font-normal">
              Subscribe to get immediate alerts when new direct property deals and plots of land are available.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#e2efe1] border border-[#338424]/30 rounded-xl text-center text-xs text-[#338424] font-semibold">
                <CheckCircle2 className="w-5 h-5 mx-auto mb-1 text-[#338424]" />
                You are subscribed to Empragold Property Alerts.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#4db038]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#111827] text-white hover:bg-black font-semibold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-1 shadow-xs"
                >
                  Subscribe <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4 font-normal">
          <p>© {new Date().getFullYear()} Empragold Estate Realtors Ltd (RC 8323733). All Rights Reserved.</p>
          <div className="flex flex-wrap gap-6 font-medium">
            <Link to="/privacy" className="hover:text-[#4db038] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#4db038] transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-[#4db038] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
