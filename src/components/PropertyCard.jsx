import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Heart, Bed, Bath, Car, Maximize2, MapPin, Eye, Layers, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PropertyMedia } from './PropertyMedia';

export const PropertyCard = ({ property, layout = 'grid' }) => {
  const { wishlist, toggleWishlist, compareList, toggleCompare, setQuickViewModal } = useApp();

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
        className="group relative bg-white border border-slate-200/80 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col md:flex-row shadow-sm"
      >
        {/* Image / Video */}
        <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden shrink-0">
          <PropertyMedia
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
            autoPlay={true}
            muted={true}
            loop={true}
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <span className="bg-[#e2efe1] text-[#338424] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
              {property.status}
            </span>
            {property.isLuxury && (
              <span className="bg-white/90 border border-slate-200 text-slate-800 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md shadow-xs">
                Ultra Luxury
              </span>
            )}
          </div>

          {/* Quick Action Overlay */}
          <div className="absolute bottom-3 right-3 flex gap-2">
            <button
              onClick={() => setQuickViewModal({ isOpen: true, property })}
              className="p-2 bg-white/90 text-slate-700 hover:text-[#4db038] hover:bg-white rounded-full backdrop-blur-md transition-all shadow-sm"
              title="Quick View"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              onClick={() => toggleWishlist(property.id)}
              className={`p-2 rounded-full backdrop-blur-md transition-all shadow-sm ${
                isLiked ? 'bg-[#4db038] text-white' : 'bg-white/90 text-slate-700 hover:text-[#4db038] hover:bg-white'
              }`}
              title="Save to Favorites"
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-white' : ''}`} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between flex-1 bg-white">
          <div>
            <div className="flex justify-between items-start gap-4 mb-2">
              <div>
                <Link to={`/property/${property.slug}`}>
                  <h3 className="text-xl font-bold text-[#111827] hover:text-[#4db038] transition-colors line-clamp-1">
                    {property.title}
                  </h3>
                </Link>
                <p className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#4db038]" />
                  {property.location}
                </p>
              </div>
              <p className="text-xl font-bold text-[#48b02c] shrink-0">
                {property.priceFormatted}
              </p>
            </div>

            <p className="text-slate-600 text-sm line-clamp-2 my-3 font-normal">
              {property.description}
            </p>

            {/* Specs */}
            <div className="flex items-center gap-4 py-3 border-y border-slate-100 my-4 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1">
                <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
                <span>{property.sqft.toLocaleString()} sq ft</span>
              </div>
              <div className="flex items-center gap-1">
                <Bed className="w-3.5 h-3.5 text-slate-400" />
                <span>{property.bedrooms} Bed</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="w-3.5 h-3.5 text-slate-400" />
                <span>{property.bathrooms} Bath</span>
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <button
              onClick={() => toggleCompare(property)}
              className={`text-xs font-medium flex items-center gap-1.5 transition-colors ${
                isCompared ? 'text-[#4db038] font-semibold' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              {isCompared ? 'Comparing' : 'Compare'}
            </button>

            <Link
              to={`/property/${property.slug}`}
              className="text-xs font-semibold px-4 py-2 border border-slate-300 text-slate-900 hover:bg-[#111827] hover:text-white rounded-full transition-all"
            >
              Invest now
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  // Grid layout default matching Theme Reference Image
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group bg-white border border-slate-200/80 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col h-full shadow-2xs"
    >
      {/* Top Image Container */}
      <div className="relative h-56 overflow-hidden shrink-0">
        <PropertyMedia
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
          autoPlay={true}
          muted={true}
          loop={true}
        />

        {/* Status & Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="bg-[#e2efe1] text-[#338424] text-[11px] font-bold px-3 py-1 rounded-full shadow-2xs">
            {property.status}
          </span>
          {property.isLuxury && (
            <span className="bg-white/90 text-slate-800 text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md shadow-2xs">
              Luxury
            </span>
          )}
        </div>

        {/* Action icons on top right */}
        <div className="absolute top-3 right-3 flex gap-1.5">
          <button
            onClick={() => toggleCompare(property)}
            className={`p-2 rounded-full backdrop-blur-md transition-all shadow-xs ${
              isCompared ? 'bg-[#4db038] text-white' : 'bg-white/90 text-slate-700 hover:bg-white hover:text-[#4db038]'
            }`}
            title="Compare Property"
          >
            <Layers className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => toggleWishlist(property.id)}
            className={`p-2 rounded-full backdrop-blur-md transition-all shadow-xs ${
              isLiked ? 'bg-[#4db038] text-white' : 'bg-white/90 text-slate-700 hover:bg-white hover:text-[#4db038]'
            }`}
            title="Favorite"
          >
            <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Quick View */}
        <button
          onClick={() => setQuickViewModal({ isOpen: true, property })}
          className="absolute bottom-3 left-3 bg-white/90 hover:bg-white text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md transition-all flex items-center gap-1 shadow-xs"
        >
          <Eye className="w-3 h-3 text-[#4db038]" />
          Quick View
        </button>
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col justify-between flex-1 bg-white">
        <div>
          <Link to={`/property/${property.slug}`}>
            <h3 className="text-base font-bold text-[#111827] group-hover:text-[#4db038] transition-colors line-clamp-1">
              {property.title}
            </h3>
          </Link>

          <p className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{property.location}</span>
          </p>

          {/* Specs line matching reference image (sq ft, Bed, Bath) */}
          <div className="flex items-center gap-3 text-xs text-slate-500 font-medium mt-3">
            <span className="flex items-center gap-1">
              <Maximize2 className="w-3 h-3 text-slate-400" />
              {property.sqft.toLocaleString()} sq ft
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Bed className="w-3 h-3 text-slate-400" />
              {property.bedrooms} Bed
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Bath className="w-3 h-3 text-slate-400" />
              {property.bathrooms} Bath
            </span>
          </div>
        </div>

        {/* Price & Action Row matching Image Reference */}
        <div className="flex items-center justify-between gap-2 pt-4 mt-3 border-t border-slate-100">
          <div>
            <span className="text-lg font-extrabold text-[#48b02c]">
              {property.priceFormatted}
            </span>
          </div>

          <Link
            to={`/property/${property.slug}`}
            className="text-xs font-semibold px-4 py-2 border border-slate-300 text-slate-800 hover:border-[#111827] hover:bg-[#111827] hover:text-white rounded-full transition-all"
          >
            Invest now
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
