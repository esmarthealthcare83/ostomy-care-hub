export interface Product {
  id: string;
  productCode: string;
  name: string;
  brand: string;
  category: string;
  pack: string;
  price: string;
  pricePerUnit: string;
  originalPrice?: string;
  discountType?: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  images: string[];
  inStock: boolean;
  popular?: boolean;
  bestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: "alterna-1-piece-flat-transparent",
    productCode: "12070",
    name: "Alterna® 1-Piece Flat Transparent Bag for Colostomy/Ileostomy",
    brand: "Alterna®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 1,788",
    pricePerUnit: "₹ 298/Unit",
    discountType: "Seasonal Offer",
    rating: 4.8,
    reviews: 127,
    description: "Premium quality 1-piece flat transparent ostomy bag designed for colostomy and ileostomy patients. Features advanced adhesive technology for secure, comfortable wear.",
    features: [
      "1-piece system for easy application",
      "Transparent material for easy monitoring",
      "Advanced adhesive for secure fit",
      "Odor-proof material",
      "Soft, flexible design for comfort",
      "Easy-to-use closure system"
    ],
    specifications: {
      "System": "1-piece",
      "Type": "Drainable",
      "Material": "Transparent",
      "Baseplate": "Flat",
      "Sizes Available": "Multiple sizes",
      "Wear Time": "Up to 7 days"
    },
    images: ["/placeholder.svg"],
    inStock: true,
    popular: true,
    bestSeller: true
  },
  {
    id: "brava-adhesive-remover-spray",
    name: "Brava® Adhesive Remover Spray",
    brand: "Brava®",
    category: "Supporting Products",
    pack: "Pack of 1",
    price: "₹ 870",
    pricePerUnit: "₹ 870/Unit",
    rating: 4.9,
    reviews: 203,
    description: "Gentle yet effective adhesive remover spray that helps remove adhesive residue from skin without irritation. Essential for ostomy care routine.",
    features: [
      "Gentle on sensitive skin",
      "Removes adhesive residue effectively",
      "No-sting formula",
      "Easy spray application",
      "Alcohol-free",
      "Dermatologically tested"
    ],
    specifications: {
      "Volume": "50ml",
      "Type": "Spray",
      "Formula": "Alcohol-free",
      "Skin Type": "All skin types",
      "Application": "Topical"
    },
    images: ["/placeholder.svg"],
    inStock: true,
    popular: true,
    bestSeller: true
  },
  {
    id: "sensura-mio-2-piece-flat-baseplate",
    name: "SenSura® Mio 2-Piece Flat Baseplate",
    brand: "SenSura® Mio",
    category: "Ostomy Baseplates",
    pack: "Pack of 6",
    price: "₹ 3,168",
    pricePerUnit: "₹ 528/Unit",
    rating: 4.7,
    reviews: 89,
    description: "Advanced 2-piece flat baseplate with double-layer adhesive technology for secure, comfortable wear. Designed for active lifestyles.",
    features: [
      "2-piece system flexibility",
      "Double-layer adhesive",
      "Elastic adhesive for movement",
      "Pre-cut or cut-to-fit options",
      "Skin-friendly materials",
      "Easy coupling system"
    ],
    specifications: {
      "System": "2-piece",
      "Type": "Baseplate",
      "Convexity": "Flat",
      "Coupling": "Mechanical",
      "Wear Time": "Up to 7 days",
      "Adhesive": "Double-layer"
    },
    images: ["/placeholder.svg"],
    inStock: true,
    bestSeller: true
  },
  {
    id: "alterna-1-piece-deep-convex-urostomy",
    name: "Alterna® 1-Piece Deep Convex Transparent Bag for Urostomy",
    brand: "Alterna®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 3,072",
    pricePerUnit: "₹ 512/Unit",
    rating: 4.6,
    reviews: 95,
    description: "Specialized deep convex urostomy bag designed for patients with retracted or flush stomas. Provides excellent seal and comfort.",
    features: [
      "Deep convex design",
      "Anti-reflux valve",
      "Tap closure system",
      "Transparent for monitoring",
      "Extended wear time",
      "Secure adhesive system"
    ],
    specifications: {
      "System": "1-piece",
      "Type": "Urostomy",
      "Convexity": "Deep Convex",
      "Material": "Transparent",
      "Closure": "Tap",
      "Wear Time": "Up to 7 days"
    },
    images: ["/placeholder.svg"],
    inStock: true
  },
  {
    id: "alterna-1-piece-flat-opaque",
    name: "Alterna® 1-Piece Flat Opaque Bag for Colostomy/Ileostomy",
    brand: "Alterna®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 1,836",
    pricePerUnit: "₹ 306/Unit",
    rating: 4.5,
    reviews: 76,
    description: "High-quality opaque ostomy bag that provides discretion and confidence. Perfect for daily activities and social situations.",
    features: [
      "Opaque material for discretion",
      "Comfortable flat baseplate",
      "Easy-to-empty design",
      "Odor-barrier film",
      "Soft cloth backing",
      "Secure closure system"
    ],
    specifications: {
      "System": "1-piece",
      "Type": "Drainable",
      "Material": "Opaque",
      "Baseplate": "Flat",
      "Backing": "Cloth",
      "Wear Time": "Up to 5 days"
    },
    images: ["/placeholder.svg"],
    inStock: true
  },
  {
    id: "brava-mouldable-ring",
    name: "Brava® Mouldable Ring",
    brand: "Brava®",
    category: "Supporting Products",
    pack: "Pack of 10",
    price: "₹ 1,490",
    pricePerUnit: "₹ 149/Unit",
    rating: 4.8,
    reviews: 142,
    description: "Flexible mouldable ring that fills gaps and prevents leakage around the stoma. Can be shaped to fit individual stoma contours.",
    features: [
      "Mouldable to fit any stoma shape",
      "Alcohol-free formulation",
      "Easy to apply and remove",
      "Provides extra security",
      "Skin-friendly ingredients",
      "Long-lasting seal"
    ],
    specifications: {
      "Thickness": "2.0mm",
      "Inner Diameter": "Various sizes",
      "Material": "Hydrocolloid",
      "Flexibility": "High",
      "Wear Time": "2-3 days"
    },
    images: ["/placeholder.svg"],
    inStock: true,
    popular: true
  },
  {
    id: "coloplast-brava-elastic-barrier-tape-12070",
    productCode: "12070",
    name: "Coloplast Brava Elastic Barrier Tape (White and Brown) 12070",
    brand: "Coloplast",
    category: "Supporting Products",
    pack: "Pack of 1",
    price: "₹ 1,170",
    pricePerUnit: "₹ 1,170/Unit",
    discountType: "Seasonal Offer",
    rating: 4.5,
    reviews: 10,
    description: "Elastic barrier tape for ostomy care.",
    features: ["Elastic", "Barrier Tape"],
    specifications: {
      "Type": "Barrier Tape",
      "Color": "White and Brown",
      "Material": "Elastic"
    },
    images: ["https://medineeds.in/cdn/shop/files/shopping_d58f1e12-65b6-43e4-a553-7e6e769b7503.webp?v=1738138635"],
    inStock: true
  },
  {
    id: "coloplast-paste-2650",
    productCode: "2650",
    name: "Coloplast Paste 2650",
    brand: "Coloplast",
    category: "Supporting Products",
    pack: "Pack of 1",
    price: "₹ 940",
    pricePerUnit: "₹ 940/Unit",
    rating: 4.7,
    reviews: 15,
    description: "Ostomy paste for secure adhesion.",
    features: ["Paste", "Skin Barrier"],
    specifications: {
      "Type": "Paste",
      "Use": "Skin Barrier"
    },
    images: ["https://medineeds.in/cdn/shop/files/2650_1.webp?v=1735389371"],
    inStock: true
  },
  {
    id: "coloplast-ostomy-bag-17501",
    productCode: "17501",
    name: "Coloplast Ostomy Bag 17501 12-75mm Maxi Tran Open with Hide-away Outlet Transparent",
    brand: "Coloplast",
    category: "Ostomy Bags",
    pack: "Pack of 1",
    price: "₹ 1,749",
    pricePerUnit: "₹ 1,749/Unit",
    rating: 4.6,
    reviews: 20,
    description: "Transparent ostomy bag with hide-away outlet.",
    features: ["Maxi Tran", "Transparent", "Open"],
    specifications: {
      "Size": "12-75mm",
      "Type": "Maxi Tran",
      "Outlet": "Hide-away",
      "Material": "Transparent"
    },
    images: ["https://medineeds.in/cdn/shop/products/17501-1.jpg?v=1735389555"],
    inStock: true
  },
  {
    id: "coloplast-alterna-long-wear-base-plate-1973",
    productCode: "1973",
    name: "Coloplast 60mm Alterna Long wear light Base Plate Box 1973",
    brand: "Coloplast",
    category: "Ostomy Baseplates",
    pack: "Pack of 1",
    price: "₹ 1,190",
    pricePerUnit: "₹ 1,190/Unit",
    rating: 4.8,
    reviews: 12,
    description: "Long wear light base plate for ostomy.",
    features: ["Long Wear", "Light", "Base Plate"],
    specifications: {
      "Size": "60mm",
      "Type": "Base Plate",
      "Wear Time": "Long"
    },
    images: ["https://medineeds.in/cdn/shop/products/1973.jpg?v=1735390310"],
    inStock: true
  },
  {
    id: "coloplast-ostomy-powder-1907",
    productCode: "1907",
    name: "Coloplast Ostomy Powder - 25Gm 1907",
    brand: "Coloplast",
    category: "Supporting Products",
    pack: "Pack of 1",
    price: "₹ 501",
    pricePerUnit: "₹ 501/Unit",
    rating: 4.4,
    reviews: 8,
    description: "Ostomy powder for skin protection.",
    features: ["Powder", "Ostomy"],
    specifications: {
      "Weight": "25Gm",
      "Type": "Powder",
      "Use": "Skin Protection"
    },
    images: ["https://medineeds.in/cdn/shop/files/1907-ostomy-powder-coloplast--1000x1000.jpg?v=1735389665"],
    inStock: true
  },
  {
    id: "hollister-adapt-paste-79300",
    productCode: "79300",
    name: "Hollister Adapt Paste 79300",
    brand: "Hollister",
    category: "Supporting Products",
    pack: "Pack of 1",
    price: "₹ 665",
    pricePerUnit: "₹ 665/Unit",
    rating: 4.5,
    reviews: 18,
    description: "Adapt paste for ostomy care.",
    features: ["Adapt Paste"],
    specifications: {
      "Type": "Paste",
      "Use": "Ostomy Care"
    },
    images: ["https://medineeds.in/cdn/shop/files/ostomy-products-250x250.jpg?v=1735711642"],
    inStock: true
  },
  {
    id: "hollister-conform-2-37500",
    productCode: "37500",
    name: "Hollister Conform 2 (70mm) 37500",
    brand: "Hollister",
    category: "Ostomy Bags",
    pack: "Pack of 1",
    price: "₹ 1,460",
    pricePerUnit: "₹ 1,460/Unit",
    rating: 4.6,
    reviews: 22,
    description: "Conform 2 ostomy bag.",
    features: ["Conform 2", "70mm"],
    specifications: {
      "Type": "Ostomy Bag",
      "Size": "70mm",
      "System": "Conform 2"
    },
    images: ["https://medineeds.in/cdn/shop/products/hollister_37500_1.png?v=1735711706"],
    inStock: true
  },
  {
    id: "coloplast-brava-elastic-barrier-tape",
    productCode: "12070",
    name: "Brava Elastic Barrier Tape",
    brand: "Coloplast",
    category: "Supporting Products",
    pack: "Pack of 1",
    price: "₹ 1,170",
    pricePerUnit: "₹ 1,170/Unit",
    rating: 4.5,
    reviews: 10,
    description: "Elastic barrier tape for secure adhesion and skin protection around the stoma.",
    features: [
      "Elastic and flexible design",
      "Provides secure barrier protection",
      "Easy to apply and remove",
      "Gentle on sensitive skin",
      "Long-lasting adhesion"
    ],
    specifications: {
      "Material": "Elastic Tape",
      "Width": "Various sizes",
      "Length": "5m roll",
      "Adhesive": "Skin-friendly",
      "Usage": "Barrier protection"
    },
    images: ["/placeholder.svg"],
    inStock: true
  },
  {
    id: "coloplast-paste-2650",
    productCode: "2650",
    name: "Ostomy Paste",
    brand: "Coloplast",
    category: "Supporting Products",
    pack: "Pack of 1",
    price: "₹ 940",
    pricePerUnit: "₹ 940/Unit",
    rating: 4.7,
    reviews: 15,
    description: "High-quality ostomy paste for filling uneven skin surfaces and creating a secure seal around the stoma.",
    features: [
      "Fills skin irregularities",
      "Creates secure seal",
      "Easy to apply",
      "Non-irritating formula",
      "Compatible with all ostomy systems"
    ],
    specifications: {
      "Volume": "60g",
      "Type": "Ostomy Paste",
      "Formula": "Hydrocolloid-based",
      "Application": "Topical",
      "Shelf Life": "2 years"
    },
    images: ["/placeholder.svg"],
    inStock: true
  },
  {
    id: "coloplast-ostomy-bag-17501",
    productCode: "17501",
    name: "Maxi Tran Open Ostomy Bag",
    brand: "Coloplast",
    category: "Ostomy Bags",
    pack: "Pack of 1",
    price: "₹ 1,749",
    pricePerUnit: "₹ 1,749/Unit",
    rating: 4.6,
    reviews: 20,
    description: "Transparent ostomy bag with Maxi Tran technology and hide-away outlet for discreet and comfortable wear.",
    features: [
      "Maxi Tran technology",
      "Hide-away outlet",
      "Transparent material",
      "Secure adhesive",
      "Easy to empty"
    ],
    specifications: {
      "System": "1-piece",
      "Type": "Drainable",
      "Material": "Transparent",
      "Size": "12-75mm",
      "Closure": "Open",
      "Wear Time": "Up to 7 days"
    },
    images: ["/placeholder.svg"],
    inStock: true
  },
  {
    id: "coloplast-base-plate-1973",
    productCode: "1973",
    name: "Alterna Long Wear Light Base Plate",
    brand: "Coloplast",
    category: "Ostomy Baseplates",
    pack: "Pack of 1",
    price: "₹ 1,190",
    pricePerUnit: "₹ 1,190/Unit",
    rating: 4.8,
    reviews: 12,
    description: "Lightweight base plate with long wear time, designed for comfort and secure adhesion.",
    features: [
      "Long wear time",
      "Lightweight design",
      "Secure adhesion",
      "Skin-friendly",
      "Easy coupling"
    ],
    specifications: {
      "Size": "60mm",
      "Type": "Base Plate",
      "Wear Time": "Up to 7 days",
      "Coupling": "Mechanical",
      "Material": "Hydrocolloid"
    },
    images: ["/placeholder.svg"],
    inStock: true
  },
  {
    id: "coloplast-ostomy-powder-1907",
    productCode: "1907",
    name: "Ostomy Powder",
    brand: "Coloplast",
    category: "Supporting Products",
    pack: "Pack of 1",
    price: "₹ 501",
    pricePerUnit: "₹ 501/Unit",
    rating: 4.4,
    reviews: 8,
    description: "Fine powder that absorbs moisture and helps create a smooth surface for better adhesive performance.",
    features: [
      "Absorbs moisture",
      "Creates smooth surface",
      "Easy to apply",
      "Prevents skin irritation",
      "Compatible with adhesives"
    ],
    specifications: {
      "Weight": "25g",
      "Type": "Ostomy Powder",
      "Formula": "Absorbent",
      "Application": "Dry powder",
      "Usage": "Skin preparation"
    },
    images: ["/placeholder.svg"],
    inStock: true
  },
  {
    id: "hollister-adapt-paste-79300",
    productCode: "79300",
    name: "Adapt Paste",
    brand: "Hollister",
    category: "Supporting Products",
    pack: "Pack of 1",
    price: "₹ 665",
    pricePerUnit: "₹ 665/Unit",
    rating: 4.5,
    reviews: 18,
    description: "Adaptable paste that fills gaps and provides a secure seal around the stoma for maximum protection.",
    features: [
      "Fills irregular surfaces",
      "Provides secure seal",
      "Easy to mold",
      "Skin-friendly formula",
      "Long-lasting protection"
    ],
    specifications: {
      "Volume": "60g",
      "Type": "Adapt Paste",
      "Formula": "Hydrocolloid",
      "Application": "Topical",
      "Wear Time": "Up to 3 days"
    },
    images: ["/placeholder.svg"],
    inStock: true
  },
  {
    id: "hollister-conform-2-37500",
    productCode: "37500",
    name: "Conform 2 Ostomy Bag",
    brand: "Hollister",
    category: "Ostomy Bags",
    pack: "Pack of 1",
    price: "₹ 1,460",
    pricePerUnit: "₹ 1,460/Unit",
    rating: 4.6,
    reviews: 22,
    description: "Conform 2 ostomy bag with advanced features for comfort and security.",
    features: [
      "Conform 2 technology",
      "Secure fit",
      "Easy to empty",
      "Odor-proof",
      "Comfortable wear"
    ],
    specifications: {
      "Size": "70mm",
      "Type": "Drainable",
      "Material": "Plastic",
      "Closure": "Clamp",
      "Wear Time": "Up to 7 days"
    },
    images: ["/placeholder.svg"],
    inStock: true
  },
  {
    id: "hollister-flexwear-barrier-35500",
    productCode: "35500",
    name: "FlexWear Barrier Baseplate",
    brand: "Hollister",
    category: "Ostomy Baseplates",
    pack: "Pack of 1",
    price: "₹ 1,330",
    pricePerUnit: "₹ 1,330/Unit",
    rating: 4.7,
    reviews: 14,
    description: "Flexible barrier baseplate that conforms to body contours for optimal comfort and protection.",
    features: [
      "FlexWear technology",
      "Conforms to body",
      "Secure adhesion",
      "Gentle removal",
      "Skin protection"
    ],
    specifications: {
      "Size": "55mm",
      "Type": "Barrier",
      "Material": "Hydrocolloid",
      "Wear Time": "Up to 7 days",
      "Adhesive": "Flexible"
    },
    images: ["/placeholder.svg"],
    inStock: true
  }
];

export const categories = [
  {
    id: "ostomy-bags",
    name: "Ostomy Bags",
    description: "Premium quality 1-piece and 2-piece ostomy bags",
    count: products.filter(p => p.category === "Ostomy Bags").length
  },
  {
    id: "ostomy-baseplates",
    name: "Ostomy Baseplates", 
    description: "Secure and comfortable baseplates for all needs",
    count: products.filter(p => p.category === "Ostomy Baseplates").length
  },
  {
    id: "supporting-products",
    name: "Supporting Products",
    description: "Complete care accessories and supplies", 
    count: products.filter(p => p.category === "Supporting Products").length
  }
];

export const brands = [
  { name: "Alterna®", products: products.filter(p => p.brand === "Alterna®").length, popular: true },
  { name: "Brava®", products: products.filter(p => p.brand === "Brava®").length, popular: true },
  { name: "SenSura® Mio", products: products.filter(p => p.brand === "SenSura® Mio").length, popular: true },
  { name: "SenSura®", products: products.filter(p => p.brand === "SenSura®").length, popular: false },
  { name: "Comfeel®", products: products.filter(p => p.brand === "Comfeel®").length, popular: false },
  { name: "Coloplast", products: products.filter(p => p.brand === "Coloplast").length, popular: true },
  { name: "Hollister", products: products.filter(p => p.brand === "Hollister").length, popular: true },
];