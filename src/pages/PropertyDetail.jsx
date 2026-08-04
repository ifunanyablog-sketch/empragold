import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MortgageCalculator } from '../components/MortgageCalculator';
import { PropertyCard } from '../components/PropertyCard';
import { PropertyMedia } from '../components/PropertyMedia';
import { propertiesData } from '../data/propertiesData';
import { useApp } from '../context/AppContext';
import { 
  Bed, 
  Bath, 
  Car, 
  Maximize2, 
  MapPin, 
  Heart, 
  Share2, 
  Calendar, 
  CheckCircle2, 
  Phone, 
  Mail, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  ShieldCheck, 
  DollarSign, 
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const PropertyDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { wishlist, toggleWishlist, compareList, toggleCompare, setInspectionModal, addRecentlyViewed, showToast } = useApp();

  const property = propertiesData.find((p) => p.slug === slug) || propertiesData[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeFloorPlan, setActiveFloorPlan] = useState(0);
  const [inquirySent, setInquirySent] = useState(false);

  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: `Hello, I am interested in viewing ${property?.title || 'this property'}. Please send private dossier.`
  });

  useEffect(() => {
    if (property) {
      addRecentlyViewed(property);
      window.scrollTo(0, 0);
    }
  }, [slug, property]);

  if (!property) {
    return (
      <div className="bg-[#0F0F10] text-white min-h-screen pt-32 text-center">
        <h2 className="text-2xl font-serif">Property Not Found</h2>
        <Link to="/properties" className="text-[#C9A227] mt-4 inline-block font-semibold text-xs">
          Return to All Listings
        </Link>
      </div>
    );
  }

  const isLiked = wishlist.includes(property.id);
  const isCompared = compareList.some((p) => p.id === property.id);

  const relatedProperties = propertiesData
    .filter((p) => p.id !== property.id && (p.type === property.type || p.location === property.location))
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Property link copied to clipboard!', 'success');
    }
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
    showToast('Direct inquiry transmitted to Private Client Group.', 'success');
  };

  return (
    <div className="bg-[#0F0F10] text-gray-100 min-h-screen pt-24 pb-20">
      <SEO
        title={`${property.title} | Empragold Luxury Estate`}
        description={property.description}
        ogImage={property.images[0]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Properties', link: '/properties' }, { label: property.title }]} />

        {/* Header Title Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 my-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#C9A227] text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
                {property.status}
              </span>
              {property.isLuxury && (
                <span className="bg-white/10 text-[#C9A227] text-xs font-bold px-3 py-1 rounded-full uppercase border border-[#C9A227]/30">
                  Ultra Luxury
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              {property.title}
            </h1>

            <p className="text-xs sm:text-sm text-gray-400 mt-2 flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-[#C9A227]" />
              {property.address || property.location}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="text-left sm:text-right">
              <span className="text-xs text-gray-400 block uppercase font-medium">Offered At</span>
              <span className="text-3xl sm:text-4xl font-serif font-bold text-[#C9A227]">
                {property.priceFormatted}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleWishlist(property.id)}
                className={`p-3 rounded-xl border transition-all ${
                  isLiked
                    ? 'bg-[#C9A227] text-black border-[#C9A227]'
                    : 'border-white/20 text-white hover:border-[#C9A227]'
                }`}
                title="Save Property"
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-black' : ''}`} />
              </button>

              <button
                onClick={() => toggleCompare(property)}
                className={`p-3 rounded-xl border transition-all ${
                  isCompared
                    ? 'bg-[#C9A227] text-black border-[#C9A227]'
                    : 'border-white/20 text-white hover:border-[#C9A227]'
                }`}
                title="Compare Property"
              >
                <Layers className="w-5 h-5" />
              </button>

              <button
                onClick={handleShare}
                className="p-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl transition-all"
                title="Share Property"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 rounded-2xl overflow-hidden shadow-2xl">
          <div
            className="md:col-span-2 md:row-span-2 relative h-80 md:h-[480px] bg-black cursor-pointer group"
            onClick={() => {
              setActiveImageIndex(0);
              setLightboxOpen(true);
            }}
          >
            <PropertyMedia
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center pointer-events-none">
              <span className="bg-black/70 text-white text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                View Fullscreen Gallery ({property.images.length})
              </span>
            </div>
          </div>

          {property.images.slice(1, 5).map((img, idx) => (
            <div
              key={idx}
              className="relative h-40 md:h-[232px] bg-black cursor-pointer group overflow-hidden"
              onClick={() => {
                setActiveImageIndex(idx + 1);
                setLightboxOpen(true);
              }}
            >
              <img
                src={img}
                alt={`Gallery ${idx}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            </div>
          ))}
        </div>

        {/* Specs Overview Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 p-6 bg-[#1A1A1D] border border-white/10 rounded-2xl mb-12 text-center">
          <div>
            <span className="text-gray-400 text-xs block mb-1 uppercase font-medium">Bedrooms</span>
            <strong className="text-xl font-serif font-bold text-white flex items-center justify-center gap-1.5">
              <Bed className="w-5 h-5 text-[#C9A227]" /> {property.bedrooms}
            </strong>
          </div>
          <div className="border-l border-white/10">
            <span className="text-gray-400 text-xs block mb-1 uppercase font-medium">Bathrooms</span>
            <strong className="text-xl font-serif font-bold text-white flex items-center justify-center gap-1.5">
              <Bath className="w-5 h-5 text-[#C9A227]" /> {property.bathrooms}
            </strong>
          </div>
          <div className="border-l border-white/10">
            <span className="text-gray-400 text-xs block mb-1 uppercase font-medium">Garages</span>
            <strong className="text-xl font-serif font-bold text-white flex items-center justify-center gap-1.5">
              <Car className="w-5 h-5 text-[#C9A227]" /> {property.garages}
            </strong>
          </div>
          <div className="border-l border-white/10">
            <span className="text-gray-400 text-xs block mb-1 uppercase font-medium">Total Area</span>
            <strong className="text-xl font-serif font-bold text-white flex items-center justify-center gap-1.5">
              <Maximize2 className="w-5 h-5 text-[#C9A227]" /> {property.sqft.toLocaleString()} Sq Ft
            </strong>
          </div>
          <div className="border-l border-white/10">
            <span className="text-gray-400 text-xs block mb-1 uppercase font-medium">Year Built</span>
            <strong className="text-xl font-serif font-bold text-white">{property.yearBuilt || 2024}</strong>
          </div>
          <div className="border-l border-white/10">
            <span className="text-gray-400 text-xs block mb-1 uppercase font-medium">Property Type</span>
            <strong className="text-xl font-serif font-bold text-[#C9A227]">{property.type}</strong>
          </div>
        </div>

        {/* Main Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Main Details */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview Description */}
            <div className="bg-[#1A1A1D] border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Architectural Narrative</h3>
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Features & Amenities */}
            <div className="bg-[#1A1A1D] border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Features & Luxury Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.features?.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-[#0F0F10] border border-white/5 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A227] shrink-0" />
                    <span className="text-xs text-gray-200 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floor Plans Section */}
            {property.floorPlans && property.floorPlans.length > 0 && (
              <div className="bg-[#1A1A1D] border border-white/10 rounded-2xl p-6 sm:p-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-6">Architectural Floor Plans</h3>
                <div className="flex gap-2 mb-6 border-b border-white/10 pb-3">
                  {property.floorPlans.map((plan, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveFloorPlan(i)}
                      className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                        activeFloorPlan === i ? 'bg-[#C9A227] text-black' : 'bg-white/5 text-gray-400 hover:text-white'
                      }`}
                    >
                      {plan.name}
                    </button>
                  ))}
                </div>

                <div className="p-4 bg-[#0F0F10] rounded-xl border border-white/10">
                  <div className="flex justify-between items-center text-xs text-gray-300 mb-3">
                    <span>Size: <strong className="text-white">{property.floorPlans[activeFloorPlan].size}</strong></span>
                    <span>Beds: <strong className="text-white">{property.floorPlans[activeFloorPlan].bedrooms}</strong></span>
                  </div>
                  <img
                    src={property.floorPlans[activeFloorPlan].image}
                    alt="Floorplan"
                    className="w-full h-80 object-cover rounded-lg border border-white/10 filter contrast-125"
                  />
                </div>
              </div>
            )}

            {/* Mortgage Calculator Integration */}
            <MortgageCalculator defaultPrice={property.price} />

            {/* Google Maps Location Card Placeholder */}
            <div className="bg-[#1A1A1D] border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Location & Coordinates</h3>
              <p className="text-xs text-gray-400 mb-4">{property.address || property.location}</p>

              <div className="relative h-64 bg-[#0F0F10] rounded-xl border border-white/10 overflow-hidden flex items-center justify-center text-center p-6">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                  alt="Map Placeholder"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-50 opacity-40"
                />
                <div className="relative z-10">
                  <MapPin className="w-10 h-10 text-[#C9A227] mx-auto mb-2 animate-bounce" />
                  <strong className="text-white text-base font-serif block">{property.title}</strong>
                  <span className="text-xs text-[#C9A227] block mt-1">
                    Latitude: {property.coordinates?.lat} | Longitude: {property.coordinates?.lng}
                  </span>
                  <a
                    href={`https://maps.google.com/?q=${property.coordinates?.lat},${property.coordinates?.lng}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block bg-[#C9A227] text-black font-semibold text-xs px-4 py-2 rounded-lg"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar Agent & Schedule Box */}
          <div className="lg:col-span-4 space-y-6">
            {/* Agent Info Card */}
            <div className="bg-[#1A1A1D] border border-[#C9A227]/30 rounded-2xl p-6 shadow-2xl sticky top-28">
              <span className="text-xs text-[#C9A227] uppercase tracking-widest font-bold block mb-3">
                Listing Agent
              </span>

              <div className="flex items-center gap-4 mb-5">
                <img
                  src={property.agent?.image || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'}
                  alt={property.agent?.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-[#C9A227]"
                />
                <div>
                  <h4 className="text-lg font-serif font-bold text-white">{property.agent?.name}</h4>
                  <p className="text-xs text-gray-400">{property.agent?.title}</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-gray-300 mb-6">
                <a
                  href={`https://wa.me/2348156789757?text=${encodeURIComponent(`Hello, I am interested in ${property.title} (${property.priceFormatted})`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#20bd5a] transition-colors shadow-lg"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp (+234 815 678 9757)</span>
                </a>
                <a
                  href={`tel:${property.agent?.phone || '+2348156789757'}`}
                  className="flex items-center gap-2 p-2.5 bg-[#0F0F10] border border-white/10 rounded-xl hover:border-[#C9A227] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C9A227]" />
                  <span>Call: {property.agent?.phone || '+234 815 678 9757'}</span>
                </a>
                <a
                  href={`mailto:${property.agent?.email}`}
                  className="flex items-center gap-2 p-2.5 bg-[#0F0F10] border border-white/10 rounded-xl hover:border-[#C9A227] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C9A227]" />
                  <span className="truncate">{property.agent?.email}</span>
                </a>
              </div>

              {/* Inquiry Form */}
              <div className="pt-4 border-t border-white/10">
                <h5 className="text-xs text-white uppercase font-semibold mb-3">Send Direct Inquiry</h5>

                {inquirySent ? (
                  <div className="p-4 bg-[#C9A227]/10 border border-[#C9A227] rounded-xl text-xs text-[#C9A227] text-center">
                    <CheckCircle2 className="w-6 h-6 mx-auto mb-1 text-[#C9A227]" />
                    Inquiry submitted. Our concierge will reach out to you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      className="w-full bg-[#0F0F10] border border-white/10 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#C9A227]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                      className="w-full bg-[#0F0F10] border border-white/10 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#C9A227]"
                    />
                    <textarea
                      rows={3}
                      required
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      className="w-full bg-[#0F0F10] border border-white/10 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#C9A227]"
                    />
                    <button
                      type="submit"
                      className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs py-2.5 rounded-xl transition-all"
                    >
                      Transmit Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Properties */}
        {relatedProperties.length > 0 && (
          <div className="mt-20 pt-10 border-t border-white/10">
            <h3 className="text-3xl font-serif font-bold text-white mb-8">Similar Trophy Residences</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProperties.map((p) => (
                <PropertyCard key={p.id} property={p} layout="grid" />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-[#C9A227] p-2 bg-white/10 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={() => setActiveImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-[#C9A227] p-3 bg-white/10 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={property.images[activeImageIndex]}
              alt={`Fullscreen ${activeImageIndex}`}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
            />

            <button
              onClick={() => setActiveImageIndex((prev) => (prev + 1) % property.images.length)}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-[#C9A227] p-3 bg-white/10 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
