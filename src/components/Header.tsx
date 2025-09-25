import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X, Phone, Mail, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.jpg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    // { name: "Ostomy Bags", href: "/products?category=Ostomy Bags" },
    // { name: "Baseplates", href: "/products?category=Ostomy Baseplates" },
    // { name: "Supporting Products", href: "/products?category=Supporting Products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Top bar with delivery info */}
      <div className="bg-gradient-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span>📦 Free Doorstep Delivery Pan-India for All Prepaid Orders</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3" />
              <span>1800-102-0550</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3" />
              <span>support@esmarthealthcare.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img 
              src={logo} 
              alt="eSmart Healthcare" 
              className="h-12 w-12 rounded-full border-2 border-primary/20"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">eSmart Healthcare</h1>
              <p className="text-sm text-muted-foreground">Service is our motto</p>
            </div>
          </Link>

          {/* Search bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search with Product Name e.g. Ostomy Bags..."
                className="pl-10 pr-4 py-2 rounded-full border-2 border-primary/20 focus:border-primary"
              />
            </div>
          </div>


        {/* Navigation - Desktop */}

             <nav className="hidden md:flex items-center justify-center mt-1 gap-8">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? location.pathname === "/" : location.pathname.startsWith(item.href.split("?")[0]);
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors duration-200 font-medium relative ${
                  isActive 
                    ? "text-primary" 
                    : "text-foreground hover:text-primary"
                } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                  isActive ? "after:scale-x-100" : ""
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
          {/* Right side buttons */}

          <div className="flex items-center gap-2">

            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="hidden md:flex items-center gap-2">
              <User className="h-4 w-4" />
              {/* Login */}
            </Button>
            {/* <Button className="btn-hero">
              <ShoppingBag className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Cart</span>
              <span className="bg-white/20 text-xs px-1.5 py-0.5 rounded-full ml-2">0</span>
            </Button> */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Navigation - Desktop */}
        {/* <nav className="hidden md:flex items-center justify-center mt-4 gap-8">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? location.pathname === "/" : location.pathname.startsWith(item.href.split("?")[0]);
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors duration-200 font-medium relative ${
                  isActive 
                    ? "text-primary" 
                    : "text-foreground hover:text-primary"
                } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                  isActive ? "after:scale-x-100" : ""
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav> */}

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            {/* Mobile search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 rounded-full"
              />
            </div>
            
            {/* Mobile navigation */}
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = item.href === "/" ? location.pathname === "/" : location.pathname.startsWith(item.href.split("?")[0]);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                      isActive 
                        ? "text-primary bg-primary/10" 
                        : "text-foreground hover:text-primary hover:bg-muted"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <hr className="my-2" />
              <Button variant="outline" className="mx-4 flex items-center gap-2">
                <User className="h-4 w-4" />
                Login
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}