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
  const { wishlist } = useApp();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Services', path: '/services' },
    { name: 'Property Management', path: '/property-management' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-1.5 sm:py-2 shadow-md'
          : 'bg-[#eaf2ea]/90 backdrop-blur-md py-2 sm:py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo layout="compact" />

          {/* Desktop Navigation Links matching Image Reference */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors py-1 ${
                    isActive
                      ? 'text-[#4db038] font-bold border-b-2 border-[#4db038]'
                      : 'text-slate-700 hover:text-[#4db038]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Far Right Action Buttons matching Image Reference */}
          <div className="flex items-center gap-3">
            {/* Wishlist Indicator */}
            {wishlist.length > 0 && (
              <Link
                to="/properties?saved=true"
                className="relative p-2 text-slate-700 hover:text-[#4db038] transition-colors"
                title="Saved Favorites"
              >
                <Heart className="w-5 h-5 fill-[#4db038] text-[#4db038]" />
                <span className="absolute top-0 right-0 bg-[#111827] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              </Link>
            )}

            {/* Light Log in Pill */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center bg-white/90 hover:bg-slate-100 text-slate-800 text-xs font-semibold px-4 py-2 rounded-full border border-slate-200 transition-colors shadow-2xs"
            >
              Log in
            </Link>

            {/* Dark Charcoal Join Now / Contact Pill Button */}
            <Link
              to="/contact"
              className="bg-[#111827] hover:bg-black text-white text-xs font-semibold px-5 py-2 rounded-full transition-all shadow-sm hover:scale-[1.02]"
            >
              Join now
            </Link>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-900 hover:text-[#4db038] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-3 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-semibold text-slate-800 hover:text-[#4db038] py-2.5 border-b border-slate-100 flex items-center justify-between"
              >
                {link.name}
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </div>

          <div className="pt-2 flex items-center gap-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#4db038] text-white font-bold text-xs py-3 rounded-full flex items-center justify-center gap-2 shadow-sm hover:bg-[#439c30] transition-colors"
            >
              Contact Us <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
