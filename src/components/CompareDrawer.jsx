import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Layers, Check, ArrowRight, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export const CompareDrawer = () => {
  const { compareList, toggleCompare } = useApp();
  const [isOpenFull, setIsOpenFull] = useState(false);

  if (!compareList || compareList.length === 0) return null;

  return (
    <>
      {/* Floating Bottom Bar */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[#1A1A1D]/95 border border-[#C9A227]/40 text-white rounded-2xl px-5 py-3 shadow-2xl backdrop-blur-xl flex items-center gap-4 max-w-xl w-[92%]"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#C9A227]/20 border border-[#C9A227] text-[#C9A227] flex items-center justify-center font-bold text-xs">
            {compareList.length}
          </div>
          <span className="text-xs font-semibold hidden sm:inline">Compare Selected</span>
        </div>

        {/* Thumbnail Avatars */}
        <div className="flex items-center gap-2 flex-1 overflow-x-auto no-scrollbar">
          {compareList.map((prop) => (
            <div
              key={prop.id}
              className="relative group w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-white/20"
            >
              <img src={prop.images[0]} alt={prop.title} className="w-full h-full object-cover" />
              <button
                onClick={() => toggleCompare(prop)}
                className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center text-red-400 transition-opacity"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={() => setIsOpenFull(true)}
          className="bg-[#C9A227] text-black hover:bg-[#D4AF37] text-xs font-bold px-4 py-2 rounded-lg transition-all shrink-0 uppercase tracking-wider flex items-center gap-1"
        >
          Compare Now <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </motion.div>

      {/* Full Compare Modal Matrix */}
      <AnimatePresence>
        {isOpenFull && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl bg-[#1A1A1D] border border-white/10 rounded-2xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsOpenFull(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-6">
                <span className="text-xs text-[#C9A227] uppercase tracking-widest font-semibold block mb-1">
                  Side-by-Side Analysis
                </span>
                <h2 className="text-2xl font-serif font-bold text-white">Compare Luxury Properties</h2>
              </div>

              {/* Matrix Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr>
                      <th className="p-3 bg-[#0F0F10] text-gray-400 font-semibold w-36">Property</th>
                      {compareList.map((prop) => (
                        <th key={prop.id} className="p-4 bg-[#0F0F10] border-l border-white/10 min-w-[200px]">
                          <div className="relative mb-2">
                            <img
                              src={prop.images[0]}
                              alt={prop.title}
                              className="w-full h-28 object-cover rounded-lg mb-2"
                            />
                            <button
                              onClick={() => toggleCompare(prop)}
                              className="absolute top-2 right-2 p-1.5 bg-black/70 text-red-400 hover:text-red-300 rounded-full"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <Link
                            to={`/property/${prop.slug}`}
                            onClick={() => setIsOpenFull(false)}
                            className="font-serif font-bold text-white text-sm hover:text-[#C9A227] line-clamp-1 block"
                          >
                            {prop.title}
                          </Link>
                          <span className="text-[#C9A227] font-bold text-sm block mt-1">
                            {prop.priceFormatted}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="p-3 text-gray-400 font-medium bg-[#0F0F10]">Location</td>
                      {compareList.map((p) => (
                        <td key={p.id} className="p-3 text-gray-200 border-l border-white/10">{p.location}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 text-gray-400 font-medium bg-[#0F0F10]">Property Type</td>
                      {compareList.map((p) => (
                        <td key={p.id} className="p-3 text-gray-200 border-l border-white/10">{p.type}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 text-gray-400 font-medium bg-[#0F0F10]">Bedrooms</td>
                      {compareList.map((p) => (
                        <td key={p.id} className="p-3 text-white font-bold border-l border-white/10">{p.bedrooms} Beds</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 text-gray-400 font-medium bg-[#0F0F10]">Bathrooms</td>
                      {compareList.map((p) => (
                        <td key={p.id} className="p-3 text-white font-bold border-l border-white/10">{p.bathrooms} Baths</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 text-gray-400 font-medium bg-[#0F0F10]">Garages</td>
                      {compareList.map((p) => (
                        <td key={p.id} className="p-3 text-gray-200 border-l border-white/10">{p.garages} Cars</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 text-gray-400 font-medium bg-[#0F0F10]">Area</td>
                      {compareList.map((p) => (
                        <td key={p.id} className="p-3 text-gray-200 border-l border-white/10">{p.sqft.toLocaleString()} Sq Ft</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 text-gray-400 font-medium bg-[#0F0F10]">Status</td>
                      {compareList.map((p) => (
                        <td key={p.id} className="p-3 border-l border-white/10">
                          <span className="text-[#C9A227] font-semibold">{p.status}</span>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
