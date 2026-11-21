import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Scissors, ShieldCheck, Crown, ChevronLeft, ChevronRight, Gem, Flame } from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 1,
    tag: '👑 BESPOKE NIGERIAN ROYALTY',
    title: 'The Royal Agbada & Senator Edit',
    subtitle: 'Hand-couched gold bullion embroidery on heavyweight Swiss cotton voile. Engineered for dignitaries, grooms, and kings.',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=1600&auto=format&fit=crop&q=90',
    primaryCta: "Shop Men's Royal Wardrobe",
    filterTarget: 'men',
    accentColor: '#d4af37',
    badgeText: 'Handmade in Lagos Atelier'
  },
  {
    id: 2,
    tag: '✨ OWANBE GLAMOUR 2026',
    title: 'Snatched Corsetry & French Beaded Lace',
    subtitle: 'Hourglass silhouettes, cathedral mermaid trains, and liquid silk boubous designed to turn heads at every high-society wedding.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1600&auto=format&fit=crop&q=90',
    primaryCta: "Explore Women's Luxury Edit",
    filterTarget: 'women',
    accentColor: '#f3e5ab',
    badgeText: 'Hand-Embroidered Gele & Lace'
  },
  {
    id: 3,
    tag: '💍 THE CORONATION COUPLE',
    title: 'Heirloom Aso-Oke & Bridal Sets',
    subtitle: 'Woven on authentic wooden looms in Iseyin and tailored in Victoria Island. Perfectly matched palettes for traditional nuptials.',
    image: 'https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=1600&auto=format&fit=crop&q=90',
    primaryCta: 'Explore Bridal & Couple Sets',
    filterTarget: 'couples',
    accentColor: '#c5a059',
    badgeText: 'Heirloom Masterpiece'
  }
];

export function HeroBanner({ onSelectCategory, onOpenBespoke }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative w-full overflow-hidden bg-[#06140e] border-b border-[#214736]/60">
      {/* Background Image Carousel with Moving Ken Burns Effect & Gradient Overlay */}
      <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center">
        {HERO_SLIDES.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Moving Ken Burns continuous pan-and-zoom animation */}
            <div className={`w-full h-full ${index === currentSlide ? 'animate-kenburns' : ''}`}>
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover object-top sm:object-center brightness-[0.70] contrast-105"
              />
            </div>

            {/* Multi-layered luxury gradients for supreme readability & cinematic glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#040e0a]/95 via-[#071c13]/75 to-[#040e0a]/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06140e] via-transparent to-[#040e0a]/70" />
          </div>
        ))}

        {/* Floating Moving Luxury Sticker (Right side on Desktop) */}
        <div className="hidden lg:flex flex-col items-center gap-2 absolute right-12 top-24 z-20 animate-float pointer-events-none">
          <div className="w-24 h-24 rounded-full border-2 border-[#d4af37]/60 bg-[#071911]/85 backdrop-blur-md p-2 flex flex-col items-center justify-center text-center shadow-2xl shadow-[#d4af37]/20">
            <Crown className="w-6 h-6 text-[#d4af37] animate-glow mb-0.5" />
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#f3e5ab] leading-tight">
              Lagos
              <br />
              Atelier
            </span>
            <span className="text-[8px] text-gray-400 font-semibold">100% Bespoke</span>
          </div>
          <span className="text-[10px] bg-[#d4af37]/20 text-[#f3e5ab] px-2.5 py-0.5 rounded-full border border-[#d4af37]/40 font-bold backdrop-blur-sm">
            🇳🇬 Made in Nigeria
          </span>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="max-w-2xl text-left">
            
            {/* Luxury Category Badge with Animated Pulse Glow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e3122]/90 border border-[#d4af37]/60 backdrop-blur-md mb-4 shadow-lg shadow-[#06170f]/50 animate-glow">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-[#f3e5ab] uppercase">
                {slide.tag}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              <span className="text-[11px] text-gray-300 hidden sm:inline">
                {slide.badgeText}
              </span>
            </div>

            {/* Main Regal Headline with Moving Shimmer */}
            <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight mb-4 drop-shadow-md">
              {slide.title}
            </h1>

            {/* Tagline / Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-[#d2e0d7] font-normal leading-relaxed mb-8 max-w-xl">
              {slide.subtitle}
            </p>

            {/* Action Buttons with Animated Moving Shimmer */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
              <button
                onClick={() => onSelectCategory(slide.filterTarget)}
                className="group relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e6ca65] to-[#c5a059] text-[#091b13] font-extrabold text-sm hover:brightness-110 transition shadow-2xl shadow-[#d4af37]/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                {/* Moving light shimmer sweep */}
                <span className="absolute inset-0 w-full h-full animate-shimmer pointer-events-none" />
                <span className="relative z-10">{slide.primaryCta}</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              <button
                onClick={onOpenBespoke}
                className="px-6 py-4 rounded-full bg-[#0a2318]/85 hover:bg-[#123826] text-white border border-[#2b5942] hover:border-[#d4af37] transition font-semibold text-sm backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Scissors className="w-4 h-4 text-[#d4af37] group-hover:rotate-45 transition-transform duration-300" />
                <span>Book Bespoke Tailor Fitting</span>
              </button>
            </div>

            {/* Luxury Moving Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-[#1d4332]/70 text-xs text-[#cfdecb]">
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-[#d4af37] shrink-0 animate-bounce" />
                <span>15,000+ Royal Garments</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>100% Fit Guarantee</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                <span>48h Express Lagos Dispatch</span>
              </div>
            </div>

          </div>
        </div>

        {/* Carousel Arrow Controls */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#061810]/75 hover:bg-[#0c2c1e] text-white border border-[#214a36] hover:border-[#d4af37] flex items-center justify-center transition backdrop-blur-sm z-20 cursor-pointer hidden md:flex"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#061810]/75 hover:bg-[#0c2c1e] text-white border border-[#214a36] hover:border-[#d4af37] flex items-center justify-center transition backdrop-blur-sm z-20 cursor-pointer hidden md:flex"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Carousel Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                i === currentSlide ? 'w-10 bg-[#d4af37]' : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
