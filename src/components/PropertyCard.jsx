import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Heart, Bed, Bath, Car, Maximize2, MapPin, Eye, Layers, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PropertyMedia } from './PropertyMedia';

export const PropertyCard = ({ property, layout = 'grid' }) => {
  const { wishlist, toggleWishlist, compareList, toggleCompare, setQuickViewModal, setInspectionModal } = useApp();

  if (!property) return null;

  const isLiked = wishlist.includes(property.id);
  const isCompared = compareList.some((p) => p.id === property.id);

  if (layout === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="group relative bg-white border border-[#C9A227]/30 rounded-2xl overflow-hidden hover:border-[#C9A227]/60 transition-all duration-300 flex flex-col md:flex-row shadow-lg"
      >
        {/* Image / Video */}
        <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden shrink-0">
          <PropertyMedia
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-black/20 pointer-events-none" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="bg-[#C9A227] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
              {property.status}
            </span>
            {property.isLuxury && (
              <span className="bg-white/95 border border-[#C9A227]/40 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md shadow-sm">
                Ultra Luxury
              </span>
            )}
          </div>

          {/* Quick Action Overlay */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={() => setQuickViewModal({ isOpen: true, property })}
              className="p-2.5 bg-white/90 text-slate-900 hover:bg-[#C9A227] hover:text-black rounded-full backdrop-blur-md transition-all shadow"
              title="Quick View"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              onClick={() => toggleWishlist(property.id)}
              className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow ${
                isLiked ? 'bg-[#C9A227] text-black' : 'bg-white/90 text-slate-900 hover:bg-[#C9A227] hover:text-black'
              }`}
              title="Save to Favorites"
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-black' : ''}`} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between flex-1 bg-white">
          <div>
            <div className="flex justify-between items-start gap-4 mb-2">
              <div>
                <p className="text-xs text-[#C58B00] uppercase tracking-widest font-bold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {property.location}
                </p>
                <Link to={`/property/${property.slug}`}>
                  <h3 className="text-xl font-bold text-slate-900 hover:text-[#D4AF37] transition-colors mt-1 line-clamp-1">
                    {property.title}
                  </h3>
                </Link>
              </div>
              <p className="text-xl font-black text-[#C58B00] shrink-0">
                {property.priceFormatted}
              </p>
            </div>

            <p className="text-slate-600 text-sm line-clamp-2 my-3 font-normal">
              {property.description}
            </p>

            {/* Specs */}
            <div className="grid grid-cols-4 gap-2 py-3 border-y border-[#C9A227]/20 my-4 text-xs text-slate-800 font-semibold">
              <div className="flex items-center gap-1.5">
                <Bed className="w-4 h-4 text-[#C9A227]" />
                <span>{property.bedrooms} Beds</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Bath className="w-4 h-4 text-[#C9A227]" />
                <span>{property.bathrooms} Baths</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Car className="w-4 h-4 text-[#C9A227]" />
                <span>{property.garages} Garage</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Maximize2 className="w-4 h-4 text-[#C9A227]" />
                <span>{property.sqft.toLocaleString()} Sq Ft</span>
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <button
              onClick={() => toggleCompare(property)}
              className={`text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                isCompared ? 'text-[#C9A227]' : 'text-slate-700 hover:text-[#C9A227]'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#C9A227]" />
              {isCompared ? 'Comparing' : 'Compare'}
            </button>

            <div className="flex items-center gap-3">
              <Link
                to={`/property/${property.slug}`}
                className="text-xs font-bold px-4 py-2 bg-[#C9A227] text-black hover:bg-[#B8860B] hover:text-white rounded-lg transition-all flex items-center gap-1 shadow-md"
              >
                Details <ArrowRight className="w-3.5 h-3.5 text-black" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Grid layout default
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group bg-white border border-[#C9A227]/30 rounded-2xl overflow-hidden hover:border-[#C9A227]/60 transition-all duration-300 flex flex-col h-full shadow-lg"
    >
      {/* Top Image Container */}
      <div className="relative h-64 overflow-hidden shrink-0">
        <PropertyMedia
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-black/20 pointer-events-none" />

        {/* Status & Luxury Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="bg-[#C9A227] text-black text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
            {property.status}
          </span>
          {property.isLuxury && (
            <span className="bg-white/95 border border-[#C9A227]/40 text-slate-900 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md shadow-sm">
              Ultra Luxury
            </span>
          )}
        </div>

        {/* Action icons on top right */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => toggleCompare(property)}
            className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow ${
              isCompared ? 'bg-[#C9A227] text-black' : 'bg-white/90 text-slate-900 hover:bg-[#C9A227] hover:text-black'
            }`}
            title="Compare Property"
          >
            <Layers className="w-4 h-4" />
          </button>
          <button
            onClick={() => toggleWishlist(property.id)}
            className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow ${
              isLiked ? 'bg-[#C9A227] text-black' : 'bg-white/90 text-slate-900 hover:bg-[#C9A227] hover:text-black'
            }`}
            title="Favorite"
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-black' : ''}`} />
          </button>
        </div>

        {/* Quick View Button */}
        <button
          onClick={() => setQuickViewModal({ isOpen: true, property })}
          className="absolute bottom-4 left-4 bg-white/90 hover:bg-[#C9A227] text-slate-900 hover:text-black text-xs font-semibold px-3 py-1.5 rounded-lg backdrop-blur-md transition-all flex items-center gap-1.5 shadow"
        >
          <Eye className="w-3.5 h-3.5 text-[#C9A227]" />
          Quick View
        </button>

        {/* Price Tag */}
        <div className="absolute bottom-4 right-4 text-right">
          <span className="text-xl font-black text-slate-900 drop-shadow bg-white/90 px-2.5 py-1 rounded-lg border border-[#C9A227]/30">
            {property.priceFormatted}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between flex-1 bg-white">
        <div>
          <p className="text-xs text-[#C58B00] uppercase tracking-widest font-bold flex items-center gap-1 mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            {property.location}
          </p>

          <Link to={`/property/${property.slug}`}>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#C9A227] transition-colors line-clamp-1">
              {property.title}
            </h3>
          </Link>

          <p className="text-slate-600 text-xs line-clamp-2 mt-2 leading-relaxed font-normal">
            {property.tagline || property.description}
          </p>
        </div>

        <div>
          {/* Specs grid */}
          <div className="grid grid-cols-4 gap-1 py-3 border-t border-[#C9A227]/20 mt-4 text-[11px] text-slate-800 text-center">
            <div className="flex flex-col items-center">
              <span className="text-slate-500 font-medium">Beds</span>
              <span className="font-bold text-slate-900 flex items-center gap-1 mt-0.5">
                <Bed className="w-3.5 h-3.5 text-[#C9A227]" /> {property.bedrooms}
              </span>
            </div>
            <div className="flex flex-col items-center border-l border-[#C9A227]/20">
              <span className="text-slate-500 font-medium">Baths</span>
              <span className="font-bold text-slate-900 flex items-center gap-1 mt-0.5">
                <Bath className="w-3.5 h-3.5 text-[#C9A227]" /> {property.bathrooms}
              </span>
            </div>
            <div className="flex flex-col items-center border-l border-[#C9A227]/20">
              <span className="text-slate-500 font-medium">Garage</span>
              <span className="font-bold text-slate-900 flex items-center gap-1 mt-0.5">
                <Car className="w-3.5 h-3.5 text-[#C9A227]" /> {property.garages}
              </span>
            </div>
            <div className="flex flex-col items-center border-l border-[#C9A227]/20">
              <span className="text-slate-500 font-medium">Sq Ft</span>
              <span className="font-bold text-slate-900 flex items-center gap-1 mt-0.5">
                <Maximize2 className="w-3.5 h-3.5 text-[#C9A227]" /> {property.sqft.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-2 pt-3">
            <Link
              to={`/property/${property.slug}`}
              className="w-full py-2.5 text-xs font-bold text-black bg-[#C9A227] hover:bg-[#B8860B] hover:text-white rounded-lg transition-all text-center flex items-center justify-center gap-1 shadow-md"
            >
              View Property <ArrowRight className="w-3.5 h-3.5 text-black hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
