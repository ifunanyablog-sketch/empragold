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
      <div className="bg-white text-slate-800 min-h-screen pt-32 text-center">
        <h2 className="text-2xl font-bold">Property Not Found</h2>
        <Link to="/properties" className="text-[#338424] mt-4 inline-block font-semibold text-xs">
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
    showToast('Direct inquiry submitted to sales advisory.', 'success');
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen pt-24 pb-20">
      <SEO
        title={`${property.title} | Empragold Estate Realtors Ltd`}
        description={property.description}
        ogImage={property.images[0]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Properties', link: '/properties' }, { label: property.title }]} />

        {/* Header Title Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 my-6 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#e2efe1] text-[#338424] text-xs font-bold px-3 py-1 rounded-full shadow-2xs">
                {property.status}
              </span>
              {property.isLuxury && (
                <span className="bg-slate-50 text-slate-800 text-xs font-bold px-3 py-1 rounded-full border border-slate-200">
                  Featured Property
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 leading-tight">
              {property.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-500 mt-2 flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-[#338424]" />
              {property.address || property.location}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="text-left sm:text-right">
              <span className="text-xs text-slate-400 block uppercase font-medium">Offered At</span>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#48b02c]">
                {property.priceFormatted}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleWishlist(property.id)}
                className={`p-3 rounded-xl border transition-all ${
                  isLiked
                    ? 'bg-[#4db038] text-white border-[#4db038]'
                    : 'border-slate-200 text-slate-700 bg-slate-50 hover:bg-slate-100 hover:text-[#4db038]'
                }`}
                title="Save Property"
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-white' : ''}`} />
              </button>

              <button
                onClick={() => toggleCompare(property)}
                className={`p-3 rounded-xl border transition-all ${
                  isCompared
                    ? 'bg-[#4db038] text-white border-[#4db038]'
                    : 'border-slate-200 text-slate-700 bg-slate-50 hover:bg-slate-100 hover:text-[#4db038]'
                }`}
                title="Compare Property"
              >
                <Layers className="w-5 h-5" />
              </button>

              <button
                onClick={handleShare}
                className="p-3 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-[#4db038] border border-slate-200 rounded-xl transition-all shadow-2xs"
                title="Share Property"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 rounded-2xl overflow-hidden shadow-md border border-slate-200">
          <div
            className="md:col-span-2 md:row-span-2 relative h-80 md:h-[480px] bg-slate-100 cursor-pointer group"
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
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center pointer-events-none">
              <span className="bg-white/90 text-slate-900 text-xs font-bold px-4 py-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                View Gallery ({property.images.length})
              </span>
            </div>
          </div>

          {property.images.slice(1, 5).map((img, idx) => (
            <div
              key={idx}
              className="relative h-40 md:h-[232px] bg-slate-100 cursor-pointer group overflow-hidden"
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
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
            </div>
          ))}
        </div>

        {/* Specs Overview Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 p-6 bg-white border border-slate-200 rounded-2xl mb-12 text-center shadow-xs">
          <div>
            <span className="text-slate-400 text-xs block mb-1 uppercase font-semibold">Bedrooms</span>
            <strong className="text-xl font-bold text-slate-900 flex items-center justify-center gap-1.5">
              <Bed className="w-5 h-5 text-[#338424]" /> {property.bedrooms}
            </strong>
          </div>
          <div className="border-l border-slate-200">
            <span className="text-slate-400 text-xs block mb-1 uppercase font-semibold">Bathrooms</span>
            <strong className="text-xl font-bold text-slate-900 flex items-center justify-center gap-1.5">
              <Bath className="w-5 h-5 text-[#338424]" /> {property.bathrooms}
            </strong>
          </div>
          <div className="border-l border-slate-200">
            <span className="text-slate-400 text-xs block mb-1 uppercase font-semibold">Garages</span>
            <strong className="text-xl font-bold text-slate-900 flex items-center justify-center gap-1.5">
              <Car className="w-5 h-5 text-[#338424]" /> {property.garages}
            </strong>
          </div>
          <div className="border-l border-slate-200">
            <span className="text-slate-400 text-xs block mb-1 uppercase font-semibold">Total Area</span>
            <strong className="text-xl font-bold text-slate-900 flex items-center justify-center gap-1.5">
              <Maximize2 className="w-5 h-5 text-[#338424]" /> {property.sqft.toLocaleString()} Sq Ft
            </strong>
          </div>
          <div className="border-l border-slate-200">
            <span className="text-slate-400 text-xs block mb-1 uppercase font-semibold">Year Built</span>
            <strong className="text-xl font-bold text-slate-900">{property.yearBuilt || 2024}</strong>
          </div>
          <div className="border-l border-slate-200">
            <span className="text-slate-400 text-xs block mb-1 uppercase font-semibold">Property Type</span>
            <strong className="text-xl font-bold text-slate-900">{property.type}</strong>
          </div>
        </div>

        {/* Main Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Main Details */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview Description */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Property Overview</h3>
              <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line font-normal">
                {property.description}
              </p>
            </div>

            {/* Features & Amenities */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Features & Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.features?.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-[#338424] shrink-0" />
                    <span className="text-xs text-slate-800 font-semibold">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floor Plans Section */}
            {property.floorPlans && property.floorPlans.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Floor Plans</h3>
                <div className="flex gap-2 mb-6 border-b border-slate-200 pb-3">
                  {property.floorPlans.map((plan, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveFloorPlan(i)}
                      className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                        activeFloorPlan === i ? 'bg-[#4db038] text-white' : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {plan.name}
                    </button>
                  ))}
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex justify-between items-center text-xs text-slate-700 mb-3">
                    <span>Size: <strong className="text-slate-900">{property.floorPlans[activeFloorPlan].size}</strong></span>
                    <span>Beds: <strong className="text-slate-900">{property.floorPlans[activeFloorPlan].bedrooms}</strong></span>
                  </div>
                  <img
                    src={property.floorPlans[activeFloorPlan].image}
                    alt="Floorplan"
                    className="w-full h-80 object-cover rounded-lg border border-slate-200 filter contrast-125"
                  />
                </div>
              </div>
            )}

            {/* Mortgage Calculator Integration */}
            <MortgageCalculator defaultPrice={property.price} />

            {/* Google Maps Location Card Placeholder */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Location & Coordinates</h3>
              <p className="text-xs text-slate-500 mb-4">{property.address || property.location}</p>

              <div className="relative h-64 bg-slate-100 rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center text-center p-6">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                  alt="Map Placeholder"
                  className="absolute inset-0 w-full h-full object-cover filter brightness-90 opacity-60"
                />
                <div className="relative z-10 bg-white/90 p-4 rounded-xl border border-slate-200 backdrop-blur-md shadow-md">
                  <MapPin className="w-8 h-8 text-[#338424] mx-auto mb-1 animate-bounce" />
                  <strong className="text-slate-900 text-base block">{property.title}</strong>
                  <span className="text-xs text-slate-500 block mt-1">
                    Latitude: {property.coordinates?.lat} | Longitude: {property.coordinates?.lng}
                  </span>
                  <a
                    href={`https://maps.google.com/?q=${property.coordinates?.lat},${property.coordinates?.lng}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block bg-[#4db038] text-white font-semibold text-xs px-4 py-2 rounded-lg hover:bg-[#338424] transition-colors shadow-2xs"
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
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xl sticky top-28">
              <span className="text-xs text-[#338424] uppercase tracking-widest font-bold block mb-3">
                Listing Agent
              </span>

              <div className="flex items-center gap-4 mb-5">
                <img
                  src={property.agent?.image || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'}
                  alt={property.agent?.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-200"
                />
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{property.agent?.name}</h4>
                  <p className="text-xs text-slate-500">{property.agent?.title}</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-700 mb-6">
                <a
                  href={`https://wa.me/2348156789757?text=${encodeURIComponent(`Hello, I am interested in ${property.title} (${property.priceFormatted})`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#20bd5a] transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp (+234 815 678 9757)</span>
                </a>
                <a
                  href={`tel:${property.agent?.phone || '+2348156789757'}`}
                  className="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-xl hover:border-[#4db038] transition-colors font-medium"
                >
                  <Phone className="w-4 h-4 text-[#338424]" />
                  <span>Call: {property.agent?.phone || '+234 815 678 9757'}</span>
                </a>
                <a
                  href={`mailto:${property.agent?.email}`}
                  className="flex items-center gap-2 p-2.5 bg-slate-50 border border-slate-200 rounded-xl hover:border-[#4db038] transition-colors font-medium"
                >
                  <Mail className="w-4 h-4 text-[#338424]" />
                  <span className="truncate">{property.agent?.email}</span>
                </a>
              </div>

              {/* Inquiry Form */}
              <div className="pt-4 border-t border-slate-200">
                <h5 className="text-xs text-slate-900 uppercase font-bold mb-3">Send Direct Inquiry</h5>

                {inquirySent ? (
                  <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-xs text-emerald-800 text-center font-semibold">
                    <CheckCircle2 className="w-6 h-6 mx-auto mb-1 text-emerald-600" />
                    Inquiry submitted. Our team will reach out to you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4db038] shadow-2xs"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4db038] shadow-2xs"
                    />
                    <textarea
                      rows={3}
                      required
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#4db038] shadow-2xs"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#4db038] text-white hover:bg-[#338424] font-bold text-xs py-2.5 rounded-xl transition-all shadow-xs uppercase tracking-wider"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Properties */}
        {relatedProperties.length > 0 && (
          <div className="mt-20 pt-10 border-t border-slate-200">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Similar Properties</h3>
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
              className="absolute top-6 right-6 text-white hover:text-[#4db038] p-2 bg-white/10 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={() => setActiveImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-[#4db038] p-3 bg-white/10 rounded-full"
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
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-[#4db038] p-3 bg-white/10 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
