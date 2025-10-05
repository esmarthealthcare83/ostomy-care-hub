import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AppointmentDialog } from "./AppointmentDialog";
import logo from "@/assets/logo.jpg";

const productDropdown = [
  { label: "Ostomy Care", children: [
    { name: "Coloplast", href: "/products/coloplast" },
    { name: "ConvaTec", href: "/products/convatec" },
    { name: "Hollister", href: "/products/hollister" },
    { name: "Bao-Health", href: "/products/bao-health" },
    { name: "Prowess", href: "/products/prowess" },
    { name: "Medifeliz", href: "/products/medifeliz" },
    { name: "Examination Gloves", href: "/products/examination-gloves" },
  ]},
  { label: "Mobility Care", children: [
    { name: "Walking Sticks", href: "/products/walking-sticks" },
    { name: "Walker", href: "/products/walker" },
    { name: "Wheelchairs", href: "/products/wheelchairs" },
    { name: "Commode", href: "/products/commode" }
  ]},
  { label: "Patient Care", children: [
    { name: "AirBeds", href: "/products/airbeds" },
    { name: "Injection | Tube | Needles", href: "/products/injection-tube-needles" },
    { name: "Cleaning", href: "/products/cleaning" },
    { name: "Health Care Device", href: "/products/health-care-devices" },
    { name: "Acupressure", href: "/products/acupressure" },
    { name: "Dressing", href: "/products/dressing" },
    { name: "Adult Diapers", href: "/products/adult-diapers" },
    { name: "Shower Chair", href: "/products/shower-chair" },
    { name: "Ointments", href: "/products/ointments" },
    { name: "Underpads", href: "/products/underpads" },
    { name: "Dental Care", href: "/products/dental-care" },
    { name: "Hearing Battery", href: "/products/hearing-battery" }
  ]},
  { label: "Support", children: [
    { name: "Knee & Calf Support", href: "/products/knee-calf-support" },
    { name: "Leg Support", href: "/products/leg-support" },
    { name: "Cervical Collar (Neck)", href: "/products/cervical-collar-neck" },
    { name: "Finger Support", href: "/products/finger" },
    { name: "Hand Support", href: "/products/hand-support" },
    { name: "Back Support", href: "/products/back" },
    { name: "Elbow Support", href: "/products/elbow-support" },
    { name: "Foot Support", href: "/products/foot-support" }
  ]},
  { label: "Brands", children: [
    { name: "Karma", href: "/products/karma" },
    { name: "Coloplast", href: "/products/coloplast" },
    { name: "Romsons", href: "/products/romson" },
    { name: "Hicks", href: "/products/hicks" },
    { name: "B-Fit", href: "/products/b-fit" },
    { name: "ConvaTec", href: "/products/convatec" },
    { name: "Dr.Dentaids", href: "/products/dr-dentaids" },
    { name: "Dr.Trust", href: "/products/dr-trust" },
    { name: "Vissco", href: "/products/vissco" },
    { name: "Hollister", href: "/products/hollister" },
    { name: "One Touch", href: "/products/one-touch" },
    { name: "Beurer", href: "/products/beurer" },
    { name: "Easy Care", href: "/products/easy-care" },
    { name: "Stim", href: "/products/stim" }
  ]}
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [desktopSubOpen, setDesktopSubOpen] = useState(null); // index of open submenu or null
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(null); // index of open submenu or null
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Top bar with delivery info */}
      <div className="bg-gradient-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span>📦 Free Doorstep Delivery TS & AP for All Prepaid Orders</span>
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
            <img src={logo} alt="eSmart Healthcare" className="h-12 w-12 rounded-full border-2 border-primary/20" />
            <div>
              <h1 className="text-xl font-bold text-primary">eSmart Healthcare</h1>
              <p className="text-sm text-muted-foreground">Service is our motto</p>
            </div>
          </Link>

          {/* Search bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search with Product Name e.g. Ostomy Bags..." className="pl-10 pr-4 py-2 rounded-full border-2 border-primary/20 focus:border-primary" />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center justify-center mt-1 gap-8">
            {navItems.map((item) => {
              if (item.name === "Products") {
                return (
                  <div key={item.name} className="relative">
                    <button
                      className={`transition-colors duration-200 font-medium flex items-center gap-1 ${location.pathname.startsWith("/products") ? "text-primary" : "text-foreground hover:text-primary"}`}
                      onClick={() => setDesktopSubOpen(desktopSubOpen !== null ? null : 0)}
                      aria-haspopup="true"
                      aria-expanded={desktopSubOpen !== null}
                    >
                      Products <ChevronDown className="h-4 w-4" />
                    </button>
                    {desktopSubOpen !== null && (
                      <div className="absolute left-0 z-50 mt-2 w-[340px] bg-white shadow-lg rounded-lg border border-primary divide-y divide-primary/10 animate-fade-in">
                        {productDropdown.map((cat, idx) => (
                          <div key={cat.label}>
                            <button
                              className="w-full text-left px-4 py-2 font-semibold text-primary/90 bg-primary/5 hover:bg-primary/10 rounded transition"
                              onClick={() => setDesktopSubOpen(desktopSubOpen === idx ? null : idx)}
                              aria-expanded={desktopSubOpen === idx}
                              aria-haspopup="true"
                            >
                              {cat.label} <ChevronDown className={`h-4 w-4 inline ${desktopSubOpen === idx ? "rotate-180" : ""}`} />
                            </button>
                            {desktopSubOpen === idx && (
                              <div className="flex flex-col px-4 py-1 gap-2">
                                {cat.children.map((sub) => (
                                  <Link key={sub.name} to={sub.href} className="w-full px-2 py-1 text-sm text-foreground hover:text-primary hover:bg-primary/10 rounded">
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              const isActive = item.href === "/" ? location.pathname === "/" : location.pathname.startsWith(item.href.split("?")[0]);
              return (
                <Link key={item.name} to={item.href}
                  className={`transition-colors duration-200 font-medium relative
                    ${isActive ? "text-primary" : "text-foreground hover:text-primary"}
                    after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left
                    ${isActive ? "after:scale-x-100" : ""}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">{/* <Heart className="h-4 w-4" /> */}</Button>
            <AppointmentDialog>
              <Button className="btn-hero hidden md:inline-flex">Book Appointment</Button>
            </AppointmentDialog>
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

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-10 pr-4 py-2 rounded-full" />
            </div>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                if (item.name === "Products") {
                  return (
                    <div key={item.name}>
                      <button
                        onClick={() => setMobileProductOpen((o) => !o)}
                        className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-left text-foreground hover:text-primary hover:bg-muted"
                        aria-haspopup="true"
                        aria-expanded={mobileProductOpen}
                      >
                        Products <ChevronDown className={`h-4 w-4 transform ${mobileProductOpen ? "rotate-180" : ""}`} />
                      </button>
                      {mobileProductOpen && (
                        <div className="mt-2 ml-2 bg-white border rounded shadow-sm">
                          {productDropdown.map((cat, idx) => (
                            <div key={cat.label}>
                              <button
                                className="w-full text-left px-4 py-2 font-semibold text-primary/90 border-b bg-primary/5 hover:bg-primary/10 rounded"
                                onClick={() => setMobileSubOpen(mobileSubOpen === idx ? null : idx)}
                                aria-expanded={mobileSubOpen === idx}
                                aria-haspopup="true"
                              >
                                {cat.label} <ChevronDown className={`h-4 w-4 inline ${mobileSubOpen === idx ? "rotate-180" : ""}`} />
                              </button>
                              {mobileSubOpen === idx && (
                                <div className="flex flex-col">
                                  {cat.children.map((sub) => (
                                    <Link key={sub.name} to={sub.href} className="px-6 py-1 text-sm text-foreground hover:text-primary hover:bg-primary/10" onClick={() => setIsMenuOpen(false)}>
                                      {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                const isActive = item.href === "/" ? location.pathname === "/" : location.pathname.startsWith(item.href.split("?")[0]);
                return (
                  <Link key={item.name} to={item.href}
                    className={`px-4 py-2 rounded-lg transition-colors duration-200
                    ${isActive ? "text-primary bg-primary/10" : "text-foreground hover:text-primary hover:bg-muted"}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <hr className="my-2" />
              <AppointmentDialog>
                <Button size="sm" className="mx-4 w-full btn-hero md:hidden py-2 px-4 text-sm" onClick={() => setIsMenuOpen(false)}>
                  Book Appointment
                </Button>
              </AppointmentDialog>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
