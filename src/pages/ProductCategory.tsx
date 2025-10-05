import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, Filter, Star, ShoppingCart, Eye, ArrowLeft, Grid, List } from 'lucide-react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  unitPrice: string;
  rating: number;
  reviews: number;
  category: string;
  image: string;
  features: string[];
  inStock: boolean;
  description: string;
  packSize: string;
  productCode: string;
}

const ProductCategory: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const title = slug ? slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ') : 'Products';

  const coloplastProducts: Product[] = [
    {
      id: 1,
      name: "Coloplast Brava Elastic Barrier Tape (White and Brown) 12070",
      brand: "Coloplast",
      price: "₹ 1,170",
      unitPrice: "₹ 1,170/Unit",
      rating: 4.5,
      reviews: 10,
      category: "accessories",
      image: "https://medineeds.in/cdn/shop/files/shopping_d58f1e12-65b6-43e4-a553-7e6e769b7503.webp?v=1738138635",
      features: ["Elastic", "Barrier Tape"],
      inStock: true,
      description: "Elastic barrier tape for ostomy care.",
      packSize: "Pack of 1",
      productCode: "12070"
    },
    {
      id: 2,
      name: "Coloplast Paste 2650",
      brand: "Coloplast",
      price: "₹ 940",
      unitPrice: "₹ 940/Unit",
      rating: 4.7,
      reviews: 15,
      category: "accessories",
      image: "https://medineeds.in/cdn/shop/files/2650_1.webp?v=1735389371",
      features: ["Paste", "Skin Barrier"],
      inStock: true,
      description: "Ostomy paste for secure adhesion.",
      packSize: "Pack of 1",
      productCode: "2650"
    },
    {
      id: 3,
      name: "Coloplast Ostomy Bag 17501 12-75mm Maxi Tran Open with Hide-away Outlet Transparent",
      brand: "Coloplast",
      price: "₹ 1,749",
      unitPrice: "₹ 1,749/Unit",
      rating: 4.6,
      reviews: 20,
      category: "ostomy",
      image: "https://medineeds.in/cdn/shop/products/17501-1.jpg?v=1735389555",
      features: ["Maxi Tran", "Transparent", "Open"],
      inStock: true,
      description: "Transparent ostomy bag with hide-away outlet.",
      packSize: "Pack of 1",
      productCode: "17501"
    },
    {
      id: 4,
      name: "Coloplast 60mm Alterna Long wear light Base Plate Box 1973",
      brand: "Coloplast",
      price: "₹ 1,190",
      unitPrice: "₹ 1,190/Unit",
      rating: 4.8,
      reviews: 12,
      category: "baseplate",
      image: "https://medineeds.in/cdn/shop/products/1973.jpg?v=1735390310",
      features: ["Long Wear", "Light", "Base Plate"],
      inStock: true,
      description: "Long wear light base plate for ostomy.",
      packSize: "Pack of 1",
      productCode: "1973"
    },
    {
      id: 5,
      name: "Coloplast Ostomy Powder - 25Gm 1907",
      brand: "Coloplast",
      price: "₹ 501",
      unitPrice: "₹ 501/Unit",
      rating: 4.4,
      reviews: 8,
      category: "accessories",
      image: "https://medineeds.in/cdn/shop/files/1907-ostomy-powder-coloplast--1000x1000.jpg?v=1735389665",
      features: ["Powder", "Ostomy"],
      inStock: true,
      description: "Ostomy powder for skin protection.",
      packSize: "Pack of 1",
      productCode: "1907"
    }
  ];

  const hollisterProducts: Product[] = [
    {
      id: 6,
      name: "Hollister Adapt Paste 79300",
      brand: "Hollister",
      price: "₹ 665",
      unitPrice: "₹ 665/Unit",
      rating: 4.5,
      reviews: 18,
      category: "accessories",
      image: "https://medineeds.in/cdn/shop/files/ostomy-products-250x250.jpg?v=1735711642",
      features: ["Adapt Paste"],
      inStock: true,
      description: "Adapt paste for ostomy care.",
      packSize: "Pack of 1",
      productCode: "79300"
    },
    {
      id: 7,
      name: "Hollister Conform 2 (70mm) 37500",
      brand: "Hollister",
      price: "₹ 1,460",
      unitPrice: "₹ 1,460/Unit",
      rating: 4.6,
      reviews: 22,
      category: "ostomy",
      image: "https://medineeds.in/cdn/shop/products/hollister_37500_1.png?v=1735711706",
      features: ["Conform 2", "70mm"],
      inStock: true,
      description: "Conform 2 ostomy bag.",
      packSize: "Pack of 1",
      productCode: "37500"
    },
    {
      id: 8,
      name: "Hollister Conform 2 BasePlate Flange FlexWear Barrier (55mm) 35500",
      brand: "Hollister",
      price: "₹ 1,330",
      unitPrice: "₹ 1,330/Unit",
      rating: 4.7,
      reviews: 14,
      category: "baseplate",
      image: "https://medineeds.in/cdn/shop/products/35500-1.jpg?v=1735711817",
      features: ["FlexWear", "Barrier", "55mm"],
      inStock: true,
      description: "FlexWear barrier baseplate.",
      packSize: "Pack of 1",
      productCode: "35500"
    },
    {
      id: 9,
      name: "Hollister Moderma Flex 28401",
      brand: "Hollister",
      price: "₹ 1,199",
      unitPrice: "₹ 1,199/Unit",
      rating: 4.8,
      reviews: 25,
      category: "ostomy",
      image: "https://medineeds.in/cdn/shop/products/28401-1.jpg?v=1735711975",
      features: ["Moderma Flex"],
      inStock: true,
      description: "Moderma Flex ostomy bag.",
      packSize: "Pack of 1",
      productCode: "28401"
    },
    {
      id: 10,
      name: "Hollister Moderma 1-Piece Flex Maxi Tran 15-51mm R 26901",
      brand: "Hollister",
      price: "₹ 1,220",
      unitPrice: "₹ 1,220/Unit",
      rating: 4.9,
      reviews: 30,
      category: "ostomy",
      image: "https://medineeds.in/cdn/shop/products/Hollister_269011.jpg?v=1735712682",
      features: ["Maxi Tran", "15-51mm", "R"],
      inStock: true,
      description: "Maxi Tran ostomy bag.",
      packSize: "Pack of 1",
      productCode: "26901"
    }
  ];

  const convatecProducts: Product[] = [
    {
      id: 11,
      name: "ConvaTec Stomahesive Paste 2 Oz. (56.7g) 183910",
      brand: "ConvaTec",
      price: "₹ 925",
      unitPrice: "₹ 925/Unit",
      rating: 4.5,
      reviews: 10,
      category: "accessories",
      image: "https://medineeds.in/cdn/shop/files/sq183910b.webp?v=1735825130",
      features: ["Stomahesive Paste"],
      inStock: true,
      description: "Stomahesive paste for ostomy care.",
      packSize: "Pack of 1",
      productCode: "183910"
    },
    {
      id: 12,
      name: "ConvaTec Natura Drainable Pouch Bag 57mm 416420",
      brand: "ConvaTec",
      price: "₹ 1,150",
      unitPrice: "₹ 1,150/Unit",
      rating: 4.6,
      reviews: 15,
      category: "ostomy",
      image: "https://medineeds.in/cdn/shop/files/rn-image_picker_lib_temp_ff448379-68a5-4f29-918c-8972686eca30.webp?v=1735825718",
      features: ["Drainable", "Pouch", "57mm"],
      inStock: true,
      description: "Natura drainable pouch bag.",
      packSize: "Pack of 1",
      productCode: "416420"
    },
    {
      id: 13,
      name: "ConvaTec Natura Sur-Fit Durahesive Flexible Plate 57mm 413162",
      brand: "ConvaTec",
      price: "₹ 1,245",
      unitPrice: "₹ 1,245/Unit",
      rating: 4.7,
      reviews: 20,
      category: "baseplate",
      image: "https://medineeds.in/cdn/shop/products/convatec_413162_57mm_plate.png?v=1735826039",
      features: ["Durahesive", "Flexible Plate", "57mm"],
      inStock: true,
      description: "Durahesive flexible plate.",
      packSize: "Pack of 1",
      productCode: "413162"
    },
    {
      id: 14,
      name: "Convatec Esenta Sting Free Skin Barrier Spray - 50ml P.C. 413502 New Code 423288",
      brand: "ConvaTec",
      price: "₹ 999",
      unitPrice: "₹ 999/Unit",
      rating: 4.8,
      reviews: 12,
      category: "accessories",
      image: "https://medineeds.in/cdn/shop/files/rn-image_picker_lib_temp_ceab69e3-5d59-47b1-a144-0cc34baecdb8.webp?v=1735826575",
      features: ["Sting Free", "Skin Barrier Spray"],
      inStock: true,
      description: "Sting free skin barrier spray.",
      packSize: "Pack of 1",
      productCode: "423288"
    },
    {
      id: 15,
      name: "Convatec ActiveLife Drainable Pouch 22771 (19-64 mm) (5 Pcs)",
      brand: "ConvaTec",
      price: "₹ 1,260",
      unitPrice: "₹ 1,260/Unit",
      rating: 4.4,
      reviews: 8,
      category: "ostomy",
      image: "https://medineeds.in/cdn/shop/products/CONVATEC_22771_5.png?v=1735826805",
      features: ["ActiveLife", "Drainable Pouch", "19-64mm"],
      inStock: true,
      description: "ActiveLife drainable pouch.",
      packSize: "Pack of 5",
      productCode: "22771"
    }
  ];

  const baoHealthProducts: Product[] = [
    {
      id: 16,
      name: "Bao-Health Skin Barrier Support (C-Tape) 20 Pcs 60612",
      brand: "Bao-Health",
      price: "₹ 560",
      unitPrice: "₹ 560/Unit",
      rating: 4.5,
      reviews: 10,
      category: "accessories",
      image: "https://medineeds.in/cdn/shop/files/bao-health_skin_barrier_support.png?v=1722602445",
      features: ["Skin Barrier Support", "C-Tape"],
      inStock: true,
      description: "Skin barrier support tape.",
      packSize: "Pack of 20",
      productCode: "60612"
    },
    {
      id: 17,
      name: "Bao-Health One Piece Ostomy Pouch, Drainable, Clamp Closure 15-60MM 102BNC",
      brand: "Bao-Health",
      price: "₹ 1,199",
      unitPrice: "₹ 1,199/Unit",
      rating: 4.6,
      reviews: 15,
      category: "ostomy",
      image: "https://medineeds.in/cdn/shop/files/bao-health_one_piece_ostomy_pouch_102bnc.png?v=1722609451",
      features: ["One Piece", "Drainable", "Clamp Closure"],
      inStock: true,
      description: "One piece ostomy pouch.",
      packSize: "Pack of 1",
      productCode: "102BNC"
    },
    {
      id: 18,
      name: "Bao-Health Stoma Paste 60gm 6012",
      brand: "Bao-Health",
      price: "₹ 699",
      unitPrice: "₹ 699/Unit",
      rating: 4.7,
      reviews: 20,
      category: "accessories",
      image: "https://medineeds.in/cdn/shop/files/BAO_HEALTH_STOMA_PASTE_3.jpg?v=1722437617",
      features: ["Stoma Paste"],
      inStock: true,
      description: "Stoma paste for ostomy care.",
      packSize: "Pack of 1",
      productCode: "6012"
    },
    {
      id: 19,
      name: "Bao-Health Stoma Belt 50100",
      brand: "Bao-Health",
      price: "₹ 560",
      unitPrice: "₹ 560/Unit",
      rating: 4.8,
      reviews: 12,
      category: "accessories",
      image: "https://medineeds.in/cdn/shop/files/bao-health_stoma_belt_dd382388-4c36-444f-b388-2801c2c9f98c.png?v=1722601851",
      features: ["Stoma Belt"],
      inStock: true,
      description: "Adjustable stoma belt.",
      packSize: "Pack of 1",
      productCode: "50100"
    },
    {
      id: 20,
      name: "Bao-Health Hydrocolloid Skin Barrier Protective Sheet 10x10CM 5000015 (3 Pcs)",
      brand: "Bao-Health",
      price: "₹ 785",
      unitPrice: "₹ 785/Unit",
      rating: 4.4,
      reviews: 8,
      category: "accessories",
      image: "https://medineeds.in/cdn/shop/files/BAO-HELTH_HYDROCOLLOID_SKIN_BARRIER_SHEET_10_10.png?v=1722608439",
      features: ["Hydrocolloid", "Skin Barrier"],
      inStock: true,
      description: "Hydrocolloid skin barrier sheet.",
      packSize: "Pack of 3",
      productCode: "5000015"
    }
  ];

  const prowessProducts: Product[] = [
    {
      id: 21,
      name: "Prowess Colostomy Belt 9901 (3 Pcs)",
      brand: "Prowess",
      price: "₹ 520",
      unitPrice: "₹ 520/Unit",
      rating: 4.5,
      reviews: 10,
      category: "accessories",
      image: "https://medineeds.in/cdn/shop/files/prowess_colostomy_belt.jpg?v=1727695353",
      features: ["Colostomy Belt"],
      inStock: true,
      description: "Colostomy belt for support.",
      packSize: "Pack of 3",
      productCode: "9901"
    },
    {
      id: 22,
      name: "Prowess Fusion Beige-7200 1 Piese Single Bag 60mm (B7200) 10 Pcs",
      brand: "Prowess",
      price: "₹ 1,480",
      unitPrice: "₹ 1,480/Unit",
      rating: 4.6,
      reviews: 15,
      category: "ostomy",
      image: "https://medineeds.in/cdn/shop/files/PROWESS_B7200.jpg?v=1727683156",
      features: ["Fusion", "Single Bag", "60mm"],
      inStock: true,
      description: "Fusion single bag ostomy.",
      packSize: "Pack of 10",
      productCode: "B7200"
    },
    {
      id: 23,
      name: "Prowess Fusion Comfort One Piece Ostomy Bag Drainable Transparent-8800 with Roll & Press Closure 75mm",
      brand: "Prowess",
      price: "₹ 1,840",
      unitPrice: "₹ 1,840/Unit",
      rating: 4.7,
      reviews: 20,
      category: "ostomy",
      image: "https://medineeds.in/cdn/shop/files/ProwessFusionComfortOnePieceOstomyBag_Drainable_Transparent-8800_featuresa75mmroll-and-pressclosureforeasyandsecuredrainage.Itstransparentdesignallowsfordiscreetmonitoring_whiletheco.jpg?v=1727686714",
      features: ["Comfort", "Drainable", "Transparent"],
      inStock: true,
      description: "Comfort one piece ostomy bag.",
      packSize: "Pack of 1",
      productCode: "8800"
    },
    {
      id: 24,
      name: "Prowess Fusion Extra-Large One-Piece Ostomy Bag XL Drainable Transparent With Roll & Press Closure 90mm (T7200XL) 10 Pcs",
      brand: "Prowess",
      price: "₹ 2,330",
      unitPrice: "₹ 2,330/Unit",
      rating: 4.8,
      reviews: 12,
      category: "ostomy",
      image: "https://medineeds.in/cdn/shop/files/ProwessFusionExtra-LargeOne-PieceOstomyBagXLDrainableTransparentWithRoll_PressClosure90mm.jpg?v=1727687728",
      features: ["Extra-Large", "Drainable", "90mm"],
      inStock: true,
      description: "Extra-large ostomy bag.",
      packSize: "Pack of 10",
      productCode: "T7200XL"
    },
    {
      id: 25,
      name: "Prowess fusion One Piece Ostomy Bag Transparent-7200 60mm (10 Pcs)",
      brand: "Prowess",
      price: "₹ 1,480",
      unitPrice: "₹ 1,480/Unit",
      rating: 4.4,
      reviews: 8,
      category: "ostomy",
      image: "https://medineeds.in/cdn/shop/files/PROWESS_T7200_1.jpg?v=1727701253",
      features: ["One Piece", "Transparent", "60mm"],
      inStock: true,
      description: "Transparent ostomy bag.",
      packSize: "Pack of 10",
      productCode: "7200"
    }
  ];

  const medifelizProducts: Product[] = [
    {
      id: 26,
      name: "Medifeliz 10214 One-Piece open Colostomy Bag Opaque 70mm",
      brand: "Medifeliz",
      price: "₹ 1,320",
      unitPrice: "₹ 1,320/Unit",
      rating: 4.5,
      reviews: 10,
      category: "ostomy",
      image: "https://medineeds.in/cdn/shop/files/One-piece_open_colostomy_system_10214-1000x1000_95634564-5aa8-42db-b180-9b9f2ed2ea7e.webp?v=1728469967",
      features: ["One-Piece", "Open", "Opaque"],
      inStock: true,
      description: "One-piece colostomy bag.",
      packSize: "Pack of 1",
      productCode: "10214"
    },
    {
      id: 27,
      name: "Medifeliz 10215 One-Piece open Colostomy Bag Transparent 70mm",
      brand: "Medifeliz",
      price: "₹ 1,320",
      unitPrice: "₹ 1,320/Unit",
      rating: 4.6,
      reviews: 15,
      category: "ostomy",
      image: "https://medineeds.in/cdn/shop/files/One-piece_open_colostomy_system_10214-1000x1000_95634564-5aa8-42db-b180-9b9f2ed2ea7e.webp?v=1728469967",
      features: ["One-Piece", "Open", "Transparent"],
      inStock: true,
      description: "Transparent colostomy bag.",
      packSize: "Pack of 1",
      productCode: "10215"
    },
    {
      id: 28,
      name: "Medifeliz 10405 Two Piece Colostomy Bag Opaque 50mm",
      brand: "Medifeliz",
      price: "₹ 1,210",
      unitPrice: "₹ 1,210/Unit",
      rating: 4.7,
      reviews: 20,
      category: "ostomy",
      image: "https://medineeds.in/cdn/shop/files/Medifeliz_10405_Two_Piece_Colostomy_Bag_-1000x1000.webp?v=1728305409",
      features: ["Two Piece", "Opaque", "50mm"],
      inStock: true,
      description: "Two piece colostomy bag.",
      packSize: "Pack of 1",
      productCode: "10405"
    },
    {
      id: 29,
      name: "Medifeliz 10406 Two Piece Colostomy Bag Opaque 60mm",
      brand: "Medifeliz",
      price: "₹ 1,210",
      unitPrice: "₹ 1,210/Unit",
      rating: 4.8,
      reviews: 12,
      category: "ostomy",
      image: "https://medineeds.in/cdn/shop/files/Medifeliz_10405_Two_Piece_Colostomy_Bag_-1000x1000_3afac695-4862-4a1d-a5f4-fac69a664164.webp?v=1728305864",
      features: ["Two Piece", "Opaque", "60mm"],
      inStock: true,
      description: "Two piece colostomy bag.",
      packSize: "Pack of 1",
      productCode: "10406"
    },
    {
      id: 30,
      name: "Medifeliz 10407 Two Piece Colostomy Bag Opaque 70mm",
      brand: "Medifeliz",
      price: "₹ 1,210",
      unitPrice: "₹ 1,210/Unit",
      rating: 4.4,
      reviews: 8,
      category: "ostomy",
      image: "https://medineeds.in/cdn/shop/files/Medifeliz_10405_Two_Piece_Colostomy_Bag_-1000x1000_98363c66-4811-45a5-a8f2-bbbb24245f73.webp?v=1728306194",
      features: ["Two Piece", "Opaque", "70mm"],
      inStock: true,
      description: "Two piece colostomy bag.",
      packSize: "Pack of 1",
      productCode: "10407"
    }
  ];

  const examinationGlovesProducts: Product[] = [
    {
      id: 31,
      name: "Premium Quality Latex Examination Gloves, 100 Pcs Per Box Asio",
      brand: "Asio",
      price: "₹ 399",
      unitPrice: "₹ 399/Unit",
      rating: 4.5,
      reviews: 10,
      category: "gloves",
      image: "https://medineeds.in/cdn/shop/products/LARGEEXAMINATIONGLOVESASIO.png?v=1681931553",
      features: ["Latex", "Examination Gloves"],
      inStock: true,
      description: "Premium latex examination gloves.",
      packSize: "Pack of 100",
      productCode: "Asio"
    },
    {
      id: 32,
      name: "Medical Examination Disposable Hand Gloves",
      brand: "Generic",
      price: "₹ 686",
      unitPrice: "₹ 686/Unit",
      rating: 4.6,
      reviews: 15,
      category: "gloves",
      image: "https://medineeds.in/cdn/shop/products/latex.jpg?v=1676018831",
      features: ["Disposable", "Hand Gloves"],
      inStock: true,
      description: "Medical disposable hand gloves.",
      packSize: "Pack of 1",
      productCode: "Generic"
    },
    {
      id: 33,
      name: "Mytouch Disposable Latex Surgical Gloves Sterile Pair (Two Gloves)",
      brand: "Mytouch",
      price: "₹ 968",
      unitPrice: "₹ 968/Unit",
      rating: 4.7,
      reviews: 20,
      category: "gloves",
      image: "https://medineeds.in/cdn/shop/products/mytouchGloves4.jpg?v=1676019059",
      features: ["Surgical", "Sterile", "Pair"],
      inStock: true,
      description: "Sterile surgical gloves pair.",
      packSize: "Pack of 2",
      productCode: "Mytouch"
    }
  ];

  const productMap: { [key: string]: Product[] } = {
    'coloplast': coloplastProducts,
    'convatec': convatecProducts,
    'hollister': hollisterProducts,
    'bao-health': baoHealthProducts,
    'prowess': prowessProducts,
    'medifeliz': medifelizProducts,
    'examination-gloves': examinationGlovesProducts,
  };

  const allProducts = productMap[slug || ''] || [];

  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { key: 'all', label: 'All Products', count: allProducts.length },
  ];

  const brands = Array.from(new Set(allProducts.map(p => p.brand)));

  const filteredProducts = allProducts.filter(product => {
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
              src={product.image} 
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
                <div className="text-sm text-gray-500 mb-1">{product.unitPrice}</div>
                <div className="text-xs text-green-600 mb-4">Inclusive of all taxes</div>
                
                <div className="space-y-2">
                  <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </button>
                  
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
          src={product.image} 
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
          <div className="text-sm text-gray-500">{product.unitPrice}</div>
          <div className="text-xs text-green-600 mt-1">Inclusive of all taxes</div>
        </div>

        <div className="space-y-2">
          <button 
            className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              product.inStock
                ? 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-5 w-5" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
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