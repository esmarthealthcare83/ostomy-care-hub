import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Share2, ArrowLeft, Check } from "lucide-react";
import { getProductById } from "@/data/coloplastProducts";
import { toast } from "@/components/ui/sonner";

export default function ColoplastProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const product = getProductById(productId || "");

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

  const handleAddToCart = () => {
    toast.success("Added to cart!", {
      description: `${quantity} pack(s) of ${product.name} added to your cart.`,
    });
  };

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

      <div className="flex-1 bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/brand/coloplast" className="hover:text-primary">Coloplast</Link>
            <span>/</span>
            <Link to={`/brand/coloplast/${product.category}`} className="hover:text-primary">
              {product.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>

          {/* Back Button */}
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/600x600?text=Coloplast+Product";
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Product Details */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge className="mb-2">{product.brand}</Badge>
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <p className="text-muted-foreground">{product.description}</p>
                  </div>

                  {/* Product Specifications */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {product.bagSystem && (
                      <div>
                        <p className="text-sm text-muted-foreground">Bag System</p>
                        <p className="font-medium">{product.bagSystem}</p>
                      </div>
                    )}
                    {product.baseplateType && (
                      <div>
                        <p className="text-sm text-muted-foreground">Baseplate Type</p>
                        <p className="font-medium">{product.baseplateType}</p>
                      </div>
                    )}
                    {product.diameter && (
                      <div>
                        <p className="text-sm text-muted-foreground">Diameter</p>
                        <p className="font-medium">{product.diameter}</p>
                      </div>
                    )}
                    {product.surgeryType && (
                      <div>
                        <p className="text-sm text-muted-foreground">Surgery Type</p>
                        <p className="font-medium">{product.surgeryType}</p>
                      </div>
                    )}
                    {product.productType && (
                      <div>
                        <p className="text-sm text-muted-foreground">Product Type</p>
                        <p className="font-medium">{product.productType}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-muted-foreground">Pack Size</p>
                      <p className="font-medium">{product.packSize} units</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6 p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl font-bold text-primary">₹{product.price}</span>
                      {product.mrp > product.price && (
                        <span className="text-lg text-muted-foreground line-through">₹{product.mrp}</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Pack of {product.packSize} (₹{Math.round(product.price / product.packSize)}/Unit)
                    </p>
                    <p className="text-sm text-muted-foreground">Inclusive of all taxes</p>
                  </div>

                  {/* Quantity Selector */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Quantity</label>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </Button>
                      <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mb-6">
                    <Button
                      className="flex-1"
                      size="lg"
                      onClick={handleAddToCart}
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleToggleFavorite}
                    >
                      <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleShare}
                    >
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Stock Status */}
                  <div className="flex items-center gap-2 text-sm">
                    {product.inStock ? (
                      <>
                        <Check className="h-4 w-4 text-green-600" />
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
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Product Features</h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
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