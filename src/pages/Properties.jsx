import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PropertyCard } from '../components/PropertyCard';
import { PropertySearchFilter } from '../components/PropertySearchFilter';
import { propertiesData } from '../data/propertiesData';
import { useApp } from '../context/AppContext';
import { LayoutGrid, List, Heart, SlidersHorizontal } from 'lucide-react';

export const Properties = () => {
  const [searchParams] = useSearchParams();
  const { wishlist } = useApp();

  const [layout, setLayout] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [filters, setFilters] = useState({
    keyword: searchParams.get('keyword') || '',
    location: searchParams.get('location') || 'All',
    type: searchParams.get('type') || 'All',
    purpose: searchParams.get('purpose') || 'All',
    bedrooms: searchParams.get('bedrooms') || 'All',
    maxPrice: searchParams.get('maxPrice') || 'All',
    sortBy: 'newest',
    isLuxuryOnly: false,
    savedOnly: searchParams.get('saved') === 'true'
  });

  // Sync URL params when navigated with query string
  useEffect(() => {
    if (searchParams.get('saved') === 'true') {
      setFilters((prev) => ({ ...prev, savedOnly: true }));
    }
  }, [searchParams]);

  const resetFilters = () => {
    setFilters({
      keyword: '',
      location: 'All',
      type: 'All',
      purpose: 'All',
      bedrooms: 'All',
      maxPrice: 'All',
      sortBy: 'newest',
      isLuxuryOnly: false,
      savedOnly: false
    });
  };

  // Filter & Sort Logic
  const filteredProperties = useMemo(() => {
    return propertiesData.filter((prop) => {
      // Saved favorites filter
      if (filters.savedOnly && !wishlist.includes(prop.id)) {
        return false;
      }

      // Keyword search
      if (filters.keyword.trim() !== '') {
        const kw = filters.keyword.toLowerCase();
        const matchTitle = prop.title.toLowerCase().includes(kw);
        const matchLoc = prop.location.toLowerCase().includes(kw);
        const matchDesc = prop.description.toLowerCase().includes(kw);
        const matchType = prop.type.toLowerCase().includes(kw);
        if (!matchTitle && !matchLoc && !matchDesc && !matchType) return false;
      }

      // Location
      if (filters.location !== 'All' && !prop.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }

      // Type
      if (filters.type !== 'All' && prop.type !== filters.type) {
        return false;
      }

      // Purpose
      if (filters.purpose !== 'All' && prop.purpose !== filters.purpose) {
        return false;
      }

      // Bedrooms
      if (filters.bedrooms !== 'All' && prop.bedrooms < parseInt(filters.bedrooms, 10)) {
        return false;
      }

      // Max Price
      if (filters.maxPrice !== 'All' && prop.price > parseInt(filters.maxPrice, 10)) {
        return false;
      }

      // Luxury Only
      if (filters.isLuxuryOnly && !prop.isLuxury) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'sqft') return b.sqft - a.sqft;
      return 0; // default newest
    });
  }, [filters, wishlist]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const paginatedProperties = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProperties.slice(start, start + itemsPerPage);
  }, [filteredProperties, currentPage]);

  return (
    <div className="bg-white text-[#C9A227] min-h-screen pt-24 pb-20">
      <SEO
        title="Luxury Real Estate Portfolio | Empragold"
        description="Browse ultra-luxury penthouses, waterfront mansions, commercial towers, and prime investment land available across global financial destinations."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Properties' }]} />

        {/* Page Banner Header */}
        <div className="my-6">
          <span className="text-xs text-[#C9A227] uppercase tracking-widest font-bold block mb-1">
            Exclusive Listings
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#C9A227]">
            {filters.savedOnly ? 'Your Saved Properties' : 'Luxury Property Portfolio'}
          </h1>
          <p className="text-[#C9A227]/80 text-sm mt-2 max-w-2xl font-normal">
            {filters.savedOnly
              ? 'View your curated shortlist of saved luxury residences and estates.'
              : 'Explore vetted trophy homes, architectural marvels, and prime development sites with verified titles.'}
          </p>
        </div>

        {/* Filter Toolbar Component */}
        <PropertySearchFilter
          filters={filters}
          setFilters={setFilters}
          resetFilters={resetFilters}
          totalResults={filteredProperties.length}
        />

        {/* View Layout Switcher & Quick Tabs */}
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#C9A227]/20">
          <div className="flex gap-2">
            <button
              onClick={() => setFilters((prev) => ({ ...prev, savedOnly: false }))}
              className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all ${
                !filters.savedOnly
                  ? 'bg-[#C9A227] text-white'
                  : 'bg-slate-50 text-[#C9A227] hover:bg-slate-100 border border-[#C9A227]/30'
              }`}
            >
              All Portfolio
            </button>
            <button
              onClick={() => setFilters((prev) => ({ ...prev, savedOnly: true }))}
              className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
                filters.savedOnly
                  ? 'bg-[#C9A227] text-white'
                  : 'bg-slate-50 text-[#C9A227] hover:bg-slate-100 border border-[#C9A227]/30'
              }`}
            >
              <Heart className="w-3.5 h-3.5" /> Saved Favorites ({wishlist.length})
            </button>
          </div>

          <div className="flex items-center gap-2 bg-slate-50 border border-[#C9A227]/30 rounded-lg p-1">
            <button
              onClick={() => setLayout('grid')}
              className={`p-1.5 rounded-md transition-colors ${
                layout === 'grid' ? 'bg-[#C9A227] text-white' : 'text-[#C9A227]/70 hover:text-[#C9A227]'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setLayout('list')}
              className={`p-1.5 rounded-md transition-colors ${
                layout === 'list' ? 'bg-[#C9A227] text-white' : 'text-[#C9A227]/70 hover:text-[#C9A227]'
              }`}
              title="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Property Grid / List */}
        {paginatedProperties.length > 0 ? (
          <div
            className={
              layout === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
            }
          >
            {paginatedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} layout={layout} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-[#C9A227]/30 shadow-md rounded-2xl p-12 text-center my-10 max-w-lg mx-auto">
            <SlidersHorizontal className="w-12 h-12 text-[#C9A227] mx-auto mb-4 opacity-70" />
            <h3 className="text-xl font-serif font-bold text-[#C9A227] mb-2">No Matching Properties</h3>
            <p className="text-xs text-[#C9A227]/80 mb-6">
              {filters.savedOnly
                ? 'You have not saved any properties to your wishlist yet.'
                : 'No luxury properties match your current search filters. Try resetting your price or location criteria.'}
            </p>
            <button
              onClick={resetFilters}
              className="bg-[#C9A227] text-white font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-[#B8860B] transition-all shadow-md"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-slate-50 border border-[#C9A227]/30 text-[#C9A227] disabled:opacity-40 rounded-lg text-xs font-semibold hover:border-[#C9A227]"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`w-9 h-9 rounded-lg text-xs font-bold transition-all ${
                  currentPage === idx + 1
                    ? 'bg-[#C9A227] text-white'
                    : 'bg-slate-50 border border-[#C9A227]/30 text-[#C9A227] hover:bg-slate-100'
                }`}
              >
                {idx + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-slate-50 border border-[#C9A227]/30 text-[#C9A227] disabled:opacity-40 rounded-lg text-xs font-semibold hover:border-[#C9A227]"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
