import React, { useState } from 'react';
import { ArrowRight, BookOpen, Clock, Sparkles } from 'lucide-react';
import { LOOKBOOK_STORIES } from '../data/fashionData';

export function EditorialSection({ onExploreCollection }) {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <section className="w-full py-16 bg-[#071610] border-b border-[#1b3d2b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
              📖 The Àríyá Journal & Lookbook
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl font-extrabold text-white mt-1">
              The Art & Heritage of Nigerian Haute Couture
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Behind the seams of traditional looms, gold bullion embroidery, and high-fashion red carpet craft.
            </p>
          </div>

          <button
            onClick={() => onExploreCollection('all')}
            className="text-xs font-bold text-[#f3e5ab] hover:text-white flex items-center gap-1.5 underline underline-offset-4"
          >
            <span>View Full Editorial Runway</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {LOOKBOOK_STORIES.map((story) => (
            <div
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="group rounded-2xl overflow-hidden bg-[#091e15] border border-[#1d4432] hover:border-[#d4af37]/70 transition-all duration-300 flex flex-col cursor-pointer shadow-xl shadow-[#04110b]/40 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0a261a]">
                <img
                  src={story.image}
                  alt={story.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#081a12]/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#f3e5ab] border border-[#d4af37]/40">
                  {story.tag}
                </div>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-2">
                    <Clock className="w-3 h-3 text-[#d4af37]" />
                    <span>{story.reads}</span>
                  </div>
                  <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-white group-hover:text-[#f3e5ab] transition">
                    {story.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-medium mt-1">
                    {story.subtitle}
                  </p>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                    {story.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#163a28] flex items-center justify-between text-xs text-[#d4af37] font-bold group-hover:translate-x-0.5 transition-transform">
                  <span>Read Atelier Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Story Reading Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
          <div className="relative w-full max-w-xl bg-[#091e15] border border-[#24523c] rounded-2xl p-6 text-left shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-[#113123] text-gray-300 hover:text-white"
            >
              ✕
            </button>
            <span className="text-[10px] uppercase font-bold text-[#d4af37] tracking-widest">{selectedStory.tag}</span>
            <h3 className="font-serif-luxury text-2xl font-bold text-white mt-1 mb-2">{selectedStory.title}</h3>
            <p className="text-xs text-[#f3e5ab] font-medium mb-4">{selectedStory.subtitle}</p>
            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4 border border-[#1f4834]">
              <img src={selectedStory.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="text-xs text-gray-300 leading-relaxed space-y-3">
              <p>{selectedStory.summary}</p>
              <p>
                In our Victoria Island and Maitama ateliers, the craft of bespoke tailoring is treated as high art. Each needle stroke and bullion couching thread honors centuries of Nigerian nobility, transforming heritage into global luxury fashion.
              </p>
            </div>
            <button
              onClick={() => setSelectedStory(null)}
              className="mt-6 w-full py-2.5 bg-[#d4af37] text-black font-bold text-xs rounded-xl"
            >
              Close Story
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

