import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get detailed assistance via email",
      contact: "coloplast.support@ndslindia.com",
      action: "Send Email",
      color: "primary",
      href: "mailto:coloplast.support@ndslindia.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our experts",
      contact: "1800-102-0550 / 0120-407-1300",
      action: "Call Now",
      color: "secondary",
      href: "tel:18001020550"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Us",
      description: "Quick support via WhatsApp",
      contact: "+91 8929120550",
      action: "Chat Now",
      color: "accent",
      href: "https://wa.me/918929120550"
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
                    <span className="text-muted-foreground">Monday - Friday:</span>
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
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email Address</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number</label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="What is this regarding?" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell us about your request or concern..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full btn-hero"
                  onClick={() => {
                    window.location.href = "mailto:coloplast.support@ndslindia.com";
                  }}
                >
                  Send Message
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location info */}
        <div className="mt-16 text-center">
          <Card className="inline-block shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">eSmart Healthcare</span>
              </div>
              <p className="text-muted-foreground text-sm">Serving customers across TS & AP with reliable medical supply distribution</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
