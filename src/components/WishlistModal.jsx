import React from 'react';
import { X, Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export function WishlistModal({
  isOpen,
  onClose,
  wishlist,
  onRemoveWishlist,
  onAddToCart,
  currency
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#081a13] border border-[#234d38] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#1b3e2d] bg-[#071610] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#c25e1a] fill-current" />
            <span className="font-serif-luxury text-lg font-bold text-white tracking-wide">
              Saved Royal Pieces ({wishlist.length})
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#0d271c] hover:bg-[#153e2c] text-gray-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-3">
          {wishlist.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#0c2419] flex items-center justify-center mx-auto text-gray-500 border border-[#1b4330]">
                <Heart className="w-7 h-7" />
              </div>
              <h4 className="font-serif-luxury text-base font-bold text-white">Your wishlist is empty</h4>
              <p className="text-xs text-gray-400">
                Click the heart icon on any Agbada, Senator suit, or Aso-Ebi gown to save it for later.
              </p>
            </div>
          ) : (
            wishlist.map((item) => {
              const convertedPrice = Math.round(item.price * currency.rate);
              return (
                <div 
                  key={item.id}
                  className="p-3.5 rounded-xl bg-[#0a2117] border border-[#1d4632] flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-20 rounded-lg overflow-hidden bg-[#0d261b] shrink-0 border border-[#224b37]">
                      <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <h4 className="font-serif-luxury text-sm font-bold text-white line-clamp-1">{item.title}</h4>
                      <p className="text-[11px] text-[#f3e5ab] font-bold mt-0.5">
                        {currency.symbol}{convertedPrice.toLocaleString()}
                      </p>
                      <span className="text-[10px] text-gray-400">{item.occasion || 'Haute Couture'}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        onAddToCart({
                          ...item,
                          selectedColor: item.colors[0]?.name || 'Standard',
                          selectedSize: 'L (42-44)',
                          quantity: 1,
                          isBespoke: false
                        });
                        onRemoveWishlist(item.id);
                      }}
                      className="px-3.5 py-2 rounded-lg bg-[#d4af37] text-black font-bold text-xs flex items-center gap-1.5 hover:brightness-110 shadow-sm"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Move to Bag</span>
                    </button>
                    <button
                      onClick={() => onRemoveWishlist(item.id)}
                      className="p-2 text-gray-400 hover:text-red-400 transition"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

