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
        className="group relative glass-panel-purple border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-400/50 transition-all duration-300 flex flex-col md:flex-row shadow-2xl"
      >
        {/* Image / Video */}
        <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden shrink-0">
          <PropertyMedia
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0914] via-transparent to-black/30 pointer-events-none" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
              {property.status}
            </span>
            {property.isLuxury && (
              <span className="bg-black/80 border border-purple-400/40 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                Ultra Luxury
              </span>
            )}
          </div>

          {/* Quick Action Overlay */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={() => setQuickViewModal({ isOpen: true, property })}
              className="p-2.5 bg-black/70 text-white hover:text-purple-300 rounded-full backdrop-blur-md hover:bg-black transition-all"
              title="Quick View"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              onClick={() => toggleWishlist(property.id)}
              className={`p-2.5 rounded-full backdrop-blur-md transition-all ${
                isLiked ? 'bg-purple-600 text-white' : 'bg-black/70 text-white hover:text-purple-300'
              }`}
              title="Save to Favorites"
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-white' : ''}`} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between flex-1">
          <div>
            <div className="flex justify-between items-start gap-4 mb-2">
              <div>
                <p className="text-xs text-purple-400 uppercase tracking-widest font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {property.location}
                </p>
                <Link to={`/property/${property.slug}`}>
                  <h3 className="text-xl font-bold text-white hover:text-purple-300 transition-colors mt-1 line-clamp-1">
                    {property.title}
                  </h3>
                </Link>
              </div>
              <p className="text-xl font-black text-purple-300 shrink-0">
                {property.priceFormatted}
              </p>
            </div>

            <p className="text-gray-400 text-sm line-clamp-2 my-3">
              {property.description}
            </p>

            {/* Specs */}
            <div className="grid grid-cols-4 gap-2 py-3 border-y border-purple-500/20 my-4 text-xs text-gray-300">
              <div className="flex items-center gap-1.5">
                <Bed className="w-4 h-4 text-purple-400" />
                <span>{property.bedrooms} Beds</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Bath className="w-4 h-4 text-purple-400" />
                <span>{property.bathrooms} Baths</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Car className="w-4 h-4 text-purple-400" />
                <span>{property.garages} Garage</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Maximize2 className="w-4 h-4 text-purple-400" />
                <span>{property.sqft.toLocaleString()} Sq Ft</span>
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <button
              onClick={() => toggleCompare(property)}
              className={`text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                isCompared ? 'text-purple-300' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              {isCompared ? 'Comparing' : 'Compare'}
            </button>

            <div className="flex items-center gap-3">
              <Link
                to={`/property/${property.slug}`}
                className="text-xs font-semibold px-4 py-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-lg transition-all flex items-center gap-1 hover:brightness-110"
              >
                Details <ArrowRight className="w-3.5 h-3.5" />
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
      className="group glass-panel-purple border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-400/50 transition-all duration-300 flex flex-col h-full shadow-xl"
    >
      {/* Top Image Container */}
      <div className="relative h-64 overflow-hidden shrink-0">
        <PropertyMedia
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0914] via-transparent to-black/30 pointer-events-none" />

        {/* Status & Luxury Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
            {property.status}
          </span>
          {property.isLuxury && (
            <span className="bg-black/80 border border-purple-400/40 text-purple-300 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
              Ultra Luxury
            </span>
          )}
        </div>

        {/* Action icons on top right */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => toggleCompare(property)}
            className={`p-2.5 rounded-full backdrop-blur-md transition-all ${
              isCompared ? 'bg-purple-600 text-white' : 'bg-black/60 text-white hover:text-purple-300'
            }`}
            title="Compare Property"
          >
            <Layers className="w-4 h-4" />
          </button>
          <button
            onClick={() => toggleWishlist(property.id)}
            className={`p-2.5 rounded-full backdrop-blur-md transition-all ${
              isLiked ? 'bg-purple-600 text-white' : 'bg-black/60 text-white hover:text-purple-300'
            }`}
            title="Favorite"
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Quick View Button */}
        <button
          onClick={() => setQuickViewModal({ isOpen: true, property })}
          className="absolute bottom-4 left-4 bg-black/70 hover:bg-purple-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg backdrop-blur-md transition-all flex items-center gap-1.5 opacity-90 group-hover:opacity-100"
        >
          <Eye className="w-3.5 h-3.5" />
          Quick View
        </button>

        {/* Price Tag */}
        <div className="absolute bottom-4 right-4 text-right">
          <span className="text-xl font-black text-purple-200 drop-shadow-md">
            {property.priceFormatted}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <p className="text-xs text-purple-400 uppercase tracking-widest font-semibold flex items-center gap-1 mb-1.5">
            <MapPin className="w-3.5 h-3.5" />
            {property.location}
          </p>

          <Link to={`/property/${property.slug}`}>
            <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
              {property.title}
            </h3>
          </Link>

          <p className="text-gray-400 text-xs line-clamp-2 mt-2 leading-relaxed">
            {property.tagline || property.description}
          </p>
        </div>

        <div>
          {/* Specs grid */}
          <div className="grid grid-cols-4 gap-1 py-3 border-t border-purple-500/20 mt-4 text-[11px] text-gray-300 text-center">
            <div className="flex flex-col items-center">
              <span className="text-gray-400">Beds</span>
              <span className="font-semibold text-white flex items-center gap-1 mt-0.5">
                <Bed className="w-3.5 h-3.5 text-purple-400" /> {property.bedrooms}
              </span>
            </div>
            <div className="flex flex-col items-center border-l border-purple-500/20">
              <span className="text-gray-400">Baths</span>
              <span className="font-semibold text-white flex items-center gap-1 mt-0.5">
                <Bath className="w-3.5 h-3.5 text-purple-400" /> {property.bathrooms}
              </span>
            </div>
            <div className="flex flex-col items-center border-l border-purple-500/20">
              <span className="text-gray-400">Garage</span>
              <span className="font-semibold text-white flex items-center gap-1 mt-0.5">
                <Car className="w-3.5 h-3.5 text-purple-400" /> {property.garages}
              </span>
            </div>
            <div className="flex flex-col items-center border-l border-purple-500/20">
              <span className="text-gray-400">Sq Ft</span>
              <span className="font-semibold text-white flex items-center gap-1 mt-0.5">
                <Maximize2 className="w-3.5 h-3.5 text-purple-400" /> {property.sqft.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-2 pt-3">
            <Link
              to={`/property/${property.slug}`}
              className="w-full py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:brightness-110 rounded-lg transition-all text-center flex items-center justify-center gap-1 shadow-md"
            >
              View Property <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
