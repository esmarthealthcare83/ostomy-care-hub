import { useState, useMemo, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Share2, ArrowLeft, Check, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { UserDetailsForm } from "@/components/UserDetailsForm";
import { getProductById } from "@/data/coloplastProducts";
import { toast } from "@/components/ui/sonner";

export default function ColoplastProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLImageElement>(null);

  const product = getProductById(productId || "");

  // Convert image to array for consistent handling
  const images = useMemo(() => {
    if (!product) return [];
    return Array.isArray(product.image) ? product.image : [product.image];
  }, [product]);

  // Reset image index when product changes
  useEffect(() => {
    setSelectedImageIndex(0);
    setIsZoomed(false);
  }, [productId]);

  // Keyboard navigation for images
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (images.length <= 1) return;
      
      if (e.key === "ArrowLeft") {
        handlePreviousImage();
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, images.length]);

  // Handle image zoom on mouse move
  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed || !imageContainerRef.current) return;
    
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setZoomPosition({ x, y });
  };

  const handleImageMouseLeave = () => {
    setIsZoomed(false);
  };

  // Navigate images with arrow keys
  const handlePreviousImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <Card>
            <CardContent className="p-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
              <p className="text-muted-foreground mb-6">
                The product you're looking for doesn't exist.
              </p>
              <Button onClick={() => navigate("/brand/coloplast")}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Products
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? "Removed from favorites" : "Added to favorites");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 bg-muted/30 py-6 sm:py-8 lg:py-10">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-4 sm:mb-6 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground overflow-x-auto pb-2">
            <Link to="/" className="hover:text-primary whitespace-nowrap">Home</Link>
            <span className="flex-shrink-0">/</span>
            <Link to="/brand/coloplast" className="hover:text-primary whitespace-nowrap">Coloplast</Link>
            <span className="flex-shrink-0">/</span>
            <Link to={`/brand/coloplast/${product.category}`} className="hover:text-primary whitespace-nowrap">
              {product.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
            </Link>
            <span className="flex-shrink-0">/</span>
            <span className="text-foreground truncate">{product.name}</span>
          </div>

          {/* Back Button */}
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 sm:mb-6 text-xs sm:text-sm px-2 sm:px-4 h-auto py-1.5 sm:py-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-3 sm:h-4 w-3 sm:w-4 mr-1 sm:mr-2" />
            Back
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Product Image Gallery */}
            <div>
              <Card>
                <CardContent className="p-3 sm:p-4 lg:p-6">
                  {/* Main Image with Zoom */}
                  <div 
                    ref={imageContainerRef}
                    className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-3 sm:mb-4 overflow-hidden relative cursor-zoom-in"
                    onMouseMove={handleImageMouseMove}
                    onMouseEnter={() => setIsZoomed(true)}
                    onMouseLeave={handleImageMouseLeave}
                  >
                    <img
                      ref={mainImageRef}
                      src={images[selectedImageIndex]}
                      alt={`${product.name} - Image ${selectedImageIndex + 1}`}
                      className={`w-full h-full object-cover rounded-lg transition-transform duration-300 ${
                        isZoomed ? 'cursor-move' : ''
                      }`}
                      style={{
                        transform: isZoomed ? `scale(2)` : 'scale(1)',
                        transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                      }}
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/600x600?text=Coloplast+Product";
                      }}
                    />
                    
                    {/* Zoom Indicator - hidden on mobile */}
                    {!isZoomed && (
                      <div className="hidden sm:flex absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/50 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg items-center gap-1 text-xs sm:text-sm">
                        <ZoomIn className="h-3 sm:h-4 w-3 sm:w-4" />
                        <span>Hover to zoom</span>
                      </div>
                    )}

                    {/* Navigation Arrows - only show if multiple images */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={handlePreviousImage}
                          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:scale-110"
                          aria-label="Previous image"
                          title="Previous image"
                        >
                          <ChevronLeft className="h-4 sm:h-6 w-4 sm:w-6" />
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:scale-110"
                          aria-label="Next image"
                          title="Next image"
                        >
                          <ChevronRight className="h-4 sm:h-6 w-4 sm:w-6" />
                        </button>

                        {/* Image Counter */}
                        <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">
                          {selectedImageIndex + 1} / {images.length}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Gallery with Scroll Arrows */}
                  {images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2 group">
                      {images.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                            selectedImageIndex === index
                              ? "border-primary"
                              : "border-muted hover:border-primary/50"
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = "https://via.placeholder.com/100x100?text=IMG";
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Product Details */}
            <div>
              <Card>
                <CardContent className="p-3 sm:p-4 lg:p-6">
                  <div className="mb-4">
                    <Badge className="mb-2 text-xs sm:text-sm">{product.brand}</Badge>
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">{product.name}</h1>
                    <p className="text-xs sm:text-sm text-muted-foreground">{product.description}</p>
                  </div>

                  {/* Product Specifications */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                    {product.productcode && (
                      <div className="col-span-1 sm:col-span-2 p-2 sm:p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-xs sm:text-sm text-muted-foreground">Product Code</p>
                        <p className="font-bold text-base sm:text-lg text-blue-700">{product.productcode}</p>
                      </div>
                    )}
                    {product.bagSystem && (
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Bag System</p>
                        <p className="font-medium text-sm sm:text-base">{product.bagSystem}</p>
                      </div>
                    )}
                    {product.baseplateType && (
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Baseplate Type</p>
                        <p className="font-medium text-sm sm:text-base">{product.baseplateType}</p>
                      </div>
                    )}
                    {product.diameter && (
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Diameter</p>
                        <p className="font-medium text-sm sm:text-base">{product.diameter}</p>
                      </div>
                    )}
                    {product.surgeryType && (
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Surgery Type</p>
                        <p className="font-medium text-sm sm:text-base">{product.surgeryType}</p>
                      </div>
                    )}
                    {product.productType && (
                      <div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Product Type</p>
                        <p className="font-medium text-sm sm:text-base">{product.productType}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Pack Size</p>
                      <p className="font-medium text-sm sm:text-base">{product.packSize} units</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6 p-3 sm:p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">₹{product.price}</span>
                      {product.mrp > product.price && (
                        <span className="text-base sm:text-lg text-muted-foreground line-through">₹{product.mrp}</span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Pack of {product.packSize} (₹{Math.round(product.price / product.packSize)}/Unit)
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Inclusive of all taxes</p>
                  </div>

                  {/* Quantity Selector */}
                  <div className="mb-6">
                    <label className="block text-xs sm:text-sm font-medium mb-2">Quantity</label>
                    <div className="flex items-center gap-2 sm:gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 sm:h-10 sm:w-10"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </Button>
                      <span className="text-lg sm:text-xl font-semibold w-10 sm:w-12 text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 sm:h-10 sm:w-10"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-6">
                    <UserDetailsForm
                      product={{
                        id: product.id,
                        name: product.name,
                        price: `₹${product.price}`,
                        pack: `Pack of ${product.packSize} (${quantity} x ${product.packSize} = ${quantity * product.packSize} units)`,
                        productCode: product.productcode?.toString()
                      }}
                      disabled={!product.inStock}
                      className="flex-1"
                    >
                      {product.inStock ? "Buy Now" : "Out of Stock"}
                    </UserDetailsForm>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleToggleFavorite}
                      className="h-auto py-2 px-3 sm:px-4 sm:py-2 w-full sm:w-auto"
                      title="Add to favorites"
                    >
                      <Heart className={`h-4 sm:h-5 w-4 sm:w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                      <span className="sm:hidden ml-2 text-sm">Favorite</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleShare}
                      className="h-auto py-2 px-3 sm:px-4 sm:py-2 w-full sm:w-auto"
                      title="Share product"
                    >
                      <Share2 className="h-4 sm:h-5 w-4 sm:w-5" />
                      <span className="sm:hidden ml-2 text-sm">Share</span>
                    </Button>
                  </div>

                  {/* Stock Status */}
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    {product.inStock ? (
                      <>
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-green-600 font-medium">In Stock</span>
                      </>
                    ) : (
                      <span className="text-red-600 font-medium">Out of Stock</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Product Features */}
          <Card className="mb-12">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Product Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-4 sm:h-5 w-4 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
              <div className="prose max-w-none">
                <h3 className="text-lg font-semibold mb-2">About {product.brand}</h3>
                <p className="mb-4">
                  {product.brand} is a trusted brand from Coloplast, known for delivering high-quality 
                  ostomy care products that prioritize comfort, security, and skin health.
                </p>

                <h3 className="text-lg font-semibold mb-2">Why Choose This Product?</h3>
                <p className="mb-4">
                  This product is designed with the latest technology to ensure maximum comfort and 
                  security. Whether you're new to ostomy care or an experienced user, this product 
                  offers the reliability and discretion you need for everyday confidence.
                </p>

                <h3 className="text-lg font-semibold mb-2">Delivery & Returns</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Free doorstep delivery for prepaid orders in Telangana & Andhra Pradesh</li>
                  <li>Pan-India delivery available</li>
                  <li>Cash on Delivery available (T&C Apply)</li>
                  <li>Easy returns within 7 days of delivery</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
                <p>
                  Our ostomy care specialists are here to help you choose the right product. 
                  Contact us at <strong>1800-102-0550</strong> or WhatsApp us at <strong>+91 9088869996</strong>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}