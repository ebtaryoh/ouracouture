import React, { useState } from 'react';
import { X, Scissors, Calendar, Clock, MapPin, Video, Check, Sparkles, Phone } from 'lucide-react';
import { ATELIERS } from '../data/fashionData';

export function BespokeStudioModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [sessionType, setSessionType] = useState('in_person_lagos'); // in_person_lagos, in_person_abuja, virtual
  const [selectedFabric, setSelectedFabric] = useState('Swiss Voile & Gold Bullion');
  const [embroideryLevel, setEmbroideryLevel] = useState('Imperial Royal');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [occasion, setOccasion] = useState('Traditional Wedding (Groom/Bride)');
  const [booked, setBooked] = useState(false);

  const FABRICS = [
    'Swiss Voile & Gold Bullion',
    'Authentic Hand-Woven Aso-Oke',
    'Austrian French Guipure Lace',
    'Crushed Silk Velvet',
    'Italian Super 160s Cashmere'
  ];

  const handleBook = (e) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#081a13] border border-[#234d38] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#1b3e2d] bg-[#071610] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scissors className="w-5 h-5 text-[#d4af37]" />
            <span className="font-serif-luxury text-lg font-bold text-white tracking-wide">
              Bespoke Atelier Tailoring Studio
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#0d271c] hover:bg-[#153e2c] text-gray-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto flex-1">
          {booked ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#0f3c2b] text-[#d4af37] border border-[#d4af37] flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h3 className="font-serif-luxury text-2xl font-bold text-white">
                Fitting Appointment Reserved!
              </h3>
              <p className="text-xs text-gray-300 max-w-md mx-auto">
                Thank you, {name}. Our Head Stylist will reach out via WhatsApp at <strong>{phone}</strong> to confirm your slot for {date || 'upcoming week'} at {time}.
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#d4af37] text-black font-bold text-xs"
                >
                  Return to Boutique
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBook} className="space-y-5 text-xs text-gray-300">
              
              <div>
                <p className="text-xs text-[#d2e0d7] leading-relaxed">
                  Experience personalized bespoke styling. Whether you are preparing for an Owanbe, high-society traditional wedding, or executive event, our Master Cutters sculpt each garment exclusively for your physique.
                </p>
              </div>

              {/* Consultation Type Selector */}
              <div>
                <label className="font-bold text-white block mb-2">1. Choose Consultation Mode</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSessionType('in_person_lagos')}
                    className={`p-3 rounded-xl border text-left transition ${
                      sessionType === 'in_person_lagos'
                        ? 'border-[#d4af37] bg-[#143a29] text-white shadow'
                        : 'border-[#1b3d2b] bg-[#071710] text-gray-400 hover:text-white'
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-[#d4af37] mb-1" />
                    <span className="font-bold block text-white text-xs">Victoria Island Atelier</span>
                    <span className="text-[10px] text-gray-400">Adeola Odeku, Lagos</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSessionType('in_person_abuja')}
                    className={`p-3 rounded-xl border text-left transition ${
                      sessionType === 'in_person_abuja'
                        ? 'border-[#d4af37] bg-[#143a29] text-white shadow'
                        : 'border-[#1b3d2b] bg-[#071710] text-gray-400 hover:text-white'
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-[#d4af37] mb-1" />
                    <span className="font-bold block text-white text-xs">Abuja VIP Studio</span>
                    <span className="text-[10px] text-gray-400">Maitama, Abuja</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSessionType('virtual')}
                    className={`p-3 rounded-xl border text-left transition ${
                      sessionType === 'virtual'
                        ? 'border-[#d4af37] bg-[#143a29] text-white shadow'
                        : 'border-[#1b3d2b] bg-[#071710] text-gray-400 hover:text-white'
                    }`}
                  >
                    <Video className="w-4 h-4 text-[#d4af37] mb-1" />
                    <span className="font-bold block text-white text-xs">Virtual Tailor Call</span>
                    <span className="text-[10px] text-gray-400">WhatsApp / Zoom Fitting</span>
                  </button>
                </div>
              </div>

              {/* Fabric Preference */}
              <div>
                <label className="font-bold text-white block mb-1.5">2. Preferred Fabric & Medium</label>
                <div className="flex flex-wrap gap-1.5">
                  {FABRICS.map((fab) => (
                    <button
                      key={fab}
                      type="button"
                      onClick={() => setSelectedFabric(fab)}
                      className={`px-3 py-1.5 rounded-lg border text-[11px] transition ${
                        selectedFabric === fab
                          ? 'border-[#d4af37] bg-[#184431] text-[#f3e5ab] font-bold'
                          : 'border-[#1e4533] bg-[#092016] text-gray-400 hover:text-white'
                      }`}
                    >
                      {fab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact & Date Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-300 block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Chief / Dr / Mr / Ms..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#0a2117] border border-[#214a36] text-white text-xs rounded-lg p-2.5 focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="text-gray-300 block mb-1">WhatsApp Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 803 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#0a2117] border border-[#214a36] text-white text-xs rounded-lg p-2.5 focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-gray-300 block mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#0a2117] border border-[#214a36] text-white text-xs rounded-lg p-2.5 focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="text-gray-300 block mb-1">Preferred Time</label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#0a2117] border border-[#214a36] text-white text-xs rounded-lg p-2.5 focus:border-[#d4af37]"
                  >
                    <option>10:00 AM</option>
                    <option>11:30 AM</option>
                    <option>02:00 PM</option>
                    <option>04:00 PM</option>
                    <option>06:00 PM</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-300 block mb-1">Occasion</label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full bg-[#0a2117] border border-[#214a36] text-white text-xs rounded-lg p-2.5 focus:border-[#d4af37]"
                  >
                    <option>Traditional Wedding (Groom/Bride)</option>
                    <option>Owanbe High-Table Guest</option>
                    <option>Chieftaincy / Coronation</option>
                    <option>Corporate Boardroom</option>
                    <option>Red Carpet / Gala</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e6ca65] to-[#c5a059] text-[#091b13] font-extrabold text-xs hover:brightness-110 shadow-lg shadow-[#d4af37]/25 transition cursor-pointer"
              >
                Confirm Fitting Reservation • Victoria Island / Abuja / Virtual
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

