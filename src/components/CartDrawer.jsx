import React, { useState } from 'react';
import { 
  X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, 
  ShieldCheck, Truck, Tag, Scissors, Sparkles, Phone 
} from 'lucide-react';

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  currency,
  orderNote,
  setOrderNote,
  discountCode,
  setDiscountCode,
  discountAmount
}) {
  if (!isOpen) return null;

  const [inputCode, setInputCode] = useState('');
  const [codeError, setCodeError] = useState('');
  const [codeSuccess, setCodeSuccess] = useState('');

  // Calculate totals in NGN
  const rawSubtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const freeShippingThreshold = 150000;
  const progressToFreeShipping = Math.min(100, Math.round((rawSubtotal / freeShippingThreshold) * 100));
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - rawSubtotal);

  const subtotalConverted = Math.round(rawSubtotal * currency.rate);
  const discountConverted = Math.round(discountAmount * currency.rate);
  const finalTotalConverted = Math.max(0, subtotalConverted - discountConverted);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    if (inputCode.toUpperCase() === 'ARIYA10' || inputCode.toUpperCase() === 'LAGOSVIP') {
      setDiscountCode(inputCode.toUpperCase());
      setCodeSuccess('✓ 10% Royal Privilege Discount Applied!');
      setCodeError('');
    } else {
      setCodeError('Invalid coupon code. Try "ARIYA10"');
      setCodeSuccess('');
    }
  };

  const handleWhatsAppOrder = () => {
    const itemListText = items.map(i => `• ${i.title} (${i.selectedColor}, ${i.selectedSize}) x${i.quantity} = ₦${(i.price * i.quantity).toLocaleString()}`).join('%0A');
    const message = `Hello Àríyá Couture Lagos Atelier,%0A%0AI would like to order the following:%0A${itemListText}%0A%0ASubtotal: ₦${rawSubtotal.toLocaleString()}%0ANote: ${orderNote || 'Standard order'}`;
    window.open(`https://wa.me/2348038924110?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#081a13] border-l border-[#234d38] h-full shadow-2xl flex flex-col justify-between z-10">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#1b3e2d] bg-[#071610] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#d4af37]" />
            <span className="font-serif-luxury text-lg font-bold text-white tracking-wide">
              Your Royal Wardrobe
            </span>
            <span className="text-xs bg-[#143d2b] text-[#f3e5ab] px-2 py-0.5 rounded-full font-bold border border-[#26533c]">
              {items.reduce((acc, i) => acc + i.quantity, 0)}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#0d271c] hover:bg-[#153e2c] text-gray-300 hover:text-white transition"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="p-3.5 bg-[#0a2318] border-b border-[#1b4330] text-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[#f3e5ab] font-medium flex items-center gap-1">
              <Truck className="w-3.5 h-3.5 text-[#d4af37]" />
              {amountToFreeShipping === 0 ? (
                <span className="font-bold text-emerald-400">✓ You unlocked FREE Nationwide Delivery!</span>
              ) : (
                <span>Add <strong>{currency.symbol}{Math.round(amountToFreeShipping * currency.rate).toLocaleString()}</strong> more for Free Nigeria Delivery!</span>
              )}
            </span>
            <span className="text-[10px] text-gray-400">{progressToFreeShipping}%</span>
          </div>
          <div className="w-full h-1.5 bg-[#06170f] rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#d4af37] to-emerald-400 rounded-full transition-all duration-500"
              style={{ width: `${progressToFreeShipping}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#0f2c1f] flex items-center justify-center mx-auto text-gray-400 border border-[#214c37]">
                <ShoppingBag className="w-8 h-8 text-[#d4af37]" />
              </div>
              <div>
                <h4 className="font-serif-luxury text-base font-bold text-white">Your wardrobe is empty</h4>
                <p className="text-xs text-gray-400 mt-1 max-w-xs mx-auto">
                  Explore our handcrafted Royal Agbada, French lace mermaid gowns, and Senator suits.
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#091b13] font-bold text-xs hover:brightness-110 shadow-md"
              >
                Browse Haute Couture
              </button>
            </div>
          ) : (
            items.map((item, index) => {
              const itemTotal = Math.round(item.price * item.quantity * currency.rate);
              return (
                <div 
                  key={`${item.id}-${item.selectedColor}-${item.selectedSize}-${index}`}
                  className="p-3 rounded-xl bg-[#0a2117] border border-[#1d4632] flex gap-3.5 relative group"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-24 rounded-lg overflow-hidden bg-[#0d281c] shrink-0 border border-[#204a36]">
                    <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover object-top" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between text-left">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif-luxury text-xs sm:text-sm font-bold text-white line-clamp-1">
                          {item.title}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(index)}
                          className="text-gray-400 hover:text-red-400 p-0.5 transition"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-gray-400 space-y-0.5 mt-1">
                        <p>Color: <span className="text-white font-medium">{item.selectedColor}</span></p>
                        <p className="flex items-center gap-1">
                          <span>Size: <strong className="text-white">{item.selectedSize}</strong></span>
                          {item.isBespoke && (
                            <span className="text-[9px] bg-[#d4af37]/20 text-[#f3e5ab] px-1.5 py-0.2 rounded border border-[#d4af37]/40 flex items-center gap-0.5">
                              <Scissors className="w-2.5 h-2.5" /> Bespoke
                            </span>
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Stepper & Price */}
                    <div className="flex items-center justify-between pt-2 border-t border-[#163828] mt-2">
                      <div className="flex items-center border border-[#224b37] rounded-lg bg-[#07160f] text-white">
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-[#133726] text-gray-300"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 py-1 text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-[#133726] text-gray-300"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-sm font-extrabold text-white">
                        {currency.symbol}{itemTotal.toLocaleString()}
                      </span>
                    </div>

                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer & Checkout Area */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-[#1b3e2d] bg-[#071610] space-y-3.5">
            
            {/* Promo Code Input */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <input
                type="text"
                placeholder="VIP Code (e.g. ARIYA10)"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                className="flex-1 bg-[#0a2117] border border-[#214a36] text-white text-xs rounded-lg px-3 py-2 uppercase placeholder:normal-case placeholder:text-gray-500 focus:border-[#d4af37]"
              />
              <button
                type="submit"
                className="px-3 py-2 rounded-lg bg-[#143a29] hover:bg-[#1e5039] text-[#f3e5ab] text-xs font-bold border border-[#2c6145] transition"
              >
                Apply
              </button>
            </form>
            {codeSuccess && <p className="text-[11px] text-emerald-400 font-medium">{codeSuccess}</p>}
            {codeError && <p className="text-[11px] text-red-400 font-medium">{codeError}</p>}

            {/* Tailor / Delivery Note Accordion */}
            <div>
              <label className="text-[11px] text-gray-400 block mb-1">
                Atelier Notes & Fitting Requests (Optional):
              </label>
              <textarea
                placeholder="e.g. Need ready for Lagos wedding on Dec 14th, monogram initials 'TA' on sleeve..."
                value={orderNote}
                onChange={(e) => setOrderNote(e.target.value)}
                rows="2"
                className="w-full bg-[#0a2117] border border-[#1f4734] text-white text-xs rounded-lg p-2 placeholder:text-gray-500 focus:border-[#d4af37]"
              />
            </div>

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-gray-300 pt-2 border-t border-[#163828]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-white">{currency.symbol}{subtotalConverted.toLocaleString()}</span>
              </div>
              {discountConverted > 0 && (
                <div className="flex justify-between text-emerald-400 font-medium">
                  <span>VIP Privilege Discount (10%)</span>
                  <span>-{currency.symbol}{discountConverted.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-[11px] text-gray-400">
                <span>Shipping & Nigerian Courier</span>
                <span>Calculated at next step</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-white pt-1 border-t border-[#163828]">
                <span>Total Due</span>
                <span className="text-[#f3e5ab]">{currency.symbol}{finalTotalConverted.toLocaleString()}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-1">
              <button
                onClick={onProceedToCheckout}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e6ca65] to-[#c5a059] text-[#091b13] font-extrabold text-sm hover:brightness-110 transition shadow-xl shadow-[#d4af37]/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Express Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0f2e21] hover:bg-[#174431] text-[#25D366] font-bold text-xs border border-[#25D366]/40 flex items-center justify-center gap-2 transition"
              >
                <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Instant Order via WhatsApp Concierge</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-4 text-[10px] text-gray-400 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#d4af37]" /> Bank & Paystack Secured
              </span>
              <span>•</span>
              <span>Lagos & Worldwide Delivery</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

