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
    <div className="bg-white text-slate-800 min-h-screen pt-24 pb-20">
      <SEO
        title="Frequently Asked Questions | Empragold Estate Realtors Ltd"
        description="Find answers regarding property purchases, C of O title documents, Governor's Consent, and property inspection in Lagos."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'FAQ' }]} />

        <div className="text-center max-w-2xl mx-auto my-10">
          <span className="text-xs text-[#338424] uppercase tracking-widest font-bold block mb-2">
            Client Guidance
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-600 text-sm mt-3 font-normal">
            Clear answers to common questions regarding property purchases, legal documentation (C of O / Gov Consent), and site inspections.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions (e.g. C of O, Governor Consent, inspection)..."
            className="w-full bg-slate-50 border border-slate-200 focus:border-[#4db038] rounded-2xl pl-11 pr-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-all shadow-2xs"
          />
        </div>

        {/* Accordion Categories */}
        <div className="space-y-10">
          {faqData.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
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
                      className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-2xs hover:shadow-md"
                    >
                      <button
                        onClick={() => toggleAccordion(globalIdx)}
                        className="w-full p-5 text-left font-bold text-slate-900 text-base flex justify-between items-center gap-4 hover:text-[#338424] transition-colors"
                      >
                        <span>{item.q}</span>
                        <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="p-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 font-normal">
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
        <div className="mt-16 p-8 bg-white border border-slate-200 rounded-2xl text-center space-y-4 shadow-md">
          <HelpCircle className="w-10 h-10 text-[#4db038] mx-auto" />
          <h3 className="text-xl font-bold text-slate-900">Have a Specific Property Question?</h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto font-normal">
            Our team at Empragold Estate Realtors Ltd is ready to answer your questions and assist with physical inspections.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#4db038] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-[#338424] transition-all shadow-xs"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
};
