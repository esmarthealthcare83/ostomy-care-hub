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
      <main className="py-8 sm:py-12 lg:py-20">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Coming Soon Hero */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 lg:mb-8 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse">
                <Clock className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                {getPageTitle()}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
                {getPageDescription()}
              </p>
            </div>

            {/* Feature Preview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Clock className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">Coming Soon</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Expected launch in Q1 2025
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">Stay Updated</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Get notified when it's ready
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Phone className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">Need Help?</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Contact us for immediate assistance
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Section */}
            <Card className="shadow-strong bg-gradient-card border-0">
              <CardHeader className="text-center px-3 sm:px-6 py-6 sm:py-8">
                <CardTitle className="text-xl sm:text-2xl lg:text-3xl">Need Immediate Assistance?</CardTitle>
                <CardDescription className="text-xs sm:text-sm lg:text-base">
                  While we're building this feature, our support team is here to help you with any questions or needs.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-3 sm:px-6 pb-6 sm:pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <div key={method.title} className="text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-gradient-primary rounded-full flex items-center justify-center">
                          <IconComponent className="h-5 sm:h-6 w-5 sm:w-6 text-white" />
                        </div>
                        <h4 className="font-semibold mb-1 text-sm sm:text-base">{method.title}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-2">{method.description}</p>
                        <p className="text-xs sm:text-sm font-medium text-primary mb-3">{method.contact}</p>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs sm:text-sm"
                          onClick={() => window.open(method.href, method.href.startsWith('http') ? '_blank' : '_self')}
                        >
                          Contact Now
                        </Button>
                      </div>
                    );
                  })}
                </div>

                <div className="text-center">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    Want to be notified when {getPageTitle().toLowerCase()} is available?
                  </p>
                  <Button className="btn-hero w-full sm:w-auto">
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