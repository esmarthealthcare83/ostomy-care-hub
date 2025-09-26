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
      description: "Ensuring seamless distribution and quality assurance across Pan-India operations."
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
      title: "Pan-India Distribution Network",
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
                About eSmart Healthcare
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Service is our motto. We're committed to transforming ostomy care through innovation,
                compassion, and excellence in healthcare delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-strong bg-gradient-card border-0">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-2">Our Story</CardTitle>
                  <CardDescription className="text-lg">A Journey of Compassion and Innovation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Founded in 2018, eSmart Healthcare emerged from a simple yet powerful vision: to make ostomy care
                    products accessible, affordable, and dignified for every patient across India. Our journey began
                    when our founder recognized the challenges patients faced in accessing quality healthcare products.
                  </p>
                  <p>
                    Today, we stand as India's leading online destination for ostomy care, partnering with world-renowned
                    brands and serving over 50,000 patients nationwide. Our commitment extends beyond products – we provide
                    comprehensive support, education, and care that empowers patients to live confidently.
                  </p>
                  <p>
                    With a team of healthcare professionals, logistics experts, and technology innovators, we continue
                    to push boundaries in healthcare delivery, ensuring that every patient receives the care they deserve
                    with dignity and respect.
                  </p>
                </CardContent>
              </Card>
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
                    To empower ostomy patients with access to world-class products, expert guidance, and compassionate
                    support, making quality healthcare accessible across every corner of India.
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
                    To be the most trusted healthcare partner for ostomy care in India, setting new standards in patient
                    care, innovation, and community support through technology and compassion.
                  </p>
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

        {/* Team Members */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Dedicated professionals committed to transforming healthcare through expertise and compassion
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={member.name}
                      className="shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 group animate-slide-up overflow-hidden"
                      style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="text-center pb-4">
                    <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                      <AvatarFallback className="bg-gradient-primary text-white text-xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="font-medium text-primary">
                      {member.role}
                    </CardDescription>
                    <div className="flex justify-center gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">
                        {member.experience}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {member.specialization}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Projects */}
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