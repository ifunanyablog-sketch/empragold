import React from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AgentCard } from '../components/AgentCard';
import { agentsData } from '../data/agentsData';

export const Agents = () => {
  return (
    <div className="bg-[#0F0F10] text-gray-100 min-h-screen pt-24 pb-20">
      <SEO
        title="Private Real Estate Advisors & Agents | Empragold"
        description="Meet Empragold's elite team of senior real estate brokers, wealth advisors, and commercial property directors serving UHNW clients worldwide."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Private Agents' }]} />

        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto my-10">
          <span className="text-xs text-[#C9A227] uppercase tracking-widest font-bold block mb-2">
            Discreet Advisory
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white">
            Our Senior Private Advisors
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mt-4 font-light">
            Bringing decades of cumulative transaction experience across waterfront penthouses, commercial towers, and off-market portfolio acquisitions.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          {agentsData.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </div>
  );
};
