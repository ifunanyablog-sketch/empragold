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
      title: 'Senior Real Estate Consultant',
      location: 'Lagos & Ogun State',
      type: 'Full-time',
      department: 'Sales & Advisory',
      desc: 'Seeking proven real estate consultants with experience managing client relationships and closing residential & land transactions.'
    },
    {
      id: 'job-2',
      title: 'Director of Property Acquisitions',
      location: 'Ikeja, Lagos',
      type: 'Full-time',
      department: 'Commercial Advisory',
      desc: 'Lead strategic land syndications, prime estate acquisitions, and client portfolio negotiations across Lagos & Ogun State.'
    },
    {
      id: 'job-3',
      title: 'Client Services Concierge Manager',
      location: 'Ikeja Flagship Office',
      type: 'Full-time',
      department: 'Client Relations',
      desc: 'Deliver bespoke property inspection tours, title documentation logistics, and VIP client support for home buyers.'
    }
  ];

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Career application submitted to HR.', 'success');
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen pt-24 pb-20">
      <SEO
        title="Careers | Empragold Estate Realtors Ltd"
        description="Explore career opportunities at Empragold Estate Realtors Ltd (RC: 8323733). We hire top-tier property consultants and advisors."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Careers' }]} />

        <div className="text-center max-w-3xl mx-auto my-10">
          <span className="text-xs text-[#338424] uppercase tracking-widest font-bold block mb-2">
            Build Real Estate Excellence
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-slate-900">
            Careers at Empragold
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 font-normal">
            Join our team of dedicated professionals at Empragold Estate Realtors Ltd (RC: 8323733) and help transform real estate ownership in Nigeria.
          </p>
        </div>

        {/* Job Listings Grid */}
        <div className="space-y-6 my-12 max-w-4xl mx-auto">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-[#4db038] transition-all shadow-xs"
            >
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                  <span className="bg-[#4db038] text-white font-bold px-2.5 py-0.5 rounded-md text-[10px] shadow-2xs">
                    {job.department}
                  </span>
                  <span className="flex items-center gap-1 font-medium"><MapPin className="w-3.5 h-3.5 text-[#338424]" /> {job.location}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                <p className="text-xs text-slate-600 mt-2 max-w-xl font-normal">{job.desc}</p>
              </div>

              <button
                onClick={() => {
                  setActiveJobModal(job);
                  setSubmitted(false);
                }}
                className="bg-[#4db038] text-white hover:bg-[#338424] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all shrink-0 flex items-center gap-1.5 shadow-xs"
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
          <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setActiveJobModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#4db038] mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-slate-900">Application Received</h3>
                <p className="text-xs text-slate-600 my-4 font-normal">Our Talent Partner will review your credentials and get in touch.</p>
                <button
                  onClick={() => setActiveJobModal(null)}
                  className="bg-[#4db038] text-white font-semibold text-xs uppercase px-6 py-2.5 rounded-xl shadow-xs"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">Apply: {activeJobModal.title}</h3>
                <p className="text-xs text-slate-500 mb-6">{activeJobModal.department} • {activeJobModal.location}</p>

                <form onSubmit={handleApplySubmit} className="space-y-4 text-xs">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4db038]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4db038]"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4db038]"
                  />
                  <div className="border border-dashed border-slate-300 rounded-xl p-4 text-center cursor-pointer hover:border-[#4db038] bg-slate-50">
                    <Upload className="w-6 h-6 text-[#338424] mx-auto mb-1" />
                    <span className="text-slate-700 block font-medium">Click to upload CV / Portfolio (PDF)</span>
                    <span className="text-[10px] text-slate-400">Max size 10MB</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#4db038] text-white font-bold uppercase tracking-wider py-3.5 rounded-xl hover:bg-[#338424] transition-all shadow-xs"
                  >
                    Submit Application
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
