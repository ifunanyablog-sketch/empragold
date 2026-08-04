import React, { useState } from 'react';
import { Calculator, DollarSign, Percent, Calendar, PieChart } from 'lucide-react';

export const MortgageCalculator = ({ defaultPrice = 3250000000 }) => {
  const [propertyPrice, setPropertyPrice] = useState(defaultPrice);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(15.5);
  const [loanTerm, setLoanTerm] = useState(20); // years
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.2); // % annual

  const downPaymentAmount = (propertyPrice * downPaymentPercent) / 100;
  const loanAmount = propertyPrice - downPaymentAmount;

  // Monthly interest rate
  const monthlyRate = interestRate / 100 / 12;
  const totalPayments = loanTerm * 12;

  // Monthly Principal & Interest calculation formula
  const monthlyPrincipalAndInterest =
    monthlyRate > 0
      ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
        (Math.pow(1 + monthlyRate, totalPayments) - 1)
      : loanAmount / totalPayments;

  const monthlyPropertyTax = (propertyPrice * (propertyTaxRate / 100)) / 12;
  const monthlyHoaInsurance = 250000; // estimated service charge / insurance (₦)

  const totalMonthly = monthlyPrincipalAndInterest + monthlyPropertyTax + monthlyHoaInsurance;

  return (
    <div className="bg-white border border-[#C9A227]/30 rounded-2xl p-6 md:p-8 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 border border-[#C9A227] text-[#C9A227] flex items-center justify-center">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold text-[#C9A227]">Luxury Mortgage & Finance Calculator</h3>
          <p className="text-xs text-[#C9A227]/80">Estimate your monthly mortgage payments & capital allocation in Naira</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sliders Form */}
        <div className="lg:col-span-7 space-y-5">
          {/* Property Price */}
          <div>
            <div className="flex justify-between items-center text-xs text-[#C9A227] font-semibold mb-1">
              <span>Home Purchase Price</span>
              <strong className="text-[#9A7B1C] text-sm font-bold">₦{propertyPrice.toLocaleString()}</strong>
            </div>
            <input
              type="range"
              min="100000000"
              max="25000000000"
              step="50000000"
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              className="w-full h-2 bg-slate-100 accent-[#C9A227] rounded-lg cursor-pointer"
            />
          </div>

          {/* Down Payment */}
          <div>
            <div className="flex justify-between items-center text-xs text-[#C9A227] font-semibold mb-1">
              <span>Down Payment ({downPaymentPercent}%)</span>
              <strong className="text-[#C9A227] text-sm font-bold">₦{downPaymentAmount.toLocaleString()}</strong>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              step="1"
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              className="w-full h-2 bg-slate-100 accent-[#C9A227] rounded-lg cursor-pointer"
            />
          </div>

          {/* Interest Rate & Loan Term Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-[#C9A227] font-semibold block mb-1">Interest Rate (%)</label>
              <input
                type="number"
                step="0.1"
                min="1"
                max="30"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full bg-white border border-[#C9A227]/30 rounded-xl px-3 py-2 text-sm text-[#C9A227] focus:outline-none focus:border-[#C9A227] shadow-sm"
              />
            </div>

            <div>
              <label className="text-xs text-[#C9A227] font-semibold block mb-1">Loan Term (Years)</label>
              <select
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full bg-white border border-[#C9A227]/30 rounded-xl px-3 py-2 text-sm text-[#C9A227] focus:outline-none focus:border-[#C9A227] shadow-sm"
              >
                <option value={10}>10 Years</option>
                <option value={15}>15 Years</option>
                <option value={20}>20 Years</option>
                <option value={25}>25 Years</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Side Box */}
        <div className="lg:col-span-5 bg-slate-50 border border-[#C9A227]/30 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs text-[#C9A227] uppercase tracking-widest font-semibold block mb-1">
              Estimated Monthly Payment
            </span>
            <div className="text-3xl font-serif font-bold text-[#C9A227] mb-4">
              ₦{Math.round(totalMonthly).toLocaleString()}
              <span className="text-xs text-[#C9A227]/70 font-normal"> / month</span>
            </div>

            {/* Visual Breakdown Bar */}
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden flex mb-4">
              <div
                style={{ width: `${(monthlyPrincipalAndInterest / totalMonthly) * 100}%` }}
                className="bg-[#C9A227]"
                title="Principal & Interest"
              />
              <div
                style={{ width: `${(monthlyPropertyTax / totalMonthly) * 100}%` }}
                className="bg-blue-500"
                title="Property Tax"
              />
              <div
                style={{ width: `${(monthlyHoaInsurance / totalMonthly) * 100}%` }}
                className="bg-emerald-500"
                title="HOA & Insurance"
              />
            </div>

            {/* Breakdown List */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center text-[#C9A227]">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C9A227]" />
                  Principal & Interest
                </span>
                <strong className="text-[#9A7B1C]">₦{Math.round(monthlyPrincipalAndInterest).toLocaleString()}</strong>
              </div>
              <div className="flex justify-between items-center text-[#C9A227]">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  Estimated Taxes
                </span>
                <strong className="text-[#9A7B1C]">₦{Math.round(monthlyPropertyTax).toLocaleString()}</strong>
              </div>
              <div className="flex justify-between items-center text-[#C9A227]">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  Service Charge & Insurance
                </span>
                <strong className="text-[#9A7B1C]">₦{monthlyHoaInsurance.toLocaleString()}</strong>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#C9A227]/20 text-[11px] text-[#C9A227] flex justify-between">
            <span>Loan Amount: <strong>₦{loanAmount.toLocaleString()}</strong></span>
            <span>Down Payment: <strong>₦{downPaymentAmount.toLocaleString()}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
};
