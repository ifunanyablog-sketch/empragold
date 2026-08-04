import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Logo } from './Logo';
import { 
  Building2, 
  Heart, 
  Layers, 
  Calendar, 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Search,
  ArrowRight,
  Crown,
  Home,
  ShieldCheck,
  TrendingUp,
  MapPin
} from 'lucide-react';
import { propertiesData } from '../data/propertiesData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { wishlist, compareList } = useApp();
  const location = useLocation();

  const featuredProperty = propertiesData[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties', hasMegaMenu: true },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Property Management', path: '/property-management' },
    { name: 'About Us', path: '/about' },
    { name: 'Private Agents', path: '/agents' },
    { name: 'Journal', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0b0914]/95 backdrop-blur-xl border-b border-purple-500/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0c0914]/90 via-[#0c0914]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group hover:opacity-95 transition-opacity">
            <Logo layout="compact" />
          </Link>

          {/* Reduced Desktop Navigation Links matching Reference: Landlord, Agent, Renter, Pricing */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link
              to="/property-management"
              className={`transition-colors ${
                location.pathname === '/property-management' ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Landlord
            </Link>
            <Link
              to="/agents"
              className={`transition-colors ${
                location.pathname === '/agents' ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Agent
            </Link>
            <Link
              to="/properties"
              className={`transition-colors ${
                location.pathname === '/properties' ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Renter
            </Link>
            <Link
              to="/services"
              className={`transition-colors ${
                location.pathname === '/services' ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Pricing
            </Link>
          </nav>

          {/* Far Right Action & Hamburger Menu Icon */}
          <div className="flex items-center gap-4">
            {/* Wishlist Indicator */}
            {wishlist.length > 0 && (
              <Link to="/properties?saved=true" className="relative p-1.5 text-purple-300 hover:text-white transition-colors" title="Saved Favorites">
                <Heart className="w-4 h-4 fill-purple-400 text-purple-400" />
                <span className="absolute -top-1 -right-1 bg-fuchsia-500 text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              </Link>
            )}

            {/* Reference Style 2-Line Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-gray-200 hover:text-white transition-colors flex flex-col justify-center gap-1.5 w-6 h-6 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <>
                  <span className="w-6 h-[2px] bg-white rounded-full transition-transform" />
                  <span className="w-6 h-[2px] bg-white rounded-full transition-transform" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="bg-[#0b0914]/95 border-b border-purple-500/30 px-6 py-6 space-y-4 shadow-2xl backdrop-blur-2xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            <Link
              to="/property-management"
              className="text-sm font-semibold text-gray-200 hover:text-purple-300 py-2 border-b border-purple-500/10"
            >
              Landlord
            </Link>
            <Link
              to="/agents"
              className="text-sm font-semibold text-gray-200 hover:text-purple-300 py-2 border-b border-purple-500/10"
            >
              Agent
            </Link>
            <Link
              to="/properties"
              className="text-sm font-semibold text-gray-200 hover:text-purple-300 py-2 border-b border-purple-500/10"
            >
              Renter
            </Link>
            <Link
              to="/services"
              className="text-sm font-semibold text-gray-200 hover:text-purple-300 py-2 border-b border-purple-500/10"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-sm font-semibold text-gray-200 hover:text-purple-300 py-2 border-b border-purple-500/10"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-sm font-semibold text-gray-200 hover:text-purple-300 py-2 border-b border-purple-500/10"
            >
              Contact
            </Link>
          </div>

          <div className="pt-2 space-y-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold text-xs uppercase tracking-wider py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
