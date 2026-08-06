import React from 'react';
import { Search, MapPin, Home, SlidersHorizontal, RotateCcw } from 'lucide-react';

export const PropertySearchFilter = ({ filters, setFilters, resetFilters, totalResults = 0 }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-8">
      {/* Top Main Search Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-5">
        {/* Search Keyword Input */}
        <div className="md:col-span-2 relative">
          <label className="text-xs text-slate-700 uppercase tracking-wider font-semibold mb-1.5 block">
            Keywords or Title
          </label>
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4db038]" />
            <input
              type="text"
              name="keyword"
              value={filters.keyword || ''}
              onChange={handleChange}
              placeholder="e.g. Duplex, Ikeja, Ikotun, Land, Flat..."
              className="w-full bg-white border border-slate-200 focus:border-[#4db038] rounded-xl pl-10 pr-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Location Dropdown */}
        <div>
          <label className="text-xs text-slate-700 uppercase tracking-wider font-semibold mb-1.5 block">
            Location / Area
          </label>
          <div className="relative">
            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4db038]" />
            <select
              name="location"
              value={filters.location || 'All'}
              onChange={handleChange}
              className="w-full bg-white border border-slate-200 focus:border-[#4db038] rounded-xl pl-10 pr-4 py-3 text-sm text-slate-800 focus:outline-none transition-all appearance-none cursor-pointer shadow-2xs"
            >
              <option value="All">All Locations</option>
              <option value="Ikotun">Abaranje / Ikotun, Lagos</option>
              <option value="Ikeja">Opebi / Ikeja, Lagos</option>
              <option value="Alimosho">Alimosho BRT Axis, Lagos</option>
              <option value="Igando">LASU - Igando Road, Lagos</option>
              <option value="Iyana Iba">Ina Junction, LASU-Iyana Iba</option>
              <option value="Agbado">Oja Agbado / Ifako Ijaiye</option>
              <option value="Lekki">Lekki Phase 1, Lagos</option>
              <option value="Ikoyi">Ikoyi, Lagos</option>
            </select>
          </div>
        </div>

        {/* Property Type */}
        <div>
          <label className="text-xs text-slate-700 uppercase tracking-wider font-semibold mb-1.5 block">
            Property Type
          </label>
          <div className="relative">
            <Home className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4db038]" />
            <select
              name="type"
              value={filters.type || 'All'}
              onChange={handleChange}
              className="w-full bg-white border border-slate-200 focus:border-[#4db038] rounded-xl pl-10 pr-4 py-3 text-sm text-slate-800 focus:outline-none transition-all appearance-none cursor-pointer shadow-2xs"
            >
              <option value="All">All Types</option>
              <option value="Terrace Duplex">Terrace Duplex</option>
              <option value="Apartment / Flat">Apartment / Flat</option>
              <option value="Bungalow">Bungalow</option>
              <option value="Land">Full Plot / Land</option>
              <option value="Commercial">Commercial / Shops</option>
            </select>
          </div>
        </div>
      </div>

      {/* Secondary Detailed Filters */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-4 border-t border-slate-100 items-end">
        {/* Purpose */}
        <div>
          <label className="text-[11px] text-slate-600 uppercase font-semibold mb-1 block">
            Purpose
          </label>
          <select
            name="purpose"
            value={filters.purpose || 'All'}
            onChange={handleChange}
            className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#4db038]"
          >
            <option value="All">Buy & Rent</option>
            <option value="Buy">For Sale</option>
            <option value="Rent">For Rent</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="text-[11px] text-slate-600 uppercase font-semibold mb-1 block">
            Min Bedrooms
          </label>
          <select
            name="bedrooms"
            value={filters.bedrooms || 'All'}
            onChange={handleChange}
            className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#4db038]"
          >
            <option value="All">Any Beds</option>
            <option value="1">1+ Bedrooms</option>
            <option value="2">2+ Bedrooms</option>
            <option value="3">3+ Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
          </select>
        </div>

        {/* Max Price */}
        <div>
          <label className="text-[11px] text-slate-600 uppercase font-semibold mb-1 block">
            Max Price
          </label>
          <select
            name="maxPrice"
            value={filters.maxPrice || 'All'}
            onChange={handleChange}
            className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#4db038]"
          >
            <option value="All">Any Price</option>
            <option value="5000000">Under ₦5 Million (Rent)</option>
            <option value="70000000">Under ₦70 Million</option>
            <option value="150000000">Under ₦150 Million</option>
            <option value="400000000">Under ₦400 Million</option>
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className="text-[11px] text-slate-600 uppercase font-semibold mb-1 block">
            Sort By
          </label>
          <select
            name="sortBy"
            value={filters.sortBy || 'newest'}
            onChange={handleChange}
            className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#4db038]"
          >
            <option value="newest">Newest First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        {/* Checkbox Verified Filter */}
        <div className="flex items-center gap-2 pt-5">
          <input
            type="checkbox"
            id="isLuxury"
            name="isLuxuryOnly"
            checked={!!filters.isLuxuryOnly}
            onChange={(e) => setFilters((prev) => ({ ...prev, isLuxuryOnly: e.target.checked }))}
            className="w-4 h-4 accent-[#4db038] rounded cursor-pointer"
          />
          <label htmlFor="isLuxury" className="text-xs text-slate-700 font-semibold cursor-pointer">
            Direct & Verified Only
          </label>
        </div>

        {/* Reset Filter Button */}
        <div className="flex items-end justify-end">
          <button
            onClick={resetFilters}
            className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 border border-slate-200"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-xs text-slate-600 font-medium">
        <span>Showing <strong className="text-[#338424] font-bold">{totalResults}</strong> verified properties</span>
        <span className="hidden sm:inline text-slate-500">Empragold Estate Realtors Ltd (RC: 8323733)</span>
      </div>
    </div>
  );
};
