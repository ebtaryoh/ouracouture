import React from 'react';
import { Crown, Sparkles, Gem, Scissors, ShieldCheck, Heart, Flame } from 'lucide-react';

export function MarqueeTicker() {
  const TICKER_ITEMS_1 = [
    { text: 'LAGOS FASHION WEEK FEATURED', icon: Crown },
    { text: 'ROYAL GRAND AGBADA & SENATOR SETS', icon: Sparkles },
    { text: 'HANDMADE IN VICTORIA ISLAND ATELIER', icon: Scissors },
    { text: 'SWISS VOILE & AUTHENTIC ASO-OKE LOOMS', icon: Gem },
    { text: 'DOORSTEP DELIVERY IN LAGOS, ABUJA & ALL 36 STATES', icon: ShieldCheck },
    { text: 'WORLDWIDE EXPRESS SHIPPING TO UK, USA & CANADA', icon: Sparkles },
    { text: 'SNATCHED CORSETRY & FRENCH BEADED LACE', icon: Heart },
    { text: '100% PERFECT FIT TAILORING GUARANTEE', icon: Crown },
  ];

  const TICKER_ITEMS_2 = [
    { text: '👑 THE OONI ROYAL COLLECTION', icon: Flame },
    { text: '✨ TIWA CHAMPAGNE MERMAID GOWN', icon: Sparkles },
    { text: '🏛️ ISEYIN HEIRLOOM ASO-OKE WEAVERS', icon: Gem },
    { text: '✂️ CUSTOM BESPOKE MEASUREMENTS', icon: Scissors },
    { text: '💍 CORONATION COUPLE MATCHING ENSEMBLES', icon: Heart },
    { text: '⚡ LEKKI OBSIDIAN SENATOR SUITS', icon: Flame },
    { text: '🌿 ASAKE SILK BOUBOU LUXURY', icon: Sparkles },
  ];

  return (
    <div className="w-full bg-[#071911] border-y border-[#26533d] overflow-hidden select-none">
      {/* Top Lane: Moves Left */}
      <div className="py-2.5 border-b border-[#183d2c]/60">
        <div className="flex w-max animate-marquee">
          {[...TICKER_ITEMS_1, ...TICKER_ITEMS_1, ...TICKER_ITEMS_1].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2.5 mx-6 text-xs uppercase tracking-widest font-bold text-[#f3e5ab]">
                <Icon className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{item.text}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/60" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Lane: Moves Right in Reverse */}
      <div className="py-2 bg-[#05140e]">
        <div className="flex w-max animate-marquee-reverse">
          {[...TICKER_ITEMS_2, ...TICKER_ITEMS_2, ...TICKER_ITEMS_2].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2.5 mx-6 text-[11px] uppercase tracking-wider font-semibold text-[#cfdecb]">
                <Icon className="w-3 h-3 text-[#d4af37]" />
                <span>{item.text}</span>
                <span className="w-1 h-1 rounded-full bg-[#d4af37]/40" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
