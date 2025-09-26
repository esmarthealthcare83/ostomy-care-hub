import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import Blog from "./pages/Blog";
import ComingSoon from "./pages/ComingSoon";
import Preloader from "@/components/Preloader";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Global Preloader overlay */}
        <Preloader />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<ComingSoon />} />
          <Route path="/profile" element={<ComingSoon />} />
          <Route path="/orders" element={<ComingSoon />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* WhatsApp Floating Button */}
        <Button
          size="icon"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg h-14 w-14 animate-bounce"
          onClick={() => window.open('https://wa.me/919088869996?text=How%20can%20I%20help%20you%3F', '_blank')}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
