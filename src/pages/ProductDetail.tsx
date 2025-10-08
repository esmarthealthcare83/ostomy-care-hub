// import { useParams, Link, useNavigate } from "react-router-dom";
// import { ArrowLeft, Star, Heart, Share2, Shield, Truck, HeadphonesIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { UserDetailsForm } from "@/components/UserDetailsForm";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { products } from "@/data/products";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";

// export default function ProductDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
  
//   // Find the product by ID
//   const product = products.find((p) => p.id === id);
  
//   // If product not found, show error
//   if (!product) {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <Header />
//         <div className="container mx-auto px-4 py-8 flex-1 flex items-center justify-center">
//           <div className="text-center">
//             <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
//             <Button onClick={() => navigate('/products')}>
//               Back to Products
//             </Button>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }
  
//   // Find related products (excluding current product)
//   const relatedProducts = products
//     .filter(p => p.id !== id && p.category === product.category)
//     .slice(0, 4);

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
      
//       {/* Breadcrumb */}
//       <div className="border-b bg-muted/40">
//         <div className="container mx-auto px-4 py-3">
//           <div className="flex items-center gap-2 text-sm">
//             <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
//             <span className="text-muted-foreground">/</span>
//             <Link to="/products" className="text-muted-foreground hover:text-primary">Products</Link>
//             <span className="text-muted-foreground">/</span>
//             <span className="text-foreground">{product.name}</span>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         {/* Back Button */}
//         <Button 
//           variant="outline" 
//           onClick={() => navigate(-1)}
//           className="mb-6 hover:bg-muted"
//         >
//           <ArrowLeft className="h-4 w-4 mr-2" />
//           Back to Products
//         </Button>

//         <div className="grid lg:grid-cols-2 gap-12 mb-12">
//           {/* Product Image */}
//           <div className="space-y-4">
//             <div className="bg-white rounded-lg border overflow-hidden">
//               <img 
//                 src={product.images[0] || ''} 
//                 alt={product.name} 
//                 className="w-full h-auto object-cover aspect-square"
//               />
//             </div>
//           </div>

//           {/* Product Info */}
//           <div className="space-y-6">
//             <div>
//               <h1 className="text-3xl font-bold text-foreground mb-2">[{product.productCode}] {product.name}</h1>
//               <div className="flex items-center gap-2 mb-4">
//                 <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded">
//                   <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                   <span className="text-sm font-medium">{product.rating}</span>
//                 </div>
//                 <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
//               </div>
//               <p className="text-muted-foreground">{product.description}</p>
//             </div>

//             {/* Price */}
//             <div className="space-y-1">
//               <div className="flex items-baseline gap-3">
//                 <span className="text-3xl font-bold text-primary">{product.price}</span>
//                 {product.originalPrice && (
//                   <span className="text-lg text-muted-foreground line-through">
//                     {product.originalPrice}
//                   </span>
//                 )}
//               </div>
//               <div className="text-muted-foreground mb-1">
//                 {product.pricePerUnit} • {product.pack}
//               </div>
//               <div className="text-sm text-muted-foreground">Inclusive of all taxes</div>
//             </div>

//             {/* Actions */}
//             <div className="flex gap-4">
//               <UserDetailsForm product={{
//                 id: product.id,
//                 name: product.name,
//                 price: product.price,
//                 pack: product.pack
//               }} />
//               <Button variant="outline" size="icon">
//                 <Heart className="h-5 w-5" />
//               </Button>
//               <Button variant="outline" size="icon">
//                 <Share2 className="h-5 w-5" />
//               </Button>
//             </div>

//             {/* Trust Indicators */}
//             <div className="grid grid-cols-3 gap-4 pt-6 border-t">
//               <div className="text-center">
//                 <Truck className="h-8 w-8 mx-auto mb-2 text-primary" />
//                 <div className="text-sm font-medium">Free Delivery</div>
//                 <div className="text-xs text-muted-foreground">TS & AP</div>
//               </div>
//               <div className="text-center">
//                 <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
//                 <div className="text-sm font-medium">Quality Assured</div>
//                 <div className="text-xs text-muted-foreground">Authentic Products</div>
//               </div>
//               <div className="text-center">
//                 <HeadphonesIcon className="h-8 w-8 mx-auto mb-2 text-primary" />
//                 <div className="text-sm font-medium">Expert Support</div>
//                 <div className="text-xs text-muted-foreground">24/7 Help</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Product Details Tabs */}
//         <Card className="mb-12">
//           <CardContent className="p-0">
//             <Tabs defaultValue="features" className="w-full">
//               <TabsList className="grid w-full grid-cols-3 rounded-none">
//                 <TabsTrigger value="features">Features</TabsTrigger>
//                 <TabsTrigger value="specifications">Specifications</TabsTrigger>
//                 <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
//               </TabsList>
              
//               <TabsContent value="features" className="p-6">
//                 <h3 className="text-lg font-semibold mb-4">Key Features</h3>
//                 <ul className="space-y-3">
//                   {product.features.map((feature, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
//                       <span className="text-muted-foreground">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </TabsContent>
              
//               <TabsContent value="specifications" className="p-6">
//                 <h3 className="text-lg font-semibold mb-4">Product Specifications</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {Object.entries(product.specifications).map(([key, value]) => (
//                     <div key={key} className="flex justify-between py-2 border-b border-muted">
//                       <span className="font-medium text-foreground">{key}:</span>
//                       <span className="text-muted-foreground">{value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </TabsContent>
              
//               <TabsContent value="reviews" className="p-6">
//                 <div className="text-center py-8">
//                   <h3 className="text-lg font-semibold mb-2">Customer Reviews</h3>
//                   <p className="text-muted-foreground mb-4">
//                     {product.reviews} customers have reviewed this product
//                   </p>
//                   <div className="flex items-center justify-center gap-2 mb-6">
//                     <div className="flex items-center gap-1">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <Star 
//                           key={star} 
//                           className={`h-5 w-5 ${star <= Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
//                         />
//                       ))}
//                     </div>
//                     <span className="text-lg font-semibold">{product.rating} out of 5</span>
//                   </div>
//                   <Button variant="outline">Write a Review</Button>
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </CardContent>
//         </Card>

//         {/* Related Products */}
//         {relatedProducts.length > 0 && (
//           <div>
//             <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {relatedProducts.map((relatedProduct) => (
//                 <Card key={relatedProduct.id} className="hover-lift shadow-soft hover:shadow-medium group">
//                   <CardHeader className="pb-3">
//                     <div className="flex items-center justify-between mb-2">
//                       <Badge variant="secondary" className="text-xs">
//                         {relatedProduct.brand}
//                       </Badge>
//                       <div className="flex items-center gap-1">
//                         <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
//                         <span className="text-xs">{relatedProduct.rating}</span>
//                       </div>
//                     </div>
//                     <CardTitle className="text-sm leading-tight group-hover:text-primary transition-colors">
//                       {relatedProduct.name}
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="pt-0">
//                     <div className="mb-3">
//                       <div className="text-lg font-bold text-primary">MRP {relatedProduct.price}</div>
//                       <div className="text-xs text-muted-foreground">{relatedProduct.pricePerUnit}</div>
//                     </div>
//                     <Link to={`/products/${relatedProduct.id}`}>
//                       <Button className="w-full btn-secondary-medical text-sm">
//                         View Details
//                       </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// }

import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Heart, Share2, Shield, Truck, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserDetailsForm } from "@/components/UserDetailsForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/data/products";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // Find the product by ID or productCode
  const product = products.find((p) => p.id === id || p.productCode === id);
  
  // If product not found, show error
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-8 flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Button onClick={() => navigate('/products')}>
              Back to Products
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Find related products (excluding current product)
  const relatedProducts = products
    .filter(p => p.id !== product.id && p.productCode !== product.productCode && p.category === product.category)
    .slice(0, 4);

  // Handle mouse move for zoom effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Breadcrumb */}
      <div className="border-b bg-muted/40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/products" className="text-muted-foreground hover:text-primary">Products</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">[{product.productCode}] {product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images with Thumbnails */}
          <div className="space-y-4">
            {/* Main Image */}
            <div 
              className="bg-white rounded-lg border overflow-hidden relative cursor-zoom-in"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img 
                src={product.images[selectedImageIndex] || product.images[0] || ''} 
                alt={`${product.name} - Image ${selectedImageIndex + 1}`} 
                className="w-full h-auto object-cover aspect-square transition-transform duration-200"
                style={{
                  transform: isZoomed ? 'scale(2)' : 'scale(1)',
                  transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                }}
              />
              {isZoomed && (
                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  Hover to zoom
                </div>
              )}
            </div>
            
            {/* Thumbnail Grid */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative bg-white rounded-lg border-2 overflow-hidden transition-all hover:border-primary ${
                      selectedImageIndex === index ? 'border-primary ring-2 ring-primary/20' : 'border-gray-200'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover aspect-square"
                    />
                    {selectedImageIndex === index && (
                      <div className="absolute inset-0 bg-primary/10"></div>
                    )}
                  </button>
                ))}
              </div>
            )}
            
            {/* Image Counter */}
            {product.images.length > 1 && (
              <div className="text-center text-sm text-muted-foreground">
                Image {selectedImageIndex + 1} of {product.images.length}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {product.productCode ? `[${product.productCode}] ` : ''}{product.name}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
              </div>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Price */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-primary">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>
              <div className="text-muted-foreground mb-1">
                Special Price: {product.price} • {product.pack}
                {product.originalPrice && (
                  <span className="text-green-600 font-medium ml-2">
                    (Save ₹{parseInt(product.originalPrice.replace(/[^\d]/g, '')) - parseInt(product.price.replace(/[^\d]/g, ''))})
                  </span>
                )}
              </div>
              <div className="text-sm text-muted-foreground">Inclusive of all taxes</div>
              {product.discountType && (
                <div className="text-sm text-green-600 font-medium">{product.discountType}</div>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <UserDetailsForm product={{
                id: product.id,
                productCode: product.productCode,
                name: product.name,
                price: product.price,
                pack: product.pack
              }} />
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
            {product.discountType && (
              <div className="text-center text-sm text-green-600 font-medium bg-green-50 p-2 rounded">
                🎉 {product.discountType} - Limited Time Offer!
              </div>
            )}

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
                    <Link to={`/products/${relatedProduct.productCode}`}>
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