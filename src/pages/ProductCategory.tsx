import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, Filter, Star, ShoppingCart, Eye, ArrowLeft, Grid, List } from 'lucide-react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { UserDetailsForm } from "@/components/UserDetailsForm";
import { products as allProductsData } from "@/data/products";

interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  pricePerUnit: string;
  rating: number;
  reviews: number;
  category: string;
  images: string[];
  features: string[];
  inStock: boolean;
  description: string;
  pack: string;
  productCode: string;
  discountType?: string;
  specifications?: {
    [key: string]: string;
  };
}

const ProductCategory: React.FC = () => {
  const { slug, brand, subCategory } = useParams<{ slug?: string; brand?: string; subCategory?: string }>();
  
  // Determine the title based on the route
  let title = 'Products';
  if (subCategory) {
    title = subCategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  } else if (slug) {
    title = slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ');
  } else if (brand) {
    title = brand.charAt(0).toUpperCase() + brand.slice(1).replace('-', ' ');
  }

  // Convert products from products.ts to match the local Product interface
  const convertedProducts: Product[] = allProductsData.map(p => ({
    id: p.id,
    name: p.name,
    brand: p.brand,
    price: p.price,
    pricePerUnit: p.pricePerUnit,
    rating: p.rating,
    reviews: p.reviews,
    category: p.category,
    images: p.images,
    features: p.features,
    inStock: p.inStock,
    description: p.description,
    pack: p.pack,
    productCode: p.productCode,
    discountType: p.discountType,
    specifications: p.specifications
  }));

  // Filter products based on slug, brand, and subCategory
  const getFilteredProducts = () => {
    let filtered = convertedProducts;
    
    // Handle nested brand routes (e.g., /brand/coloplast/1-piece-bags)
    if (brand && subCategory) {
      const brandMap: { [key: string]: string[] } = {
        'coloplast': ['Coloplast', 'SenSura®', 'SenSura® Mio', 'Alterna®', 'Comfeel®'],
        'convatec': ['ConvaTec'],
        'hollister': ['Hollister'],
        'bao-health': ['Bao-Health'],
        'prowess': ['Prowess'],
        'medifeliz': ['Medifeliz']
      };
      
      // Filter by brand (including sub-brands)
      if (brandMap[brand]) {
        filtered = filtered.filter(p => 
          brandMap[brand].some(brandName => 
            p.brand.toLowerCase().includes(brandName.toLowerCase())
          )
        );
      }
      
      // Filter by system type (1-piece or 2-piece)
      if (subCategory === '1-piece-bags') {
        filtered = filtered.filter(p => 
          p.name.toLowerCase().includes('1-piece') || 
          p.description.toLowerCase().includes('1-piece') ||
          (p.specifications && p.specifications['System'] === '1-piece')
        );
      } else if (subCategory === '2-piece-bags') {
        filtered = filtered.filter(p => 
          p.name.toLowerCase().includes('2-piece') || 
          p.description.toLowerCase().includes('2-piece') ||
          (p.specifications && p.specifications['System'] === '2-piece')
        );
      }
      
      return filtered;
    }
    
    // Handle simple slug routes
    if (!slug) return filtered;
    
    // Check if it's a brand filter
    const brandMap: { [key: string]: string[] } = {
      'coloplast': ['Coloplast', 'SenSura®', 'SenSura® Mio', 'Alterna®', 'Comfeel®'],
      'convatec': ['ConvaTec'],
      'hollister': ['Hollister'],
      'bao-health': ['Bao-Health'],
      'prowess': ['Prowess'],
      'medifeliz': ['Medifeliz']
    };
    
    if (brandMap[slug]) {
      return filtered.filter(p => 
        brandMap[slug].some(brandName => 
          p.brand.toLowerCase().includes(brandName.toLowerCase())
        )
      );
    }
    
    // Handle specific category mappings
    if (slug === 'examination-gloves') {
      return filtered.filter(p => 
        p.category.toLowerCase() === 'examination gloves'
      );
    }
    
    // Otherwise treat as category filter
    return filtered.filter(p => 
      p.category.toLowerCase().includes(slug.toLowerCase()) ||
      slug.toLowerCase().includes(p.category.toLowerCase())
    );
  };

  const allProducts = getFilteredProducts();

  // Keep the old hardcoded products for categories not yet in products.ts
  const coloplastProducts: Product[] = [
    {
      id: "1",
      name: "Coloplast Brava Elastic Barrier Tape (White and Brown) 12070",
      brand: "Coloplast",
      price: "₹ 1,170",
      pricePerUnit: "₹ 1,170/Unit",
      rating: 4.5,
      reviews: 10,
      category: "accessories",
      images: ["https://medineeds.in/cdn/shop/files/shopping_d58f1e12-65b6-43e4-a553-7e6e769b7503.webp?v=1738138635"],
      features: ["Elastic", "Barrier Tape"],
      inStock: true,
      description: "Elastic barrier tape for ostomy care.",
      pack: "Pack of 1",
      productCode: "12070",
      discountType: "Seasonal Offer"
    },
    {
      id: "2",
      name: "Coloplast Paste 2650",
      brand: "Coloplast",
      price: "₹ 940",
      pricePerUnit: "₹ 940/Unit",
      rating: 4.7,
      reviews: 15,
      category: "accessories",
      images: ["https://medineeds.in/cdn/shop/files/2650_1.webp?v=1735389371"],
      features: ["Paste", "Skin Barrier"],
      inStock: true,
      description: "Ostomy paste for secure adhesion.",
      pack: "Pack of 1",
      productCode: "2650"
    },
    {
      id: "3",
      name: "Coloplast Ostomy Bag 17501 12-75mm Maxi Tran Open with Hide-away Outlet Transparent",
      brand: "Coloplast",
      price: "₹ 1,749",
      pricePerUnit: "₹ 1,749/Unit",
      rating: 4.6,
      reviews: 20,
      category: "ostomy",
      images: ["https://medineeds.in/cdn/shop/products/17501-1.jpg?v=1735389555"],
      features: ["Maxi Tran", "Transparent", "Open"],
      inStock: true,
      description: "Transparent ostomy bag with hide-away outlet.",
      pack: "Pack of 1",
      productCode: "17501"
    },
    {
      id: "4",
      name: "Coloplast 60mm Alterna Long wear light Base Plate Box 1973",
      brand: "Coloplast",
      price: "₹ 1,190",
      pricePerUnit: "₹ 1,190/Unit",
      rating: 4.8,
      reviews: 12,
      category: "baseplate",
      images: ["https://medineeds.in/cdn/shop/products/1973.jpg?v=1735390310"],
      features: ["Long Wear", "Light", "Base Plate"],
      inStock: true,
      description: "Long wear light base plate for ostomy.",
      pack: "Pack of 1",
      productCode: "1973"
    },
    {
      id: "5",
      name: "Coloplast Ostomy Powder - 25Gm 1907",
      brand: "Coloplast",
      price: "₹ 501",
      pricePerUnit: "₹ 501/Unit",
      rating: 4.4,
      reviews: 8,
      category: "accessories",
      images: ["https://medineeds.in/cdn/shop/files/1907-ostomy-powder-coloplast--1000x1000.jpg?v=1735389665"],
      features: ["Powder", "Ostomy"],
      inStock: true,
      description: "Ostomy powder for skin protection.",
      pack: "Pack of 1",
      productCode: "1907"
    }
  ];

  const hollisterProducts: Product[] = [
    {
      id: "6",
      name: "Hollister Adapt Paste 79300",
      brand: "Hollister",
      price: "₹ 665",
      pricePerUnit: "₹ 665/Unit",
      rating: 4.5,
      reviews: 18,
      category: "accessories",
      images: ["https://medineeds.in/cdn/shop/files/ostomy-products-250x250.jpg?v=1735711642"],
      features: ["Adapt Paste"],
      inStock: true,
      description: "Adapt paste for ostomy care.",
      pack: "Pack of 1",
      productCode: "79300"
    },
    {
      id: "7",
      name: "Hollister Conform 2 (70mm) 37500",
      brand: "Hollister",
      price: "₹ 1,460",
      pricePerUnit: "₹ 1,460/Unit",
      rating: 4.6,
      reviews: 22,
      category: "ostomy",
      images: ["https://medineeds.in/cdn/shop/products/hollister_37500_1.png?v=1735711706"],
      features: ["Conform 2", "70mm"],
      inStock: true,
      description: "Conform 2 ostomy bag.",
      pack: "Pack of 1",
      productCode: "37500"
    },
    {
      id: "8",
      name: "Hollister Conform 2 BasePlate Flange FlexWear Barrier (55mm) 35500",
      brand: "Hollister",
      price: "₹ 1,330",
      pricePerUnit: "₹ 1,330/Unit",
      rating: 4.7,
      reviews: 14,
      category: "baseplate",
      images: ["https://medineeds.in/cdn/shop/products/35500-1.jpg?v=1735711817"],
      features: ["FlexWear", "Barrier", "55mm"],
      inStock: true,
      description: "FlexWear barrier baseplate.",
      pack: "Pack of 1",
      productCode: "35500"
    },
    {
      id: "9",
      name: "Hollister Moderma Flex 28401",
      brand: "Hollister",
      price: "₹ 1,199",
      pricePerUnit: "₹ 1,199/Unit",
      rating: 4.8,
      reviews: 25,
      category: "ostomy",
      images: ["https://medineeds.in/cdn/shop/products/28401-1.jpg?v=1735711975"],
      features: ["Moderma Flex"],
      inStock: true,
      description: "Moderma Flex ostomy bag.",
      pack: "Pack of 1",
      productCode: "28401"
    },
    {
      id: "10",
      name: "Hollister Moderma 1-Piece Flex Maxi Tran 15-51mm R 26901",
      brand: "Hollister",
      price: "₹ 1,220",
      pricePerUnit: "₹ 1,220/Unit",
      rating: 4.9,
      reviews: 30,
      category: "ostomy",
      images: ["https://medineeds.in/cdn/shop/products/Hollister_269011.jpg?v=1735712682"],
      features: ["Maxi Tran", "15-51mm", "R"],
      inStock: true,
      description: "Maxi Tran ostomy bag.",
      pack: "Pack of 1",
      productCode: "26901"
    }
  ];

  const convatecProducts: Product[] = [
    {
      id: "11",
      name: "ConvaTec Stomahesive Paste 2 Oz. (56.7g) 183910",
      brand: "ConvaTec",
      price: "₹ 925",
      pricePerUnit: "₹ 925/Unit",
      rating: 4.5,
      reviews: 10,
      category: "accessories",
      images: ["https://medineeds.in/cdn/shop/files/sq183910b.webp?v=1735825130"],
      features: ["Stomahesive Paste"],
      inStock: true,
      description: "Stomahesive paste for ostomy care.",
      pack: "Pack of 1",
      productCode: "183910"
    },
    {
      id: "12",
      name: "ConvaTec Natura Drainable Pouch Bag 57mm 416420",
      brand: "ConvaTec",
      price: "₹ 1,150",
      pricePerUnit: "₹ 1,150/Unit",
      rating: 4.6,
      reviews: 15,
      category: "ostomy",
      images: ["https://medineeds.in/cdn/shop/files/rn-image_picker_lib_temp_ff448379-68a5-4f29-918c-8972686eca30.webp?v=1735825718"],
      features: ["Drainable", "Pouch", "57mm"],
      inStock: true,
      description: "Natura drainable pouch bag.",
      pack: "Pack of 1",
      productCode: "416420"
    },
    {
      id: "13",
      name: "ConvaTec Natura Sur-Fit Durahesive Flexible Plate 57mm 413162",
      brand: "ConvaTec",
      price: "₹ 1,245",
      pricePerUnit: "₹ 1,245/Unit",
      rating: 4.7,
      reviews: 20,
      category: "baseplate",
      images: ["https://medineeds.in/cdn/shop/products/convatec_413162_57mm_plate.png?v=1735826039"],
      features: ["Durahesive", "Flexible Plate", "57mm"],
      inStock: true,
      description: "Durahesive flexible plate.",
      pack: "Pack of 1",
      productCode: "413162"
    },
    {
      id: "14",
      name: "Convatec Esenta Sting Free Skin Barrier Spray - 50ml P.C. 413502 New Code 423288",
      brand: "ConvaTec",
      price: "₹ 999",
      pricePerUnit: "₹ 999/Unit",
      rating: 4.8,
      reviews: 12,
      category: "accessories",
      images: ["https://medineeds.in/cdn/shop/files/rn-image_picker_lib_temp_ceab69e3-5d59-47b1-a144-0cc34baecdb8.webp?v=1735826575"],
      features: ["Sting Free", "Skin Barrier Spray"],
      inStock: true,
      description: "Sting free skin barrier spray.",
      pack: "Pack of 1",
      productCode: "423288"
    },
    {
      id: "15",
      name: "Convatec ActiveLife Drainable Pouch 22771 (19-64 mm) (5 Pcs)",
      brand: "ConvaTec",
      price: "₹ 1,260",
      pricePerUnit: "₹ 1,260/Unit",
      rating: 4.4,
      reviews: 8,
      category: "ostomy",
      images: ["https://medineeds.in/cdn/shop/products/CONVATEC_22771_5.png?v=1735826805"],
      features: ["ActiveLife", "Drainable Pouch", "19-64mm"],
      inStock: true,
      description: "ActiveLife drainable pouch.",
      pack: "Pack of 5",
      productCode: "22771"
    }
  ];

  const baoHealthProducts: Product[] = [
    {
      id: "16",
      name: "Bao-Health Skin Barrier Support (C-Tape) 20 Pcs 60612",
      brand: "Bao-Health",
      price: "₹ 560",
      pricePerUnit: "₹ 560/Unit",
      rating: 4.5,
      reviews: 10,
      category: "accessories",
      images: ["https://medineeds.in/cdn/shop/files/bao-health_skin_barrier_support.png?v=1722602445"],
      features: ["Skin Barrier Support", "C-Tape"],
      inStock: true,
      description: "Skin barrier support tape.",
      pack: "Pack of 20",
      productCode: "60612"
    },
    {
      id: "17",
      name: "Bao-Health One Piece Ostomy Pouch, Drainable, Clamp Closure 15-60MM 102BNC",
      brand: "Bao-Health",
      price: "₹ 1,199",
      pricePerUnit: "₹ 1,199/Unit",
      rating: 4.6,
      reviews: 15,
      category: "ostomy",
      images: ["https://medineeds.in/cdn/shop/files/bao-health_one_piece_ostomy_pouch_102bnc.png?v=1722609451"],
      features: ["One Piece", "Drainable", "Clamp Closure"],
      inStock: true,
      description: "One piece ostomy pouch.",
      pack: "Pack of 1",
      productCode: "102BNC"
    },
    {
      id: "18",
      name: "Bao-Health Stoma Paste 60gm 6012",
      brand: "Bao-Health",
      price: "₹ 699",
      pricePerUnit: "₹ 699/Unit",
      rating: 4.7,
      reviews: 20,
      category: "accessories",
      images: ["https://medineeds.in/cdn/shop/files/BAO_HEALTH_STOMA_PASTE_3.jpg?v=1722437617"],
      features: ["Stoma Paste"],
      inStock: true,
      description: "Stoma paste for ostomy care.",
      pack: "Pack of 1",
      productCode: "6012"
    },
    {
      id: "19",
      name: "Bao-Health Stoma Belt 50100",
      brand: "Bao-Health",
      price: "₹ 560",
      pricePerUnit: "₹ 560/Unit",
      rating: 4.8,
      reviews: 12,
      category: "accessories",
      images: ["https://medineeds.in/cdn/shop/files/bao-health_stoma_belt_dd382388-4c36-444f-b388-2801c2c9f98c.png?v=1722601851"],
      features: ["Stoma Belt"],
      inStock: true,
      description: "Adjustable stoma belt.",
      pack: "Pack of 1",
      productCode: "50100"
    },
    {
      id: "20",
      name: "Bao-Health Hydrocolloid Skin Barrier Protective Sheet 10x10CM 5000015 (3 Pcs)",
      brand: "Bao-Health",
      price: "₹ 785",
      pricePerUnit: "₹ 785/Unit",
      rating: 4.4,
      reviews: 8,
      category: "accessories",
      images: ["https://medineeds.in/cdn/shop/files/BAO-HELTH_HYDROCOLLOID_SKIN_BARRIER_SHEET_10_10.png?v=1722608439"],
      features: ["Hydrocolloid", "Skin Barrier"],
      inStock: true,
      description: "Hydrocolloid skin barrier sheet.",
      pack: "Pack of 3",
      productCode: "5000015"
    }
  ];

  const prowessProducts: Product[] = [
    {
      id: "21",
      name: "Prowess Colostomy Belt 9901 (3 Pcs)",
      brand: "Prowess",
      price: "₹ 520",
      pricePerUnit: "₹ 520/Unit",
      rating: 4.5,
      reviews: 10,
      category: "accessories",
      images: ["https://medineeds.in/cdn/shop/files/prowess_colostomy_belt.jpg?v=1727695353"],
      features: ["Colostomy Belt"],
      inStock: true,
      description: "Colostomy belt for support.",
      pack: "Pack of 3",
      productCode: "9901"
    },
    {
      id: "22",
      name: "Prowess Fusion Beige-7200 1 Piese Single Bag 60mm (B7200) 10 Pcs",
      brand: "Prowess",
      price: "₹ 1,480",
      pricePerUnit: "₹ 1,480/Unit",
      rating: 4.6,
      reviews: 15,
      category: "ostomy",
      images: ["https://medineeds.in/cdn/shop/files/PROWESS_B7200.jpg?v=1727683156"],
      features: ["Fusion", "Single Bag", "60mm"],
      inStock: true,
      description: "Fusion single bag ostomy.",
      pack: "Pack of 10",
      productCode: "B7200"
    },
    {
      id: "23",
      name: "Prowess Fusion Comfort One Piece Ostomy Bag Drainable Transparent-8800 with Roll & Press Closure 75mm",
      brand: "Prowess",
      price: "₹ 1,840",
      pricePerUnit: "₹ 1,840/Unit",
      rating: 4.7,
      reviews: 20,
      category: "ostomy",
      images: ["https://medineeds.in/cdn/shop/files/ProwessFusionComfortOnePieceOstomyBag_Drainable_Transparent-8800_featuresa75mmroll-and-pressclosureforeasyandsecuredrainage.Itstransparentdesignallowsfordiscreetmonitoring_whiletheco.jpg?v=1727686714"],
      features: ["Comfort", "Drainable", "Transparent"],
      inStock: true,
      description: "Comfort one piece ostomy bag.",
      pack: "Pack of 1",
      productCode: "8800"
    },
    {
      id: "24",
      name: "Prowess Fusion Extra-Large One-Piece Ostomy Bag XL Drainable Transparent With Roll & Press Closure 90mm (T7200XL) 10 Pcs",
      brand: "Prowess",
      price: "₹ 2,330",
      pricePerUnit: "₹ 2,330/Unit",
      rating: 4.8,
      reviews: 12,
      category: "ostomy",
      images: ["https://medineeds.in/cdn/shop/files/ProwessFusionExtra-LargeOne-PieceOstomyBagXLDrainableTransparentWithRoll_PressClosure90mm.jpg?v=1727687728"],
      features: ["Extra-Large", "Drainable", "90mm"],
      inStock: true,
      description: "Extra-large ostomy bag.",
      pack: "Pack of 10",
      productCode: "T7200XL"
    },
    {
      id: "25",
      name: "Prowess fusion One Piece Ostomy Bag Transparent-7200 60mm (10 Pcs)",
      brand: "Prowess",
      price: "₹ 1,480",
      pricePerUnit: "₹ 1,480/Unit",
      rating: 4.4,
      reviews: 8,
      category: "ostomy",
      images: ["https://medineeds.in/cdn/shop/files/PROWESS_T7200_1.jpg?v=1727701253"],
      features: ["One Piece", "Transparent", "60mm"],
      inStock: true,
      description: "Transparent ostomy bag.",
      pack: "Pack of 10",
      productCode: "7200"
    }
  ];

  const medifelizProducts: Product[] = [
    {
      id: "26",
      name: "Medifeliz 10214 One-Piece open Colostomy Bag Opaque 70mm",
      brand: "Medifeliz",
      price: "₹ 1,320",
      pricePerUnit: "₹ 1,320/Unit",
      rating: 4.5,
      reviews: 10,
      category: "ostomy",
      images: ["https://medineeds.in/cdn/shop/files/One-piece_open_colostomy_system_10214-1000x1000_95634564-5aa8-42db-b180-9b9f2ed2ea7e.webp?v=1728469967"],
      features: ["One-Piece", "Open", "Opaque"],
      inStock: true,
      description: "One-piece colostomy bag.",
      pack: "Pack of 1",
      productCode: "10214"
    },
    {
      id: "27",
      name: "Medifeliz 10215 One-Piece open Colostomy Bag Transparent 70mm",
      brand: "Medifeliz",
      price: "₹ 1,320",
      pricePerUnit: "₹ 1,320/Unit",
      rating: 4.6,
      reviews: 15,
      category: "ostomy",
      images: ["https://medineeds.in/cdn/shop/files/One-piece_open_colostomy_system_10214-1000x1000_95634564-5aa8-42db-b180-9b9f2ed2ea7e.webp?v=1728469967"],
      features: ["One-Piece", "Open", "Transparent"],
      inStock: true,
      description: "Transparent colostomy bag.",
      pack: "Pack of 1",
      productCode: "10215"
    },
    {
      id: "28",
      name: "Medifeliz 10405 Two Piece Colostomy Bag Opaque 50mm",
      brand: "Medifeliz",
      price: "₹ 1,210",
      pricePerUnit: "₹ 1,210/Unit",
      rating: 4.7,
      reviews: 20,
      category: "ostomy",
      images: ["https://medineeds.in/cdn/shop/files/Medifeliz_10405_Two_Piece_Colostomy_Bag_-1000x1000.webp?v=1728305409"],
      features: ["Two Piece", "Opaque", "50mm"],
      inStock: true,
      description: "Two piece colostomy bag.",
      pack: "Pack of 1",
      productCode: "10405"
    },
    {
      id: "29",
      name: "Medifeliz 10406 Two Piece Colostomy Bag Opaque 60mm",
      brand: "Medifeliz",
      price: "₹ 1,210",
      pricePerUnit: "₹ 1,210/Unit",
      rating: 4.8,
      reviews: 12,
      category: "ostomy",
      images: ["https://medineeds.in/cdn/shop/files/Medifeliz_10405_Two_Piece_Colostomy_Bag_-1000x1000_3afac695-4862-4a1d-a5f4-fac69a664164.webp?v=1728305864"],
      features: ["Two Piece", "Opaque", "60mm"],
      inStock: true,
      description: "Two piece colostomy bag.",
      pack: "Pack of 1",
      productCode: "10406"
    },
    {
      id: "30",
      name: "Medifeliz 10407 Two Piece Colostomy Bag Opaque 70mm",
      brand: "Medifeliz",
      price: "₹ 1,210",
      pricePerUnit: "₹ 1,210/Unit",
      rating: 4.4,
      reviews: 8,
      category: "ostomy",
      images: ["https://medineeds.in/cdn/shop/files/Medifeliz_10405_Two_Piece_Colostomy_Bag_-1000x1000_98363c66-4811-45a5-a8f2-bbbb24245f73.webp?v=1728306194"],
      features: ["Two Piece", "Opaque", "70mm"],
      inStock: true,
      description: "Two piece colostomy bag.",
      pack: "Pack of 1",
      productCode: "10407"
    }
  ];

  // Examination gloves products are now in products.ts - no need for hardcoded data

  const walkingSticksProducts: Product[] = [
    {
      id: "101",
      name: "Karma Aluminium 121 ALU Single Leg Stick Ryder",
      brand: "Karma",
      price: "₹ 850",
      pricePerUnit: "₹ 850/Unit",
      rating: 4.5,
      reviews: 10,
      category: "walking-sticks",
      images: ["https://medineeds.in/cdn/shop/products/Ryder-121AN-Silver.jpg?v=1734009389"],
      features: ["Aluminum", "Single Leg", "Adjustable Height", "Powder Coated"],
      inStock: true,
      description: "Best Karma Brand Aluminium Single Leg walking Stick Ryder Price | It is a single-leg stick which is very useful for the aged person and these types of people who are suffering from any type of disorder, they can use this stick.",
      pack: "Pack of 1",
      productCode: "121AN"
    },
    {
      id: "102",
      name: "Aluminum Karma Walking Stick WS-121",
      brand: "Karma",
      price: "₹ 523",
      pricePerUnit: "₹ 523/Unit",
      rating: 4.5,
      reviews: 15,
      category: "walking-sticks",
      images: ["https://medineeds.in/cdn/shop/products/121.jpg?v=1734009480"],
      features: ["Aluminum", "Adjustable Height", "Lightweight", "Ergonomic Handle"],
      inStock: true,
      description: "Best Karma walking sticks for seniors Price /Aluminum Karma Walking Stick WS-121 is a perfect partner for old age when most people find it difficult to walk. Walking Stick will act as an assistant to help you combat your old age problems. It has an elegant look and a durable design. It is also light in weight.",
      pack: "Pack of 1",
      productCode: "WS-121"
    }
  ];

  const walkerProducts: Product[] = [
    {
      id: "103",
      name: "Vissco Max Walker PC 2901",
      brand: "Vissco",
      price: "₹ 3,400",
      pricePerUnit: "₹ 3,400/Unit",
      rating: 4.7,
      reviews: 5,
      category: "walker",
      images: ["https://medineeds.in/cdn/shop/files/2901-VisscoDuraMaxWalker_Revised_-01_1800x1800_6b81f7dc-47c7-4aaa-8bf0-fa4bca87c418.webp?v=1751630686"],
      features: ["Height Adjustable", "Foldable", "Lightweight Aluminum", "Non-Slip Tips"],
      inStock: true,
      description: "Regain mobility and walk with confidence using the Vissco Max Walker PC 2901, a lightweight, height-adjustable foldable walker designed for the elderly, post-surgical patients, and individuals with limited lower limb strength.",
      pack: "Pack of 1",
      productCode: "PC 2901"
    },
    {
      id: "104",
      name: "Karma Walker WK-50",
      brand: "Karma",
      price: "₹ 3,000",
      pricePerUnit: "₹ 3,000/Unit",
      rating: 4.6,
      reviews: 8,
      category: "walker",
      images: ["https://medineeds.in/cdn/shop/products/50-1.jpg?v=1734011682"],
      features: ["Foldable", "Aluminum Frame", "Adjustable Height"],
      inStock: true,
      description: "Karma Walker WK-50 is designed for stability and ease of use for elderly patients.",
      pack: "Pack of 1",
      productCode: "WK-50"
    },
    {
      id: "105",
      name: "Karma WK-80 Aluminium Foldable Walker",
      brand: "Karma",
      price: "₹ 3,500",
      pricePerUnit: "₹ 3,500/Unit",
      rating: 4.5,
      reviews: 6,
      category: "walker",
      images: ["https://medineeds.in/cdn/shop/products/80.jpg?v=1734011550"],
      features: ["Aluminum", "Foldable", "Lightweight"],
      inStock: true,
      description: "Karma WK-80 Aluminium Foldable Walker for elderly mobility support.",
      pack: "Pack of 1",
      productCode: "WK-80"
    },
    {
      id: "106",
      name: "Karma WK-51-BR One-Button Folding Walker",
      brand: "Karma",
      price: "₹ 3,200",
      pricePerUnit: "₹ 3,200/Unit",
      rating: 4.4,
      reviews: 7,
      category: "walker",
      images: ["https://medineeds.in/cdn/shop/products/51-1.jpg?v=1734011858"],
      features: ["One-Button Folding", "Adjustable", "Durable"],
      inStock: true,
      description: "Karma WK-51-BR One-Button Folding Walker for easy mobility.",
      pack: "Pack of 1",
      productCode: "WK-51-BR"
    },
    {
      id: "107",
      name: "Karma Ryder WK-51 MS Walker",
      brand: "Karma",
      price: "₹ 3,500",
      pricePerUnit: "₹ 3,500/Unit",
      rating: 4.3,
      reviews: 5,
      category: "walker",
      images: ["https://medineeds.in/cdn/shop/products/51.jpg?v=1734011594"],
      features: ["Stainless Steel", "Foldable", "Stable"],
      inStock: true,
      description: "Karma Ryder WK-51 MS Walker with stainless steel construction.",
      pack: "Pack of 1",
      productCode: "WK-51 MS"
    },
    {
      id: "108",
      name: "Medipedic Walker Plain Double Bar PC 9934",
      brand: "Medipedic",
      price: "₹ 2,099",
      pricePerUnit: "₹ 2,099/Unit",
      rating: 4.2,
      reviews: 4,
      category: "walker",
      images: ["https://medineeds.in/cdn/shop/files/9934-MedipedicWalkerPlainWithDoubleBar-01_1800x1800_125f5bc4-5d56-4559-ab84-260616871567.webp?v=1751631009"],
      features: ["Double Bar", "Foldable", "Lightweight"],
      inStock: true,
      description: "Medipedic Walker Plain Double Bar PC 9934 Lightweight Foldable Walker for Elderly Patients.",
      pack: "Pack of 1",
      productCode: "PC 9934"
    }
  ];

  const wheelchairsProducts: Product[] = [
    {
      id: "109",
      name: "Medimove Ezee Lite Foldable Wheelchair",
      brand: "Medimove",
      price: "₹ 12,000",
      pricePerUnit: "₹ 12,000/Unit",
      rating: 4.8,
      reviews: 12,
      category: "wheelchairs",
      images: ["https://medineeds.in/cdn/shop/products/medimove-ezee-lite.jpg?v=1734442000"],
      features: ["Foldable", "Lightweight", "Aluminum Frame"],
      inStock: true,
      description: "Medimove Ezee Lite Foldable Wheelchair for easy transport and use.",
      pack: "Pack of 1",
      productCode: "Ezee Lite"
    },
    {
      id: "110",
      name: "Karma Ryder 1 Attendant Wheelchair",
      brand: "Karma",
      price: "₹ 9,689",
      pricePerUnit: "₹ 9,689/Unit",
      rating: 4.7,
      reviews: 15,
      category: "wheelchairs",
      images: ["https://medineeds.in/cdn/shop/products/karma_ryder1_wheelchair.jpg?v=1734610205"],
      features: ["Attendant Model", "Foldable", "Durable"],
      inStock: true,
      description: "Karma Ryder 1 Attendant Wheelchair for patient care.",
      pack: "Pack of 1",
      productCode: "Ryder 1"
    },
    {
      id: "111",
      name: "Karma Rainbow 8 Reclining Wheelchair with Commode",
      brand: "Karma",
      price: "₹ 16,200",
      pricePerUnit: "₹ 16,200/Unit",
      rating: 4.9,
      reviews: 20,
      category: "wheelchairs",
      images: ["https://medineeds.in/cdn/shop/products/rainbow8.jpg?v=1734610300"],
      features: ["Reclining", "Commode Included", "Hydraulic"],
      inStock: true,
      description: "Karma Rainbow 8 Reclining Wheelchair with Commode for comprehensive care.",
      pack: "Pack of 1",
      productCode: "Rainbow 8"
    },
    {
      id: "112",
      name: "Karma Ryder 1 Pro Manual Wheelchair",
      brand: "Karma",
      price: "₹ 10,500",
      pricePerUnit: "₹ 10,500/Unit",
      rating: 4.6,
      reviews: 10,
      category: "wheelchairs",
      images: ["https://medineeds.in/cdn/shop/products/ryder1pro.jpg?v=1734610250"],
      features: ["Manual", "Foldable", "Lightweight"],
      inStock: true,
      description: "Karma Ryder 1 Pro Manual Wheelchair for travel and daily use.",
      pack: "Pack of 1",
      productCode: "Ryder 1 Pro"
    },
    {
      id: "113",
      name: "Karma Aurora 5 Aluminium Wheelchair",
      brand: "Karma",
      price: "₹ 11,000",
      pricePerUnit: "₹ 11,000/Unit",
      rating: 4.5,
      reviews: 8,
      category: "wheelchairs",
      images: ["https://medineeds.in/cdn/shop/products/aurora5.jpg?v=1734610350"],
      features: ["Aluminum", "Lightweight", "Foldable"],
      inStock: true,
      description: "Karma Aurora 5 Aluminium Wheelchair for easy mobility.",
      pack: "Pack of 1",
      productCode: "Aurora 5"
    }
  ];

  const commodeProducts: Product[] = [
    {
      id: "114",
      name: "Karma Rainbow 2C Folding Commode Chair",
      brand: "Karma",
      price: "₹ 4,500",
      pricePerUnit: "₹ 4,500/Unit",
      rating: 4.7,
      reviews: 12,
      category: "commode",
      images: ["https://medineeds.in/cdn/shop/products/rainbow2c.jpg?v=1734610400"],
      features: ["Folding", "Lightweight", "Portable"],
      inStock: true,
      description: "Karma Rainbow 2C Folding Commode Chair for bathroom assistance.",
      pack: "Pack of 1",
      productCode: "Rainbow 2C"
    },
    {
      id: "115",
      name: "Karma Ryder 210 MS FC Commode Folding Chair",
      brand: "Karma",
      price: "₹ 3,800",
      pricePerUnit: "₹ 3,800/Unit",
      rating: 4.4,
      reviews: 9,
      category: "commode",
      images: ["https://medineeds.in/cdn/shop/products/ryder210.jpg?v=1734610450"],
      features: ["Folding", "Mild Steel", "Stable"],
      inStock: true,
      description: "Karma Ryder 210 MS FC Commode Folding Chair.",
      pack: "Pack of 1",
      productCode: "Ryder 210"
    },
    {
      id: "116",
      name: "Vissco Comfort Chrome Folding Commode Chair",
      brand: "Vissco",
      price: "₹ 4,200",
      pricePerUnit: "₹ 4,200/Unit",
      rating: 4.6,
      reviews: 11,
      category: "commode",
      images: ["https://medineeds.in/cdn/shop/products/vissco0942.jpg?v=1734610500"],
      features: ["Chrome", "Folding", "Without Wheels"],
      inStock: true,
      description: "Vissco Comfort Chrome Folding Commode Chair PC 0942.",
      pack: "Pack of 1",
      productCode: "PC 0942"
    },
    {
      id: "117",
      name: "Vissco 0941 Comfort Folding Commode Chair",
      brand: "Vissco",
      price: "₹ 4,000",
      pricePerUnit: "₹ 4,000/Unit",
      rating: 4.5,
      reviews: 10,
      category: "commode",
      images: ["https://medineeds.in/cdn/shop/products/vissco0941.jpg?v=1734610550"],
      features: ["Folding", "Lightweight", "Portable"],
      inStock: true,
      description: "Vissco 0941 Comfort Folding Commode Chair.",
      pack: "Pack of 1",
      productCode: "PC 0941"
    }
  ];

  const airbedsProducts: Product[] = [
    {
      id: "101",
      name: "Romsons Cell Mat Anti-Decubitus Air Mattress (Tubular)",
      brand: "Romsons",
      price: "₹ 9,000",
      pricePerUnit: "₹ 9,000/Unit",
      rating: 4.5,
      reviews: 12,
      category: "airbeds",
      images: ["https://medineeds.in/cdn/shop/products/romsonsair6.jpg?v=1736331136"],
      features: ["Anti-decubitus", "Tubular design", "Pressure relief", "PVC material"],
      inStock: false,
      description: "Romsons Cell Mat Anti-Decubitus Air Mattress provides excellent pressure relief for bedridden patients, preventing bedsores.",
      pack: "Pack of 1",
      productCode: "Cell Mat"
    },
    {
      id: "102",
      name: "Air Mattress (Therapy For Bed Sores) Poct (Point Of Care)",
      brand: "Point Of Care",
      price: "₹ 1,899",
      pricePerUnit: "₹ 1,899/Unit",
      rating: 4.3,
      reviews: 8,
      category: "airbeds",
      images: ["https://medineeds.in/cdn/shop/files/x7pOaPn_COP-mtUP3NzZgQc_0_gps_generated.png?v=1749990177"],
      features: ["Therapy for bed sores", "Inflatable", "Lightweight", "Portable"],
      inStock: true,
      description: "Point Of Care Air Mattress designed for therapy and prevention of bed sores in patients.",
      pack: "Pack of 1",
      productCode: "POCT Air Mattress"
    },
    {
      id: "103",
      name: "Karma Health Care Tubular Air-Wave Mattress T1",
      brand: "Karma",
      price: "₹ 13,200",
      pricePerUnit: "₹ 13,200/Unit",
      rating: 4.6,
      reviews: 15,
      category: "airbeds",
      images: ["https://medineeds.in/cdn/shop/products/T1-4.jpg?v=1736145553"],
      features: ["Tubular air-wave", "Pressure relief", "Durable", "Easy to maintain"],
      inStock: false,
      description: "Karma Tubular Air-Wave Mattress T1 for effective pressure relief and comfort.",
      pack: "Pack of 1",
      productCode: "T1"
    },
    {
      id: "104",
      name: "Karma Airwave 3 Medicated Pressure Relief Air Mattress",
      brand: "Karma",
      price: "₹ 4,200",
      pricePerUnit: "₹ 4,200/Unit",
      rating: 4.4,
      reviews: 10,
      category: "airbeds",
      images: ["https://medineeds.in/cdn/shop/products/air-3-3.jpg?v=1736146493"],
      features: ["Medicated", "Pressure relief", "Airwave technology", "Comfortable"],
      inStock: false,
      description: "Karma Airwave 3 provides medicated pressure relief for patients at risk of bedsores.",
      pack: "Pack of 1",
      productCode: "Airwave 3"
    }
  ];

  const injectionTubeNeedlesProducts: Product[] = [
    {
      id: "105",
      name: "Portex Tracheostomy Tube Cuffed",
      brand: "Portex",
      price: "₹ 1,185",
      pricePerUnit: "₹ 1,185/Unit",
      rating: 4.7,
      reviews: 20,
      category: "injection-tube-needles",
      images: ["https://medineeds.in/cdn/shop/products/portex_tracostomy.jpg?v=1676020540"],
      features: ["Cuffed", "Tracheostomy tube", "Sterile", "High quality"],
      inStock: true,
      description: "Portex Tracheostomy Tube Cuffed for secure airway management.",
      pack: "Pack of 1",
      productCode: "Tracheostomy Tube"
    },
    {
      id: "106",
      name: "Covidien HME Tracheostomy Filter Adult (2 Pcs)",
      brand: "Covidien",
      price: "₹ 330",
      pricePerUnit: "₹ 330/Unit",
      rating: 4.5,
      reviews: 15,
      category: "injection-tube-needles",
      images: ["https://medineeds.in/cdn/shop/products/covidien_tracheostomy_filter.png?v=1676009698"],
      features: ["HME filter", "Adult size", "Heat and moisture exchanger", "2 pieces"],
      inStock: true,
      description: "Covidien HME Tracheostomy Filter for humidification and filtration.",
      pack: "Pack of 2",
      productCode: "HME Filter"
    },
    {
      id: "107",
      name: "Freka Tube For Feeding CH",
      brand: "Freka",
      price: "₹ 891",
      pricePerUnit: "₹ 891/Unit",
      rating: 4.6,
      reviews: 12,
      category: "injection-tube-needles",
      images: ["https://medineeds.in/cdn/shop/files/Photoroom-20241024-171416.webp?v=1729770432"],
      features: ["Feeding tube", "CH size", "Flexible", "Biocompatible"],
      inStock: true,
      description: "Freka Tube for enteral feeding, designed for patient comfort.",
      pack: "Pack of 1",
      productCode: "Freka CH"
    },
    {
      id: "108",
      name: "Lilly Humapen Ergo II Two-Tone Blue insulin Delivery Device (Pen)",
      brand: "Lilly",
      price: "₹ 937",
      pricePerUnit: "₹ 937/Unit",
      rating: 4.8,
      reviews: 25,
      category: "injection-tube-needles",
      images: ["https://medineeds.in/cdn/shop/files/Photoroom-20241020-140405.webp?v=1729413341"],
      features: ["Insulin pen", "Two-tone blue", "Reusable", "Easy to use"],
      inStock: true,
      description: "Humapen Ergo II for convenient insulin delivery.",
      pack: "Pack of 1",
      productCode: "Humapen Ergo II"
    },
    {
      id: "109",
      name: "Dispovan Pen Needles 4mm 32g (5x20 Needles)",
      brand: "Dispovan",
      price: "₹ 679",
      pricePerUnit: "₹ 679/Unit",
      rating: 4.4,
      reviews: 18,
      category: "injection-tube-needles",
      images: ["https://medineeds.in/cdn/shop/products/dispovan_pen_needle_2.jpg?v=1734614942"],
      features: ["Pen needles", "4mm length", "32G gauge", "Sterile"],
      inStock: true,
      description: "Dispovan Pen Needles for insulin injection, 100 needles.",
      pack: "Pack of 100",
      productCode: "4mm 32G"
    }
  ];

  const healthCareDevicesProducts: Product[] = [
    {
      id: "110",
      name: "Accusure Life Glucose Test Strips 50",
      brand: "Accusure",
      price: "₹ 703",
      pricePerUnit: "₹ 703/Unit",
      rating: 4.5,
      reviews: 30,
      category: "health-care-devices",
      images: ["https://medineeds.in/cdn/shop/files/Photoroom-20241109-165300.webp?v=1731154459"],
      features: ["Glucose test strips", "50 strips", "Accurate results", "For Accusure glucometer"],
      inStock: true,
      description: "Accusure Life Glucose Test Strips for monitoring blood sugar levels.",
      pack: "Pack of 50",
      productCode: "Life Strips 50"
    },
    {
      id: "111",
      name: "Gluco Spark Blood Glucose Monitoring System",
      brand: "Gluco Spark",
      price: "₹ 420",
      pricePerUnit: "₹ 420/Unit",
      rating: 4.3,
      reviews: 22,
      category: "health-care-devices",
      images: ["https://medineeds.in/cdn/shop/files/glucospark_1.jpg?v=1749473731"],
      features: ["Blood glucose monitor", "Large LCD", "Fast results", "User-friendly"],
      inStock: true,
      description: "Gluco Spark system for accurate and fast blood glucose monitoring.",
      pack: "Pack of 1",
      productCode: "Gluco Spark"
    },
    {
      id: "112",
      name: "Beurer Medical Nebuliser IH-17",
      brand: "Beurer",
      price: "₹ 1,228",
      pricePerUnit: "₹ 1,228/Unit",
      rating: 4.6,
      reviews: 28,
      category: "health-care-devices",
      images: ["https://medineeds.in/cdn/shop/files/IH17_BEURER_NEBULIZER_5.jpg?v=1750588095"],
      features: ["Compressor nebulizer", "For upper & lower airways", "Efficient nebulization", "For adults & kids"],
      inStock: true,
      description: "Beurer IH-17 nebulizer for effective respiratory treatment.",
      pack: "Pack of 1",
      productCode: "IH-17"
    },
    {
      id: "113",
      name: "FreeStyle Libre Flash Glucose Monitoring Sensor",
      brand: "FreeStyle Libre",
      price: "₹ 5,248",
      pricePerUnit: "₹ 5,248/Unit",
      rating: 4.8,
      reviews: 35,
      category: "health-care-devices",
      images: ["https://medineeds.in/cdn/shop/files/glucospark.png?v=1749821012"],
      features: ["Continuous glucose monitor", "14-day sensor", "Painless", "Real-time readings"],
      inStock: true,
      description: "FreeStyle Libre sensor for continuous glucose monitoring.",
      pack: "Pack of 1",
      productCode: "Libre Sensor"
    },
    {
      id: "114",
      name: "OneTouch Verio Flex Glucometer with 25+10 Test Strips",
      brand: "OneTouch",
      price: "₹ 1,799",
      pricePerUnit: "₹ 1,799/Unit",
      rating: 4.7,
      reviews: 40,
      category: "health-care-devices",
      images: ["https://medineeds.in/cdn/shop/products/Optimized-verio-meter.jpg?v=1738067740"],
      features: ["Glucometer", "ColorSure technology", "25 strips + 10 free", "Easy to use"],
      inStock: true,
      description: "OneTouch Verio Flex glucometer with test strips for diabetes management.",
      pack: "Pack of 1",
      productCode: "Verio Flex"
    }
  ];

  const adultDiapersProducts: Product[] = [
    {
      id: "115",
      name: "Adult Diaper Premium Panty Style Large Respect 10 Pcs",
      brand: "Respect",
      price: "₹ 475",
      pricePerUnit: "₹ 475/Unit",
      rating: 4.4,
      reviews: 15,
      category: "adult-diapers",
      images: ["https://medineeds.in/cdn/shop/files/ADULTDIAPERPANTYSTYLELARGE.png?v=1682951670"],
      features: ["Panty style", "Large size", "Premium quality", "Comfortable"],
      inStock: true,
      description: "Respect Adult Diaper Premium Panty Style Large for incontinence care.",
      pack: "Pack of 10",
      productCode: "Respect Large"
    },
    {
      id: "116",
      name: "B-Fit Economy Adult Diaper Pants",
      brand: "B-Fit",
      price: "₹ 309",
      pricePerUnit: "₹ 309/Unit",
      rating: 4.2,
      reviews: 20,
      category: "adult-diapers",
      images: ["https://medineeds.in/cdn/shop/products/b-fit-m.jpg?v=1736332843"],
      features: ["Economy range", "Pants style", "Absorbent", "Various sizes"],
      inStock: true,
      description: "B-Fit Economy Adult Diaper Pants for daily use.",
      pack: "Pack of 10",
      productCode: "B-Fit Economy"
    },
    {
      id: "117",
      name: "Adult Diaper Premium Panty Style Xl Respect 10 Pcs",
      brand: "Respect",
      price: "₹ 499",
      pricePerUnit: "₹ 499/Unit",
      rating: 4.5,
      reviews: 18,
      category: "adult-diapers",
      images: ["https://medineeds.in/cdn/shop/files/ADULTDIAPERPANTYSTYLEXLRESPECT.png?v=1682952253"],
      features: ["Panty style", "XL size", "Premium", "Leak proof"],
      inStock: true,
      description: "Respect Adult Diaper Premium Panty Style XL for superior protection.",
      pack: "Pack of 10",
      productCode: "Respect XL"
    },
    {
      id: "118",
      name: "B Fit Economy Adult Diaper 10 Pcs",
      brand: "B-Fit",
      price: "₹ 291",
      pricePerUnit: "₹ 291/Unit",
      rating: 4.3,
      reviews: 25,
      category: "adult-diapers",
      images: ["https://medineeds.in/cdn/shop/products/bfit-m.png?v=1736333008"],
      features: ["Economy", "Adult diaper", "Comfortable", "Absorbent"],
      inStock: true,
      description: "B-Fit Economy Adult Diaper for reliable incontinence management.",
      pack: "Pack of 10",
      productCode: "B-Fit Diaper"
    },
    {
      id: "119",
      name: "Adult Diaper Premium Panty Style Medium Respect 10 Pcs",
      brand: "Respect",
      price: "₹ 462",
      pricePerUnit: "₹ 462/Unit",
      rating: 4.4,
      reviews: 16,
      category: "adult-diapers",
      images: ["https://medineeds.in/cdn/shop/files/ADULTDIAPERPANTYSTYLEMEDIUMRESPECT.png?v=1682951978"],
      features: ["Panty style", "Medium size", "Premium", "Soft"],
      inStock: true,
      description: "Respect Adult Diaper Premium Panty Style Medium for everyday comfort.",
      pack: "Pack of 10",
      productCode: "Respect Medium"
    }
  ];

  const dentalCareProducts: Product[] = [
    {
      id: "120",
      name: "Stim Flurosid Mouthwash 150ml",
      brand: "Stim",
      price: "₹ 650",
      pricePerUnit: "₹ 650/Unit",
      rating: 4.5,
      reviews: 30,
      category: "dental-care",
      images: ["https://medineeds.in/cdn/shop/files/P10_3.png?v=1757423136"],
      features: ["Fluoride mouthwash", "150ml", "Anticavity", "Freshens breath"],
      inStock: true,
      description: "Stim Flurosid Mouthwash for fluoride protection and oral hygiene.",
      pack: "Pack of 1",
      productCode: "Flurosid 150ml"
    },
    {
      id: "121",
      name: "Stim Lidayn Spray Lidocaine Topical Mint Flavoured 100gm",
      brand: "Stim",
      price: "₹ 339",
      pricePerUnit: "₹ 339/Unit",
      rating: 4.6,
      reviews: 22,
      category: "dental-care",
      images: ["https://medineeds.in/cdn/shop/files/3332493154.jpg?v=1738070602"],
      features: ["Lidocaine spray", "Topical", "Mint flavoured", "Pain relief"],
      inStock: true,
      description: "Stim Lidayn Spray for topical pain relief in the mouth.",
      pack: "Pack of 1",
      productCode: "Lidayn Spray"
    },
    {
      id: "122",
      name: "Stim Sentim Toothpaste for Sensitive Teeth – 100g (Pack of 3)",
      brand: "Stim",
      price: "₹ 378",
      pricePerUnit: "₹ 378/Unit",
      rating: 4.7,
      reviews: 35,
      category: "dental-care",
      images: ["https://medineeds.in/cdn/shop/files/product_3695_5467.jpg?v=1753531521"],
      features: ["For sensitive teeth", "100g each", "Pack of 3", "Reduces sensitivity"],
      inStock: true,
      description: "Stim Sentim Toothpaste designed to relieve tooth sensitivity.",
      pack: "Pack of 3",
      productCode: "Sentim 100g"
    },
    {
      id: "123",
      name: "STIM Ultigel Mouth Ulcer Gel – 15g (Pack of 3)",
      brand: "Stim",
      price: "₹ 300",
      pricePerUnit: "₹ 300/Unit",
      rating: 4.4,
      reviews: 28,
      category: "dental-care",
      images: ["https://medineeds.in/cdn/shop/files/ultigel.png?v=1707562086"],
      features: ["Mouth ulcer gel", "15g each", "Pack of 3", "Fast relief"],
      inStock: true,
      description: "Stim Ultigel for quick relief from mouth ulcers.",
      pack: "Pack of 3",
      productCode: "Ultigel 15g"
    },
    {
      id: "124",
      name: "STIM Ri-namel Enamel Repair Toothpaste",
      brand: "Stim",
      price: "₹ 370",
      pricePerUnit: "₹ 370/Unit",
      rating: 4.5,
      reviews: 32,
      category: "dental-care",
      images: ["https://medineeds.in/cdn/shop/files/71mRH956UqL._SX679.jpg?v=1753450353"],
      features: ["Enamel repair", "Hydroxyapatite", "Fluoride", "Strengthens teeth"],
      inStock: true,
      description: "Stim Ri-namel Toothpaste for repairing and strengthening tooth enamel.",
      pack: "Pack of 1",
      productCode: "Ri-namel"
    }
  ];

  const kneeCalfSupportProducts: Product[] = [
    {
      id: "125",
      name: "ROM Elbow Brace, Black",
      brand: "Romsons",
      price: "₹ 1,900",
      pricePerUnit: "₹ 1,900/Unit",
      rating: 4.2,
      reviews: 18,
      category: "knee-calf-support",
      images: ["https://medineeds.in/cdn/shop/products/1-295-300x300-1.jpg?v=1676020922"],
      features: ["ROM brace", "Elbow support", "Adjustable", "Black"],
      inStock: true,
      description: "ROM Elbow Brace for range of motion control and support.",
      pack: "Pack of 1",
      productCode: "ROM Elbow Brace"
    },
    {
      id: "126",
      name: "Tynor Knee Cap (Pair) Latex Free D-04",
      brand: "Tynor",
      price: "₹ 300",
      pricePerUnit: "₹ 300/Unit",
      rating: 4.3,
      reviews: 45,
      category: "knee-calf-support",
      images: ["https://medineeds.in/cdn/shop/products/tynor-knee-cap.jpg?v=1676021790"],
      features: ["Knee cap", "Pair", "Latex free", "Compression support"],
      inStock: true,
      description: "Tynor Knee Cap for knee support and pain relief.",
      pack: "Pack of 2",
      productCode: "D-04"
    },
    {
      id: "127",
      name: "Dr.Morepen Ortho Knee Cap Open Patella 1 Piece KN-04",
      brand: "Dr.Morepen",
      price: "₹ 400",
      pricePerUnit: "₹ 400/Unit",
      rating: 4.1,
      reviews: 32,
      category: "knee-calf-support",
      images: ["https://medineeds.in/cdn/shop/files/81eBEWL9pHL._SX522.jpg?v=1726823338"],
      features: ["Open patella", "Knee support", "Orthopedic", "Compression"],
      inStock: true,
      description: "Dr.Morepen Ortho Knee Cap for open patella support.",
      pack: "Pack of 1",
      productCode: "KN-04"
    },
    {
      id: "128",
      name: "Tynor Knee Wrap Hinged (Neoprene), Black J-15",
      brand: "Tynor",
      price: "₹ 1,200",
      pricePerUnit: "₹ 1,200/Unit",
      rating: 4.4,
      reviews: 28,
      category: "knee-calf-support",
      images: ["https://medineeds.in/cdn/shop/products/j15.jpg?v=1676021811"],
      features: ["Hinged knee wrap", "Neoprene", "Black", "Support"],
      inStock: true,
      description: "Tynor Knee Wrap Hinged for knee stability and support.",
      pack: "Pack of 1",
      productCode: "J-15"
    },
    {
      id: "129",
      name: "Knee Wrap Hinged (Neoprene), Black, 1 Unit",
      brand: "Karma",
      price: "₹ 1,100",
      pricePerUnit: "₹ 1,100/Unit",
      rating: 4.2,
      reviews: 25,
      category: "knee-calf-support",
      images: ["https://medineeds.in/cdn/shop/products/Knee-Wrap-Hinged-1-300x300-1.jpg?v=1676018693"],
      features: ["Hinged knee wrap", "Neoprene", "Black", "Adjustable"],
      inStock: true,
      description: "Hinged Knee Wrap for knee joint support.",
      pack: "Pack of 1",
      productCode: "Knee Wrap Hinged"
    },
  ];

  const legSupportProducts: Product[] = [
    {
      id: "130",
      name: "Vissco Activeband – Physical Resistance Bands PC H1042",
      brand: "Vissco",
      price: "₹ 399",
      pricePerUnit: "₹ 399/Unit",
      rating: 4.5,
      reviews: 40,
      category: "leg-support",
      images: ["https://medineeds.in/cdn/shop/files/4042Red-01_1800x1800_65f940ce-c181-402d-9ca8-88779f1e6c30.webp?v=1751625379"],
      features: ["Resistance bands", "Latex-free", "Strength training", "Rehabilitation"],
      inStock: true,
      description: "Vissco Activeband for physical therapy and strength training.",
      pack: "Pack of 1",
      productCode: "H1042"
    },
    {
      id: "131",
      name: "Vissco 3D Knee Cap with Donut Padding (PC 2705)",
      brand: "Vissco",
      price: "₹ 515",
      pricePerUnit: "₹ 515/Unit",
      rating: 4.6,
      reviews: 35,
      category: "leg-support",
      images: ["https://medineeds.in/cdn/shop/files/2705_1800x1800_f5476c45-3676-4d3b-931c-662b1089eefd.webp?v=1751463397"],
      features: ["3D knee cap", "Donut padding", "Patella support", "Pain relief"],
      inStock: true,
      description: "Vissco 3D Knee Cap for advanced knee support.",
      pack: "Pack of 1",
      productCode: "PC 2705"
    },
    {
      id: "132",
      name: "Pneumatic Walker (Double Push Button – Short Type) PC 5723",
      brand: "Vissco",
      price: "₹ 5,699",
      pricePerUnit: "₹ 5,699/Unit",
      rating: 4.4,
      reviews: 20,
      category: "leg-support",
      images: ["https://medineeds.in/cdn/shop/files/5723-1_1800x1800_767efa07-b664-4ec5-9d11-eaec05cf3836.webp?v=1751538493"],
      features: ["Pneumatic walker", "Short type", "Foot & ankle support", "Orthopedic"],
      inStock: true,
      description: "Pneumatic Walker for foot and ankle support.",
      pack: "Pack of 1",
      productCode: "PC 5723"
    },
    {
      id: "133",
      name: "Vissco ROM Knee Brace – Fixed Height (PC 0755)",
      brand: "Vissco",
      price: "₹ 1,799",
      pricePerUnit: "₹ 1,799/Unit",
      rating: 4.5,
      reviews: 30,
      category: "leg-support",
      images: ["https://medineeds.in/cdn/shop/files/download_86f76b0e-a903-41af-819d-1b4d50fa97bf.jpg?v=1740037810"],
      features: ["ROM knee brace", "Fixed height", "Hinged", "Post-surgery"],
      inStock: true,
      description: "Vissco ROM Knee Brace for ligament recovery.",
      pack: "Pack of 1",
      productCode: "PC 0755"
    },
    {
      id: "134",
      name: "Vissco 3D Knee Cap PC 2704",
      brand: "Vissco",
      price: "₹ 399",
      pricePerUnit: "₹ 399/Unit",
      rating: 4.3,
      reviews: 38,
      category: "leg-support",
      images: ["https://medineeds.in/cdn/shop/files/shopping_5d018fb1-6e63-49ed-b917-e7ed0c5452c2.webp?v=1740037531"],
      features: ["3D knee cap", "Compression support", "Pain relief", "Injury recovery"],
      inStock: true,
      description: "Vissco 3D Knee Cap for compression and support.",
      pack: "Pack of 1",
      productCode: "PC 2704"
    },
    {
      id: "135",
      name: "Vissco Ice Cool Gel Pack PC 4134/35",
      brand: "Vissco",
      price: "₹ 430",
      pricePerUnit: "₹ 430/Unit",
      rating: 4.7,
      reviews: 50,
      category: "leg-support",
      images: ["https://medineeds.in/cdn/shop/files/1_1800x1800_e7a0eab9-80aa-454e-be0d-49537072deca.webp?v=1751628902"],
      features: ["Ice cool gel pack", "Hot & cold therapy", "Regular & large size"],
      inStock: true,
      description: "Vissco Gel Pack for hot and cold therapy.",
      pack: "Pack of 1",
      productCode: "PC 4134/35"
    },
    {
      id: "136",
      name: "Vissco Orthopaedic Heating Belt PC 4009/10",
      brand: "Vissco",
      price: "₹ 915",
      pricePerUnit: "₹ 915/Unit",
      rating: 4.4,
      reviews: 42,
      category: "leg-support",
      images: ["https://medineeds.in/cdn/shop/files/4011_1_1800x1800_c82a03bc-a6a9-4e13-9456-83f8eef5ad0a.webp?v=1751627348"],
      features: ["Heating belt", "Pain relief", "Back, neck & joints", "Orthopedic"],
      inStock: true,
      description: "Vissco Heating Belt for pain relief.",
      pack: "Pack of 1",
      productCode: "PC 4009/10"
    },
    {
      id: "137",
      name: "Pneumatic Walker (Double Push Button – Long Type) PC 5724",
      brand: "Vissco",
      price: "₹ 6,199",
      pricePerUnit: "₹ 6,199/Unit",
      rating: 4.5,
      reviews: 25,
      category: "leg-support",
      images: ["https://medineeds.in/cdn/shop/files/5724-1_1800x1800_1b7f44c8-c5d0-4b72-b7c9-1c34689a7877.webp?v=1751543236"],
      features: ["Pneumatic walker", "Long type", "Leg, foot & ankle support"],
      inStock: true,
      description: "Pneumatic Walker for leg, foot and ankle support.",
      pack: "Pack of 1",
      productCode: "PC 5724"
    },
  ];

  const fingerSupportProducts: Product[] = [
    {
      id: "138",
      name: "Wrist Brace With Thumb, Grey",
      brand: "Romsons",
      price: "₹ 210",
      pricePerUnit: "₹ 210/Unit",
      rating: 4.1,
      reviews: 15,
      category: "finger",
      images: ["https://medineeds.in/cdn/shop/products/1-264-300x300-1.jpg?v=1676022556"],
      features: ["Wrist brace", "With thumb", "Grey", "Support"],
      inStock: true,
      description: "Wrist Brace With Thumb for wrist and thumb support.",
      pack: "Pack of 1",
      productCode: "Wrist Brace Thumb"
    },
    {
      id: "139",
      name: "Finger Cot, Silver",
      brand: "Romsons",
      price: "₹ 154",
      pricePerUnit: "₹ 154/Unit",
      rating: 4.0,
      reviews: 12,
      category: "finger",
      images: ["https://medineeds.in/cdn/shop/products/F02ADZ_1-600x706-1.jpg?v=1676010859"],
      features: ["Finger cot", "Silver", "Protective", "Single"],
      inStock: true,
      description: "Finger Cot for finger protection.",
      pack: "Pack of 1",
      productCode: "F02ADZ"
    },
    {
      id: "140",
      name: "Thumb Spica Splint, Grey",
      brand: "Romsons",
      price: "₹ 250",
      pricePerUnit: "₹ 250/Unit",
      rating: 4.2,
      reviews: 18,
      category: "finger",
      images: ["https://medineeds.in/cdn/shop/products/1-302-300x300-1.jpg?v=1676021697"],
      features: ["Thumb spica splint", "Grey", "Immobilization", "Support"],
      inStock: true,
      description: "Thumb Spica Splint for thumb immobilization.",
      pack: "Pack of 1",
      productCode: "Thumb Spica"
    },
  ];

  const handSupportProducts: Product[] = [
    {
      id: "141",
      name: "Weight Cuff, Grey",
      brand: "Romsons",
      price: "₹ 430",
      pricePerUnit: "₹ 430/Unit",
      rating: 4.3,
      reviews: 20,
      category: "hand-support",
      images: ["https://medineeds.in/cdn/shop/products/H01UBZ_1-300x300-1.jpg?v=1676022494"],
      features: ["Weight cuff", "Grey", "Resistance training", "Adjustable"],
      inStock: true,
      description: "Weight Cuff for resistance training.",
      pack: "Pack of 1",
      productCode: "H01UBZ"
    },
    {
      id: "142",
      name: "Tynor Tennis Elbow Support (Black) E-10",
      brand: "Tynor",
      price: "₹ 235",
      pricePerUnit: "₹ 235/Unit",
      rating: 4.4,
      reviews: 35,
      category: "hand-support",
      images: ["https://medineeds.in/cdn/shop/products/tennis.jpg?v=1676021868"],
      features: ["Tennis elbow support", "Black", "Compression", "Pain relief"],
      inStock: true,
      description: "Tynor Tennis Elbow Support for elbow pain relief.",
      pack: "Pack of 1",
      productCode: "E-10"
    },
    {
      id: "143",
      name: "Vissco Shoulder Abduction Support (PC 0815)",
      brand: "Vissco",
      price: "₹ 1,899",
      pricePerUnit: "₹ 1,899/Unit",
      rating: 4.5,
      reviews: 28,
      category: "hand-support",
      images: ["https://medineeds.in/cdn/shop/files/71BVAneARHL._SL1500.jpg?v=1751691456"],
      features: ["Shoulder abduction support", "Universal size", "Post-surgery", "Arm sling"],
      inStock: true,
      description: "Vissco Shoulder Abduction Support with pillow.",
      pack: "Pack of 1",
      productCode: "PC 0815"
    },
    {
      id: "144",
      name: "Elastic Shoulder Immobiliser, Grey",
      brand: "Romsons",
      price: "₹ 850",
      pricePerUnit: "₹ 850/Unit",
      rating: 4.2,
      reviews: 22,
      category: "hand-support",
      images: ["https://medineeds.in/cdn/shop/products/1-121-370x500-1.jpg?v=1676010773"],
      features: ["Shoulder immobiliser", "Elastic", "Grey", "Support"],
      inStock: true,
      description: "Elastic Shoulder Immobiliser for shoulder support.",
      pack: "Pack of 1",
      productCode: "Shoulder Immobiliser"
    },
    {
      id: "145",
      name: "Vissco Ice Cool Gel Pack PC 4134/35",
      brand: "Vissco",
      price: "₹ 430",
      pricePerUnit: "₹ 430/Unit",
      rating: 4.7,
      reviews: 50,
      category: "hand-support",
      images: ["https://medineeds.in/cdn/shop/files/1_1800x1800_e7a0eab9-80aa-454e-be0d-49537072deca.webp?v=1751628902"],
      features: ["Ice cool gel pack", "Hot & cold therapy", "Regular & large"],
      inStock: true,
      description: "Vissco Gel Pack for therapy.",
      pack: "Pack of 1",
      productCode: "PC 4134/35"
    },
    {
      id: "146",
      name: "Forearm Splint, Grey",
      brand: "Romsons",
      price: "₹ 492",
      pricePerUnit: "₹ 492/Unit",
      rating: 4.1,
      reviews: 16,
      category: "hand-support",
      images: ["https://medineeds.in/cdn/shop/products/1-285-300x300-1.jpg?v=1676011017"],
      features: ["Forearm splint", "Grey", "Immobilization", "Support"],
      inStock: true,
      description: "Forearm Splint for forearm support.",
      pack: "Pack of 1",
      productCode: "Forearm Splint"
    },
  ];

  const backSupportProducts: Product[] = [
    {
      id: "147",
      name: "Vissco Core 0120 Taylor Brace",
      brand: "Vissco",
      price: "₹ 1,799",
      pricePerUnit: "₹ 1,799/Unit",
      rating: 4.6,
      reviews: 40,
      category: "back",
      images: ["https://medineeds.in/cdn/shop/files/download_98ddefe4-36e5-43fd-8174-d605d7045a88.jpg?v=1740036676"],
      features: ["Taylor brace", "Dorso lumbar", "Spinal support", "Orthopedic"],
      inStock: true,
      description: "Vissco Taylor Brace for back support.",
      pack: "Pack of 1",
      productCode: "Core 0120"
    },
    {
      id: "148",
      name: "Tynor Lumbo Lacepull Brace A 29",
      brand: "Tynor",
      price: "₹ 1,799",
      pricePerUnit: "₹ 1,799/Unit",
      rating: 4.7,
      reviews: 45,
      category: "back",
      images: ["https://medineeds.in/cdn/shop/files/tynor_6ff95727-ef01-45b2-8d22-ad8cca0d9615.webp?v=1753797129"],
      features: ["Lumbo lacepull brace", "Back support", "Lumbar pain", "Curative"],
      inStock: true,
      description: "Tynor Lumbo Lacepull Brace for lumbar support.",
      pack: "Pack of 1",
      productCode: "A 29"
    },
    {
      id: "149",
      name: "Vissco Coccyx Seat Cushion",
      brand: "Vissco",
      price: "₹ 1,599",
      pricePerUnit: "₹ 1,599/Unit",
      rating: 4.4,
      reviews: 30,
      category: "back",
      images: ["https://medineeds.in/cdn/shop/files/shopping_549662cf-63b0-4377-8196-b981cab8fd75.webp?v=1740036999"],
      features: ["Coccyx cushion", "Tailbone relief", "Foam cushion", "Universal"],
      inStock: true,
      description: "Vissco Coccyx Seat Cushion for tailbone pain relief.",
      pack: "Pack of 1",
      productCode: "PC 1123"
    },
    {
      id: "150",
      name: "Karma Foldable Back Rest Ryder-500-BR",
      brand: "Karma",
      price: "₹ 2,300",
      pricePerUnit: "₹ 2,300/Unit",
      rating: 4.3,
      reviews: 25,
      category: "back",
      images: ["https://medineeds.in/cdn/shop/products/500-1_74895e33-6aba-4136-9e1b-2991a90af87e.jpg?v=1736146289"],
      features: ["Foldable back rest", "Comfort", "Adjustable", "Support"],
      inStock: true,
      description: "Karma Foldable Back Rest for back comfort.",
      pack: "Pack of 1",
      productCode: "Ryder-500-BR"
    },
    {
      id: "151",
      name: "Flamingo Maternity Belt",
      brand: "Flamingo",
      price: "₹ 410",
      pricePerUnit: "₹ 410/Unit",
      rating: 4.5,
      reviews: 50,
      category: "back",
      images: ["https://medineeds.in/cdn/shop/products/maternity.jpg?v=1676010963"],
      features: ["Maternity belt", "Pregnancy support", "Adjustable", "Comfort"],
      inStock: true,
      description: "Flamingo Maternity Belt for pregnancy support.",
      pack: "Pack of 1",
      productCode: "Maternity Belt"
    },
    {
      id: "152",
      name: "Vissco Abdominal Belt Post Pregnancy Support PC 0501",
      brand: "Vissco",
      price: "₹ 749",
      pricePerUnit: "₹ 749/Unit",
      rating: 4.6,
      reviews: 38,
      category: "back",
      images: ["https://medineeds.in/cdn/shop/files/VISSCO_ABDOMINAL_BELT.jpg?v=1750589369"],
      features: ["Abdominal belt", "Post pregnancy", "Compression", "Support"],
      inStock: true,
      description: "Vissco Abdominal Belt for post-pregnancy support.",
      pack: "Pack of 1",
      productCode: "PC 0501"
    },
    {
      id: "153",
      name: "Vissco Ice Cool Gel Pack PC 4134/35",
      brand: "Vissco",
      price: "₹ 430",
      pricePerUnit: "₹ 430/Unit",
      rating: 4.7,
      reviews: 50,
      category: "back",
      images: ["https://medineeds.in/cdn/shop/files/1_1800x1800_e7a0eab9-80aa-454e-be0d-49537072deca.webp?v=1751628902"],
      features: ["Ice cool gel pack", "Hot & cold therapy", "Sizes available"],
      inStock: true,
      description: "Vissco Gel Pack for therapy.",
      pack: "Pack of 1",
      productCode: "PC 4134/35"
    },
    {
      id: "154",
      name: "Vissco Orthopaedic Heating Belt PC 4009/10",
      brand: "Vissco",
      price: "₹ 915",
      pricePerUnit: "₹ 915/Unit",
      rating: 4.4,
      reviews: 42,
      category: "back",
      images: ["https://medineeds.in/cdn/shop/files/4011_1_1800x1800_c82a03bc-a6a9-4e13-9456-83f8eef5ad0a.webp?v=1751627348"],
      features: ["Heating belt", "Pain relief", "Back, neck & joints"],
      inStock: true,
      description: "Vissco Heating Belt for pain relief.",
      pack: "Pack of 1",
      productCode: "PC 4009/10"
    },
  ];

  const elbowSupportProducts: Product[] = [
    {
      id: "155",
      name: "Tynor Lumbo Lacepull Brace A 29",
      brand: "Tynor",
      price: "₹ 1,799",
      pricePerUnit: "₹ 1,799/Unit",
      rating: 4.7,
      reviews: 45,
      category: "elbow-support",
      images: ["https://medineeds.in/cdn/shop/files/tynor_6ff95727-ef01-45b2-8d22-ad8cca0d9615.webp?v=1753797129"],
      features: ["Lumbo lacepull brace", "Back support", "Lumbar pain", "Curative"],
      inStock: true,
      description: "Tynor Lumbo Lacepull Brace for lumbar support.",
      pack: "Pack of 1",
      productCode: "A 29"
    },
  ];

  // Use the filtered products from products.ts, fallback to hardcoded for other categories
  const productMap: { [key: string]: Product[] } = {
    'coloplast': allProducts,
    'convatec': allProducts,
    'hollister': allProducts,
    'bao-health': allProducts,
    'prowess': allProducts,
    'medifeliz': allProducts,
    'examination-gloves': allProducts,
    'walking-sticks': walkingSticksProducts,
    'walker': walkerProducts,
    'wheelchairs': wheelchairsProducts,
    'commode': commodeProducts,
    'airbeds': airbedsProducts,
    'injection-tube-needles': injectionTubeNeedlesProducts,
    'health-care-devices': healthCareDevicesProducts,
    'adult-diapers': adultDiapersProducts,
    'dental-care': dentalCareProducts,
    'knee-calf-support': kneeCalfSupportProducts,
    'leg-support': legSupportProducts,
    'finger': fingerSupportProducts,
    'hand-support': handSupportProducts,
    'back': backSupportProducts,
    'elbow-support': elbowSupportProducts,
  };

  // If we have brand and subCategory (e.g., /brand/coloplast/1-piece-bags), use allProducts which is already filtered
  // Otherwise, use the productMap based on slug
  const displayProducts = (brand && subCategory) ? allProducts : (productMap[slug || ''] || allProducts);

  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { key: 'all', label: 'All Products', count: displayProducts.length },
  ];

  const brands = Array.from(new Set(displayProducts.map(p => p.brand)));

  const filteredProducts = displayProducts.filter(product => {
    const matchesCategory = activeFilter === 'all' || product.category === activeFilter;
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.productCode.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace(/[₹,\s]/g, '')) - parseInt(b.price.replace(/[₹,\s]/g, ''));
      case 'price-high':
        return parseInt(b.price.replace(/[₹,\s]/g, '')) - parseInt(a.price.replace(/[₹,\s]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviews - a.reviews;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="inline-block">
              <button className="flex items-center text-blue-600 hover:text-blue-700">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Home
              </button>
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-blue-600 hover:text-blue-700">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </h3>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search Products</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Product name or code..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Categories</label>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.key}
                      onClick={() => setActiveFilter(category.key)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                        activeFilter === category.key
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <span>{category.label}</span>
                      <span className="text-sm bg-gray-200 px-2 py-1 rounded-full">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Brands</label>
                <div className="space-y-2">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-gray-600">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
                  <p className="text-gray-600">Showing {sortedProducts.length} of {allProducts.length} products</p>
                </div>
                
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                  {/* View Mode Toggle */}
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500'
                      }`}
                    >
                      <Grid className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500'
                      }`}
                    >
                      <List className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="reviews">Most Reviewed</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} viewMode={viewMode} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const ProductCard: React.FC<{ product: Product; viewMode: 'grid' | 'list' }> = ({ product, viewMode }) => {
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="flex">
          <div className="w-48 h-48 flex-shrink-0">
            <img 
              src={product.images && product.images.length > 0 ? product.images[0] : '/placeholder.svg'} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="text-sm text-blue-600 font-medium mb-1">{product.brand}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-gray-600 mb-3">{product.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.map((feature, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                </div>
              </div>

              <div className="text-right ml-6">
                <div className="text-2xl font-bold text-gray-900 mb-1">{product.price}</div>
                <div className="text-sm text-gray-500 mb-1">{product.pricePerUnit}</div>
                <div className="text-xs text-green-600 mb-4">Inclusive of all taxes</div>
                
                <div className="space-y-2">
                  <UserDetailsForm product={{
                    id: product.id.toString(),
                    productCode: product.productCode,
                    name: product.name,
                    price: product.price,
                    pack: product.pack
                  }} />

          <Link to={`/products/${product.id}`} className="w-full">
  <div className="w-full border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center cursor-pointer">
    <Eye className="h-4 w-4 mr-2" />
    View Details
  </div>
</Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
      <div className="relative overflow-hidden h-48">
        <img 
          src={product.images && product.images.length > 0 ? product.images[0] : '/placeholder.svg'} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {!product.inStock && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
            Sold Out
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Eye className="h-5 w-5 text-gray-600" />
        </div>
      </div>

      <div className="p-6">
        <div className="text-sm text-blue-600 font-medium mb-2">{product.brand}</div>
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">{product.name}</h3>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {product.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
            ))}
          </div>
          <span className="text-sm text-gray-600">{product.rating} ({product.reviews})</span>
        </div>

        <div className="mb-6">
          <div className="text-2xl font-bold text-gray-900">{product.price}</div>
          <div className="text-sm text-gray-500">{product.pricePerUnit}</div>
          <div className="text-xs text-green-600 mt-1">Inclusive of all taxes</div>
          {product.discountType && (
            <div className="text-xs text-orange-600 font-medium mt-1">🎉 {product.discountType}</div>
          )}
        </div>

        <div className="space-y-2">
          {product.inStock ? (
            <UserDetailsForm product={{
              id: product.id.toString(),
              productCode: product.productCode,
              name: product.name,
              price: product.price,
              pack: product.pack
            }} />
          ) : (
            <button
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-gray-300 text-gray-500 cursor-not-allowed"
              disabled
            >
              <ShoppingCart className="h-5 w-5" />
              Out of Stock
            </button>
          )}
          <Link to={`/products/${product.id}`} className="w-full">
            <div className="w-full border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center cursor-pointer">
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;