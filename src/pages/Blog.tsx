import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote, Calendar, User } from "lucide-react";
import image1 from "@/assets/1.webp";
import image2 from "@/assets/2.jpg";
import image3 from "@/assets/3.png";
import image4 from "@/assets/4.jpg";
import image5 from "@/assets/5.webp";

const Blog = () => {
  const testimonials = [
    {
      id: 1,
      name: "Stephen Srija",
      location: "Hyderabad, Telanganna",
      rating: 5,
      title: "A Lifesaver in My Journey",
      text: "Friendly and helpful staff quick and efficient service Discount on medicines fast prescription fulfillment delivery option including same day delivery. High quality products.. Mr MAHESH is very kind and helpful thnq Mahesh for your kind heart and supporting me to get my medicine...",
      product: "Alterna® Ostomy Bags",
      date: "2025-10-15",
      image: image1
    },
    {
      id: 2,
      name: "BC Vengadachalam",
      location: "Hyderabad, Telanganna",
      rating: 5,
      title: "Reliable Care with Discreet Service",
      text: "Mr.Kumar is very kind and takes the initiative to help the end customers He supported me from Hyderabad and am based out of Chennai. I recommend eSmart Heathcare",
      product: "SenSura® Mio Baseplates",
      date: "2025-09-10",
      image: image2
    },
    {
      id: 3,
      name: "SALI GOVARADHAN",
      location: "Hyderabad,Telanganna",
      rating: 5,
      title: "Expert Guidance Made All the Difference",
      text: "I would recommend this facility to others based on my experience.Staff are attentive, respectful, and made sure all my needs were met promptly. Delivery of the product is quick",
      product: "Brava® Accessories",
      date: "2024-01-05",
      image: image3
    },
    {
      id: 4,
      name: "Nirmal Hamsala",
      location: "Vijawada, Andhra Pradesh",
      rating: 5,
      title: "Compassionate Care for Caregivers",
      text: "First time I ordered their products. Response is good . Prompt delivery. Good service.",
      product: "Complete Care Kit",
      date: "2025-08-28",
      image: image4
    },
    {
      id: 5,
      name: "Dileep Kumar",
      location: "Hyderabad, Telanganna",
      rating: 5,
      title: "Fast Delivery",
      text: "Good service, delivered orders on time, friendly staff Bikshapthi and Mahesh good",
      product: "Coloplast Products",
      date: "2025-09-20",
      image: image5
    },
    {
      id: 6,
      name: "Madhumanee Abeywardena",
      location: "Vijayawada, Andhra Pradesh",
      rating: 5,
      title: "Quality Assurance I Can Trust",
      text: "Very good company with very nice and helpful people. They arranged my order within a day and delivered it to the door step. Highly recommend. Special thanks to Mahesh",
      product: "Ostomy Care Supplies",
      date: "2025-02-15",
      image: image1
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Patient Stories & Testimonials
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Real experiences from our patients who have found comfort and confidence through our products and services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                <CardHeader className="p-3 sm:p-4 lg:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 sm:h-4 w-3 sm:w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="h-4 sm:h-5 w-4 sm:w-5 text-primary/20" />
                  </div>
                  <CardTitle className="text-sm sm:text-base lg:text-lg hover:text-primary transition-colors">
                    {testimonial.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                    <Calendar className="h-2.5 sm:h-3 w-2.5 sm:w-3 flex-shrink-0" />
                    <span className="truncate">{new Date(testimonial.date).toLocaleDateString()}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Avatar className="h-6 sm:h-8 w-6 sm:w-8 flex-shrink-0">
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xs">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground text-xs sm:text-sm truncate">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground truncate">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="pt-2 sm:pt-3 border-t border-border">
                    <div className="text-xs text-primary font-medium truncate">
                      Product: {testimonial.product}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
            <div className="bg-gradient-card p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-soft">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3 lg:mb-4">
                Share Your Story
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mb-4 sm:mb-6 max-w-md mx-auto px-2">
                Have you benefited from our products? We'd love to hear your experience and share it with others.
              </p>
              <button className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-xs sm:text-sm lg:text-base h-9 sm:h-10 lg:h-11">
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