import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, Shield, Truck, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/data/products";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";  

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/products">
            <Button className="btn-hero">Browse All Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.brand === product.brand))
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/products" className="text-muted-foreground hover:text-primary">Products</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground text-lg">Product Image</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-muted rounded-md flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Image {i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{product.brand}</Badge>
                <Badge variant="outline">{product.category}</Badge>
                {product.popular && (
                  <Badge className="bg-gradient-accent text-accent-foreground">Popular</Badge>
                )}
                {product.bestSeller && (
                  <Badge className="bg-gradient-primary text-primary-foreground">Best Seller</Badge>
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-foreground mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-lg">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-card p-6 rounded-lg">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-primary">MRP {product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>
              <div className="text-muted-foreground mb-1">
                {product.pricePerUnit} • {product.pack}
              </div>
              <div className="text-sm text-muted-foreground">Inclusive of all taxes</div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button className="btn-hero flex-1">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium">Free Delivery</div>
                <div className="text-xs text-muted-foreground">TS & AP</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium">Quality Assured</div>
                <div className="text-xs text-muted-foreground">Authentic Products</div>
              </div>
              <div className="text-center">
                <HeadphonesIcon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-sm font-medium">Expert Support</div>
                <div className="text-xs text-muted-foreground">24/7 Help</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="mb-12">
          <CardContent className="p-0">
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-none">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
              </TabsList>
              
              <TabsContent value="features" className="p-6">
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              
              <TabsContent value="specifications" className="p-6">
                <h3 className="text-lg font-semibold mb-4">Product Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-muted">
                      <span className="font-medium text-foreground">{key}:</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="p-6">
                <div className="text-center py-8">
                  <h3 className="text-lg font-semibold mb-2">Customer Reviews</h3>
                  <p className="text-muted-foreground mb-4">
                    {product.reviews} customers have reviewed this product
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-5 w-5 ${star <= Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-lg font-semibold">{product.rating} out of 5</span>
                  </div>
                  <Button variant="outline">Write a Review</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="hover-lift shadow-soft hover:shadow-medium group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {relatedProduct.brand}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">{relatedProduct.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-sm leading-tight group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="mb-3">
                      <div className="text-lg font-bold text-primary">MRP {relatedProduct.price}</div>
                      <div className="text-xs text-muted-foreground">{relatedProduct.pricePerUnit}</div>
                    </div>
                    <Link to={`/products/${relatedProduct.id}`}>
                      <Button className="w-full btn-secondary-medical text-sm">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}