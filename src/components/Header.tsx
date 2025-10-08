import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AppointmentDialog } from "./AppointmentDialog";
import logo from "@/assets/logo.jpg";

const productDropdown = [
  { label: "Ostomy Care", children: [
    { 
      name: "Coloplast", 
      href: "/brand/coloplast",
      subChildren: [
        { name: "1-Piece Bags", href: "/brand/coloplast/1-piece-bags" },
        { name: "2-Piece Bags", href: "/brand/coloplast/2-piece-bags" }
      ]
    },
    // { name: "ConvaTec", href: "/brand/convatec" },
    // { name: "Hollister", href: "/brand/hollister" },
    // { name: "Bao-Health", href: "/brand/bao-health" },
    // { name: "Prowess", href: "/brand/prowess" },
    // { name: "Medifeliz", href: "/brand/medifeliz" },
    { name: "Examination Gloves", href: "/brand/examination-gloves" },
  ]},
  { label: "Mobility Care", children: [
    { name: "Walking Sticks", href: "/products/category/walking-sticks" },
    { name: "Walker", href: "/products/category/walker" },
    { name: "Wheelchairs", href: "/products/category/wheelchairs" },
    { name: "Commode", href: "/products/category/commode" }
  ]},
  { label: "Patient Care", children: [
    { name: "AirBeds", href: "/products/category/airbeds" },
    { name: "Injection | Tube | Needles", href: "/products/category/injection-tube-needles" },
    // { name: "Cleaning", href: "/products/cleaning" },
    { name: "Health Care Device", href: "/products/category/health-care-devices" },
    // { name: "Acupressure", href: "/products/acupressure" },
    // { name: "Dressing", href: "/products/dressing" },
    { name: "Adult Diapers", href: "/products/category/adult-diapers" },
    // { name: "Shower Chair", href: "/products/shower-chair" },
    // { name: "Ointments", href: "/products/ointments" },
    // { name: "Underpads", href: "/products/underpads" },
    { name: "Dental Care", href: "/products/category/dental-care" },
    // { name: "Hearing Battery", href: "/products/hearing-battery" }
  ]},
  { label: "Support", children: [
    { name: "Knee & Calf Support", href: "/products/category/knee-calf-support" },
    { name: "Leg Support", href: "/products/category/leg-support" },
    { name: "Cervical Collar (Neck)", href: "/products/cervical-collar-neck" },
    { name: "Finger Support", href: "/products/category/finger" },
    { name: "Hand Support", href: "/products/category/hand-support" },
    { name: "Back Support", href: "/products/category/back" },
    { name: "Elbow Support", href: "/products/category/elbow-support" },
    { name: "Foot Support", href: "/products/foot-support" }
  ]},
  // { label: "Brands", children: [
  //   { name: "Karma", href: "/products/karma" },
  //   { name: "Coloplast", href: "/products/coloplast" },
  //   { name: "Romsons", href: "/products/romson" },
  //   { name: "Hicks", href: "/products/hicks" },
  //   { name: "B-Fit", href: "/products/b-fit" },
  //   { name: "ConvaTec", href: "/products/convatec" },
  //   { name: "Dr.Dentaids", href: "/products/dr-dentaids" },
  //   { name: "Dr.Trust", href: "/products/dr-trust" },
  //   { name: "Vissco", href: "/products/vissco" },
  //   { name: "Hollister", href: "/products/hollister" },
  //   { name: "One Touch", href: "/products/one-touch" },
  //   { name: "Beurer", href: "/products/beurer" },
  //   { name: "Easy Care", href: "/products/easy-care" },
  //   { name: "Stim", href: "/products/stim" }
  // ]}
];

// Flatten all products for search
const allProducts = productDropdown.flatMap(cat =>
  cat.children.map(prod => ({
    name: prod.name,
    href: prod.href,
  }))
);

// Add some popular product names for search
const popularProducts = [
  { name: "Karma Aluminium 121 ALU Single Leg Stick Ryder", href: "/products/category/walking-sticks", productCode: "WS-121" },
  { name: "Aluminum Karma Walking Stick WS-121", href: "/products/category/walking-sticks", productCode: "WS-121" },
  { name: "Vissco Max Walker PC 2901", href: "/products/category/walker", productCode: "PC 2901" },
  { name: "Karma Walker WK-50", href: "/products/category/walker", productCode: "WK-50" },
  { name: "Medimove Ezee Lite Foldable Wheelchair", href: "/products/category/wheelchairs", productCode: "Ezee Lite" },
  { name: "Karma Ryder 1 Attendant Wheelchair", href: "/products/category/wheelchairs", productCode: "Ryder 1" },
  { name: "Karma Rainbow 8 Reclining Wheelchair with Commode", href: "/products/category/wheelchairs", productCode: "Rainbow 8" },
  { name: "Karma Rainbow 2C Folding Commode Chair", href: "/products/category/commode", productCode: "Rainbow 2C" },
  { name: "Vissco Comfort Chrome Folding Commode Chair", href: "/products/category/commode", productCode: "Comfort Chrome" },
  { name: "Air Mattress (Therapy For Bed Sores) Poct (Point Of Care)", href: "/products/category/airbeds", productCode: "Poct" },
  { name: "Lilly Humapen Ergo II Two-Tone Blue insulin Delivery Device (Pen)", href: "/products/category/injection-tube-needles", productCode: "Humapen Ergo II" },
  { name: "Gluco Spark Blood Glucose Monitoring System", href: "/products/category/health-care-devices", productCode: "Gluco Spark" },
  { name: "B-Fit Economy Adult Diaper Pants", href: "/products/category/adult-diapers", productCode: "Economy" },
  { name: "Stim Sentim Toothpaste for Sensitive Teeth – 100g (Pack of 3)", href: "/products/category/dental-care", productCode: "Ri-namel" },
  { name: "Tynor Knee Cap (Pair) Latex Free D-04", href: "/products/category/knee-calf-support", productCode: "D-04" },
  { name: "Vissco 3D Knee Cap with Donut Padding (PC 2705)", href: "/products/category/leg-support", productCode: "PC 2705" },
  { name: "Wrist Brace With Thumb, Grey", href: "/products/category/finger", productCode: "Wrist Brace" },
  { name: "Tynor Tennis Elbow Support (Black) E-10", href: "/products/category/hand-support", productCode: "E-10" },
  { name: "Vissco Core 0120 Taylor Brace", href: "/products/category/back", productCode: "0120" },
  { name: "Tynor Lumbo Lacepull Brace A 29", href: "/products/category/elbow-support", productCode: "A 29" },
];

const searchProducts = [...allProducts, ...popularProducts];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [desktopSubOpen, setDesktopSubOpen] = useState(null);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const [mobileSubChildOpen, setMobileSubChildOpen] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const onSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value) {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }

    const filtered = searchProducts.filter(p =>
      p.name.toLowerCase().includes(value.toLowerCase()) ||
      (p.productCode && p.productCode.toLowerCase().includes(value.toLowerCase()))
    );

    setSearchResults(filtered);
    setShowDropdown(true);
  };

  const onResultClick = (href) => {
    setSearchTerm("");
    setSearchResults([]);
    setShowDropdown(false);
    setIsMenuOpen(false);
    navigate(href);
  };

  const onSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (searchResults.length > 0) {
        navigate(searchResults[0].href);
        setSearchTerm("");
        setSearchResults([]);
        setShowDropdown(false);
        setIsMenuOpen(false);
      }
    }
  };

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
          <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              value={searchTerm}
              onChange={onSearchChange}
              onKeyDown={onSearchKeyDown}
              placeholder="Search products by name, brand..."
              className="pl-10 pr-4 py-2 rounded-full border-2 border-primary/20 focus:border-primary"
              autoComplete="off"
              onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
              onFocus={() => { if (searchResults.length) setShowDropdown(true) }}
            />
            {showDropdown && searchResults.length > 0 && (
              <div className="absolute top-full mt-1 w-full max-h-60 overflow-auto bg-white border border-primary rounded shadow-lg z-50">
                {searchResults.map(item => (
                  <button
                    key={item.href}
                    onClick={() => onResultClick(item.href)}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-primary/10"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center justify-center mt-1 gap-8">
            {navItems.map((item) => {
              if (item.name === "Products") {
                return (
                  <div
                    key={item.name}
                    className="relative"
                  >
                    <button
                      className={`transition-colors duration-200 font-medium flex items-center gap-1 ${
                        location.pathname.startsWith("/products")
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
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
                              {cat.label}{" "}
                              <ChevronDown
                                className={`h-4 w-4 inline ${
                                  desktopSubOpen === idx ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {desktopSubOpen === idx && (
                              <div className="flex flex-col px-4 py-1 gap-2">
                                {cat.children.map((sub) => (
                                  <div key={sub.name}>
                                    {sub.subChildren ? (
                                      <div className="relative group">
                                        <Link
                                          to={sub.href}
                                          className="w-full px-2 py-1 text-sm text-foreground hover:text-primary hover:bg-primary/10 rounded flex items-center justify-between"
                                        >
                                          {sub.name}
                                          <ChevronDown className="h-3 w-3 -rotate-90" />
                                        </Link>
                                        <div className="hidden group-hover:block absolute left-full top-0 ml-1 bg-white shadow-lg rounded-lg border border-primary min-w-[180px] z-50">
                                          {sub.subChildren.map((subChild) => (
                                            <Link
                                              key={subChild.name}
                                              to={subChild.href}
                                              className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-primary/10 rounded"
                                            >
                                              {subChild.name}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    ) : (
                                      <Link
                                        to={sub.href}
                                        className="w-full px-2 py-1 text-sm text-foreground hover:text-primary hover:bg-primary/10 rounded block"
                                      >
                                        {sub.name}
                                      </Link>
                                    )}
                                  </div>
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
              const isActive =
                item.href === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.href.split("?")[0]);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors duration-200 font-medium relative
                  ${
                    isActive
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }
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
            <Button variant="ghost" size="icon" className="hidden md:flex">
              {/* <Heart className="h-4 w-4" /> */}
            </Button>
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
              <Input
                type="search"
                value={searchTerm}
                onChange={onSearchChange}
                onKeyDown={onSearchKeyDown}
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 rounded-full"
                autoComplete="off"
                onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                onFocus={() => {
                  if (searchResults.length) setShowDropdown(true);
                }}
              />
              {showDropdown && searchResults.length > 0 && (
                <div className="absolute top-full mt-1 left-0 right-0 max-h-48 overflow-auto bg-white border border-primary rounded shadow-lg z-50">
                  {searchResults.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => onResultClick(item.href)}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-primary/10"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
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
                        Products{" "}
                        <ChevronDown
                          className={`h-4 w-4 transform ${
                            mobileProductOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileProductOpen && (
                        <div className="mt-2 ml-2 bg-white border rounded shadow-sm">
                          {productDropdown.map((cat, idx) => (
                            <div key={cat.label}>
                              <button
                                className="w-full text-left px-4 py-2 font-semibold text-primary/90 border-b bg-primary/5 hover:bg-primary/10 rounded"
                                onClick={() =>
                                  setMobileSubOpen(mobileSubOpen === idx ? null : idx)
                                }
                                aria-expanded={mobileSubOpen === idx}
                                aria-haspopup="true"
                              >
                                {cat.label}{" "}
                                <ChevronDown
                                  className={`h-4 w-4 inline ${
                                    mobileSubOpen === idx ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                              {mobileSubOpen === idx && (
                                <div className="flex flex-col">
                                  {cat.children.map((sub) => (
                                    <div key={sub.name}>
                                      {sub.subChildren ? (
                                        <div>
                                          <button
                                            onClick={() => setMobileSubChildOpen(mobileSubChildOpen === sub.name ? null : sub.name)}
                                            className="w-full text-left px-6 py-1 text-sm text-foreground hover:text-primary hover:bg-primary/10 flex items-center justify-between"
                                          >
                                            {sub.name}
                                            <ChevronDown
                                              className={`h-3 w-3 transform ${
                                                mobileSubChildOpen === sub.name ? "rotate-180" : ""
                                              }`}
                                            />
                                          </button>
                                          {mobileSubChildOpen === sub.name && (
                                            <div className="flex flex-col ml-4">
                                              {sub.subChildren.map((subChild) => (
                                                <Link
                                                  key={subChild.name}
                                                  to={subChild.href}
                                                  className="px-6 py-1 text-xs text-foreground hover:text-primary hover:bg-primary/10"
                                                  onClick={() => setIsMenuOpen(false)}
                                                >
                                                  {subChild.name}
                                                </Link>
                                              ))}
                                            </div>
                                          )}
                                        </div>
                                      ) : (
                                        <Link
                                          to={sub.href}
                                          className="block px-6 py-1 text-sm text-foreground hover:text-primary hover:bg-primary/10"
                                          onClick={() => setIsMenuOpen(false)}
                                        >
                                          {sub.name}
                                        </Link>
                                      )}
                                    </div>
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
                const isActive =
                  item.href === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(item.href.split("?")[0]);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
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
                <Button
                  size="sm"
                  className="mx-4 w-full btn-hero md:hidden py-2 px-4 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
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
