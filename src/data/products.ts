export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  pack: string;
  price: string;
  pricePerUnit: string;
  originalPrice?: string;
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
    name: "Alterna® 1-Piece Flat Transparent Bag for Colostomy/Ileostomy",
    brand: "Alterna®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 1,788",
    pricePerUnit: "₹ 298/Unit",
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
];