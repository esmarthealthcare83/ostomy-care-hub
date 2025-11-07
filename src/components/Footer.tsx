import { Facebook, Youtube, Instagram, Mail, Phone, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

export function Footer() {
  const quickLinks = [
    { name: "How to Place Order", href: "/orders", isRoute: true },
    { name: "Login/Sign Up", href: "/login", isRoute: true },
    { name: "My Profile", href: "/profile", isRoute: true },
    { name: "My Orders", href: "/orders", isRoute: true },
    { name: "Gallery", href: "#loyalty", isRoute: false },
    { name: "Blog", href: "/blog", isRoute: true }
  ];

  const serviceLinks = [
    { name: "Track Order", href: "/orders" },
    { name: "FAQ's", href: "#faq" },
    { name: "Contact", href: "/Contact" },
    { name: "Find us", href: "/Contact" },
    { name: "About Us", href: "/about" },
    { name: "eSmart HealthCare", href: "/" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Payment, Delivery & Return policy", href: "#policy" },
    { name: "Terms and conditions", href: "#terms" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer content */}
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company info */}
          <div className="sm:col-span-2 lg:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="eSmart Healthcare" 
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-white/20 flex-shrink-0"
              />
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold truncate">eSmart Healthcare</h3>
                <p className="text-xs sm:text-sm text-primary-foreground/80">Service is our motto</p>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-primary-foreground/90 mb-6 leading-relaxed">
             your trusted partner for customer-centered healthcare. Featuring excellence in quality, service, and access, we empower you to achieve your full health potential throughout your life.
            </p>
            
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-secondary flex-shrink-0" />
                <span className="text-xs sm:text-sm break-all">1800-102-0550</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-secondary flex-shrink-0" />
                <span className="text-xs sm:text-sm break-all">esmarthealthcarehyd@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-secondary flex-shrink-0" />
                <span className="text-xs sm:text-sm">TS & AP Service</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service & Help */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Service & Help</h4>
            <ul className="space-y-2 sm:space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Stay Connected</h4>
            <p className="text-primary-foreground/80 mb-4 text-xs sm:text-sm">
              Get updates on new products and health tips
            </p>
            
            <div className="flex gap-2 mb-6 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 text-xs sm:text-sm"
              />
              <Button 
                size="sm" 
                className="btn-secondary-medical text-xs sm:text-sm h-auto py-1.5 sm:py-2 px-3"
                onClick={() => window.open("https://youtube.com/@esmarthealthcare?si=_KLZhxKhedbzO7xz", "_blank")}
              >
                Subscribe
              </Button>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <a href="https://www.facebook.com/share/1Cnoa9dFUR/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors flex-shrink-0">
                <Facebook className="h-4 sm:h-5 w-4 sm:w-5" />
              </a>
              <a href="https://youtube.com/@esmarthealthcare?si=_KLZhxKhedbzO7xz" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors flex-shrink-0">
                <Youtube className="h-4 sm:h-5 w-4 sm:w-5" />
              </a>
              <a href="https://www.instagram.com/esmart_healthcare?igsh=MnJwbG45bTNsc2V2" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors flex-shrink-0">
                <Instagram className="h-4 sm:h-5 w-4 sm:w-5" />
              </a>
              <a href="https://share.google/C09oy4Gdd6NwbYcNh" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors flex-shrink-0" title="eSmart Healthcare">
                <Globe className="h-4 sm:h-5 w-4 sm:w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Legal footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6">
            <div className="text-center lg:text-left">
              <p className="text-xs text-primary-foreground/70 mb-2 leading-relaxed">
                ALWAYS READ THE LABEL AND FOLLOW THE DIRECTIONS FOR USE. PRIOR TO USE, BE SURE TO READ THE INSTRUCTIONS FOR USE FOR INFORMATION REGARDING INTENDED USE, CONTRAINDICATIONS, WARNINGS, PRECAUTIONS, AND INSTRUCTIONS.
              </p>
              <p className="text-xs text-primary-foreground/70">
               eSmart Healthcare              </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-3 sm:gap-4 w-full lg:w-auto">
              {legalLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-xs text-primary-foreground/70 hover:text-secondary transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
            <p className="text-xs text-primary-foreground/70">
              © 2025 eSmart Healthcare. All rights reserved. | Made with ❤️ for better healthcare
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}