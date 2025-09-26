import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote, Calendar, User } from "lucide-react";
import medicalHero from "@/assets/medical-hero.jpg";
import medicalHero2 from "@/assets/medical-hero2.jpg";
import productsShowcase from "@/assets/products-showcase.jpg";

const Blog = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Mumbai, Maharashtra",
      rating: 5,
      title: "A Lifesaver in My Journey",
      text: "eSmart Healthcare has been a lifesaver. The quality of products is excellent and the delivery is always on time. The customer support team is very understanding and helpful.",
      product: "Alterna® Ostomy Bags",
      date: "2024-01-15",
      image: medicalHero
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Delhi, NCR",
      rating: 5,
      title: "Reliable Care with Discreet Service",
      text: "I've been ordering from eSmart Healthcare for over a year now. Their products are authentic and the prices are reasonable. The discreet packaging gives me confidence.",
      product: "SenSura® Mio Baseplates",
      date: "2024-01-10",
      image: medicalHero2
    },
    {
      id: 3,
      name: "Mohammed Ali",
      location: "Bangalore, Karnataka",
      rating: 5,
      title: "Expert Guidance Made All the Difference",
      text: "The expert consultation service helped me choose the right products for my needs. The free delivery across India is a great benefit. Highly recommended!",
      product: "Brava® Accessories",
      date: "2024-01-05",
      image: productsShowcase
    },
    {
      id: 4,
      name: "Lakshmi Menon",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      title: "Compassionate Care for Caregivers",
      text: "As a caregiver, I appreciate the educational resources and patient support provided by eSmart Healthcare. They truly care about their customers' well-being.",
      product: "Complete Care Kit",
      date: "2023-12-28",
      image: medicalHero
    },
    {
      id: 5,
      name: "Amit Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      title: "24/7 Support You Can Count On",
      text: "The 24/7 support has been invaluable during urgent situations. The team is knowledgeable and always ready to help. Great service overall.",
      product: "Coloplast Products",
      date: "2023-12-20",
      image: medicalHero2
    },
    {
      id: 6,
      name: "Sunita Devi",
      location: "Kolkata, West Bengal",
      rating: 5,
      title: "Quality Assurance I Can Trust",
      text: "I'm impressed with the quality assurance and the care taken in packaging. Every order arrives in perfect condition. Thank you for the excellent service.",
      product: "Ostomy Care Supplies",
      date: "2023-12-15",
      image: productsShowcase
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Patient Stories & Testimonials
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from our patients who have found comfort and confidence through our products and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id}
                    className="hover-lift shadow-soft hover:shadow-medium animate-slide-up bg-gradient-card border-0 overflow-hidden"
                    style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="h-5 w-5 text-primary/20" />
                  </div>
                  <CardTitle className="text-lg hover:text-primary transition-colors">
                    {testimonial.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm">
                    <Calendar className="h-3 w-3" />
                    {new Date(testimonial.date).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xs">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-border">
                    <div className="text-xs text-primary font-medium">
                      Product: {testimonial.product}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-card p-8 rounded-2xl shadow-soft">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Share Your Story
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Have you benefited from our products? We'd love to hear your experience and share it with others.
              </p>
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Submit Your Testimonial
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;