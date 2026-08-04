import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, CheckCircle2, Building, Wrench, BarChart3, Users, DollarSign, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PropertyManagement = () => {
  const { showToast } = useApp();
  const [selectedPlan, setSelectedPlan] = useState('premier');
  const [monthlyRentInput, setMonthlyRentInput] = useState(15000);

  const plans = [
    {
      id: 'essential',
      name: 'Essential Care',
      rate: '6%',
      subtitle: 'Ideal for single residential penthouses',
      features: ['Automated Rent Collection', 'Executive Tenant Vetting', '24/7 Emergency Repairs', 'Quarterly Inspection Audits', 'Monthly Statements']
    },
    {
      id: 'premier',
      name: 'Premier Portfolio',
      rate: '8%',
      popular: true,
      subtitle: 'Best for multi-property landlords & commercial units',
      features: ['Everything in Essential', 'Dedicated Asset Manager', 'Lease Renewal Optimization', 'Tax & Conveyance Audits', 'Preventative Tech Maintenance', 'Legal Dispute Protection']
    },
    {
      id: 'blackcard',
      name: 'Black Card Concierge',
      rate: '10%',
      subtitle: 'White-glove full proxy management for international UHNW owners',
      features: ['Everything in Premier', 'Full VIP Tenant Concierge', 'Off-Market Re-Leasing', 'Architectural Staging & Care', 'Sovereign Wealth Tax Advisory', 'Instant Payout Guaranty']
    }
  ];

  const currentRateNum = selectedPlan === 'essential' ? 0.06 : selectedPlan === 'premier' ? 0.08 : 0.1;
  const estimatedManagementFee = Math.round(monthlyRentInput * currentRateNum);
  const netOwnerIncome = Math.round(monthlyRentInput - estimatedManagementFee);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    showToast('Asset Management Onboarding Inquiry Submitted!', 'success');
  };

  return (
    <div className="bg-white text-[#C9A227] min-h-screen pt-24 pb-20">
      <SEO
        title="Asset & Property Management Services | Empragold"
        description="Comprehensive luxury property management for owners and investors, offering 24/7 maintenance, executive tenant placement, and digital reporting."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Property Management' }]} />

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto my-10">
          <span className="text-xs text-[#C9A227] uppercase tracking-widest font-bold block mb-2">
            Institutional Asset Protection
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#C9A227]">
            White-Glove Property Management
          </h1>
          <p className="text-[#C9A227]/80 text-sm sm:text-base mt-4 font-normal">
            Maximizing rental yield, tenant satisfaction, and capital preservation for high-end luxury portfolios worldwide.
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-12">
          <div className="bg-white p-6 rounded-2xl border border-[#C9A227]/30 shadow-md">
            <Users className="w-8 h-8 text-[#C9A227] mb-4" />
            <h3 className="text-lg font-serif font-bold text-[#C9A227] mb-2">Executive Tenant Screening</h3>
            <p className="text-xs text-[#C9A227]/80 leading-relaxed font-normal">
              Biometric identity verification, credit background checks, and embassy reference audits for every tenant.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#C9A227]/30 shadow-md">
            <Wrench className="w-8 h-8 text-[#C9A227] mb-4" />
            <h3 className="text-lg font-serif font-bold text-[#C9A227] mb-2">24/7 On-Demand Maintenance</h3>
            <p className="text-xs text-[#C9A227]/80 leading-relaxed font-normal">
              Vetted artisan contractors on call 24 hours a day for emergency HVAC, plumbing, and smart home repairs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#C9A227]/30 shadow-md">
            <BarChart3 className="w-8 h-8 text-[#C9A227] mb-4" />
            <h3 className="text-lg font-serif font-bold text-[#C9A227] mb-2">Real-Time Landlord Portal</h3>
            <p className="text-xs text-[#C9A227]/80 leading-relaxed font-normal">
              Access digital income statements, tenant ledger records, and maintenance logs anytime from any device.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#C9A227]/30 shadow-md">
            <ShieldCheck className="w-8 h-8 text-[#C9A227] mb-4" />
            <h3 className="text-lg font-serif font-bold text-[#C9A227] mb-2">Guaranteed Rent Transfer</h3>
            <p className="text-xs text-[#C9A227]/80 leading-relaxed font-normal">
              Direct automated wire transfers deposited directly into your designated offshore or local bank account.
            </p>
          </div>
        </div>

        {/* Management Fee Calculator & Plans */}
        <div className="bg-white border border-[#C9A227]/30 rounded-3xl p-8 my-16 shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs text-[#C9A227] uppercase tracking-widest font-bold block mb-1">
              Transparent Pricing
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#C9A227]">Management Plan Calculator</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative p-6 rounded-2xl border cursor-pointer transition-all ${
                  selectedPlan === plan.id
                    ? 'bg-slate-50 border-[#C9A227] shadow-xl'
                    : 'bg-white border-[#C9A227]/20 hover:border-[#C9A227]/40'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 right-4 bg-[#C9A227] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-sm">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-serif font-bold text-[#C9A227]">{plan.name}</h3>
                <div className="text-3xl font-serif font-bold text-[#C9A227] my-2">{plan.rate}</div>
                <p className="text-xs text-[#C9A227]/80 mb-4 font-normal">{plan.subtitle}</p>

                <div className="space-y-2 pt-4 border-t border-[#C9A227]/20 text-xs text-[#C9A227]">
                  {plan.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                      <span className="font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Calculator Slider */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-[#C9A227]/30 max-w-2xl mx-auto text-center space-y-4">
            <div className="flex justify-between items-center text-xs text-[#C9A227] font-semibold">
              <span>Estimated Monthly Rental Income</span>
              <strong className="text-[#C9A227] text-base font-bold">${monthlyRentInput.toLocaleString()} / mo</strong>
            </div>
            <input
              type="range"
              min="2000"
              max="100000"
              step="1000"
              value={monthlyRentInput}
              onChange={(e) => setMonthlyRentInput(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 accent-[#C9A227] rounded-lg cursor-pointer"
            />

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#C9A227]/20 text-left">
              <div>
                <span className="text-[11px] text-[#C9A227]/70 uppercase font-semibold block">Monthly Management Fee</span>
                <strong className="text-xl font-serif font-bold text-[#C9A227]">${estimatedManagementFee.toLocaleString()}</strong>
              </div>
              <div>
                <span className="text-[11px] text-[#C9A227]/70 uppercase font-semibold block">Your Net Monthly Income</span>
                <strong className="text-xl font-serif font-bold text-[#C9A227]">${netOwnerIncome.toLocaleString()}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Onboarding Form */}
        <div className="max-w-xl mx-auto bg-white border border-[#C9A227]/30 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-serif font-bold text-[#C9A227] mb-2 text-center">Enroll Your Property</h3>
          <p className="text-xs text-[#C9A227]/80 mb-6 text-center">Submit property details to receive a complimentary valuation audit.</p>

          <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
            <input
              type="text"
              required
              placeholder="Owner Name *"
              className="w-full bg-slate-50 border border-[#C9A227]/30 rounded-xl p-3 text-[#C9A227] placeholder-[#C9A227]/50 focus:outline-none focus:border-[#C9A227]"
            />
            <input
              type="email"
              required
              placeholder="Email Address *"
              className="w-full bg-slate-50 border border-[#C9A227]/30 rounded-xl p-3 text-[#C9A227] placeholder-[#C9A227]/50 focus:outline-none focus:border-[#C9A227]"
            />
            <input
              type="text"
              required
              placeholder="Property Address / Location *"
              className="w-full bg-slate-50 border border-[#C9A227]/30 rounded-xl p-3 text-[#C9A227] placeholder-[#C9A227]/50 focus:outline-none focus:border-[#C9A227]"
            />
            <button
              type="submit"
              className="w-full bg-[#C9A227] text-white font-semibold uppercase tracking-wider py-3.5 rounded-xl hover:bg-[#B8860B] transition-all shadow-md"
            >
              Submit Property Audit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
