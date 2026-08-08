import React, { useState } from 'react';
import { Phone, Mail, Award, CheckCircle, ExternalLink, X, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export const AgentCard = ({ agent }) => {
  const [showBioModal, setShowBioModal] = useState(false);

  if (!agent) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#4db038] transition-all duration-300 shadow-md flex flex-col"
      >
        {/* Agent Photo */}
        <div className="relative h-72 overflow-hidden bg-slate-100">
          <img
            src={agent.image}
            alt={agent.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Experience Badge */}
          <div className="absolute top-4 left-4 bg-white/95 border border-slate-200 text-slate-900 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md shadow-2xs">
            {agent.experience}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between flex-1 bg-white">
          <div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#338424] transition-colors">
              {agent.name}
            </h3>
            <p className="text-xs text-[#338424] uppercase tracking-wider font-bold mt-1">
              {agent.role}
            </p>

            <p className="text-slate-600 text-xs line-clamp-2 mt-3 leading-relaxed font-normal">
              {agent.bio}
            </p>

            {/* Specialties Badges */}
            {agent.specialties && (
              <div className="flex flex-wrap gap-1.5 mt-4">
                {agent.specialties.slice(0, 3).map((spec, idx) => (
                  <span key={idx} className="text-[10px] bg-[#e2efe1] border border-[#338424]/20 text-[#215717] px-2 py-0.5 rounded-md font-semibold">
                    {spec}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="flex justify-between items-center text-xs mb-4">
              <span className="flex items-center gap-1 font-bold text-slate-900">
                <Award className="w-4 h-4 text-[#4db038]" />
                {agent.salesVolume}
              </span>
              <span className="text-slate-600 font-medium">{agent.activeListings} Active Listings</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`https://wa.me/${agent.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-white border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5" /> WhatsApp
              </a>
              <button
                onClick={() => setShowBioModal(true)}
                className="py-2.5 px-3 bg-[#4db038] text-white hover:bg-[#338424] text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-2xs"
              >
                Bio & Profile
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bio Modal */}
      <AnimatePresence>
        {showBioModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xl"
            >
              <button
                onClick={() => setShowBioModal(false)}
                className="absolute top-5 right-5 text-slate-500 hover:text-slate-900"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row gap-5 items-start mb-6">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-[#4db038]"
                />
                <div>
                  <span className="text-xs text-[#338424] uppercase tracking-widest font-bold block">
                    Empragold Senior Advisor
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">{agent.name}</h3>
                  <p className="text-xs text-slate-600 mt-1 font-medium">{agent.role}</p>
                  <p className="text-xs text-slate-900 font-bold mt-2">{agent.salesVolume}</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-700 leading-relaxed mb-6 font-normal">
                <p>{agent.bio}</p>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-900 font-bold block mb-2 uppercase text-[10px] tracking-wider">
                    Core Specializations
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {agent.specialties?.map((s, i) => (
                      <span key={i} className="bg-white border border-slate-200 text-slate-900 px-2.5 py-1 rounded-md font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 text-slate-800 font-medium">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#4db038]" />
                    <span>Direct: {agent.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#4db038]" />
                    <span>Email: {agent.email}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={`mailto:${agent.email}`}
                  className="flex-1 py-3 bg-[#4db038] text-white hover:bg-[#338424] font-bold text-xs uppercase tracking-wider rounded-xl transition-all text-center shadow-md"
                >
                  Send Direct Message
                </a>
                <Link
                  to="/properties"
                  onClick={() => setShowBioModal(false)}
                  className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs uppercase tracking-wider rounded-xl transition-all text-center border border-slate-200"
                >
                  View Listings
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
