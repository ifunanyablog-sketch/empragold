import React from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Crown, ShieldCheck, Award, TrendingUp, Users, MapPin, CheckCircle2 } from 'lucide-react';
import { agentsData } from '../data/agentsData';

export const About = () => {
  const milestones = [
    { year: '2012', title: 'Foundation in Lagos', desc: 'Established as a private luxury real estate boutique advising high-net-worth families in Ikoyi.' },
    { year: '2016', title: 'Commercial Division Launch', desc: 'Expanded into corporate skyscraper acquisitions and Grade-A commercial leasing in Victoria Island.' },
    { year: '2020', title: 'Abuja Regional Office', desc: 'Opened diplomatic corridor office servicing institutional clients and high-net-worth investors in Nigeria.' },
    { year: '2024', title: 'Dubai & London Desks', desc: 'Partnered with European family offices to provide tax-efficient real estate wealth preservation.' },
    { year: '2026', title: '₦1.2 Trillion Volume Milestone', desc: 'Recognized globally as a premier luxury real estate advisory with off-market penthouses and trophy assets.' }
  ];

  return (
    <div className="bg-[#0F0F10] text-gray-100 min-h-screen pt-24 pb-20">
      <SEO
        title="About Empragold Real Estate | Heritage & Leadership"
        description="Learn about Empragold Real Estate, our legacy of ultra-luxury property brokerage, core values, private client advisory, and global offices."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Us' }]} />

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden my-8 h-96 bg-black flex items-center justify-center p-8 text-center border border-white/10 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="Empragold Estate"
            className="absolute inset-0 w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-black/40 to-black/60" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs text-[#C9A227] uppercase tracking-widest font-bold block mb-2">
              Our Legacy & Pursuit of Excellence
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white">
              Redefining Luxury Real Estate
            </h1>
            <p className="text-gray-300 text-sm sm:text-base mt-4 font-light">
              We connect global leaders, sovereign investors, and private families with trophy properties of enduring architectural and financial value.
            </p>
          </div>
        </div>

        {/* Company Story & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 border-b border-white/10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs text-[#C9A227] uppercase tracking-widest font-bold block">
              The Empragold Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Crafted for Those Who Demand Distinction
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Founded on the principles of absolute discretion, financial rigor, and architectural connoisseurship, Empragold has evolved into a global powerhouse in luxury real estate. We represent high-net-worth clients across Lagos, Abuja, London, and Dubai.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every property in our portfolio undergoes exhaustive legal title audits, structural assessments, and investment yield projections. We do not simply sell real estate; we preserve generational legacies.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#1A1A1D] rounded-xl border border-white/10">
                <strong className="text-2xl font-serif font-bold text-[#C9A227] block">Our Mission</strong>
                <span className="text-xs text-gray-400 block mt-1">To deliver uncompromised luxury real estate advisory with complete confidentiality.</span>
              </div>
              <div className="p-4 bg-[#1A1A1D] rounded-xl border border-white/10">
                <strong className="text-2xl font-serif font-bold text-white block">Our Vision</strong>
                <span className="text-xs text-gray-400 block mt-1">To be the trusted worldwide standard for trophy estates and high-yield commercial hubs.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#C9A227]/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
                alt="Empragold Interior"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-black/80 p-4 rounded-xl backdrop-blur-md border border-white/10">
                <span className="text-xs font-serif font-bold text-[#C9A227] block">Lagos Flagship Office</span>
                <span className="text-[11px] text-gray-300 block">Admiralty Way, Lekki Phase 1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="py-16 border-b border-white/10">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs text-[#C9A227] uppercase tracking-widest font-bold block mb-2">
              Our Journey
            </span>
            <h2 className="text-3xl font-serif font-bold text-white">Milestones of Growth</h2>
          </div>

          <div className="relative max-w-4xl mx-auto space-y-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-start gap-6 bg-[#1A1A1D] p-6 rounded-2xl border border-white/10">
                <span className="text-3xl font-serif font-bold text-[#C9A227] shrink-0">{m.year}</span>
                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-1">{m.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="py-16">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs text-[#C9A227] uppercase tracking-widest font-bold block mb-2">
              Leadership
            </span>
            <h2 className="text-3xl font-serif font-bold text-white">Executive Partners</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {agentsData.map((agent) => (
              <div key={agent.id} className="bg-[#1A1A1D] border border-white/10 rounded-2xl p-5 text-center">
                <img src={agent.image} alt={agent.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-[#C9A227]" />
                <h3 className="text-lg font-serif font-bold text-white">{agent.name}</h3>
                <span className="text-xs text-[#C9A227] uppercase font-semibold block mt-1">{agent.role}</span>
                <p className="text-xs text-gray-400 mt-3 line-clamp-3">{agent.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
