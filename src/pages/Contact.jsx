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
    interest: 'Buying Residence',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      showToast('Your inquiry has been assigned to our sales team.', 'success');
    }, 1000);
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen pt-24 pb-20">
      <SEO
        title="Contact Us | Empragold Estate Realtors Ltd"
        description="Connect with Empragold Estate Realtors Ltd (RC: 8323733). Contact us via email at adediresesan@gmail.com or call 08156789757."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto my-10">
          <span className="text-xs text-[#338424] uppercase tracking-widest font-bold block mb-2">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-slate-900">
            Connect with Empragold
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 font-normal">
            Whether seeking residential properties, multi-family investments, or commercial land, our team responds promptly to all inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-12">
          {/* Left Side Office Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md">
              <span className="text-xs text-[#338424] uppercase tracking-widest font-bold block mb-1">
                Lagos Office & Advisory
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Empragold Estate Realtors Ltd</h3>
              <p className="text-xs text-slate-700 flex items-start gap-2 mb-2 font-medium">
                <MapPin className="w-4 h-4 text-[#338424] shrink-0 mt-0.5" />
                Lagos State, Nigeria (RC: 8323733)
              </p>
              <a
                href="https://wa.me/2348156789757"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-700 flex items-center gap-2 mb-2 hover:text-[#25D366] transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-[#25D366]" />
                +234 815 678 9757 (WhatsApp / Call)
              </a>
              <a
                href="mailto:adediresesan@gmail.com"
                className="text-xs text-slate-700 flex items-center gap-2 hover:text-[#338424] transition-colors font-medium"
              >
                <Mail className="w-4 h-4 text-[#338424]" />
                adediresesan@gmail.com
              </a>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3 shadow-xs">
              <div className="flex items-center gap-3 text-xs text-slate-700">
                <Clock className="w-4 h-4 text-[#338424]" />
                <div>
                  <strong className="text-slate-900 block font-bold">Business Hours</strong>
                  <span className="text-slate-500">Mon - Sat: 08:00 AM - 08:00 PM (WAT)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-700 pt-2 border-t border-slate-100 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#338424]" />
                <span>Empragold Estate Realtors Ltd — RC: 8323733</span>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Send Direct Inquiry</h3>
            <p className="text-xs text-slate-500 mb-6 font-normal">Fill in your details below and our team will get back to you shortly.</p>

            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Received</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto mb-6">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. An Empragold advisor will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#4db038] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-xs hover:bg-[#338424] transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs text-slate-900 font-bold block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Mr. John Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4db038] shadow-2xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-900 font-bold block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@domain.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4db038] shadow-2xs"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-900 font-bold block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234 815 678 9757"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4db038] shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-900 font-bold block mb-1">Primary Interest</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-[#4db038] shadow-2xs"
                  >
                    <option value="Buying Residence">Buying Property / Flat</option>
                    <option value="Multi-Family Investment">Multi-Family / Investment Blocks</option>
                    <option value="Commercial Land Acquisition">Commercial Land Acquisition</option>
                    <option value="Renting Apartment">Renting Apartment / Flat</option>
                    <option value="General Inquiry">General Real Estate Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-900 font-bold block mb-1">Message / Requirements *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your property requirements or location preferences..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-[#4db038] shadow-2xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#4db038] text-white hover:bg-[#338424] font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
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
