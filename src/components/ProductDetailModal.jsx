import React, { useState } from 'react';
import { 
  X, Heart, Share2, Star, ShieldCheck, Truck, RefreshCw, 
  Scissors, Check, ChevronDown, ChevronUp, Ruler, Sparkles, Plus, Minus
} from 'lucide-react';

export function ProductDetailModal({
  product,
  currency,
  onClose,
  onAddToCart,
  onInstantBuy,
  isWishlisted,
  onToggleWishlist,
  onSelectProduct,
  allProducts
}) {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Standard');
  const [selectedSize, setSelectedSize] = useState('L (42-44)');
  const [quantity, setQuantity] = useState(1);
  const [sizingMode, setSizingMode] = useState('standard'); // 'standard' or 'bespoke'
  const [sizeChartOpen, setSizeChartOpen] = useState(false);
  const [sizeUnit, setSizeUnit] = useState('inches'); // 'inches' or 'cm'
  const [shareToast, setShareToast] = useState(false);

  // Accordion states
  const [accordionOpen, setAccordionOpen] = useState({
    details: true,
    care: false,
    delivery: false,
    reviews: true
  });

  // Custom Bespoke Measurements State
  const [bespokeData, setBespokeData] = useState({
    chestBust: '',
    shoulder: '',
    sleeve: '',
    waist: '',
    hip: '',
    length: '',
    capSize: '22.5',
    notes: '',
    requestVideoCall: false
  });

  // Review submission
  const [userReviews, setUserReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', location: '', rating: 5, comment: '' });
  const [showReviewForm, setShowReviewForm] = useState(false);

  const convertedPrice = Math.round(product.price * currency.rate);
  const convertedOriginal = product.originalPrice ? Math.round(product.originalPrice * currency.rate) : null;
  const totalPrice = convertedPrice * quantity;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: `Look at this handcrafted masterpiece from Àríyá Couture Lagos: ${product.title}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShareToast(true);
      setTimeout(() => setShareToast(false), 2500);
    }
  };

  const handleAdd = () => {
    onAddToCart({
      ...product,
      selectedColor,
      selectedSize: sizingMode === 'bespoke' ? 'Custom Bespoke Fit' : selectedSize,
      quantity,
      isBespoke: sizingMode === 'bespoke',
      bespokeDetails: sizingMode === 'bespoke' ? bespokeData : null
    });
  };

  const handleBuyNow = () => {
    onInstantBuy({
      ...product,
      selectedColor,
      selectedSize: sizingMode === 'bespoke' ? 'Custom Bespoke Fit' : selectedSize,
      quantity,
      isBespoke: sizingMode === 'bespoke',
      bespokeDetails: sizingMode === 'bespoke' ? bespokeData : null
    });
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;
    setUserReviews([
      {
        ...newReview,
        id: Date.now(),
        date: 'Just now',
        verified: true
      },
      ...userReviews
    ]);
    setNewReview({ name: '', location: '', rating: 5, comment: '' });
    setShowReviewForm(false);
  };

  const toggleAccordion = (key) => {
    setAccordionOpen(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const STANDARD_SIZES = [
    { label: 'XS (36)', desc: 'Chest 34-36 / Bust 32' },
    { label: 'S (38)', desc: 'Chest 38 / Bust 34' },
    { label: 'M (40)', desc: 'Chest 40 / Bust 36' },
    { label: 'L (42-44)', desc: 'Chest 42-44 / Bust 38' },
    { label: 'XL (46)', desc: 'Chest 46 / Bust 40-42' },
    { label: '2XL (48-50)', desc: 'Chest 48-50 / Bust 44' },
    { label: '3XL (52)', desc: 'Chest 52+ / Bust 46+' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl bg-[#081a13] border border-[#234d38] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#1b3e2d] bg-[#071610]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#d4af37]">
              Àríyá Atelier • Product Detail
            </span>
            {product.badge && (
              <span className="text-[10px] bg-[#123826] text-[#f3e5ab] px-2 py-0.5 rounded-full border border-[#2b5942]">
                {product.badge}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-full bg-[#0e271c] hover:bg-[#163f2d] text-gray-300 hover:text-white transition"
              title="Share Design"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#0e271c] hover:bg-[#163f2d] text-gray-300 hover:text-white transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Share Toast Notification */}
        {shareToast && (
          <div className="absolute top-14 right-6 z-50 bg-[#d4af37] text-black font-bold text-xs px-4 py-2 rounded-lg shadow-xl animate-bounce">
            ✓ Link copied to clipboard!
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT: Multi-image Gallery */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              
              {/* Main Active Large Photo */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#0d261b] border border-[#1b3d2b] shadow-xl">
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover object-top transition-all duration-500"
                />
                
                {/* Image Counter Pill (e.g. 1/3) */}
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full border border-white/20 font-semibold">
                  {activeImageIndex + 1} / {product.images.length}
                </div>

                {/* Wishlist Button Overlay */}
                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition shadow-md ${
                    isWishlisted ? 'bg-[#c25e1a] text-white' : 'bg-black/60 text-white hover:text-[#d4af37]'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Thumbnail Selector Grid */}
              <div className="grid grid-cols-4 gap-2.5">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`aspect-[3/4] rounded-lg overflow-hidden border-2 transition cursor-pointer ${
                      activeImageIndex === idx 
                        ? 'border-[#d4af37] ring-2 ring-[#d4af37]/30 scale-[1.02]' 
                        : 'border-[#1b3d2b] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>

              {/* Bespoke Craftsmanship Guarantee Box */}
              <div className="p-4 rounded-xl bg-[#0b2419] border border-[#1d4c35] text-xs text-gray-300 space-y-2">
                <div className="flex items-center gap-2 text-[#f3e5ab] font-bold">
                  <Scissors className="w-4 h-4 text-[#d4af37]" />
                  <span>The Àríyá Atelier Handcraft Promise</span>
                </div>
                <p className="text-[11px] leading-relaxed text-gray-400">
                  Every seam is reinforced with silk-bonded thread. Made by veteran Nigerian tailors with over 20 years of bespoke experience in Lagos and Ibadan.
                </p>
              </div>
            </div>

            {/* RIGHT: Product Info & Configuration */}
            <div className="lg:col-span-6 flex flex-col gap-5 text-left">
              
              {/* Title & Ratings */}
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] text-[#d4af37] uppercase tracking-wider font-semibold">
                    {product.gender === 'men' ? "Men's Royal Collection" : product.gender === 'women' ? "Women's Haute Couture" : "Couple & Bridal Ensemble"}
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-[11px] text-gray-400">SKU: {product.id.toUpperCase()}</span>
                </div>

                <h1 className="font-serif-luxury text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                  {product.title}
                </h1>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  {product.subtitle}
                </p>

                {/* Rating Stars */}
                <div className="flex items-center gap-2 mt-2.5">
                  <div className="flex items-center text-[#d4af37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-white">{product.rating}</span>
                  <span className="text-xs text-gray-400">({product.reviewsCount} verified reviews)</span>
                </div>
              </div>

              {/* Price Block */}
              <div className="p-4 rounded-xl bg-[#0a2318] border border-[#214c37] flex items-baseline justify-between">
                <div>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white">
                      {currency.symbol}{convertedPrice.toLocaleString()}
                    </span>
                    {convertedOriginal && (
                      <span className="text-sm text-gray-400 line-through">
                        {currency.symbol}{convertedOriginal.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-emerald-400 font-medium">
                    Taxes included. Free doorstep delivery over ₦150,000.
                  </span>
                </div>

                <div className="text-right">
                  <span className="inline-block px-2 py-1 rounded bg-[#d4af37]/20 text-[#f3e5ab] text-[10px] font-bold border border-[#d4af37]/40 uppercase">
                    In Stock & Custom Order
                  </span>
                </div>
              </div>

              {/* Color Swatch Picker */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-2">
                    Colorway: <span className="text-[#f3e5ab] font-bold">{selectedColor}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-2 transition cursor-pointer ${
                          selectedColor === c.name
                            ? 'border-[#d4af37] bg-[#143a29] text-white shadow-md'
                            : 'border-[#224836] bg-[#0c2218] text-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: c.hex }} />
                        <span>{c.name}</span>
                        {selectedColor === c.name && <Check className="w-3 h-3 text-[#d4af37]" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sizing Mode Selection Toggle (New Feature!) */}
              <div className="p-1 rounded-xl bg-[#06170f] border border-[#1b3d2b] flex items-center">
                <button
                  onClick={() => setSizingMode('standard')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
                    sizingMode === 'standard'
                      ? 'bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#091b13] shadow'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Standard Ready-to-Wear (XS - 3XL)
                </button>
                <button
                  onClick={() => setSizingMode('bespoke')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition ${
                    sizingMode === 'bespoke'
                      ? 'bg-gradient-to-r from-[#174631] to-[#1e583e] text-[#f3e5ab] border border-[#d4af37] shadow'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Scissors className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>✂️ Custom Bespoke Tailoring</span>
                </button>
              </div>

              {/* STANDARD SIZING VIEW */}
              {sizingMode === 'standard' && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-semibold text-gray-300">
                      Select Size: <span className="text-white font-bold">{selectedSize}</span>
                    </label>
                    <button
                      onClick={() => setSizeChartOpen(!sizeChartOpen)}
                      className="text-xs text-[#d4af37] hover:underline flex items-center gap-1 font-medium"
                    >
                      <Ruler className="w-3.5 h-3.5" />
                      <span>{sizeChartOpen ? 'Hide Size Chart' : 'View Nigerian Size Chart'}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
                    {STANDARD_SIZES.map((s) => (
                      <button
                        key={s.label}
                        onClick={() => setSelectedSize(s.label)}
                        className={`py-2 px-1 rounded-lg text-xs font-bold border transition text-center cursor-pointer ${
                          selectedSize === s.label
                            ? 'border-[#d4af37] bg-[#174431] text-[#f3e5ab] ring-1 ring-[#d4af37]'
                            : 'border-[#214a36] bg-[#0c2218] text-gray-300 hover:bg-[#123123]'
                        }`}
                        title={s.desc}
                      >
                        {s.label.split(' ')[0]}
                      </button>
                    ))}
                  </div>

                  {/* Size Chart Modal / Accordion Table */}
                  {sizeChartOpen && (
                    <div className="mt-3 p-3.5 rounded-xl bg-[#06170f] border border-[#234d38] text-xs">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1b3d2b]">
                        <span className="font-bold text-white">Size Guide (Nigeria / UK / US)</span>
                        <div className="flex items-center gap-1 text-[11px]">
                          <button
                            onClick={() => setSizeUnit('inches')}
                            className={`px-2 py-0.5 rounded ${sizeUnit === 'inches' ? 'bg-[#d4af37] text-black font-bold' : 'text-gray-400'}`}
                          >
                            Inches
                          </button>
                          <button
                            onClick={() => setSizeUnit('cm')}
                            className={`px-2 py-0.5 rounded ${sizeUnit === 'cm' ? 'bg-[#d4af37] text-black font-bold' : 'text-gray-400'}`}
                          >
                            CM
                          </button>
                        </div>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-[11px] text-left text-gray-300">
                          <thead>
                            <tr className="border-b border-[#1a382a] text-[#f3e5ab]">
                              <th className="py-1">Size</th>
                              <th>Bust / Chest</th>
                              <th>Waist</th>
                              <th>Hips</th>
                              <th>Agbada/Gown Length</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#132c21]">
                            <tr>
                              <td className="py-1 font-semibold text-white">XS (36)</td>
                              <td>{sizeUnit === 'inches' ? '34-36"' : '86-91 cm'}</td>
                              <td>{sizeUnit === 'inches' ? '28-30"' : '71-76 cm'}</td>
                              <td>{sizeUnit === 'inches' ? '36-38"' : '91-96 cm'}</td>
                              <td>{sizeUnit === 'inches' ? '58"' : '147 cm'}</td>
                            </tr>
                            <tr>
                              <td className="py-1 font-semibold text-white">S (38)</td>
                              <td>{sizeUnit === 'inches' ? '36-38"' : '91-96 cm'}</td>
                              <td>{sizeUnit === 'inches' ? '30-32"' : '76-81 cm'}</td>
                              <td>{sizeUnit === 'inches' ? '38-40"' : '96-101 cm'}</td>
                              <td>{sizeUnit === 'inches' ? '59"' : '150 cm'}</td>
                            </tr>
                            <tr>
                              <td className="py-1 font-semibold text-white">M (40)</td>
                              <td>{sizeUnit === 'inches' ? '38-40"' : '96-101 cm'}</td>
                              <td>{sizeUnit === 'inches' ? '32-34"' : '81-86 cm'}</td>
                              <td>{sizeUnit === 'inches' ? '40-42"' : '101-106 cm'}</td>
                              <td>{sizeUnit === 'inches' ? '60"' : '152 cm'}</td>
                            </tr>
                            <tr>
                              <td className="py-1 font-semibold text-white">L (42-44)</td>
                              <td>{sizeUnit === 'inches' ? '41-43"' : '104-109 cm'}</td>
                              <td>{sizeUnit === 'inches' ? '35-37"' : '89-94 cm'}</td>
                              <td>{sizeUnit === 'inches' ? '43-45"' : '109-114 cm'}</td>
                              <td>{sizeUnit === 'inches' ? '61"' : '155 cm'}</td>
                            </tr>
                            <tr>
                              <td className="py-1 font-semibold text-white">XL (46)</td>
                              <td>{sizeUnit === 'inches' ? '44-46"' : '112-117 cm'}</td>
                              <td>{sizeUnit === 'inches' ? '38-40"' : '96-101 cm'}</td>
                              <td>{sizeUnit === 'inches' ? '46-48"' : '117-122 cm'}</td>
                              <td>{sizeUnit === 'inches' ? '62"' : '157 cm'}</td>
                            </tr>
                            <tr>
                              <td className="py-1 font-semibold text-white">2XL (48-50)</td>
                              <td>{sizeUnit === 'inches' ? '47-50"' : '119-127 cm'}</td>
                              <td>{sizeUnit === 'inches' ? '41-44"' : '104-112 cm'}</td>
                              <td>{sizeUnit === 'inches' ? '49-52"' : '124-132 cm'}</td>
                              <td>{sizeUnit === 'inches' ? '62"' : '157 cm'}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* BESPOKE CUSTOM MEASUREMENTS FORM (New Feature!) */}
              {sizingMode === 'bespoke' && (
                <div className="p-4 rounded-xl bg-[#092218] border border-[#d4af37]/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#f3e5ab] flex items-center gap-1.5">
                      <Scissors className="w-4 h-4 text-[#d4af37]" /> Custom Body Measurements (Inches)
                    </span>
                    <span className="text-[10px] bg-[#d4af37] text-black font-extrabold px-2 py-0.5 rounded">
                      NO EXTRA CHARGE
                    </span>
                  </div>

                  <p className="text-[11px] text-gray-300">
                    Input your measurements below. Our Master Tailor will cross-check before cutting. If you don't know your exact numbers, tick the Video Call box!
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    <div>
                      <label className="text-[10px] text-gray-400 block mb-1">Chest / Bust (in)</label>
                      <input
                        type="text"
                        placeholder="e.g. 42"
                        value={bespokeData.chestBust}
                        onChange={(e) => setBespokeData({ ...bespokeData, chestBust: e.target.value })}
                        className="w-full bg-[#06170f] border border-[#214a36] text-white rounded px-2.5 py-1.5 text-xs focus:border-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400 block mb-1">Shoulder Width (in)</label>
                      <input
                        type="text"
                        placeholder="e.g. 19.5"
                        value={bespokeData.shoulder}
                        onChange={(e) => setBespokeData({ ...bespokeData, shoulder: e.target.value })}
                        className="w-full bg-[#06170f] border border-[#214a36] text-white rounded px-2.5 py-1.5 text-xs focus:border-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400 block mb-1">Sleeve Length (in)</label>
                      <input
                        type="text"
                        placeholder="e.g. 26"
                        value={bespokeData.sleeve}
                        onChange={(e) => setBespokeData({ ...bespokeData, sleeve: e.target.value })}
                        className="w-full bg-[#06170f] border border-[#214a36] text-white rounded px-2.5 py-1.5 text-xs focus:border-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400 block mb-1">Waist (in)</label>
                      <input
                        type="text"
                        placeholder="e.g. 34"
                        value={bespokeData.waist}
                        onChange={(e) => setBespokeData({ ...bespokeData, waist: e.target.value })}
                        className="w-full bg-[#06170f] border border-[#214a36] text-white rounded px-2.5 py-1.5 text-xs focus:border-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400 block mb-1">Trouser / Gown Length (in)</label>
                      <input
                        type="text"
                        placeholder="e.g. 42 / 60"
                        value={bespokeData.length}
                        onChange={(e) => setBespokeData({ ...bespokeData, length: e.target.value })}
                        className="w-full bg-[#06170f] border border-[#214a36] text-white rounded px-2.5 py-1.5 text-xs focus:border-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400 block mb-1">Fila/Cap Size (in)</label>
                      <input
                        type="text"
                        placeholder="e.g. 22.5"
                        value={bespokeData.capSize}
                        onChange={(e) => setBespokeData({ ...bespokeData, capSize: e.target.value })}
                        className="w-full bg-[#06170f] border border-[#214a36] text-white rounded px-2.5 py-1.5 text-xs focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <label className="flex items-center gap-2 pt-1 text-xs text-[#f3e5ab] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={bespokeData.requestVideoCall}
                      onChange={(e) => setBespokeData({ ...bespokeData, requestVideoCall: e.target.checked })}
                      className="accent-[#d4af37] w-4 h-4 rounded"
                    />
                    <span>Schedule a complimentary WhatsApp video measuring call with Master Tailor</span>
                  </label>
                </div>
              )}

              {/* Quantity Stepper & CTA Buttons */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-[#224b37] rounded-xl bg-[#092016] text-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3.5 py-2 hover:bg-[#123826] transition rounded-l-xl text-gray-300 hover:text-white"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-4 py-2 font-bold text-sm min-w-[36px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3.5 py-2 hover:bg-[#123826] transition rounded-r-xl text-gray-300 hover:text-white"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={handleAdd}
                    className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c468] to-[#c5a059] text-[#091b13] font-bold text-sm hover:brightness-110 transition shadow-lg shadow-[#d4af37]/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Add to Bag • {currency.symbol}{totalPrice.toLocaleString()}</span>
                  </button>
                </div>

                <button
                  onClick={handleBuyNow}
                  className="w-full py-3 px-6 rounded-xl bg-[#0e3122] hover:bg-[#174631] text-white font-bold text-sm border border-[#2e6b4c] hover:border-[#d4af37] transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#d4af37]" />
                  <span>Instant VIP Checkout</span>
                </button>
              </div>

              {/* Value Props Strip */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-[#183d2c] text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Free Nigeria delivery over ₦150k</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>100% Bespoke Fit Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Free Atelier alterations within 14d</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Handcrafted in Victoria Island</span>
                </div>
              </div>

              {/* Expandable Accordions: Details, Fabric, Delivery, Reviews */}
              <div className="space-y-2 text-xs">
                
                {/* Details Accordion */}
                <div className="border border-[#193d2c] rounded-xl overflow-hidden bg-[#071911]">
                  <button
                    onClick={() => toggleAccordion('details')}
                    className="w-full px-4 py-3 text-left font-bold text-gray-200 flex items-center justify-between hover:bg-[#0c2419] transition"
                  >
                    <span>Garment Description & Specifications</span>
                    {accordionOpen.details ? <ChevronUp className="w-4 h-4 text-[#d4af37]" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                  </button>
                  {accordionOpen.details && (
                    <div className="p-4 pt-0 text-gray-300 space-y-2 border-t border-[#143224]">
                      <p className="leading-relaxed">{product.description}</p>
                      <ul className="list-disc pl-4 space-y-1 text-[11px] text-gray-400">
                        {product.details?.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                        <li>Fabric: {product.fabric}</li>
                        <li>Recommended Occasion: {product.occasion}</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Delivery Accordion */}
                <div className="border border-[#193d2c] rounded-xl overflow-hidden bg-[#071911]">
                  <button
                    onClick={() => toggleAccordion('delivery')}
                    className="w-full px-4 py-3 text-left font-bold text-gray-200 flex items-center justify-between hover:bg-[#0c2419] transition"
                  >
                    <span>Delivery Timelines & Global Shipping</span>
                    {accordionOpen.delivery ? <ChevronUp className="w-4 h-4 text-[#d4af37]" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                  </button>
                  {accordionOpen.delivery && (
                    <div className="p-4 pt-0 text-gray-300 space-y-2 border-t border-[#143224] text-[11px]">
                      <p><strong className="text-white">Lagos & Abuja:</strong> 24-48 hours delivery for ready-to-wear.</p>
                      <p><strong className="text-white">Other Nigerian States:</strong> 2-3 business days via GIG Logistics or Speedaf.</p>
                      <p><strong className="text-white">UK, USA, Canada & Diaspora:</strong> 3-5 business days via DHL Express tracked delivery.</p>
                      <p><strong className="text-white">Custom Bespoke Orders:</strong> 5-7 business days for hand-tailoring.</p>
                    </div>
                  )}
                </div>

                {/* Customer Reviews Accordion */}
                <div className="border border-[#193d2c] rounded-xl overflow-hidden bg-[#071911]">
                  <button
                    onClick={() => toggleAccordion('reviews')}
                    className="w-full px-4 py-3 text-left font-bold text-gray-200 flex items-center justify-between hover:bg-[#0c2419] transition"
                  >
                    <span>Customer Reviews ({product.reviewsCount + userReviews.length})</span>
                    {accordionOpen.reviews ? <ChevronUp className="w-4 h-4 text-[#d4af37]" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                  </button>
                  {accordionOpen.reviews && (
                    <div className="p-4 pt-0 text-gray-300 space-y-3 border-t border-[#143224]">
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Star className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                          <span className="font-bold text-white text-sm">{product.rating} out of 5</span>
                        </div>
                        <button
                          onClick={() => setShowReviewForm(!showReviewForm)}
                          className="px-3 py-1 rounded-md bg-[#163f2d] hover:bg-[#1e543c] text-[#f3e5ab] text-xs font-semibold border border-[#2b5d44] transition"
                        >
                          Write a Review
                        </button>
                      </div>

                      {/* Write Review Form */}
                      {showReviewForm && (
                        <form onSubmit={handleAddReview} className="p-3 rounded-lg bg-[#0a2318] border border-[#214c37] space-y-2">
                          <div className="grid grid-cols-2 gap-2">
                            <input
                              type="text"
                              placeholder="Your Name (e.g. Chief Adeleke)"
                              value={newReview.name}
                              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                              required
                              className="bg-[#06170f] border border-[#1b3d2b] rounded px-2.5 py-1.5 text-xs text-white"
                            />
                            <input
                              type="text"
                              placeholder="City (e.g. Lekki, Lagos)"
                              value={newReview.location}
                              onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                              className="bg-[#06170f] border border-[#1b3d2b] rounded px-2.5 py-1.5 text-xs text-white"
                            />
                          </div>
                          <div>
                            <select
                              value={newReview.rating}
                              onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                              className="bg-[#06170f] border border-[#1b3d2b] rounded px-2.5 py-1.5 text-xs text-white w-full"
                            >
                              <option value="5">★★★★★ (5 Stars - Exceptional)</option>
                              <option value="4">★★★★☆ (4 Stars - Great Quality)</option>
                              <option value="3">★★★☆☆ (3 Stars - Good)</option>
                            </select>
                          </div>
                          <textarea
                            placeholder="Share your experience with this design, fabric feel, or tailoring fit..."
                            value={newReview.comment}
                            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                            rows="2"
                            required
                            className="bg-[#06170f] border border-[#1b3d2b] rounded px-2.5 py-1.5 text-xs text-white w-full"
                          />
                          <button
                            type="submit"
                            className="w-full py-1.5 bg-[#d4af37] text-black font-bold rounded text-xs hover:brightness-110"
                          >
                            Submit Review
                          </button>
                        </form>
                      )}

                      {/* Submitted & Default Reviews */}
                      <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                        {userReviews.map((rev) => (
                          <div key={rev.id} className="p-2.5 rounded-lg bg-[#061911] border border-[#1a3f2d] text-xs">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-bold text-white">{rev.name}</span>
                              <span className="text-[10px] text-gray-400">{rev.date}</span>
                            </div>
                            <div className="flex text-[#d4af37] text-[10px] mb-1">
                              {'★'.repeat(rev.rating)}
                            </div>
                            <p className="text-gray-300 text-[11px]">{rev.comment}</p>
                          </div>
                        ))}

                        <div className="p-2.5 rounded-lg bg-[#061911] border border-[#1a3f2d] text-xs">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-white">Chief Olumide B.</span>
                            <span className="text-[10px] text-gray-400">Verified Lagos Buyer</span>
                          </div>
                          <div className="flex text-[#d4af37] text-[10px] mb-1">★★★★★</div>
                          <p className="text-gray-300 text-[11px]">
                            "The fabric is immaculate and weight is top-notch. Received compliments from everyone at Eko Hotel."
                          </p>
                        </div>
                      </div>

                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>

          {/* RECENTLY VIEWED / MATCHING RECOMMENDATIONS */}
          <div className="mt-12 pt-8 border-t border-[#183c2a]">
            <h3 className="font-serif-luxury text-lg font-bold text-white mb-4">
              Complete The Look • You May Also Love
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {allProducts
                .filter(p => p.id !== product.id)
                .slice(0, 4)
                .map((rec) => {
                  const recPrice = Math.round(rec.price * currency.rate);
                  return (
                    <div
                      key={rec.id}
                      onClick={() => onSelectProduct(rec)}
                      className="group p-2 rounded-xl bg-[#06170f] border border-[#163827] hover:border-[#d4af37]/60 transition cursor-pointer flex flex-col justify-between"
                    >
                      <div className="aspect-[3/4] rounded-lg overflow-hidden bg-[#0d261b] mb-2">
                        <img src={rec.images[0]} alt={rec.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition" />
                      </div>
                      <h4 className="font-medium text-xs text-white line-clamp-1 group-hover:text-[#d4af37]">
                        {rec.title}
                      </h4>
                      <p className="text-[11px] font-bold text-[#f3e5ab] mt-1">
                        {currency.symbol}{recPrice.toLocaleString()}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

