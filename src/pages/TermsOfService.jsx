import React from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const TermsOfService = () => {
  return (
    <div className="bg-[#0F0F10] text-gray-100 min-h-screen pt-24 pb-20">
      <SEO
        title="Terms of Service | Empragold Real Estate"
        description="Empragold Real Estate Terms of Service regarding property representation, off-market advisory, and website usage."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

        <div className="my-8">
          <h1 className="text-4xl font-serif font-bold text-white mb-2">Terms of Service</h1>
          <p className="text-xs text-[#C9A227]">Effective Date: January 2026</p>
        </div>

        <div className="bg-[#1A1A1D] border border-white/10 rounded-2xl p-8 space-y-6 text-xs text-gray-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-white">1. Brokerage Representation</h2>
            <p>
              Empragold Real Estate acts as a licensed luxury real estate brokerage. All property details, pricing, square footage, and specifications provided on this site are compiled from reliable sources but subject to final contract verification.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-white">2. Off-Market Dossiers</h2>
            <p>
              Access to private off-market property dossiers requires identity verification and signing of standard non-disclosure terms. Off-market materials remain the intellectual property of Empragold.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-white">3. Intellectual Property</h2>
            <p>
              All architectural photography, video tours, copy, and layout design are protected by international copyright laws. Unauthorized reproduction or commercial distribution is prohibited.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-white">4. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria and the State of California, USA, depending on office transaction jurisdiction.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
