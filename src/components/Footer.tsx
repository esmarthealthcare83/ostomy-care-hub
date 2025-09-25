import { Facebook, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

export function Footer() {
  const quickLinks = [
    { name: "How to Place Order", href: "#order" },
    { name: "Login/Sign Up", href: "#login" },
    { name: "My Profile", href: "#profile" },
    { name: "My Orders", href: "#orders" },
    { name: "Loyalty Points Program", href: "#loyalty" },
    { name: "Blog", href: "#blog" }
  ];

  const serviceLinks = [
    { name: "Track Order", href: "#track" },
    { name: "FAQ's", href: "#faq" },
    { name: "Contact", href: "#contact" },
    { name: "Find us", href: "#location" },
    { name: "About Us", href: "#about" },
    { name: "Coloplast Care", href: "#care" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Payment, Delivery & Return policy", href: "#policy" },
    { name: "Terms and conditions", href: "#terms" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="eSmart Healthcare" 
                className="h-12 w-12 rounded-full border-2 border-white/20"
              />
              <div>
                <h3 className="text-xl font-bold">eSmart Healthcare</h3>
                <p className="text-sm text-primary-foreground/80">Service is our motto</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Your trusted partner in healthcare, providing quality medical supplies and ostomy care products 
              with professional service across India.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-sm">1800-102-0550</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-sm">coloplast.support@ndslindia.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-sm">Pan-India Service</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service & Help */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Service & Help</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Get updates on new products and health tips
            </p>
            
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 text-sm"
              />
              <Button size="sm" className="btn-secondary-medical">
                Subscribe
              </Button>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Legal footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <p className="text-xs text-primary-foreground/70 mb-2">
                ALWAYS READ THE LABEL AND FOLLOW THE DIRECTIONS FOR USE. PRIOR TO USE, BE SURE TO READ THE INSTRUCTIONS FOR USE FOR INFORMATION REGARDING INTENDED USE, CONTRAINDICATIONS, WARNINGS, PRECAUTIONS, AND INSTRUCTIONS.
              </p>
              <p className="text-xs text-primary-foreground/70">
               eSmart Healthcare              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {legalLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-xs text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-white/10">
            <p className="text-xs text-primary-foreground/70">
              © 2025 eSmart Healthcare. All rights reserved. | Made with ❤️ for better healthcare
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}