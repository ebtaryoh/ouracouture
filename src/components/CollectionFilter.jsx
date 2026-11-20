import React from 'react';
import { Sparkles, SlidersHorizontal, Check } from 'lucide-react';

export function CollectionFilter({
  activeFilter,
  setActiveFilter,
  selectedOccasion,
  setSelectedOccasion,
  sortBy,
  setSortBy,
  totalResults
}) {
  const OCCASIONS = [
    'All Occasions',
    'Owanbe Wedding',
    'Chieftaincy & Coronation',
    'Bridal & Groom',
    'Executive & Sunday',
    'Red Carpet Gala'
  ];

  return (
    <div className="w-full bg-[#071710] py-6 px-4 sm:px-6 lg:px-8 border-b border-[#1b3d2b]">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        
        {/* Main Gender & Style Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#091b13] shadow-md shadow-[#d4af37]/20'
                  : 'bg-[#0f291e] text-gray-300 hover:text-white hover:bg-[#163a2b] border border-[#234d39]'
              }`}
            >
              🌟 All Haute Couture
            </button>

            <button
              onClick={() => setActiveFilter('men')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                activeFilter === 'men'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#091b13] shadow-md shadow-[#d4af37]/20'
                  : 'bg-[#0f291e] text-gray-300 hover:text-white hover:bg-[#163a2b] border border-[#234d39]'
              }`}
            >
              👑 Men's Royal Wardrobe
            </button>

            <button
              onClick={() => setActiveFilter('women')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                activeFilter === 'women'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#091b13] shadow-md shadow-[#d4af37]/20'
                  : 'bg-[#0f291e] text-gray-300 hover:text-white hover:bg-[#163a2b] border border-[#234d39]'
              }`}
            >
              ✨ Women's Luxury Edit
            </button>

            <button
              onClick={() => setActiveFilter('couples')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                activeFilter === 'couples'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#091b13] shadow-md shadow-[#d4af37]/20'
                  : 'bg-[#0f291e] text-gray-300 hover:text-white hover:bg-[#163a2b] border border-[#234d39]'
              }`}
            >
              💍 Couple & Bridal Sets
            </button>

            <button
              onClick={() => setActiveFilter('hotsale')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                activeFilter === 'hotsale'
                  ? 'bg-gradient-to-r from-[#c25e1a] to-[#d97706] text-white shadow-md shadow-[#c25e1a]/30'
                  : 'bg-[#0f291e] text-[#f59e0b] hover:bg-[#163a2b] border border-[#c25e1a]/40'
              }`}
            >
              🔥 Hot Sale & Runway Edits
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-gray-400 hidden sm:inline flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#d4af37]" /> Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#0f291e] border border-[#234d39] text-white rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#d4af37] cursor-pointer"
            >
              <option value="featured">Featured Masterpieces</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Sub-Occasion Pills & Results Count */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#133224] text-xs">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] text-[#f3e5ab] font-medium mr-1">Occasion:</span>
            {OCCASIONS.map((occ) => (
              <button
                key={occ}
                onClick={() => setSelectedOccasion(occ)}
                className={`px-2.5 py-1 rounded-md text-[11px] transition ${
                  selectedOccasion === occ
                    ? 'bg-[#184532] text-[#f3e5ab] border border-[#d4af37]/60 font-semibold'
                    : 'text-gray-400 hover:text-white hover:bg-[#0f271d]'
                }`}
              >
                {occ}
              </button>
            ))}
          </div>

          <div className="text-[11px] text-gray-400 font-medium">
            Showing <span className="text-white font-bold">{totalResults}</span> Handcrafted Garments
          </div>
        </div>

      </div>
    </div>
  );
}

