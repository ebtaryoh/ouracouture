import React, { useState, useEffect } from 'react';
import { Sparkles, MapPin, X, CheckCircle } from 'lucide-react';

const LIVE_ACTIVITIES = [
  {
    name: 'Chief Adebayo O.',
    location: 'Lekki Phase 1, Lagos',
    item: 'The Ooni Royal 3-Piece Agbada Set',
    time: '2 mins ago',
    type: 'Bespoke Order'
  },
  {
    name: 'Dr. Folashade A.',
    location: 'Maitama, Abuja FCT',
    item: 'Tiwa Champagne Beaded Lace Mermaid Gown',
    time: '4 mins ago',
    type: 'Reception Glamour'
  },
  {
    name: 'Engr. Emeka & Chidimma',
    location: 'Houston, Texas (DHL Express)',
    item: 'The Coronation Couple Matching Emerald Set',
    time: '7 mins ago',
    type: 'Traditional Wedding'
  },
  {
    name: 'Hon. Babatunde K.',
    location: 'Victoria Island Atelier',
    item: 'Booked In-Person VIP Fitting for Saturday',
    time: '12 mins ago',
    type: 'Atelier Appointment'
  },
  {
    name: 'Mrs. Kemi Adeleke',
    location: 'Mayfair, London UK',
    item: 'Asake Silk Crepe Draped Boubou with Crystal Yoke',
    time: '15 mins ago',
    type: 'Ready-to-Wear'
  }
];

export function LiveSalesNotification({ onSelectProductByTitle }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show after 3 seconds initial delay
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    // Then cycle every 9 seconds
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % LIVE_ACTIVITIES.length);
        setVisible(true);
      }, 700);
    }, 9500);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed || !visible) return null;

  const current = LIVE_ACTIVITIES[currentIndex];

  return (
    <aside
      aria-label="Recent Atelier Activity"
      className="fixed bottom-6 left-6 z-40 max-w-sm w-[calc(100vw-3rem)] sm:w-auto bg-[#081d14]/95 border border-[#d4af37]/50 rounded-2xl p-3.5 shadow-2xl shadow-black/80 backdrop-blur-md animate-slide-up text-left"
    >
      <div className="flex items-start gap-3">
        {/* Animated Pulsing Ring */}
        <div className="relative mt-0.5 shrink-0">
          <div className="w-9 h-9 rounded-full bg-[#103825] border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
            <Sparkles className="w-4 h-4 animate-glow" />
          </div>
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#081d14] animate-ping" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 pr-2">
          <div className="flex items-center justify-between gap-1 mb-0.5">
            <span className="text-[10px] uppercase font-bold text-[#f3e5ab] tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              {current.type}
            </span>
            <span className="text-[9px] text-gray-400">{current.time}</span>
          </div>

          <h5 className="text-xs font-bold text-white line-clamp-1">
            {current.item}
          </h5>

          <p className="text-[11px] text-[#cfdecb] flex items-center gap-1 mt-0.5 truncate">
            <MapPin className="w-3 h-3 text-[#d4af37] shrink-0" />
            <span>{current.name} in {current.location}</span>
          </p>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setDismissed(true)}
          className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-[#123826] transition shrink-0"
          aria-label="Dismiss notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Moving progress bar for duration */}
      <div className="w-full h-0.5 bg-[#123826] rounded-full overflow-hidden mt-2.5">
        <div className="h-full bg-gradient-to-r from-[#d4af37] to-emerald-400 rounded-full animate-marquee" />
      </div>
    </aside>
  );
}

