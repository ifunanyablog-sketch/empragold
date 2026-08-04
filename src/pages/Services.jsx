import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { servicesData } from '../data/blogData';
import { Home, Building2, Crown, ShieldCheck, TrendingUp, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export const Services = () => {

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Home': return <Home className="w-6 h-6 text-[#C9A227]" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-[#C9A227]" />;
      case 'Crown': return <Crown className="w-6 h-6 text-[#C9A227]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#C9A227]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#C9A227]" />;
      default: return <MapPin className="w-6 h-6 text-[#C9A227]" />;
    }
  };

  return (
    <div className="bg-[#0F0F10] text-gray-100 min-h-screen pt-24 pb-20">
      <SEO
        title="Bespoke Real Estate Services | Empragold"
        description="Empragold offers residential trophy sales, Grade-A commercial acquisitions, property asset management, investment advisory, and land site audits."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Services' }]} />

        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto my-10">
          <span className="text-xs text-[#C9A227] uppercase tracking-widest font-bold block mb-2">
            Bespoke Real Estate Capabilities
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white">
            Tailored Private Services
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mt-4 font-light">
            Providing UHNW individuals, corporate institutions, and international investors with end-to-end real estate expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12 my-12">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`bg-[#1A1A1D] border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl flex flex-col ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-10 items-center scroll-mt-28`}
            >
              <div className="flex-1 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#C9A227]/10 border border-[#C9A227] flex items-center justify-center">
                  {getServiceIcon(service.icon)}
                </div>
                <span className="text-xs text-[#C9A227] uppercase tracking-wider font-semibold block">
                  {service.subtitle}
                </span>
                <h2 className="text-3xl font-serif font-bold text-white">{service.title}</h2>
                <p className="text-gray-300 text-sm leading-relaxed">{service.fullDesc}</p>

                <div className="space-y-2.5 pt-4">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Link
                    to="/contact"
                    className="inline-flex bg-[#C9A227] text-black hover:bg-[#D4AF37] text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-xl transition-all items-center gap-2"
                  >
                    Request Private Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="w-full lg:w-1/2 h-80 rounded-2xl overflow-hidden border border-white/10 shrink-0">
                <img
                  src={`https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80`}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
