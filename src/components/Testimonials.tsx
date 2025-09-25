import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "eSmart Healthcare has been a lifesaver. The quality of products is excellent and the delivery is always on time. The customer support team is very understanding and helpful.",
      product: "Alterna® Ostomy Bags"
    },
    {
      name: "Priya Sharma",
      location: "Delhi, NCR",
      rating: 5,
      text: "I've been ordering from eSmart Healthcare for over a year now. Their products are authentic and the prices are reasonable. The discreet packaging gives me confidence.",
      product: "SenSura® Mio Baseplates"
    },
    {
      name: "Mohammed Ali",
      location: "Bangalore, Karnataka",
      rating: 5,
      text: "The expert consultation service helped me choose the right products for my needs. The free delivery across India is a great benefit. Highly recommended!",
      product: "Brava® Accessories"
    },
    {
      name: "Lakshmi Menon",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      text: "As a caregiver, I appreciate the educational resources and patient support provided by eSmart Healthcare. They truly care about their customers' well-being.",
      product: "Complete Care Kit"
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: "The 24/7 support has been invaluable during urgent situations. The team is knowledgeable and always ready to help. Great service overall.",
      product: "Coloplast Products"
    },
    {
      name: "Sunita Devi",
      location: "Kolkata, West Bengal",
      rating: 5,
      text: "I'm impressed with the quality assurance and the care taken in packaging. Every order arrives in perfect condition. Thank you for the excellent service.",
      product: "Ostomy Care Supplies"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from thousands of satisfied customers across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} 
                  className="hover-lift shadow-soft hover:shadow-medium animate-slide-up bg-gradient-card border-0"
                  style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-primary/20" />
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <div className="text-xs text-primary font-medium mt-1">
                      Purchased: {testimonial.product}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-gradient-card p-6 rounded-2xl shadow-soft">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-foreground">4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-foreground">10,000+ Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-foreground">98% Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}