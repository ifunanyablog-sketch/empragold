import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PropertyCard } from '../components/PropertyCard';
import { PropertyMedia } from '../components/PropertyMedia';
import { propertiesData, communitiesData } from '../data/propertiesData';
import heroVillaBg from '../assets/images/hero_villa_background_1786026136278.jpg';
import empraGoldBossImg from '../assets/images/empragold_boss_direct.png';
import { 
  Search, 
  MapPin, 
  Home as HomeIcon, 
  ArrowRight, 
  SlidersHorizontal,
  ChevronDown,
  Building2, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Sparkles,
  ArrowUpRight,
  Play,
  Heart
} from 'lucide-react';
import { motion } from 'motion/react';

export const Home = () => {
  const navigate = useNavigate();

  const [addressQuery, setAddressQuery] = useState('');
  const [searchLocation, setSearchLocation] = useState('All');
  const [searchType, setSearchType] = useState('All');
  const [sortBy, setSortBy] = useState('Most Popular');

  const featuredProperties = propertiesData.filter((p) => p.isFeatured);

  const handleQuickSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (addressQuery.trim()) params.set('q', addressQuery);
    if (searchLocation !== 'All') params.set('location', searchLocation);
    if (searchType !== 'All') params.set('type', searchType);
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen">
      <SEO 
        title="Empragold Real Estate | Investment Properties & Smart Estates in Lagos"
        description="Explore high-value real estate opportunities designed for financial growth and stability across Ikotun, Ikeja, Alimosho, and prime Lagos locations."
      />

      {/* Hero Header Section matching Image Reference Aesthetics in Website Green Theme */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[72vh] flex flex-col justify-between">
        {/* Full Screen Luxury Architectural Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={heroVillaBg}
            alt="Empragold Luxury Villa Architecture"
            className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
          {/* Soft gradient overlay for high contrast and readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/50" />
        </div>

        {/* Content Container matching Image Reference Layout Grid */}
        <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-between pt-1 sm:pt-3">
          
          {/* Top Section: Structured Row with 80K Card (Left) & Green "BOOK YOUR DREAM" (Right) */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
            
            {/* Top Left Floating Card: 80K+ Trusted Owners */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="self-start"
            >
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-4 shadow-lg border border-white/80 max-w-[190px] sm:max-w-[220px] transform hover:scale-[1.02] transition-transform">
                {/* Green Top Accent Line */}
                <div className="w-8 h-1 bg-[#4db038] rounded-full mb-2" />
                
                {/* Overlapping User Avatars */}
                <div className="flex -space-x-2 overflow-hidden mb-2">
                  <img 
                    className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white object-cover shadow-xs" 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
                    alt="Property Owner 1" 
                  />
                  <img 
                    className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white object-cover shadow-xs" 
                    src={empraGoldBossImg} 
                    alt="EmpraGold Boss" 
                  />
                </div>

                {/* Counter Metric */}
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  80K+
                </div>
                <p className="text-[11px] text-slate-600 font-bold mt-0.5 leading-tight">
                  Trusted by property owners
                </p>
              </div>
            </motion.div>

            {/* Top Right Headline: "BOOK YOUR DREAM" in Website Green Theme */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:text-right text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#4db038] uppercase leading-[0.94] drop-shadow-md select-none">
                BOOK YOUR <br />
                <span className="text-[#5cd645] drop-shadow-lg">DREAM</span>
              </h1>
            </motion.div>
          </div>

          {/* Bottom Section: Perfectly Aligned Interactive Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end my-4 sm:my-6">
            
            {/* Bottom-Left Card: Cutting Edge Tech Inside */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-3.5 sm:p-4 shadow-lg border border-white/80 max-w-[220px] sm:max-w-[240px] transform hover:scale-[1.02] transition-transform">
                <span className="text-xs font-extrabold text-slate-900 block mb-1.5">
                  Cutting edge tech inside
                </span>
                
                {/* Tech Bar/Graph Graphic Box */}
                <div className="bg-emerald-50/80 rounded-lg p-2 border border-emerald-100 mb-2 flex flex-col items-center justify-center">
                  <div className="flex items-end gap-1.5 h-7 py-0.5">
                    <div className="w-1.5 bg-[#4db038]/40 h-2.5 rounded-full" />
                    <div className="w-1.5 bg-[#4db038] h-5 rounded-full" />
                    <div className="w-1.5 bg-[#4db038]/60 h-4 rounded-full" />
                    <div className="w-1.5 bg-[#338424] h-7 rounded-full" />
                    <div className="w-1.5 bg-[#4db038]/50 h-3 rounded-full" />
                  </div>
                  <span className="text-[9px] text-[#338424] font-mono tracking-widest block font-bold mt-0.5">
                    - 300 1m -
                  </span>
                </div>

                <button 
                  onClick={() => navigate('/properties')}
                  className="text-[11px] font-bold text-[#338424] flex items-center gap-1 hover:text-[#4db038] transition-colors cursor-pointer"
                >
                  Check it now <ArrowUpRight className="w-3 h-3 text-[#4db038]" />
                </button>
              </div>
            </motion.div>

            {/* Bottom-Right Card: Step Into Comfort */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-7 sm:justify-self-end w-full max-w-xs sm:max-w-sm"
            >
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-3.5 sm:p-4 shadow-lg border border-white/80 w-full transform hover:scale-[1.02] transition-transform">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                    Step into comfort
                  </span>
                  <button 
                    onClick={() => navigate('/properties')}
                    className="w-7 h-7 rounded-full bg-[#4db038] hover:bg-[#338424] text-white flex items-center justify-center shadow-xs hover:scale-110 transition-all cursor-pointer"
                    title="Explore Interiors"
                  >
                    <Play className="w-3 h-3 fill-white ml-0.5" />
                  </button>
                </div>
                
                {/* Interior Bedroom Photo */}
                <div className="rounded-lg overflow-hidden h-24 sm:h-28 shadow-inner relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80" 
                    alt="Luxury Bedroom Comfort" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Center CTA Button: EXPLORE ↗ in Green Theme */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex justify-center pb-1"
          >
            <button 
              onClick={() => {
                const element = document.getElementById('search-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/properties');
                }
              }}
              className="bg-[#4db038] hover:bg-[#338424] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 sm:px-10 py-2.5 sm:py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-emerald-300/40"
            >
              EXPLORE <ArrowUpRight className="w-3.5 h-3.5 text-white stroke-[3]" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* Floating Quick Search & Filter Bar Section */}
      <section id="search-section" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-7 border border-slate-200 text-left">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900">Search Properties</h3>
              <p className="text-xs text-slate-500">Find your ideal home or investment site in Lagos</p>
            </div>
            <span className="text-xs font-semibold text-[#338424] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Verified Titles
            </span>
          </div>

          <form onSubmit={handleQuickSearch} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Field 1: Enter address */}
              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1.5">
                  Enter address
                </label>
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="e.g. Opebi, Ikotun, Alimosho..."
                    value={addressQuery}
                    onChange={(e) => setAddressQuery(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-3 text-xs text-slate-900 font-medium focus:outline-none focus:border-[#4db038] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Field 2: Location */}
              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1.5">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-8 py-3 text-xs text-slate-900 font-medium focus:outline-none focus:border-[#4db038] focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    <option value="All">All Locations</option>
                    <option value="Abaranje, Ikotun">Abaranje, Ikotun</option>
                    <option value="Opebi, Ikeja">Opebi, Ikeja</option>
                    <option value="Alimosho">Alimosho BRT Axis</option>
                    <option value="LASU Igando Road">LASU / Igando Road</option>
                    <option value="Ifako Ijaiye / Oja Agbado">Ifako Ijaiye / Oja Agbado</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Field 3: Property type */}
              <div>
                <label className="text-xs font-bold text-slate-800 block mb-1.5">
                  Property type
                </label>
                <div className="relative">
                  <HomeIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-8 py-3 text-xs text-slate-900 font-medium focus:outline-none focus:border-[#4db038] focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    <option value="All">All Types</option>
                    <option value="Flats">Blocks of Flats / Apartments</option>
                    <option value="Duplex">Terrace Duplex</option>
                    <option value="Bungalow">Bungalow</option>
                    <option value="Land">Full Plot of Land</option>
                    <option value="Shops">Commercial Shops</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#4db038] hover:bg-[#439c30] text-white font-bold text-xs px-8 py-3.5 rounded-full shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4 text-white" />
                Search Property
              </button>
              <button
                type="button"
                onClick={() => navigate('/properties')}
                className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs px-6 py-3.5 rounded-full transition-all flex items-center justify-center gap-2"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-slate-600" />
                Advanced Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Main Property Listings Section matching Image Reference Layout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Results Info Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-100">
          <div>
            <span className="text-sm font-semibold text-slate-700">
              Showing 1-{propertiesData.length} of total {propertiesData.length} results
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Sort by:</span>
            <div className="inline-flex items-center gap-1.5 bg-[#e2efe1] text-[#338424] text-xs font-bold px-3 py-1.5 rounded-full cursor-pointer">
              <span>{sortBy}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#338424]" />
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertiesData.map((property) => (
            <PropertyCard key={property.id} property={property} layout="grid" />
          ))}
        </div>
      </section>

      {/* Featured Video Properties Section */}
      <section className="py-16 bg-[#f8faf8] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <span className="text-xs text-[#4db038] font-bold uppercase tracking-wider block mb-1">
                Direct Video Walkthroughs
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
                Featured Smart Residences
              </h2>
            </div>
            <Link
              to="/properties"
              className="text-xs text-[#111827] font-semibold hover:text-[#4db038] flex items-center gap-1 transition-colors"
            >
              View All Video Properties <ArrowRight className="w-4 h-4 text-[#4db038]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communitiesData.map((community, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-96 rounded-2xl overflow-hidden shadow-xs cursor-pointer border border-slate-200/80 hover:border-[#4db038] bg-white transition-all duration-300"
                onClick={() => navigate(`/property/${community.slug}`)}
              >
                <PropertyMedia
                  src={community.image}
                  alt={community.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  controls={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#e2efe1] text-[#338424] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-2xs">
                    {community.propertiesCount}
                  </span>
                </div>

                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-white/90 text-slate-800 text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md shadow-2xs">
                    {community.avgPrice}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                  <h3 className="text-base font-bold group-hover:text-[#4db038] transition-colors line-clamp-1">
                    {community.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2 font-normal leading-relaxed">
                    {community.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-white">
                    View Walkthrough <ArrowUpRight className="w-3.5 h-3.5 text-[#4db038]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-slate-50/80 rounded-2xl border border-slate-200/60 shadow-2xs">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#111827] block">₦1.2T+</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider mt-1 block font-semibold">
                Transaction Volume
              </span>
            </div>
            <div className="p-6 bg-slate-50/80 rounded-2xl border border-slate-200/60 shadow-2xs">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#4db038] block">80K+</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider mt-1 block font-semibold">
                Trusted Clients
              </span>
            </div>
            <div className="p-6 bg-slate-50/80 rounded-2xl border border-slate-200/60 shadow-2xs">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#111827] block">14+</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider mt-1 block font-semibold">
                Years Experience
              </span>
            </div>
            <div className="p-6 bg-slate-50/80 rounded-2xl border border-slate-200/60 shadow-2xs">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#4db038] block">350+</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider mt-1 block font-semibold">
                Direct Deals Closed
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

