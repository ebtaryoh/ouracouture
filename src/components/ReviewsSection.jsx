import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/fashionData';

export function ReviewsSection() {
  return (
    <section className="w-full py-16 bg-[#05140e] border-b border-[#1b3e2d] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0a3121]/30 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
            👑 Royal Client Testimonials
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl font-extrabold text-white mt-2">
            Praised by Prominent Grooms, Brides & Dignitaries
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            From Lagos high-society galas to London & Texas traditional weddings, see why over 15,000 clients trust Àríyá Couture.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-[#091f16] border border-[#1d4733] hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-[#04110b]/50 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#d4af37] gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#d4af37]/30 group-hover:text-[#d4af37] transition" />
                </div>

                <p className="text-xs text-gray-300 leading-relaxed italic mb-4">
                  "{t.text}"
                </p>

                <div className="p-2 rounded-lg bg-[#06170f] border border-[#163827] text-[10px] text-[#f3e5ab] mb-4">
                  <span className="text-gray-400 block text-[9px] uppercase">Outfit Ordered:</span>
                  <span className="font-medium line-clamp-1">{t.outfit}</span>
                </div>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-3 pt-3 border-t border-[#163b2a]">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#d4af37]/60 shrink-0">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs flex items-center gap-1">
                    <span>{t.name}</span>
                    {t.verified && <ShieldCheck className="w-3 h-3 text-emerald-400" title="Verified Customer" />}
                  </h4>
                  <p className="text-[10px] text-gray-400">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#072418] via-[#0d3b28] to-[#072418] border border-[#27533f] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif-luxury text-base font-bold text-white">
              Planning an upcoming Owanbe, Wedding, or Milestone Birthday?
            </h4>
            <p className="text-xs text-[#cfdecb] mt-0.5">
              Book a private consultation with our Creative Director in Victoria Island or Maitama, Abuja.
            </p>
          </div>
          <a
            href="https://wa.me/2348038924110?text=Hello%20Ariya%20Couture,%20I'm%20planning%20an%20event%20and%20would%20like%20to%20discuss%20styling"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-full bg-[#d4af37] text-black font-bold text-xs hover:brightness-110 shadow-lg whitespace-nowrap"
          >
            Connect with Lead Stylist
          </a>
        </div>

      </div>
    </section>
  );
}

