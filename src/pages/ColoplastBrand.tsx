import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ShoppingCart, Filter, X } from "lucide-react";
import { coloplastProducts, coloplastCategories, getProductsByCategory, getProductsByBrand } from "@/data/coloplastProducts";
import { toast } from "@/components/ui/sonner";

export default function ColoplastBrand() {
  const { category, subCategory } = useParams();
  const navigate = useNavigate();
  
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(coloplastProducts);
  const [sortBy, setSortBy] = useState("best-selling");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedDiameter, setSelectedDiameter] = useState<string | null>(null);
  const [selectedBaseplateType, setSelectedBaseplateType] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Filter products based on URL params
    let products = coloplastProducts;
    
    if (category && subCategory) {
      products = getProductsByCategory(category, subCategory);
    } else if (category) {
      products = getProductsByCategory(category);
    }

    // Apply additional filters
    if (selectedBrand) {
      products = products.filter(p => p.brand === selectedBrand);
    }
    if (selectedDiameter) {
      products = products.filter(p => p.diameter?.includes(selectedDiameter));
    }
    if (selectedBaseplateType) {
      products = products.filter(p => p.baseplateType === selectedBaseplateType);
    }

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
        // best-selling - keep original order
        break;
    }

    setFilteredProducts(products);
  }, [category, subCategory, selectedBrand, selectedDiameter, selectedBaseplateType, sortBy]);

  const handleAddToCart = (productId: string, productName: string) => {
    toast.success("Added to cart!", {
      description: `${productName} has been added to your cart.`,
    });
  };

  const clearFilters = () => {
    setSelectedBrand(null);
    setSelectedDiameter(null);
    setSelectedBaseplateType(null);
  };

  const uniqueBrands = [...new Set(coloplastProducts.map(p => p.brand))];
  const uniqueDiameters = [...new Set(coloplastProducts.flatMap(p => p.diameter?.split(", ") || []))];
  const uniqueBaseplateTypes = [...new Set(coloplastProducts.map(p => p.baseplateType).filter(Boolean))];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Banner */}
      <div className="bg-gradient-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Coloplast Ostomy Care</h1>
          <p className="text-lg">Premium quality ostomy products for your comfort and confidence</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-white border-b sticky top-[140px] z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-8 py-4">
            {Object.entries(coloplastCategories).map(([key, cat]) => (
              <div 
                key={key} 
                className="relative"
                onMouseEnter={() => setHoveredCategory(key)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <button
                  className="flex items-center gap-1 font-medium text-foreground hover:text-primary whitespace-nowrap transition-colors"
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
                    <div className="bg-white shadow-lg rounded-lg border border-primary/20 min-w-[200px] animate-fade-in">
                      {cat.subCategories && cat.subCategories.map((sub) => (
                        <Link
                          key={sub.slug}
                          to={`/brand/coloplast/${key}/${sub.slug}`}
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
              className="font-medium text-foreground hover:text-primary whitespace-nowrap transition-colors"
            >
              How to Order
            </Link>
          </nav>
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
      <div className="flex-1 bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 space-y-6`}>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Filters</h3>
                    {(selectedBrand || selectedDiameter || selectedBaseplateType) && (
                      <Button variant="ghost" size="sm" onClick={clearFilters}>
                        Clear All
                      </Button>
                    )}
                  </div>

                  {/* Sort By */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Sort By</h4>
                    <select
                      className="w-full border rounded-md p-2"
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
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Brand</h4>
                    <div className="space-y-2">
                      {uniqueBrands.map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedBrand === brand}
                            onChange={(e) => setSelectedBrand(e.target.checked ? brand : null)}
                            className="rounded"
                          />
                          <span className="text-sm">{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Diameter Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Diameter</h4>
                    <div className="space-y-2">
                      {uniqueDiameters.map((diameter) => (
                        <label key={diameter} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedDiameter === diameter}
                            onChange={(e) => setSelectedDiameter(e.target.checked ? diameter : null)}
                            className="rounded"
                          />
                          <span className="text-sm">{diameter}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Baseplate Type Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Baseplate Type</h4>
                    <div className="space-y-2">
                      {uniqueBaseplateTypes.map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedBaseplateType === type}
                            onChange={(e) => setSelectedBaseplateType(e.target.checked ? type : null)}
                            className="rounded"
                          />
                          <span className="text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">
                  {category ? coloplastCategories[category]?.name : "All Products"}
                  {subCategory && ` - ${subCategory.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`}
                </h2>
                <p className="text-muted-foreground">
                  Total Products: {filteredProducts.length}
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Card key={product.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover rounded-lg"
                            onError={(e) => {
                              e.currentTarget.src = "https://via.placeholder.com/300x300?text=Coloplast+Product";
                            }}
                          />
                        </div>
                        
                        <Badge className="mb-2">{product.brand}</Badge>
                        
                        <h3 className="font-semibold mb-2 line-clamp-2 min-h-[3rem]">
                          {product.name}
                        </h3>
                        
                        <div className="flex items-center gap-2 mb-2">
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

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {product.description}
                        </p>

                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <p className="text-2xl font-bold text-primary">
                              ₹{product.price}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Pack of {product.packSize} (₹{Math.round(product.price / product.packSize)}/Unit)
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button
                            className="flex-1"
                            onClick={() => handleAddToCart(product.id, product.name)}
                          >
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Add to Cart
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => navigate(`/brand/coloplast/product/${product.id}`)}
                          >
                            View
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Information Section */}
          <div className="mt-16">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">
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