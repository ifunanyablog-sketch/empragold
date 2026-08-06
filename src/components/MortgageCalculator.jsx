import React, { useState } from 'react';
import { Calculator, Percent, Calendar, PieChart } from 'lucide-react';

export const MortgageCalculator = ({ defaultPrice = 350000000 }) => {
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
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#e2efe1] border border-[#338424]/30 text-[#338424] flex items-center justify-center">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#111827]">Mortgage & Finance Calculator</h3>
          <p className="text-xs text-slate-500">Estimate your monthly mortgage payments & capital allocation in Naira (₦)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sliders Form */}
        <div className="lg:col-span-7 space-y-5">
          {/* Property Price */}
          <div>
            <div className="flex justify-between items-center text-xs font-semibold mb-1">
              <span className="text-slate-600">Home Purchase Price</span>
              <strong className="text-[#338424] text-sm font-bold">₦{propertyPrice.toLocaleString()}</strong>
            </div>
            <input
              type="range"
              min="20000000"
              max="1000000000"
              step="10000000"
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              className="w-full h-2 bg-slate-100 accent-[#4db038] rounded-lg cursor-pointer"
            />
          </div>

          {/* Down Payment */}
          <div>
            <div className="flex justify-between items-center text-xs font-semibold mb-1">
              <span className="text-slate-600">Down Payment ({downPaymentPercent}%)</span>
              <strong className="text-[#338424] text-sm font-bold">₦{downPaymentAmount.toLocaleString()}</strong>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              step="1"
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              className="w-full h-2 bg-slate-100 accent-[#4db038] rounded-lg cursor-pointer"
            />
          </div>

          {/* Interest Rate & Loan Term Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-slate-600 font-semibold block mb-1">Interest Rate (%)</label>
              <input
                type="number"
                step="0.1"
                min="1"
                max="30"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-[#4db038] shadow-2xs"
              />
            </div>

            <div>
              <label className="text-xs text-slate-600 font-semibold block mb-1">Loan Term (Years)</label>
              <select
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-800 focus:outline-none focus:border-[#4db038] shadow-2xs"
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
        <div className="lg:col-span-5 bg-[#f8faf8] border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold block mb-1">
              Estimated Monthly Payment
            </span>
            <div className="text-3xl font-bold text-[#111827] mb-4">
              ₦{Math.round(totalMonthly).toLocaleString()}
              <span className="text-xs text-slate-500 font-normal"> / month</span>
            </div>

            {/* Visual Breakdown Bar */}
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden flex mb-4">
              <div
                style={{ width: `${(monthlyPrincipalAndInterest / totalMonthly) * 100}%` }}
                className="bg-[#4db038]"
                title="Principal & Interest"
              />
              <div
                style={{ width: `${(monthlyPropertyTax / totalMonthly) * 100}%` }}
                className="bg-blue-500"
                title="Property Tax"
              />
              <div
                style={{ width: `${(monthlyHoaInsurance / totalMonthly) * 100}%` }}
                className="bg-emerald-600"
                title="HOA & Insurance"
              />
            </div>

            {/* Breakdown List */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center text-slate-700">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4db038]" />
                  Principal & Interest
                </span>
                <strong className="text-[#111827]">₦{Math.round(monthlyPrincipalAndInterest).toLocaleString()}</strong>
              </div>
              <div className="flex justify-between items-center text-slate-700">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  Estimated Taxes
                </span>
                <strong className="text-[#111827]">₦{Math.round(monthlyPropertyTax).toLocaleString()}</strong>
              </div>
              <div className="flex justify-between items-center text-slate-700">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                  Service Charge & Insurance
                </span>
                <strong className="text-[#111827]">₦{monthlyHoaInsurance.toLocaleString()}</strong>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] text-slate-500 flex justify-between">
            <span>Loan Amount: <strong className="text-slate-800">₦{loanAmount.toLocaleString()}</strong></span>
            <span>Down Payment: <strong className="text-slate-800">₦{downPaymentAmount.toLocaleString()}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
};
