import { Clock, Shield, HeartHandshake, Phone, Truck, Star, Stethoscope } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const services = [
    {
      icon: Truck,
      title: "Free Doorstep Delivery",
      description: "TS & AP delivery for all prepaid orders with reliable tracking",
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
      description: "Monday-Saturday 9am-6pm professional assistance",
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
    },
    {
      icon: Stethoscope,
      title: "Diagnostic Support",
      description: "Comprehensive diagnostic services and medical consultations",
      color: "primary"
    }
  ];

  const doctors = [
    {
      name: "Dr. Rajesh Kumar",
      specialization: "Colorectal Surgery",
      experience: "15+ Years",
      image: "/src/assets/logo.png"
    },
    {
      name: "Dr. Priya Sharma",
      specialization: "Gastroenterology",
      experience: "12+ Years",
      image: "/src/assets/logo.png"
    },
    {
      name: "Dr. Vikram Patel",
      specialization: "Surgical Oncology",
      experience: "18+ Years",
      image: "/src/assets/logo.png"
    },
    {
      name: "Dr. Aneela Singh",
      specialization: "Wound Care Specialist",
      experience: "10+ Years",
      image: "/src/assets/logo.png"
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

        {/* Comprehensive Services */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Our Comprehensive Healthcare Services
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how eSmart Healthcare delivers exceptional care through specialized services designed for your health and wellness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-3 text-primary">Product Consulting</h4>
              <p className="text-muted-foreground leading-relaxed">
                Our expert team provides personalized product recommendations based on your specific medical needs. We help you choose the right ostomy care products, ensuring optimal fit, comfort, and effectiveness for your lifestyle.
              </p>
            </div>

            <div className="bg-gradient-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-3 text-secondary">Facility Solutions</h4>
              <p className="text-muted-foreground leading-relaxed">
                We offer comprehensive facility solutions for healthcare providers, including bulk supply management, inventory optimization, and customized delivery schedules to ensure seamless operations and uninterrupted patient care.
              </p>
            </div>

            <div className="bg-gradient-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-3 text-accent">Patient Support and Guidance</h4>
              <p className="text-muted-foreground leading-relaxed">
                Beyond products, we provide ongoing patient support through educational resources, virtual consultations, and personalized guidance to help you manage your condition with confidence and independence.
              </p>
            </div>

            <div className="bg-gradient-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300">
              <h4 className="text-xl font-semibold mb-3 text-primary">Custom Supply Management</h4>
              <p className="text-muted-foreground leading-relaxed">
                Tailored supply management solutions that adapt to your changing needs. From recurring deliveries to emergency supplies, we ensure you always have the products you need when you need them.
              </p>
            </div>
          </div>
        </div>

        {/* Our Medical Team */}
        <div className="mt-20">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Our Expert Medical Team
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet our experienced healthcare professionals dedicated to providing exceptional care and guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor, index) => (
              <Card key={doctor.name}
                    className="hover-lift shadow-soft hover:shadow-medium animate-slide-up bg-gradient-card border-0 overflow-hidden"
                    style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex flex-col h-full">
                  <div className="w-full h-40 bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-4 flex flex-col flex-grow">
                    <h4 className="font-bold text-lg text-foreground mb-1">{doctor.name}</h4>
                    <p className="text-primary font-semibold text-sm mb-2">{doctor.specialization}</p>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      <span className="font-medium">Experience:</span> {doctor.experience}
                    </p>
                    <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors font-semibold text-sm">
                      <a href="tel:1800-102-0550" className="flex items-center justify-center gap-2">
                        <Phone className="h-4 w-4" />
                        Contact
                      </a>
                    </button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
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