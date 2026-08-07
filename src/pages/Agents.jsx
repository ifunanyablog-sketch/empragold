import React from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AgentCard } from '../components/AgentCard';
import { agentsData } from '../data/agentsData';

export const Agents = () => {
  return (
    <div className="bg-white text-slate-800 min-h-screen pt-24 pb-20">
      <SEO
        title="Real Estate Advisors & Agents | Empragold Estate Realtors Ltd"
        description="Meet Empragold's dedicated team of real estate advisors and property consultants in Lagos."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Property Advisors' }]} />

        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto my-10">
          <span className="text-xs text-[#338424] uppercase tracking-widest font-bold block mb-2">
            Property Consultants
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-slate-900">
            Our Property Advisors
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 font-normal">
            Bringing years of experience across residential multi-family units, commercial plots, and verified titles in Lagos and Ogun state.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="flex justify-center my-12">
          <div className="w-full max-w-md">
            {agentsData.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
