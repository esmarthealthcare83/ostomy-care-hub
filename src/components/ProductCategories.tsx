// import { ShoppingBag, Package, Settings, Star } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import productsImage from "@/assets/products-showcase.jpg";

// export function ProductCategories() {
//   const categories = [
//     {
//       title: "Ostomy Bags",
//       description: "Premium quality 1-piece and 2-piece ostomy bags",
//       icon: ShoppingBag,
//       items: ["Colostomy Bags", "Ileostomy Bags", "Urostomy Bags", "Pediatric Bags"],
//       color: "primary",
//       count: "50+ Products"
//     },
//     {
//       title: "Ostomy Baseplates",
//       description: "Secure and comfortable baseplates for all needs",
//       icon: Package,
//       items: ["Flat Baseplates", "Convex Baseplates", "Light Convex", "Deep Convex"],
//       color: "secondary",
//       count: "30+ Products"
//     },
//     {
//       title: "Supporting Products",
//       description: "Complete care accessories and supplies",
//       icon: Settings,
//       items: ["Adhesive Removers", "Belts", "Pastes", "Barrier Creams"],
//       color: "accent",
//       count: "40+ Products"
//     }
//   ];

//   const brands = [
//     { name: "Alterna®", products: 8, popular: true },
//     { name: "Brava®", products: 10, popular: true },
//     { name: "SenSura® Mio", products: 8, popular: true },
//     { name: "SenSura®", products: 4, popular: false },
//     { name: "Comfeel®", products: 2, popular: false },
//   ];

//   const featuredProducts = [
//     {
//       name: "Alterna® 1-Piece Flat Transparent Bag",
//       pack: "Pack of 6",
//       price: "₹ 1,788",
//       pricePerUnit: "₹ 298/Unit",
//       rating: 4.8,
//       reviews: 127
//     },
//     {
//       name: "Brava® Adhesive Remover Spray",
//       pack: "Pack of 1",
//       price: "₹ 870",
//       pricePerUnit: "₹ 870/Unit",
//       rating: 4.9,
//       reviews: 203
//     },
//     {
//       name: "SenSura® Mio 2-Piece Flat Baseplate",
//       pack: "Pack of 6",
//       price: "₹ 3,168",
//       pricePerUnit: "₹ 528/Unit",
//       rating: 4.7,
//       reviews: 89
//     }
//   ];

//   return (
//     <section className="py-20 bg-muted/30" id="products">
//       <div className="container mx-auto px-4">
//         {/* Section header */}
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
//             Our Product Categories
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Comprehensive range of medical supplies for your ostomy care needs
//           </p>
//         </div>

//         {/* Categories grid */}
//         <div className="grid md:grid-cols-3 gap-8 mb-20">
//           {categories.map((category, index) => {
//             const IconComponent = category.icon;
//             return (
//               <Card key={category.title} 
//                     className={`hover-lift cursor-pointer group border-0 shadow-soft bg-gradient-card hover:shadow-medium animate-slide-up`}
//                     style={{animationDelay: `${index * 0.1}s`}}>
//                 <CardHeader className="text-center">
//                   <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
//                     <IconComponent className="h-8 w-8 text-white" />
//                   </div>
//                   <CardTitle className="text-xl">{category.title}</CardTitle>
//                   <Badge variant="outline" className="w-fit mx-auto">
//                     {category.count}
//                   </Badge>
//                 </CardHeader>
//                 <CardContent>
//                   <CardDescription className="text-center mb-6">
//                     {category.description}
//                   </CardDescription>
//                   <ul className="space-y-2 mb-6">
//                     {category.items.map((item) => (
//                       <li key={item} className="text-sm text-muted-foreground flex items-center">
//                         <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                   <Button className={`w-full btn-${category.color === 'primary' ? 'hero' : category.color === 'secondary' ? 'secondary-medical' : 'accent-medical'}`}>
//                     View Products
//                   </Button>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>

//         {/* Featured Products */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
//               Best Selling Products
//             </h3>
//             <p className="text-lg text-muted-foreground">
//               Most trusted products by our customers
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {featuredProducts.map((product, index) => (
//               <Card key={product.name} className="hover-lift shadow-soft hover:shadow-medium animate-slide-up"
//                     style={{animationDelay: `${index * 0.1}s`}}>
//                 <CardHeader>
//                   <div className="flex items-center justify-between mb-2">
//                     <Badge variant="secondary" className="bg-gradient-accent text-accent-foreground">
//                       Popular
//                     </Badge>
//                     <div className="flex items-center gap-1">
//                       <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                       <span className="text-sm font-medium">{product.rating}</span>
//                       <span className="text-xs text-muted-foreground">({product.reviews})</span>
//                     </div>
//                   </div>
//                   <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
//                   <CardDescription>{product.pack}</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="mb-4">
//                     <div className="text-2xl font-bold text-primary">MRP {product.price}</div>
//                     <div className="text-sm text-muted-foreground">({product.pricePerUnit})</div>
//                     <div className="text-xs text-muted-foreground mt-1">Inclusive of all taxes</div>
//                   </div>
//                   <Button className="w-full btn-hero">
//                     Add to Cart
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* Brands section */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
//               Trusted Brands
//             </h3>
//             <p className="text-lg text-muted-foreground mb-8">
//               We partner with leading medical brands to ensure you get the highest quality products for your care.
//             </p>
            
//             <div className="grid grid-cols-2 gap-4 mb-8">
//               {brands.map((brand) => (
//                 <div key={brand.name} className="flex items-center justify-between p-4 bg-card rounded-lg border hover-lift">
//                   <div>
//                     <div className="font-semibold text-foreground">{brand.name}</div>
//                     <div className="text-sm text-muted-foreground">{brand.products} products</div>
//                   </div>
//                   {brand.popular && (
//                     <Badge variant="outline" className="bg-gradient-primary text-primary-foreground">
//                       Popular
//                     </Badge>
//                   )}
//                 </div>
//               ))}
//             </div>
            
//             <Button size="lg" className="btn-hero">
//               View All Brands
//             </Button>
//           </div>
          
//           <div className="relative">
//             <img
//               src={productsImage}
//               alt="Medical products showcase"
//               className="w-full h-[400px] object-cover rounded-2xl shadow-strong"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from 'react';
import { Package, Shield, Heart, Stethoscope, Eye, Star, ShoppingCart, Filter } from 'lucide-react'; // Ensure all icons are imported

// Dummy data for brands and products image to preserve all lines.
const brands = [
  { name: "Alterna®", products: 38, popular: true },
  { name: "SenSura® Mio", products: 22, popular: false },
  { name: "Brava®", products: 19, popular: true },
  { name: "SenSura®", products: 35, popular: false },
];

const productsImage =
  "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400";

const colorClasses = {
  blue: {
    bg: "bg-blue-100",
    icon: "text-blue-600",
    button: "bg-blue-600 hover:bg-blue-700",
  },
  green: {
    bg: "bg-green-100",
    icon: "text-green-600",
    button: "bg-green-600 hover:bg-green-700",
  },
  purple: {
    bg: "bg-purple-100",
    icon: "text-purple-600",
    button: "bg-purple-600 hover:bg-purple-700",
  },
  orange: {
    bg: "bg-orange-100",
    icon: "text-orange-600",
    button: "bg-orange-600 hover:bg-orange-700",
  },
};

const categories = [
  {
    icon: Package,
    title: "Ostomy Bags",
    description: "1-piece and 2-piece systems for all types of ostomies",
    count: "150+ Products",
    color: "blue",
    image:
      "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    icon: Shield,
    title: "Ostomy Baseplates",
    description: "Flat, convex, and specialty baseplates for secure fit",
    count: "80+ Products",
    color: "green",
    image:
      "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    icon: Heart,
    title: "Supporting Products",
    description: "Adhesive removers, pastes, and accessories",
    count: "100+ Products",
    color: "purple",
    image:
      "https://images.pexels.com/photos/3902881/pexels-photo-3902881.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    icon: Stethoscope,
    title: "Professional Care",
    description: "Expert consultation and personalized recommendations",
    count: "24/7 Available",
    color: "orange",
    image:
      "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const products = [
  {
    id: 1,
    name: "Alterna® 1-Piece Flat Transparent Bag",
    brand: "Alterna®",
    price: "₹ 1,788",
    unitPrice: "₹ 298/Unit",
    rating: 4.8,
    reviews: 106,
    category: "colostomy",
    image: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["Pack of 6", "Transparent", "Drainable"],
    inStock: true,
  },
  {
    id: 2,
    name: "SenSura® Mio 2-Piece Flat Baseplate",
    brand: "SenSura® Mio",
    price: "₹ 3,168",
    unitPrice: "₹ 528/Unit",
    rating: 4.9,
    reviews: 93,
    category: "baseplate",
    image: "https://images.pexels.com/photos/3902881/pexels-photo-3902881.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["Pack of 6", "Premium Quality", "Secure Fit"],
    inStock: true,
  },
  {
    id: 3,
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
  },
  {
    id: 4,
    name: "SenSura® 2-Piece Urostomy Transparent Bag",
    brand: "SenSura®",
    price: "₹ 2,226",
    unitPrice: "₹ 371/Unit",
    rating: 4.6,
    reviews: 48,
    category: "urostomy",
    image: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["Pack of 6", "Transparent", "Anti-Reflux"],
    inStock: true,
  },
  {
    id: 5,
    name: "Brava® Mouldable Ring",
    brand: "Brava®",
    price: "₹ 1,490",
    unitPrice: "₹ 149/Unit",
    rating: 4.8,
    reviews: 35,
    category: "accessories",
    image: "https://images.pexels.com/photos/3902881/pexels-photo-3902881.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["Pack of 10", "Flexible Seal", "Easy to Use"],
    inStock: true,
  },
  {
    id: 6,
    name: "Alterna® Pediatric Colostomy Bag",
    brand: "Alterna®",
    price: "₹ 1,842",
    unitPrice: "₹ 307/Unit",
    rating: 4.9,
    reviews: 29,
    category: "pediatric",
    image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["Pack of 6", "Child-Friendly", "Gentle Adhesive"],
    inStock: false,
  },
];

const filters = [
  { key: "all", label: "All Products" },
  { key: "colostomy", label: "Colostomy" },
  { key: "urostomy", label: "Urostomy" },
  { key: "baseplate", label: "Baseplates" },
  { key: "accessories", label: "Accessories" },
  { key: "pediatric", label: "Pediatric" },
];

export function ProductCategories() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <div>
      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive ostomy care solutions from trusted global brands,
              designed to support your comfort and confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const colors = colorClasses[category.color];
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className={`${colors.bg} p-3 rounded-full w-14 h-14 mb-4 mx-auto`}>
                      <Icon className={`h-8 w-8 ${colors.icon} mx-auto`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-center leading-relaxed">
                      {category.description}
                    </p>
                    <div className="text-center mb-6">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.icon}`}>
                        {category.count}
                      </span>
                    </div>
                    <a
                      href="/products"
                      className={`block text-center w-full text-white px-6 py-3 rounded-lg font-semibold ${colors.button} transition-all duration-300 transform group-hover:scale-105`}
                    >
                      Explore Products
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Need help choosing the right product? Our experts are here to assist you.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Expert Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Best Selling Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover our most trusted and highly-rated ostomy care products,
              chosen by healthcare professionals and patients worldwide.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Filter className="h-5 w-5 text-gray-500 mr-2 self-center" />
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group border border-gray-100"
              >
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
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    {product.brand}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                    {product.name}
                  </h3>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-gray-900">
                      {product.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      {product.unitPrice}
                    </div>
                    <div className="text-xs text-green-600 mt-1">
                      Inclusive of all taxes
                    </div>
                  </div>
                  <button
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      product.inStock
                        ? "bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Trusted Brands
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                We partner with leading medical brands to ensure you get the highest quality products for your care.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {brands.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex items-center justify-between p-4 bg-card rounded-lg border hover-lift"
                  >
                    <div>
                      <div className="font-semibold text-foreground">
                        {brand.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {brand.products} products
                      </div>
                    </div>
                    {brand.popular && (
                      <span className="bg-gradient-primary text-primary-foreground px-2 py-1 rounded-md border">
                        Popular
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <button className="btn-hero px-6 py-3 rounded-lg bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                View All Brands
              </button>
            </div>
            <div className="relative">
              <img
                src={productsImage}
                alt="Medical products showcase"
                className="w-full h-[400px] object-cover rounded-2xl shadow-strong"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


