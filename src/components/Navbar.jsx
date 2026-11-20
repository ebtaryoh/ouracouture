import React, { useState } from 'react';
import { 
  ShoppingBag, Heart, Search, Menu, X, Crown, 
  Scissors, Phone, MapPin, Sparkles, ChevronDown, Check, Globe
} from 'lucide-react';
import { CURRENCIES, ATELIERS } from '../data/fashionData';

export function Navbar({ 
  cartCount, 
  wishlistCount, 
  currency, 
  setCurrency, 
  onOpenCart, 
  onOpenWishlist, 
  onOpenBespoke,
  searchQuery, 
  setSearchQuery,
  activeFilter,
  setActiveFilter,
  onSelectProduct
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#07130e]/95 backdrop-blur-md border-b border-[#244234]/60 transition-all duration-300">
      {/* Top Luxury Announcement Bar */}
      <div className="bg-gradient-to-r from-[#072418] via-[#0f3c2b] to-[#072418] text-[#e8d2a6] text-xs py-2 px-4 border-b border-[#27533f]/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#d4af37]/20 text-[#f3e5ab] border border-[#d4af37]/40">
              🇳🇬 LAGOS FASHION WEEK
            </span>
            <span className="font-medium tracking-wide">
              Free Nationwide Doorstep Delivery across Nigeria on orders over ₦150,000
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-[11px] text-[#cfdecb]">
            <a 
              href="https://wa.me/2348038924110?text=Hello%20Ariya%20Couture,%20I%20would%20like%20to%20inquire%20about%20bespoke%20fashion%20tailoring" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#d4af37] transition flex items-center gap-1 font-medium"
            >
              <Phone className="w-3 h-3 text-[#d4af37]" /> WhatsApp Stylist: +234 803 892 4110
            </a>
            <span className="hidden md:inline text-white/20">|</span>
            <button 
              onClick={onOpenBespoke}
              className="hidden md:flex items-center gap-1 text-[#f3e5ab] hover:text-white transition font-medium underline underline-offset-2"
            >
              <Scissors className="w-3 h-3 text-[#d4af37]" /> Book Lagos Atelier Fitting
            </button>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Menu Toggle & Brand Left */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#e5ede8] hover:text-[#d4af37] focus:outline-none transition"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Brand Logo & Royal Crest */}
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setActiveFilter('all'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2 group text-left"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] via-[#c5a059] to-[#8a6a2a] p-0.5 shadow-lg shadow-[#0a2f20]/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-full bg-[#091f16] flex items-center justify-center">
                  <Crown className="w-5 h-5 text-[#d4af37]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#f3e5ab] transition">
                  ÀRÍYÁ
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#d4af37] font-semibold uppercase -mt-1">
                  Couture Lagos
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium">
            <button 
              onClick={() => setActiveFilter('all')} 
              className={`transition pb-1 ${activeFilter === 'all' ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'text-gray-300 hover:text-white'}`}
            >
              All Masterpieces
            </button>
            <button 
              onClick={() => setActiveFilter('men')} 
              className={`transition pb-1 flex items-center gap-1 ${activeFilter === 'men' ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'text-gray-300 hover:text-white'}`}
            >
              👑 Men's Royal Agbada
            </button>
            <button 
              onClick={() => setActiveFilter('women')} 
              className={`transition pb-1 flex items-center gap-1 ${activeFilter === 'women' ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'text-gray-300 hover:text-white'}`}
            >
              ✨ Women's Aso-Ebi & Gowns
            </button>
            <button 
              onClick={() => setActiveFilter('couples')} 
              className={`transition pb-1 flex items-center gap-1 ${activeFilter === 'couples' ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'text-gray-300 hover:text-white'}`}
            >
              💍 Couple & Bridal Sets
            </button>
            <button 
              onClick={onOpenBespoke} 
              className="text-[#f3e5ab] hover:text-white flex items-center gap-1 bg-[#163f2e]/60 px-3 py-1 rounded-full border border-[#d4af37]/40 hover:border-[#d4af37] transition shadow-sm"
            >
              <Scissors className="w-3.5 h-3.5 text-[#d4af37]" /> Custom Tailor Studio
            </button>
          </nav>

          {/* Right Action Icons: Search, Currency, Wishlist, Cart */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Search Input on Desktop */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search Agbada, Lace, Senator, Boubou..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 lg:w-64 bg-[#0d2218] border border-[#234b37] text-white text-xs rounded-full pl-9 pr-3 py-2 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] placeholder-gray-400 transition"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Mobile Search Toggle */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-[#d4af37] transition"
              aria-label="Toggle Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Currency Switcher */}
            <div className="relative">
              <button 
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1 bg-[#0e271c] hover:bg-[#153828] border border-[#26533d] text-white text-xs px-2.5 py-1.5 rounded-md transition"
              >
                <span className="font-semibold text-[#d4af37]">{currency.symbol}</span>
                <span className="text-gray-200">{currency.code}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-[#0c1f17] border border-[#2a5942] rounded-lg shadow-2xl py-1 z-50">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-gray-400 tracking-wider border-b border-[#1b3d2c]">
                    Select Currency
                  </div>
                  {Object.values(CURRENCIES).map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        setCurrency(c);
                        setCurrencyDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-[#173a2b] transition text-gray-200"
                    >
                      <span className="flex items-center gap-1.5">
                        <span className="text-[#d4af37] font-bold">{c.symbol}</span>
                        <span>{c.code}</span>
                      </span>
                      {currency.code === c.code && <Check className="w-3.5 h-3.5 text-[#d4af37]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Wishlist Button */}
            <button 
              onClick={onOpenWishlist}
              className="relative p-2 text-gray-300 hover:text-[#d4af37] transition"
              title="View Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#c25e1a] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Cart Drawer Trigger */}
            <button 
              onClick={onOpenCart}
              className="relative flex items-center gap-1.5 bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#091b13] px-3.5 py-2 rounded-full font-bold text-xs hover:brightness-110 transition shadow-lg shadow-[#d4af37]/20"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Bag</span>
              <span className="w-5 h-5 rounded-full bg-[#081811] text-[#f3e5ab] text-[11px] font-bold flex items-center justify-center ml-0.5">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Input Drawer (Visible when toggled on mobile) */}
        {searchOpen && (
          <div className="md:hidden pb-3 pt-1 border-t border-[#183a2a] animate-fadeIn">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Agbada, Lace, Senator, Boubou..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-[#0c2017] border border-[#2b5942] text-white text-sm rounded-lg pl-9 pr-8 py-2.5 focus:outline-none focus:border-[#d4af37]"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-sm text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Slide-Out Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Drawer */}
          <div className="relative ml-0 mr-auto w-4/5 max-w-sm h-full bg-[#081b13] border-r border-[#26533c] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#1b3d2c]">
                <div className="flex items-center gap-2">
                  <Crown className="w-6 h-6 text-[#d4af37]" />
                  <div>
                    <span className="font-serif-luxury text-lg font-bold text-white tracking-wider block">
                      ÀRÍYÁ COUTURE
                    </span>
                    <span className="text-[9px] text-[#d4af37] font-semibold uppercase tracking-widest block">
                      Victoria Island, Lagos
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full bg-[#102a1e] text-gray-300 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="py-6 space-y-4">
                <button
                  onClick={() => { setActiveFilter('all'); setMobileMenuOpen(false); }}
                  className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold transition ${activeFilter === 'all' ? 'bg-[#184230] text-[#f3e5ab]' : 'text-gray-200 hover:bg-[#102d20]'}`}
                >
                  🌟 All Nigerian Collections
                </button>

                <button
                  onClick={() => { setActiveFilter('men'); setMobileMenuOpen(false); }}
                  className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold transition ${activeFilter === 'men' ? 'bg-[#184230] text-[#f3e5ab]' : 'text-gray-200 hover:bg-[#102d20]'}`}
                >
                  👑 Men's Royal Agbada & Senator Suits
                </button>

                <button
                  onClick={() => { setActiveFilter('women'); setMobileMenuOpen(false); }}
                  className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold transition ${activeFilter === 'women' ? 'bg-[#184230] text-[#f3e5ab]' : 'text-gray-200 hover:bg-[#102d20]'}`}
                >
                  ✨ Women's Aso-Ebi, Velvet & Boubous
                </button>

                <button
                  onClick={() => { setActiveFilter('couples'); setMobileMenuOpen(false); }}
                  className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold transition ${activeFilter === 'couples' ? 'bg-[#184230] text-[#f3e5ab]' : 'text-gray-200 hover:bg-[#102d20]'}`}
                >
                  💍 Couples & Traditional Bridal Sets
                </button>

                <button
                  onClick={() => { onOpenBespoke(); setMobileMenuOpen(false); }}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-[#d4af37]/20 to-[#c5a059]/10 text-[#f3e5ab] border border-[#d4af37]/40 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Scissors className="w-4 h-4 text-[#d4af37]" /> Custom Tailor Studio
                  </span>
                  <span className="text-[10px] bg-[#d4af37] text-black font-bold px-2 py-0.5 rounded-full">
                    VIP
                  </span>
                </button>
              </div>

              {/* Currency & Quick Settings in Drawer */}
              <div className="py-4 border-t border-[#1b3d2c]">
                <span className="text-xs font-semibold text-gray-400 block mb-2 uppercase tracking-wider">
                  Select Currency
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {Object.values(CURRENCIES).map((c) => (
                    <button
                      key={c.code}
                      onClick={() => setCurrency(c)}
                      className={`px-3 py-2 text-xs rounded-md border text-center font-medium transition ${currency.code === c.code ? 'border-[#d4af37] bg-[#163f2e] text-[#f3e5ab]' : 'border-[#26533c] text-gray-300 hover:bg-[#102d20]'}`}
                    >
                      {c.symbol} {c.code}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Atelier Contact & WhatsApp */}
            <div className="pt-6 border-t border-[#1b3d2c] space-y-3">
              <a 
                href="https://wa.me/2348038924110?text=Hello%20Ariya%20Couture,%20I'm%20inquiring%20about%20bespoke%20fashion"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] text-black font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 transition shadow-lg"
              >
                <Phone className="w-4 h-4" /> Chat on WhatsApp Concierge
              </a>
              <div className="text-[11px] text-gray-400 space-y-1">
                <p className="flex items-center gap-1.5 text-gray-300">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" /> Plot 14B, Adeola Odeku, Victoria Island
                </p>
                <p>Call Atelier: +234 803 892 4110</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

