import React, { useState } from 'react';
import { Camera, Sparkles, Heart, Eye } from 'lucide-react';

const RUNWAY_PHOTOS = [
  {
    id: 1,
    title: 'Grand Agbada in Emerald & Gold Bullion',
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=900&auto=format&fit=crop&q=85',
    span: 'col-span-1 row-span-2',
    height: 'h-[460px]'
  },
  {
    id: 2,
    title: 'Champagne Beaded French Lace & Gele',
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&auto=format&fit=crop&q=85',
    span: 'col-span-1',
    height: 'h-[220px]'
  },
  {
    id: 3,
    title: 'Bespoke Senator Suit in Obsidian',
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=85',
    span: 'col-span-1',
    height: 'h-[220px]'
  },
  {
    id: 4,
    title: 'The Coronation Couple Ensemble',
    category: 'Couples',
    image: 'https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=900&auto=format&fit=crop&q=85',
    span: 'col-span-1 sm:col-span-2',
    height: 'h-[220px]'
  },
  {
    id: 5,
    title: 'Amber Silk & Velvet Cowl Gown',
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=900&auto=format&fit=crop&q=85',
    span: 'col-span-1',
    height: 'h-[220px]'
  },
  {
    id: 6,
    title: 'Hand-Woven Royal Purple Aso-Oke',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=900&auto=format&fit=crop&q=85',
    span: 'col-span-1',
    height: 'h-[220px]'
  }
];

export function LookbookGallery({ onFilterByGender }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="w-full py-16 bg-[#05130d] border-b border-[#1b3d2b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] flex items-center justify-center gap-1.5 animate-glow">
            <Camera className="w-3.5 h-3.5" /> High Society Runway & Owanbe Lookbook
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl font-extrabold text-white mt-1">
            Real Nigerian Royalty in Motion
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Spotted on red carpets, federal banquets, and grand wedding receptions in Lagos, Abuja, London & Atlanta.
          </p>
        </div>

        {/* Masonry / Bento Grid with Hover Lift & Glow Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {RUNWAY_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-[#1b3e2d] hover:border-[#d4af37]/80 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#d4af37]/15 ${photo.height}`}
            >
              <img
                src={photo.image}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 brightness-[0.85] group-hover:brightness-100"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06140e] via-black/25 to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

              <div className="absolute top-3 left-3 bg-[#06170f]/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#f3e5ab] border border-[#d4af37]/40 shadow">
                {photo.category}
              </div>

              <div className="absolute bottom-3 inset-x-3 text-left">
                <h4 className="font-serif-luxury text-xs sm:text-sm font-bold text-white group-hover:text-[#f3e5ab] transition line-clamp-1">
                  {photo.title}
                </h4>
                <span className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                  <Sparkles className="w-3 h-3 text-[#d4af37] animate-pulse" /> Tap to view atelier detail
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Preview */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-lg w-full bg-[#081a13] border border-[#234d38] rounded-2xl overflow-hidden p-4 text-left shadow-2xl animate-slide-up">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-black/70 hover:bg-black text-white cursor-pointer"
            >
              ✕
            </button>
            <div className="aspect-[3/4] w-full rounded-xl overflow-hidden mb-3 bg-[#0a2318]">
              <img src={selectedPhoto.image} alt="" className="w-full h-full object-cover object-top" />
            </div>
            <h3 className="font-serif-luxury text-base font-bold text-white">{selectedPhoto.title}</h3>
            <p className="text-xs text-gray-400 mt-0.5">Category: {selectedPhoto.category} • Handcrafted in Victoria Island Atelier</p>
            <button
              onClick={() => {
                setSelectedPhoto(null);
                onFilterByGender(selectedPhoto.category.toLowerCase().includes('men') ? 'men' : 'women');
              }}
              className="mt-3 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-black font-extrabold text-xs cursor-pointer shadow-lg hover:brightness-110"
            >
              Shop Similar Handcrafted Styles
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
