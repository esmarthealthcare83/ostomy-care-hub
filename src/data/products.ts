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
  // {
  //   id: "alterna-1-piece-flat-transparent",
  //   name: "Alterna® 1-Piece Flat Transparent Bag for Colostomy/Ileostomy",
  //   brand: "Alterna®",
  //   category: "Ostomy Bags",
  //   pack: "Pack of 6",
  //   price: "₹ 1,788",
  //   pricePerUnit: "₹ 298/Unit",
  //   rating: 4.8,
  //   reviews: 127,
  //   description: "Premium quality 1-piece flat transparent ostomy bag designed for colostomy and ileostomy patients. Features advanced adhesive technology for secure, comfortable wear.",
  //   features: [
  //     "1-piece system for easy application",
  //     "Transparent material for easy monitoring",
  //     "Advanced adhesive for secure fit",
  //     "Odor-proof material",
  //     "Soft, flexible design for comfort",
  //     "Easy-to-use closure system"
  //   ],
  //   specifications: {
  //     "System": "1-piece",
  //     "Type": "Drainable",
  //     "Material": "Transparent",
  //     "Baseplate": "Flat",
  //     "Sizes Available": "Multiple sizes",
  //     "Wear Time": "Up to 7 days"
  //   },
  //   images: ["/placeholder.svg"],
  //   inStock: true,
  //   popular: true,
  //   bestSeller: true
  // },
  // {
  //   id: "brava-adhesive-remover-spray",
  //   name: "Brava® Adhesive Remover Spray",
  //   brand: "Brava®",
  //   category: "Supporting Products",
  //   pack: "Pack of 1",
  //   price: "₹ 870",
  //   pricePerUnit: "₹ 870/Unit",
  //   rating: 4.9,
  //   reviews: 203,
  //   description: "Gentle yet effective adhesive remover spray that helps remove adhesive residue from skin without irritation. Essential for ostomy care routine.",
  //   features: [
  //     "Gentle on sensitive skin",
  //     "Removes adhesive residue effectively",
  //     "No-sting formula",
  //     "Easy spray application",
  //     "Alcohol-free",
  //     "Dermatologically tested"
  //   ],
  //   specifications: {
  //     "Volume": "50ml",
  //     "Type": "Spray",
  //     "Formula": "Alcohol-free",
  //     "Skin Type": "All skin types",
  //     "Application": "Topical"
  //   },
  //   images: ["/placeholder.svg"],
  //   inStock: true,
  //   popular: true,
  //   bestSeller: true
  // },
  // {
  //   id: "sensura-mio-2-piece-flat-baseplate",
  //   name: "SenSura® Mio 2-Piece Flat Baseplate",
  //   brand: "SenSura® Mio",
  //   category: "Ostomy Baseplates",
  //   pack: "Pack of 6",
  //   price: "₹ 3,168",
  //   pricePerUnit: "₹ 528/Unit",
  //   rating: 4.7,
  //   reviews: 89,
  //   description: "Advanced 2-piece flat baseplate with double-layer adhesive technology for secure, comfortable wear. Designed for active lifestyles.",
  //   features: [
  //     "2-piece system flexibility",
  //     "Double-layer adhesive",
  //     "Elastic adhesive for movement",
  //     "Pre-cut or cut-to-fit options",
  //     "Skin-friendly materials",
  //     "Easy coupling system"
  //   ],
  //   specifications: {
  //     "System": "2-piece",
  //     "Type": "Baseplate",
  //     "Convexity": "Flat",
  //     "Coupling": "Mechanical",
  //     "Wear Time": "Up to 7 days",
  //     "Adhesive": "Double-layer"
  //   },
  //   images: ["/placeholder.svg"],
  //   inStock: true,
  //   bestSeller: true
  // },
  // {
  //   id: "alterna-1-piece-deep-convex-urostomy",
  //   name: "Alterna® 1-Piece Deep Convex Transparent Bag for Urostomy",
  //   brand: "Alterna®",
  //   category: "Ostomy Bags",
  //   pack: "Pack of 6",
  //   price: "₹ 3,072",
  //   pricePerUnit: "₹ 512/Unit",
  //   rating: 4.6,
  //   reviews: 95,
  //   description: "Specialized deep convex urostomy bag designed for patients with retracted or flush stomas. Provides excellent seal and comfort.",
  //   features: [
  //     "Deep convex design",
  //     "Anti-reflux valve",
  //     "Tap closure system",
  //     "Transparent for monitoring",
  //     "Extended wear time",
  //     "Secure adhesive system"
  //   ],
  //   specifications: {
  //     "System": "1-piece",
  //     "Type": "Urostomy",
  //     "Convexity": "Deep Convex",
  //     "Material": "Transparent",
  //     "Closure": "Tap",
  //     "Wear Time": "Up to 7 days"
  //   },
  //   images: ["/placeholder.svg"],
  //   inStock: true
  // },
  // {
  //   id: "alterna-1-piece-flat-opaque",
  //   name: "Alterna® 1-Piece Flat Opaque Bag for Colostomy/Ileostomy",
  //   brand: "Alterna®",
  //   category: "Ostomy Bags",
  //   pack: "Pack of 6",
  //   price: "₹ 1,836",
  //   pricePerUnit: "₹ 306/Unit",
  //   rating: 4.5,
  //   reviews: 76,
  //   description: "High-quality opaque ostomy bag that provides discretion and confidence. Perfect for daily activities and social situations.",
  //   features: [
  //     "Opaque material for discretion",
  //     "Comfortable flat baseplate",
  //     "Easy-to-empty design",
  //     "Odor-barrier film",
  //     "Soft cloth backing",
  //     "Secure closure system"
  //   ],
  //   specifications: {
  //     "System": "1-piece",
  //     "Type": "Drainable",
  //     "Material": "Opaque",
  //     "Baseplate": "Flat",
  //     "Backing": "Cloth",
  //     "Wear Time": "Up to 5 days"
  //   },
  //   images: ["/placeholder.svg"],
  //   inStock: true
  // },
  // {
  //   id: "brava-mouldable-ring",
  //   name: "Brava® Mouldable Ring",
  //   brand: "Brava®",
  //   category: "Supporting Products",
  //   pack: "Pack of 10",
  //   price: "₹ 1,490",
  //   pricePerUnit: "₹ 149/Unit",
  //   rating: 4.8,
  //   reviews: 142,
  //   description: "Flexible mouldable ring that fills gaps and prevents leakage around the stoma. Can be shaped to fit individual stoma contours.",
  //   features: [
  //     "Mouldable to fit any stoma shape",
  //     "Alcohol-free formulation",
  //     "Easy to apply and remove",
  //     "Provides extra security",
  //     "Skin-friendly ingredients",
  //     "Long-lasting seal"
  //   ],
  //   specifications: {
  //     "Thickness": "2.0mm",
  //     "Inner Diameter": "Various sizes",
  //     "Material": "Hydrocolloid",
  //     "Flexibility": "High",
  //     "Wear Time": "2-3 days"
  //   },
  //   images: ["/placeholder.svg"],
  //   inStock: true,
  //   popular: true
  // }
  {
      id: 1,
      name: "Alterna® 1-Piece Deep Convex Urostomy Transparent Bag",
      brand: "Alterna®",
      price: "₹ 3,072",
      unitPrice: "₹ 512/Unit",
      rating: 4.8,
      reviews: 39,
      category: "urostomy",
      image: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Pack of 6", "Deep Convex", "Transparent", "Urostomy"],
      inStock: true,
      description: "Premium quality 1-piece deep convex urostomy bag designed for secure fit and comfort.",
      packSize: "Pack of 6",
      productCode: "39001"
    },
    {
      id: 2,
      name: "Alterna® 1-Piece Flat Drainable Opaque Bag",
      brand: "Alterna®",
      price: "₹ 1,836",
      unitPrice: "₹ 306/Unit",
      rating: 4.7,
      reviews: 66,
      category: "colostomy",
      image: "https://images.pexels.com/photos/3902881/pexels-photo-3902881.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Pack of 6", "Flat", "Opaque", "Drainable"],
      inStock: true,
      description: "Reliable 1-piece flat drainable bag for colostomy and ileostomy patients.",
      packSize: "Pack of 6",
      productCode: "66001"
    },
    {
      id: 3,
      name: "Alterna® 1-Piece Flat Transparent Bag for Colostomy/Ileostomy",
      brand: "Alterna®",
      price: "₹ 1,788",
      unitPrice: "₹ 298/Unit",
      rating: 4.8,
      reviews: 106,
      category: "colostomy",
      image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Pack of 6", "Flat", "Transparent", "Drainable"],
      inStock: true,
      description: "High-quality transparent bag allowing easy monitoring of output.",
      packSize: "Pack of 6",
      productCode: "10601"
    },
    {
      id: 4,
      name: "Alterna® 1-Piece Flat Transparent Pediatric Bag",
      brand: "Alterna®",
      price: "₹ 1,842",
      unitPrice: "₹ 307/Unit",
      rating: 4.9,
      reviews: 29,
      category: "pediatric",
      image: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Pack of 6", "Pediatric", "Transparent", "Gentle"],
      inStock: false,
      description: "Specially designed pediatric ostomy bag with gentle adhesive for children.",
      packSize: "Pack of 6",
      productCode: "29001"
    },
    {
      id: 5,
      name: "Alterna® 1-Piece Light Convex Drainable Transparent Bag",
      brand: "Alterna®",
      price: "₹ 2,016",
      unitPrice: "₹ 336/Unit",
      rating: 4.6,
      reviews: 31,
      category: "colostomy",
      image: "https://images.pexels.com/photos/3902881/pexels-photo-3902881.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Pack of 6", "Light Convex", "Transparent", "Drainable"],
      inStock: true,
      description: "Light convex design provides gentle pressure for better seal.",
      packSize: "Pack of 6",
      productCode: "31001"
    },
    {
      id: 6,
      name: "Brava® Adhesive Remover Spray",
      brand: "Brava®",
      price: "₹ 870",
      unitPrice: "₹ 870/Unit",
      rating: 4.7,
      reviews: 207,
      category: "accessories",
      image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Gentle Formula", "Easy Application", "Professional Grade"],
      inStock: true,
      description: "Gentle adhesive remover spray for easy and comfortable appliance removal.",
      packSize: "Pack of 1",
      productCode: "20701"
    },
    {
      id: 7,
      name: "Brava® Mouldable Ring",
      brand: "Brava®",
      price: "₹ 1,490",
      unitPrice: "₹ 149/Unit",
      rating: 4.8,
      reviews: 35,
      category: "accessories",
      image: "https://images.pexels.com/photos/3902881/pexels-photo-3902881.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Pack of 10", "Flexible Seal", "Easy to Use", "Mouldable"],
      inStock: true,
      description: "Flexible mouldable ring that creates a secure seal around the stoma.",
      packSize: "Pack of 10",
      productCode: "35001"
    },
    {
      id: 8,
      name: "SenSura® Mio 2-Piece Flat Baseplate",
      brand: "SenSura® Mio",
      price: "₹ 3,168",
      unitPrice: "₹ 528/Unit",
      rating: 4.9,
      reviews: 93,
      category: "baseplate",
      image: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Pack of 6", "2-Piece", "Flat", "Premium Quality"],
      inStock: true,
      description: "Advanced 2-piece flat baseplate with secure coupling system.",
      packSize: "Pack of 6",
      productCode: "93001"
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