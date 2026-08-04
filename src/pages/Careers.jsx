import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Briefcase, MapPin, CheckCircle2, ArrowRight, X, Upload } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Careers = () => {
  const { showToast } = useApp();
  const [activeJobModal, setActiveJobModal] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    {
      id: 'job-1',
      title: 'Senior Luxury Real Estate Partner',
      location: 'Lagos & Abuja',
      type: 'Full-time Executive',
      department: 'Private Client Group',
      desc: 'Seeking proven brokers with minimum 8 years experience managing UHNW client relationships and closing trophy transactions over $5M.'
    },
    {
      id: 'job-2',
      title: 'Director of Commercial Acquisitions',
      location: 'Victoria Island, Lagos',
      type: 'Full-time',
      department: 'Commercial Advisory',
      desc: 'Lead skyscraper syndications, REIT structuring, and corporate tenant lease negotiations for multi-million dollar office towers.'
    },
    {
      id: 'job-3',
      title: 'Private Client Concierge Manager',
      location: 'Lekki Flagship Office',
      type: 'Full-time',
      department: 'Client Services',
      desc: 'Deliver bespoke white-glove viewing tours, private jet charter logistics, and concierge support for VIP property buyers.'
    }
  ];

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Career application submitted to HR Board.', 'success');
  };

  return (
    <div className="bg-white text-[#C9A227] min-h-screen pt-24 pb-20">
      <SEO
        title="Careers at Empragold | Join Our Elite Real Estate Advisory"
        description="Explore executive career opportunities at Empragold Real Estate. We hire top-tier luxury property brokers, commercial analysts, and private concierges."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Careers' }]} />

        <div className="text-center max-w-3xl mx-auto my-10">
          <span className="text-xs text-[#C9A227] uppercase tracking-widest font-bold block mb-2">
            Build Modern Excellence
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#C9A227]">
            Careers at Empragold
          </h1>
          <p className="text-[#C9A227]/80 text-sm sm:text-base mt-4 font-normal">
            We invite extraordinary talent to shape the future of ultra-luxury real estate across Africa, North America, and Europe.
          </p>
        </div>

        {/* Job Listings Grid */}
        <div className="space-y-6 my-12 max-w-4xl mx-auto">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-[#C9A227]/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-[#C9A227] transition-all shadow-md"
            >
              <div>
                <div className="flex items-center gap-3 text-xs text-[#C9A227]/80 mb-2">
                  <span className="bg-[#C9A227] text-white font-bold px-2.5 py-0.5 rounded-md text-[10px] shadow-sm">
                    {job.department}
                  </span>
                  <span className="flex items-center gap-1 font-medium"><MapPin className="w-3.5 h-3.5 text-[#C9A227]" /> {job.location}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#C9A227]">{job.title}</h3>
                <p className="text-xs text-[#C9A227]/80 mt-2 max-w-xl font-normal">{job.desc}</p>
              </div>

              <button
                onClick={() => {
                  setActiveJobModal(job);
                  setSubmitted(false);
                }}
                className="bg-[#C9A227] text-white hover:bg-[#B8860B] font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all shrink-0 flex items-center gap-1.5 shadow-md"
              >
                Apply Now <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {activeJobModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-white border border-[#C9A227]/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setActiveJobModal(null)}
              className="absolute top-5 right-5 text-[#C9A227]/70 hover:text-[#C9A227]"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#C9A227] mx-auto mb-3" />
                <h3 className="text-2xl font-serif font-bold text-[#C9A227]">Application Received</h3>
                <p className="text-xs text-[#C9A227]/80 my-4 font-normal">Our Talent Acquisition Partner will review your credentials and get in touch.</p>
                <button
                  onClick={() => setActiveJobModal(null)}
                  className="bg-[#C9A227] text-white font-semibold text-xs uppercase px-6 py-2.5 rounded-xl shadow-md"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-serif font-bold text-[#C9A227] mb-1">Apply: {activeJobModal.title}</h3>
                <p className="text-xs text-[#C9A227]/80 mb-6">{activeJobModal.department} • {activeJobModal.location}</p>

                <form onSubmit={handleApplySubmit} className="space-y-4 text-xs">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
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
                    placeholder="LinkedIn Profile URL"
                    className="w-full bg-slate-50 border border-[#C9A227]/30 rounded-xl p-3 text-[#C9A227] placeholder-[#C9A227]/50 focus:outline-none focus:border-[#C9A227]"
                  />
                  <div className="border border-dashed border-[#C9A227]/40 rounded-xl p-4 text-center cursor-pointer hover:border-[#C9A227] bg-slate-50">
                    <Upload className="w-6 h-6 text-[#C9A227] mx-auto mb-1" />
                    <span className="text-[#C9A227] block font-medium">Click to upload CV / Portfolio (PDF)</span>
                    <span className="text-[10px] text-[#C9A227]/60">Max size 10MB</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#C9A227] text-white font-semibold uppercase tracking-wider py-3.5 rounded-xl hover:bg-[#B8860B] transition-all shadow-md"
                  >
                    Submit Confidential Application
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
