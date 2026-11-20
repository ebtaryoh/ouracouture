import React, { useState } from 'react';
import { 
  X, Check, ShieldCheck, CreditCard, Building2, 
  Truck, ArrowLeft, Copy, Sparkles, Phone, AlertCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { NIGERIAN_STATES, BANK_DETAILS } from '../data/fashionData';

export function CheckoutModal({
  isOpen,
  onClose,
  items,
  currency,
  orderNote,
  discountAmount,
  onOrderSuccess
}) {
  if (!isOpen) return null;

  // Form State
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: 'Lagos',
    stateIndex: 0,
    postalCode: '101241',
    paymentMethod: 'paystack', // 'paystack', 'bank_transfer', 'card'
    agreeNewsletter: true
  });

  const [copiedBank, setCopiedBank] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(null);

  // Calculations
  const rawSubtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const selectedState = NIGERIAN_STATES[formData.stateIndex] || NIGERIAN_STATES[0];
  const shippingFee = rawSubtotal >= 150000 ? 0 : selectedState.fee;
  const totalAmountNGN = Math.max(0, rawSubtotal - discountAmount + shippingFee);

  const subtotalConverted = Math.round(rawSubtotal * currency.rate);
  const shippingConverted = Math.round(shippingFee * currency.rate);
  const discountConverted = Math.round(discountAmount * currency.rate);
  const grandTotalConverted = Math.round(totalAmountNGN * currency.rate);

  const handleCopyAccount = (accNo, bankName) => {
    navigator.clipboard.writeText(accNo);
    setCopiedBank(bankName);
    setTimeout(() => setCopiedBank(''), 2500);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedOrder = {
        orderId: `ARIYA-LAG-${Math.floor(100000 + Math.random() * 900000)}`,
        items: [...items],
        total: totalAmountNGN,
        currency,
        shippingState: selectedState.name,
        customerName: `${formData.firstName} ${formData.lastName}`,
        phone: formData.phone,
        email: formData.email,
        date: new Date().toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' }),
        paymentMethod: formData.paymentMethod,
        orderNote
      };

      setOrderComplete(generatedOrder);
      onOrderSuccess();

      // Trigger Confetti!
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#0f3c2b', '#ffffff', '#e6ca65']
      });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#081a13] border border-[#234d38] rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#1b3e2d] bg-[#071610] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif-luxury text-lg font-bold text-white tracking-wide">
              ÀRÍYÁ COUTURE LAGOS • Express Checkout
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#0d271c] hover:bg-[#153e2c] text-gray-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Body */}
        <div className="overflow-y-auto p-4 sm:p-6 lg:p-8 flex-1">
          
          {orderComplete ? (
            /* ORDER SUCCESS VIEW */
            <div className="py-8 text-center max-w-lg mx-auto space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#0f3c2b] text-[#d4af37] border-2 border-[#d4af37] flex items-center justify-center mx-auto shadow-2xl shadow-[#d4af37]/30 animate-bounce">
                <Sparkles className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#d4af37]">
                  Royal Order Confirmed
                </span>
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Thank You, {orderComplete.customerName}!
                </h2>
                <p className="text-sm text-gray-300 mt-2">
                  Your bespoke commission has been received at our Victoria Island Atelier.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0b2318] border border-[#204a36] text-left text-xs space-y-3">
                <div className="flex justify-between pb-2 border-b border-[#183929]">
                  <span className="text-gray-400">Order Reference:</span>
                  <span className="font-mono font-bold text-[#f3e5ab] text-sm">{orderComplete.orderId}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#183929]">
                  <span className="text-gray-400">Delivery Destination:</span>
                  <span className="text-white font-medium">{orderComplete.shippingState}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-[#183929]">
                  <span className="text-gray-400">Total Amount:</span>
                  <span className="text-white font-bold text-sm">
                    {currency.symbol}{Math.round(orderComplete.total * currency.rate).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Payment Status:</span>
                  <span className="text-emerald-400 font-bold uppercase">
                    {orderComplete.paymentMethod === 'bank_transfer' ? 'Pending Bank Verification' : 'Paid & Confirmed'}
                  </span>
                </div>
              </div>

              {orderComplete.paymentMethod === 'bank_transfer' && (
                <div className="p-4 rounded-xl bg-[#143525] border border-[#d4af37]/60 text-xs text-left space-y-2">
                  <p className="font-bold text-[#f3e5ab]">Bank Transfer Instructions:</p>
                  <p className="text-gray-300 text-[11px]">
                    Please transfer <strong>₦{orderComplete.total.toLocaleString()}</strong> to GTBank <strong>0284719204</strong> (ARIYA COUTURE NIGERIA LTD) with narration <strong>{orderComplete.orderId}</strong>. Send proof to our WhatsApp at +234 803 892 4110.
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://wa.me/2348038924110?text=Hello%20Ariya%20Couture,%20I%20just%20placed%20Order%20${orderComplete.orderId}%20for%20${encodeURIComponent(orderComplete.customerName)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] text-black font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110"
                >
                  <Phone className="w-4 h-4" /> Message Atelier on WhatsApp
                </a>
                <button
                  onClick={onClose}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#113123] hover:bg-[#184431] text-white font-bold text-xs border border-[#26533c]"
                >
                  Return to Boutique
                </button>
              </div>
            </div>
          ) : (
            /* CHECKOUT FORM VIEW */
            <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
              
              {/* LEFT: Shipping & Payment Details (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Express Checkout Options */}
                <div>
                  <span className="text-xs text-gray-400 uppercase font-bold tracking-wider block mb-2">
                    Express Payment Options
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: 'paystack' })}
                      className={`p-2.5 rounded-xl border text-center transition cursor-pointer ${
                        formData.paymentMethod === 'paystack'
                          ? 'border-[#00c3f7] bg-[#00c3f7]/10 text-white font-bold'
                          : 'border-[#1b3e2d] bg-[#071911] text-gray-400 hover:text-white'
                      }`}
                    >
                      <span className="block text-xs font-black text-[#00c3f7]">Paystack</span>
                      <span className="text-[10px] text-gray-400">Cards • USSD • Transfer</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: 'bank_transfer' })}
                      className={`p-2.5 rounded-xl border text-center transition cursor-pointer ${
                        formData.paymentMethod === 'bank_transfer'
                          ? 'border-[#d4af37] bg-[#d4af37]/15 text-[#f3e5ab] font-bold'
                          : 'border-[#1b3e2d] bg-[#071911] text-gray-400 hover:text-white'
                      }`}
                    >
                      <span className="block text-xs font-black text-[#d4af37]">Direct Bank Transfer</span>
                      <span className="text-[10px] text-gray-400">GTBank • Zenith</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                      className={`p-2.5 rounded-xl border text-center transition cursor-pointer ${
                        formData.paymentMethod === 'card'
                          ? 'border-[#d4af37] bg-[#174631] text-white font-bold'
                          : 'border-[#1b3e2d] bg-[#071911] text-gray-400 hover:text-white'
                      }`}
                    >
                      <span className="block text-xs font-black text-white">Global Card</span>
                      <span className="text-[10px] text-gray-400">Visa • Mastercard • Amex</span>
                    </button>
                  </div>
                </div>

                {/* Direct Bank Transfer Details Preview (if selected) */}
                {formData.paymentMethod === 'bank_transfer' && (
                  <div className="p-4 rounded-xl bg-[#0b2419] border border-[#d4af37]/60 space-y-3 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#f3e5ab] flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-[#d4af37]" /> Official Corporate Bank Accounts
                      </span>
                      <span className="text-[10px] text-emerald-400 font-semibold">Instant Clearance</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                      {/* GTBank */}
                      <div className="p-2.5 rounded-lg bg-[#071710] border border-[#1b3d2b] space-y-1">
                        <span className="text-gray-400 block font-semibold">{BANK_DETAILS.bankName}</span>
                        <p className="text-white font-bold text-sm tracking-wider">{BANK_DETAILS.accountNumber}</p>
                        <p className="text-gray-400 text-[10px]">{BANK_DETAILS.accountName}</p>
                        <button
                          type="button"
                          onClick={() => handleCopyAccount(BANK_DETAILS.accountNumber, 'GTBank')}
                          className="mt-1 text-[10px] text-[#d4af37] hover:underline flex items-center gap-1 font-semibold"
                        >
                          <Copy className="w-3 h-3" />
                          <span>{copiedBank === 'GTBank' ? '✓ Copied!' : 'Copy Account Number'}</span>
                        </button>
                      </div>

                      {/* Zenith */}
                      <div className="p-2.5 rounded-lg bg-[#071710] border border-[#1b3d2b] space-y-1">
                        <span className="text-gray-400 block font-semibold">{BANK_DETAILS.secondaryBank.bankName}</span>
                        <p className="text-white font-bold text-sm tracking-wider">{BANK_DETAILS.secondaryBank.accountNumber}</p>
                        <p className="text-gray-400 text-[10px]">{BANK_DETAILS.secondaryBank.accountName}</p>
                        <button
                          type="button"
                          onClick={() => handleCopyAccount(BANK_DETAILS.secondaryBank.accountNumber, 'Zenith')}
                          className="mt-1 text-[10px] text-[#d4af37] hover:underline flex items-center gap-1 font-semibold"
                        >
                          <Copy className="w-3 h-3" />
                          <span>{copiedBank === 'Zenith' ? '✓ Copied!' : 'Copy Account Number'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact Information */}
                <div className="space-y-3">
                  <h3 className="font-serif-luxury text-sm font-bold text-white border-b border-[#1b3d2b] pb-2">
                    1. Contact Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-gray-300 block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0a2117] border border-[#214a36] text-white text-xs rounded-lg p-2.5 focus:border-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-300 block mb-1">WhatsApp / Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +234 803 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#0a2117] border border-[#214a36] text-white text-xs rounded-lg p-2.5 focus:border-[#d4af37]"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Destination in Nigeria / Global */}
                <div className="space-y-3">
                  <h3 className="font-serif-luxury text-sm font-bold text-white border-b border-[#1b3d2b] pb-2">
                    2. Delivery Address (Nigeria & Worldwide)
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-gray-300 block mb-1">First Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Chief / Dr / Mr / Mrs"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-[#0a2117] border border-[#214a36] text-white text-xs rounded-lg p-2.5 focus:border-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-300 block mb-1">Last Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Surname"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-[#0a2117] border border-[#214a36] text-white text-xs rounded-lg p-2.5 focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-300 block mb-1">State / Destination *</label>
                    <select
                      value={formData.stateIndex}
                      onChange={(e) => setFormData({ ...formData, stateIndex: Number(e.target.value) })}
                      className="w-full bg-[#0a2117] border border-[#214a36] text-white text-xs rounded-lg p-2.5 focus:border-[#d4af37]"
                    >
                      {NIGERIAN_STATES.map((st, i) => (
                        <option key={i} value={i}>
                          {st.name} {rawSubtotal >= 150000 ? '(FREE Delivery)' : `(+₦${st.fee.toLocaleString()})`}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-gray-300 block mb-1">Street Address *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 15 Admiralty Way, Lekki Phase 1"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-[#0a2117] border border-[#214a36] text-white text-xs rounded-lg p-2.5 focus:border-[#d4af37]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-gray-300 block mb-1">Apartment / Estate / Landmark</label>
                      <input
                        type="text"
                        placeholder="e.g. Block C, Richmond Estate"
                        value={formData.apartment}
                        onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
                        className="w-full bg-[#0a2117] border border-[#214a36] text-white text-xs rounded-lg p-2.5 focus:border-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-300 block mb-1">City / Town *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Lekki / Ikeja / Maitama"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-[#0a2117] border border-[#214a36] text-white text-xs rounded-lg p-2.5 focus:border-[#d4af37]"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e6ca65] to-[#c5a059] text-[#091b13] font-extrabold text-sm hover:brightness-110 transition shadow-xl shadow-[#d4af37]/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Securing Royal Order...</span>
                  ) : (
                    <span>Complete Order • {currency.symbol}{grandTotalConverted.toLocaleString()}</span>
                  )}
                </button>

                <p className="text-[10px] text-gray-400 text-center flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                  256-Bit SSL Encrypted & Protected by Atelier Fit Guarantee
                </p>

              </div>

              {/* RIGHT: Order Summary Sidebar (5 Cols) */}
              <div className="lg:col-span-5 bg-[#06170f] rounded-xl border border-[#1b3e2d] p-4 sm:p-5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif-luxury text-sm font-bold text-white border-b border-[#1b3d2b] pb-2">
                    Order Summary ({items.reduce((s, i) => s + i.quantity, 0)} Items)
                  </h3>

                  {/* Items scroll */}
                  <div className="space-y-3 py-3 max-h-56 overflow-y-auto pr-1">
                    {items.map((it, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs">
                        <div className="w-12 h-14 rounded bg-[#0a2419] overflow-hidden shrink-0 border border-[#1e4834]">
                          <img src={it.images[0]} alt="" className="w-full h-full object-cover object-top" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-white line-clamp-1">{it.title}</h5>
                          <p className="text-[10px] text-gray-400">{it.selectedColor} • {it.selectedSize} (x{it.quantity})</p>
                        </div>
                        <span className="font-bold text-white">
                          {currency.symbol}{Math.round(it.price * it.quantity * currency.rate).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Calculations */}
                  <div className="space-y-2 pt-3 border-t border-[#183929] text-xs text-gray-300">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold text-white">{currency.symbol}{subtotalConverted.toLocaleString()}</span>
                    </div>

                    {discountConverted > 0 && (
                      <div className="flex justify-between text-emerald-400 font-semibold">
                        <span>VIP Discount (10%)</span>
                        <span>-{currency.symbol}{discountConverted.toLocaleString()}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span>Shipping to {selectedState.name.split(' ')[0]}</span>
                      {shippingFee === 0 ? (
                        <span className="text-emerald-400 font-bold uppercase">FREE</span>
                      ) : (
                        <span className="text-white font-semibold">{currency.symbol}{shippingConverted.toLocaleString()}</span>
                      )}
                    </div>

                    <div className="flex justify-between text-base font-extrabold text-white pt-2 border-t border-[#183929]">
                      <span>Grand Total</span>
                      <span className="text-[#f3e5ab]">{currency.symbol}{grandTotalConverted.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Atelier Contact Card */}
                <div className="p-3 rounded-lg bg-[#0a2419] border border-[#1f4a35] text-[11px] text-gray-300 space-y-1">
                  <span className="text-[#f3e5ab] font-bold block">Need Tailoring Guidance?</span>
                  <p>Our Head Stylist is available on WhatsApp: +234 803 892 4110.</p>
                </div>

              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
}

