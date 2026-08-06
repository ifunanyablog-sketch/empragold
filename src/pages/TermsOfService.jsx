import React from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const TermsOfService = () => {
  return (
    <div className="bg-white text-slate-800 min-h-screen pt-24 pb-20">
      <SEO
        title="Terms of Service | Empragold Estate Realtors Ltd"
        description="Empragold Estate Realtors Ltd (RC: 8323733) Terms of Service regarding property representation, real estate advisory, and website usage."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

        <div className="my-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Terms of Service</h1>
          <p className="text-xs text-[#338424] font-semibold">Effective Date: January 2026 | RC: 8323733</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6 text-xs text-slate-700 leading-relaxed font-normal shadow-sm">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">1. Real Estate Representation</h2>
            <p>
              Empragold Estate Realtors Ltd (RC: 8323733) acts as a registered real estate company in Nigeria. All property details, pricing, land titles, and specifications provided on this site are compiled from verified owner sources but subject to final contract and title verification.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">2. Property Dossiers & Documentation</h2>
            <p>
              Access to property title documents (C of O, Governor's Consent, Gazette, Registered Survey) requires client verification. Off-market materials remain the intellectual property of Empragold Estate Realtors Ltd.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">3. Intellectual Property</h2>
            <p>
              All property photography, video tours, copy, and layout design are protected by copyright laws. Unauthorized reproduction or commercial distribution is strictly prohibited.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">4. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
