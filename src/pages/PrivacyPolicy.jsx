import React from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-slate-800 min-h-screen pt-24 pb-20">
      <SEO
        title="Privacy Policy | Empragold Estate Realtors Ltd"
        description="Empragold Estate Realtors Ltd Privacy Policy detailing client data protection, non-disclosure compliance, and cookies."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <div className="my-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Privacy & NDA Policy</h1>
          <p className="text-xs text-slate-500 font-semibold">Last updated: January 2026</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6 text-xs text-slate-600 leading-relaxed font-normal shadow-md">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">1. Commitment to Client Confidentiality</h2>
            <p>
              At Empragold Estate Realtors Ltd (RC: 8323733), we recognize that property buyers, home owners, and investors require complete confidentiality and security. We adhere strictly to data privacy standards and do not publicly disclose client transaction details or identities without explicit written consent.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">2. Data Collection & Usage</h2>
            <p>
              We collect personal details (such as contact information, property requirements, and identity verification documents) solely to facilitate property inspections, legal conveyancing, and title transfer documentation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">3. Third-Party Sharing</h2>
            <p>
              Your data is never sold or rented. We share relevant transaction data only with accredited legal practitioners, banking institutions, and government land registries strictly required for legal title settlement (C of O / Gov Consent).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">4. Cookies & Digital Tracking</h2>
            <p>
              Our web platform uses essential cookies to remember saved property favorites, comparison lists, and scheduled inspections. You may disable cookies in your browser at any time.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">5. Contact Data Officer</h2>
            <p>
              For privacy inquiries, please contact our Legal Counsel at <a href="mailto:adediresesan@gmail.com" className="text-[#338424] font-bold hover:underline">adediresesan@gmail.com</a> or call <a href="tel:+2348156789757" className="text-[#338424] font-bold hover:underline">08156789757</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
