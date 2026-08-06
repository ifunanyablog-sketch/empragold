import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { X, Bed, Bath, Car, Maximize2, MapPin, Heart, ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PropertyMedia } from './PropertyMedia';

export const QuickViewModal = () => {
  const { quickViewModal, setQuickViewModal, wishlist, toggleWishlist } = useApp();
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const property = quickViewModal.property;

  if (!quickViewModal.isOpen || !property) return null;

  const isLiked = wishlist.includes(property.id);

  const handleNextImage = () => {
    setActiveImgIndex((prev) => (prev + 1) % property.images.length);
  };

  const handlePrevImage = () => {
    setActiveImgIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const handleClose = () => {
    setQuickViewModal({ isOpen: false, property: null });
    setActiveImgIndex(0);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 p-2 bg-white/90 text-slate-700 hover:text-black rounded-full backdrop-blur-md transition-colors shadow-md"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Side Gallery */}
          <div className="relative md:w-1/2 h-64 md:h-auto bg-slate-50 overflow-hidden flex flex-col">
            <div className="relative flex-1">
              <PropertyMedia
                src={property.images[activeImgIndex] || property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent pointer-events-none" />

              {/* Slider Prev Next controls */}
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-[#4db038] text-slate-800 hover:text-white rounded-full backdrop-blur-md transition-all shadow-md"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-[#4db038] text-slate-800 hover:text-white rounded-full backdrop-blur-md transition-all shadow-md"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}

              <div className="absolute top-4 left-4">
                <span className="bg-[#4db038] text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md">
                  {property.status}
                </span>
              </div>
            </div>

            {/* Thumbnails row */}
            {property.images.length > 1 && (
              <div className="p-3 bg-slate-100 flex gap-2 overflow-x-auto no-scrollbar border-t border-slate-200">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`w-14 h-10 rounded-md overflow-hidden shrink-0 border-2 transition-all ${
                      activeImgIndex === idx ? 'border-[#4db038]' : 'border-transparent opacity-60'
                    }`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Side Info */}
          <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between overflow-y-auto bg-white">
            <div>
              <p className="text-xs text-[#338424] uppercase tracking-widest font-bold flex items-center gap-1 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#4db038]" />
                {property.location}
              </p>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{property.title}</h2>
              <p className="text-2xl font-bold text-[#338424] mb-4">{property.priceFormatted}</p>

              <p className="text-xs text-slate-600 leading-relaxed mb-5 line-clamp-4 font-normal">
                {property.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs mb-5">
                <div className="text-center p-1">
                  <Bed className="w-4 h-4 text-[#4db038] mx-auto mb-1" />
                  <span className="text-slate-500 block text-[10px] font-medium">Bedrooms</span>
                  <strong className="text-slate-900 font-bold">{property.bedrooms}</strong>
                </div>
                <div className="text-center p-1 border-l border-slate-200">
                  <Bath className="w-4 h-4 text-[#4db038] mx-auto mb-1" />
                  <span className="text-slate-500 block text-[10px] font-medium">Bathrooms</span>
                  <strong className="text-slate-900 font-bold">{property.bathrooms}</strong>
                </div>
                <div className="text-center p-1 border-l border-slate-200">
                  <Car className="w-4 h-4 text-[#4db038] mx-auto mb-1" />
                  <span className="text-slate-500 block text-[10px] font-medium">Garages</span>
                  <strong className="text-slate-900 font-bold">{property.garages}</strong>
                </div>
                <div className="text-center p-1 border-l border-slate-200">
                  <Maximize2 className="w-4 h-4 text-[#4db038] mx-auto mb-1" />
                  <span className="text-slate-500 block text-[10px] font-medium">Sq Ft</span>
                  <strong className="text-slate-900 font-bold">{property.sqft.toLocaleString()}</strong>
                </div>
              </div>

              {/* Top features tag */}
              {property.features && property.features.length > 0 && (
                <div className="mb-6">
                  <span className="text-[11px] text-slate-900 uppercase font-bold block mb-2">Key Highlights</span>
                  <div className="flex flex-wrap gap-1.5">
                    {property.features.slice(0, 4).map((feat, i) => (
                      <span key={i} className="text-[11px] bg-[#e2efe1] border border-[#338424]/20 text-[#215717] px-2.5 py-1 rounded-md font-semibold">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => toggleWishlist(property.id)}
                className={`p-3 rounded-xl border transition-all ${
                  isLiked
                    ? 'bg-[#4db038] text-white border-[#4db038]'
                    : 'border-slate-300 text-slate-700 hover:bg-[#4db038] hover:text-white hover:border-[#4db038]'
                }`}
                title="Save Favorite"
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-white' : ''}`} />
              </button>

              <Link
                to={`/property/${property.slug}`}
                onClick={handleClose}
                className="flex-1 py-3 bg-[#4db038] hover:bg-[#338424] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md"
              >
                View Full Listing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
