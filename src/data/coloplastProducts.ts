// Coloplast Products Data
export interface ColoplastProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  subCategory: string;
  price: number;
  mrp: number;
  packSize: number;
  diameter?: string;
  baseplateType?: string;
  surgeryType?: string;
  bagSystem?: string;
  productType?: string;
  bagType?: string;
  description: string;
  features: string[];
  image: string;
  inStock: boolean;
}

export const coloplastProducts: ColoplastProduct[] = [
  // 1-Piece Bags - Alterna
  {
    id: "col-001",
    name: "Alterna® 1-Piece Flat Transparent Bag for Colostomy/Ileostomy",
    brand: "Alterna",
    category: "ostomy-bags",
    subCategory: "1-piece-bags",
    price: 1788,
    mrp: 1788,
    packSize: 6,
    diameter: "40mm, 50mm, 60mm, 70mm",
    baseplateType: "Flat",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Drainable/Open",
    bagType: "Open",
    description: "Alterna 1-piece flat transparent drainable bag designed for colostomy and ileostomy care with secure adhesion.",
    features: [
      "Transparent design for easy monitoring",
      "Flat baseplate for regular stomas",
      "Secure adhesive for leak prevention",
      "Soft and comfortable material",
      "Easy to apply and remove",
      "Pack of 6 bags"
    ],
    image: "/images/coloplast/alterna-1pc-flat-transparent.jpg",
    inStock: true
  },
  {
    id: "col-002",
    name: "Alterna® 1-Piece Flat Opaque Bag for Colostomy/Ileostomy",
    brand: "Alterna",
    category: "ostomy-bags",
    subCategory: "1-piece-bags",
    price: 1836,
    mrp: 1836,
    packSize: 6,
    diameter: "40mm, 50mm, 60mm, 70mm",
    baseplateType: "Flat",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Drainable/Open",
    bagType: "Open",
    description: "Alterna 1-piece flat opaque drainable bag for discreet colostomy and ileostomy care.",
    features: [
      "Opaque design for discretion",
      "Flat baseplate for regular stomas",
      "Secure adhesive technology",
      "Comfortable and flexible",
      "Odor-proof material",
      "Pack of 6 bags"
    ],
    image: "/images/coloplast/alterna-1pc-flat-opaque.jpg",
    inStock: true
  },
  {
    id: "col-003",
    name: "Alterna® 1-Piece Light Convex Transparent Bag for Colostomy/Ileostomy",
    brand: "Alterna",
    category: "ostomy-bags",
    subCategory: "1-piece-bags",
    price: 2016,
    mrp: 2016,
    packSize: 6,
    diameter: "40mm, 50mm, 60mm",
    baseplateType: "Light Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Drainable/Open",
    bagType: "Open",
    description: "Alterna 1-piece light convex transparent bag for stomas that need gentle support.",
    features: [
      "Light convex baseplate for gentle support",
      "Transparent for easy monitoring",
      "Ideal for flush or retracted stomas",
      "Secure adhesion",
      "Comfortable fit",
      "Pack of 6 bags"
    ],
    image: "/images/coloplast/alterna-1pc-light-convex-transparent.jpg",
    inStock: true
  },
  {
    id: "col-004",
    name: "Alterna® 1-Piece Light Convex Opaque Bag for Colostomy/Ileostomy",
    brand: "Alterna",
    category: "ostomy-bags",
    subCategory: "1-piece-bags",
    price: 2214,
    mrp: 2214,
    packSize: 6,
    diameter: "40mm, 50mm, 60mm",
    baseplateType: "Light Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Drainable/Open",
    bagType: "Open",
    description: "Alterna 1-piece light convex opaque bag for discreet ostomy care with gentle support.",
    features: [
      "Light convex for flush stomas",
      "Opaque for discretion",
      "Secure adhesive",
      "Comfortable wear",
      "Leak-proof design",
      "Pack of 6 bags"
    ],
    image: "/images/coloplast/alterna-1pc-light-convex-opaque.jpg",
    inStock: true
  },
  {
    id: "col-005",
    name: "Alterna® 1-Piece Deep Convex Transparent Bag for Colostomy/Ileostomy",
    brand: "Alterna",
    category: "ostomy-bags",
    subCategory: "1-piece-bags",
    price: 2214,
    mrp: 2214,
    packSize: 6,
    diameter: "40mm, 50mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Drainable/Open",
    bagType: "Open",
    description: "Alterna 1-piece deep convex transparent bag for retracted or flush stomas requiring firm support.",
    features: [
      "Deep convex for retracted stomas",
      "Transparent design",
      "Firm support and security",
      "Prevents leakage",
      "Comfortable fit",
      "Pack of 6 bags"
    ],
    image: "/images/coloplast/alterna-1pc-deep-convex-transparent.jpg",
    inStock: true
  },

  // 2-Piece Bags - Alterna
  {
    id: "col-006",
    name: "Alterna® 2-Piece Opaque Bag for Colostomy/Ileostomy",
    brand: "Alterna",
    category: "ostomy-bags",
    subCategory: "2-piece-bags",
    price: 1626,
    mrp: 1626,
    packSize: 6,
    diameter: "40mm, 50mm, 60mm, 70mm",
    baseplateType: "Flat",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Drainable/Open",
    bagType: "Open",
    description: "Alterna 2-piece opaque drainable bag with flexible coupling system.",
    features: [
      "2-piece system for flexibility",
      "Opaque for discretion",
      "Easy bag changes",
      "Secure coupling",
      "Skin-friendly baseplate",
      "Pack of 6 bags"
    ],
    image: "/images/coloplast/alterna-2pc-opaque.jpg",
    inStock: true
  },

  // SenSura Mio - 1-Piece
  {
    id: "col-007",
    name: "SenSura® Mio 1-Piece Flat Transparent Bag for Colostomy/Ileostomy",
    brand: "SenSura Mio",
    category: "ostomy-bags",
    subCategory: "1-piece-bags",
    price: 3102,
    mrp: 3102,
    packSize: 6,
    diameter: "40mm, 50mm, 60mm, 70mm",
    baseplateType: "Flat",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Drainable/Open",
    bagType: "Open",
    description: "SenSura Mio 1-piece flat transparent bag with adaptive technology for body movement.",
    features: [
      "Adaptive technology follows body curves",
      "Transparent for monitoring",
      "Elastic adhesive for flexibility",
      "Secure fit during movement",
      "Comfortable wear",
      "Pack of 6 bags"
    ],
    image: "/images/coloplast/sensura-mio-1pc-flat-transparent.jpg",
    inStock: true
  },
  {
    id: "col-008",
    name: "SenSura® Mio 1-Piece Flat Opaque Bag for Colostomy/Ileostomy",
    brand: "SenSura Mio",
    category: "ostomy-bags",
    subCategory: "1-piece-bags",
    price: 3168,
    mrp: 3168,
    packSize: 6,
    diameter: "40mm, 50mm, 60mm, 70mm",
    baseplateType: "Flat",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Drainable/Open",
    bagType: "Open",
    description: "SenSura Mio 1-piece flat opaque bag with best-in-class adaptive fit.",
    features: [
      "Adaptive technology",
      "Opaque for discretion",
      "Elastic adhesive",
      "Secure during activity",
      "Comfortable all day",
      "Pack of 6 bags"
    ],
    image: "/images/coloplast/sensura-mio-1pc-flat-opaque.jpg",
    inStock: true
  },
  {
    id: "col-009",
    name: "SenSura® Mio 1-Piece Soft Convex Opaque Bag for Colostomy/Ileostomy",
    brand: "SenSura Mio",
    category: "ostomy-bags",
    subCategory: "1-piece-bags",
    price: 3678,
    mrp: 3678,
    packSize: 6,
    diameter: "40mm, 50mm, 60mm",
    baseplateType: "Soft Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Drainable/Open",
    bagType: "Open",
    description: "SenSura Mio 1-piece soft convex opaque bag with adaptive technology for challenging stomas.",
    features: [
      "Soft convex for gentle support",
      "Adaptive technology",
      "Opaque design",
      "Secure adhesion",
      "Comfortable fit",
      "Pack of 6 bags"
    ],
    image: "/images/coloplast/sensura-mio-1pc-soft-convex-opaque.jpg",
    inStock: true
  },
  {
    id: "col-010",
    name: "SenSura® Mio 1-Piece Soft Convex Transparent Bag for Colostomy/Ileostomy",
    brand: "SenSura Mio",
    category: "ostomy-bags",
    subCategory: "1-piece-bags",
    price: 3348,
    mrp: 3348,
    packSize: 6,
    diameter: "40mm, 50mm, 60mm",
    baseplateType: "Soft Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Drainable/Open",
    bagType: "Open",
    description: "SenSura Mio 1-piece soft convex transparent bag for monitoring and support.",
    features: [
      "Soft convex support",
      "Transparent for monitoring",
      "Adaptive fit",
      "Secure adhesion",
      "Flexible wear",
      "Pack of 6 bags"
    ],
    image: "/images/coloplast/sensura-mio-1pc-soft-convex-transparent.jpg",
    inStock: true
  },

  // SenSura Mio - 2-Piece
  {
    id: "col-011",
    name: "SenSura® Mio 2-Piece Opaque Bag for Colostomy/Ileostomy",
    brand: "SenSura Mio",
    category: "ostomy-bags",
    subCategory: "2-piece-bags",
    price: 2544,
    mrp: 2544,
    packSize: 6,
    diameter: "40mm, 50mm, 60mm, 70mm",
    baseplateType: "Flat",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Drainable/Open",
    bagType: "Open",
    description: "SenSura Mio 2-piece opaque bag with adaptive coupling system.",
    features: [
      "2-piece flexibility",
      "Adaptive technology",
      "Opaque design",
      "Easy bag changes",
      "Secure coupling",
      "Pack of 6 bags"
    ],
    image: "/images/coloplast/sensura-mio-2pc-opaque.jpg",
    inStock: true
  },
  {
    id: "col-012",
    name: "SenSura® Mio 2-Piece Transparent Bag for Colostomy/Ileostomy",
    brand: "SenSura Mio",
    category: "ostomy-bags",
    subCategory: "2-piece-bags",
    price: 2250,
    mrp: 2250,
    packSize: 6,
    diameter: "40mm, 50mm, 60mm, 70mm",
    baseplateType: "Flat",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Drainable/Open",
    bagType: "Open",
    description: "SenSura Mio 2-piece transparent bag for easy monitoring with adaptive fit.",
    features: [
      "2-piece system",
      "Transparent design",
      "Adaptive technology",
      "Flexible coupling",
      "Easy monitoring",
      "Pack of 6 bags"
    ],
    image: "/images/coloplast/sensura-mio-2pc-transparent.jpg",
    inStock: true
  },

  // SenSura - 2-Piece
  {
    id: "col-013",
    name: "SenSura® 2-Piece Opaque Bag for Colostomy/Ileostomy",
    brand: "SenSura",
    category: "ostomy-bags",
    subCategory: "2-piece-bags",
    price: 1860,
    mrp: 1860,
    packSize: 6,
    diameter: "40mm, 50mm, 60mm, 70mm",
    baseplateType: "Flat",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Drainable/Open",
    bagType: "Open",
    description: "SenSura 2-piece opaque bag with advanced protection and secure adhesion.",
    features: [
      "2-piece flexibility",
      "Opaque for discretion",
      "Secure adhesion",
      "Easy bag changes",
      "Comfortable wear",
      "Pack of 6 bags"
    ],
    image: "/images/coloplast/sensura-2pc-opaque.jpg",
    inStock: true
  },
  {
    id: "col-014",
    name: "SenSura® 2-Piece Transparent Bag for Colostomy/Ileostomy",
    brand: "SenSura",
    category: "ostomy-bags",
    subCategory: "2-piece-bags",
    price: 1830,
    mrp: 1830,
    packSize: 6,
    diameter: "40mm, 50mm, 60mm, 70mm",
    baseplateType: "Flat",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Drainable/Open",
    bagType: "Open",
    description: "SenSura 2-piece transparent bag for monitoring with secure protection.",
    features: [
      "2-piece system",
      "Transparent design",
      "Secure adhesion",
      "Easy monitoring",
      "Flexible coupling",
      "Pack of 6 bags"
    ],
    image: "/images/coloplast/sensura-2pc-transparent.jpg",
    inStock: true
  },

  // Urostomy Bags
  {
    id: "col-015",
    name: "SenSura® Mio 2-Piece Transparent Bag for Urostomy",
    brand: "SenSura Mio",
    category: "ostomy-bags",
    subCategory: "2-piece-bags",
    price: 3210,
    mrp: 3210,
    packSize: 6,
    diameter: "40mm, 50mm, 60mm",
    baseplateType: "Flat",
    surgeryType: "Urostomy",
    bagSystem: "2-piece",
    productType: "Urostomy",
    bagType: "Uro",
    description: "SenSura Mio 2-piece transparent urostomy bag with tap outlet.",
    features: [
      "Designed for urostomy",
      "Tap outlet for drainage",
      "Transparent design",
      "Adaptive technology",
      "Anti-reflux valve",
      "Pack of 6 bags"
    ],
    image: "/images/coloplast/sensura-mio-2pc-uro-transparent.jpg",
    inStock: true
  },
  {
    id: "col-016",
    name: "SenSura® 2-Piece Transparent Bag for Urostomy",
    brand: "SenSura",
    category: "ostomy-bags",
    subCategory: "2-piece-bags",
    price: 2226,
    mrp: 2226,
    packSize: 6,
    diameter: "40mm, 50mm, 60mm",
    baseplateType: "Flat",
    surgeryType: "Urostomy",
    bagSystem: "2-piece",
    productType: "Urostomy",
    bagType: "Uro",
    description: "SenSura 2-piece transparent urostomy bag with secure adhesion.",
    features: [
      "Urostomy specific design",
      "Tap outlet",
      "Transparent for monitoring",
      "Anti-reflux valve",
      "Secure adhesion",
      "Pack of 6 bags"
    ],
    image: "/images/coloplast/sensura-2pc-uro-transparent.jpg",
    inStock: true
  },

  // Ostomy Baseplates - Flat
  {
    id: "col-017",
    name: "SenSura® Mio Flat Baseplate",
    brand: "SenSura Mio",
    category: "ostomy-baseplates",
    subCategory: "flat",
    price: 2100,
    mrp: 2100,
    packSize: 5,
    diameter: "40mm, 50mm, 60mm, 70mm",
    baseplateType: "Flat",
    description: "SenSura Mio flat baseplate with adaptive technology for 2-piece systems.",
    features: [
      "Adaptive elastic adhesive",
      "Flat baseplate",
      "Secure coupling",
      "Skin-friendly",
      "Flexible fit",
      "Pack of 5 baseplates"
    ],
    image: "/images/coloplast/sensura-mio-baseplate-flat.jpg",
    inStock: true
  },
  {
    id: "col-018",
    name: "Alterna® Flat Baseplate",
    brand: "Alterna",
    category: "ostomy-baseplates",
    subCategory: "flat",
    price: 1500,
    mrp: 1500,
    packSize: 5,
    diameter: "40mm, 50mm, 60mm, 70mm",
    baseplateType: "Flat",
    description: "Alterna flat baseplate for 2-piece ostomy systems.",
    features: [
      "Flat design",
      "Secure adhesion",
      "Easy coupling",
      "Comfortable wear",
      "Skin protection",
      "Pack of 5 baseplates"
    ],
    image: "/images/coloplast/alterna-baseplate-flat.jpg",
    inStock: true
  },

  // Ostomy Baseplates - Light Convex
  {
    id: "col-019",
    name: "SenSura® Mio Light Convex Baseplate",
    brand: "SenSura Mio",
    category: "ostomy-baseplates",
    subCategory: "light-convex",
    price: 2400,
    mrp: 2400,
    packSize: 5,
    diameter: "40mm, 50mm, 60mm",
    baseplateType: "Light Convex",
    description: "SenSura Mio light convex baseplate for flush or retracted stomas.",
    features: [
      "Light convex support",
      "Adaptive technology",
      "Secure coupling",
      "Gentle support",
      "Flexible fit",
      "Pack of 5 baseplates"
    ],
    image: "/images/coloplast/sensura-mio-baseplate-light-convex.jpg",
    inStock: true
  },
  {
    id: "col-020",
    name: "Alterna® Light Convex Baseplate",
    brand: "Alterna",
    category: "ostomy-baseplates",
    subCategory: "light-convex",
    price: 1800,
    mrp: 1800,
    packSize: 5,
    diameter: "40mm, 50mm, 60mm",
    baseplateType: "Light Convex",
    description: "Alterna light convex baseplate for gentle stoma support.",
    features: [
      "Light convex design",
      "Secure adhesion",
      "Gentle support",
      "Easy coupling",
      "Comfortable wear",
      "Pack of 5 baseplates"
    ],
    image: "/images/coloplast/alterna-baseplate-light-convex.jpg",
    inStock: true
  },

  // Ostomy Baseplates - Deep Convex
  {
    id: "col-021",
    name: "Alterna® Deep Convex Baseplate",
    brand: "Alterna",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 2200,
    mrp: 2200,
    packSize: 5,
    diameter: "40mm, 50mm",
    baseplateType: "Deep Convex",
    description: "Alterna deep convex baseplate for retracted stomas requiring firm support.",
    features: [
      "Deep convex support",
      "Firm adhesion",
      "Prevents leakage",
      "Secure coupling",
      "Comfortable fit",
      "Pack of 5 baseplates"
    ],
    image: "/images/coloplast/alterna-baseplate-deep-convex.jpg",
    inStock: true
  },

  // Supporting Products
  {
    id: "col-022",
    name: "Brava® Elastic Tape",
    brand: "Brava",
    category: "supporting-products",
    subCategory: "accessories",
    price: 1200,
    mrp: 1200,
    packSize: 20,
    description: "Brava Elastic Tape for extra security and support around the baseplate.",
    features: [
      "Elastic for flexibility",
      "Extra security",
      "Skin-friendly",
      "Easy to apply",
      "Water-resistant",
      "Pack of 20 strips"
    ],
    image: "/images/coloplast/brava-elastic-tape.jpg",
    inStock: true
  },
  {
    id: "col-023",
    name: "Brava® Adhesive Remover Spray",
    brand: "Brava",
    category: "supporting-products",
    subCategory: "accessories",
    price: 850,
    mrp: 850,
    packSize: 1,
    description: "Brava Adhesive Remover Spray for gentle and easy removal of ostomy products.",
    features: [
      "Gentle removal",
      "Reduces skin trauma",
      "Easy to use spray",
      "Skin-friendly formula",
      "Quick acting",
      "50ml bottle"
    ],
    image: "/images/coloplast/brava-adhesive-remover.jpg",
    inStock: true
  },
  {
    id: "col-024",
    name: "Ostomy Powder",
    brand: "Coloplast",
    category: "supporting-products",
    subCategory: "accessories",
    price: 650,
    mrp: 650,
    packSize: 1,
    description: "Ostomy Powder for protecting and healing irritated peristomal skin.",
    features: [
      "Protects irritated skin",
      "Absorbs moisture",
      "Promotes healing",
      "Easy application",
      "Skin-friendly",
      "25g bottle"
    ],
    image: "/images/coloplast/ostomy-powder.jpg",
    inStock: true
  },
  {
    id: "col-025",
    name: "Comfeel® Barrier Cream",
    brand: "Comfeel",
    category: "supporting-products",
    subCategory: "accessories",
    price: 950,
    mrp: 950,
    packSize: 1,
    description: "Comfeel Barrier Cream for protecting skin from moisture and irritation.",
    features: [
      "Moisture barrier",
      "Protects skin",
      "Easy to apply",
      "Long-lasting protection",
      "Skin-friendly",
      "60ml tube"
    ],
    image: "/images/coloplast/comfeel-barrier-cream.jpg",
    inStock: true
  },
  {
    id: "col-026",
    name: "Brava® Paste",
    brand: "Brava",
    category: "supporting-products",
    subCategory: "accessories",
    price: 1100,
    mrp: 1100,
    packSize: 1,
    description: "Brava Paste for filling gaps and creating a secure seal around the stoma.",
    features: [
      "Fills gaps and creases",
      "Alcohol-free formula",
      "No stinging",
      "Easy to apply",
      "Secure seal",
      "60g tube"
    ],
    image: "/images/coloplast/brava-paste.jpg",
    inStock: true
  }
];

// Category structure for navigation
export const coloplastCategories = {
  "ostomy-bags": {
    name: "Ostomy Bags",
    subCategories: [
      { name: "1-Piece Bags", slug: "1-piece-bags" },
      { name: "2-Piece Bags", slug: "2-piece-bags" }
    ]
  },
  "ostomy-baseplates": {
    name: "Ostomy Baseplates",
    subCategories: [
      { name: "Flat", slug: "flat" },
      { name: "Light Convex", slug: "light-convex" },
      { name: "Deep Convex", slug: "deep-convex" }
    ]
  },
  "supporting-products": {
    name: "Supporting Products",
    products: [
      { name: "Brava® Elastic Tape", id: "col-022" },
      { name: "Brava® Adhesive Remover Spray", id: "col-023" },
      { name: "Ostomy Powder", id: "col-024" },
      { name: "Comfeel® Barrier Cream", id: "col-025" },
      { name: "Brava® Paste", id: "col-026" }
    ]
  },
  "brands": {
    name: "Brands",
    subCategories: [
      { name: "SenSura Mio", slug: "sensura-mio" },
      { name: "SenSura", slug: "sensura" },
      { name: "Alterna", slug: "alterna" },
      { name: "Brava", slug: "brava" }
    ]
  }
};

// Filter products by category and subcategory
export const getProductsByCategory = (category: string, subCategory?: string, brand?: string) => {
  return coloplastProducts.filter(product => {
    const matchesCategory = product.category === category;
    const matchesSubCategory = !subCategory || product.subCategory === subCategory;
    const matchesBrand = !brand || product.brand.toLowerCase().replace(/®/g, '').trim() === brand.toLowerCase().replace(/-/g, ' ').trim();
    return matchesCategory && matchesSubCategory && matchesBrand;
  });
};

// Get product by ID
export const getProductById = (id: string) => {
  return coloplastProducts.find(product => product.id === id);
};

// Get products by brand
export const getProductsByBrand = (brand: string) => {
  return coloplastProducts.filter(product => 
    product.brand.toLowerCase().replace(/®/g, '').trim() === brand.toLowerCase().replace(/-/g, ' ').trim()
  );
};