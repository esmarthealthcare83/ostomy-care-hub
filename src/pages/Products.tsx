// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Star, Filter, Grid, List, Search } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { products, categories, brands } from "@/data/products";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";

// export default function Products() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [selectedBrand, setSelectedBrand] = useState("all");
//   const [sortBy, setSortBy] = useState("name");
//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

//   const filteredProducts = products
//     .filter(product => {
//       const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                            product.brand.toLowerCase().includes(searchQuery.toLowerCase());
//       const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
//       const matchesBrand = selectedBrand === "all" || product.brand === selectedBrand;
//       return matchesSearch && matchesCategory && matchesBrand;
//     })
//     .sort((a, b) => {
//       switch (sortBy) {
//         case "price-low":
//           return parseInt(a.price.replace(/[^0-9]/g, "")) - parseInt(b.price.replace(/[^0-9]/g, ""));
//         case "price-high":
//           return parseInt(b.price.replace(/[^0-9]/g, "")) - parseInt(a.price.replace(/[^0-9]/g, ""));
//         case "rating":
//           return b.rating - a.rating;
//         case "popular":
//           return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
//         default:
//           return a.name.localeCompare(b.name);
//       }
//     });

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       {/* Header section for page title */}
//       <div className="bg-gradient-medical text-white py-12">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-4">Our Products</h1>
//           <p className="text-xl text-white/90">
//             Comprehensive range of medical supplies for your ostomy care needs
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         {/* Filters and Search */}
//         <div className="bg-card rounded-lg p-6 mb-8 shadow-soft">
//           <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
//             <div className="flex items-center gap-2">
//               <Filter className="h-5 w-5 text-muted-foreground" />
//               <span className="font-semibold">Filter Products</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Button
//                 variant={viewMode === "grid" ? "default" : "outline"}
//                 size="sm"
//                 onClick={() => setViewMode("grid")}
//               >
//                 <Grid className="h-4 w-4" />
//               </Button>
//               <Button
//                 variant={viewMode === "list" ? "default" : "outline"}
//                 size="sm"
//                 onClick={() => setViewMode("list")}
//               >
//                 <List className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
//             {/* Search */}
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search products..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="pl-10"
//               />
//             </div>

//             {/* Category Filter */}
//             <Select value={selectedCategory} onValueChange={setSelectedCategory}>
//               <SelectTrigger>
//                 <SelectValue placeholder="All Categories" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Categories</SelectItem>
//                 {categories.map((category) => (
//                   <SelectItem key={category.id} value={category.name}>
//                     {category.name}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>

//             {/* Brand Filter */}
//             <Select value={selectedBrand} onValueChange={setSelectedBrand}>
//               <SelectTrigger>
//                 <SelectValue placeholder="All Brands" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All Brands</SelectItem>
//                 {brands.map((brand) => (
//                   <SelectItem key={brand.name} value={brand.name}>
//                     {brand.name}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>

//             {/* Sort By */}
//             <Select value={sortBy} onValueChange={setSortBy}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Sort by" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="name">Name A-Z</SelectItem>
//                 <SelectItem value="price-low">Price: Low to High</SelectItem>
//                 <SelectItem value="price-high">Price: High to Low</SelectItem>
//                 <SelectItem value="rating">Highest Rated</SelectItem>
//                 <SelectItem value="popular">Most Popular</SelectItem>
//               </SelectContent>
//             </Select>

//             {/* Results Count */}
//             <div className="flex items-center justify-center text-sm text-muted-foreground">
//               {filteredProducts.length} products found
//             </div>
//           </div>
//         </div>

//         {/* Products Grid/List */}
//         {viewMode === "grid" ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredProducts.map((product, index) => (
//               <Card key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden border border-gray-100"
//                 style={{animationDelay: `${index * 0.05}s`}}>
//                 <div className="relative h-44 w-full overflow-hidden">
//                   <img
//                     src={product.image ?? 'https://via.placeholder.com/220x160'}
//                     alt={product.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   {product.popular && (
//                     <div className="absolute top-3 left-3 px-3 py-1 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-500 to-green-400 text-white shadow-md">
//                       Popular
//                     </div>
//                   )}
//                   {!product.inStock && (
//                     <div className="absolute top-3 right-3 px-2 py-1 rounded-lg text-xs font-medium bg-red-500 text-white shadow-sm">
//                       Sold Out
//                     </div>
//                   )}
//                 </div>
//                 <CardHeader className="pb-3 pt-4">
//                   <div className="flex items-center justify-between mb-2">
//                     <Badge variant="secondary" className="text-xs">
//                       {product.brand}
//                     </Badge>
//                     <div className="flex items-center gap-1">
//                       <Star className="h-4 w-4 text-yellow-400" />
//                       <span className="text-xs font-medium">{product.rating}</span>
//                       <span className="text-xs text-gray-400">({product.reviews})</span>
//                     </div>
//                   </div>
//                   <CardTitle className="text-base font-semibold leading-tight text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
//                     {product.name}
//                   </CardTitle>
//                   <CardDescription className="text-sm text-gray-500">{product.pack}</CardDescription>
//                 </CardHeader>
//                 <CardContent className="pt-0">
//                   <div className="mb-4">
//                     <div className="text-xl font-bold text-blue-600">MRP {product.price}</div>
//                     <div className="text-sm text-gray-500">{product.pricePerUnit}</div>
//                     <div className="text-xs text-green-500">Inclusive of all taxes</div>
//                   </div>
//                   <div className="flex gap-2">
//                     <Link to={`/products/${product.id}`} className="flex-1">
//                       <Button className="w-full px-4 py-2 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 shadow">
//                         View Details
//                       </Button>
//                     </Link>
//                     <Button className={`px-4 py-2 text-sm rounded-lg bg-green-500 text-white hover:bg-green-600 shadow transition-all duration-200 ${!product.inStock && 'opacity-60 cursor-not-allowed'}`} disabled={!product.inStock}>
//                       Add to Cart
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         ) : (
//           <div className="space-y-4">
//             {filteredProducts.map((product, index) => (
//               <Card key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
//                 style={{animationDelay: `${index * 0.02}s`}}>
//                 <CardContent className="p-6">
//                   <div className="flex flex-col md:flex-row gap-6">
//                     <div className="w-full md:w-36 h-36 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 flex items-center justify-center relative">
//                       <img
//                         src={product.image ?? 'https://via.placeholder.com/140x140'}
//                         alt={product.name}
//                         className="w-full h-full object-cover"
//                       />
//                       {!product.inStock && (
//                         <div className="absolute top-3 left-3 px-2 py-1 rounded-lg text-xs font-medium bg-red-500 text-white shadow">
//                           Sold Out
//                         </div>
//                       )}
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex items-start justify-between mb-2">
//                         <div>
//                           <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
//                           <div className="flex items-center gap-2 mb-2">
//                             <Badge variant="secondary">{product.brand}</Badge>
//                             <Badge variant="outline">{product.category}</Badge>
//                             {product.popular && (
//                               <Badge className="bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold">
//                                 Popular
//                               </Badge>
//                             )}
//                           </div>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Star className="h-4 w-4 text-yellow-400" />
//                           <span className="font-medium">{product.rating}</span>
//                           <span className="text-gray-400">({product.reviews})</span>
//                         </div>
//                       </div>
//                       <p className="text-gray-500 mb-3 line-clamp-2">{product.description}</p>
//                       <div className="mb-4 flex gap-2 flex-wrap">
//                         {(product.features ?? []).map((feature, i) => (
//                           <span key={i} className="px-2 py-1 bg-gray-100 text-xs rounded">{feature}</span>
//                         ))}
//                       </div>
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <div className="text-2xl font-bold text-blue-600">MRP {product.price}</div>
//                           <div className="text-sm text-gray-500">{product.pricePerUnit} • {product.pack}</div>
//                         </div>
//                         <div className="flex gap-2">
//                           <Link to={`/products/${product.id}`}>
//                             <Button variant="outline" className="rounded-lg border-gray-400 px-4 py-2 hover:bg-gray-100 text-sm shadow">
//                               View Details
//                             </Button>
//                           </Link>
//                           <Button className={`rounded-lg px-4 py-2 bg-green-500 text-white hover:bg-green-600 text-sm shadow transition-all duration-200 ${!product.inStock && 'opacity-60 cursor-not-allowed'}`} disabled={!product.inStock}>
//                             Add to Cart
//                           </Button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         )}

//         {filteredProducts.length === 0 && (
//           <div className="text-center py-12">
//             <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
//             <p className="text-muted-foreground">Try adjusting your search criteria</p>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// }


import React, { useState } from 'react';
import { Search, Filter, Star, ShoppingCart, Eye, ArrowLeft, Grid, List } from 'lucide-react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";


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

const Products: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const allProducts: Product[] = [
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

  const categories = [
    { key: 'all', label: 'All Products', count: allProducts.length },
    { key: 'colostomy', label: 'Colostomy', count: allProducts.filter(p => p.category === 'colostomy').length },
    { key: 'urostomy', label: 'Urostomy', count: allProducts.filter(p => p.category === 'urostomy').length },
    { key: 'baseplate', label: 'Baseplates', count: allProducts.filter(p => p.category === 'baseplate').length },
    { key: 'accessories', label: 'Accessories', count: allProducts.filter(p => p.category === 'accessories').length },
    { key: 'pediatric', label: 'Pediatric', count: allProducts.filter(p => p.category === 'pediatric').length }
  ];

  const brands = ['All Brands', 'Alterna®', 'Brava®', 'SenSura®', 'SenSura® Mio', 'Comfeel®'];

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
            <span className="text-gray-600">All Products</span>
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

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Price Range</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-gray-600">Under ₹1,000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-gray-600">₹1,000 - ₹2,000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-gray-600">₹2,000 - ₹3,000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-gray-600">Above ₹3,000</span>
                  </label>
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
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">All Products</h1>
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
    </div>
  );
};

interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode }) => {
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
                  <button className="w-full border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </button>
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
          <button className="w-full border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};


export default Products;