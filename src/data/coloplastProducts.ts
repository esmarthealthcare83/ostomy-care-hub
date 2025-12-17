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
  productcode?: number;
  diameter?: string;
  baseplateType?: string;
  surgeryType?: string;
  bagSystem?: string;
  productType?: string;
  bagType?: string;
  description: string;
  features: string[];
  image: string | string[];
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
    productcode: 12680,
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
    image: ["/images/coloplast/1-piece/1.webp", "/images/coloplast/1-piece/1-1.webp"],
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
    productcode: 17500,
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
    image: ["/images/coloplast/1-piece/3.webp", "/images/coloplast/1-piece/3-1.webp", "/images/coloplast/1-piece/3-2.webp"],
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
    productcode: 17517,
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
    image: ["/images/coloplast/1-piece/5.webp", "/images/coloplast/1-piece/5-1.webp"],
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
    productcode: 17512,
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
    image: ["/images/coloplast/1-piece/7.webp", "/images/coloplast/1-piece/7-1.webp","/images/coloplast/1-piece/7-2.webp"],
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
    productcode: 17515,
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
    image: ["/images/coloplast/1-piece/9.webp", "/images/coloplast/1-piece/9-1.webp","/images/coloplast/1-piece/9-2.webp"],
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
    productcode: 13984,
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
    image: ["/images/coloplast/1-piece/11.webp", "/images/coloplast/1-piece/11-1.webp"],
    inStock: true
  },
 {
    id: "col-064",
    name: "Alterna® 2-Piece Opaque Bag for Urostomy",
    brand: "Alterna",
    category: "ostomy-bags",
    subCategory: "2-piece-bags",
    price: 2010,
    mrp: 2010,
    packSize: 6,
    productcode: 17634,
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
    image: ["/images/coloplast/1-piece/22.webp", "/images/coloplast/1-piece/22-1.webp", "/images/coloplast/1-piece/22-2.webp" ],
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
    productcode: 0,
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
    image: ["/images/coloplast/1-piece/2.webp", "/images/coloplast/1-piece/2-1.webp","/images/coloplast/1-piece/2-2.webp"],
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
    productcode: 10451,
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
    image: ["/images/coloplast/1-piece/4.webp", "/images/coloplast/1-piece/4-1.webp","/images/coloplast/1-piece/4-2.webp"],
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
    productcode: 16405,
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
    image: ["/images/coloplast/1-piece/6.webp", "/images/coloplast/1-piece/6-1.webp"],
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
    productcode: 16415,
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
    image: ["/images/coloplast/1-piece/8.webp", "/images/coloplast/1-piece/8-1.webp"],
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
    productcode: 11432,
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
    image: ["/images/coloplast/1-piece/10.webp", "/images/coloplast/1-piece/10-1.webp"],
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
    productcode: 11433,
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
    image: ["/images/coloplast/1-piece/12.webp", "/images/coloplast/1-piece/12-1.webp"],
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
    productcode: 10364,
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
    image: ["/images/coloplast/1-piece/13.webp", "/images/coloplast/1-piece/13-1.webp"," /images/coloplast/1-piece/13-2.webp","/images/coloplast/1-piece/13-3.webp","/images/coloplast/1-piece/13-4.webp","/images/coloplast/1-piece/13-5.webp","/images/coloplast/1-piece/13-6.webp","/images/coloplast/1-piece/13-7.webp","/images/coloplast/1-piece/13-8.webp","/images/coloplast/1-piece/13-9.webp","/images/coloplast/1-piece/13-10.webp"],
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
    productcode: 10385,
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
    image: ["/images/coloplast/1-piece/15.webp", "/images/coloplast/1-piece/15-1.webp"],
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
    productcode: 11492,
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
    image: ["/images/coloplast/1-piece/14.webp", "/images/coloplast/1-piece/14-1.webp"," /images/coloplast/1-piece/14-2.webp"],
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
    productcode: 11854,
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
    image: ["/images/coloplast/1-piece/16.webp", "/images/coloplast/1-piece/16-1.webp"],
    inStock: true
  },
  {
    id: "col-063",
    name: "SenSura® Mio 2-Piece Opaque Bag for Urostomy",
    brand: "SenSura Mio",
    category: "ostomy-bags",
    subCategory: "2-piece-bags",
    price: 3348,
    mrp: 3348,
    packSize: 6,
    productcode: 11491,
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
    image: ["/images/coloplast/1-piece/21-1.webp", "/images/coloplast/1-piece/21-3.webp", "/images/coloplast/1-piece/21-2.webp"],
    inStock: true
  },

  // Ostomy Baseplates - Flat
  // {
  //   id: "col-017",
  //   name: "SenSura® Mio Flat Baseplate",
  //   brand: "SenSura Mio",
  //   category: "ostomy-baseplates",
  //   subCategory: "flat",
  //   price: 2100,
  //   mrp: 2100,
  //   packSize: 5,
  //   productcode: 0,
  //   diameter: "40mm, 50mm, 60mm, 70mm",
  //   baseplateType: "Flat",
  //   description: "SenSura Mio flat baseplate with adaptive technology for 2-piece systems.",
  //   features: [
  //     "Adaptive elastic adhesive",
  //     "Flat baseplate",
  //     "Secure coupling",
  //     "Skin-friendly",
  //     "Flexible fit",
  //     "Pack of 5 baseplates"
  //   ],
  //   image: "/images/coloplast/sensura-mio-baseplate-flat.jpg",
  //   inStock: true
  // },
  // {
  //   id: "col-018",
  //   name: "Alterna® Flat Baseplate",
  //   brand: "Alterna",
  //   category: "ostomy-baseplates",
  //   subCategory: "flat",
  //   price: 1500,
  //   mrp: 1500,
  //   packSize: 5,
  //   productcode: 0,
  //   diameter: "40mm, 50mm, 60mm, 70mm",
  //   baseplateType: "Flat",
  //   description: "Alterna flat baseplate for 2-piece ostomy systems.",
  //   features: [
  //     "Flat design",
  //     "Secure adhesion",
  //     "Easy coupling",
  //     "Comfortable wear",
  //     "Skin protection",
  //     "Pack of 5 baseplates"
  //   ],
  //   image: "/images/coloplast/alterna-baseplate-flat.jpg",
  //   inStock: true
  // },

  // Ostomy Baseplates - Light Convex
  // {
  //   id: "col-019",
  //   name: "SenSura® Mio Light Convex Baseplate",
  //   brand: "SenSura Mio",
  //   category: "ostomy-baseplates",
  //   subCategory: "light-convex",
  //   price: 2400,
  //   mrp: 2400,
  //   packSize: 5,
  //   productcode: 0,
  //   diameter: "40mm, 50mm, 60mm",
  //   baseplateType: "Light Convex",
  //   description: "SenSura Mio light convex baseplate for flush or retracted stomas.",
  //   features: [
  //     "Light convex support",
  //     "Adaptive technology",
  //     "Secure coupling",
  //     "Gentle support",
  //     "Flexible fit",
  //     "Pack of 5 baseplates"
  //   ],
  //   image: "/images/coloplast/sensura-mio-baseplate-light-convex.jpg",
  //   inStock: true
  // },
  // {
  //   id: "col-020",
  //   name: "Alterna® Light Convex Baseplate",
  //   brand: "Alterna",
  //   category: "ostomy-baseplates",
  //   subCategory: "light-convex",
  //   price: 1800,
  //   mrp: 1800,
  //   packSize: 5,
  //   productcode: 0,
  //   diameter: "40mm, 50mm, 60mm",
  //   baseplateType: "Light Convex",
  //   description: "Alterna light convex baseplate for gentle stoma support.",
  //   features: [
  //     "Light convex design",
  //     "Secure adhesion",
  //     "Gentle support",
  //     "Easy coupling",
  //     "Comfortable wear",
  //     "Pack of 5 baseplates"
  //   ],
  //   image: "/images/coloplast/alterna-baseplate-light-convex.jpg",
  //   inStock: true
  // },

  // // Ostomy Baseplates - Deep Convex
  // {
  //   id: "col-021",
  //   name: "Alterna® Deep Convex Baseplate",
  //   brand: "Alterna",
  //   category: "ostomy-baseplates",
  //   subCategory: "deep-convex",
  //   price: 2200,
  //   mrp: 2200,
  //   packSize: 5,
  //   productcode: 0,
  //   diameter: "40mm, 50mm",
  //   baseplateType: "Deep Convex",
  //   description: "Alterna deep convex baseplate for retracted stomas requiring firm support.",
  //   features: [
  //     "Deep convex support",
  //     "Firm adhesion",
  //     "Prevents leakage",
  //     "Secure coupling",
  //     "Comfortable fit",
  //     "Pack of 5 baseplates"
  //   ],
  //   image: "/images/coloplast/alterna-baseplate-deep-convex.jpg",
  //   inStock: true
  // },

  // Supporting Products
  {
    id: "col-022",
    name: "Brava® Elastic Tape",
    brand: "Brava",
    category: "supporting-products",
    subCategory: "accessories",
    price: 2500,
    mrp: 2500,
    packSize: 20,
    productcode: 12070,
    description: "Brava Elastic Tape for extra security and support around the baseplate.",
    features: [
      "Elastic for flexibility",
      "Extra security",
      "Skin-friendly",
      "Easy to apply",
      "Water-resistant",
      "Pack of 20 strips"
    ],
image: ["/images/coloplast/1-piece/bt.webp", "/images/coloplast/1-piece/bt-1.webp"," /images/coloplast/1-piece/bt-2.webp","/images/coloplast/1-piece/bt-3.webp","/images/coloplast/1-piece/bt-4.webp","/images/coloplast/1-piece/bt-5.webp","/images/coloplast/1-piece/bt-6.webp","/images/coloplast/1-piece/bt-7.webp","/images/coloplast/1-piece/bt-8.webp"],    inStock: true
  },
  {
    id: "col-023",
    name: "Brava® Adhesive Remover Spray",
    brand: "Brava",
    category: "supporting-products",
    subCategory: "accessories",
    price: 928,
    mrp: 928,
    packSize: 1,
    productcode: 12010,
    description: "Brava Adhesive Remover Spray for gentle and easy removal of ostomy products.",
    features: [
      "Gentle removal",
      "Reduces skin trauma",
      "Easy to use spray",
      "Skin-friendly formula",
      "Quick acting",
      "50ml bottle"
    ],
image: ["/images/coloplast/1-piece/b.webp", "/images/coloplast/1-piece/b-1.webp"," /images/coloplast/1-piece/b-2.webp","/images/coloplast/1-piece/b-3.webp","/images/coloplast/1-piece/b-4.webp"],    inStock: true
  },
  {
    id: "col-024",
    name: "Ostomy Powder",
    brand: "Coloplast",
    category: "supporting-products",
    subCategory: "accessories",
    price: 538,
    mrp: 538,
    packSize: 1,
    productcode: 1907,
    description: "Ostomy Powder for protecting and healing irritated peristomal skin.",
    features: [
      "Protects irritated skin",
      "Absorbs moisture",
      "Promotes healing",
      "Easy application",
      "Skin-friendly",
      "25g bottle"
    ],
image: ["/images/coloplast/1-piece/p.webp"],
    inStock: true
  },
  {
    id: "col-025",
    name: "Comfeel® Barrier Cream",
    brand: "Comfeel",
    category: "supporting-products",
    subCategory: "accessories",
    price: 1005,
    mrp: 1005,
    packSize: 1,
    productcode: 4720,
    description: "Comfeel Barrier Cream for protecting skin from moisture and irritation.",
    features: [
      "Moisture barrier",
      "Protects skin",
      "Easy to apply",
      "Long-lasting protection",
      "Skin-friendly",
      "60ml tube"
    ],
image: ["/images/coloplast/1-piece/c.webp", "/images/coloplast/1-piece/c-1.webp"],
    inStock: true
  },
  {
    id: "col-026",
    name: "Brava® Paste",
    brand: "Brava",
    category: "supporting-products",
    subCategory: "accessories",
    price: 792,
    mrp: 792,
    packSize: 1,
    productcode: 12050,
    description: "Brava Paste for filling gaps and creating a secure seal around the stoma.",
    features: [
      "Fills gaps and creases",
      "Alcohol-free formula",
      "No stinging",
      "Easy to apply",
      "Secure seal",
      "60g tube"
    ],
image: ["/images/coloplast/1-piece/bp.webp"],
    inStock: true
  },

  // Additional 1-Piece Bags - Alterna (expanded)
  {
    id: "col-027",
    name: "Alterna® 1-Piece Deep Convex Opaque Bag for Colostomy/Ileostomy",
    brand: "Alterna",
    category: "ostomy-bags",
    subCategory: "1-piece-bags",
    price: 2310,
    mrp: 2310,
    packSize: 6,
    productcode: 17511,
    diameter: "40mm, 50mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Drainable/Open",
    bagType: "Open",
    description: "Alterna 1-piece deep convex opaque bag for retracted stomas with secure support.",
    features: [
      "Deep convex for retracted stomas",
      "Opaque design for discretion",
      "Firm support",
      "Prevents leakage",
      "Comfortable fit",
      "Pack of 6 bags"
    ],
    image: ["/images/coloplast/1-piece/17.webp", "/images/coloplast/1-piece/17-1.webp","/images/coloplast/1-piece/17-2.webp"],
    inStock: true
  },
  // {
  //   id: "col-028",
  //   name: "Alterna® 1-Piece Soft Convex Transparent Bag for Colostomy/Ileostomy",
  //   brand: "Alterna",
  //   category: "ostomy-bags",
  //   subCategory: "1-piece-bags",
  //   price: 2124,
  //   mrp: 2124,
  //   packSize: 6,
  //   productcode: 0,
  //   diameter: "40mm, 50mm, 60mm, 70mm",
  //   baseplateType: "Soft Convex",
  //   surgeryType: "Colostomy/Ileostomy",
  //   bagSystem: "1-piece",
  //   productType: "Drainable/Open",
  //   bagType: "Open",
  //   description: "Alterna 1-piece soft convex transparent bag with gentle support.",
  //   features: [
  //     "Soft convex design",
  //     "Transparent for monitoring",
  //     "Gentle support for challenging stomas",
  //     "Easy to apply",
  //     "Secure adhesion",
  //     "Pack of 6 bags"
  //   ],
  //   image: "/images/coloplast/alterna-1pc-soft-convex-transparent.jpg",
  //   inStock: true
  // },
  // {
  //   id: "col-029",
  //   name: "Alterna® 1-Piece Soft Convex Opaque Bag for Colostomy/Ileostomy",
  //   brand: "Alterna",
  //   category: "ostomy-bags",
  //   subCategory: "1-piece-bags",
  //   price: 2172,
  //   mrp: 2172,
  //   packSize: 6,
  //   productcode: 0,
  //   diameter: "40mm, 50mm, 60mm, 70mm",
  //   baseplateType: "Soft Convex",
  //   surgeryType: "Colostomy/Ileostomy",
  //   bagSystem: "1-piece",
  //   productType: "Drainable/Open",
  //   bagType: "Open",
  //   description: "Alterna 1-piece soft convex opaque bag for discreet daily wear.",
  //   features: [
  //     "Soft convex for gentle support",
  //     "Opaque for maximum discretion",
  //     "Comfortable all-day wear",
  //     "Secure adhesive",
  //     "Leak-proof design",
  //     "Pack of 6 bags"
  //   ],
  //   image: "/images/coloplast/alterna-1pc-soft-convex-opaque.jpg",
  //   inStock: true
  // },
  // {
  //   id: "col-030",
  //   name: "Alterna® 1-Piece Flat Transparent Urostomy Bag",
  //   brand: "Alterna",
  //   category: "ostomy-bags",
  //   subCategory: "1-piece-bags",
  //   price: 2676,
  //   mrp: 2676,
  //   packSize: 6,
  //   productcode: 0,
  //   diameter: "40mm, 50mm, 60mm",
  //   baseplateType: "Flat",
  //   surgeryType: "Urostomy",
  //   bagSystem: "1-piece",
  //   productType: "Urostomy",
  //   bagType: "Uro",
  //   description: "Alterna 1-piece flat transparent urostomy bag with tap outlet.",
  //   features: [
  //     "Designed for urostomy",
  //     "Transparent design for easy monitoring",
  //     "Tap outlet for drainage",
  //     "Anti-reflux valve",
  //     "Secure adhesion",
  //     "Pack of 6 bags"
  //   ],
  //   image: "/images/coloplast/alterna-1pc-uro-transparent.jpg",
  //   inStock: true
  // },
  // {
  //   id: "col-031",
  //   name: "Alterna® 1-Piece Flat Opaque Urostomy Bag",
  //   brand: "Alterna",
  //   category: "ostomy-bags",
  //   subCategory: "1-piece-bags",
  //   price: 2772,
  //   mrp: 2772,
  //   packSize: 6,
  //   productcode: 0,
  //   diameter: "40mm, 50mm, 60mm",
  //   baseplateType: "Flat",
  //   surgeryType: "Urostomy",
  //   bagSystem: "1-piece",
  //   productType: "Urostomy",
  //   bagType: "Uro",
  //   description: "Alterna 1-piece flat opaque urostomy bag for discreet urine collection.",
  //   features: [
  //     "Opaque for discretion",
  //     "Tap outlet drainage system",
  //     "Anti-reflux valve",
  //     "Secure adhesion",
  //     "Easy to use",
  //     "Pack of 6 bags"
  //   ],
  //   image: "/images/coloplast/alterna-1pc-uro-opaque.jpg",
  //   inStock: true
  // },
  {
    id: "col-064",
    name: "Alterna® 1-Piece Deep Convex Transparent Bag for Urostomy",
    brand: "Alterna",
    category: "ostomy-bags",
    subCategory: "1-piece-bags",
    price: 3072,
    mrp: 3072,
    packSize: 6,
    productcode: 17482,
    diameter: "40mm, 50mm, 60mm",
    baseplateType: "Flat",
    surgeryType: "Urostomy",
    bagSystem: "1-piece",
    productType: "Urostomy",
    bagType: "Uro",
    description: "Alterna 1-piece flat opaque urostomy bag for discreet urine collection.",
    features: [
      "Opaque for discretion",
      "Tap outlet drainage system",
      "Anti-reflux valve",
      "Secure adhesion",
      "Easy to use",
      "Pack of 6 bags"
    ],
    image: ["/images/coloplast/1-piece/23.webp", "/images/coloplast/1-piece/23-1.webp"],
    inStock: true
  },

  // Additional 1-Piece Bags - SenSura (new entries)
  {
    id: "col-032",
    name: "SenSura® 1-Piece Flat Transparent Bag for Colostomy/Ileostomy",
    brand: "SenSura",
    category: "ostomy-bags",
    subCategory: "1-piece-bags",
    price: 2232,
    mrp: 2232,
    packSize: 6,
    productcode: 15570,
    diameter: "40mm, 50mm, 60mm, 70mm",
    baseplateType: "Flat",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Drainable/Open",
    bagType: "Open",
    description: "SenSura 1-piece flat transparent drainable bag with secure protection.",
    features: [
      "Transparent design",
      "Flat baseplate",
      "Advanced adhesive technology",
      "Easy to apply",
      "Skin-friendly",
      "Pack of 6 bags"
    ],
    image: ["/images/coloplast/1-piece/18.webp", "/images/coloplast/1-piece/18-1.webp"],
    inStock: true
  },
  // {
  //   id: "col-033",
  //   name: "SenSura® 1-Piece Flat Opaque Bag for Colostomy/Ileostomy",
  //   brand: "SenSura",
  //   category: "ostomy-bags",
  //   subCategory: "1-piece-bags",
  //   price: 2280,
  //   mrp: 2280,
  //   packSize: 6,
  //   productcode: 0,
  //   diameter: "40mm, 50mm, 60mm, 70mm",
  //   baseplateType: "Flat",
  //   surgeryType: "Colostomy/Ileostomy",
  //   bagSystem: "1-piece",
  //   productType: "Drainable/Open",
  //   bagType: "Open",
  //   description: "SenSura 1-piece flat opaque drainable bag for discreet ostomy care.",
  //   features: [
  //     "Opaque for discretion",
  //     "Flat baseplate design",
  //     "Secure adhesion",
  //     "Comfortable wear",
  //     "Odor-proof material",
  //     "Pack of 6 bags"
  //   ],
  //   image: "/images/coloplast/sensura-1pc-flat-opaque.jpg",
  //   inStock: true
  // },
  // {
  //   id: "col-034",
  //   name: "SenSura® 1-Piece Light Convex Transparent Bag for Colostomy/Ileostomy",
  //   brand: "SenSura",
  //   category: "ostomy-bags",
  //   subCategory: "1-piece-bags",
  //   price: 2544,
  //   mrp: 2544,
  //   packSize: 6,
  //   productcode: 0,
  //   diameter: "40mm, 50mm, 60mm",
  //   baseplateType: "Light Convex",
  //   surgeryType: "Colostomy/Ileostomy",
  //   bagSystem: "1-piece",
  //   productType: "Drainable/Open",
  //   bagType: "Open",
  //   description: "SenSura 1-piece light convex transparent bag for gentle stoma support.",
  //   features: [
  //     "Light convex for gentle support",
  //     "Transparent for monitoring",
  //     "Ideal for flush stomas",
  //     "Secure adhesion",
  //     "Comfortable fit",
  //     "Pack of 6 bags"
  //   ],
  //   image: "/images/coloplast/sensura-1pc-light-convex-transparent.jpg",
  //   inStock: true
  // },
  // {
  //   id: "col-035",
  //   name: "SenSura® 1-Piece Light Convex Opaque Bag for Colostomy/Ileostomy",
  //   brand: "SenSura",
  //   category: "ostomy-bags",
  //   subCategory: "1-piece-bags",
  //   price: 2592,
  //   mrp: 2592,
  //   packSize: 6,
  //   productcode: 0,
  //   diameter: "40mm, 50mm, 60mm",
  //   baseplateType: "Light Convex",
  //   surgeryType: "Colostomy/Ileostomy",
  //   bagSystem: "1-piece",
  //   productType: "Drainable/Open",
  //   bagType: "Open",
  //   description: "SenSura 1-piece light convex opaque bag with gentle support and discretion.",
  //   features: [
  //     "Light convex for flush stomas",
  //     "Opaque design",
  //     "Secure adhesive",
  //     "Comfortable wear",
  //     "Leak-proof design",
  //     "Pack of 6 bags"
  //   ],
  //   image: "/images/coloplast/sensura-1pc-light-convex-opaque.jpg",
  //   inStock: true
  // },

  // Additional 1-Piece Bags - SenSura Mio (expanded)
  // {
  //   id: "col-036",
  //   name: "SenSura® Mio 1-Piece Light Convex Transparent Bag for Colostomy/Ileostomy",
  //   brand: "SenSura Mio",
  //   category: "ostomy-bags",
  //   subCategory: "1-piece-bags",
  //   price: 3564,
  //   mrp: 3564,
  //   packSize: 6,
  //   productcode: 0,
  //   diameter: "40mm, 50mm, 60mm",
  //   baseplateType: "Light Convex",
  //   surgeryType: "Colostomy/Ileostomy",
  //   bagSystem: "1-piece",
  //   productType: "Drainable/Open",
  //   bagType: "Open",
  //   description: "SenSura Mio 1-piece light convex transparent bag with adaptive technology.",
  //   features: [
  //     "Adaptive technology",
  //     "Light convex for gentle support",
  //     "Transparent design",
  //     "Elastic adhesive",
  //     "Secure fit during movement",
  //     "Pack of 6 bags"
  //   ],
  //   image: "/images/coloplast/sensura-mio-1pc-light-convex-transparent.jpg",
  //   inStock: true
  // },
  // {
  //   id: "col-037",
  //   name: "SenSura® Mio 1-Piece Light Convex Opaque Bag for Colostomy/Ileostomy",
  //   brand: "SenSura Mio",
  //   category: "ostomy-bags",
  //   subCategory: "1-piece-bags",
  //   price: 3612,
  //   mrp: 3612,
  //   packSize: 6,
  //   productcode: 0,
  //   diameter: "40mm, 50mm, 60mm",
  //   baseplateType: "Light Convex",
  //   surgeryType: "Colostomy/Ileostomy",
  //   bagSystem: "1-piece",
  //   productType: "Drainable/Open",
  //   bagType: "Open",
  //   description: "SenSura Mio 1-piece light convex opaque bag with best-in-class adaptive fit.",
  //   features: [
  //     "Adaptive technology",
  //     "Light convex support",
  //     "Opaque for discretion",
  //     "Elastic adhesive",
  //     "Secure during activity",
  //     "Pack of 6 bags"
  //   ],
  //   image: "/images/coloplast/sensura-mio-1pc-light-convex-opaque.jpg",
  //   inStock: true
  // },
  // {
  //   id: "col-038",
  //   name: "SenSura® Mio 1-Piece Deep Convex Transparent Bag for Colostomy/Ileostomy",
  //   brand: "SenSura Mio",
  //   category: "ostomy-bags",
  //   subCategory: "1-piece-bags",
  //   price: 3888,
  //   mrp: 3888,
  //   packSize: 6,
  //   productcode: 0,
  //   diameter: "40mm, 50mm",
  //   baseplateType: "Deep Convex",
  //   surgeryType: "Colostomy/Ileostomy",
  //   bagSystem: "1-piece",
  //   productType: "Drainable/Open",
  //   bagType: "Open",
  //   description: "SenSura Mio 1-piece deep convex transparent bag for retracted stomas.",
  //   features: [
  //     "Deep convex for retracted stomas",
  //     "Adaptive technology",
  //     "Transparent design",
  //     "Firm support",
  //     "Prevents leakage",
  //     "Pack of 6 bags"
  //   ],
  //   image: "/images/coloplast/sensura-mio-1pc-deep-convex-transparent.jpg",
  //   inStock: true
  // },
  {
    id: "col-039",
    name: "SenSura® Mio 1-Piece Deep Convex Opaque Bag for Colostomy/Ileostomy",
    brand: "SenSura Mio",
    category: "ostomy-bags",
    subCategory: "1-piece-bags",
    price: 3936,
    mrp: 3936,
    packSize: 6,
    productcode: 16446,
    diameter: "40mm, 50mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Drainable/Open",
    bagType: "Open",
    description: "SenSura Mio 1-piece deep convex opaque bag for challenging stomas.",
    features: [
      "Deep convex for retracted stomas",
      "Adaptive technology",
      "Opaque design",
      "Secure adhesion",
      "Comfortable fit",
      "Pack of 6 bags"
    ],
   image: ["/images/coloplast/1-piece/20.webp", "/images/coloplast/1-piece/20-1.webp"," /images/coloplast/1-piece/20-2.webp"],    inStock: true
  },
  // {
  //   id: "col-040",
  //   name: "SenSura® Mio 1-Piece Flat Urostomy Transparent Bag",
  //   brand: "SenSura Mio",
  //   category: "ostomy-bags",
  //   subCategory: "1-piece-bags",
  //   price: 3924,
  //   mrp: 3924,
  //   packSize: 6,
  //   productcode: 0,
  //   diameter: "40mm, 50mm, 60mm",
  //   baseplateType: "Flat",
  //   surgeryType: "Urostomy",
  //   bagSystem: "1-piece",
  //   productType: "Urostomy",
  //   bagType: "Uro",
  //   description: "SenSura Mio 1-piece flat transparent urostomy bag with adaptive technology.",
  //   features: [
  //     "Designed for urostomy",
  //     "Adaptive technology",
  //     "Transparent design",
  //     "Tap outlet",
  //     "Anti-reflux valve",
  //     "Pack of 6 bags"
  //   ],
  //   image: "/images/coloplast/sensura-mio-1pc-uro-transparent.jpg",
  //   inStock: true
  // },
  // {
  //   id: "col-041",
  //   name: "SenSura® Mio 1-Piece Flat Urostomy Opaque Bag",
  //   brand: "SenSura Mio",
  //   category: "ostomy-bags",
  //   subCategory: "1-piece-bags",
  //   price: 4020,
  //   mrp: 4020,
  //   packSize: 6,
  //   productcode: 0,
  //   diameter: "40mm, 50mm, 60mm",
  //   baseplateType: "Flat",
  //   surgeryType: "Urostomy",
  //   bagSystem: "1-piece",
  //   productType: "Urostomy",
  //   bagType: "Uro",
  //   description: "SenSura Mio 1-piece flat opaque urostomy bag with best-in-class adaptive fit.",
  //   features: [
  //     "Adaptive technology",
  //     "Opaque for discretion",
  //     "Tap outlet",
  //     "Anti-reflux valve",
  //     "Secure adhesion",
  //     "Pack of 6 bags"
  //   ],
  //   image: "/images/coloplast/sensura-mio-1pc-uro-opaque.jpg",
  //   inStock: true
  // },

  // LC (Liberator Coloplast) 1-Piece Bags
  {
    id: "col-042",
    name: "LC 2000 1-Piece Flat Transparent Bag for Colostomy/Ileostomy",
    brand: "LC",
    category: "ostomy-bags",
    subCategory: "1-piece-bags",
    price: 1910,
    mrp: 1910,
    packSize: 6,
    productcode: 1902,
    diameter: "15mm, 50mm",
    baseplateType: "Flat",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Drainable/Open",
    bagType: "Open",
    description: "LC 1-piece flat transparent drainable bag for cost-effective ostomy care.",
    features: [
      "Transparent design",
      "Flat baseplate",
      "Affordable option",
      "Secure adhesion",
      "Reliable protection",
      "Pack of 6 bags"
    ],
   image: ["/images/coloplast/1-piece/lc1.webp", "/images/coloplast/1-piece/lc1-1.webp"," /images/coloplast/1-piece/lc1-2.webp","/images/coloplast/1-piece/lc1-3.webp","/images/coloplast/1-piece/lc1-4.wepb"],
    inStock: true
  },
  {
    id: "col-043",
    name: "LC 1-Piece Flat Transparent Bag for Urostomy",
    brand: "LC",
    category: "ostomy-bags",
    subCategory: "1-piece-bags",
    price: 2980,
    mrp: 2980,
    packSize: 6,
    productcode: 1910,
    diameter: "15mm, 35mm",
    baseplateType: "Flat",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Drainable/Open",
    bagType: "Open",
    description: "LC 1-piece flat opaque drainable bag with discretion and affordability.",
    features: [
      "Opaque design",
      "Flat baseplate",
      "Cost-effective",
      "Secure adhesion",
      "Odor protection",
      "Pack of 6 bags"
    ],
   image: ["/images/coloplast/1-piece/lc2.webp", "/images/coloplast/1-piece/lc2-1.webp"],
    inStock: true
  },

  // 2-Piece Bags - Alterna (expanded)
  {
    id: "col-044",
    name: "Alterna® 2-Piece Transparent Bag for Colostomy/Ileostomy",
    brand: "Alterna",
    category: "ostomy-bags",
    subCategory: "2-piece-bags",
    price: 1548,
    mrp: 1548,
    packSize: 6,
    productcode: 13976,
    diameter: "40mm, 50mm, 60mm, 70mm",
    baseplateType: "Flat",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Drainable/Open",
    bagType: "Open",
    description: "Alterna 2-piece transparent drainable bag for easy monitoring.",
    features: [
      "2-piece system",
      "Transparent design",
      "Easy bag changes",
      "Secure coupling",
      "Skin-friendly",
      "Pack of 6 bags"
    ],
    image: ["/images/coloplast/1-piece/19.webp", "/images/coloplast/1-piece/19-1.webp"," /images/coloplast/1-piece/19-2.webp"],
    inStock: true
  },
  // {
  //   id: "col-045",
  //   name: "Alterna® 2-Piece Light Convex Bag for Colostomy/Ileostomy",
  //   brand: "Alterna",
  //   category: "ostomy-bags",
  //   subCategory: "2-piece-bags",
  //   price: 1848,
  //   mrp: 1848,
  //   packSize: 6,
  //   productcode: 0,
  //   diameter: "40mm, 50mm, 60mm",
  //   baseplateType: "Light Convex",
  //   surgeryType: "Colostomy/Ileostomy",
  //   bagSystem: "2-piece",
  //   productType: "Drainable/Open",
  //   bagType: "Open",
  //   description: "Alterna 2-piece light convex bag with gentle support.",
  //   features: [
  //     "2-piece flexibility",
  //     "Light convex support",
  //     "Easy bag changes",
  //     "Secure coupling",
  //     "Comfortable wear",
  //     "Pack of 6 bags"
  //   ],
  //   image: "/images/coloplast/alterna-2pc-light-convex.jpg",
  //   inStock: true
  // },

  // 2-Piece Bags - SenSura (expanded)
  // {
  //   id: "col-046",
  //   name: "SenSura® 2-Piece Light Convex Bag for Colostomy/Ileostomy",
  //   brand: "SenSura",
  //   category: "ostomy-bags",
  //   subCategory: "2-piece-bags",
  //   price: 2160,
  //   mrp: 2160,
  //   packSize: 6,
  //   productcode: 0,
  //   diameter: "40mm, 50mm, 60mm",
  //   baseplateType: "Light Convex",
  //   surgeryType: "Colostomy/Ileostomy",
  //   bagSystem: "2-piece",
  //   productType: "Drainable/Open",
  //   bagType: "Open",
  //   description: "SenSura 2-piece light convex bag with gentle support.",
  //   features: [
  //     "2-piece system",
  //     "Light convex support",
  //     "Secure coupling",
  //     "Easy monitoring",
  //     "Comfortable fit",
  //     "Pack of 6 bags"
  //   ],
  //   image: "/images/coloplast/sensura-2pc-light-convex.jpg",
  //   inStock: true
  // },
  // {
  //   id: "col-047",
  //   name: "SenSura® 2-Piece Urostomy Opaque Bag",
  //   brand: "SenSura",
  //   category: "ostomy-bags",
  //   subCategory: "2-piece-bags",
  //   price: 2388,
  //   mrp: 2388,
  //   packSize: 6,
  //   productcode: 0,
  //   diameter: "40mm, 50mm, 60mm",
  //   baseplateType: "Flat",
  //   surgeryType: "Urostomy",
  //   bagSystem: "2-piece",
  //   productType: "Urostomy",
  //   bagType: "Uro",
  //   description: "SenSura 2-piece opaque urostomy bag for discreet urine collection.",
  //   features: [
  //     "Designed for urostomy",
  //     "Opaque design",
  //     "Tap outlet",
  //     "Anti-reflux valve",
  //     "Secure coupling",
  //     "Pack of 6 bags"
  //   ],
  //   image: "/images/coloplast/sensura-2pc-uro-opaque.jpg",
  //   inStock: true
  // },

  // 2-Piece Bags - SenSura Mio (expanded)
  // {
  //   id: "col-048",
  //   name: "SenSura® Mio 2-Piece Light Convex Bag for Colostomy/Ileostomy",
  //   brand: "SenSura Mio",
  //   category: "ostomy-bags",
  //   subCategory: "2-piece-bags",
  //   price: 2772,
  //   mrp: 2772,
  //   packSize: 6,
  //   productcode: 0,
  //   diameter: "40mm, 50mm, 60mm",
  //   baseplateType: "Light Convex",
  //   surgeryType: "Colostomy/Ileostomy",
  //   bagSystem: "2-piece",
  //   productType: "Drainable/Open",
  //   bagType: "Open",
  //   description: "SenSura Mio 2-piece light convex bag with adaptive technology.",
  //   features: [
  //     "2-piece system",
  //     "Adaptive technology",
  //     "Light convex support",
  //     "Easy bag changes",
  //     "Flexible coupling",
  //     "Pack of 6 bags"
  //   ],
  //   image: "/images/coloplast/sensura-mio-2pc-light-convex.jpg",
  //   inStock: true
  // },
  // {
  //   id: "col-049",
  //   name: "SenSura® Mio 2-Piece Soft Convex Bag for Colostomy/Ileostomy",
  //   brand: "SenSura Mio",
  //   category: "ostomy-bags",
  //   subCategory: "2-piece-bags",
  //   price: 2928,
  //   mrp: 2928,
  //   packSize: 6,
  //   productcode: 0,
  //   diameter: "40mm, 50mm, 60mm",
  //   baseplateType: "Soft Convex",
  //   surgeryType: "Colostomy/Ileostomy",
  //   bagSystem: "2-piece",
  //   productType: "Drainable/Open",
  //   bagType: "Open",
  //   description: "SenSura Mio 2-piece soft convex bag for challenging stomas.",
  //   features: [
  //     "2-piece flexibility",
  //     "Adaptive technology",
  //     "Soft convex support",
  //     "Easy bag changes",
  //     "Comfortable fit",
  //     "Pack of 6 bags"
  //   ],
  //   image: "/images/coloplast/sensura-mio-2pc-soft-convex.jpg",
  //   inStock: true
  // },
  // {
  //   id: "col-050",
  //   name: "SenSura® Mio 2-Piece Urostomy Opaque Bag",
  //   brand: "SenSura Mio",
  //   category: "ostomy-bags",
  //   subCategory: "2-piece-bags",
  //   price: 3492,
  //   mrp: 3492,
  //   packSize: 6,
  //   productcode: 0,
  //   diameter: "40mm, 50mm, 60mm",
  //   baseplateType: "Flat",
  //   surgeryType: "Urostomy",
  //   bagSystem: "2-piece",
  //   productType: "Urostomy",
  //   bagType: "Uro",
  //   description: "SenSura Mio 2-piece opaque urostomy bag with adaptive technology.",
  //   features: [
  //     "Adaptive technology",
  //     "Designed for urostomy",
  //     "Opaque design",
  //     "Tap outlet",
  //     "Anti-reflux valve",
  //     "Pack of 6 bags"
  //   ],
  //   image: "/images/coloplast/sensura-mio-2pc-uro-opaque.jpg",
  //   inStock: true
  // },

  // Flat Baseplates
  {
    id: "col-051",
    name: "SenSura® Mio 2-Piece Flat Baseplate",
    brand: "SenSura Mio",
    category: "ostomy-baseplates",
    subCategory: "flat",
    price: 3480,
    mrp: 3168,
    packSize: 6,
    productcode: 10502,
    diameter: "40mm, 50mm, 60mm, 70mm",
    baseplateType: "Flat",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "SenSura Mio 2-piece flat baseplate with adaptive technology for body movement.",
    features: [
      "Adaptive technology for body curves",
      "Flat baseplate for regular stomas",
      "2-piece system flexibility",
      "Secure attachment",
      "Skin-friendly adhesive",
      "Pack of 6 baseplates"
    ],
    image: ["/images/coloplast/1-piece/f1.webp", "/images/coloplast/1-piece/f1-1.webp"," /images/coloplast/1-piece/f1-2.webp"],
    inStock: true
  },
  {
    id: "col-052",
    name: "Alterna® 2-Piece Flat Baseplate for Urostomy",
    brand: "Alterna",
    category: "ostomy-baseplates",
    subCategory: "flat",
    price: 2142,
    mrp: 2142,
    packSize: 6,
    productcode: 1971,
    diameter: "40mm, 50mm, 60mm, 70mm",
    baseplateType: "Flat",
    surgeryType: "Colostomy/Ileostomy/Urostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "Alterna 2-piece flat baseplate designed for urostomy with long-wear technology.",
    features: [
      "Flat design for stomas at skin level",
      "Long-wear technology",
      "Spiral adhesive system",
      "Compatible with urostomy bags",
      "Durable and flexible",
      "Pack of 6 baseplates"
    ],
    image: ["/images/coloplast/1-piece/f2.webp", "/images/coloplast/1-piece/f2-1.webp"," /images/coloplast/1-piece/f2-2.webp"],
    inStock: true
  },
  {
    id: "col-053",
    name: "SenSura® Extended Wear 2-Piece Flat Baseplate",
    brand: "SenSura",
    category: "ostomy-baseplates",
    subCategory: "flat",
    price: 2892,
    mrp: 2892,
    packSize: 6,
    productcode: 10015,
    diameter: "40mm, 50mm, 60mm, 70mm",
    baseplateType: "Flat",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "SenSura extended wear 2-piece flat baseplate for long-term secure attachment.",
    features: [
      "Extended wear formula",
      "Flat baseplate design",
      "Double-layer adhesive",
      "Long-lasting protection",
      "Skin-friendly material",
      "Pack of 6 baseplates"
    ],
    image: ["/images/coloplast/1-piece/f3.webp", "/images/coloplast/1-piece/f3-1.webp"," /images/coloplast/1-piece/f3-2.webp"," /images/coloplast/1-piece/f3-3.webp","/images/coloplast/1-piece/f3-4.webp"],
    inStock: true
  },
  {
    id: "col-054",
    name: "Alterna® 2-Piece Flat Baseplate",
    brand: "Alterna",
    category: "ostomy-baseplates",
    subCategory: "flat",
    price: 2040,
    mrp: 2040,
    packSize: 6,
    productcode: 17701,
    diameter: "40mm, 50mm, 60mm, 70mm",
    baseplateType: "Flat",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "Alterna 2-piece flat baseplate for standard ostomy care with reliable adhesion.",
    features: [
      "Flat baseplate for regular stomas",
      "Spiral adhesive technology",
      "Easy to apply and remove",
      "Comfortable wear",
      "Secure attachment",
      "Pack of 6 baseplates"
    ],
    image: ["/images/coloplast/1-piece/f4.webp", "/images/coloplast/1-piece/f4-1.webp"," /images/coloplast/1-piece/f4-2.webp"],
    inStock: true
  },
  {
    id: "col-055",
    name: "SenSura® Standard Wear 2-Piece Flat Baseplate",
    brand: "SenSura",
    category: "ostomy-baseplates",
    subCategory: "flat",
    price: 2730,
    mrp: 2730,
    packSize: 6,
    productcode: 10011  ,
    diameter: "40mm, 50mm, 60mm, 70mm",
    baseplateType: "Flat",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "SenSura standard wear 2-piece flat baseplate for daily ostomy management.",
    features: [
      "Standard wear formula",
      "Flat baseplate design",
      "Double-layer adhesive",
      "Regular protection",
      "Comfortable material",
      "Pack of 6 baseplates"
    ],
    image: ["/images/coloplast/1-piece/f5.webp", "/images/coloplast/1-piece/f5-1.webp"," /images/coloplast/1-piece/f5-2.webp"," /images/coloplast/1-piece/f5-3.webp"," /images/coloplast/1-piece/f5-4.webp"],
    inStock: true
  },
  {
    id: "col-056",
    name: "LC 1-Piece Flat Transparent Bag for Urostomy",
    brand: "LC",
    category: "ostomy-baseplates",
    subCategory: "flat",
    price: 2980,
    mrp: 2980,
    packSize: 10,
    productcode: 1910,
    diameter: "40mm, 50mm, 60mm",
    baseplateType: "Flat",
    surgeryType: "Urostomy",
    bagSystem: "1-piece",
    productType: "Baseplate",
    description: "LC 1-piece flat transparent urostomy baseplate with clear monitoring design.",
    features: [
      "1-piece system design",
      "Transparent for easy monitoring",
      "Flat baseplate for urostomy",
      "Clear output visibility",
      "Secure attachment",
      "Pack of 10 baseplates"
    ],
    image: ["/images/coloplast/1-piece/f6.webp", "/images/coloplast/1-piece/f6-1.webp"],    inStock: true
  },

  // Light Convex Baseplates
  {
    id: "col-057",
    name: "SenSura® Mio 2-Piece Light Convex Baseplate",
    brand: "SenSura Mio",
    category: "ostomy-baseplates",
    subCategory: "light-convex",
    price: 4020,
    mrp: 4020,
    packSize: 6,
    productcode: 16911,
    diameter: "50mm, 60mm, 70mm",
    baseplateType: "Light Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "SenSura Mio 2-piece light convex baseplate with adaptive technology for gentle stoma support.",
    features: [
      "Light convex for flush stomas",
      "Adaptive technology",
      "Gentle stoma support",
      "Body-fit design",
      "Flexible wear",
      "Pack of 6 baseplates"
    ],
    image: ["/images/coloplast/1-piece/l.webp", "/images/coloplast/1-piece/l-1.webp"," /images/coloplast/1-piece/l-2.webp"," /images/coloplast/1-piece/l-3.webp","/images/coloplast/1-piece/l-4.webp"],
    inStock: true
  },
  {
    id: "col-058",
    name: "Alterna® 2-Piece Light Convex Baseplate",
    brand: "Alterna",
    category: "ostomy-baseplates",
    subCategory: "light-convex",
    price: 2502,
    mrp: 2502,
    packSize: 6,
    productcode: 17735,
    diameter: "40mm, 50mm, 60mm",
    baseplateType: "Light Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "Alterna 2-piece light convex baseplate for stomas needing gentle pressure support.",
    features: [
      "Light convex support",
      "Gentle pressure on stoma",
      "Spiral adhesive system",
      "Ideal for flush stomas",
      "Secure fit",
      "Pack of 6 baseplates"
    ],
    image: ["/images/coloplast/1-piece/l1.webp", "/images/coloplast/1-piece/l1-1.webp"," /images/coloplast/1-piece/l1-2.webp"],
    inStock: true
  },
  {
    id: "col-059",
    name: "SenSura® Standard Wear 2-Piece Light Convex Baseplate",
    brand: "SenSura",
    category: "ostomy-baseplates",
    subCategory: "light-convex",
    price: 3084,
    mrp: 3084,
    packSize: 6,
    productcode: 11021,
    diameter: "50mm, 60mm, 70mm",
    baseplateType: "Light Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "SenSura standard wear 2-piece light convex baseplate for daily comfort and support.",
    features: [
      "Light convex design",
      "Standard wear formula",
      "Double-layer adhesive",
      "Stoma support",
      "Regular protection",
      "Pack of 6 baseplates"
    ],
    image: ["/images/coloplast/1-piece/l2.webp", "/images/coloplast/1-piece/l2-1.webp"," /images/coloplast/1-piece/l2-2.webp"],
    inStock: true
  },
  {
    id: "col-060",
    name: "SenSura® Extended Wear 2-Piece Light Convex Baseplate",
    brand: "SenSura",
    category: "ostomy-baseplates",
    subCategory: "light-convex",
    price: 3030,
    mrp: 3030,
    packSize: 6,
    productcode: 11025,
    diameter: "50mm, 60mm, 70mm",
    baseplateType: "Light Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "SenSura extended wear 2-piece light convex baseplate for prolonged secure attachment.",
    features: [
      "Light convex support",
      "Extended wear technology",
      "Double-layer adhesive",
      "Long-lasting protection",
      "Gentle pressure",
      "Pack of 6 baseplates"
    ],
    image: ["/images/coloplast/1-piece/l3.webp", "/images/coloplast/1-piece/l3-1.webp"," /images/coloplast/1-piece/l3-2.webp"],
    inStock: true
  },

  // Deep Convex Baseplates
  {
    id: "col-061",
    name: "SenSura® Mio 2-Piece Deep Convex Baseplate",
    brand: "SenSura Mio",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 4416,
    mrp: 4416,
    packSize: 6,
    productcode: 16951,
    diameter: "50mm, 60mm, 70mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "SenSura Mio 2-piece deep convex baseplate with adaptive technology for retracted stomas.",
    features: [
      "Deep convex for retracted stomas",
      "Adaptive technology",
      "Strong stoma support",
      "Body-fit design",
      "Secure attachment",
      "Pack of 6 baseplates"
    ],
    image: ["/images/coloplast/1-piece/d.webp", "/images/coloplast/1-piece/d-1.webp"," /images/coloplast/1-piece/d-2.webp"," /images/coloplast/1-piece/d-3.webp","/images/coloplast/1-piece/d-4.webp"," /images/coloplast/1-piece/d-5.webp"],
    inStock: true
  },
  {
    id: "col-062",
    name: "Alterna® 2-Piece Deep Convex Baseplate",
    brand: "Alterna",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 2502,
    mrp: 2502,
    packSize: 6,
    productcode: 17761,
    diameter: "40mm, 50mm, 60mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "Alterna 2-piece deep convex baseplate for deep skin fold stomas with firm support.",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["/images/coloplast/1-piece/d1.webp", "/images/coloplast/1-piece/d1-1.webp"," /images/coloplast/1-piece/d1-2.webp"],
    inStock: true
  },
  {
    id: "col-063",
    name: "Alterna 1PC OPEN MX TR ",
    brand: "SenSura",
    category: "ostomy-baseplates",
    subCategory: "light-convex",
    price: 387.9,
    mrp: 431,
    packSize: 30,
    productcode: 12680,
    diameter: "10mm, 80mm",
    baseplateType: "Light Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "Alterna 1PC OPEN MX TR .",
    features: [
      "Light convex support",
      "Extended wear technology",
      "Double-layer adhesive",
      "Long-lasting protection",
      "Gentle pressure",
      "Pack of 6 baseplates"
    ],
    image: ["https://pharmacydoorstep.com/cdn/shop/products/12680_9ef5d37e-2da5-4730-8fdc-819ab484c396.png?v=1657219317"],
    inStock: true
  },
  
  {
    id: "col-064",
    name: "1746701664 - OPEN CHILD TRSP 10/35MM U",
    brand: "Alterna",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 2502,
    mrp: 2502,
    packSize: 1,
    productcode: 17467,
    diameter: "10mm, 35mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "1746701664 - 1PC OPEN CHILD TRSP 10/35MM U",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://www.healthklin.com/image/cache/catalog/PRODUCTIMAGES/coloplast-17467-ostomy-bag-for-children-550x550.png"],
    inStock: true
  },

    {
    id: "col-065",
    name: "1748001664 - 1PC URO child transp 10/35mm U",
    brand: "Alterna",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 485.1,
    mrp: 539,
    packSize: 20,
    productcode: 17480,
    diameter: "10mm, 35mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "1748001664 - 1PC URO child transp 10/35mm U",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://www.healthklin.com/image/cache/catalog/PRODUCTIMAGES/coloplast-17467-ostomy-bag-for-children-550x550.png"],
    inStock: true
  },

    {
    id: "col-066",
    name: "1748201664 - 1PC CVX URO MAXI TR 15 - 43M U",
    brand: "Alterna",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 485.1,
    mrp: 539,
    packSize: 10,
    productcode: 17480,
    diameter: "15mm, 43mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "1748201664 - 1PC CVX URO MAXI TR 15 - 43M U",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://www.healthklin.com/image/cache/catalog/PRODUCTIMAGES/coloplast-17467-ostomy-bag-for-children-550x550.png"],
    inStock: true
  },

    {
    id: "col-067",
    name: "1750001664 - 1P ILEO MAX Classic/Tran  12/75MM U",
    brand: "Alterna",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 275.1,
    mrp: 306,
    packSize: 30,
    productcode: "17500,170501",
    diameter: "12mm, 75mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "1750001664 - 1P ILEO MAX Classic  12/75MM U",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://www.healthklin.com/image/cache/catalog/PRODUCTIMAGES/coloplast-17467-ostomy-bag-for-children-550x550.png"],
    inStock: true
  },


    {
    id: "col-069",
    name: "1751201664 - CXL 1PC ILEO MAX CL 15-43MM U",
    brand: "Alterna",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 332.1,
    mrp: 369,
    packSize: 30,
    productcode: 17480,
    diameter: "15mm, 43mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "1751201664 - CXL 1PC ILEO MAX CL 15-43MM U",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://www.healthklin.com/image/cache/catalog/PRODUCTIMAGES/coloplast-17467-ostomy-bag-for-children-550x550.png"],
    inStock: true
  },
      {
    id: "col-070",
    name: "1751501664 - CON 1PC ILEO MAXI TR 15-43MM U",
    brand: "CON",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 332.1,
    mrp: 369,
    packSize: 30,
    productcode: 17515,
    diameter: "15mm, 43mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Baseplate",
    description: "1751501664 - CON 1PC ILEO MAXI TR 15-43MM U",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://www.healthklin.com/image/cache/catalog/PRODUCTIMAGES/coloplast-17467-ostomy-bag-for-children-550x550.png"],
    inStock: true
  },
  
        {
    id: "col-071",
    name: "1751701664 - CXL 1PC ILEO MAX TR 15-43MM U",
    brand: "CON",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 332.1,
    mrp: 369,
    packSize: 10,
    productcode: 17517,
    diameter: "15mm, 43mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Baseplate",
    description: "1751701664 - CXL 1PC ILEO MAX TR 15-43MM U",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://www.healthklin.com/image/cache/catalog/PRODUCTIMAGES/coloplast-17467-ostomy-bag-for-children-550x550.png"],
    inStock: true
  },

          {
    id: "col-072",
    name: "0197101664 - ALTERNA LONGWEAR FLEXIBLE 40MM",
    brand: "CON",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 332.1,
    mrp: 369,
    packSize: 10,
    productcode: "01971,01972,01973",
    diameter: "40mm, 450mm,60mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Baseplate",
    description: "0197101664 - ALTERNA LONGWEAR FLEXIBLE 40MM",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb6ONsOLmTlJJ-FU_HNwmTAQ-MemmaFffNuQ&s"],
    inStock: true
  },
            {
    id: "col-073",
    name: "1398401664 - 2PC ILEO MAXI CLASSIC 40MM",
    brand: "I LEO",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 254.7,
    mrp: 283,
    packSize: 15,
    productcode: "13984,13985,13986",
    diameter: "40mm, 50mm,60mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "1398401664 - 2PC ILEO MAXI CLASSIC 40MM",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://www.healthklin.com/image/cache/catalog/PRODUCTIMAGES/coloplast13984stomabag-550x550.jpg"],
    inStock: true
  },
            {
    id: "col-074",
    name: "1763501664 - 2PC URO maxi opaque 50mm U",
    brand: "URO",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 336.6,
    mrp: 374,
    packSize: 15,
    productcode: "17635,17636",
    diameter: "50mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "1763501664 - 2PC URO maxi opaque 50mm U",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://www.healthklin.com/image/cache/catalog/PRODUCTIMAGES/coloplast13984stomabag-550x550.jpg"],
    inStock: true
  },
            {
    id: "col-074",
    name: "1773701664 - 2P CNV L tera 50mm 15/33 cut U",
    brand: "CNV",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 412,
    mrp: 458,
    packSize: 5,
    productcode: "17737,17741",
    diameter: "50mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "1773701664 - 2P CNV L tera 50mm 15/33 cut U",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://medineeds.in/cdn/shop/files/17737-2p-cnv-l-tera_1.jpg?v=1735629485"],
    inStock: true
  },
              {
    id: "col-075",
    name: "1405001664 - Fistula and wound man.sys.mini",
    brand: "CNV",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 4658.1,
    mrp: 5175,
    packSize: 6,
    productcode: "04050,04060,04070",
    diameter: "50mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Baseplate",
    description: "1405001664 - Fistula and wound man.sys.mini",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://medineeds.in/cdn/shop/files/17737-2p-cnv-l-tera_1.jpg?v=1735629485"],
    inStock: true
  },
                {
    id: "col-076",
    name: "1180401664 - SenSura Uro 1pc maxi trp.10-76",
    brand: "Sensura",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 4658.1,
    mrp: 5175,
    packSize: 6,
    productcode: "11804,11814",
    diameter: "50mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Baseplate",
    description: "1180401664 - SenSura Uro 1pc maxi trp.10-76",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://medineeds.in/cdn/shop/files/17737-2p-cnv-l-tera_1.jpg?v=1735629485"],
    inStock: true
  },
                {
    id: "col-077",
    name: "1902001664 - SenSu PO window non-ste 70mm",
    brand: "Sensura",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 4658.1,
    mrp: 5175,
    packSize: 6,
    productcode: "19020,19021,10025,10035",
    diameter: "50mm,60mm.70mm,100mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Baseplate",
    description: "1902001664 - SenSu PO window non-ste 70mm",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://5.imimg.com/data5/SELLER/Default/2022/7/BG/DP/IN/96747914/19020-sensu-po-window-non-ste.jpg"],
    inStock: true
  },
                {
    id: "col-078",
    name: "1036401664 - SenSura 2p mx op opq 40mm",
    brand: "Sensura",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 296.1,
    mrp: 329,
    packSize: 6,
    productcode: "10364,10365,10366,10367,10386",
    diameter: "50mm,60mm.70mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "1036401664 - SenSura 2p mx op opq 40mm",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://5.imimg.com/data5/SELLER/Default/2022/7/BG/DP/IN/96747914/19020-sensu-po-window-non-ste.jpg"],
    inStock: true
  },
           {
    id: "col-079",
    name: "1103101664 - SenSura std.Conv.Li.60mm 15-43",
    brand: "Sensura",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 486.1,
    mrp: 540,
    packSize: 6,
    productcode: "10364,10365,10366,10367,10386",
    diameter: "50mm,60mm.70mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "1103101664 - SenSura std.Conv.Li.60mm 15-43",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90eHa6Wv7k2a-9QC1yM8hI3cLXAjFmGV7ZA&s"],
    inStock: true
  },
      {
    id: "col-080",
    name: "1185501664 - SenSura Uro Click maxi trp. 50",
    brand: "Sensura",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 351.1,
    mrp: 390,
    packSize: 6,
    productcode: "11031,11035,11041,11045",
    diameter: "50mm,60mm.70mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "1185501664 - SenSura Uro Click maxi trp. 50",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90eHa6Wv7k2a-9QC1yM8hI3cLXAjFmGV7ZA&s"],
    inStock: true
  },
      {
    id: "col-081",
    name: "1640501664 - Mio430 1p soft op mx 15-33",
    brand: "Mio",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 551.1,
    mrp: 613,
    packSize: 10,
    productcode: "16406,16415",
    diameter: "50mm,60mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "1640501664 - Mio430 1p soft op mx 15-33",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90eHa6Wv7k2a-9QC1yM8hI3cLXAjFmGV7ZA&s"],
    inStock: true
  },
     {
    id: "col-082",
    name: "1642601664 - Mio430 1p light op mx 15-33",
    brand: "Mio",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 594.1,
    mrp: 660,
    packSize: 10,
    productcode: "16426,16427",
    diameter: "50mm,60mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "2-piece",
    productType: "Baseplate",
    description: "1642601664 - Mio430 1p light op mx 15-33",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90eHa6Wv7k2a-9QC1yM8hI3cLXAjFmGV7ZA&s"],
    inStock: true
  },
       {
    id: "col-083",
    name: "1144301664 - Mio430 Click op mx w/w 50mm",
    brand: "Mio",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 418.1,
    mrp: 465,
    packSize: 30,
    productcode: "11443,11444,11452,11453,11456,11457",
    diameter: "50mm,60mm,70mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Baseplate",
    description: "1642601664 - Mio430 1p light op mx 15-33",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90eHa6Wv7k2a-9QC1yM8hI3cLXAjFmGV7ZA&s"],
    inStock: true
  },
      {
    id: "col-084",
    name: "1149901664 - Mio Click uro mx 60mm",
    brand: "Mio",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 551.1,
    mrp: 613,
    packSize: 30,
    productcode: "11499,11500",
    diameter: "50mm,60mm,70mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Baseplate",
    description: "1149901664 - Mio Click uro mx 60mm",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90eHa6Wv7k2a-9QC1yM8hI3cLXAjFmGV7ZA&s"],
    inStock: true
  },

        {
    id: "col-085",
    name: "1691101664 - Mio Click 50mm cvx light 15-30",
    brand: "Mio",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 662.1,
    mrp: 736,
    packSize: 5,
    productcode: "16911,16921",
    diameter: "60mm,70mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Baseplate",
    description: "1691101664 - Mio Click 50mm cvx light 15-30",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90eHa6Wv7k2a-9QC1yM8hI3cLXAjFmGV7ZA&s"],
    inStock: true
  },
  

        {
    id: "col-086",
    name: "1695101664 - Mio Click 50mm cvx deep 15-30",
    brand: "Mio",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 662.1,
    mrp: 736,
    packSize: 5,
    productcode: "16951,16961,16971",
    diameter: "50MM,60mm,70mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Baseplate",
    description: "V1695101664 - Mio Click 50mm cvx deep 15-30",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90eHa6Wv7k2a-9QC1yM8hI3cLXAjFmGV7ZA&s"],
    inStock: true
  },

        {
    id: "col-087",
    name: "0042301664 - SenSura Mio Belt Standard",
    brand: "Mio",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 662.1,
    mrp: 736,
    packSize: 15,
    productcode: "16951,16961,16971",
    diameter: "50MM,60mm,70mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Baseplate",
    description: "0042301664 - SenSura Mio Belt Standard",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEBAQEA8VFQ8PEBAPFRAWEA8QEhUVFRUXFhUXFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NFQ8PFysZFR0rLSsrKys3KysrKy03NysrNy0tLSstKy0rLSs3KysrKysrLSsrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQYDBAUCB//EADwQAAIBAgIFCQUHBAMBAAAAAAABAgMRBCEFEjFBUVJxgZGhscHR8AYiMmFyExVCU2KS4UOCovEjM2MU/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABkRAQEBAAMAAAAAAAAAAAAAAAABEQISQf/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAACASQABJAAAAACQIAJAAAAAAAAAAAAAABBIAEEgAQSAAAAgkACCQAAAAgkACASAIJAAAgkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIJAAgkgkAAAANLE6VoU8pVFfgs+4037S4fc5PoXmTR2QcZe0dHky6l5npe0NHkz6l5jYOuDlx07Q/V+0yx0zh3/UtzqQ0b4NWOkaD/qx6ZJd5ljiKb2Ti+aUWUZQQmSAAAAAAAAAAAAAAAYMVi4UknN2vsVm2+g90K0ZxUou6e8DIAAAAAgkgkAczT2IcIKKdnNtX32Sz70dMq+n6+tWstlNKPTtfh1EoqqhOlZTWtVd3KVrq/6eETbpVJcbc8l4G/UpxnG0l070V7H0q1Ca93Woyf8A2rPV+pbjDTtwb5S7eBku+PecyNRL8W3NXWT5mjZhP/a5yDcTfK7Gek3x7zWpyMsfXUUZbv5E25jHY9Io9LLZbtMkcRUWybX90kYyLAbCx9Zf1Jfub7z3HStfl9i8jTt66CP5BjoLTFflR/aj1981+Mf2nOA0x01putwh1S8z39+VeRD/ACOVYS9dQ2pjp0vaRv8ApL9z8jOvaD/y/wAv4K1Q8F4Gdeu0bTFg+/4/lv8Acifv+H5cutFfY9do2mM+KxUqk3KW/JLgtyLBoKFqKfKlJ+HgVdbS46PjalTX6I9quaietgAFAAAQCSAPNSainJ7IpvqKTVm5Scntk3LrzLTp2rq0J8ZWj1vPsuVNGeSx7TPcZbnvMZJlWrX0bFp6lkntpvKPPF/hZzZwqUnldxW1fiXRvXzXA7msJNS2rzA5dHFqW3r2dvrabtKotz6zXxWjk/ehk/l4rxRpRqSg0pLbse59JFdxT49e09JmjQr/ADNqDT81kEZx67Dwk9zvz5DX45f6Lo9PzIt4nr+SGvXSB5C9dYfrrC9dYHpCWz1wIQkBqUfBdxsxNWg+42UESAAry9vR4l1w3wQ+mPcUtlxwE9alTfGEe43GWwACgAABBJAGDG4ZVacoPfsfB7mU/E4eVKTjNWa6muK+RdzU0ngY1oNbJLOMuD8iWCoJhk1qcoScJK0k9h4uYaS2RchsgDJGRFWjGe1bfWfE8olMDQqYSdPOOceHk/My4eub0ZGKvhIyzWUiD3CZk1jRg5QdpdZsRmBkb4bew9qd9lns1tqs3uXE1KtXVTfA9aP+DW3ybl4eAGxUb3JdN0esJKN39vdK+UoK6t808+ogFHbw+iqFRXhVcl8nDtyyMr0DT5c+uPkV6MpRetGTjJb1ky1aIxLq0oyk05Zp2tuds1uNTEc1+zMbu1aSWf4Yt9f8GKr7MT/Bimn86UJd1iyAuRFNrezuOj8FalP6lKHcma8dE6TvZ06f1a6a713F6AyCkVaFSEnCdlKLWy9uOXQWbQVS9FLkScfHxJ0po/7W0otKayz2NcGTonBypRkpNXk72W4qN8ABQAACCSABJBIGppDR9OurSWa2SXxL1wKvj9HVaGclrQ/Misv7l+HuLmQ0SwUHbsZ6sWfG6CpTvKHuTfD4Xzx8rHCxmCqUXapHLdNZxfTu5mZsVq2Fj0QRUJkpkADI2mrMwVKLXw7DIjzOpYg42k8Xa0N7ew7mHjqxjHgkisYuq8TjaUIrKinKT47N/BO3aWimsgMh5JZCKE5WTfBDCuUUndqW26dnd57jxWd9WPF9izMiA6GH0vWjtesv1LPrOjQ05TfxxcXx+JdmfYV8guouVHEQn8Mk+Z59RkbsUpStmnnxMmIxVScdSVSTjwv38S9jHdq6dpKTSvJLbJWt0cTpUpqSUlskk1zMpWj8O6lRQW95vhHey7xikklsSsaZiQAFAAAIJIAEkEgAQSAPM4JpppNPJpq6PQA4WP0CneVHJ8h7Oh7ubuODVpyi3GScZLamXs18Zg6dZWmuZ7GuZmbBSgb+ktF1KOfxU+UlmvqW7n2cxz7mVGzZ0Po3/wCmcta6pQXvNZNtrJJ9v+zUUZVJRhBXnJ2X8/Iu+jsHGhTjTju2ve3vbLJpVK+4qGCqzVOcpykldz1brelkl8mZrlrx2i6NbOcfe5ayl17+k4GN0JXpZw/5ILhlNLm39HULDWk2LmCeJinaXuy4NWfUzDHGRbav5kVsU3ecnybRXe/AzXIwuEq/ZRn9nK01r3S1viz3c5FyI93B4v69dBIV6MdeVkermJxc5xgtsmorpdixKsXsvhdWDqvbPJfSv57juGOhSUIxitkUoroMh0QAAAAACCSABJBIAAAAAAAAA5GM0BSndwvCTzy+G/0+R1wBydCaH+w1pzalUeV1eyjwV+J1gAAAAix4qUYS+KKlzpPvMgAhKxhxGEp1Pjgn87Z9e0zgDjYjQEH8EnF8H7y8ziY7CVaF3Ug9X8yPvw6bZx6UXQgl4wUOFRNXi01xTT9bjd9nqWviIvkqU+rJd6J9odGxp1lOEdVVFmorVWstuS50bPsxTtVm+FO3W15Ekw1ZgAaAAAAAAIAAkAAAAAAAAAAAAAAAAAAAAAAAAAAa2Pwca0dV5NO6lwZi0bo5UNb3ryla7tbZwRvAAAAAAAAAACABIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQGAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAwBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQSAAAAgkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q=="],
    inStock: true
  },

  
        {
    id: "col-088",
    name: "0321051664 - Protective Sheet 10X10 cm",
    brand: "Mio",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 662.1,
    mrp: 736,
    packSize: 10,
    productcode: "03210,03215",
    diameter: "50MM,60mm,70mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Baseplate",
    description: "0321051664 - Protective Sheet 10X10 cm",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQ8OduTBvIIIkF2NoQEDZQmoVSQkYAv-jYg&s"],
    inStock: true
  },
  

        {
    id: "col-089",
    name: "1203511664 - Brava Protective Seal 18mm 2.5",
    brand: "Mio",
    category: "ostomy-baseplates",
    subCategory: "deep-convex",
    price: 662.1,
    mrp: 736,
    packSize: 10,
    productcode: "12035,12027,12039,12047",
    diameter: "34MM,27mm,18mm",
    baseplateType: "Deep Convex",
    surgeryType: "Colostomy/Ileostomy",
    bagSystem: "1-piece",
    productType: "Baseplate",
    description: "1203511664 - Brava Protective Seal 18mm 2.5",
    features: [
      "Deep convex support",
      "Firm pressure on stoma",
      "Spiral adhesive system",
      "For deep skin folds",
      "Strong attachment",
      "Pack of 6 baseplates"
    ],
    image: ["https://coloplaststore.in/cdn/shop/files/Coloplaststore-BravaProtectiveSeal-1.jpg?v=1755857120"],
    inStock: true
  },
  


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
      { name: "LC", slug: "lc" },
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

// Smart brand rotation - prevents duplicate brands from appearing consecutively
export const sortProductsWithBrandRotation = (products: ColoplastProduct[]): ColoplastProduct[] => {
  if (products.length <= 1) return products;
  
  const sorted: ColoplastProduct[] = [];
  const remaining = [...products];
  const brandRotation: string[] = [];
  
  while (remaining.length > 0) {
    let selectedIndex = -1;
    
    // Try to find next product from a different brand
    for (let i = 0; i < remaining.length; i++) {
      const product = remaining[i];
      const lastBrand = sorted[sorted.length - 1]?.brand;
      
      if (product.brand !== lastBrand) {
        selectedIndex = i;
        break;
      }
    }
    
    // If all remaining are same brand, just take the first one
    if (selectedIndex === -1) {
      selectedIndex = 0;
    }
    
    sorted.push(remaining[selectedIndex]);
    remaining.splice(selectedIndex, 1);
  }
  
  return sorted;
};

// Pagination helper
export interface PaginationResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export const paginateProducts = (
  products: ColoplastProduct[],
  page: number = 1,
  pageSize: number = 12
): PaginationResult<ColoplastProduct> => {
  const total = products.length;
  const totalPages = Math.ceil(total / pageSize);
  const validPage = Math.max(1, Math.min(page, totalPages || 1));
  const startIndex = (validPage - 1) * pageSize;
  const items = products.slice(startIndex, startIndex + pageSize);
  
  return {
    items,
    total,
    page: validPage,
    pageSize,
    totalPages,
    hasNextPage: validPage < totalPages,
    hasPrevPage: validPage > 1
  };
};

// Get unique filter values for smart filtering
export interface FilterOptions {
  brands: string[];
  baseplateTypes: string[];
  surgeryTypes: string[];
  bagSystems: string[];
  productTypes: string[];
  priceRange: { min: number; max: number };
}

export const getAvailableFilters = (products: ColoplastProduct[] = coloplastProducts): FilterOptions => {
  const brands = [...new Set(products.map(p => p.brand).filter(Boolean))].sort();
  const baseplateTypes = [...new Set(products.map(p => p.baseplateType).filter(Boolean))].sort();
  const surgeryTypes = [...new Set(products.map(p => p.surgeryType).filter(Boolean))].sort();
  const bagSystems = [...new Set(products.map(p => p.bagSystem).filter(Boolean))].sort();
  const productTypes = [...new Set(products.map(p => p.productType).filter(Boolean))].sort();
  
  const prices = products.map(p => p.price);
  const priceRange = {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
  
  return {
    brands,
    baseplateTypes,
    surgeryTypes,
    bagSystems,
    productTypes,
    priceRange
  };
};

// Advanced filter function
export interface FilterCriteria {
  brands?: string[];
  baseplateTypes?: string[];
  surgeryTypes?: string[];
  bagSystems?: string[];
  productTypes?: string[];
  priceMin?: number;
  priceMax?: number;
  inStock?: boolean;
}

export const filterProducts = (
  products: ColoplastProduct[],
  criteria: FilterCriteria
): ColoplastProduct[] => {
  return products.filter(product => {
    if (criteria.brands && criteria.brands.length > 0) {
      if (!criteria.brands.includes(product.brand)) return false;
    }
    
    if (criteria.baseplateTypes && criteria.baseplateTypes.length > 0) {
      if (!criteria.baseplateTypes.includes(product.baseplateType || '')) return false;
    }
    
    if (criteria.surgeryTypes && criteria.surgeryTypes.length > 0) {
      if (!criteria.surgeryTypes.includes(product.surgeryType || '')) return false;
    }
    
    if (criteria.bagSystems && criteria.bagSystems.length > 0) {
      if (!criteria.bagSystems.includes(product.bagSystem || '')) return false;
    }
    
    if (criteria.productTypes && criteria.productTypes.length > 0) {
      if (!criteria.productTypes.includes(product.productType || '')) return false;
    }
    
    if (criteria.priceMin !== undefined && product.price < criteria.priceMin) return false;
    if (criteria.priceMax !== undefined && product.price > criteria.priceMax) return false;
    
    if (criteria.inStock !== undefined && product.inStock !== criteria.inStock) return false;
    
    return true;
  });
};


