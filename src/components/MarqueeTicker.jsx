import React from 'react';
import { Crown, Sparkles, Gem, Scissors, ShieldCheck, Heart } from 'lucide-react';

export function MarqueeTicker() {
  const TICKER_ITEMS = [
    { text: 'LAGOS FASHION WEEK FEATURED', icon: Crown },
    { text: 'ROYAL GRAND AGBADA & SENATOR SETS', icon: Sparkles },
    { text: 'HANDMADE IN VICTORIA ISLAND ATELIER', icon: Scissors },
    { text: 'SWISS VOILE & AUTHENTIC ASO-OKE LOOMS', icon: Gem },
    { text: 'DOORSTEP DELIVERY IN LAGOS, ABUJA & ALL 36 STATES', icon: ShieldCheck },
    { text: 'WORLDWIDE EXPRESS SHIPPING TO UK, USA & CANADA', icon: Sparkles },
    { text: 'SNATCHED CORSETRY & FRENCH BEADED LACE', icon: Heart },
    { text: '100% PERFECT FIT TAILORING GUARANTEE', icon: Crown },
  ];

  return (
    <div className="w-full bg-[#0a1e16] border-y border-[#26533d] py-3 overflow-hidden select-none">
      <div className="flex w-max animate-marquee">
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3 mx-6 text-xs uppercase tracking-widest font-semibold text-[#f3e5ab]">
              <Icon className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{item.text}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/60" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

