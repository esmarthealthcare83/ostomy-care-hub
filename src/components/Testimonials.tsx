import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Testimonials() {
  const testimonials = [
     {
     
      name: "Stephen Srija",
      location: "Hyderabad, Telanganna",
      rating: 5,
      text: "Friendly and helpful staff quick and efficient service Discount on medicines fast prescription fulfillment delivery option including same day delivery. High quality products.. Mr MAHESH is very kind and helpful thnq Mahesh for your kind heart and supporting me to get my medicine...",
      product: "Alterna® Ostomy Bags",
    },
    {
      
      name: "BC Vengadachalam",
      location: "Hyderabad, Telanganna",
      rating: 5,
      text: "Mr.Kumar is very kind and takes the initiative to help the end customers He supported me from Hyderabad and am based out of Chennai. I recommend eSmart Heathcare",
      product: "SenSura® Mio Baseplates",

    },
    {
 
      name: "SALI GOVARADHAN",
      location: "Hyderabad,Telanganna",
      rating: 5,

      text: "I would recommend this facility to others based on my experience.Staff are attentive, respectful, and made sure all my needs were met promptly. Delivery of the product is quick",
      product: "Brava® Accessories",
    
    },
    {
     
      name: "Nirmal Hamsala",
      location: "Vijawada, Andhra Pradesh",
      rating: 5,
    
      text: "First time I ordered their products. Response is good . Prompt delivery. Good service.",
      product: "Complete Care Kit",
    
    },
    {
 
      name: "Dileep Kumar",
      location: "Hyderabad, Telanganna",
      rating: 5,
      text: "Good service, delivered orders on time, friendly staff Bikshapthi and Mahesh good",
      product: "Coloplast Products",
    },
    {

      name: "Madhumanee Abeywardena",
      location: "Vijayawada, Andhra Pradesh",
      rating: 5,
      text: "Very good company with very nice and helpful people. They arranged my order within a day and delivered it to the door step. Highly recommend. Special thanks to Mahesh",
      product: "Ostomy Care Supplies",
 
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