import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { MarqueeTicker } from './components/MarqueeTicker';
import { CollectionFilter } from './components/CollectionFilter';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { BespokeStudioModal } from './components/BespokeStudioModal';
import { WishlistModal } from './components/WishlistModal';
import { EditorialSection } from './components/EditorialSection';
import { LookbookGallery } from './components/LookbookGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { WhatsAppConcierge } from './components/WhatsAppConcierge';
import { LiveSalesNotification } from './components/LiveSalesNotification';
import { Footer } from './components/Footer';
import { PRODUCTS, CURRENCIES, FAQ_LIST } from './data/fashionData';
import { Sparkles, Scissors, Crown, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export default function App() {
  // Global Currency State (Default: Nigerian Naira NGN ₦)
  const [currency, setCurrency] = useState(CURRENCIES.NGN);

  // Cart & Wishlist State
  const [cartItems, setCartItems] = useState([
    // Initial sample item for instant discovery
    {
      ...PRODUCTS[0],
      selectedColor: 'Royal Emerald & Gold',
      selectedSize: 'L (42-44)',
      quantity: 1,
      isBespoke: false
    }
  ]);
  const [wishlist, setWishlist] = useState([PRODUCTS[6]]); // pre-favorited Tiwa mermaid gown
  const [orderNote, setOrderNote] = useState('');
  const [discountCode, setDiscountCode] = useState('');

  // Modals visibility
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [bespokeOpen, setBespokeOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filters & Search
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'men', 'women', 'couples', 'hotsale'
  const [selectedOccasion, setSelectedOccasion] = useState('All Occasions');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  // FAQ Accordion
  const [openFaq, setOpenFaq] = useState(0);

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Gender / Category filter
    if (activeFilter === 'men') {
      result = result.filter(p => p.gender === 'men');
    } else if (activeFilter === 'women') {
      result = result.filter(p => p.gender === 'women');
    } else if (activeFilter === 'couples') {
      result = result.filter(p => p.gender === 'couples');
    } else if (activeFilter === 'hotsale') {
      result = result.filter(p => p.isHotSale);
    }

    // Occasion filter
    if (selectedOccasion !== 'All Occasions') {
      const occLower = selectedOccasion.toLowerCase();
      result = result.filter(p => p.occasion?.toLowerCase().includes(occLower));
    }

    // Search query filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.subtitle?.toLowerCase().includes(query) ||
        p.category?.toLowerCase().includes(query) ||
        p.fabric?.toLowerCase().includes(query)
      );
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeFilter, selectedOccasion, searchQuery, sortBy]);

  // Cart operations
  const handleAddToCart = (item) => {
    setCartItems(prev => {
      const existingIdx = prev.findIndex(
        i => i.id === item.id && i.selectedColor === item.selectedColor && i.selectedSize === item.selectedSize
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += item.quantity || 1;
        return updated;
      }
      return [...prev, item];
    });
    setCartOpen(true);
  };

  const handleUpdateQuantity = (index, newQty) => {
    if (newQty <= 0) {
      handleRemoveCartItem(index);
      return;
    }
    setCartItems(prev => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveCartItem = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  // Instant Buy from PDP
  const handleInstantBuy = (item) => {
    setCartItems([item]);
    setSelectedProduct(null);
    setCheckoutOpen(true);
  };

  // Wishlist toggle
  const handleToggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.some(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  // Calculate discount amount (10% if code is ARIYA10 or LAGOSVIP)
  const rawSubtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = (discountCode === 'ARIYA10' || discountCode === 'LAGOSVIP') ? rawSubtotal * 0.1 : 0;

  return (
    <div className="min-h-screen bg-[#06140e] text-[#e6ede9] flex flex-col font-sans selection:bg-[#d4af37] selection:text-[#06140e]">

      {/* 1. STICKY LUXURY NAVIGATION */}
      <Navbar
        cartCount={cartItems.reduce((sum, i) => sum + i.quantity, 0)}
        wishlistCount={wishlist.length}
        currency={currency}
        setCurrency={setCurrency}
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenBespoke={() => setBespokeOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* 2. HERO BANNER WITH NIGERIAN EDITORIAL PHOTOGRAPHY */}
      <HeroBanner
        onSelectCategory={(cat) => {
          setActiveFilter(cat);
          const el = document.getElementById('boutique-catalog');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenBespoke={() => setBespokeOpen(true)}
      />

      {/* 3. CONTINUOUS SCROLLING TICKER */}
      <MarqueeTicker />

      {/* 4. MAIN BOUTIQUE CATALOG */}
      <main id="boutique-catalog" className="w-full flex-1">

        {/* Collection Filter Bar */}
        <CollectionFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          selectedOccasion={selectedOccasion}
          setSelectedOccasion={setSelectedOccasion}
          sortBy={sortBy}
          setSortBy={setSortBy}
          totalResults={filteredProducts.length}
        />

        {/* Product Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#0a2318] flex items-center justify-center mx-auto text-gray-400 border border-[#204936]">
                <Crown className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-white">No garments match your search</h3>
              <p className="text-xs text-gray-400 max-w-sm mx-auto">
                Try clearing your search query or selecting "All Haute Couture" to view our complete bespoke archive.
              </p>
              <button
                onClick={() => { setActiveFilter('all'); setSelectedOccasion('All Occasions'); setSearchQuery(''); }}
                className="px-6 py-2.5 rounded-full bg-[#d4af37] text-black font-bold text-xs"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  currency={currency}
                  onQuickView={(p) => setSelectedProduct(p)}
                  onAddToCart={handleAddToCart}
                  isWishlisted={wishlist.some(w => w.id === product.id)}
                  onToggleWishlist={handleToggleWishlist}
                />
              ))}
            </div>
          )}
        </div>

        {/* 5. PRO FEATURE: BESPOKE STUDIO BANNER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#072418] via-[#0d3b28] to-[#072418] border border-[#27533f] p-8 sm:p-12 text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="max-w-xl space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#091f16] border border-[#d4af37]/50 text-[#f3e5ab] text-xs font-bold">
                <Scissors className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>BESPOKE MEASUREMENT ATELIER</span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Crafted to Your Exact Body Measurements in Lagos
              </h3>
              <p className="text-xs sm:text-sm text-[#cfdecb] leading-relaxed">
                Whether in Nigeria or the Diaspora, experience royal customization. Submit your measurements, choose Swiss voile or Aso-Oke, or book a live virtual measuring session with our Master Tailor.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-[#f3e5ab] font-medium">
                <span className="flex items-center gap-1">✓ No Extra Charge</span>
                <span className="flex items-center gap-1">✓ 100% Fit Guarantee</span>
                <span className="flex items-center gap-1">✓ 5-7 Days Dispatch</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={() => setBespokeOpen(true)}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e5c468] to-[#c5a059] text-[#091b13] font-extrabold text-sm hover:brightness-110 shadow-xl shadow-[#d4af37]/30 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Scissors className="w-4 h-4" />
                <span>Book Bespoke Fitting</span>
              </button>
              <a
                href="https://wa.me/2348038924110?text=Hello%20Ariya%20Couture,%20I%20would%20like%20to%20send%20my%20measurements%20for%20bespoke%20tailoring"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 rounded-full bg-[#0a2318] hover:bg-[#123826] text-white border border-[#2b5942] font-semibold text-xs flex items-center justify-center gap-2 transition whitespace-nowrap"
              >
                <span>WhatsApp Measurements</span>
              </a>
            </div>
          </div>
        </div>

        {/* 6. LOOKBOOK RUNWAY GALLERY */}
        <LookbookGallery
          onFilterByGender={(g) => {
            setActiveFilter(g);
            const el = document.getElementById('boutique-catalog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 7. EDITORIAL JOURNAL SECTION */}
        <EditorialSection
          onExploreCollection={() => {
            setActiveFilter('all');
            const el = document.getElementById('boutique-catalog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 8. CLIENT REVIEWS & TESTIMONIALS */}
        <ReviewsSection />

        {/* 9. FAQ ACCORDION SECTION */}
        <section className="w-full py-16 bg-[#06160f] border-b border-[#1b3e2d]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                Frequently Asked Questions
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mt-1">
                Everything You Need to Know About Ordering
              </h2>
            </div>

            <div className="space-y-3">
              {FAQ_LIST.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#1b3f2d] bg-[#091f16] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full p-4 text-left font-bold text-sm text-white flex items-center justify-between hover:bg-[#0d2a1e] transition cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-4 h-4 text-[#d4af37] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="p-4 pt-0 text-xs text-gray-300 leading-relaxed border-t border-[#143525]">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* 10. LUXURY FOOTER (WITH NEWSLETTER & COLLAPSIBLE MOBILE ACCORDIONS) */}
      <Footer
        onFilterCategory={(cat) => {
          setActiveFilter(cat);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBespoke={() => setBespokeOpen(true)}
      />

      {/* 11. FLOATING WHATSAPP STYLIST CONCIERGE & LIVE MOVING RECENT ACTIVITY TOAST */}
      <WhatsAppConcierge />
      <LiveSalesNotification />

      {/* 12. PRODUCT DETAIL MODAL (PDP) */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          currency={currency}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(item) => {
            handleAddToCart(item);
            setSelectedProduct(null);
          }}
          onInstantBuy={handleInstantBuy}
          isWishlisted={wishlist.some(w => w.id === selectedProduct.id)}
          onToggleWishlist={handleToggleWishlist}
          onSelectProduct={(p) => setSelectedProduct(p)}
          allProducts={PRODUCTS}
        />
      )}

      {/* 13. CART DRAWER (SLIDE-OVER) */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
        currency={currency}
        orderNote={orderNote}
        setOrderNote={setOrderNote}
        discountCode={discountCode}
        setDiscountCode={setDiscountCode}
        discountAmount={discountAmount}
      />

      {/* 14. CHECKOUT MODAL */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        items={cartItems}
        currency={currency}
        orderNote={orderNote}
        discountAmount={discountAmount}
        onOrderSuccess={() => {
          setCartItems([]);
          setDiscountCode('');
        }}
      />

      {/* 15. BESPOKE STUDIO MODAL */}
      <BespokeStudioModal
        isOpen={bespokeOpen}
        onClose={() => setBespokeOpen(false)}
      />

      {/* 16. WISHLIST MODAL */}
      <WishlistModal
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveWishlist={(id) => setWishlist(prev => prev.filter(p => p.id !== id))}
        onAddToCart={handleAddToCart}
        currency={currency}
      />

    </div>
  );
}
