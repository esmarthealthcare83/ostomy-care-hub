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
      // Format message for WhatsApp
      const whatsappMessage = `*New Contact Form Submission*

*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}
*Message:* ${formData.message}`;

      // Encode message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // Send to WhatsApp
      const whatsappUrl = `https://wa.me/919088869996?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');

      // Show success message
      toast.success("Opening WhatsApp...", {
        description: "Your message will be sent to our team.",
        duration: 3000,
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
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Error", {
        description: "Please try again or contact us via WhatsApp directly.",
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
      contact: "support@esmarthealthcare.com",
      action: "Send Email",
      color: "primary",
      href: "mailto:support@esmarthealthcare.com"
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
                    <span className="font-medium">9:00 AM - 9:00 PM</span>
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
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-foreground mb-4">Our Locations</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Strategically located across Telangana & Andhra Pradesh to serve you better</p>
          </div>

          {/* Two Location Grid */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Telangana - Hyderabad */}
            <div className="group">
              <Card className="shadow-strong overflow-hidden relative h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Map Header Badge */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 z-20"></div>
                
                {/* Map Container */}
                <CardContent className="p-0">
                  <div className="aspect-video w-full bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9299!2d78.48395!3d17.38246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c7450c5b9f%3A0x123456789abcdef!2sHyderabad%20Telangana!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="eSmart Healthcare - Telangana, Hyderabad Location"
                    ></iframe>
                  </div>
                  
                  {/* Location Pin Label */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-4 max-w-xs z-10 border border-white/20 hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-sm">eSmart Healthcare</p>
                        <p className="text-xs font-semibold text-blue-600 mt-1">📍 Main Office</p>
                        <p className="text-xs text-muted-foreground mt-1">Hyderabad, Telangana</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats Below Map */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-3 rounded-lg border border-blue-100">
                  <p className="text-xs font-semibold text-blue-700">Service Area</p>
                  <p className="text-sm font-bold text-foreground mt-1">Telangana</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-3 rounded-lg border border-blue-100">
                  <p className="text-xs font-semibold text-blue-700">Availability</p>
                  <p className="text-sm font-bold text-foreground mt-1">9 AM - 9 PM</p>
                </div>
              </div>
            </div>

            {/* Andhra Pradesh - Vijayawada */}
            <div className="group">
              <Card className="shadow-strong overflow-hidden relative h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Map Header Badge */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 z-20"></div>
                
                {/* Map Container */}
                <CardContent className="p-0">
                  <div className="aspect-video w-full bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2156!2d82.24267!3d16.50621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f5c0123456!2sVijayawada%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="eSmart Healthcare - Andhra Pradesh, Vijayawada Location"
                    ></iframe>
                  </div>
                  
                  {/* Location Pin Label */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-4 max-w-xs z-10 border border-white/20 hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-sm">eSmart Healthcare</p>
                        <p className="text-xs font-semibold text-orange-600 mt-1">🏢 Branch Office</p>
                        <p className="text-xs text-muted-foreground mt-1">Vijayawada, Andhra Pradesh</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats Below Map */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-3 rounded-lg border border-orange-100">
                  <p className="text-xs font-semibold text-orange-700">Service Area</p>
                  <p className="text-sm font-bold text-foreground mt-1">Andhra Pradesh</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-3 rounded-lg border border-orange-100">
                  <p className="text-xs font-semibold text-orange-700">Availability</p>
                  <p className="text-sm font-bold text-foreground mt-1">9 AM - 9 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Address Details Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            {/* Telangana Address */}
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Telangana - Hyderabad</CardTitle>
                    <CardDescription>Our Main Office</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Address</p>
                  <p className="text-sm text-muted-foreground">
                    B-block, Central Court Apartment, 305 & 307, Raj Bhavan Rd, beside Yamaha Bike Showroom, near Yashoda Hospitals, Durga Nagar Colony, Somajiguda.
                    <br/> Hyderabad, Telangana 500082.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Phone</p>
                  <p className="text-sm text-muted-foreground">
                    1800-102-0550<br/>
                    0120-407-1300
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Email</p>
                  <p className="text-sm text-muted-foreground">
                   support@esmarthealthcare.com
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">
                    +91 9088869996
                  </p>
                </div>
                <Button
                  className="w-full btn-hero mt-4"
                  onClick={() => window.open("https://maps.app.goo.gl/AAj2DoAJaegJWB75A?g_st=awb", "_blank")}
                >
                  View on Maps
                </Button>
              </CardContent>
            </Card>

            {/* Andhra Pradesh Address */}
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-secondary flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Andhra Pradesh - Vijayawada</CardTitle>
                    <CardDescription>Our Branch Office</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Address</p>
                  <p className="text-sm text-muted-foreground">
                   PANTA KALUVA ROAD, Karanam Gari St, near AISHWARYA BAR & RESTUARENT, Patamata.<br/>
                     Vijayawada, Andhra Pradesh 520010
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Phone</p>
                  <p className="text-sm text-muted-foreground">
                    1800-102-0550<br/>
                    0120-407-1300
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Email</p>
                  <p className="text-sm text-muted-foreground">
                    support@esmarthealthcare.com
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">
                    +91 9088869996
                  </p>
                </div>
                <Button
                  className="w-full btn-secondary-medical mt-4"
                  onClick={() => window.open("https://maps.app.goo.gl/5qnuPDcY4bXxr3eR6?g_st=awb", "_blank")}
                >
                  View on Maps
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Service Coverage */}
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
