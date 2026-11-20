import React, { useState } from 'react';
import { MessageSquare, Phone, X, Scissors, Sparkles, Send } from 'lucide-react';

export function WhatsAppConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const sendWhatsApp = (text) => {
    const encoded = encodeURIComponent(text || "Hello Àríyá Couture, I'd like to inquire about bespoke tailoring and ready-to-wear pieces.");
    window.open(`https://wa.me/2348038924110?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 bg-[#081a13] border border-[#234d38] rounded-2xl shadow-2xl p-4 text-left animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-[#1b3d2b]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#25D366] text-black flex items-center justify-center font-bold">
                <Phone className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-white">Àríyá VIP Concierge</h4>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Stylist Online • Victoria Island
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-gray-300 space-y-2">
            <p className="bg-[#0e271c] p-2.5 rounded-xl border border-[#1b4330] text-[11px] leading-relaxed">
              👋 Ẹ káàbọ̀! How can our bespoke stylists assist you today? We can help with measurements, fabric swatches, or wedding party coordination.
            </p>

            <div className="flex flex-col gap-1.5 pt-1">
              <button
                onClick={() => sendWhatsApp("Hello, I need bespoke Agbada measurements for an upcoming Owanbe.")}
                className="text-left text-[11px] p-2 rounded-lg bg-[#071710] hover:bg-[#123826] text-[#f3e5ab] border border-[#1e4634] transition"
              >
                ✂️ "I need Agbada / Kaftan measurements"
              </button>
              <button
                onClick={() => sendWhatsApp("Hello, I'd like to inquire about bridal Aso-Ebi / wedding party orders.")}
                className="text-left text-[11px] p-2 rounded-lg bg-[#071710] hover:bg-[#123826] text-[#f3e5ab] border border-[#1e4634] transition"
              >
                💍 "Bridal / Wedding Party consultation"
              </button>
              <button
                onClick={() => sendWhatsApp("Hello, when can I visit the Victoria Island or Abuja Atelier for a fitting?")}
                className="text-left text-[11px] p-2 rounded-lg bg-[#071710] hover:bg-[#123826] text-[#f3e5ab] border border-[#1e4634] transition"
              >
                📍 "Book in-person atelier fitting"
              </button>
            </div>
          </div>

          {/* Quick Input */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              sendWhatsApp(customMsg);
            }}
            className="flex gap-1.5 pt-2 border-t border-[#183929]"
          >
            <input
              type="text"
              placeholder="Type your message..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="flex-1 bg-[#06170f] border border-[#1e4634] rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-[#d4af37]"
            />
            <button
              type="submit"
              className="p-2 rounded-lg bg-[#25D366] text-black hover:brightness-110 transition"
              aria-label="Send"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Pill Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-black font-extrabold px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
        aria-label="Open WhatsApp Concierge"
      >
        <Phone className="w-5 h-5 fill-current" />
        <span className="text-xs tracking-wide hidden sm:inline font-bold text-gray-950">
          WhatsApp Stylist
        </span>
      </button>
    </div>
  );
}

