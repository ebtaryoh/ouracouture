export const CURRENCIES = {
  NGN: { symbol: '₦', rate: 1, label: 'NGN (₦)', code: 'NGN' },
  USD: { symbol: '$', rate: 0.00067, label: 'USD ($)', code: 'USD' },
  GBP: { symbol: '£', rate: 0.00053, label: 'GBP (£)', code: 'GBP' },
  EUR: { symbol: '€', rate: 0.00062, label: 'EUR (€)', code: 'EUR' },
};

export const NIGERIAN_STATES = [
  { name: 'Lagos - Island (Ikoyi, V.I, Lekki, Ajah)', fee: 3500 },
  { name: 'Lagos - Mainland (Ikeja, Surulere, Yaba, Gbagada)', fee: 4000 },
  { name: 'Abuja (FCT - Maitama, Wuse, Garki, Asokoro)', fee: 5500 },
  { name: 'Rivers (Port Harcourt & Environs)', fee: 6500 },
  { name: 'Oyo (Ibadan City & Surroundings)', fee: 5000 },
  { name: 'Edo (Benin City)', fee: 5500 },
  { name: 'Delta (Warri, Asaba)', fee: 6000 },
  { name: 'Anambra (Awka, Onitsha)', fee: 6000 },
  { name: 'Enugu (Enugu Urban)', fee: 6000 },
  { name: 'Kano (Kano Metropolis)', fee: 7000 },
  { name: 'Kaduna (Kaduna Urban)', fee: 7000 },
  { name: 'Ogun (Abeokuta, Sagamu, Mowe)', fee: 4500 },
  { name: 'International - UK / London (DHL Express 3-5 days)', fee: 45000 },
  { name: 'International - USA / Canada (DHL Express 3-5 days)', fee: 55000 },
  { name: 'International - Europe / Schengen (DHL Express 3-5 days)', fee: 48000 },
];

export const BANK_DETAILS = {
  bankName: 'Guaranty Trust Bank (GTBank)',
  accountName: 'ARIYA COUTURE NIGERIA LTD',
  accountNumber: '0284719204',
  sortCode: '058152062',
  secondaryBank: {
    bankName: 'Zenith Bank PLC',
    accountName: 'ARIYA COUTURE BESPOKE LTD',
    accountNumber: '1018472911',
  }
};

export const ATELIERS = [
  {
    city: 'Lagos Atelier (Flagship)',
    address: 'Plot 14B, Adeola Odeku Street, Victoria Island, Lagos',
    phone: '+234 803 892 4110',
    hours: 'Mon - Sat: 9:00 AM - 7:00 PM (Appointments Preferred)',
    email: 'atelier.lagos@ariyacouture.ng'
  },
  {
    city: 'Abuja VIP Studio',
    address: 'Suite 204, Gana Street, Maitama Luxury District, Abuja',
    phone: '+234 814 550 7820',
    hours: 'Tue - Sun: 10:00 AM - 6:00 PM',
    email: 'atelier.abuja@ariyacouture.ng'
  },
  {
    city: 'London Private Suite',
    address: '28 Berkeley Square, Mayfair, London W1J 6EN (Diaspora Fittings)',
    phone: '+44 20 7946 0912',
    hours: 'By Appointment Only',
    email: 'london@ariyacouture.ng'
  }
];

export const PRODUCTS = [
  // MEN'S LUXURY NIGERIAN COUTURE (AUTHENTIC BLACK NIGERIAN GENTLEMEN)
  {
    id: 'men-agbada-emerald',
    title: 'The Ooni Royal Hand-Embroidered 3-Piece Agbada Set',
    subtitle: 'Includes Grand Agbada, Kaftan Tunic, Trousers & Monogrammed Fila Cap',
    gender: 'men',
    category: 'agbada',
    price: 185000,
    originalPrice: 220000,
    rating: 4.9,
    reviewsCount: 124,
    badge: '👑 Royal Masterpiece',
    isBestseller: true,
    isHotSale: true,
    images: [
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&auto=format&fit=crop&q=85',
    ],
    colors: [
      { name: 'Royal Emerald & Gold', hex: '#0f3c2b' },
      { name: 'Midnight Obsidian Black', hex: '#111827' },
      { name: 'Imperial Wine Burgundy', hex: '#4a0e17' },
      { name: 'Pure Alabaster White', hex: '#f8fafc' },
    ],
    fabric: '100% Premium Swiss Cotton Voile with Gold Bullion Thread Work',
    occasion: 'Owanbe Wedding, Coronation, Dignitary Gala',
    leadTime: 'Bespoke Tailoring: 5-7 business days. Ready sizes dispatch in 24 hours.',
    description: 'Impeccably tailored for the distinguished Nigerian man. Features traditional chevron bullion embroidery on heavy-weight Swiss cotton voile with a dramatic drape that commands respect across any hall.',
    details: [
      '3-Piece Set: Free-flowing Grand Agbada, Tailored Kaftan, and Slim-cut Drawstring Trousers',
      'Hand-finished gold bullion crest on chest & back cape',
      'Includes matching hand-woven Fila cap',
      'Available in standard sizes or 100% custom bespoke measurements',
      'Tailored by Master Artisans in our Victoria Island Atelier'
    ]
  },
  {
    id: 'men-senator-midnight',
    title: 'The Lekki Midnight Obsidian 2-Piece Bespoke Senator Suit',
    subtitle: 'Hand-Finished Geometric Placket with Asymmetrical Pocket Detail',
    gender: 'men',
    category: 'senator',
    price: 98000,
    originalPrice: 125000,
    rating: 4.8,
    reviewsCount: 96,
    badge: '⚡ VIP Bespoke',
    isBestseller: true,
    isHotSale: false,
    images: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1000&auto=format&fit=crop&q=85',
    ],
    colors: [
      { name: 'Midnight Obsidian', hex: '#131b23' },
      { name: 'Charcoal Slate', hex: '#334155' },
      { name: 'Deep Royal Navy', hex: '#1e3a5f' },
      { name: 'Sage Olive Green', hex: '#2d3d34' },
    ],
    fabric: 'Super 160s Italian Cashmere Wool Blend (All-Weather Breathable)',
    occasion: 'Executive Boardroom, Church, Sunday Elegance, Evening Cocktails',
    leadTime: 'Dispatch in 48 hours. Bespoke fit: 5 days.',
    description: 'The definitive standard for contemporary Nigerian gentleman dressing. Sculpted with precision shoulder lines, concealed zipper closure, and signature geometric micro-embroidery along the chest.',
    details: [
      '2-Piece: Structured longline tunic with tapered trousers',
      'Wrinkle-resistant cashmere blend designed for humid climates',
      'Concealed placket with gold metallic accent buttons',
      'Deep functional side pockets and chest pocket square slot',
      'Full satin interior half-lining for smooth drape'
    ]
  },
  {
    id: 'men-kaftan-wine',
    title: 'The Sultan Imperial Wine Velvet & Silk Kaftan',
    subtitle: 'Gilded Collar Trim with Matching Hand-Woven Aso-Oke Fila',
    gender: 'men',
    category: 'senator',
    price: 135000,
    originalPrice: 160000,
    rating: 5.0,
    reviewsCount: 78,
    badge: '✨ Limited Edition',
    isBestseller: false,
    isHotSale: true,
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=1000&auto=format&fit=crop&q=85',
    ],
    colors: [
      { name: 'Imperial Wine', hex: '#581825' },
      { name: 'Royal Gold Ochre', hex: '#c59b27' },
      { name: 'Deep Emerald', hex: '#0f3829' },
    ],
    fabric: 'Crushed Silk Velvet & Hand-Dyed Silk Lining',
    occasion: 'Traditional Wedding Groom, Chieftaincy, Birthday Milestone',
    leadTime: 'Handmade to order: 6 days.',
    description: 'Rich, luxurious crushed velvet with liquid sheen that catches ambient light magnificently. Finished with hand-couched metallic rope work on mandarin collar and cuffs.',
    details: [
      'Regal silhouette with subtle side-slits for effortless movement',
      'Includes complimentary luxury Aso-Oke Fila cap',
      'Heavy drape for a commanding presence',
      'Custom sizing option with 1-on-1 tailor consultation'
    ]
  },
  {
    id: 'men-white-monarch',
    title: 'The Ikoyi Pure White & Silver Grand Agbada',
    subtitle: 'Triple-Layered Royal Embroidery with Pristine Pearl Finish',
    gender: 'men',
    category: 'agbada',
    price: 195000,
    originalPrice: 240000,
    rating: 4.9,
    reviewsCount: 65,
    badge: '🤍 Groom Favorite',
    isBestseller: true,
    isHotSale: false,
    images: [
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=1000&auto=format&fit=crop&q=85',
    ],
    colors: [
      { name: 'Pristine Snow White', hex: '#fcfcfc' },
      { name: 'Champagne Cream', hex: '#f3e8d2' },
    ],
    fabric: 'Authentic 7-Star Swiss Cotton Jacquard with Silver Lurex Embroidery',
    occasion: 'White Traditional Wedding, Dedication, Royal Thanksgiving',
    leadTime: 'Bespoke handcraft: 5-7 days.',
    description: 'Worn by prominent grooms and dignitaries. Crafted from crisp, starch-retaining pure white Swiss jacquard that maintains razor-sharp folds throughout your celebrations.',
    details: [
      'Full 3-piece set with silver lurex thread embroidery',
      'Reinforced neckband to prevent sagging',
      'Custom monograms available inside collar',
      'Includes protective branded garment bag & hanger'
    ]
  },
  {
    id: 'men-asooke-purple',
    title: 'The Royal Benin Hand-Woven Aso-Oke Agbada Masterpiece',
    subtitle: 'Centuries-Old Loom Technique with Modern Sculptural Cut',
    gender: 'men',
    category: 'agbada',
    price: 260000,
    originalPrice: 310000,
    rating: 5.0,
    reviewsCount: 42,
    badge: '🏛️ Heritage Loom',
    isBestseller: false,
    isHotSale: false,
    images: [
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=1000&auto=format&fit=crop&q=85',
    ],
    colors: [
      { name: 'Royal Purple & Silver', hex: '#4c1d95' },
      { name: 'Benin Bronze & Ochre', hex: '#92400e' },
    ],
    fabric: 'Authentic Hand-Woven Alaari Aso-Oke by Yoruba Master Weavers',
    occasion: 'Traditional Wedding Ceremony, Royal Coronation, Cultural Gala',
    leadTime: 'Artisanal handcraft: 10 business days.',
    description: 'A genuine collector garment. Woven on traditional wooden looms in Iseyin and tailored in Lagos, this Agbada bridges royal history and contemporary international menswear.',
    details: [
      'Heavyweight 100% raw silk and cotton weave',
      'Hand-stitched perimeter picot edging',
      'Passed down through generations as heirloom piece',
      'Certificate of authenticity signed by Master Tailor'
    ]
  },
  {
    id: 'men-fusion-ankara',
    title: 'The Victoria Island Afro-Fusion Velvet & Ankara Blazer Set',
    subtitle: 'Tailored Peak Lapel Jacket with Silk Trouser Set',
    gender: 'men',
    category: 'contemporary',
    price: 88000,
    originalPrice: 110000,
    rating: 4.7,
    reviewsCount: 53,
    badge: '🔥 Runway Fresh',
    isBestseller: false,
    isHotSale: true,
    images: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&auto=format&fit=crop&q=85',
    ],
    colors: [
      { name: 'Ochre Sun & Velvet Black', hex: '#b45309' },
      { name: 'Sapphire & Cobalt Ankara', hex: '#1d4ed8' },
    ],
    fabric: 'Authentic Dutch Wax Cotton with Japanese Satin Lapel',
    occasion: 'Art Exhibition, Fashion Week Gala, Smart Casual Soirée',
    leadTime: 'Dispatch in 48 hours.',
    description: 'A bold statement piece fusing contemporary Savile Row tailoring with vibrant West African Ankara motifs. Perfect for making an unforgettable entrance.',
    details: [
      'Structured double-vented blazer with matching trousers',
      'Hand-cut pattern alignment across lapel seams',
      'Breathable Bemberg cupro lining'
    ]
  },

  // WOMEN'S LUXURY NIGERIAN COUTURE (AUTHENTIC BLACK NIGERIAN WOMEN)
  {
    id: 'women-champagne-mermaid',
    title: 'Tiwa Champagne Hand-Beaded French Lace Mermaid Gown',
    subtitle: 'Corseted Bodice with Sweeping Train & Sheer Illusion Neckline',
    gender: 'women',
    category: 'gowns',
    price: 145000,
    originalPrice: 180000,
    rating: 4.9,
    reviewsCount: 168,
    badge: '💎 Showstopper',
    isBestseller: true,
    isHotSale: true,
    images: [
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=1000&auto=format&fit=crop&q=85',
    ],
    colors: [
      { name: 'Champagne Gold & Black Lace', hex: '#e3d2b4' },
      { name: 'Rose Gold & Blush', hex: '#f4cfc0' },
      { name: 'Pure Ivory Pearl', hex: '#fdfbf7' },
      { name: 'Obsidian & Gold Lace', hex: '#1f2937' },
    ],
    fabric: 'Imported French Guipure Lace with Hand-Seaded Swarovski Crystals & Duchess Satin',
    occasion: 'Owanbe Reception, Red Carpet, Black Tie Gala, Bridal Afterparty',
    leadTime: 'Tailored to measure: 5-7 days. Express dispatch ready sizes: 24h.',
    description: 'The pinnacle of Nigerian luxury event couture. Designed to hug curves with internal boning that snatches the waist while cascading into a dramatic cathedral-length mermaid train.',
    details: [
      'Built-in internal corset with multi-point steel spiral boning for hourglass silhouette',
      'Hand-embroidered with thousands of micro-crystals and bugle beads',
      'Illusion high-neck lace yoke with delicate back pearl buttons',
      'Double-lined with stretch silk charmeuse for effortless comfort while dancing'
    ]
  },
  {
    id: 'women-cowl-velvet-rust',
    title: 'Moremi Cowl-Neck Amber Velvet Maxi Gown with Slit',
    subtitle: 'Liquid Drape Silhouette with Hand-Carved Brass Buttons',
    gender: 'women',
    category: 'gowns',
    price: 115000,
    originalPrice: 140000,
    rating: 4.8,
    reviewsCount: 112,
    badge: '✨ Viral Favorite',
    isBestseller: true,
    isHotSale: true,
    images: [
      'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1000&auto=format&fit=crop&q=85',
    ],
    colors: [
      { name: 'Amber Rust Orange', hex: '#c25e1a' },
      { name: 'Emerald Velvet', hex: '#064e3b' },
      { name: 'Royal Sapphire', hex: '#1e3a8a' },
      { name: 'Burgundy Wine', hex: '#581c2f' },
    ],
    fabric: 'Heavyweight Silk-Blend Stretch Velvet with Liquid Lustre',
    occasion: 'Dinner Gala, Owanbe Wedding Guest, High Society Soirée',
    leadTime: 'Dispatch in 24-48 hours. Bespoke available.',
    description: 'An ode to Queen Moremi. Sculpted from rich amber-toned silk velvet with an asymmetrical fold collar, hand-finished brass dome buttons, and a thigh-high slit engineered for graceful steps.',
    details: [
      'Draped portrait cowl neckline that frames face and jewelry beautifully',
      'Concealed back zipper with safety hook and eye',
      'Hidden interior pockets (functional pockets!)',
      'Floor-sweeping A-line hem that moves like liquid mercury'
    ]
  },
  {
    id: 'women-emerald-reception',
    title: 'The Queen Amina Emerald French Lace Corset Gown',
    subtitle: 'Dramatic Sculptured Shoulder with Sheer Corsetry & Hand-Beaded Gele',
    gender: 'women',
    category: 'aso-ebi',
    price: 165000,
    originalPrice: 195000,
    rating: 5.0,
    reviewsCount: 89,
    badge: '👑 Royal Aso-Ebi',
    isBestseller: false,
    isHotSale: false,
    images: [
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1000&auto=format&fit=crop&q=85',
    ],
    colors: [
      { name: 'Deep Emerald Royalty', hex: '#073e2d' },
      { name: 'Burnished Gold', hex: '#d4af37' },
      { name: 'Imperial Violet', hex: '#5b21b6' },
    ],
    fabric: 'Austrian Heavy Guipure Lace with Beaded Emerald Pearls & Illusion Mesh',
    occasion: 'Bride Traditional Wedding, Chief Bridesmaid, High-Table Guest',
    leadTime: 'Atelier tailoring: 6-8 days.',
    description: 'Nothing commands the room at a Nigerian wedding like deep emerald and gold. Built with a signature snatched waistline, hand-appliquéd floral lace motifs, and matching auto-gele option.',
    details: [
      'Exposed boned sheer illusion bodice with strategically placed appliques',
      'Flared trumpet skirt with stiff horsehair hemline for dramatic volume',
      'Custom cup sizing (A through G cup options in bespoke mode)',
      'Complimentary matching hand-embellished headpiece / Gele fabric'
    ]
  },
  {
    id: 'women-asake-boubou',
    title: 'Asake Silk Crepe Draped Boubou with Crystal Yoke',
    subtitle: 'Effortless Royalty with Hand-Embroidered Moroccan & Yoruba Braiding',
    gender: 'women',
    category: 'boubou',
    price: 75000,
    originalPrice: 95000,
    rating: 4.8,
    reviewsCount: 145,
    badge: '🌿 Effortless Luxe',
    isBestseller: true,
    isHotSale: true,
    images: [
      'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=1000&auto=format&fit=crop&q=85',
    ],
    colors: [
      { name: 'Coral Terracotta', hex: '#c05621' },
      { name: 'Seafoam Teal', hex: '#115e59' },
      { name: 'Ivory Silk', hex: '#fefce8' },
      { name: 'Onyx Midnight', hex: '#0f172a' },
    ],
    fabric: '100% Silk Crepe de Chine with Austrian Crystal Yoke',
    occasion: 'Sunday Thanksgiving, Naming Ceremony, VIP Hosting, Resort Lounging',
    leadTime: 'Ships within 24 hours nationwide.',
    description: 'The epitome of graceful Nigerian luxury. Loose, breezy, yet unapologetically regal. Features a sparkling crystal neckline that eliminates the need for heavy necklaces.',
    details: [
      'Free-size cut tailored to flatter all body shapes (UK 8 to UK 26)',
      'Side pockets and fluid side-split hems for breeze and elegance',
      'Feather-light fabric that stays cool in Lagos heat',
      'Includes matching silk turban scarf'
    ]
  },
  {
    id: 'women-ankara-corset-gown',
    title: 'The Zaria Tiered Ankara Ball Gown with Sweetheart Corset',
    subtitle: 'Authentic Vlisco Dutch Wax with Multi-Tiered Pleated Tulle Underlay',
    gender: 'women',
    category: 'contemporary',
    price: 92000,
    originalPrice: 115000,
    rating: 4.9,
    reviewsCount: 74,
    badge: '✨ Afro-Haute Couture',
    isBestseller: false,
    isHotSale: false,
    images: [
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=1000&auto=format&fit=crop&q=85',
    ],
    colors: [
      { name: 'Kano Indigo & Gold Wax', hex: '#1e3a8a' },
      { name: 'Sunset Orange & Magenta', hex: '#d946ef' },
    ],
    fabric: 'Authentic 100% Hollandais Wax Cotton with Duchess Silk Linings',
    occasion: 'Prom, Red Carpet, Cultural Ambassador Appearance, Birthday Gala',
    leadTime: 'Made to measure: 5 days.',
    description: 'A showstopping fusion of modern runway couture and African print artistry. Featuring a sweetheart neckline with rigid internal corsetry and a dramatic layered skirt.',
    details: [
      'Structure built with 16 flexi-bones and cup padding',
      'Removable off-shoulder dramatic puffed sleeves',
      'Sweeping high-low ruffled hemline'
    ]
  },
  {
    id: 'women-asooke-bridal',
    title: 'The Aladire Hand-Woven Aso-Oke Traditional Bridal Ensemble',
    subtitle: 'Iro, Buba, Gele, and Ipele Hand-Embroidered with Swarovski Pearls',
    gender: 'women',
    category: 'aso-ebi',
    price: 240000,
    originalPrice: 285000,
    rating: 5.0,
    reviewsCount: 52,
    badge: '💍 Bridal Royalty',
    isBestseller: true,
    isHotSale: false,
    images: [
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=1000&auto=format&fit=crop&q=85',
    ],
    colors: [
      { name: 'Champagne Rose & Silver Weave', hex: '#d8b4a0' },
      { name: 'Benin Royal Coral & Gold', hex: '#ea580c' },
      { name: 'Deep Royal Wine & Gold', hex: '#701a35' },
    ],
    fabric: '100% Pure Hand-Spun Silk Aso-Oke with Metallic Weft',
    occasion: 'Yoruba/Edo/Delta Traditional Wedding Bride, Royal Matron',
    leadTime: 'Artisanal Loom Handcraft: 10-14 days.',
    description: 'The crowning glory for a traditional bride. Complete 4-piece ceremonial set hand-woven on heirloom looms and adorned with thousands of hand-applied pearls and Swarovski crystals.',
    details: [
      'Complete 4-Piece: Buba (blouse), Iro (wrap skirt), pre-folded luxury Gele, and matching shoulder Ipele',
      'Reinforced lining to prevent scratching or stiffness against sensitive skin',
      'Custom bride monogram woven into the Ipele hem',
      'Includes complimentary virtual styling consultation with creative director'
    ]
  },

  // COUPLE & OWANBE MATCHING SETS (BLACK NIGERIAN BRIDE & GROOM)
  {
    id: 'couple-coronation-emerald',
    title: 'The Coronation Couple: Royal Emerald & Gold Matching Set',
    subtitle: 'Includes Men\'s 3-Piece Agbada + Women\'s Beaded Lace Mermaid Gown',
    gender: 'couples',
    category: 'couples',
    price: 310000,
    originalPrice: 380000,
    rating: 5.0,
    reviewsCount: 39,
    badge: '✨ Couple Royalty',
    isBestseller: true,
    isHotSale: true,
    images: [
      'https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1000&auto=format&fit=crop&q=85',
    ],
    colors: [
      { name: 'Royal Emerald & Gold', hex: '#0f3c2b' },
      { name: 'Burgundy & Champagne', hex: '#4a0e17' },
      { name: 'Sapphire & Silver', hex: '#1e3a8a' },
    ],
    fabric: 'Synchronized Swiss Voile & Hand-Embroidered French Lace Duo',
    occasion: 'Traditional Wedding Bride & Groom, Couple 10th Anniversary, Owanbe Hosts',
    leadTime: 'Bespoke Dual-Tailoring: 7-10 business days.',
    description: 'The ultimate power statement for a Nigerian couple. Perfectly color-matched and motif-coordinated so you both step out in peerless harmony and royalty.',
    details: [
      'Full Men\'s Agbada, Kaftan, Trousers & Fila + Women\'s Hand-Beaded Mermaid Gown with Gele',
      'Save ₦70,000 when ordered together as an ensemble',
      'Both garments customized to individual measurements',
      'Dedicated wedding concierge manager assigned to your order'
    ]
  },
  {
    id: 'couple-burgundy-monarch',
    title: 'The Monarchy Wine & Champagne Traditional Wedding Set',
    subtitle: 'Matching Hand-Woven Aso-Oke Couple Attire with Coral Accents',
    gender: 'couples',
    category: 'couples',
    price: 345000,
    originalPrice: 420000,
    rating: 4.9,
    reviewsCount: 31,
    badge: '👑 Master Duo',
    isBestseller: false,
    isHotSale: false,
    images: [
      'https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=1000&auto=format&fit=crop&q=85',
      'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=1000&auto=format&fit=crop&q=85',
    ],
    colors: [
      { name: 'Monarchy Wine & Champagne', hex: '#5b1527' },
      { name: 'Pure White & Gold', hex: '#fdfbf7' },
    ],
    fabric: 'Heirloom Hand-Woven Aso-Oke with Metallic Thread Highlights',
    occasion: 'Traditional Engagement Ceremony, Royal Gala Reception',
    leadTime: 'Custom crafted: 10 days.',
    description: 'A masterpiece created for couples who honor heritage and demand international couture quality. Every stripe and thread is balanced to perfection.',
    details: [
      'Customized embroidery monograms for bride and groom',
      'Includes Groom Fila and Bride Gele & Ipele',
      'Luxury presentation box with satin dust bags'
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 'rev-1',
    name: 'Chief Babatunde Alabi, CON',
    title: 'Senior Partner, Lagos & London',
    location: 'Victoria Island, Lagos',
    rating: 5,
    date: '3 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=200&auto=format&fit=crop&q=80',
    verified: true,
    outfit: 'The Ooni Royal Hand-Embroidered 3-Piece Agbada Set',
    text: 'I wore this Agbada to the Federal Gala in Abuja and could barely walk 10 steps without someone asking who made it. The Swiss voile is heavy, crisp, and the gold bullion embroidery is museum grade. Fits like it was painted on me.'
  },
  {
    id: 'rev-2',
    name: 'Adunola Adeleke-Davies',
    title: 'Creative Director & Owanbe Enthusiast',
    location: 'Ikoyi, Lagos & Mayfair, London',
    rating: 5,
    date: '1 week ago',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&auto=format&fit=crop&q=80',
    verified: true,
    outfit: 'Tiwa Champagne Beaded Lace Mermaid Gown',
    text: 'The internal corsetry in this gown gave me an unbelievable 24-inch waist while still letting me dance the entire night to Asake and Burna Boy! Delivered to my Lekki home in 3 days. Àríyá Couture is in a league of its own.'
  },
  {
    id: 'rev-3',
    name: 'Engr. Emeka & Chidimma Okonkwo',
    title: 'Bride & Groom 2026',
    location: 'Houston, Texas (Diaspora Order)',
    rating: 5,
    date: 'Last month',
    avatar: 'https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=200&auto=format&fit=crop&q=80',
    verified: true,
    outfit: 'The Coronation Couple Matching Emerald Set',
    text: 'Ordering from the US, we were nervous about measurements, but their virtual tailor appointment was so thorough! The package arrived via DHL Express in Texas 6 days later. Every guest at our wedding was blown away.'
  },
  {
    id: 'rev-4',
    name: 'Folake Solanke-Peters',
    title: 'Tech Founder',
    location: 'Maitama, Abuja',
    rating: 5,
    date: '2 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    verified: true,
    outfit: 'Moremi Cowl-Neck Amber Velvet Maxi Gown',
    text: 'Liquid gold. The amber velvet texture feels incredible against the skin, and having hidden pockets in an evening gown is pure genius. 10/10 craftsmanship.'
  }
];

export const LOOKBOOK_STORIES = [
  {
    id: 'look-1',
    title: 'The Lagos Monarchy Edit',
    subtitle: 'Where Royal Tradition Meets 21st Century Savile Row Polish',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=1000&auto=format&fit=crop&q=85',
    tag: 'Haute Menswear',
    reads: '5 min read',
    summary: 'A deep dive into how our master artisans in Victoria Island spend 48 man-hours hand-couching gold bullion motifs into heavy Swiss voile Agbada.'
  },
  {
    id: 'look-2',
    title: 'Owanbe Glitz: The Corset Revolution',
    subtitle: 'Engineering the Perfect Snatched Silhouette for Nigerian Weddings',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1000&auto=format&fit=crop&q=85',
    tag: 'Bridal & Red Carpet',
    reads: '4 min read',
    summary: 'Discover how French Chantilly lace, crystal beading, and structural spiral steel boning combine to create gowns that dance effortlessly.'
  },
  {
    id: 'look-3',
    title: 'Reviving Ancient Aso-Oke Looms',
    subtitle: 'Preserving Centuries-Old Yoruba Weaving Techniques for Global Runways',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=1000&auto=format&fit=crop&q=85',
    tag: 'Cultural Heritage',
    reads: '6 min read',
    summary: 'From Iseyin weavers to the streets of Ikoyi: how our sustainable hand-spun cotton and silk preservation project empowers over 80 female loom artisans.'
  }
];

export const FAQ_LIST = [
  {
    q: 'How does Bespoke Tailoring & Custom Measurements work?',
    a: 'You can either submit your exact body measurements (chest, shoulders, sleeves, waist, length) during checkout or choose "Virtual Tailor Fitting". Our Master Stylist will hop on a video call via WhatsApp or Zoom to guide your measurements step-by-step.'
  },
  {
    q: 'How fast is delivery across Nigeria and Internationally?',
    a: 'Ready-to-wear items dispatch within 24 hours (Same-day or next-day delivery in Lagos and Abuja; 2-3 days across other Nigerian states via GIG Logistics). Bespoke made-to-measure orders take 5-7 business days. We ship internationally to UK, US, Canada and Europe via DHL Express (3-5 days delivery door-to-door).'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all Nigerian debit cards (Mastercard, Visa, Verve) via Paystack and Flutterwave, direct Naira Bank Transfer to our GTBank or Zenith Bank corporate accounts, and international cards / PayPal for our diaspora clients.'
  },
  {
    q: 'What is your Perfect Fit Guarantee?',
    a: 'If any bespoke garment needs minor adjustments, our Lagos and Abuja ateliers will alter it completely free of charge within 14 days of receipt, or arrange a complimentary pickup and return.'
  }
];
