import { Shield, Truck, HeadphonesIcon, Award, Clock, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "100% Authentic Products",
      description: "All our products are genuine and sourced directly from manufacturers with proper certifications.",
      color: "primary"
    },
    {
      icon: Truck,
      title: "Free TS & AP Delivery",
      description: "Get your medical supplies delivered to your doorstep anywhere in India with no extra charges.",
      color: "secondary"
    },
    {
      icon: HeadphonesIcon,
      title: "Expert Medical Support",
      description: "Our trained healthcare professionals are available 24/7 to answer your questions and provide guidance.",
      color: "accent"
    },
    {
      icon: Award,
      title: "Trusted by Thousands",
      description: "Over 10,000+ satisfied customers trust us for their ostomy care needs across India.",
      color: "primary"
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Orders are processed within 24 hours and shipped the same day for faster delivery.",
      color: "secondary"
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We understand your needs and provide discreet, empathetic service with complete privacy.",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose eSmart Healthcare?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to providing the best ostomy care experience with quality products, 
            expert support, and compassionate service that puts your health and comfort first.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={feature.title} 
                    className="hover-lift cursor-pointer group border-0 shadow-soft bg-gradient-card hover:shadow-medium animate-slide-up text-center"
                    style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="mt-20 py-12 bg-gradient-medical rounded-2xl text-white text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="animate-fade-in">
              <div className="text-4xl lg:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-white/90">Happy Customers</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: "0.1s"}}>
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-white/90">Products Available</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="text-4xl lg:text-5xl font-bold mb-2">24/7</div>
              <div className="text-white/90">Expert Support</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: "0.3s"}}>
              <div className="text-4xl lg:text-5xl font-bold mb-2">100%</div>
              <div className="text-white/90">Authentic Products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}