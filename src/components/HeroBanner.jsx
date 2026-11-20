import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Scissors, ShieldCheck, Crown, ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 1,
    tag: '👑 BESPOKE NIGERIAN ROYALTY',
    title: 'The Royal Agbada & Senator Edit',
    subtitle: 'Hand-couched gold bullion embroidery on heavyweight Swiss cotton voile. Engineered for dignitaries, grooms, and kings.',
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=1400&auto=format&fit=crop&q=90',
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
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1400&auto=format&fit=crop&q=90',
    primaryCta: "Explore Women's Luxury Edit",
    filterTarget: 'women',
    accentColor: '#f3e5ab',
    badgeText: 'Swarovski Beaded Lace'
  },
  {
    id: 3,
    tag: '💍 THE CORONATION COUPLE',
    title: 'Heirloom Aso-Oke & Bridal Sets',
    subtitle: 'Woven on authentic wooden looms in Iseyin and tailored in Victoria Island. Perfectly matched palettes for traditional nuptials.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&auto=format&fit=crop&q=90',
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
      {/* Background Image Carousel with Parallax Feel & Gradient Overlay */}
      <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center">
        {HERO_SLIDES.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            } transition-transform duration-7000`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover object-top sm:object-center brightness-[0.72] contrast-105"
            />
            {/* Multi-layered luxury gradients for supreme readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#040e0a]/95 via-[#071c13]/70 to-[#040e0a]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06140e] via-transparent to-[#040e0a]/60" />
          </div>
        ))}

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="max-w-2xl text-left">
            
            {/* Luxury Category Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e3122]/90 border border-[#d4af37]/50 backdrop-blur-md mb-4 shadow-lg shadow-[#06170f]/50">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-[#f3e5ab] uppercase">
                {slide.tag}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              <span className="text-[11px] text-gray-300 hidden sm:inline">
                {slide.badgeText}
              </span>
            </div>

            {/* Main Regal Headline */}
            <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight mb-4 drop-shadow-md">
              {slide.title}
            </h1>

            {/* Tagline / Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-[#d2e0d7] font-normal leading-relaxed mb-8 max-w-xl">
              {slide.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
              <button
                onClick={() => onSelectCategory(slide.filterTarget)}
                className="group px-7 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e5c468] to-[#c5a059] text-[#091b13] font-bold text-sm hover:brightness-110 transition shadow-xl shadow-[#d4af37]/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{slide.primaryCta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenBespoke}
                className="px-6 py-3.5 rounded-full bg-[#0a2318]/80 hover:bg-[#123827] text-white border border-[#2b5942] hover:border-[#d4af37] transition font-semibold text-sm backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Scissors className="w-4 h-4 text-[#d4af37]" />
                <span>Book Bespoke Tailor Fitting</span>
              </button>
            </div>

            {/* Luxury Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-[#1d4332]/70 text-xs text-[#cfdecb]">
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>15,000+ Royal Garments</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>100% Fit Guarantee</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                <span>48h Express Lagos Dispatch</span>
              </div>
            </div>

          </div>
        </div>

        {/* Carousel Arrow Controls */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#061810]/70 hover:bg-[#0c2c1e] text-white border border-[#214a36] flex items-center justify-center transition backdrop-blur-sm z-20 cursor-pointer hidden md:flex"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#061810]/70 hover:bg-[#0c2c1e] text-white border border-[#214a36] flex items-center justify-center transition backdrop-blur-sm z-20 cursor-pointer hidden md:flex"
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
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'w-8 bg-[#d4af37]' : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

