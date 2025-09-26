import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Mail, Phone, MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";

const ComingSoon = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getPageTitle = () => {
    switch (currentPath) {
      case '/login':
        return 'Login / Sign Up';
      case '/profile':
        return 'My Profile';
      case '/orders':
        return 'My Orders';
      default:
        return 'Coming Soon';
    }
  };

  const getPageDescription = () => {
    switch (currentPath) {
      case '/login':
        return 'We\'re working on a seamless login and registration experience. In the meantime, please contact us for assistance.';
      case '/profile':
        return 'Your personalized profile dashboard is coming soon! Manage your account, preferences, and healthcare information in one place.';
      case '/orders':
        return 'Order tracking and history management features are being developed. Stay tuned for a comprehensive order management system.';
      default:
        return 'This feature is currently under development. We\'re working hard to bring you the best healthcare experience.';
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our support team",
      contact: "1800-102-0550",
      href: "tel:18001020550"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your queries",
      contact: "support@esmarthealthcare.com",
      href: "mailto:support@esmarthealthcare.com"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick support via WhatsApp",
      contact: "+91 9088869996",
      href: "https://wa.me/919088869996"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Coming Soon Hero */}
            <div className="mb-12">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse">
                <Clock className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {getPageTitle()}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {getPageDescription()}
              </p>
            </div>

            {/* Feature Preview Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Coming Soon</h3>
                  <p className="text-sm text-muted-foreground">
                    Expected launch in Q1 2025
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Stay Updated</h3>
                  <p className="text-sm text-muted-foreground">
                    Get notified when it's ready
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Need Help?</h3>
                  <p className="text-sm text-muted-foreground">
                    Contact us for immediate assistance
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Section */}
            <Card className="shadow-strong bg-gradient-card border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Need Immediate Assistance?</CardTitle>
                <CardDescription>
                  While we're building this feature, our support team is here to help you with any questions or needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <div key={method.title} className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 bg-gradient-primary rounded-full flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-semibold mb-1">{method.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                        <p className="text-sm font-medium text-primary mb-3">{method.contact}</p>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(method.href, method.href.startsWith('http') ? '_blank' : '_self')}
                        >
                          Contact Now
                        </Button>
                      </div>
                    );
                  })}
                </div>

                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Want to be notified when {getPageTitle().toLowerCase()} is available?
                  </p>
                  <Button className="btn-hero">
                    Notify Me When Ready
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoon;