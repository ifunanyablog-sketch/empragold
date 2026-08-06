import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, CheckCircle2, Building, Wrench, BarChart3, Users, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PropertyManagement = () => {
  const { showToast } = useApp();
  const [selectedPlan, setSelectedPlan] = useState('premier');
  const [monthlyRentInput, setMonthlyRentInput] = useState(2500000);

  const plans = [
    {
      id: 'essential',
      name: 'Essential Care',
      rate: '6%',
      subtitle: 'Ideal for single residential units & flats',
      features: ['Automated Rent Collection', 'Executive Tenant Vetting', '24/7 Emergency Repairs', 'Quarterly Inspection Audits', 'Monthly Statements']
    },
    {
      id: 'premier',
      name: 'Premier Portfolio',
      rate: '8%',
      popular: true,
      subtitle: 'Best for multi-family landlords & commercial units',
      features: ['Everything in Essential', 'Dedicated Asset Manager', 'Lease Renewal Optimization', 'Tax & Conveyance Audits', 'Preventative Maintenance', 'Legal Dispute Protection']
    },
    {
      id: 'blackcard',
      name: 'Executive Concierge',
      rate: '10%',
      subtitle: 'Full proxy management for Diaspora & overseas owners',
      features: ['Everything in Premier', 'Full VIP Tenant Concierge', 'Off-Market Re-Leasing', 'Property Staging & Care', 'Local Tax Advisory', 'Instant Payout Guarantee']
    }
  ];

  const currentRateNum = selectedPlan === 'essential' ? 0.06 : selectedPlan === 'premier' ? 0.08 : 0.1;
  const estimatedManagementFee = Math.round(monthlyRentInput * currentRateNum);
  const netOwnerIncome = Math.round(monthlyRentInput - estimatedManagementFee);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    showToast('Asset Management Inquiry Submitted!', 'success');
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen pt-24 pb-20">
      <SEO
        title="Asset & Property Management Services | Empragold Estate Realtors Ltd"
        description="Comprehensive property management for owners and investors in Lagos and across Nigeria, offering 24/7 maintenance, tenant placement, and digital reporting."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Property Management' }]} />

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto my-10">
          <span className="text-xs text-[#338424] uppercase tracking-widest font-bold block mb-2">
            Property & Asset Protection
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-slate-900">
            Professional Property Management
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 font-normal">
            Maximizing rental yield, tenant retention, and capital preservation for residential and commercial property owners.
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-12">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <Users className="w-8 h-8 text-[#338424] mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Executive Tenant Screening</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Background checks, employment verification, and reference audits for every prospective tenant.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <Wrench className="w-8 h-8 text-[#338424] mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">24/7 On-Demand Maintenance</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Vetted artisan contractors on call for electrical, plumbing, generator, and facility repairs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <BarChart3 className="w-8 h-8 text-[#338424] mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Real-Time Landlord Portal</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Access digital income statements, tenant ledger records, and maintenance logs anytime from any device.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <ShieldCheck className="w-8 h-8 text-[#338424] mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Guaranteed Rent Transfer</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Direct automated bank transfers deposited into your designated bank account without delay.
            </p>
          </div>
        </div>

        {/* Management Fee Calculator & Plans */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 my-16 shadow-md">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs text-[#338424] uppercase tracking-widest font-bold block mb-1">
              Transparent Pricing
            </span>
            <h2 className="text-3xl font-bold text-slate-900">Management Plan Calculator</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative p-6 rounded-2xl border cursor-pointer transition-all ${
                  selectedPlan === plan.id
                    ? 'bg-emerald-50/50 border-[#4db038] shadow-md'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 right-4 bg-[#4db038] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-2xs">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <div className="text-3xl font-bold text-[#4db038] my-2">{plan.rate}</div>
                <p className="text-xs text-slate-500 mb-4 font-normal">{plan.subtitle}</p>

                <div className="space-y-2 pt-4 border-t border-slate-200 text-xs text-slate-700">
                  {plan.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#338424] shrink-0" />
                      <span className="font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Calculator Slider (Naira) */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 max-w-2xl mx-auto text-center space-y-4">
            <div className="flex justify-between items-center text-xs text-slate-700 font-semibold">
              <span>Estimated Monthly Rental Income (₦)</span>
              <strong className="text-[#338424] text-base font-bold">₦{monthlyRentInput.toLocaleString()} / mo</strong>
            </div>
            <input
              type="range"
              min="100000"
              max="20000000"
              step="100000"
              value={monthlyRentInput}
              onChange={(e) => setMonthlyRentInput(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 accent-[#4db038] rounded-lg cursor-pointer"
            />

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 text-left">
              <div>
                <span className="text-[11px] text-slate-500 uppercase font-semibold block">Monthly Management Fee</span>
                <strong className="text-xl font-bold text-slate-900">₦{estimatedManagementFee.toLocaleString()}</strong>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 uppercase font-semibold block">Your Net Monthly Income</span>
                <strong className="text-xl font-bold text-[#338424]">₦{netOwnerIncome.toLocaleString()}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Onboarding Form */}
        <div className="max-w-xl mx-auto bg-white border border-slate-200 p-8 rounded-2xl shadow-md">
          <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">Enroll Your Property</h3>
          <p className="text-xs text-slate-500 mb-6 text-center">Submit property details to receive a complimentary rental valuation audit.</p>

          <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
            <input
              type="text"
              required
              placeholder="Owner Name *"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4db038] shadow-2xs"
            />
            <input
              type="email"
              required
              placeholder="Email Address *"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4db038] shadow-2xs"
            />
            <input
              type="text"
              required
              placeholder="Property Address / Location *"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4db038] shadow-2xs"
            />
            <button
              type="submit"
              className="w-full bg-[#4db038] text-white font-bold uppercase tracking-wider py-3.5 rounded-xl hover:bg-[#338424] transition-all shadow-xs"
            >
              Submit Property Audit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
