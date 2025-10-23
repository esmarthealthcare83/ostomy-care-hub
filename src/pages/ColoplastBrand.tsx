import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Filter, X, ChevronLeft, ChevronRight } from "lucide-react";
import { UserDetailsForm } from "@/components/UserDetailsForm";
import { 
  coloplastProducts, 
  coloplastCategories, 
  getProductsByCategory, 
  getProductsByBrand,
  filterProducts,
  getAvailableFilters,
  sortProductsWithBrandRotation,
  paginateProducts,
  FilterCriteria 
} from "@/data/coloplastProducts";
import { toast } from "@/components/ui/sonner";

export default function ColoplastBrand() {
  const { category, subCategory } = useParams();
  const navigate = useNavigate();
  
  // Determine if we're filtering by brand or category
  const brandNames = coloplastCategories.brands?.subCategories?.map(b => b.slug) || [];
  const isBrandFilter = category && brandNames.includes(category);
  const brandParam = isBrandFilter ? category : null;
  const categoryParam = isBrandFilter ? null : category;
  
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(coloplastProducts);
  const [sortBy, setSortBy] = useState("best-selling");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(12);
  
  // Multi-select filters
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedBaseplateTypes, setSelectedBaseplateTypes] = useState<string[]>([]);
  const [selectedSurgeryTypes, setSelectedSurgeryTypes] = useState<string[]>([]);
  const [selectedBagSystems, setSelectedBagSystems] = useState<string[]>([]);
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number } | null>(null);
  
  const [showFilters, setShowFilters] = useState(false);
  const [availableFilters, setAvailableFilters] = useState(getAvailableFilters());
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollYRef = useRef(0);

  // Handle navbar scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 200) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Get base products based on URL params
    let products = coloplastProducts;
    
    // Handle brand filtering
    if (brandParam) {
      products = getProductsByBrand(brandParam.replace(/-/g, ' '));
    } 
    // Handle category filtering
    else if (categoryParam && subCategory) {
      products = getProductsByCategory(categoryParam, subCategory);
    } else if (categoryParam) {
      products = getProductsByCategory(categoryParam);
    }

    // Build filter criteria
    const filterCriteria: FilterCriteria = {
      brands: selectedBrands.length > 0 ? selectedBrands : undefined,
      baseplateTypes: selectedBaseplateTypes.length > 0 ? selectedBaseplateTypes : undefined,
      surgeryTypes: selectedSurgeryTypes.length > 0 ? selectedSurgeryTypes : undefined,
      bagSystems: selectedBagSystems.length > 0 ? selectedBagSystems : undefined,
      productTypes: selectedProductTypes.length > 0 ? selectedProductTypes : undefined,
      priceMin: priceRange?.min,
      priceMax: priceRange?.max,
      inStock: true
    };

    // Apply smart filtering
    products = filterProducts(products, filterCriteria);

    // Apply brand rotation to avoid duplicate brands consecutively
    products = sortProductsWithBrandRotation(products);

    // Apply sorting
    switch (sortBy) {
      case "price-low-high":
        products = [...products].sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        products = [...products].sort((a, b) => b.price - a.price);
        break;
      case "name-a-z":
        products = [...products].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-z-a":
        products = [...products].sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // best-selling - keep brand rotation order
        break;
    }

    setFilteredProducts(products);
    setCurrentPage(1); // Reset to first page when filters change
  }, [brandParam, categoryParam, subCategory, selectedBrands, selectedBaseplateTypes, selectedSurgeryTypes, selectedBagSystems, selectedProductTypes, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedBaseplateTypes([]);
    setSelectedSurgeryTypes([]);
    setSelectedBagSystems([]);
    setSelectedProductTypes([]);
    setPriceRange(null);
    setCurrentPage(1);
  };

  // Pagination
  const paginationResult = paginateProducts(filteredProducts, currentPage, pageSize);

  // Get display title based on brand or category
  const getPageTitle = () => {
    if (brandParam) {
      const brandName = brandParam.replace(/-/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      return brandName;
    }
    if (categoryParam) {
      const categoryData = coloplastCategories[categoryParam as keyof typeof coloplastCategories];
      return categoryData?.name || 'Coloplast Ostomy Care';
    }
    return 'Coloplast Ostomy Care';
  };

  const getPageDescription = () => {
    if (brandParam) {
      return `Explore our complete range of ${getPageTitle()} products`;
    }
    return 'Premium quality ostomy products for your comfort and confidence';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Banner */}
      {/* <div className="bg-gradient-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">{getPageTitle()}</h1>
          <p className="text-lg">{getPageDescription()}</p>
        </div>
      </div> */}

      {/* Navigation Menu - Responsive */}
      <div className={`bg-white border-b sticky top-16 z-40 shadow-sm transition-transform duration-300 overflow-visible ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-3 sm:px-4 overflow-visible">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-6 py-3 lg:py-4 overflow-visible">
            {Object.entries(coloplastCategories).map(([key, cat]) => (
              <div 
                key={key} 
                className="relative flex-shrink-0"
                onMouseEnter={() => setHoveredCategory(key)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <button
                  className="flex items-center gap-1 font-medium text-sm lg:text-base text-foreground hover:text-primary whitespace-nowrap transition-colors py-2"
                >
                  {cat.name}
                  <ChevronDown className={`h-4 w-4 transition-transform ${hoveredCategory === key ? 'rotate-180' : ''}`} />
                </button>
                
                {hoveredCategory === key && (
                  <div 
                    className="absolute top-full left-0 pt-2 z-50"
                    onMouseEnter={() => setHoveredCategory(key)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <div className="bg-white shadow-lg rounded-lg border border-primary/20 min-w-[180px] lg:min-w-[220px] animate-fade-in max-h-[400px] overflow-y-auto">
                      {cat.subCategories && cat.subCategories.map((sub) => (
                        <Link
                          key={sub.slug}
                          to={key === "brands" ? `/brand/coloplast/${sub.slug}` : `/brand/coloplast/${key}/${sub.slug}`}
                          className="block px-4 py-2 hover:bg-primary/10 transition-colors text-sm first:rounded-t-lg last:rounded-b-lg"
                          onClick={() => setHoveredCategory(null)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                      {cat.products && cat.products.map((prod) => (
                        <Link
                          key={prod.id}
                          to={`/brand/coloplast/product/${prod.id}`}
                          className="block px-4 py-2 hover:bg-primary/10 transition-colors text-sm first:rounded-t-lg last:rounded-b-lg"
                          onClick={() => setHoveredCategory(null)}
                        >
                          {prod.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/brand/coloplast/how-to-order"
              className="font-medium text-sm lg:text-base text-foreground hover:text-primary whitespace-nowrap transition-colors py-2 flex-shrink-0"
            >
              How to Order
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center justify-between py-3">
            <span className="text-sm font-medium text-foreground">Menu</span>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="h-8 w-8 p-0"
            >
              <ChevronDown className={`h-5 w-5 transition-transform ${mobileNavOpen ? 'rotate-180' : ''}`} />
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileNavOpen && (
            <div className="md:hidden pb-3 border-t animate-fade-in">
              <div className="space-y-1">
                {Object.entries(coloplastCategories).map(([key, cat]) => (
                  <div key={key}>
                    <button
                      onClick={() => setActiveCategory(activeCategory === key ? null : key)}
                      className="w-full text-left flex items-center justify-between px-3 py-2 text-sm font-medium text-foreground hover:bg-primary/5 rounded transition-colors"
                    >
                      <span>{cat.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeCategory === key ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {activeCategory === key && (
                      <div className="pl-4 space-y-1 animate-fade-in">
                        {cat.subCategories && cat.subCategories.map((sub) => (
                          <Link
                            key={sub.slug}
                            to={key === "brands" ? `/brand/coloplast/${sub.slug}` : `/brand/coloplast/${key}/${sub.slug}`}
                            className="block px-3 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 rounded transition-colors"
                            onClick={() => {
                              setMobileNavOpen(false);
                              setActiveCategory(null);
                            }}
                          >
                            {sub.name}
                          </Link>
                        ))}
                        {cat.products && cat.products.map((prod) => (
                          <Link
                            key={prod.id}
                            to={`/brand/coloplast/product/${prod.id}`}
                            className="block px-3 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 rounded transition-colors"
                            onClick={() => {
                              setMobileNavOpen(false);
                              setActiveCategory(null);
                            }}
                          >
                            {prod.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  to="/brand/coloplast/how-to-order"
                  className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-primary/5 rounded transition-colors"
                  onClick={() => {
                    setMobileNavOpen(false);
                    setActiveCategory(null);
                  }}
                >
                  How to Order
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed bottom-20 right-4 z-50">
        <Button
          size="icon"
          className="rounded-full shadow-lg"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? <X className="h-5 w-5" /> : <Filter className="h-5 w-5" />}
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-muted/30 py-6 sm:py-8 lg:py-10">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8">
            {/* Sidebar Filters - Mobile/Desktop */}
            <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-72 lg:w-80 space-y-3 sm:space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto`}>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Filters</h3>
                    {(selectedBrands.length > 0 || selectedBaseplateTypes.length > 0 || selectedSurgeryTypes.length > 0 || selectedBagSystems.length > 0 || selectedProductTypes.length > 0 || priceRange) && (
                      <Button variant="ghost" size="sm" onClick={clearFilters}>
                        Clear All
                      </Button>
                    )}
                  </div>

                  {/* Sort By */}
                  <div className="mb-6 pb-4 border-b">
                    <h4 className="font-medium mb-2 text-sm">Sort By</h4>
                    <select
                      className="w-full border rounded-md p-2 text-sm"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="best-selling">Best Selling</option>
                      <option value="price-low-high">Price: Low to High</option>
                      <option value="price-high-low">Price: High to Low</option>
                      <option value="name-a-z">Name: A to Z</option>
                      <option value="name-z-a">Name: Z to A</option>
                    </select>
                  </div>

                  {/* Brand Filter */}
                  <div className="mb-4 pb-4 border-b">
                    <h4 className="font-medium mb-2 text-sm">Brand</h4>
                    <div className="space-y-1 max-h-32 overflow-y-auto">
                      {availableFilters.brands.map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer hover:bg-muted p-1 rounded">
                          <input
                            type="checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={(e) => setSelectedBrands(e.target.checked ? [...selectedBrands, brand] : selectedBrands.filter(b => b !== brand))}
                            className="rounded"
                          />
                          <span className="text-xs">{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Surgery Type Filter */}
                  <div className="mb-4 pb-4 border-b">
                    <h4 className="font-medium mb-2 text-sm">Surgery Type</h4>
                    <div className="space-y-1">
                      {availableFilters.surgeryTypes.map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer hover:bg-muted p-1 rounded">
                          <input
                            type="checkbox"
                            checked={selectedSurgeryTypes.includes(type)}
                            onChange={(e) => setSelectedSurgeryTypes(e.target.checked ? [...selectedSurgeryTypes, type] : selectedSurgeryTypes.filter(t => t !== type))}
                            className="rounded"
                          />
                          <span className="text-xs">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Bag System Filter */}
                  <div className="mb-4 pb-4 border-b">
                    <h4 className="font-medium mb-2 text-sm">Bag System</h4>
                    <div className="space-y-1">
                      {availableFilters.bagSystems.map((system) => (
                        <label key={system} className="flex items-center gap-2 cursor-pointer hover:bg-muted p-1 rounded">
                          <input
                            type="checkbox"
                            checked={selectedBagSystems.includes(system)}
                            onChange={(e) => setSelectedBagSystems(e.target.checked ? [...selectedBagSystems, system] : selectedBagSystems.filter(s => s !== system))}
                            className="rounded"
                          />
                          <span className="text-xs">{system}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Baseplate Type Filter */}
                  <div className="mb-4 pb-4 border-b">
                    <h4 className="font-medium mb-2 text-sm">Baseplate Type</h4>
                    <div className="space-y-1">
                      {availableFilters.baseplateTypes.map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer hover:bg-muted p-1 rounded">
                          <input
                            type="checkbox"
                            checked={selectedBaseplateTypes.includes(type)}
                            onChange={(e) => setSelectedBaseplateTypes(e.target.checked ? [...selectedBaseplateTypes, type] : selectedBaseplateTypes.filter(t => t !== type))}
                            className="rounded"
                          />
                          <span className="text-xs">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Product Type Filter */}
                  <div className="mb-4 pb-4 border-b">
                    <h4 className="font-medium mb-2 text-sm">Product Type</h4>
                    <div className="space-y-1 max-h-32 overflow-y-auto">
                      {availableFilters.productTypes.map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer hover:bg-muted p-1 rounded">
                          <input
                            type="checkbox"
                            checked={selectedProductTypes.includes(type)}
                            onChange={(e) => setSelectedProductTypes(e.target.checked ? [...selectedProductTypes, type] : selectedProductTypes.filter(t => t !== type))}
                            className="rounded"
                          />
                          <span className="text-xs">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range Filter */}
                  <div className="pb-4 border-b">
                    <h4 className="font-medium mb-2 text-sm">Price Range</h4>
                    <div className="space-y-2 text-xs">
                      <div>
                        <label className="text-muted-foreground">Min: ₹{priceRange?.min || availableFilters.priceRange.min}</label>
                        <input
                          type="range"
                          min={availableFilters.priceRange.min}
                          max={availableFilters.priceRange.max}
                          value={priceRange?.min || availableFilters.priceRange.min}
                          onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) } as any)}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="text-muted-foreground">Max: ₹{priceRange?.max || availableFilters.priceRange.max}</label>
                        <input
                          type="range"
                          min={availableFilters.priceRange.min}
                          max={availableFilters.priceRange.max}
                          value={priceRange?.max || availableFilters.priceRange.max}
                          onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) } as any)}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Products Grid */}
            <div className="flex-1 min-w-0">
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                  {category ? coloplastCategories[category]?.name : "All Products"}
                  {subCategory && ` - ${subCategory.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Showing {paginationResult.items.length > 0 ? ((currentPage - 1) * pageSize) + 1 : 0}-{Math.min(currentPage * pageSize, paginationResult.total)} of {paginationResult.total} products
                </p>
              </div>

              {filteredProducts.length === 0 ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <p className="text-muted-foreground">No products found matching your criteria.</p>
                    <Button onClick={clearFilters} className="mt-4">
                      Clear Filters
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-8">
                    {paginationResult.items.map((product) => {
                      // Handle both single image (string) and multiple images (array)
                      const mainImage = Array.isArray(product.image) ? product.image[0] : product.image;
                      const hasMultipleImages = Array.isArray(product.image) && product.image.length > 1;
                      
                      return (
                      <Card key={product.id} className="hover:shadow-lg transition-shadow flex flex-col h-full">
                        <CardContent className="p-3 sm:p-4 flex flex-col flex-1">
                          <div className="aspect-square bg-muted rounded-lg mb-3 sm:mb-4 flex items-center justify-center relative flex-shrink-0">
                            <img
                              src={mainImage}
                              alt={product.name}
                              className="w-full h-full object-cover rounded-lg"
                              onError={(e) => {
                                e.currentTarget.src = "https://via.placeholder.com/300x300?text=Coloplast+Product";
                              }}
                            />
                            {/* Badge for multiple images */}
                            {hasMultipleImages && (
                              <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 bg-primary text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-semibold">
                                +{product.image.length - 1}
                              </div>
                            )}
                          </div>
                          
                          <Badge className="mb-2 w-fit text-xs sm:text-sm">{product.brand}</Badge>
                          
                          <h3 className="font-semibold mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] text-sm sm:text-base">
                            {product.name}
                          </h3>
                          
                          <div className="flex items-center gap-1 sm:gap-2 mb-2 flex-wrap">
                            {product.baseplateType && (
                              <Badge variant="outline" className="text-xs">
                                {product.baseplateType}
                              </Badge>
                            )}
                            {product.bagSystem && (
                              <Badge variant="outline" className="text-xs">
                                {product.bagSystem}
                              </Badge>
                            )}
                          </div>

                          <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                            {product.description}
                          </p>

                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
                                ₹{product.price}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Pack of {product.packSize} (₹{Math.round(product.price / product.packSize)}/Unit)
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-2 flex-col sm:flex-row">
                            <UserDetailsForm
                              product={{
                                id: product.id,
                                name: product.name,
                                price: `₹${product.price}`,
                                pack: `Pack of ${product.packSize}`,
                                productCode: product.productcode?.toString()
                              }}
                              className="flex-1"
                            >
                              Buy Now
                            </UserDetailsForm>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => navigate(`/brand/coloplast/product/${product.id}`)}
                              className="text-xs sm:text-sm px-2 sm:px-4"
                            >
                              View
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                    })}
                  </div>

                  {/* Pagination Controls */}
                  {paginationResult.totalPages > 1 && (
                    <div className="flex items-center justify-center gap-1 sm:gap-2 mt-8 overflow-x-auto pb-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={!paginationResult.hasPrevPage}
                        className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0"
                      >
                        <ChevronLeft className="h-3 sm:h-4 w-3 sm:w-4" />
                      </Button>

                      <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto px-2">
                        {Array.from({ length: paginationResult.totalPages }, (_, i) => i + 1)
                          .filter(p => {
                            const delta = 2;
                            return Math.abs(p - currentPage) <= delta || p === 1 || p === paginationResult.totalPages;
                          })
                          .map((page, idx, arr) => (
                            <div key={page} className="flex items-center gap-1 sm:gap-2">
                              {idx > 0 && arr[idx - 1] !== page - 1 && (
                                <span className="px-1 sm:px-2 text-xs">...</span>
                              )}
                              <Button
                                variant={page === currentPage ? "default" : "outline"}
                                size="sm"
                                onClick={() => setCurrentPage(page)}
                                className="h-8 w-8 sm:h-10 sm:w-10 p-0 text-xs sm:text-sm flex-shrink-0"
                              >
                                {page}
                              </Button>
                            </div>
                          ))}
                      </div>

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCurrentPage(Math.min(paginationResult.totalPages, currentPage + 1))}
                        disabled={!paginationResult.hasNextPage}
                        className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0"
                      >
                        <ChevronRight className="h-3 sm:h-4 w-3 sm:w-4" />
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Information Section */}
          <div className="mt-12 sm:mt-16">
            <Card>
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                  Coloplast Ostomy Bags – Secure, Comfortable & Affordable Solutions
                </h2>
                <div className="prose max-w-none">
                  <p className="mb-4">
                    At eSmart Healthcare, we offer a comprehensive range of Coloplast ostomy bags, including colostomy, 
                    ileostomy, and urostomy bags in both 1-piece and 2-piece systems. Designed for comfort, security, 
                    and discretion, our ostomy bags come under trusted Coloplast brands like Alterna, SenSura, and SenSura Mio.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-2">Find the Right Stoma Bag for Your Needs</h3>
                  <p className="mb-4">
                    Every stoma is unique, and choosing the right stoma bag is crucial for leak prevention and skin protection. 
                    Our collection includes:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li><strong>1-Piece Ostomy Bags</strong> – A simple, all-in-one design for ease of use.</li>
                    <li><strong>2-Piece Ostomy Bags</strong> – Flexible systems allowing bag changes without removing the baseplate.</li>
                    <li><strong>Flat & Convex Baseplates</strong> – Suitable for different stoma shapes and skin contours.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-2">Ostomy Bag Brands – Trusted Quality from Coloplast</h3>
                  <p className="mb-4">
                    We bring you the most reliable ostomy bag brands, ensuring optimal skin protection and comfort:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li><strong>Alterna Ostomy Bags</strong> – Affordable, reliable, and easy to use.</li>
                    <li><strong>SenSura Ostomy Bags</strong> – Advanced protection with secure adhesion.</li>
                    <li><strong>SenSura Mio Ostomy Bags</strong> – Best-in-class fit with adaptive technology.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-2">Buy Ostomy Bags Online – Hassle-Free Shopping & Fast Delivery</h3>
                  <p className="mb-4">
                    Enjoy ostomy bag online shopping at eSmart Healthcare with:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Pan-India Doorstep Delivery</li>
                    <li>Free Delivery for Prepaid Orders in TS & AP</li>
                    <li>Easy & Secure Ordering Process</li>
                    <li>Expert Support Available</li>
                  </ul>

                  <p>
                    Shop for high-quality stoma bags today and experience peace of mind with Coloplast's trusted 
                    ostomy care solutions. Order now at eSmart Healthcare!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}