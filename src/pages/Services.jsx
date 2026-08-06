import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { servicesData } from '../data/blogData';
import { Home, Building2, Crown, ShieldCheck, TrendingUp, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export const Services = () => {

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Home': return <Home className="w-6 h-6 text-[#338424]" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-[#338424]" />;
      case 'Crown': return <Crown className="w-6 h-6 text-[#338424]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#338424]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#338424]" />;
      default: return <MapPin className="w-6 h-6 text-[#338424]" />;
    }
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen pt-24 pb-20">
      <SEO
        title="Real Estate Services | Empragold Estate Realtors Ltd"
        description="Empragold Estate Realtors Ltd offers residential sales, commercial acquisitions, property management, investment advisory, and verified land site audits."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Services' }]} />

        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto my-10">
          <span className="text-xs text-[#338424] uppercase tracking-widest font-bold block mb-2">
            Real Estate Capabilities
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-slate-900">
            Tailored Real Estate Services
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 font-normal">
            Providing home buyers, corporate institutions, and diaspora investors with end-to-end real estate expertise in Nigeria.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12 my-12">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-md flex flex-col ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-10 items-center scroll-mt-28`}
            >
              <div className="flex-1 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shadow-2xs">
                  {getServiceIcon(service.icon)}
                </div>
                <span className="text-xs text-[#338424] uppercase tracking-wider font-bold block">
                  {service.subtitle}
                </span>
                <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">{service.fullDesc}</p>

                <div className="space-y-2.5 pt-4">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#338424] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Link
                    to="/contact"
                    className="inline-flex bg-[#4db038] text-white hover:bg-[#338424] text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all items-center gap-2 shadow-xs"
                  >
                    Request Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="w-full lg:w-1/2 h-80 rounded-2xl overflow-hidden border border-slate-200 shrink-0 shadow-2xs">
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
