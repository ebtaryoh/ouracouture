import React, { useState } from 'react';
import { Eye, Heart, Plus, Check, Star, Scissors, Sparkles } from 'lucide-react';

export function ProductCard({ 
  product, 
  currency, 
  onQuickView, 
  onAddToCart, 
  isWishlisted, 
  onToggleWishlist 
}) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const convertedPrice = Math.round(product.price * currency.rate);
  const convertedOriginal = product.originalPrice ? Math.round(product.originalPrice * currency.rate) : null;
  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  const currentImage = (isHovered && product.images.length > 1) 
    ? product.images[1] 
    : product.images[0];

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    onAddToCart({
      ...product,
      selectedColor: product.colors[selectedColorIndex]?.name || 'Standard',
      selectedSize: 'L (42-44)',
      quantity: 1,
      isBespoke: false
    });
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1400);
  };

  return (
    <div 
      className="group relative flex flex-col bg-[#091a13] rounded-2xl overflow-hidden border border-[#1b3d2c] hover:border-[#d4af37]/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#d4af37]/20 cursor-pointer"
      onClick={() => onQuickView(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0d261b]">
        <img
          src={currentImage}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#091a13] via-transparent to-black/20 opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-[#091b13]/90 text-[#f3e5ab] border border-[#d4af37]/60 backdrop-blur-md shadow-md animate-glow">
              {product.badge}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="self-start px-2 py-0.5 rounded text-[10px] font-black bg-[#c25e1a] text-white shadow">
              SAVE {discountPercent}%
            </span>
          )}
        </div>

        {/* Top Right Actions: Wishlist Heart & Quick Add */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition backdrop-blur-md shadow-lg ${
              isWishlisted
                ? 'bg-[#c25e1a] text-white'
                : 'bg-[#091b13]/80 hover:bg-[#133525] text-white hover:text-[#d4af37] border border-[#27533f]'
            }`}
            title={isWishlisted ? "Remove from Wishlist" : "Save to Wishlist"}
            aria-label="Wishlist"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={handleQuickAdd}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition backdrop-blur-md shadow-lg ${
              addedAnimation 
                ? 'bg-emerald-600 text-white scale-110' 
                : 'bg-[#d4af37] hover:bg-[#e6ca65] text-[#091b13] hover:scale-105'
            }`}
            title="Quick Add to Bag"
            aria-label="Quick Add"
          >
            {addedAnimation ? <Check className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
          </button>
        </div>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="w-full py-2.5 px-4 rounded-xl bg-[#091e16]/90 hover:bg-[#133b2a] text-[#f3e5ab] text-xs font-bold border border-[#d4af37]/60 backdrop-blur-md flex items-center justify-center gap-1.5 shadow-xl transition"
          >
            <Eye className="w-4 h-4 text-[#d4af37]" />
            <span>Quick View & Tailor Specs</span>
          </button>
        </div>
      </div>

      {/* Card Info Section */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-2.5">
        
        {/* Color Swatch Dots */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1.5 pt-0.5">
            {product.colors.map((c, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColorIndex(i);
                }}
                className={`w-4 h-4 rounded-full transition-transform ${
                  selectedColorIndex === i 
                    ? 'ring-2 ring-[#d4af37] ring-offset-2 ring-offset-[#091a13] scale-110' 
                    : 'opacity-80 hover:opacity-100 hover:scale-105'
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
                aria-label={c.name}
              />
            ))}
            <span className="text-[10px] text-gray-400 ml-1 truncate">
              {product.colors[selectedColorIndex]?.name}
            </span>
          </div>
        )}

        {/* Title & Subtitle */}
        <div>
          <h3 className="font-serif-luxury text-sm sm:text-base font-bold text-white group-hover:text-[#f3e5ab] transition line-clamp-1">
            {product.title}
          </h3>
          <p className="text-[11px] text-gray-400 line-clamp-1 mt-0.5">
            {product.subtitle}
          </p>
        </div>

        {/* Ratings & Tailor Indicator */}
        <div className="flex items-center justify-between text-[11px] text-gray-400">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
            <span className="text-white font-semibold">{product.rating}</span>
            <span>({product.reviewsCount})</span>
          </div>
          <div className="flex items-center gap-1 text-[#f3e5ab] text-[10px] bg-[#123123] px-2 py-0.5 rounded-full border border-[#27533f]">
            <Scissors className="w-3 h-3 text-[#d4af37]" />
            <span>Bespoke Available</span>
          </div>
        </div>

        {/* Price & Currency */}
        <div className="pt-2 border-t border-[#173a2b] flex items-baseline justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-base sm:text-lg font-extrabold text-white">
              {currency.symbol}{convertedPrice.toLocaleString()}
            </span>
            {convertedOriginal && (
              <span className="text-xs text-gray-500 line-through">
                {currency.symbol}{convertedOriginal.toLocaleString()}
              </span>
            )}
          </div>
          <span className="text-[10px] text-emerald-400 font-medium">
            Lagos Atelier
          </span>
        </div>

      </div>
    </div>
  );
}

