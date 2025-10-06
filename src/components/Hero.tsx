import { useState, useEffect } from "react";
import { ArrowRight, Shield, Truck, HeartHandshake, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "./AppointmentDialog";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/medical-hero.jpg";
import heroImage2 from "@/assets/medical-hero2.jpg";
import { motion } from "framer-motion";

const leftVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60, delay: 0.1 } }
};

const rightVariants = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60, delay: 0.3 } }
};

// Variants for each character in Healthcare Partner
const characterVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 60, delay: i * 0.04 }
  }),
};

// SplitText component animates each letter separately
function SplitText({ text, startAnimation }) {
  return (
    <span className="block text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate={startAnimation ? "visible" : "hidden"}
          variants={characterVariants}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const [showSplit, setShowSplit] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-white/5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content, animates in from left */}
          <motion.div
            className="text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={leftVariants}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Stethoscope className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-white">eSmart Health Care</span>
            </div>

            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              variants={leftVariants}
              initial="hidden"
              animate="visible"
              onAnimationComplete={() => setShowSplit(true)}
            >
             Welcome to 
              <SplitText text="eSmart Healthcare" startAnimation={showSplit} />
            </motion.h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
Empowering patient lives since 2013 across Hyderabad, Vijayawada, and Vizag.</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg"  onClick={() => window.location.href = "/products"} className="btn-hero text-lg px-8 py-3 hover-lift">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button onClick={() => window.location.href = "/about"}
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                Learn More
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-2 mx-auto">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <p className="text-white/80 text-sm font-medium">100% Authentic</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-2 mx-auto">
                  <Truck className="h-6 w-6 text-secondary" />
                </div>
                <p className="text-white/80 text-sm font-medium">Free Delivery</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-2 mx-auto">
                  <HeartHandshake className="h-6 w-6 text-secondary" />
                </div>
                <p className="text-white/80 text-sm font-medium">Expert Care</p>
              </div>
            </div>
          </motion.div>

          {/* Right content, animates in from right */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={rightVariants}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <Carousel
                setApi={setApi}
                className="w-full"
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  <CarouselItem>
                    <img
                      src={heroImage}
                      alt="Healthcare professionals providing quality medical care"
                      className="w-full h-[500px] object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={heroImage2}
                      alt="Patient consultation and support services"
                      className="w-full h-[500px] object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={heroImage}
                      alt="Medical supplies and healthcare products"
                      className="w-full h-[500px] object-cover"
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
              {/* Carousel indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {Array.from({ length: count }, (_, i) => (
                  <button
                    key={i}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === current - 1 ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => api?.scrollTo(i)}
                  />
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-strong animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">10k+</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Happy Customers</p>
                  <p className="text-sm text-muted-foreground">Trusted nationwide</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
