import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { X, Bed, Bath, Car, Maximize2, MapPin, Heart, ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PropertyMedia } from './PropertyMedia';

export const QuickViewModal = () => {
  const { quickViewModal, setQuickViewModal, wishlist, toggleWishlist, setInspectionModal } = useApp();
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-[#1A1A1D] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 p-2 bg-black/60 text-white hover:text-[#C9A227] rounded-full backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Side Gallery */}
          <div className="relative md:w-1/2 h-64 md:h-auto bg-black overflow-hidden flex flex-col">
            <div className="relative flex-1">
              <PropertyMedia
                src={property.images[activeImgIndex] || property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Slider Prev Next controls */}
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-[#C9A227] hover:text-black text-white rounded-full backdrop-blur-md transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-[#C9A227] hover:text-black text-white rounded-full backdrop-blur-md transition-all"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}

              <div className="absolute top-4 left-4">
                <span className="bg-[#C9A227] text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {property.status}
                </span>
              </div>
            </div>

            {/* Thumbnails row */}
            {property.images.length > 1 && (
              <div className="p-3 bg-[#0F0F10] flex gap-2 overflow-x-auto no-scrollbar">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`w-14 h-10 rounded-md overflow-hidden shrink-0 border-2 transition-all ${
                      activeImgIndex === idx ? 'border-[#C9A227]' : 'border-transparent opacity-60'
                    }`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Side Info */}
          <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between overflow-y-auto">
            <div>
              <p className="text-xs text-[#C9A227] uppercase tracking-widest font-semibold flex items-center gap-1 mb-1">
                <MapPin className="w-3.5 h-3.5" />
                {property.location}
              </p>
              <h2 className="text-2xl font-serif font-bold text-white mb-2">{property.title}</h2>
              <p className="text-2xl font-serif font-bold text-[#C9A227] mb-4">{property.priceFormatted}</p>

              <p className="text-xs text-gray-300 leading-relaxed mb-5 line-clamp-4">
                {property.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 bg-[#0F0F10] rounded-xl border border-white/10 text-xs mb-5">
                <div className="text-center p-1">
                  <Bed className="w-4 h-4 text-[#C9A227] mx-auto mb-1" />
                  <span className="text-gray-400 block text-[10px]">Bedrooms</span>
                  <strong className="text-white">{property.bedrooms}</strong>
                </div>
                <div className="text-center p-1 border-l border-white/10">
                  <Bath className="w-4 h-4 text-[#C9A227] mx-auto mb-1" />
                  <span className="text-gray-400 block text-[10px]">Bathrooms</span>
                  <strong className="text-white">{property.bathrooms}</strong>
                </div>
                <div className="text-center p-1 border-l border-white/10">
                  <Car className="w-4 h-4 text-[#C9A227] mx-auto mb-1" />
                  <span className="text-gray-400 block text-[10px]">Garages</span>
                  <strong className="text-white">{property.garages}</strong>
                </div>
                <div className="text-center p-1 border-l border-white/10">
                  <Maximize2 className="w-4 h-4 text-[#C9A227] mx-auto mb-1" />
                  <span className="text-gray-400 block text-[10px]">Sq Ft</span>
                  <strong className="text-white">{property.sqft.toLocaleString()}</strong>
                </div>
              </div>

              {/* Top features tag */}
              {property.features && property.features.length > 0 && (
                <div className="mb-6">
                  <span className="text-[11px] text-gray-400 uppercase font-semibold block mb-2">Key Highlights</span>
                  <div className="flex flex-wrap gap-1.5">
                    {property.features.slice(0, 4).map((feat, i) => (
                      <span key={i} className="text-[11px] bg-white/5 border border-white/10 text-gray-200 px-2.5 py-1 rounded-md">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => toggleWishlist(property.id)}
                className={`p-3 rounded-xl border transition-all ${
                  isLiked
                    ? 'bg-[#C9A227] text-black border-[#C9A227]'
                    : 'border-white/20 text-white hover:border-[#C9A227]'
                }`}
                title="Save Favorite"
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-black' : ''}`} />
              </button>

              <Link
                to={`/property/${property.slug}`}
                onClick={handleClose}
                className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:brightness-110 font-semibold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5"
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
