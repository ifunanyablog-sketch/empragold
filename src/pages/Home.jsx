import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PropertyCard } from '../components/PropertyCard';
import { PropertyMedia } from '../components/PropertyMedia';
import { AgentCard } from '../components/AgentCard';
import { propertiesData, communitiesData } from '../data/propertiesData';
import { agentsData } from '../data/agentsData';
import { blogData } from '../data/blogData';
import { testimonialsData } from '../data/testimonialsData';
import { useApp } from '../context/AppContext';
import { 
  Search, 
  MapPin, 
  Home as HomeIcon, 
  Crown, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Building2, 
  Users, 
  Calendar,
  ChevronRight,
  Globe,
  ArrowUpRight,
  Sparkles,
  Aperture,
  Hexagon,
  Shield,
  Activity,
  X,
  Volume2,
  Wifi,
  Zap,
  Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Home = () => {
  const navigate = useNavigate();
  const { setInspectionModal } = useApp();

  const [searchLocation, setSearchLocation] = useState('All');
  const [searchType, setSearchType] = useState('All');
  const [searchPrice, setSearchPrice] = useState('All');
  
  // Modals for interactive hot-points
  const [activeTechModal, setActiveTechModal] = useState(false);
  const [activeComfortModal, setActiveComfortModal] = useState(false);

  const featuredProperties = propertiesData.filter((p) => p.isFeatured);

  const handleQuickSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchLocation !== 'All') params.set('location', searchLocation);
    if (searchType !== 'All') params.set('type', searchType);
    if (searchPrice !== 'All') params.set('maxPrice', searchPrice);
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div className="bg-[#0b0914] text-gray-100 min-h-screen">
      <SEO 
        title="BOOK YOUR DREAM | Empragold Luxury Smart Estates"
        description="Experience 80K+ trusted luxury smart properties with cutting-edge tech inside and unmatched comfort."
      />

      {/* Hero Section — 100% Replica of Reference Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0915] pt-16">
        
        {/* Architectural Villa Background with Purple Twilight Lighting */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=95"
            alt="Futuristic Glass Villa at Dusk"
            className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.1] scale-105"
          />
          
          {/* Violet & Magenta LED Ambient Light Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0914] via-[#0b0914]/40 to-[#120924]/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0915]/80 via-transparent to-[#1a0c2e]/80" />
          
          {/* Glowing Purple LED Roofline Accents */}
          <div className="absolute top-[38%] left-[28%] w-[32%] h-[2px] bg-gradient-to-r from-purple-500 via-fuchsia-400 to-pink-500 shadow-[0_0_25px_#d946ef] rotate-[-12deg] opacity-90 hidden md:block" />
          <div className="absolute top-[35%] left-[40%] w-[200px] h-[200px] bg-purple-600/30 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[30%] left-[20%] w-[300px] h-[300px] bg-fuchsia-600/20 blur-[100px] rounded-full pointer-events-none" />
        </div>

        {/* Hotspot Glowing Dots & Pointer Lines */}
        {/* Hotspot 1: Glass Room Light Dot */}
        <div className="absolute top-[48%] left-[36%] z-20 hidden md:flex items-center pointer-events-none">
          <div className="w-4 h-4 rounded-full bg-white border-2 border-purple-400 pulse-dot shadow-[0_0_15px_#d946ef]" />
          <div className="w-24 sm:w-36 h-[1px] bg-gradient-to-r from-white/80 to-purple-400/40" />
        </div>

        {/* Hotspot 2: Bedroom Window Hotpoint Dot */}
        <div className="absolute top-[46%] right-[38%] z-20 hidden md:flex items-center pointer-events-none">
          <div className="w-28 sm:w-40 h-[1px] bg-gradient-to-r from-purple-400/40 to-white/80" />
          <div className="w-4 h-4 rounded-full bg-white border-2 border-purple-400 pulse-dot shadow-[0_0_15px_#d946ef]" />
        </div>

        {/* --- Top Left: Metric & Avatars --- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-24 sm:top-28 left-6 sm:left-12 lg:left-20 z-20 text-left"
        >
          <div className="w-16 h-[2px] bg-gray-300/40 mb-5" />
          <div className="flex items-center -space-x-2.5 mb-3">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
              alt="Owner 1" 
              className="w-10 h-10 rounded-full border-2 border-[#150d28] object-cover shadow-lg" 
            />
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" 
              alt="Owner 2" 
              className="w-10 h-10 rounded-full border-2 border-[#150d28] object-cover shadow-lg" 
            />
          </div>
          <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none flex items-start">
            80K<span className="text-2xl sm:text-3xl text-purple-400 font-bold ml-0.5">+</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-300/80 font-normal mt-2 leading-tight tracking-wide">
            Trusted by<br />property owners
          </p>
        </motion.div>

        {/* --- Top Right: Large Headline "BOOK YOUR DREAM" --- */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-24 sm:top-28 right-6 sm:right-12 lg:right-20 z-20 text-right pointer-events-none"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[115px] font-black uppercase tracking-tighter text-white leading-[0.85] select-none drop-shadow-2xl">
            BOOK YOUR<br />
            <span className="bg-gradient-to-r from-white via-purple-100 to-purple-200/90 bg-clip-text text-transparent">
              DREAM
            </span>
          </h1>
        </motion.div>

        {/* --- Floating Glass Card 1 (Bottom Left): "Cutting edge tech inside" --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-28 sm:bottom-32 left-6 sm:left-12 lg:left-20 z-30 max-w-[280px] sm:max-w-xs"
        >
          <div className="glass-panel-purple rounded-2xl p-4 sm:p-5 text-left border border-purple-500/30 relative overflow-hidden group hover:border-purple-400/60 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight leading-snug mb-3">
              Cutting edge<br />tech inside
            </h3>

            {/* Smart Speaker Illustration Card */}
            <div className="relative w-full h-36 sm:h-40 rounded-xl bg-gradient-to-b from-[#1c1533] to-[#120d24] flex flex-col items-center justify-center border border-purple-500/20 overflow-hidden my-2">
              {/* Glowing Magenta LED Ring */}
              <div className="relative w-24 h-28 flex items-center justify-center">
                {/* Speaker Cylinder */}
                <div className="w-16 h-24 bg-gradient-to-b from-[#2d224d] via-[#1e1738] to-[#130d29] rounded-2xl border border-purple-400/30 flex flex-col items-center justify-between p-2 shadow-inner">
                  <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-400 to-purple-500 shadow-[0_0_10px_#d946ef]" />
                  <div className="w-full flex justify-center space-x-0.5 opacity-60">
                    <div className="w-1 h-3 bg-purple-400 rounded-full animate-pulse" />
                    <div className="w-1 h-5 bg-pink-400 rounded-full animate-pulse delay-100" />
                    <div className="w-1 h-4 bg-purple-400 rounded-full animate-pulse delay-200" />
                  </div>
                  <div className="text-[9px] text-purple-200 font-mono tracking-widest text-center border-t border-purple-500/20 pt-1 w-full">
                    - 300 lm -
                  </div>
                </div>
                {/* Outer Pink LED Halo */}
                <div className="absolute inset-0 rounded-full border-2 border-pink-500/40 shadow-[0_0_20px_rgba(217,70,239,0.5)] rotate-[75deg] pointer-events-none" />
              </div>
            </div>

            {/* Link */}
            <button
              onClick={() => setActiveTechModal(true)}
              className="mt-2 text-xs text-purple-200 hover:text-white font-medium flex items-center gap-1 group-hover:translate-x-1 transition-all"
            >
              Check it now <ArrowUpRight className="w-3.5 h-3.5 text-purple-400" />
            </button>
          </div>
        </motion.div>

        {/* --- Floating Glass Card 2 (Right Side): "Step into comfort" --- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-[36%] sm:top-[38%] right-6 sm:right-12 lg:right-20 z-30 w-64 sm:w-80"
        >
          <div className="glass-panel-purple rounded-2xl p-4 sm:p-5 text-left border border-purple-500/30 relative overflow-hidden group hover:border-purple-400/60 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight leading-tight">
                Step into<br />comfort
              </h3>
              <button 
                onClick={() => setActiveComfortModal(true)}
                className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <Play className="w-3.5 h-3.5 fill-current ml-0.5 text-purple-950" />
              </button>
            </div>

            {/* Sleek Purple Bedroom Image */}
            <div 
              onClick={() => setActiveComfortModal(true)}
              className="relative w-full h-36 sm:h-44 rounded-xl overflow-hidden cursor-pointer group/img border border-purple-500/20"
            >
              <img
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80"
                alt="Luxury Master Bedroom"
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 filter brightness-90 saturate-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#150e26] via-purple-900/20 to-transparent" />
              <div className="absolute inset-0 bg-purple-950/20 mix-blend-color" />
            </div>
          </div>
        </motion.div>

        {/* --- Bottom Horizon Divider Axis & Center "Explore ↗" CTA Button --- */}
        <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 z-20 flex items-center justify-center px-4">
          <div className="w-full max-w-7xl relative flex items-center justify-center">
            {/* Fine Horizontal Divider Line */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400/30 to-transparent" />

            {/* Center Floating Button "Explore ↗" */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/properties')}
              className="absolute px-7 py-2.5 rounded-lg border border-purple-400/50 bg-gradient-to-r from-purple-900/90 via-fuchsia-900/80 to-purple-950/90 text-white font-medium text-sm shadow-[0_0_25px_rgba(168,85,247,0.5)] backdrop-blur-md flex items-center gap-2 hover:border-purple-300 transition-all cursor-pointer"
            >
              <span>Explore</span>
              <ArrowUpRight className="w-4 h-4 text-purple-300" />
            </motion.button>
          </div>
        </div>

        {/* --- Bottom Row Footer Elements (Left Sponsors, Right Text & Globe Icon) --- */}
        <div className="absolute bottom-4 sm:bottom-6 left-6 sm:left-12 lg:left-20 right-6 sm:right-12 lg:right-20 z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-gray-400/80">
          
          {/* Bottom Left: Sponsored by */}
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Sponsored by</span>
            <div className="flex items-center gap-3 text-gray-300/80">
              <Aperture className="w-4 h-4 hover:text-white transition-colors" />
              <Hexagon className="w-4 h-4 hover:text-white transition-colors" />
              <Shield className="w-4 h-4 hover:text-white transition-colors" />
              <Activity className="w-4 h-4 hover:text-white transition-colors" />
            </div>
          </div>

          {/* Bottom Right: Text & Globe Icon */}
          <div className="flex items-center gap-3 max-w-md text-right sm:text-right">
            <p className="text-[11px] text-gray-300/75 leading-tight font-normal">
              Fill out your application once, send it anytime, and get replies.
            </p>
            <div className="w-7 h-7 rounded-full border border-gray-400/30 flex items-center justify-center shrink-0 text-gray-300">
              <Globe className="w-4 h-4" />
            </div>
          </div>
        </div>

      </section>

      {/* Quick Search & Filter Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel-purple border border-purple-500/30 rounded-2xl p-5 sm:p-7 shadow-2xl backdrop-blur-2xl"
        >
          <form onSubmit={handleQuickSearch} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-end">
            <div className="text-left">
              <label className="text-[11px] text-purple-300 uppercase tracking-wider font-semibold block mb-1.5">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                <select
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full bg-[#120d24] border border-purple-500/20 rounded-xl pl-9 pr-3 py-3 text-xs text-white focus:outline-none focus:border-purple-400"
                >
                  <option value="All">All Locations</option>
                  <option value="Banana Island">Banana Island, Ikoyi</option>
                  <option value="Lekki Phase 1">Lekki Phase 1</option>
                  <option value="Victoria Island">Victoria Island</option>
                  <option value="Abuja">Maitama & Asokoro, Abuja</option>
                  <option value="Dubai">Palm Jumeirah, Dubai</option>
                </select>
              </div>
            </div>

            <div className="text-left">
              <label className="text-[11px] text-purple-300 uppercase tracking-wider font-semibold block mb-1.5">
                Property Type
              </label>
              <div className="relative">
                <HomeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                <select
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                  className="w-full bg-[#120d24] border border-purple-500/20 rounded-xl pl-9 pr-3 py-3 text-xs text-white focus:outline-none focus:border-purple-400"
                >
                  <option value="All">All Types</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Villa">Mansion & Villa</option>
                  <option value="Commercial">Commercial Tower</option>
                  <option value="Land">Prime Land</option>
                </select>
              </div>
            </div>

            <div className="text-left">
              <label className="text-[11px] text-purple-300 uppercase tracking-wider font-semibold block mb-1.5">
                Max Budget
              </label>
              <select
                value={searchPrice}
                onChange={(e) => setSearchPrice(e.target.value)}
                className="w-full bg-[#120d24] border border-purple-500/20 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-purple-400"
              >
                <option value="All">Any Price</option>
                <option value="1500000000">Under ₦1.5B</option>
                <option value="4000000000">Under ₦4B</option>
                <option value="10000000000">Under ₦10B</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 text-white font-semibold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              Find Smart Estate
            </button>
          </form>
        </motion.div>
      </section>

      {/* Featured Luxury Listings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="text-xs text-purple-400 uppercase tracking-widest font-bold block mb-2">
              Curated Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Smart Residences
            </h2>
          </div>
          <Link
            to="/properties"
            className="text-xs text-purple-400 font-semibold uppercase tracking-wider hover:text-white flex items-center gap-1.5 transition-colors"
          >
            Explore All Listings ({propertiesData.length}) <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.slice(0, 3).map((property) => (
            <PropertyCard key={property.id} property={property} layout="grid" />
          ))}
        </div>
      </section>

      {/* Featured Video Properties Section */}
      <section className="py-20 bg-[#0f0b1c] border-y border-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs text-purple-400 uppercase tracking-widest font-bold block mb-2">
              Exclusive Video Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Featured Video Listings
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Watch immersive video walkthroughs of our direct listings with full property details.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communitiesData.map((community, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-96 rounded-2xl overflow-hidden shadow-2xl cursor-pointer border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0914] via-[#0b0914]/40 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {community.propertiesCount}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-black/80 border border-purple-400/30 text-purple-300 text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md">
                    {community.avgPrice}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                    {community.name}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1.5 line-clamp-2 leading-relaxed opacity-90">
                    {community.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs text-purple-400 font-semibold">
                    View Video Property <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Counter */}
      <section className="py-16 bg-[#0b0914] border-b border-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 glass-panel-purple rounded-2xl border border-purple-500/20">
              <span className="text-4xl sm:text-5xl font-black text-purple-400 block">₦1.2T+</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest mt-2 block font-medium">
                Total Transaction Volume
              </span>
            </div>
            <div className="p-6 glass-panel-purple rounded-2xl border border-purple-500/20">
              <span className="text-4xl sm:text-5xl font-black text-white block">80K+</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest mt-2 block font-medium">
                Property Owners Trusted
              </span>
            </div>
            <div className="p-6 glass-panel-purple rounded-2xl border border-purple-500/20">
              <span className="text-4xl sm:text-5xl font-black text-purple-400 block">14+</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest mt-2 block font-medium">
                Years of Excellence
              </span>
            </div>
            <div className="p-6 glass-panel-purple rounded-2xl border border-purple-500/20">
              <span className="text-4xl sm:text-5xl font-black text-white block">350+</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest mt-2 block font-medium">
                Smart Estates Closed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Cutting-Edge Tech Modal */}
      <AnimatePresence>
        {activeTechModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-panel-purple border border-purple-500/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-[0_0_50px_rgba(168,85,247,0.3)] text-left"
            >
              <button
                onClick={() => setActiveTechModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/50 flex items-center justify-center text-purple-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Cutting-Edge Tech Inside</h3>
                  <p className="text-xs text-purple-300">Smart Home Automation Hub</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-gray-300 my-6">
                <div className="p-3 bg-purple-950/40 rounded-xl border border-purple-500/20 flex items-start gap-3">
                  <Zap className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Custom Ambient Lighting</strong>
                    300 lm micro-LED strip synchronization along architectural lines.
                  </div>
                </div>

                <div className="p-3 bg-purple-950/40 rounded-xl border border-purple-500/20 flex items-start gap-3">
                  <Wifi className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Ultra-Fast Mesh IoT</strong>
                    Integrated voice-controlled climate, security, and acoustic management.
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveTechModal(false);
                  navigate('/properties');
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all"
              >
                Explore Smart Properties
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Comfort Video Preview Modal */}
      <AnimatePresence>
        {activeComfortModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-panel-purple border border-purple-500/40 rounded-3xl p-6 max-w-2xl w-full relative shadow-[0_0_50px_rgba(168,85,247,0.3)] text-left"
            >
              <button
                onClick={() => setActiveComfortModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-white/5 z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold text-white mb-2">Step into Comfort</h3>
              <p className="text-xs text-purple-300 mb-4">360° Ultra-Luxury Master Suite Experience</p>

              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-purple-500/30">
                <img 
                  src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=90" 
                  alt="Comfort Suite" 
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <span className="text-xs text-purple-300 font-semibold uppercase tracking-wider block">Signature Interior</span>
                    <h4 className="text-lg font-bold text-white">Acoustic Soundproofing & Ergonomic Bedding</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

