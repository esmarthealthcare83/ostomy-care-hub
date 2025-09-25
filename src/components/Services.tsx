import { Clock, Shield, HeartHandshake, Phone, Truck, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const services = [
    {
      icon: Truck,
      title: "Free Doorstep Delivery",
      description: "Pan-India delivery for all prepaid orders with reliable tracking",
      color: "primary"
    },
    {
      icon: Shield,
      title: "100% Authentic Products",
      description: "Direct from manufacturers with quality assurance guarantee",
      color: "secondary"
    },
    {
      icon: Phone,
      title: "Expert Support",
      description: "Monday-Friday 9am-6pm professional assistance",
      color: "accent"
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Same day dispatch for orders placed before 2 PM",
      color: "primary"
    },
    {
      icon: HeartHandshake,
      title: "Personalized Care",
      description: "Tailored solutions for your specific medical needs",
      color: "secondary"
    },
    {
      icon: Star,
      title: "Loyalty Rewards",
      description: "Earn points on every purchase and get exclusive benefits",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose eSmart Healthcare?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Committed to providing exceptional healthcare services with trust and reliability
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.title} 
                    className="hover-lift group border-0 shadow-soft hover:shadow-glow animate-slide-up bg-gradient-card"
                    style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center animate-fade-in">
            <div className="text-4xl font-bold text-primary mb-2">10k+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center animate-fade-in" style={{animationDelay: "0.1s"}}>
            <div className="text-4xl font-bold text-secondary mb-2">5k+</div>
            <div className="text-muted-foreground">Products Delivered</div>
          </div>
          <div className="text-center animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <div className="text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div className="text-center animate-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}