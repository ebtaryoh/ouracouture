import React, { useState } from 'react';
import { 
  ArrowRight, Crown, Phone, Mail, MapPin, 
  ChevronDown, ChevronUp, Check, Globe, MessageCircle, Share2
} from 'lucide-react';
import { ATELIERS } from '../data/fashionData';

export function Footer({ onFilterCategory, onOpenBespoke }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  // Accordion state for mobile view
  const [mobileAccordions, setMobileAccordions] = useState({
    info: false,
    contact: false,
    follow: false,
    payments: false,
  });

  const toggleAccordion = (key) => {
    setMobileAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="w-full bg-[#040e09] border-t border-[#1d4332] text-gray-400 text-xs">
      
      {/* Newsletter Section (matching the video's "Sign up and save") */}
      <div className="border-b border-[#143224] py-14 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-[#06170f] to-[#040e09]">
        <div className="max-w-xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a261a] border border-[#d4af37]/40 text-[#f3e5ab] text-[11px] font-bold">
            <Crown className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>ÀRÍYÁ VIP ATELIER PRIVILEGE</span>
          </div>

          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-extrabold text-white">
            Sign up and save 10%
          </h2>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Subscribe to receive private invitations to runway previews, exclusive fabric drops, and bespoke fittings.
          </p>

          {subscribed ? (
            <div className="p-4 rounded-xl bg-[#0b2b1d] border border-emerald-500/60 text-emerald-300 space-y-1 animate-fadeIn">
              <div className="flex items-center justify-center gap-2 font-bold text-sm text-white">
                <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                <span>Ẹ ṣe púpọ̀! You are now on the VIP Guest List.</span>
              </div>
              <p className="text-xs text-[#f3e5ab]">
                Use VIP code <strong className="font-mono text-white text-sm bg-black/40 px-2 py-0.5 rounded border border-[#d4af37]">ARIYA10</strong> for 10% off your order!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex max-w-md mx-auto relative mt-2">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#091f16] border border-[#224b37] text-white text-xs rounded-full pl-5 pr-14 py-3.5 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] placeholder-gray-500"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-[#d4af37] hover:bg-[#e5ca6b] text-[#091b13] rounded-full transition flex items-center justify-center cursor-pointer shadow-md"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <p className="text-[10px] text-gray-500">
            We respect your privacy. No spam, only royal elegance.
          </p>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Desktop View (4 columns) */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 text-left pb-10 border-b border-[#143224]">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#d4af37] flex items-center justify-center text-black">
                <Crown className="w-4 h-4" />
              </div>
              <span className="font-serif-luxury text-lg font-bold text-white tracking-wider">
                ÀRÍYÁ COUTURE
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Nigeria's premier luxury fashion house. Handcrafted Royal Agbada, Senator suits, and bridal Aso-Ebi designed in Victoria Island, Lagos.
            </p>
            <div className="pt-1 text-[11px] text-[#f3e5ab] font-medium">
              RC: 1948201 • Lagos Fashion Chamber
            </div>
          </div>

          {/* OUR INFO */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider">
              OUR INFO
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onFilterCategory('all')} className="hover:text-[#d4af37] transition">
                  About the Lagos Atelier
                </button>
              </li>
              <li>
                <button onClick={() => onFilterCategory('men')} className="hover:text-[#d4af37] transition">
                  Men's Royal Agbada & Senator Suits
                </button>
              </li>
              <li>
                <button onClick={() => onFilterCategory('women')} className="hover:text-[#d4af37] transition">
                  Women's Aso-Ebi & Mermaid Gowns
                </button>
              </li>
              <li>
                <button onClick={() => onFilterCategory('couples')} className="hover:text-[#d4af37] transition">
                  Bridal & Couple Ensembles
                </button>
              </li>
              <li>
                <button onClick={onOpenBespoke} className="hover:text-[#d4af37] transition">
                  Bespoke Measurement Guide
                </button>
              </li>
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider">
              GET IN TOUCH
            </h4>
            <div className="space-y-2.5 text-xs text-gray-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Plot 14B, Adeola Odeku St, Victoria Island, Lagos, Nigeria</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Suite 204, Gana St, Maitama, Abuja FCT</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>+234 803 892 4110 / +234 814 550 7820</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>concierge@ariyacouture.ng</span>
              </p>
            </div>
          </div>

          {/* FOLLOW US & HOURS */}
          <div className="space-y-3">
            <h4 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider">
              FOLLOW US
            </h4>
            <p className="text-xs text-gray-400">
              Join our Instagram @AriyaCoutureLagos for live runway showcases and fitting sessions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-[#0a2318] hover:bg-[#133c2a] flex items-center justify-center text-gray-300 hover:text-[#d4af37] transition border border-[#214a36]" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#0a2318] hover:bg-[#133c2a] flex items-center justify-center text-gray-300 hover:text-[#d4af37] transition border border-[#214a36]" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#0a2318] hover:bg-[#133c2a] flex items-center justify-center text-gray-300 hover:text-[#d4af37] transition border border-[#214a36]" aria-label="X Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>

            <div className="pt-2 text-[11px] text-gray-400">
              <p className="font-semibold text-white">Atelier Fitting Hours:</p>
              <p>Mon - Sat: 9am - 7pm</p>
              <p>Sunday: VIP Appointments Only</p>
            </div>
          </div>

        </div>

        {/* Mobile Accordion View (just like in the video recording!) */}
        <div className="md:hidden divide-y divide-[#143224] text-left">
          
          {/* OUR INFO */}
          <div className="py-3">
            <button
              onClick={() => toggleAccordion('info')}
              className="w-full flex items-center justify-between font-serif-luxury text-sm font-bold text-white uppercase tracking-wider"
            >
              <span>OUR INFO</span>
              {mobileAccordions.info ? <ChevronUp className="w-4 h-4 text-[#d4af37]" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
            </button>
            {mobileAccordions.info && (
              <div className="pt-3 pb-1 space-y-2 text-xs pl-2">
                <button onClick={() => onFilterCategory('all')} className="block hover:text-[#d4af37]">About Our Lagos Atelier</button>
                <button onClick={() => onFilterCategory('men')} className="block hover:text-[#d4af37]">Men's Royal Agbada & Senator Suits</button>
                <button onClick={() => onFilterCategory('women')} className="block hover:text-[#d4af37]">Women's Aso-Ebi & Gowns</button>
                <button onClick={onOpenBespoke} className="block hover:text-[#d4af37]">Bespoke Measurement Guide</button>
              </div>
            )}
          </div>

          {/* GET IN TOUCH */}
          <div className="py-3">
            <button
              onClick={() => toggleAccordion('contact')}
              className="w-full flex items-center justify-between font-serif-luxury text-sm font-bold text-white uppercase tracking-wider"
            >
              <span>GET IN TOUCH</span>
              {mobileAccordions.contact ? <ChevronUp className="w-4 h-4 text-[#d4af37]" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
            </button>
            {mobileAccordions.contact && (
              <div className="pt-3 pb-1 space-y-2 text-xs text-gray-300 pl-2">
                <p>📍 Plot 14B Adeola Odeku, Victoria Island, Lagos</p>
                <p>📍 Suite 204 Gana St, Maitama, Abuja</p>
                <p>📞 Phone: +234 803 892 4110</p>
                <p>✉️ concierge@ariyacouture.ng</p>
              </div>
            )}
          </div>

          {/* FOLLOW US */}
          <div className="py-3">
            <button
              onClick={() => toggleAccordion('follow')}
              className="w-full flex items-center justify-between font-serif-luxury text-sm font-bold text-white uppercase tracking-wider"
            >
              <span>FOLLOW US</span>
              {mobileAccordions.follow ? <ChevronUp className="w-4 h-4 text-[#d4af37]" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
            </button>
            {mobileAccordions.follow && (
              <div className="pt-3 pb-1 space-y-3 pl-2">
                <p className="text-xs text-gray-400">@AriyaCoutureLagos on Instagram, TikTok & YouTube</p>
                <div className="flex gap-3">
                  <span className="p-2 rounded-full bg-[#0a2318] text-white">Instagram</span>
                  <span className="p-2 rounded-full bg-[#0a2318] text-white">WhatsApp</span>
                </div>
              </div>
            )}
          </div>

          {/* WE ACCEPT */}
          <div className="py-3">
            <button
              onClick={() => toggleAccordion('payments')}
              className="w-full flex items-center justify-between font-serif-luxury text-sm font-bold text-white uppercase tracking-wider"
            >
              <span>WE ACCEPT</span>
              {mobileAccordions.payments ? <ChevronUp className="w-4 h-4 text-[#d4af37]" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
            </button>
            {mobileAccordions.payments && (
              <div className="pt-3 pb-1 text-xs text-gray-400 pl-2">
                <p>Paystack • Flutterwave • Nigerian Bank Transfer (GTBank & Zenith) • Interswitch Verve • Visa • Mastercard • Apple Pay</p>
              </div>
            )}
          </div>

        </div>

        {/* Accepted Payment Badges & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] font-bold text-gray-300">
            <span className="px-2.5 py-1 rounded bg-[#092218] border border-[#1e4834]">🇳🇬 PAYSTACK</span>
            <span className="px-2.5 py-1 rounded bg-[#092218] border border-[#1e4834]">FLUTTERWAVE</span>
            <span className="px-2.5 py-1 rounded bg-[#092218] border border-[#1e4834]">BANK TRANSFER</span>
            <span className="px-2.5 py-1 rounded bg-[#092218] border border-[#1e4834]">VERVE</span>
            <span className="px-2.5 py-1 rounded bg-[#092218] border border-[#1e4834]">MASTERCARD</span>
            <span className="px-2.5 py-1 rounded bg-[#092218] border border-[#1e4834]">VISA</span>
            <span className="px-2.5 py-1 rounded bg-[#092218] border border-[#1e4834]">APPLE PAY</span>
          </div>

          <div className="text-[11px] text-gray-500">
            © 2026 ÀRÍYÁ COUTURE LAGOS. All Rights Reserved. Handcrafted in Nigeria.
          </div>
        </div>

      </div>
    </footer>
  );
}
