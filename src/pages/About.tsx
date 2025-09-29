import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, Award, TrendingUp, Heart, Target, Shield, Star, CheckCircle } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Priya Sharma",
      role: "Founder & CEO",
      experience: "15+ years",
      specialization: "Healthcare Management",
      description: "Leading eSmart Healthcare with a vision to revolutionize ostomy care in India."
    },
    {
      name: "Rajesh Kumar",
      role: "Chief Operations Officer",
      experience: "12+ years",
      specialization: "Supply Chain & Logistics",
      description: "Ensuring seamless distribution and quality assurance across TS & AP operations."
    },
    {
      name: "Dr. Meera Patel",
      role: "Medical Director",
      experience: "18+ years",
      specialization: "Ostomy Care Specialist",
      description: "Providing expert medical guidance and product recommendations to our patients."
    },
    {
      name: "Amit Singh",
      role: "Head of Customer Care",
      experience: "10+ years",
      specialization: "Patient Support",
      description: "Dedicated to providing compassionate and professional support to our community."
    },
    {
      name: "Sneha Gupta",
      role: "Product Manager",
      experience: "8+ years",
      specialization: "Healthcare Products",
      description: "Curating the finest selection of ostomy care products from global manufacturers."
    },
    {
      name: "Vikram Rao",
      role: "Technology Lead",
      experience: "14+ years",
      specialization: "Healthcare Tech",
      description: "Building innovative solutions to enhance patient experience and operational efficiency."
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: "50,000+",
      label: "Patients Served",
      description: "Across India with exceptional care"
    },
    {
      icon: Award,
      number: "98%",
      label: "Customer Satisfaction",
      description: "Consistently exceeding expectations"
    },
    {
      icon: TrendingUp,
      number: "25+",
      label: "Brand Partnerships",
      description: "Leading global healthcare brands"
    },
    {
      icon: Heart,
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock patient care"
    }
  ];

  const projects = [
    {
      title: "TS & AP Distribution Network",
      description: "Established comprehensive distribution across 28 states and 8 union territories, ensuring doorstep delivery within 24-48 hours.",
      status: "Completed",
      impact: "99.5% delivery success rate"
    },
    {
      title: "Patient Education Initiative",
      description: "Launched comprehensive educational resources including video tutorials, guides, and virtual consultations for ostomy care.",
      status: "Ongoing",
      impact: "10,000+ patients educated"
    },
    {
      title: "Quality Assurance Program",
      description: "Implemented rigorous quality control measures and direct partnerships with manufacturers for authentic, high-grade products.",
      status: "Completed",
      impact: "100% authentic products guarantee"
    },
    {
      title: "Digital Healthcare Platform",
      description: "Developed an intuitive online platform with advanced search, expert recommendations, and seamless ordering experience.",
      status: "Completed",
      impact: "50% increase in online orders"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Welcome to eSmart Healthcare
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your trusted partner for customer-centered healthcare. Featuring excellence in quality, service, and access, we empower you to achieve your full health potential throughout your life.
              </p>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">About Us</h2>
              </div>

              <div className="space-y-8">
                <Card className="shadow-strong bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl">Who We Are</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">
                    <p>
                      eSmart Healthcare stands at the forefront of patient-first care, combining top-notch medical expertise with a responsive, compassionate approach. Our diverse team ensures every customer, regardless of background, feels valued and supported.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-strong bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl">Our Core Values</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-4">Serving Our Customers</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• The customer always comes first. We are dedicated to customer care.</li>
                      <li>• Every person is treated with respect and dignity.</li>
                      <li>• Compassionate listeners who act with empathy.</li>
                      <li>• Customer-centered service tailored to individual needs.</li>
                      <li>• Commitment to continuous medical education and innovation.</li>
                      <li>• Celebrating diversity in staff and care environments.</li>
                      <li>• Seeking feedback and direction from customers.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-strong bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl">Our Healthcare Approach</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Caring for the whole person, addressing all aspects of health.</li>
                      <li>• Actively identifying and bridging healthcare system gaps.</li>
                      <li>• Serving as a model for other community health centers.</li>
                      <li>• Team-based care — patients are partners in their health journey.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    "To provide customer-centered healthcare with excellence in quality, service, and access."
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors">
                      <Star className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl">Our Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    "A community in which all people achieve their full potential for health and well-being across the lifespan. We strive to be trusted by customers, a valued partner in the healthcare community, and creators of positive change."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive healthcare solutions designed to meet your needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Patient consultations and diagnosis</h3>
                  <p className="text-muted-foreground">Expert medical consultations and accurate diagnosis services.</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Healthcare quality improvement programs</h3>
                  <p className="text-muted-foreground">Continuous programs to enhance healthcare quality and patient outcomes.</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Telehealth and virtual care options</h3>
                  <p className="text-muted-foreground">Convenient remote healthcare services for accessible care.</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Community health outreach</h3>
                  <p className="text-muted-foreground">Extending healthcare services to communities for better health awareness.</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Specialty care and referrals</h3>
                  <p className="text-muted-foreground">Specialized medical care and seamless referral services.</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Customer-centered service desk</h3>
                  <p className="text-muted-foreground">Dedicated support desk focused on customer needs and satisfaction.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Achievements
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Milestones that reflect our commitment to excellence and patient care
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card key={achievement.label}
                        className="text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 group animate-slide-up"
                        style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                      <div className="font-semibold text-foreground mb-2">{achievement.label}</div>
                      <div className="text-sm text-muted-foreground">{achievement.description}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Community Impact */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
              </div>
              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0">
                <CardContent className="p-6">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Open access for all community members</li>
                    <li>• Staff engagement in local health initiatives</li>
                    <li>• Empowering patients to make positive changes in their communities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Work Environment */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Work Environment</h2>
              </div>
              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0">
                <CardContent className="p-6">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Pursuit of excellence and innovation</li>
                    <li>• FISH philosophy: Be there. Make their day. Choose your attitude. Have fun.</li>
                    <li>• Integrity, ethics, and responsible resource management</li>
                    <li>• Teamwork, recognition, and spirit-based leadership</li>
                    <li>• Fun and humor for a healthy, vibrant workplace</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Leadership
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Visionary leaders driving innovation and excellence in healthcare
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="shadow-soft hover:shadow-glow transition-all duration-300 bg-gradient-card border-0 group animate-slide-up overflow-hidden">
                <CardHeader className="text-center pb-4">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                    <AvatarFallback className="bg-gradient-primary text-white text-2xl font-bold">
                      NK
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    Narendra Kumar.G (M.D)
                  </CardTitle>
                  <CardDescription className="font-medium text-primary text-lg">
                    Sales & Marketing | Business Development Professional
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed mb-4">
                    With 14+ years of expertise across sales, marketing, brand promotion, distribution, client relations, and business development, Dr. Kumar is a visionary leader with deep knowledge of healthcare networks in South India, especially Andhra Pradesh and Telangana.
                  </p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Former Territory Manager at Coloplast Ind Pvt Ltd</li>
                    <li>• Event management and brand enhancement specialist</li>
                    <li>• Experience with both government and private healthcare institutions</li>
                    <li>• Detail-oriented, multi-tasking professional</li>
                    <li>• MS Office adept; digital transformation advocate</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Key Initiatives & Projects
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Innovative projects that have transformed patient care and healthcare delivery
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <Card key={project.title}
                      className="shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-card border-0 group animate-slide-up"
                      style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'} className="ml-2">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 pt-2 border-t border-border">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{project.impact}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Partnerships */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Certifications & Partnerships
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Trusted by industry leaders and certified for quality healthcare delivery
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    ISO Certified
                  </h3>
                  <p className="text-muted-foreground">
                    Quality management systems certified for healthcare standards
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Trusted Partner
                  </h3>
                  <p className="text-muted-foreground">
                    Authorized distributor for leading global healthcare brands
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Patient-Centric
                  </h3>
                  <p className="text-muted-foreground">
                    Recognized for exceptional patient care and support services
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;