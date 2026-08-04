import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Contact = () => {
  const { showToast } = useApp();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Buying Luxury Residence',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      showToast('Your inquiry has been assigned to a Senior Partner.', 'success');
    }, 1000);
  };

  return (
    <div className="bg-[#0F0F10] text-gray-100 min-h-screen pt-24 pb-20">
      <SEO
        title="Contact Empragold Concierge | Private Real Estate Advisory"
        description="Connect with Empragold Real Estate private client advisors in Lagos, Abuja, London, and Dubai. Schedule confidential consultations."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto my-10">
          <span className="text-xs text-[#C9A227] uppercase tracking-widest font-bold block mb-2">
            Discreet Communication
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white">
            Connect with Empragold
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mt-4 font-light">
            Whether seeking off-market penthouse opportunities or institutional asset management, our senior partners respond within two hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-12">
          {/* Left Side Office Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1A1A1D] border border-[#C9A227]/30 rounded-2xl p-6 shadow-2xl">
              <span className="text-xs text-[#C9A227] uppercase tracking-widest font-bold block mb-1">
                West Africa Flagship
              </span>
              <h3 className="text-xl font-serif font-bold text-white mb-3">Lagos Headquarters</h3>
              <p className="text-xs text-gray-300 flex items-start gap-2 mb-2">
                <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                Plot 14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria
              </p>
              <a
                href="https://wa.me/2348156789757"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-300 flex items-center gap-2 mb-2 hover:text-[#25D366] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#25D366]" />
                +234 815 678 9757 (WhatsApp)
              </a>
              <p className="text-xs text-gray-300 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C9A227]" />
                lagos@empragold.com
              </p>
            </div>

            <div className="bg-[#1A1A1D] border border-white/10 p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-3 text-xs text-gray-300">
                <Clock className="w-4 h-4 text-[#C9A227]" />
                <div>
                  <strong className="text-white block font-serif">Executive Business Hours</strong>
                  <span>Mon - Sat: 08:00 AM - 08:00 PM (WAT)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-300 pt-2 border-t border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                <span>24/7 VIP Emergency Concierge active for existing owners</span>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="lg:col-span-7 bg-[#1A1A1D] border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Send Executive Inquiry</h3>
            <p className="text-xs text-gray-400 mb-6">Fill in your requirements below. Your communication remains strictly confidential.</p>

            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-[#C9A227]/20 border border-[#C9A227] text-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-white mb-2">Inquiry Received</h4>
                <p className="text-xs text-gray-300 max-w-sm mx-auto mb-6">
                  Thank you, <strong className="text-[#C9A227]">{formData.name}</strong>. A Senior Private Advisor will contact you within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#C9A227] text-black font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs text-gray-300 font-medium block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Lord Sterling"
                    className="w-full bg-[#0F0F10] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#C9A227]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-300 font-medium block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@domain.com"
                      className="w-full bg-[#0F0F10] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#C9A227]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-300 font-medium block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234 800 000 0000"
                      className="w-full bg-[#0F0F10] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#C9A227]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-300 font-medium block mb-1">Primary Interest</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-[#0F0F10] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#C9A227]"
                  >
                    <option value="Buying Luxury Residence">Buying Luxury Residence</option>
                    <option value="Off-Market Penthouse Inquiry">Off-Market Penthouse Inquiry</option>
                    <option value="Commercial Tower Acquisition">Commercial Skyscraper Acquisition</option>
                    <option value="Property Asset Management">Property Asset Management</option>
                    <option value="Land & Site Acquisition">Land & Site Acquisition</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gray-300 font-medium block mb-1">Message / Requirements *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your property requirements, location preferences, or target yield..."
                    className="w-full bg-[#0F0F10] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#C9A227]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C9A227] text-black hover:bg-[#D4AF37] font-semibold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Transmit Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
