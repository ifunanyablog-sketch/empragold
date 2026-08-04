import React from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-[#C9A227] min-h-screen pt-24 pb-20">
      <SEO
        title="Privacy Policy | Empragold Real Estate"
        description="Empragold Real Estate Privacy Policy detailing high-net-worth client data protection, non-disclosure compliance, and cookies."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <div className="my-8">
          <h1 className="text-4xl font-serif font-bold text-[#C9A227] mb-2">Privacy & NDA Policy</h1>
          <p className="text-xs text-[#9A7B1C] font-semibold">Last updated: January 2026</p>
        </div>

        <div className="bg-white border border-[#C9A227]/30 rounded-2xl p-8 space-y-6 text-xs text-[#C9A227]/90 leading-relaxed font-normal shadow-md">
          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-[#C9A227]">1. Commitment to Client Anonymity</h2>
            <p>
              At Empragold Real Estate, we recognize that high-net-worth individuals, sovereign funds, and corporate clients require complete confidentiality. We adhere strictly to international Non-Disclosure Agreements (NDAs) and do not publicly disclose transaction details or client identities without explicit written consent.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-[#C9A227]">2. Data Collection & Usage</h2>
            <p>
              We collect personal details (such as contact information, financial qualification proof, and identity verification documents) solely to execute property viewings, legal conveyancing, and anti-money laundering (AML) compliance checks.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-[#C9A227]">3. Third-Party Sharing</h2>
            <p>
              Your data is never sold or rented. We share relevant property data only with accredited solicitors, escrow banking institutions, and government land registries strictly required for transaction settlement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-[#C9A227]">4. Cookies & Digital Tracking</h2>
            <p>
              Our web platform uses essential cookies to remember saved property favorites, comparison drawers, and private viewing schedules. You may disable cookies in your browser at any time.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-serif font-bold text-[#C9A227]">5. Contact Data Officer</h2>
            <p>
              For privacy inquiries, please contact our Legal Counsel at <span className="text-[#C9A227] font-bold">privacy@empragold.com</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
