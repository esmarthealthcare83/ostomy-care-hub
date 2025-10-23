import React, { useState, useEffect } from 'react';
import { Search, Filter, Star, ShoppingCart, Eye, ArrowLeft, Grid, List } from 'lucide-react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link, useLocation } from "react-router-dom";
import { UserDetailsForm } from '@/components/UserDetailsForm';
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
}

const Products: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<{min?: number; max?: number}>({});
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('');

  // Convert products from products.ts to match the local Product interface
  const allProducts: Product[] = allProductsData.map(p => ({
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
    productCode: p.productCode
  }));

  // Old hardcoded products - keeping for reference but not used
  const oldProducts: Product[] = [
    {
      id: "alterna-1-piece-flat-transparent",
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
      id: "alterna-1-piece-flat-transparent",
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
      id: "alterna-1-piece-flat-transparent",
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
      id: "alterna-1-piece-flat-transparent",
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
      id: "alterna-1-piece-flat-transparent",
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
      id: "brava-adhesive-remover-spray",
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
      id: "brava-mouldable-ring",
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
      id: "sensura-mio-2-piece-flat-baseplate",
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

  const brands = ['All Brands', 'Alterna®', 'Brava®', 'SenSura®', 'SenSura® Mio'];

  // Handle brand selection
  const handleBrandToggle = (brand: string) => {
    if (brand === 'All Brands') {
      setSelectedBrands(prev => 
        prev.includes('All Brands') ? [] : ['All Brands']
      );
    } else {
      setSelectedBrands(prev => {
        const newBrands = prev.includes(brand)
          ? prev.filter(b => b !== brand && b !== 'All Brands')
          : [...prev.filter(b => b !== 'All Brands'), brand];
        return newBrands.length === 0 ? ['All Brands'] : newBrands;
      });
    }
  };

  // Handle price range selection
  const handlePriceRangeChange = (range: string) => {
    if (selectedPriceRange === range) {
      setSelectedPriceRange('');
      setPriceRange({});
      return;
    }
    
    setSelectedPriceRange(range);
    switch (range) {
      case 'under-1000':
        setPriceRange({ max: 1000 });
        break;
      case '1000-2000':
        setPriceRange({ min: 1000, max: 2000 });
        break;
      case '2000-3000':
        setPriceRange({ min: 2000, max: 3000 });
        break;
      case 'above-3000':
        setPriceRange({ min: 3000 });
        break;
      default:
        setPriceRange({});
    }
  };

  // Helper function to parse price strings with currency symbols and commas
  const parsePrice = (priceStr: string): number => {
    // Remove all non-numeric characters except decimal point
    const numericString = priceStr.replace(/[^\d.]/g, '');
    return parseFloat(numericString) || 0;
  };

  const filteredProducts = allProducts.filter(product => {
    // Category filter
    const matchesCategory = activeFilter === 'all' || product.category === activeFilter;
    
    // Search filter
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.productCode.includes(searchQuery);
    
    // Brand filter - handle "All Brands" case
    const matchesBrand = selectedBrands.length === 0 || 
      selectedBrands.includes('All Brands') ||
      selectedBrands.some(selectedBrand => {
        if (selectedBrand === product.brand) return true;
        // Handle SenSura® Mio as part of SenSura® family
        if (selectedBrand === 'SenSura®' && product.brand === 'SenSura® Mio') return true;
        return false;
      });
    
    // Price range filter
    const price = parsePrice(product.price);
    const matchesPriceRange = !selectedPriceRange || 
      (priceRange.min === undefined || price >= priceRange.min) && 
      (priceRange.max === undefined || price <= priceRange.max);
    
    return matchesCategory && matchesSearch && matchesBrand && matchesPriceRange;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parsePrice(a.price) - parsePrice(b.price);
      case 'price-high':
        return parsePrice(b.price) - parsePrice(a.price);
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

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          {/* Sidebar Filters */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="bg-white rounded-lg sm:rounded-2xl shadow-lg p-4 sm:p-6 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
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
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        checked={selectedBrands.includes(brand) || 
                                (brand === 'All Brands' && selectedBrands.length === 0)}
                        onChange={() => handleBrandToggle(brand)}
                      />
                      <span className="ml-2 text-gray-600">{brand}</span>
                      {brand !== 'All Brands' && (
                        <span className="ml-auto text-xs text-gray-500">
                          ({allProducts.filter(p => p.brand === brand).length})
                        </span>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Price Range</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input 
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={selectedPriceRange === 'under-1000'}
                      onChange={() => handlePriceRangeChange('under-1000')}
                    />
                    <span className="ml-2 text-gray-600">Under ₹1,000</span>
                    <span className="ml-auto text-xs text-gray-500">
                      ({allProducts.filter(p => parsePrice(p.price) < 1000).length})
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={selectedPriceRange === '1000-2000'}
                      onChange={() => handlePriceRangeChange('1000-2000')}
                    />
                    <span className="ml-2 text-gray-600">₹1,000 - ₹2,000</span>
                    <span className="ml-auto text-xs text-gray-500">
                      ({allProducts.filter(p => parsePrice(p.price) >= 1000 && parsePrice(p.price) <= 2000).length})
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={selectedPriceRange === '2000-3000'}
                      onChange={() => handlePriceRangeChange('2000-3000')}
                    />
                    <span className="ml-2 text-gray-600">₹2,000 - ₹3,000</span>
                    <span className="ml-auto text-xs text-gray-500">
                      ({allProducts.filter(p => parsePrice(p.price) >= 2000 && parsePrice(p.price) <= 3000).length})
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={selectedPriceRange === 'above-3000'}
                      onChange={() => handlePriceRangeChange('above-3000')}
                    />
                    <span className="ml-2 text-gray-600">Above ₹3,000</span>
                    <span className="ml-auto text-xs text-gray-500">
                      ({allProducts.filter(p => parsePrice(p.price) > 3000).length})
                    </span>
                  </label>
                  {selectedPriceRange && (
                    <button 
                      onClick={() => {
                        setSelectedPriceRange('');
                        setPriceRange({});
                      }}
                      className="text-sm text-blue-600 hover:text-blue-700 mt-2"
                    >
                      Clear price filter
                    </button>
                  )}
                </div>
              </div>
              
              {/* Clear All Filters */}
              {(activeFilter !== 'all' || searchQuery || selectedBrands.length > 0 || selectedPriceRange) && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button 
                    onClick={() => {
                      setActiveFilter('all');
                      setSearchQuery('');
                      setSelectedBrands([]);
                      setSelectedPriceRange('');
                      setPriceRange({});
                    }}
                    className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4 w-full">
            {/* Header */}
            <div className="bg-white rounded-lg sm:rounded-2xl shadow-lg p-3 sm:p-6 mb-4 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                <div className="min-w-0">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">All Products</h1>
                  <p className="text-xs sm:text-sm text-gray-600">Showing {sortedProducts.length} of {allProducts.length} products</p>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                  {/* View Mode Toggle */}
                  <div className="flex bg-gray-100 rounded-lg p-1 flex-shrink-0">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-1.5 sm:p-2 rounded-md transition-colors ${
                        viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500'
                      }`}
                      title="Grid view"
                    >
                      <Grid className="h-4 sm:h-5 w-4 sm:w-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-1.5 sm:p-2 rounded-md transition-colors ${
                        viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500'
                      }`}
                      title="List view"
                    >
                      <List className="h-4 sm:h-5 w-4 sm:w-5" />
                    </button>
                  </div>

                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-2 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
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
            {sortedProducts.length === 0 ? (
              <div className="bg-white rounded-lg sm:rounded-2xl shadow-lg p-6 sm:p-12 text-center">
                <div className="text-gray-400 mb-3 sm:mb-4">
                  <Search className="h-12 sm:h-16 w-12 sm:w-16 mx-auto" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">No products found</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Try adjusting your filters or search terms</p>
                <button 
                  onClick={() => {
                    setActiveFilter('all');
                    setSearchQuery('');
                    setSelectedBrands([]);
                    setSelectedPriceRange('');
                    setPriceRange({});
                  }}
                  className="px-4 sm:px-6 py-2 sm:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6' : 'space-y-2 sm:space-y-4'}>
                {sortedProducts.map((product, index) => (
                  <ProductCard key={`${product.id}-${index}`} product={product} viewMode={viewMode} />
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-8 sm:mt-12">
              <div className="flex items-center gap-1 sm:gap-2">
                <button className="px-2 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-sm h-8 sm:h-10 min-w-[32px]">
                  Previous
                </button>
                <button className="px-2 sm:px-4 py-1.5 sm:py-2 bg-blue-600 text-white rounded-lg text-xs sm:text-sm h-8 sm:h-10 min-w-[32px]">1</button>
                <button className="px-2 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-sm h-8 sm:h-10 min-w-[32px]">2</button>
                <button className="px-2 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-sm h-8 sm:h-10 min-w-[32px]">3</button>
                <button className="px-2 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-xs sm:text-sm h-8 sm:h-10 min-w-[32px]">
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
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-48 h-48 flex-shrink-0 relative">
            <img 
              src={product.images && product.images.length > 0 ? product.images[0] : '/placeholder.svg'} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {!product.inStock && (
              <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
                Sold Out
              </div>
            )}
          </div>
          <div className="flex-1 p-6">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
              <div className="flex-1 mb-4 lg:mb-0">
                <div className="text-sm text-blue-600 font-medium mb-1">{product.brand}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-gray-600 mb-3 text-sm">{product.description}</p>
                
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

              <div className="text-left lg:text-right lg:ml-6 min-w-[200px]">
                <div className="text-2xl font-bold text-gray-900 mb-1">{product.price}</div>
                <div className="text-sm text-gray-500 mb-1">{product.pricePerUnit}</div>
                <div className="text-xs text-green-600 mb-4">Inclusive of all taxes</div>
                
                <div className="space-y-2">
                  <UserDetailsForm 
                    product={{ 
                      id: product.id,
                      productCode: product.productCode,
                      name: product.name,
                      price: product.price,
                      pack: product.pack
                    }}
                    disabled={!product.inStock}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      !product.inStock 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </UserDetailsForm>
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
        </div>

        <div className="space-y-2">
          <UserDetailsForm 
            product={{ 
              id: product.id,
              productCode: product.productCode,
              name: product.name,
              price: product.price,
              pack: product.pack
            }}
            disabled={!product.inStock}
            className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              !product.inStock 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
            }`}
          >
            <ShoppingCart className="h-5 w-5" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </UserDetailsForm>
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


export default Products;