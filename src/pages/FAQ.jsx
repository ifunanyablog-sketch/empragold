import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { faqData } from '../data/blogData';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState('');

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-[#C9A227] min-h-screen pt-24 pb-20">
      <SEO
        title="Frequently Asked Questions | Empragold Luxury Advisory"
        description="Find answers regarding luxury property purchases, off-market penthouses, property management fee structures, and international title conveyancing."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'FAQ' }]} />

        <div className="text-center max-w-2xl mx-auto my-10">
          <span className="text-xs text-[#C9A227] uppercase tracking-widest font-bold block mb-2">
            Client Guidance
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#C9A227]">
            Frequently Asked Questions
          </h1>
          <p className="text-[#C9A227]/80 text-sm mt-3 font-normal">
            Clear answers to common questions regarding private transactions, asset management, and legal title verification.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A227]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions (e.g. off-market, title, management fees)..."
            className="w-full bg-slate-50 border border-[#C9A227]/30 focus:border-[#C9A227] rounded-2xl pl-11 pr-4 py-3.5 text-sm text-[#C9A227] placeholder-[#C9A227]/50 focus:outline-none transition-all shadow-sm"
          />
        </div>

        {/* Accordion Categories */}
        <div className="space-y-10">
          {faqData.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-[#C9A227] border-b border-[#C9A227]/20 pb-2">
                {cat.category}
              </h3>

              <div className="space-y-3">
                {cat.items.map((item, itemIdx) => {
                  const globalIdx = `${catIdx}-${itemIdx}`;
                  const isOpen = openIndex === globalIdx;

                  if (search && !item.q.toLowerCase().includes(search.toLowerCase()) && !item.a.toLowerCase().includes(search.toLowerCase())) {
                    return null;
                  }

                  return (
                    <div
                      key={itemIdx}
                      className="bg-white border border-[#C9A227]/30 rounded-2xl overflow-hidden transition-all shadow-sm hover:shadow-md"
                    >
                      <button
                        onClick={() => toggleAccordion(globalIdx)}
                        className="w-full p-5 text-left font-serif font-bold text-[#C9A227] text-base flex justify-between items-center gap-4 hover:text-[#B8860B] transition-colors"
                      >
                        <span>{item.q}</span>
                        <ChevronDown className={`w-5 h-5 text-[#C9A227] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="p-5 pt-0 text-xs text-[#C9A227]/90 leading-relaxed border-t border-[#C9A227]/20 font-normal">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Support Callout */}
        <div className="mt-16 p-8 bg-white border border-[#C9A227]/30 rounded-2xl text-center space-y-4 shadow-lg">
          <HelpCircle className="w-10 h-10 text-[#C9A227] mx-auto" />
          <h3 className="text-xl font-serif font-bold text-[#C9A227]">Have a Specific Legal or Market Question?</h3>
          <p className="text-xs text-[#C9A227]/80 max-w-md mx-auto font-normal">
            Our Private Client Advisors are available 24/7 to provide confidential guidance.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#C9A227] text-white font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-[#B8860B] transition-all shadow-md"
          >
            Contact Private Advisory
          </Link>
        </div>
      </div>
    </div>
  );
};
