import React from 'react';
import { Search, MapPin, Home, DollarSign, SlidersHorizontal, RotateCcw, ArrowUpDown } from 'lucide-react';

export const PropertySearchFilter = ({ filters, setFilters, resetFilters, totalResults = 0 }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#1A1A1D] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-md mb-8">
      {/* Top Main Search Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-5">
        {/* Search Keyword Input */}
        <div className="md:col-span-2 relative">
          <label className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1.5 block">
            Keywords or Title
          </label>
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              name="keyword"
              value={filters.keyword || ''}
              onChange={handleChange}
              placeholder="e.g. Penthouse, Banana Island, Infinity Pool..."
              className="w-full bg-[#0F0F10] border border-white/10 focus:border-[#C9A227] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Location Dropdown */}
        <div>
          <label className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1.5 block">
            Location / State
          </label>
          <div className="relative">
            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A227]" />
            <select
              name="location"
              value={filters.location || 'All'}
              onChange={handleChange}
              className="w-full bg-[#0F0F10] border border-white/10 focus:border-[#C9A227] rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="All">All Locations</option>
              <option value="Lagos">Lagos, Nigeria</option>
              <option value="Banana Island">Banana Island, Ikoyi</option>
              <option value="Lekki Phase 1">Lekki Phase 1</option>
              <option value="Victoria Island">Victoria Island</option>
              <option value="California">California, USA</option>
              <option value="Colorado">Aspen, Colorado</option>
              <option value="Dubai">Palm Jumeirah, Dubai</option>
            </select>
          </div>
        </div>

        {/* Property Type */}
        <div>
          <label className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1.5 block">
            Property Type
          </label>
          <div className="relative">
            <Home className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A227]" />
            <select
              name="type"
              value={filters.type || 'All'}
              onChange={handleChange}
              className="w-full bg-[#0F0F10] border border-white/10 focus:border-[#C9A227] rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="All">All Types</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Villa">Villa / Mansion</option>
              <option value="Single Family">Single Family Home</option>
              <option value="Apartment">Apartment Suite</option>
              <option value="Commercial">Commercial Tower</option>
              <option value="Land">Land / Acreage</option>
            </select>
          </div>
        </div>
      </div>

      {/* Secondary Detailed Filters */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-4 border-t border-white/10 items-end">
        {/* Purpose */}
        <div>
          <label className="text-[11px] text-gray-400 uppercase font-medium mb-1 block">
            Purpose
          </label>
          <select
            name="purpose"
            value={filters.purpose || 'All'}
            onChange={handleChange}
            className="w-full bg-[#0F0F10] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C9A227]"
          >
            <option value="All">Buy & Rent</option>
            <option value="Buy">For Sale</option>
            <option value="Rent">For Rent</option>
            <option value="Investment">Investment</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="text-[11px] text-gray-400 uppercase font-medium mb-1 block">
            Min Bedrooms
          </label>
          <select
            name="bedrooms"
            value={filters.bedrooms || 'All'}
            onChange={handleChange}
            className="w-full bg-[#0F0F10] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C9A227]"
          >
            <option value="All">Any Beds</option>
            <option value="1">1+ Bedrooms</option>
            <option value="3">3+ Bedrooms</option>
            <option value="5">5+ Bedrooms</option>
            <option value="7">7+ Bedrooms</option>
          </select>
        </div>

        {/* Max Price */}
        <div>
          <label className="text-[11px] text-gray-400 uppercase font-medium mb-1 block">
            Max Price
          </label>
          <select
            name="maxPrice"
            value={filters.maxPrice || 'All'}
            onChange={handleChange}
            className="w-full bg-[#0F0F10] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C9A227]"
          >
            <option value="All">Any Price</option>
            <option value="1000000000">Under ₦1 Billion</option>
            <option value="5000000000">Under ₦5 Billion</option>
            <option value="10000000000">Under ₦10 Billion</option>
            <option value="20000000000">Under ₦20 Billion</option>
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className="text-[11px] text-gray-400 uppercase font-medium mb-1 block">
            Sort By
          </label>
          <select
            name="sortBy"
            value={filters.sortBy || 'newest'}
            onChange={handleChange}
            className="w-full bg-[#0F0F10] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C9A227]"
          >
            <option value="newest">Newest First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="sqft">Square Footage</option>
          </select>
        </div>

        {/* Checkbox Luxury Filter */}
        <div className="flex items-center gap-2 pt-5">
          <input
            type="checkbox"
            id="isLuxury"
            name="isLuxuryOnly"
            checked={!!filters.isLuxuryOnly}
            onChange={(e) => setFilters((prev) => ({ ...prev, isLuxuryOnly: e.target.checked }))}
            className="w-4 h-4 accent-[#C9A227] rounded cursor-pointer"
          />
          <label htmlFor="isLuxury" className="text-xs text-gray-300 font-medium cursor-pointer">
            Ultra-Luxury Only
          </label>
        </div>

        {/* Reset Filter Button */}
        <div className="flex items-end justify-end">
          <button
            onClick={resetFilters}
            className="w-full py-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[#C9A227] text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 border border-white/10"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-xs text-gray-400 font-medium">
        <span>Showing <strong className="text-[#C9A227]">{totalResults}</strong> luxury estates</span>
        <span className="hidden sm:inline">Empragold Verified Properties</span>
      </div>
    </div>
  );
};
