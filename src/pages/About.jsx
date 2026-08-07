import React from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Crown, ShieldCheck, Award, TrendingUp, Users, MapPin, CheckCircle2 } from 'lucide-react';
import { agentsData } from '../data/agentsData';

export const About = () => {
  const milestones = [
    { year: '2012', title: 'Foundation in Lagos', desc: 'Established as a real estate firm advising buyers and investors across Lagos state.' },
    { year: '2016', title: 'Commercial & Multi-Family Launch', desc: 'Expanded into commercial developments, land acquisitions, and multi-family units in Lagos.' },
    { year: '2020', title: 'Regional Advisory', desc: 'Servicing institutional clients, families, and diaspora investors in Nigeria.' },
    { year: '2024', title: 'Incorporation & Growth', desc: 'Empragold Estate Realtors Ltd officially incorporated (RC: 8323733) with expanded advisory desks.' },
    { year: '2026', title: 'Multi-Billion Transactions', desc: 'Recognized for transparent property sales, verified titles (C of O / Gov Consent), and top client satisfaction.' }
  ];

  return (
    <div className="bg-white text-slate-800 min-h-screen pt-24 pb-20">
      <SEO
        title="About Us | Empragold Estate Realtors Ltd"
        description="Learn about Empragold Estate Realtors Ltd (RC: 8323733), our commitment to genuine property titles, client advisory, and leadership team in Lagos."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Us' }]} />

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden my-8 h-96 bg-white flex items-center justify-center p-8 text-center border border-slate-200 shadow-md">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="Empragold Estate"
            className="absolute inset-0 w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs text-[#338424] uppercase tracking-widest font-bold block mb-2 bg-white/80 py-1 px-3 rounded-full inline-block backdrop-blur-md border border-slate-200 shadow-2xs">
              Our Pursuit of Real Estate Excellence
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 drop-shadow-2xs">
              Redefining Real Estate Brokerage
            </h1>
            <p className="text-slate-700 text-sm sm:text-base mt-4 font-semibold max-w-2xl mx-auto bg-white/80 p-2 rounded-xl backdrop-blur-sm border border-slate-200">
              We connect home buyers, diaspora investors, and commercial clients with verified properties of enduring value.
            </p>
          </div>
        </div>

        {/* Company Story & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 border-b border-slate-200 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs text-[#338424] uppercase tracking-widest font-bold block">
              The Empragold Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Built on Trust, Legal Integrity & Value
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Founded on the principles of transparency, thorough title verification, and client care, Empragold Estate Realtors Ltd (RC: 8323733) represents buyers, sellers, and diaspora investors across Lagos and Ogun states.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every property in our portfolio undergoes exhaustive legal title checks (Certificate of Ownership, Governor's Consent, Survey approvals), structural assessments, and valuation reviews.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 shadow-2xs">
                <strong className="text-xl font-bold text-slate-900 block">Our Mission</strong>
                <span className="text-xs text-slate-600 block mt-1">To deliver transparent real estate advisory with complete peace of mind and verified documentation.</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 shadow-2xs">
                <strong className="text-xl font-bold text-[#338424] block">Our Vision</strong>
                <span className="text-xs text-slate-600 block mt-1">To be the most trusted real estate agency for home ownership and high-yield property investments in Nigeria.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
                alt="Empragold Interior"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 p-4 rounded-xl backdrop-blur-md border border-slate-200 shadow-2xs">
                <span className="text-xs font-bold text-slate-900 block">Empragold Estate Realtors Ltd</span>
                <span className="text-[11px] text-slate-600 block">Registered Company RC: 8323733</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="py-16 border-b border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs text-[#338424] uppercase tracking-widest font-bold block mb-2">
              Our Journey
            </span>
            <h2 className="text-3xl font-bold text-slate-900">Milestones of Growth</h2>
          </div>

          <div className="relative max-w-4xl mx-auto space-y-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-start gap-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
                <span className="text-3xl font-bold text-[#4db038] shrink-0">{m.year}</span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{m.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="py-16">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs text-[#338424] uppercase tracking-widest font-bold block mb-2">
              Leadership
            </span>
            <h2 className="text-3xl font-bold text-slate-900">Our Advisory Team</h2>
          </div>

          <div className="flex justify-center">
            <div className="max-w-md w-full">
              {agentsData.map((agent) => (
                <div key={agent.id} className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-md">
                  <img src={agent.image} alt={agent.name} className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-3 border-[#4db038] shadow-sm" />
                  <h3 className="text-xl font-bold text-slate-900">{agent.name}</h3>
                  <span className="text-xs text-[#338424] uppercase font-bold block mt-1">{agent.role}</span>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">{agent.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
