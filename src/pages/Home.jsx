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
    <div className="bg-white text-[#C9A227] min-h-screen">
      <SEO 
        title="BOOK YOUR DREAM | Empragold Luxury Smart Estates"
        description="Experience 80K+ trusted luxury smart properties with cutting-edge tech inside and unmatched comfort."
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 pt-16">
        
        {/* Architectural Villa Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=95"
            alt="Futuristic Glass Villa at Dusk"
            className="w-full h-full object-cover object-center opacity-100 filter brightness-100 contrast-100 scale-100"
          />
          
          {/* Gold LED Roofline Accents */}
          <div className="absolute top-[38%] left-[28%] w-[32%] h-[2px] bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#C9A227] shadow-[0_0_15px_#C9A227] rotate-[-12deg] opacity-90 hidden md:block" />
        </div>

        {/* Hotspot Glowing Dots */}
        <div className="absolute top-[48%] left-[36%] z-20 hidden md:flex items-center pointer-events-none">
          <div className="w-4 h-4 rounded-full bg-[#C9A227] border-2 border-white pulse-dot shadow-lg" />
          <div className="w-24 sm:w-36 h-[1px] bg-gradient-to-r from-[#C9A227] to-transparent" />
        </div>

        <div className="absolute top-[46%] right-[38%] z-20 hidden md:flex items-center pointer-events-none">
          <div className="w-28 sm:w-40 h-[1px] bg-gradient-to-r from-transparent to-[#C9A227]" />
          <div className="w-4 h-4 rounded-full bg-[#C9A227] border-2 border-white pulse-dot shadow-lg" />
        </div>

        {/* --- Top Left: Metric & Avatars --- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-24 sm:top-28 left-6 sm:left-12 lg:left-20 z-20 text-left bg-white/90 p-4 rounded-2xl backdrop-blur-md border border-[#C9A227]/30 shadow-lg"
        >
          <div className="w-12 h-[2px] bg-[#C9A227] mb-3" />
          <div className="flex items-center -space-x-2.5 mb-2">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
              alt="Owner 1" 
              className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md" 
            />
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" 
              alt="Owner 2" 
              className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md" 
            />
          </div>
          <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none flex items-start">
            80K<span className="text-xl sm:text-2xl text-[#C9A227] font-bold ml-0.5">+</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1 leading-tight tracking-wide">
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
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[115px] font-black uppercase tracking-tighter leading-[0.85] select-none text-gold-gradient drop-shadow-[0_4px_12px_rgba(184,134,11,0.25)]">
            BOOK YOUR<br />
            <span>
              DREAM
            </span>
          </h1>
        </motion.div>

        {/* --- Floating Glass Card 1 (Bottom Left) --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-36 sm:bottom-32 left-4 sm:left-12 lg:left-20 z-30 max-w-[240px] xs:max-w-[280px] sm:max-w-xs scale-90 xs:scale-100 origin-bottom-left"
        >
          <div className="bg-white/95 rounded-2xl p-3.5 sm:p-5 text-left border border-[#C9A227]/40 relative overflow-hidden group hover:border-[#C9A227] transition-all shadow-xl backdrop-blur-md">
            <h3 className="text-sm sm:text-lg font-bold text-slate-900 tracking-tight leading-snug mb-2 sm:mb-3">
              Cutting edge<br />tech inside
            </h3>

            {/* Smart Speaker Illustration Card */}
            <div className="relative w-full h-28 sm:h-40 rounded-xl bg-slate-50 flex flex-col items-center justify-center border border-[#C9A227]/20 overflow-hidden my-1.5 sm:my-2">
              <div className="relative w-20 sm:w-24 h-24 sm:h-28 flex items-center justify-center">
                <div className="w-14 sm:w-16 h-20 sm:h-24 bg-white rounded-2xl border border-[#C9A227]/40 flex flex-col items-center justify-between p-1.5 sm:p-2 shadow-sm">
                  <div className="w-10 sm:w-12 h-1.5 rounded-full bg-[#C9A227] shadow-sm" />
                  <div className="w-full flex justify-center space-x-0.5 opacity-80">
                    <div className="w-1 h-3 bg-[#C9A227] rounded-full animate-pulse" />
                    <div className="w-1 h-5 bg-[#9A7B1C] rounded-full animate-pulse delay-100" />
                    <div className="w-1 h-4 bg-[#C9A227] rounded-full animate-pulse delay-200" />
                  </div>
                  <div className="text-[8px] sm:text-[9px] text-slate-800 font-mono tracking-widest text-center border-t border-[#C9A227]/20 pt-1 w-full font-bold">
                    - 300 lm -
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveTechModal(true)}
              className="mt-1.5 sm:mt-2 text-xs text-slate-900 hover:text-[#C9A227] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-all"
            >
              Check it now <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A227]" />
            </button>
          </div>
        </motion.div>

        {/* --- Floating Glass Card 2 (Right Side) --- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-[32%] sm:top-[38%] right-4 sm:right-12 lg:right-20 z-30 w-56 sm:w-80 scale-90 xs:scale-100 origin-top-right"
        >
          <div className="bg-white/95 rounded-2xl p-3.5 sm:p-5 text-left border border-[#C9A227]/40 relative overflow-hidden group hover:border-[#C9A227] transition-all shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <h3 className="text-sm sm:text-lg font-bold text-slate-900 tracking-tight leading-tight">
                Step into<br />comfort
              </h3>
              <button 
                onClick={() => setActiveComfortModal(true)}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C9A227] text-black flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              >
                <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current ml-0.5 text-black" />
              </button>
            </div>

            <div 
              onClick={() => setActiveComfortModal(true)}
              className="relative w-full h-28 sm:h-44 rounded-xl overflow-hidden cursor-pointer group/img border border-[#C9A227]/20"
            >
              <img
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80"
                alt="Luxury Master Bedroom"
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 filter brightness-95"
              />
            </div>
          </div>
        </motion.div>

        {/* --- Bottom Horizon Divider Axis & Center CTA Button --- */}
        <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 z-20 flex items-center justify-center px-4">
          <div className="w-full max-w-7xl relative flex items-center justify-center">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/properties')}
              className="absolute px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg border border-[#C9A227] bg-[#C9A227] text-black hover:text-white font-bold text-xs sm:text-sm shadow-lg backdrop-blur-md flex items-center gap-1.5 sm:gap-2 hover:bg-[#B8860B] transition-all cursor-pointer z-30 uppercase tracking-wider"
            >
              <span>Explore</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black hover:text-white" />
            </motion.button>
          </div>
        </div>

        {/* --- Bottom Row Footer Elements --- */}
        <div className="absolute bottom-3 sm:bottom-6 left-4 sm:left-12 lg:left-20 right-4 sm:right-12 lg:right-20 z-20 flex flex-row items-center justify-between gap-2 text-xs text-slate-800">
          
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 uppercase tracking-wider">Sponsored by</span>
            <div className="flex items-center gap-2 sm:gap-3 text-slate-800">
              <Aperture className="w-3.5 h-3.5 sm:w-4 sm:h-4 hover:text-[#C9A227] transition-colors" />
              <Hexagon className="w-3.5 h-3.5 sm:w-4 sm:h-4 hover:text-[#C9A227] transition-colors" />
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 hover:text-[#C9A227] transition-colors" />
              <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 hover:text-[#C9A227] transition-colors" />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 max-w-md text-right">
            <p className="hidden md:block text-[11px] text-slate-700 leading-tight font-medium">
              Fill out your application once, send it anytime, and get replies.
            </p>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#C9A227]/40 flex items-center justify-center shrink-0 text-slate-900 font-bold">
              <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A227]" />
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
          className="bg-white border border-[#C9A227]/30 rounded-2xl p-5 sm:p-7 shadow-xl"
        >
          <form onSubmit={handleQuickSearch} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-end">
            <div className="text-left">
              <label className="text-[11px] text-slate-900 uppercase tracking-wider font-bold block mb-1.5">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A227]" />
                <select
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full bg-white border border-[#C9A227]/30 rounded-xl pl-9 pr-3 py-3 text-xs text-slate-900 font-semibold focus:outline-none focus:border-[#C9A227] shadow-sm"
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
              <label className="text-[11px] text-slate-900 uppercase tracking-wider font-bold block mb-1.5">
                Property Type
              </label>
              <div className="relative">
                <HomeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A227]" />
                <select
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                  className="w-full bg-white border border-[#C9A227]/30 rounded-xl pl-9 pr-3 py-3 text-xs text-slate-900 font-semibold focus:outline-none focus:border-[#C9A227] shadow-sm"
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
              <label className="text-[11px] text-slate-900 uppercase tracking-wider font-bold block mb-1.5">
                Max Budget
              </label>
              <select
                value={searchPrice}
                onChange={(e) => setSearchPrice(e.target.value)}
                className="w-full bg-white border border-[#C9A227]/30 rounded-xl px-3 py-3 text-xs text-slate-900 font-semibold focus:outline-none focus:border-[#C9A227] shadow-sm"
              >
                <option value="All">Any Price</option>
                <option value="1500000000">Under ₦1.5B</option>
                <option value="4000000000">Under ₦4B</option>
                <option value="10000000000">Under ₦10B</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#C9A227] text-black font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-md hover:bg-[#B8860B] hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4 text-black" />
              Find Smart Estate
            </button>
          </form>
        </motion.div>
      </section>

      {/* Featured Luxury Listings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="text-xs text-[#C58B00] uppercase tracking-widest font-bold block mb-2">
              Curated Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Featured Smart Residences
            </h2>
          </div>
          <Link
            to="/properties"
            className="text-xs text-slate-900 font-bold uppercase tracking-wider hover:text-[#C9A227] flex items-center gap-1.5 transition-colors"
          >
            Explore All Listings ({propertiesData.length}) <ArrowRight className="w-4 h-4 text-[#C9A227]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.slice(0, 3).map((property) => (
            <PropertyCard key={property.id} property={property} layout="grid" />
          ))}
        </div>
      </section>

      {/* Featured Video Properties Section */}
      <section className="py-20 bg-slate-50 border-y border-[#C9A227]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs text-[#C58B00] uppercase tracking-widest font-bold block mb-2">
              Exclusive Video Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Featured Video Listings
            </h2>
            <p className="text-slate-600 text-sm mt-3 font-normal">
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
                className="group relative h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer border border-[#C9A227]/30 hover:border-[#C9A227] bg-white transition-all duration-300"
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
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#C9A227] text-black text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {community.propertiesCount}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-white/95 border border-[#C9A227]/40 text-slate-900 text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md shadow-sm">
                    {community.avgPrice}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-[#C9A227] transition-colors line-clamp-1">
                    {community.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed font-normal">
                    {community.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs text-slate-900 font-bold">
                    View Video Property <ChevronRight className="w-4 h-4 text-[#C9A227]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Counter */}
      <section className="py-16 bg-white border-b border-[#C9A227]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-slate-50 rounded-2xl border border-[#C9A227]/30 shadow-sm">
              <span className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 block">₦1.2T+</span>
              <span className="text-xs text-slate-600 uppercase tracking-widest mt-2 block font-bold">
                Total Transaction Volume
              </span>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-[#C9A227]/30 shadow-sm">
              <span className="text-4xl sm:text-5xl font-serif font-bold text-[#C9A227] block">80K+</span>
              <span className="text-xs text-slate-600 uppercase tracking-widest mt-2 block font-bold">
                Property Owners Trusted
              </span>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-[#C9A227]/30 shadow-sm">
              <span className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 block">14+</span>
              <span className="text-xs text-slate-600 uppercase tracking-widest mt-2 block font-bold">
                Years of Excellence
              </span>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-[#C9A227]/30 shadow-sm">
              <span className="text-4xl sm:text-5xl font-serif font-bold text-[#C9A227] block">350+</span>
              <span className="text-xs text-slate-600 uppercase tracking-widest mt-2 block font-bold">
                Smart Estates Closed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Cutting-Edge Tech Modal */}
      <AnimatePresence>
        {activeTechModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white border border-[#C9A227]/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl text-left"
            >
              <button
                onClick={() => setActiveTechModal(false)}
                className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 p-2 rounded-full bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#C9A227]/10 border border-[#C9A227] flex items-center justify-center text-[#C9A227]">
                  <Cpu className="w-5 h-5 text-[#C9A227]" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-slate-900">Cutting-Edge Tech Inside</h3>
                  <p className="text-xs text-slate-600 font-medium">Smart Home Automation Hub</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-700 my-6 font-normal">
                <div className="p-3 bg-slate-50 rounded-xl border border-[#C9A227]/30 flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Custom Ambient Lighting</strong>
                    300 lm micro-LED strip synchronization along architectural lines.
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-[#C9A227]/30 flex items-start gap-3">
                  <Wifi className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Ultra-Fast Mesh IoT</strong>
                    Integrated voice-controlled climate, security, and acoustic management.
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveTechModal(false);
                  navigate('/properties');
                }}
                className="w-full py-3 rounded-xl bg-[#C9A227] text-black hover:text-white hover:bg-[#B8860B] font-bold text-xs uppercase tracking-wider shadow-md transition-all"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white border border-[#C9A227]/40 rounded-3xl p-6 max-w-2xl w-full relative shadow-2xl text-left"
            >
              <button
                onClick={() => setActiveComfortModal(false)}
                className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 p-2 rounded-full bg-slate-100 z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Step into Comfort</h3>
              <p className="text-xs text-slate-600 mb-4 font-medium">360° Ultra-Luxury Master Suite Experience</p>

              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#C9A227]/30">
                <img 
                  src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=90" 
                  alt="Comfort Suite" 
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <span className="text-xs text-[#C58B00] font-bold uppercase tracking-wider block">Signature Interior</span>
                    <h4 className="text-lg font-serif font-bold text-slate-900">Acoustic Soundproofing & Ergonomic Bedding</h4>
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

