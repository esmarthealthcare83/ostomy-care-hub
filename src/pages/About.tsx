import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle className="text-3xl">About eSmart Healthcare</CardTitle>
                <CardDescription>Service is our motto</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  eSmart Healthcare is dedicated to providing high-quality ostomy care products and 
                  exceptional customer support. We partner with trusted brands and distributors to ensure
                  reliable, timely delivery across India.
                </p>
                <p>
                  Our goal is to make healthcare products accessible and user-friendly with a seamless
                  online experience, expert guidance, and attentive after-sales support.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>What We Offer</CardTitle>
                <CardDescription>Products and services focused on your needs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Wide range of ostomy bags, baseplates, and supporting products</li>
                  <li>Trusted online partner distribution across India</li>
                  <li>Responsive support via phone, email, and WhatsApp</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;