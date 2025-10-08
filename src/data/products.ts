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
    productCode: "12061",
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
    productCode: "18311",
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
    productCode: "39001",
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
    productCode: "66001",
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
    productCode: "12075",
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
  },
  // Additional Coloplast Products from Official Store
  {
    id: "sensura-mio-2pc-opaque-colostomy",
    productCode: "16831",
    name: "SenSura® Mio 2-Piece Opaque Bag for Colostomy/Ileostomy",
    brand: "SenSura® Mio",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 2,544",
    pricePerUnit: "₹ 424/Unit",
    rating: 4.8,
    reviews: 3,
    description: "SenSura Mio 2-piece opaque drainable bags feature an elastic adhesive that follows body movements for secure, comfortable wear. The double-layer adhesive provides superior skin protection.",
    features: [
      "Elastic adhesive follows body movements",
      "Double-layer adhesive for skin protection",
      "Opaque material for discretion",
      "Easy-to-use coupling system",
      "Integrated filter for odor control",
      "Soft textile backing for comfort"
    ],
    specifications: {
      "System": "2-piece",
      "Type": "Drainable",
      "Material": "Opaque",
      "Coupling": "Click",
      "Filter": "Integrated",
      "Wear Time": "Up to 4 days"
    },
    images: [
      "https://coloplaststore.in/cdn/shop/files/1-SenSuraMioOpaqueBags-Colostomy_Ileostomy_73b161f6-53da-4c30-80ae-ecbc297b35bd.jpg",
      "https://coloplaststore.in/cdn/shop/files/2-SenSuraMioOpaqueBags-Colostomy_Ileostomy.jpg",
      "https://coloplaststore.in/cdn/shop/files/3-SenSuraMioOpaqueBags-Colostomy_Ileostomy.jpg"
    ],
    inStock: true,
    popular: true
  },
  {
    id: "alterna-1pc-flat-transparent-colostomy",
    productCode: "10601",
    name: "Alterna® 1-Piece Flat Transparent Bag for Colostomy/Ileostomy",
    brand: "Alterna®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 1,788",
    pricePerUnit: "₹ 298/Unit",
    rating: 4.8,
    reviews: 127,
    description: "Premium quality 1-piece flat transparent ostomy bag designed for colostomy and ileostomy patients. Features advanced adhesive technology for secure, comfortable wear with easy monitoring.",
    features: [
      "1-piece system for easy application",
      "Transparent material for easy monitoring",
      "Advanced adhesive for secure fit",
      "Odor-proof material",
      "Soft, flexible design for comfort",
      "Easy-to-use closure system",
      "Integrated filter"
    ],
    specifications: {
      "System": "1-piece",
      "Type": "Drainable",
      "Material": "Transparent",
      "Baseplate": "Flat",
      "Sizes Available": "Multiple sizes",
      "Wear Time": "Up to 7 days",
      "Filter": "Yes"
    },
    images: [
      "https://coloplaststore.in/cdn/shop/files/1-Alterna1-PieceFlatTransparentBags-Colostomy_Ileostomy.jpg",
      "https://coloplaststore.in/cdn/shop/files/2-Alterna1-PieceFlatTransparentBags-Colostomy_Ileostomy.jpg",
      "https://coloplaststore.in/cdn/shop/files/3-Alterna1-PieceFlatTransparentBags-Colostomy_Ileostomy.jpg"
    ],
    inStock: true,
    popular: true,
    bestSeller: true
  },
  {
    id: "alterna-2pc-opaque-colostomy",
    productCode: "16721",
    name: "Alterna® 2-Piece Opaque Bag for Colostomy/Ileostomy",
    brand: "Alterna®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 1,626",
    pricePerUnit: "₹ 271/Unit",
    rating: 4.7,
    reviews: 2,
    description: "Alterna 2-piece opaque drainable bags offer flexibility and discretion. The mechanical coupling system ensures secure attachment while the opaque material provides privacy.",
    features: [
      "2-piece system flexibility",
      "Opaque material for discretion",
      "Mechanical coupling for security",
      "Integrated filter",
      "Easy to empty",
      "Comfortable wear"
    ],
    specifications: {
      "System": "2-piece",
      "Type": "Drainable",
      "Material": "Opaque",
      "Coupling": "Mechanical",
      "Filter": "Integrated",
      "Wear Time": "Up to 4 days"
    },
    images: [
      "https://coloplaststore.in/cdn/shop/files/1-Alterna2-PieceOpaqueBags-Colostomy_Ileostomy.jpg",
      "https://coloplaststore.in/cdn/shop/files/2-Alterna2-PieceOpaqueBags-Colostomy_Ileostomy.jpg"
    ],
    inStock: true
  },
  {
    id: "sensura-2pc-transparent-urostomy",
    productCode: "16841",
    name: "SenSura® 2-Piece Transparent Bag for Urostomy",
    brand: "SenSura®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 2,226",
    pricePerUnit: "₹ 371/Unit",
    rating: 4.7,
    reviews: 3,
    description: "SenSura 2-piece transparent urostomy bags with anti-reflux valve prevent backflow and protect the stoma. The transparent material allows easy monitoring of output.",
    features: [
      "Anti-reflux valve",
      "Transparent for monitoring",
      "Tap outlet for easy drainage",
      "Secure coupling system",
      "Soft backing material",
      "Leak-proof design"
    ],
    specifications: {
      "System": "2-piece",
      "Type": "Urostomy",
      "Material": "Transparent",
      "Valve": "Anti-reflux",
      "Outlet": "Tap",
      "Wear Time": "Up to 4 days"
    },
    images: [
      "https://coloplaststore.in/cdn/shop/files/1-SenSuraTransparentBags-Urostomy_d9944c17-2018-4ded-a2c2-e6bb836c9999.jpg",
      "https://coloplaststore.in/cdn/shop/files/2-SenSuraTransparentBags-Urostomy.jpg"
    ],
    inStock: true
  },
  {
    id: "sensura-mio-2pc-transparent-urostomy",
    productCode: "18831",
    name: "SenSura® Mio 2-Piece Transparent Bag for Urostomy",
    brand: "SenSura® Mio",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 3,210",
    pricePerUnit: "₹ 535/Unit",
    rating: 4.8,
    reviews: 1,
    description: "SenSura Mio 2-piece transparent urostomy bags combine advanced adhesive technology with anti-reflux protection. The elastic adhesive follows body movements for maximum comfort.",
    features: [
      "Elastic adhesive technology",
      "Anti-reflux valve",
      "Transparent material",
      "Easy-to-use tap outlet",
      "Secure click coupling",
      "Soft textile backing"
    ],
    specifications: {
      "System": "2-piece",
      "Type": "Urostomy",
      "Material": "Transparent",
      "Valve": "Anti-reflux",
      "Coupling": "Click",
      "Wear Time": "Up to 4 days"
    },
    images: [
      "https://coloplaststore.in/cdn/shop/files/1-SenSuraMioTransparentUrostomyBags.jpg",
      "https://coloplaststore.in/cdn/shop/files/2-SenSuraMioTransparentUrostomyBags.jpg"
    ],
    inStock: true
  },
  {
    id: "sensura-mio-2pc-transparent-colostomy",
    productCode: "16821",
    name: "SenSura® Mio 2-Piece Transparent Bag for Colostomy/Ileostomy",
    brand: "SenSura® Mio",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 2,250",
    pricePerUnit: "₹ 375/Unit",
    rating: 4.8,
    reviews: 1,
    description: "SenSura Mio 2-piece transparent drainable bags with elastic adhesive that adapts to body contours. Perfect for active lifestyles with secure, comfortable wear.",
    features: [
      "Elastic adhesive follows movements",
      "Transparent for monitoring",
      "Integrated filter",
      "Easy coupling system",
      "Soft backing",
      "Secure seal"
    ],
    specifications: {
      "System": "2-piece",
      "Type": "Drainable",
      "Material": "Transparent",
      "Coupling": "Click",
      "Filter": "Integrated",
      "Wear Time": "Up to 4 days"
    },
    images: [
      "https://coloplaststore.in/cdn/shop/files/1-SenSuraMioTransparentBags-Colostomy_Ileostomy_43666bd4-9a4d-4413-a678-8f843112ee2a.jpg",
      "https://coloplaststore.in/cdn/shop/files/2-SenSuraMioTransparentBags-Colostomy_Ileostomy.jpg"
    ],
    inStock: true
  },
  {
    id: "sensura-mio-1pc-soft-convex-opaque",
    productCode: "17831",
    name: "SenSura® Mio 1-Piece Soft Convex Opaque Bag for Colostomy/Ileostomy",
    brand: "SenSura® Mio",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 3,678",
    pricePerUnit: "₹ 613/Unit",
    rating: 4.9,
    reviews: 2,
    description: "SenSura Mio 1-piece soft convex bags provide gentle pressure for retracted or flush stomas. The elastic adhesive and soft convex design ensure optimal fit and comfort.",
    features: [
      "Soft convex for gentle pressure",
      "Elastic adhesive technology",
      "Opaque for discretion",
      "Integrated filter",
      "Easy to apply",
      "Comfortable wear"
    ],
    specifications: {
      "System": "1-piece",
      "Type": "Drainable",
      "Convexity": "Soft Convex",
      "Material": "Opaque",
      "Filter": "Integrated",
      "Wear Time": "Up to 4 days"
    },
    images: [
      "https://coloplaststore.in/cdn/shop/files/1-SenSuraMio1PcSoftConvexOpaqueBags-Colostomy_Ileostomy.jpg",
      "https://coloplaststore.in/cdn/shop/files/2-SenSuraMio1PcSoftConvexOpaqueBags-Colostomy_Ileostomy.jpg"
    ],
    inStock: true,
    popular: true
  },
  {
    id: "sensura-2pc-opaque-colostomy",
    productCode: "16731",
    name: "SenSura® 2-Piece Opaque Bag for Colostomy/Ileostomy",
    brand: "SenSura®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 1,860",
    pricePerUnit: "₹ 310/Unit",
    rating: 4.7,
    reviews: 2,
    description: "SenSura 2-piece opaque drainable bags with secure coupling and integrated filter. Designed for reliable protection and comfortable daily wear.",
    features: [
      "2-piece flexibility",
      "Opaque material",
      "Integrated filter",
      "Secure coupling",
      "Easy to empty",
      "Comfortable backing"
    ],
    specifications: {
      "System": "2-piece",
      "Type": "Drainable",
      "Material": "Opaque",
      "Coupling": "Mechanical",
      "Filter": "Integrated",
      "Wear Time": "Up to 4 days"
    },
    images: [
      "https://coloplaststore.in/cdn/shop/files/1-SenSuraOpaqueBags-Colostomy_Ileostomy.jpg",
      "https://coloplaststore.in/cdn/shop/files/2-SenSuraOpaqueBags-Colostomy_Ileostomy.jpg"
    ],
    inStock: true
  },
  {
    id: "sensura-mio-2pc-opaque-urostomy",
    productCode: "18841",
    name: "SenSura® Mio 2-Piece Opaque Bag for Urostomy",
    brand: "SenSura® Mio",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 3,348",
    pricePerUnit: "₹ 558/Unit",
    rating: 4.7,
    reviews: 0,
    description: "SenSura Mio 2-piece opaque urostomy bags with anti-reflux valve and elastic adhesive. Provides discretion and security for active lifestyles.",
    features: [
      "Opaque for privacy",
      "Anti-reflux valve",
      "Elastic adhesive",
      "Tap outlet",
      "Click coupling",
      "Soft backing"
    ],
    specifications: {
      "System": "2-piece",
      "Type": "Urostomy",
      "Material": "Opaque",
      "Valve": "Anti-reflux",
      "Coupling": "Click",
      "Wear Time": "Up to 4 days"
    },
    images: [
      "https://coloplaststore.in/cdn/shop/files/1-SenSuraMioOpaqueUrostomyBags.jpg",
      "https://coloplaststore.in/cdn/shop/files/2-SenSuraMioOpaqueUrostomyBags.jpg"
    ],
    inStock: true
  },
  {
    id: "alterna-1pc-flat-opaque-colostomy",
    productCode: "66001",
    name: "Alterna® 1-Piece Flat Opaque Bag for Colostomy/Ileostomy",
    brand: "Alterna®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 1,836",
    pricePerUnit: "₹ 306/Unit",
    rating: 4.7,
    reviews: 1,
    description: "High-quality opaque ostomy bag that provides discretion and confidence. Perfect for daily activities and social situations with reliable protection.",
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
    images: [
      "https://coloplaststore.in/cdn/shop/files/1-Alterna1-PieceFlatOpaqueBags-Colostomy_Ileostomy.jpg",
      "https://coloplaststore.in/cdn/shop/files/2-Alterna1-PieceFlatOpaqueBags-Colostomy_Ileostomy.jpg"
    ],
    inStock: true
  },
  {
    id: "alterna-1pc-light-convex-transparent",
    productCode: "31001",
    name: "Alterna® 1-Piece Light Convex Transparent Bag for Colostomy/Ileostomy",
    brand: "Alterna®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 2,016",
    pricePerUnit: "₹ 336/Unit",
    rating: 4.7,
    reviews: 0,
    description: "Light convex design provides gentle pressure for better seal around the stoma. Transparent material allows easy monitoring of output.",
    features: [
      "Light convex for gentle pressure",
      "Transparent material",
      "Secure adhesive",
      "Integrated filter",
      "Easy to apply",
      "Comfortable wear"
    ],
    specifications: {
      "System": "1-piece",
      "Type": "Drainable",
      "Convexity": "Light Convex",
      "Material": "Transparent",
      "Filter": "Integrated",
      "Wear Time": "Up to 5 days"
    },
    images: [
      "https://coloplaststore.in/cdn/shop/files/1-Alterna1-PieceLightConvexTransparentBags-Colostomy_Ileostomy.jpg",
      "https://coloplaststore.in/cdn/shop/files/2-Alterna1-PieceLightConvexTransparentBags-Colostomy_Ileostomy.jpg"
    ],
    inStock: true
  },
  {
    id: "sensura-2pc-transparent-colostomy",
    productCode: "16721",
    name: "SenSura® 2-Piece Transparent Bag for Colostomy/Ileostomy",
    brand: "SenSura®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 1,830",
    pricePerUnit: "₹ 305/Unit",
    rating: 4.7,
    reviews: 2,
    description: "SenSura 2-piece transparent drainable bags allow easy monitoring while providing secure, comfortable wear. Features integrated filter for odor control.",
    features: [
      "Transparent for monitoring",
      "2-piece flexibility",
      "Integrated filter",
      "Secure coupling",
      "Easy to empty",
      "Comfortable backing"
    ],
    specifications: {
      "System": "2-piece",
      "Type": "Drainable",
      "Material": "Transparent",
      "Coupling": "Mechanical",
      "Filter": "Integrated",
      "Wear Time": "Up to 4 days"
    },
    images: [
      "https://coloplaststore.in/cdn/shop/files/1-SenSuraTransparentBags-Colostomy_Ileostomy_6a8fa343-5206-44b8-94d7-f48af4fad855.jpg",
      "https://coloplaststore.in/cdn/shop/files/2-SenSuraTransparentBags-Colostomy_Ileostomy.jpg"
    ],
    inStock: true
  },
  {
    id: "alterna-1pc-deep-convex-urostomy",
    productCode: "39001",
    name: "Alterna® 1-Piece Deep Convex Transparent Bag for Urostomy",
    brand: "Alterna®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 3,072",
    pricePerUnit: "₹ 512/Unit",
    rating: 4.8,
    reviews: 0,
    description: "Specialized deep convex urostomy bag designed for patients with retracted or flush stomas. Provides excellent seal and comfort with anti-reflux valve.",
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
    images: [
      "https://coloplaststore.in/cdn/shop/files/1-Alterna1-PieceDeepConvexTransparentBags-Urostomy.jpg",
      "https://coloplaststore.in/cdn/shop/files/2-Alterna1-PieceDeepConvexTransparentBags-Urostomy.jpg"
    ],
    inStock: true
  },
  {
    id: "alterna-1pc-deep-convex-colostomy",
    productCode: "30001",
    name: "Alterna® 1-Piece Deep Convex Transparent Bag for Colostomy/Ileostomy",
    brand: "Alterna®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 2,214",
    pricePerUnit: "₹ 369/Unit",
    rating: 4.7,
    reviews: 0,
    description: "Deep convex 1-piece bag provides firm pressure for challenging stoma situations. Transparent material allows easy monitoring of output.",
    features: [
      "Deep convex for firm pressure",
      "Transparent material",
      "Secure adhesive",
      "Integrated filter",
      "Easy to empty",
      "Reliable seal"
    ],
    specifications: {
      "System": "1-piece",
      "Type": "Drainable",
      "Convexity": "Deep Convex",
      "Material": "Transparent",
      "Filter": "Integrated",
      "Wear Time": "Up to 5 days"
    },
    images: [
      "https://coloplaststore.in/cdn/shop/files/1-Alterna1-PieceDeepConvexTransparentBags-Colostomy_Ileostomy.jpg",
      "https://coloplaststore.in/cdn/shop/files/2-Alterna1-PieceDeepConvexTransparentBags-Colostomy_Ileostomy.jpg"
    ],
    inStock: true
  },
  {
    id: "alterna-1pc-flat-transparent-pediatric",
    productCode: "29001",
    name: "Alterna® 1-Piece Flat Transparent Pediatric Bag for Colostomy/Ileostomy",
    brand: "Alterna®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 1,842",
    pricePerUnit: "₹ 307/Unit",
    rating: 4.9,
    reviews: 3,
    description: "Specially designed pediatric ostomy bag with gentle adhesive for children's sensitive skin. Transparent material allows parents to easily monitor output.",
    features: [
      "Pediatric size",
      "Gentle adhesive",
      "Transparent for monitoring",
      "Soft backing",
      "Easy to apply",
      "Comfortable for children"
    ],
    specifications: {
      "System": "1-piece",
      "Type": "Drainable/Pediatric",
      "Material": "Transparent",
      "Baseplate": "Flat",
      "Age Group": "Pediatric",
      "Wear Time": "Up to 3 days"
    },
    images: [
      "https://coloplaststore.in/cdn/shop/files/1-Alterna1-PieceFlatTransparentPediatricBags-Colostomy_Ileostomy.jpg",
      "https://coloplaststore.in/cdn/shop/files/2-Alterna1-PieceFlatTransparentPediatricBags-Colostomy_Ileostomy.jpg"
    ],
    inStock: false
  },
  // 1-Piece Bags from Coloplast Store
  {
    id: "sensura-mio-1pc-soft-convex-opaque-colostomy",
    productCode: "SM1SCOC",
    name: "SenSura® Mio 1-Piece Soft Convex Opaque Bag for Colostomy/Ileostomy",
    brand: "SenSura® Mio",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 3,678",
    pricePerUnit: "₹ 613/Unit",
    rating: 4.8,
    reviews: 2,
    description: "SenSura Mio 1-piece soft convex drainable opaque bag designed for colostomy and ileostomy patients. Features neutral grey textile material for discretion.",
    features: [
      "1-piece system",
      "Soft convex baseplate",
      "Opaque material for discretion",
      "Neutral grey textile",
      "Water-repellent surface",
      "Circular pre-filter to reduce ballooning"
    ],
    specifications: {
      "System": "1-piece",
      "Type": "Drainable",
      "Material": "Opaque",
      "Baseplate": "Soft Convex",
      "Surgery Type": "Colostomy/Ileostomy",
      "Wear Time": "Up to 7 days"
    },
    images: ["https://coloplaststore.in/cdn/shop/files/1-SenSuraMio1PcSoftConvexOpaqueBags-Colostomy_Ileostomy.jpg"],
    inStock: true,
    popular: true
  },
  {
    id: "alterna-1pc-light-convex-transparent-colostomy",
    productCode: "A1LCTC",
    name: "Alterna® 1-Piece Light Convex Transparent Bag for Colostomy/Ileostomy",
    brand: "Alterna®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 2,016",
    pricePerUnit: "₹ 336/Unit",
    rating: 4.6,
    reviews: 31,
    description: "Light convex design provides gentle pressure for better seal. Transparent material allows easy monitoring of output.",
    features: [
      "1-piece system",
      "Light convex baseplate",
      "Transparent material",
      "Gentle pressure for better seal",
      "Easy to monitor output",
      "Drainable design"
    ],
    specifications: {
      "System": "1-piece",
      "Type": "Drainable",
      "Material": "Transparent",
      "Baseplate": "Light Convex",
      "Surgery Type": "Colostomy/Ileostomy",
      "Wear Time": "Up to 7 days"
    },
    images: ["https://coloplaststore.in/cdn/shop/files/1-Alterna1-PieceLightConvexTransparentBags-Colostomy_Ileostomy.jpg"],
    inStock: true
  },
  {
    id: "alterna-1pc-deep-convex-transparent-urostomy",
    productCode: "A1DCTU",
    name: "Alterna® 1-Piece Deep Convex Transparent Bag for Urostomy",
    brand: "Alterna®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 3,072",
    pricePerUnit: "₹ 512/Unit",
    rating: 4.6,
    reviews: 39,
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
      "Material": "Transparent",
      "Baseplate": "Deep Convex",
      "Surgery Type": "Urostomy",
      "Wear Time": "Up to 7 days"
    },
    images: ["https://coloplaststore.in/cdn/shop/files/1-Alterna1-PieceDeepConvexTransparentBags-Urostomy.jpg"],
    inStock: true
  },
  {
    id: "alterna-1pc-deep-convex-transparent-colostomy",
    productCode: "A1DCTC",
    name: "Alterna® 1-Piece Deep Convex Transparent Bag for Colostomy/Ileostomy",
    brand: "Alterna®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 2,214",
    pricePerUnit: "₹ 369/Unit",
    rating: 4.6,
    reviews: 31,
    description: "Deep convex design for retracted stomas. Transparent material allows easy monitoring.",
    features: [
      "1-piece system",
      "Deep convex baseplate",
      "Transparent material",
      "Secure adhesion",
      "Easy to monitor",
      "Drainable design"
    ],
    specifications: {
      "System": "1-piece",
      "Type": "Drainable",
      "Material": "Transparent",
      "Baseplate": "Deep Convex",
      "Surgery Type": "Colostomy/Ileostomy",
      "Wear Time": "Up to 7 days"
    },
    images: ["https://coloplaststore.in/cdn/shop/files/1-Alterna1-PieceDeepConvexTransparentBags-Colostomy_Ileostomy.jpg"],
    inStock: true
  },
  {
    id: "sensura-1pc-flat-transparent-colostomy",
    productCode: "S1FTC",
    name: "SenSura® 1-Piece Flat Transparent Bag for Colostomy/Ileostomy",
    brand: "SenSura®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 2,322",
    pricePerUnit: "₹ 387/Unit",
    rating: 4.9,
    reviews: 93,
    description: "Advanced 1-piece flat transparent bag with double-layer adhesive technology for secure, comfortable wear.",
    features: [
      "1-piece system",
      "Flat baseplate",
      "Transparent material",
      "Double-layer adhesive",
      "Elastic adhesive for movement",
      "Skin-friendly materials"
    ],
    specifications: {
      "System": "1-piece",
      "Type": "Drainable",
      "Material": "Transparent",
      "Baseplate": "Flat",
      "Surgery Type": "Colostomy/Ileostomy",
      "Wear Time": "Up to 7 days"
    },
    images: ["https://coloplaststore.in/cdn/shop/files/1-SenSura1PcFlatTransparentBags-Colostomy_Ileostomy.jpg"],
    inStock: true,
    bestSeller: true
  },
  {
    id: "alterna-1pc-light-convex-opaque-colostomy",
    productCode: "A1LCOC",
    name: "Alterna® 1-Piece Light Convex Opaque Bag for Colostomy/Ileostomy",
    brand: "Alterna®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 2,214",
    pricePerUnit: "₹ 369/Unit",
    rating: 4.7,
    reviews: 66,
    description: "Light convex opaque bag that provides discretion and gentle pressure for better seal.",
    features: [
      "1-piece system",
      "Light convex baseplate",
      "Opaque material for discretion",
      "Gentle pressure",
      "Comfortable wear",
      "Drainable design"
    ],
    specifications: {
      "System": "1-piece",
      "Type": "Drainable",
      "Material": "Opaque",
      "Baseplate": "Light Convex",
      "Surgery Type": "Colostomy/Ileostomy",
      "Wear Time": "Up to 7 days"
    },
    images: ["https://coloplaststore.in/cdn/shop/files/1-Alterna1-PieceLightConvexOpaqueBags-Colostomy_Ileostomy.jpg"],
    inStock: true
  },
  {
    id: "sensura-mio-1pc-flat-transparent-colostomy",
    productCode: "SM1FTC",
    name: "SenSura® Mio 1-Piece Flat Transparent Bag for Colostomy/Ileostomy",
    brand: "SenSura® Mio",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 3,102",
    pricePerUnit: "₹ 517/Unit",
    rating: 4.8,
    reviews: 106,
    description: "SenSura Mio 1-piece flat transparent bag with neutral grey textile and water-repellent surface.",
    features: [
      "1-piece system",
      "Flat baseplate",
      "Transparent material",
      "Neutral grey textile",
      "Water-repellent surface",
      "Circular pre-filter"
    ],
    specifications: {
      "System": "1-piece",
      "Type": "Drainable",
      "Material": "Transparent",
      "Baseplate": "Flat",
      "Surgery Type": "Colostomy/Ileostomy",
      "Wear Time": "Up to 7 days"
    },
    images: ["https://coloplaststore.in/cdn/shop/files/1-SenSuraMio1PcFlatTransparentBags-Colostomy_Ileostomy.jpg"],
    inStock: true,
    popular: true
  },
  {
    id: "sensura-mio-1pc-soft-convex-transparent-colostomy",
    productCode: "SM1SCTC",
    name: "SenSura® Mio 1-Piece Soft Convex Transparent Bag for Colostomy/Ileostomy",
    brand: "SenSura® Mio",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 3,348",
    pricePerUnit: "₹ 558/Unit",
    rating: 4.8,
    reviews: 35,
    description: "SenSura Mio 1-piece soft convex transparent bag with advanced features for active lifestyles.",
    features: [
      "1-piece system",
      "Soft convex baseplate",
      "Transparent material",
      "Neutral grey textile",
      "Water-repellent",
      "Pre-filter technology"
    ],
    specifications: {
      "System": "1-piece",
      "Type": "Drainable",
      "Material": "Transparent",
      "Baseplate": "Soft Convex",
      "Surgery Type": "Colostomy/Ileostomy",
      "Wear Time": "Up to 7 days"
    },
    images: ["https://coloplaststore.in/cdn/shop/files/1-SenSuraMio1PcSoftConvexTransparentBags-Colostomy_Ileostomy.jpg"],
    inStock: true
  },
  {
    id: "sensura-mio-1pc-light-convex-opaque-colostomy",
    productCode: "SM1LCOC",
    name: "SenSura® Mio 1-Piece Light Convex Opaque Bag for Colostomy/Ileostomy",
    brand: "SenSura® Mio",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 3,606",
    pricePerUnit: "₹ 601/Unit",
    rating: 4.7,
    reviews: 89,
    description: "SenSura Mio 1-piece light convex opaque bag for discreet and comfortable wear.",
    features: [
      "1-piece system",
      "Light convex baseplate",
      "Opaque material",
      "Neutral grey textile",
      "Water-repellent",
      "Discreet design"
    ],
    specifications: {
      "System": "1-piece",
      "Type": "Drainable",
      "Material": "Opaque",
      "Baseplate": "Light Convex",
      "Surgery Type": "Colostomy/Ileostomy",
      "Wear Time": "Up to 7 days"
    },
    images: ["https://coloplaststore.in/cdn/shop/files/1-SenSuraMio1PcLightConvexBags-Colostomy_Ileostomy.jpg"],
    inStock: true
  },
  {
    id: "sensura-mio-1pc-soft-convex-transparent-urostomy",
    productCode: "SM1SCTU",
    name: "SenSura® Mio 1-Piece Soft Convex Transparent Bag for Urostomy",
    brand: "SenSura® Mio",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 4,020",
    pricePerUnit: "₹ 670/Unit",
    rating: 4.6,
    reviews: 95,
    description: "SenSura Mio 1-piece soft convex urostomy bag with anti-reflux valve and tap closure.",
    features: [
      "1-piece system",
      "Soft convex baseplate",
      "Transparent material",
      "Anti-reflux valve",
      "Tap closure",
      "Secure adhesion"
    ],
    specifications: {
      "System": "1-piece",
      "Type": "Urostomy",
      "Material": "Transparent",
      "Baseplate": "Soft Convex",
      "Surgery Type": "Urostomy",
      "Wear Time": "Up to 7 days"
    },
    images: ["https://coloplaststore.in/cdn/shop/files/1-SenSuraMio1PcSoftConvexTransparentBags-Urostomy.jpg"],
    inStock: true
  },
  {
    id: "alterna-1pc-light-convex-transparent-urostomy",
    productCode: "A1LCTU",
    name: "Alterna® 1-Piece Light Convex Transparent Bag for Urostomy",
    brand: "Alterna®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 3,288",
    pricePerUnit: "₹ 548/Unit",
    rating: 4.5,
    reviews: 76,
    description: "Light convex urostomy bag with anti-reflux valve and tap closure system.",
    features: [
      "1-piece system",
      "Light convex baseplate",
      "Transparent material",
      "Anti-reflux valve",
      "Tap closure",
      "Easy to empty"
    ],
    specifications: {
      "System": "1-piece",
      "Type": "Urostomy",
      "Material": "Transparent",
      "Baseplate": "Light Convex",
      "Surgery Type": "Urostomy",
      "Wear Time": "Up to 7 days"
    },
    images: ["https://coloplaststore.in/cdn/shop/files/1-Alterna1-PieceLightConvexTransparentBags-Urostomy.jpg"],
    inStock: true
  },
  {
    id: "sensura-mio-1pc-flat-opaque-colostomy",
    productCode: "SM1FOC",
    name: "SenSura® Mio 1-Piece Flat Opaque Bag for Colostomy/Ileostomy",
    brand: "SenSura® Mio",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 3,168",
    pricePerUnit: "₹ 528/Unit",
    rating: 4.7,
    reviews: 142,
    description: "SenSura Mio 1-piece flat opaque bag with neutral grey textile for maximum discretion.",
    features: [
      "1-piece system",
      "Flat baseplate",
      "Opaque material",
      "Neutral grey textile",
      "Water-repellent",
      "Discreet design"
    ],
    specifications: {
      "System": "1-piece",
      "Type": "Drainable",
      "Material": "Opaque",
      "Baseplate": "Flat",
      "Surgery Type": "Colostomy/Ileostomy",
      "Wear Time": "Up to 7 days"
    },
    images: ["https://coloplaststore.in/cdn/shop/files/1-SenSuraMio1PcFlatOpaqueBags-Colostomy_Ileostomy.jpg"],
    inStock: true,
    popular: true
  },
  // 2-Piece Bags from Coloplast Store
  {
    id: "sensura-mio-2pc-opaque-colostomy",
    productCode: "SM2OC",
    name: "SenSura® Mio 2-Piece Opaque Bag for Colostomy/Ileostomy",
    brand: "SenSura® Mio",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 2,544",
    pricePerUnit: "₹ 424/Unit",
    rating: 4.8,
    reviews: 127,
    description: "SenSura Mio 2-piece opaque bag with Click coupling for secure attachment. Features neutral grey textile.",
    features: [
      "2-piece system",
      "Opaque material",
      "Click coupling",
      "Neutral grey textile",
      "Water-repellent",
      "Easy to change"
    ],
    specifications: {
      "System": "2-piece",
      "Type": "Drainable",
      "Material": "Opaque",
      "Coupling": "Click",
      "Surgery Type": "Colostomy/Ileostomy",
      "Wear Time": "Bag: 1-3 days"
    },
    images: ["https://coloplaststore.in/cdn/shop/files/1-SenSuraMioOpaqueBags-Colostomy_Ileostomy_73b161f6-53da-4c30-80ae-ecbc297b35bd.jpg"],
    inStock: true,
    popular: true,
    bestSeller: true
  },
  {
    id: "alterna-2pc-opaque-colostomy",
    productCode: "A2OC",
    name: "Alterna® 2-Piece Opaque Bag for Colostomy/Ileostomy",
    brand: "Alterna®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 1,626",
    pricePerUnit: "₹ 271/Unit",
    rating: 4.9,
    reviews: 203,
    description: "Alterna 2-piece opaque bag with secure coupling system. Reliable and skin-friendly.",
    features: [
      "2-piece system",
      "Opaque material",
      "Secure coupling",
      "Easy to change",
      "Skin-friendly",
      "Comfortable wear"
    ],
    specifications: {
      "System": "2-piece",
      "Type": "Drainable",
      "Material": "Opaque",
      "Coupling": "Mechanical",
      "Surgery Type": "Colostomy/Ileostomy",
      "Wear Time": "Bag: 1-3 days"
    },
    images: ["https://coloplaststore.in/cdn/shop/files/1-Alterna2-PieceOpaqueBags-Colostomy_Ileostomy.jpg"],
    inStock: true,
    bestSeller: true
  },
  {
    id: "sensura-2pc-transparent-urostomy",
    productCode: "S2TU",
    name: "SenSura® 2-Piece Transparent Bag for Urostomy",
    brand: "SenSura®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 2,226",
    pricePerUnit: "₹ 371/Unit",
    rating: 4.7,
    reviews: 89,
    description: "SenSura 2-piece transparent urostomy bag with anti-reflux valve and tap closure.",
    features: [
      "2-piece system",
      "Transparent material",
      "Anti-reflux valve",
      "Tap closure",
      "Easy to monitor",
      "Secure coupling"
    ],
    specifications: {
      "System": "2-piece",
      "Type": "Urostomy",
      "Material": "Transparent",
      "Coupling": "Mechanical",
      "Surgery Type": "Urostomy",
      "Wear Time": "Bag: 1-3 days"
    },
    images: ["https://coloplaststore.in/cdn/shop/files/1-SenSuraTransparentBags-Urostomy_d9944c17-2018-4ded-a2c2-e6bb836c9999.jpg"],
    inStock: true
  },
  {
    id: "sensura-mio-2pc-transparent-urostomy",
    productCode: "SM2TU",
    name: "SenSura® Mio 2-Piece Transparent Bag for Urostomy",
    brand: "SenSura® Mio",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 3,210",
    pricePerUnit: "₹ 535/Unit",
    rating: 4.6,
    reviews: 95,
    description: "SenSura Mio 2-piece transparent urostomy bag with Click coupling and anti-reflux valve.",
    features: [
      "2-piece system",
      "Transparent material",
      "Click coupling",
      "Anti-reflux valve",
      "Tap closure",
      "Neutral grey textile"
    ],
    specifications: {
      "System": "2-piece",
      "Type": "Urostomy",
      "Material": "Transparent",
      "Coupling": "Click",
      "Surgery Type": "Urostomy",
      "Wear Time": "Bag: 1-3 days"
    },
    images: ["https://coloplaststore.in/cdn/shop/files/1-SenSuraMioTransparentUrostomyBags.jpg"],
    inStock: true
  },
  {
    id: "sensura-mio-2pc-transparent-colostomy",
    productCode: "SM2TC",
    name: "SenSura® Mio 2-Piece Transparent Bag for Colostomy/Ileostomy",
    brand: "SenSura® Mio",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 2,250",
    pricePerUnit: "₹ 375/Unit",
    rating: 4.8,
    reviews: 106,
    description: "SenSura Mio 2-piece transparent bag with Click coupling for easy monitoring.",
    features: [
      "2-piece system",
      "Transparent material",
      "Click coupling",
      "Easy to monitor",
      "Neutral grey textile",
      "Water-repellent"
    ],
    specifications: {
      "System": "2-piece",
      "Type": "Drainable",
      "Material": "Transparent",
      "Coupling": "Click",
      "Surgery Type": "Colostomy/Ileostomy",
      "Wear Time": "Bag: 1-3 days"
    },
    images: ["https://coloplaststore.in/cdn/shop/files/1-SenSuraMioTransparentBags-Colostomy_Ileostomy_43666bd4-9a4d-4413-a678-8f843112ee2a.jpg"],
    inStock: true
  },
  {
    id: "sensura-2pc-opaque-colostomy",
    productCode: "S2OC",
    name: "SenSura® 2-Piece Opaque Bag for Colostomy/Ileostomy",
    brand: "SenSura®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 1,860",
    pricePerUnit: "₹ 310/Unit",
    rating: 4.7,
    reviews: 142,
    description: "SenSura 2-piece opaque bag with secure coupling for discreet wear.",
    features: [
      "2-piece system",
      "Opaque material",
      "Secure coupling",
      "Discreet design",
      "Easy to change",
      "Comfortable wear"
    ],
    specifications: {
      "System": "2-piece",
      "Type": "Drainable",
      "Material": "Opaque",
      "Coupling": "Mechanical",
      "Surgery Type": "Colostomy/Ileostomy",
      "Wear Time": "Bag: 1-3 days"
    },
    images: ["https://coloplaststore.in/cdn/shop/files/1-SenSuraOpaqueBags-Colostomy_Ileostomy.jpg"],
    inStock: true
  },
  {
    id: "sensura-mio-2pc-opaque-urostomy",
    productCode: "SM2OU",
    name: "SenSura® Mio 2-Piece Opaque Bag for Urostomy",
    brand: "SenSura® Mio",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 3,348",
    pricePerUnit: "₹ 558/Unit",
    rating: 4.8,
    reviews: 35,
    description: "SenSura Mio 2-piece opaque urostomy bag with Click coupling and anti-reflux valve.",
    features: [
      "2-piece system",
      "Opaque material",
      "Click coupling",
      "Anti-reflux valve",
      "Tap closure",
      "Discreet design"
    ],
    specifications: {
      "System": "2-piece",
      "Type": "Urostomy",
      "Material": "Opaque",
      "Coupling": "Click",
      "Surgery Type": "Urostomy",
      "Wear Time": "Bag: 1-3 days"
    },
    images: ["https://coloplaststore.in/cdn/shop/files/1-SenSuraMioOpaqueUrostomyBags.jpg"],
    inStock: true
  },
  {
    id: "sensura-2pc-transparent-colostomy",
    productCode: "S2TC",
    name: "SenSura® 2-Piece Transparent Bag for Colostomy/Ileostomy",
    brand: "SenSura®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 1,830",
    pricePerUnit: "₹ 305/Unit",
    rating: 4.9,
    reviews: 93,
    description: "SenSura 2-piece transparent bag with secure coupling for easy monitoring.",
    features: [
      "2-piece system",
      "Transparent material",
      "Secure coupling",
      "Easy to monitor",
      "Comfortable wear",
      "Reliable seal"
    ],
    specifications: {
      "System": "2-piece",
      "Type": "Drainable",
      "Material": "Transparent",
      "Coupling": "Mechanical",
      "Surgery Type": "Colostomy/Ileostomy",
      "Wear Time": "Bag: 1-3 days"
    },
    images: ["https://coloplaststore.in/cdn/shop/files/1-SenSuraTransparentBags-Colostomy_Ileostomy_6a8fa343-5206-44b8-94d7-f48af4fad855.jpg"],
    inStock: true,
    bestSeller: true
  },
  {
    id: "alterna-2pc-opaque-urostomy",
    productCode: "A2OU",
    name: "Alterna® 2-Piece Opaque Bag for Urostomy",
    brand: "Alterna®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 2,010",
    pricePerUnit: "₹ 335/Unit",
    rating: 4.6,
    reviews: 76,
    description: "Alterna 2-piece opaque urostomy bag with anti-reflux valve and tap closure.",
    features: [
      "2-piece system",
      "Opaque material",
      "Anti-reflux valve",
      "Tap closure",
      "Discreet design",
      "Easy to change"
    ],
    specifications: {
      "System": "2-piece",
      "Type": "Urostomy",
      "Material": "Opaque",
      "Coupling": "Mechanical",
      "Surgery Type": "Urostomy",
      "Wear Time": "Bag: 1-3 days"
    },
    images: ["https://coloplaststore.in/cdn/shop/files/1-Alterna2-PieceOpaqueBags-Urostomy.jpg"],
    inStock: true
  },
  {
    id: "alterna-2pc-transparent-colostomy",
    productCode: "A2TC",
    name: "Alterna® 2-Piece Transparent Bag for Colostomy/Ileostomy",
    brand: "Alterna®",
    category: "Ostomy Bags",
    pack: "Pack of 6",
    price: "₹ 1,548",
    pricePerUnit: "₹ 258/Unit",
    rating: 4.7,
    reviews: 66,
    description: "Alterna 2-piece transparent bag with secure coupling for easy monitoring.",
    features: [
      "2-piece system",
      "Transparent material",
      "Secure coupling",
      "Easy to monitor",
      "Comfortable wear",
      "Skin-friendly"
    ],
    specifications: {
      "System": "2-piece",
      "Type": "Drainable",
      "Material": "Transparent",
      "Coupling": "Mechanical",
      "Surgery Type": "Colostomy/Ileostomy",
      "Wear Time": "Bag: 1-3 days"
    },
    images: ["https://coloplaststore.in/cdn/shop/files/1-Alterna2-PieceTransparentBags-Colostomy_Ileostomy.jpg"],
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