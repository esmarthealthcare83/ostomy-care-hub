import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields are filled
    if (!formData.firstName || !formData.lastName || !formData.email || 
        !formData.phone || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your message!", {
          description: "We'll get back to you within 24 hours.",
          duration: 5000,
        });
        
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        toast.error("Failed to send message", {
          description: data.error || "Please try again or contact us directly.",
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Connection error", {
        description: "Please check your internet connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get detailed assistance via email",
      contact: "esmarthealthcarehyd@gmail.com",
      action: "Send Email",
      color: "primary",
      href: "mailto:esmarthealthcarehyd@gmail.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our experts",
      contact: "1800-102-0550 / 0120-407-1300",
      action: "Call Now",
      color: "secondary",
      href: "tel:9088869996"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Us",
      description: "Quick support via WhatsApp",
      contact: "+91 9088869996",
      action: "Chat Now",
      color: "accent",
      href: "https://wa.me/919088869996"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="contact">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">We're Here to Help You</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            If you have a request or complaint about our products, tell us and we'll do everything we can to help
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact methods */}
          <div>
            <div className="grid gap-6 mb-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card
                    key={method.title}
                    className="hover-lift shadow-soft hover:shadow-medium animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-${method.color} flex items-center justify-center`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{method.title}</CardTitle>
                        <CardDescription>{method.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-foreground">{method.contact}</div>
                        <Button
                          size="sm"
                          className={`btn-${method.color === "primary" ? "hero" : method.color === "secondary" ? "secondary-medical" : "accent-medical"}`}
                          onClick={() => {
                            if (method.href.startsWith("http")) {
                              window.open(method.href, "_blank", "noopener,noreferrer");
                            } else {
                              window.location.href = method.href;
                            }
                          }}
                        >
                          {method.action}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Support hours */}
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Support Hours</CardTitle>
                    <CardDescription>When our team is available</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Saturday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">WhatsApp Support:</span>
                    <span className="font-medium">24/7 Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact form */}
          <div>
            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name *</label>
                      <Input 
                        name="firstName"
                        placeholder="Enter your first name" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name *</label>
                      <Input 
                        name="lastName"
                        placeholder="Enter your last name" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address *</label>
                    <Input 
                      name="email"
                      type="email" 
                      placeholder="Enter your email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                    <Input 
                      name="phone"
                      type="tel" 
                      placeholder="Enter your phone number" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject *</label>
                    <Input 
                      name="subject"
                      placeholder="What is this regarding?" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Message *</label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your request or concern..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full btn-hero"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Mail className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location Map */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Find Us</h3>
            <p className="text-muted-foreground">Serving customers across Telangana & Andhra Pradesh with reliable medical supply distribution</p>
          </div>

          <Card className="shadow-strong overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.721!2d78.4867!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c7450c5b9f%3A0x1234567890abcdef!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="eSmart Healthcare Service Area"
                  className="rounded-lg"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Card className="inline-block shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-medium">TS & AP Service Coverage</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  We provide doorstep delivery across India with dedicated support for Telangana & Andhra Pradesh regions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
