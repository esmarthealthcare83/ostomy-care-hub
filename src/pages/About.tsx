import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, Award, TrendingUp, Heart, Target, Shield, Star, CheckCircle, Phone, AlertCircle } from "lucide-react";
import AneelaImg from "/src/assets/aneela.jpeg";
import MaheshImg from "/src/assets/mahesh.jpeg";
import PruthvirajImg from "/src/assets/pruthvi.jpeg";
import BikshapathiImg from "/src/assets/bikshapathi.jpeg";

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
      <main className="py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-3 sm:px-4 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                Welcome to eSmart Healthcare
              </h1>
              <p className="text-sm sm:text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
                Your trusted partner for customer-centered healthcare. Featuring excellence in quality, service, and access, we empower you to achieve your full health potential throughout your life.
              </p>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto px-3 sm:px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">About Us</h2>
              </div>

              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
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
        <section className="py-8 sm:py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-3 sm:px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0 group">
                <CardHeader>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <Target className="h-4 sm:h-5 lg:h-6 w-4 sm:w-5 lg:w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl lg:text-2xl">Our Mission</CardTitle>
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
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors">
                      <Star className="h-4 sm:h-5 lg:h-6 w-4 sm:w-5 lg:w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl lg:text-2xl">Our Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                    "A community in which all people achieve their full potential for health and well-being across the lifespan. We strive to be trusted by customers, a valued partner in the healthcare community, and creators of positive change."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-8 sm:py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-3 sm:px-4 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Our Services</h2>
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto px-2">
                Comprehensive healthcare solutions designed to meet your needs
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0">
                <CardContent className="p-3 sm:p-4 lg:p-6">
                  <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-2">Patient consultations and diagnosis</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Expert medical consultations and accurate diagnosis services.</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0">
                <CardContent className="p-3 sm:p-4 lg:p-6">
                  <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-2">Healthcare quality improvement programs</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Continuous programs to enhance healthcare quality and patient outcomes.</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0">
                <CardContent className="p-3 sm:p-4 lg:p-6">
                  <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-2">Telehealth and virtual care options</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Convenient remote healthcare services for accessible care.</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0">
                <CardContent className="p-3 sm:p-4 lg:p-6">
                  <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-2">Community health outreach</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Extending healthcare services to communities for better health awareness.</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0">
                <CardContent className="p-3 sm:p-4 lg:p-6">
                  <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-2">Specialty care and referrals</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Specialized medical care and seamless referral services.</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0">
                <CardContent className="p-3 sm:p-4 lg:p-6">
                  <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-2">Customer-centered service desk</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Dedicated support desk focused on customer needs and satisfaction.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-3 sm:px-4 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Our Achievements
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                Milestones that reflect our commitment to excellence and patient care
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card key={achievement.label}
                        className="text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 group animate-slide-up"
                        style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-3 sm:p-4 lg:p-6">
                      <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 mx-auto mb-2 sm:mb-3 lg:mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 sm:h-7 lg:h-8 w-6 sm:w-7 lg:w-8 text-white" />
                      </div>
                      <div className="text-2xl sm:text-3xl lg:text-3xl font-bold text-primary mb-1 sm:mb-2">{achievement.number}</div>
                      <div className="font-semibold text-foreground mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">{achievement.label}</div>
                      <div className="text-xs sm:text-xs lg:text-sm text-muted-foreground">{achievement.description}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Community Impact */}
        <section className="py-8 sm:py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-3 sm:px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Community Impact</h2>
              </div>
              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0">
                <CardContent className="p-3 sm:p-4 lg:p-6">
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
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
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto px-3 sm:px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Work Environment</h2>
              </div>
              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card border-0">
                <CardContent className="p-3 sm:p-4 lg:p-6">
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
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
        <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-3 sm:px-4 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Leadership
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                Visionary leaders driving innovation and excellence in healthcare
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <Card className="shadow-soft hover:shadow-glow transition-all duration-300 bg-gradient-card border-0 group animate-slide-up overflow-hidden">
                <CardHeader className="text-center pb-4">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                    <AvatarFallback className="bg-gradient-primary text-white text-2xl font-bold">
                      NK
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    G.N Kunar ( Founder & CEO )
                  </CardTitle>
                  <CardDescription className="font-medium text-primary text-lg">
                    Sales & Marketing | Business Development Professional
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed mb-4">
                    With 14+ years of expertise across sales, marketing, brand promotion, distribution, client relations, and business development, Dr. Kumar is a visionary leader with deep knowledge of healthcare networks in South India, especially Andhra Pradesh and Telangana.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Staff Members */}
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {/* Inampudi Aneela */}
                <Card className="shadow-soft hover:shadow-glow transition-all duration-300 bg-gradient-card border-0 group animate-slide-up overflow-hidden hover:-translate-y-3">
                  <div className="relative h-56 sm:h-64 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-950 dark:to-blue-900 flex items-center justify-center overflow-hidden">
                    <Avatar className="w-48 h-48 sm:w-56 sm:h-56 mx-auto border-8 border-white dark:border-slate-800 shadow-xl group-hover:scale-110 transition-transform duration-300 ring-4 ring-blue-200 dark:ring-blue-800">
                      <AvatarImage src={AneelaImg} alt="Inampudi Aneela" className="object-cover" />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-4xl font-bold">IA</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardHeader className="text-center pt-6 pb-3">
                    <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">
                      Inampudi Aneela
                    </CardTitle>
                    <CardDescription className="font-semibold text-primary text-sm sm:text-base">
                      Admin Accounting Manager
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-xs sm:text-sm pb-6">
                    <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                      <p className="font-bold text-foreground mb-2">Contact Details</p>
                      <ul className="space-y-2 text-muted-foreground">
       
                        
                        {/* <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                          <span className="font-medium">+91 9088869996</span>
                        </li> */}
                      </ul>
                    </div>
                    <Badge className="bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-600 w-full justify-center py-2 text-xs font-bold">
                      Blood Group: B+ve
                    </Badge>
                  </CardContent>
                </Card>

                {/* Kurva Mahesh Kumar */}
                <Card className="shadow-soft hover:shadow-glow transition-all duration-300 bg-gradient-card border-0 group animate-slide-up overflow-hidden hover:-translate-y-3">
                  <div className="relative h-56 sm:h-64 bg-gradient-to-br from-green-100 to-green-50 dark:from-green-950 dark:to-green-900 flex items-center justify-center overflow-hidden">
                    <Avatar className="w-48 h-48 sm:w-56 sm:h-56 mx-auto border-8 border-white dark:border-slate-800 shadow-xl group-hover:scale-110 transition-transform duration-300 ring-4 ring-green-200 dark:ring-green-800">
                      <AvatarImage src={MaheshImg} alt="Kurva Mahesh Kumar" className="object-cover" />
                      <AvatarFallback className="bg-gradient-to-br from-green-500 to-green-600 text-white text-4xl font-bold">KM</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardHeader className="text-center pt-6 pb-3">
                    <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">
                      Kurva Mahesh Kumar
                    </CardTitle>
                    <CardDescription className="font-semibold text-primary text-sm sm:text-base">
                      HR Manager
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-xs sm:text-sm pb-6">
                    <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-3 border border-green-200 dark:border-green-800">
                      <p className="font-bold text-foreground mb-2">Contact Details</p>
                      <ul className="space-y-2 text-muted-foreground">
                        
                        {/* <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                          <span className="font-medium">+91 9088869996</span>
                        </li> */}
                      </ul>
                    </div>
                    <Badge className="bg-green-500/20 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-600 w-full justify-center py-2 text-xs font-bold">
                      Blood Group: B+ve
                    </Badge>
                  </CardContent>
                </Card>

                {/* Yarlagadda Pruthviraj */}
                <Card className="shadow-soft hover:shadow-glow transition-all duration-300 bg-gradient-card border-0 group animate-slide-up overflow-hidden hover:-translate-y-3">
                  <div className="relative h-56 sm:h-64 bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-950 dark:to-purple-900 flex items-center justify-center overflow-hidden">
                    <Avatar className="w-48 h-48 sm:w-56 sm:h-56 mx-auto border-8 border-white dark:border-slate-800 shadow-xl group-hover:scale-110 transition-transform duration-300 ring-4 ring-purple-200 dark:ring-purple-800">
                      <AvatarImage src={PruthvirajImg} alt="Yarlagadda Pruthviraj" className="object-cover" />
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-purple-600 text-white text-4xl font-bold">YP</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardHeader className="text-center pt-6 pb-3">
                    <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">
                      Yarlagadda Pruthviraj
                    </CardTitle>
                    <CardDescription className="font-semibold text-primary text-sm sm:text-base">
                      HR Manager
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-xs sm:text-sm pb-6">
                    <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-3 border border-purple-200 dark:border-purple-800">
                      <p className="font-bold text-foreground mb-2">Contact Details</p>
                      <ul className="space-y-2 text-muted-foreground">
                        
                        {/* <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                          <span className="font-medium">+91 9088869996</span>
                        </li> */}
                      </ul>
                    </div>
                    <Badge className="bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-600 w-full justify-center py-2 text-xs font-bold">
                      Blood Group: A+ve
                    </Badge>
                  </CardContent>
                </Card>

                {/* Gangaram Bikshapathi */}
                <Card className="shadow-soft hover:shadow-glow transition-all duration-300 bg-gradient-card border-0 group animate-slide-up overflow-hidden hover:-translate-y-3">
                  <div className="relative h-56 sm:h-64 bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-950 dark:to-orange-900 flex items-center justify-center overflow-hidden">
                    <Avatar className="w-48 h-48 sm:w-56 sm:h-56 mx-auto border-8 border-white dark:border-slate-800 shadow-xl group-hover:scale-110 transition-transform duration-300 ring-4 ring-orange-200 dark:ring-orange-800">
                      <AvatarImage src={BikshapathiImg} alt="Gangaram Bikshapathi" className="object-cover" />
                      <AvatarFallback className="bg-gradient-to-br from-orange-500 to-orange-600 text-white text-4xl font-bold">GB</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardHeader className="text-center pt-6 pb-3">
                    <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">
                      Gangaram Bikshapathi
                    </CardTitle>
                    <CardDescription className="font-semibold text-primary text-sm sm:text-base">
                      Admin Accounting Manager
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-xs sm:text-sm pb-6">
                    <div className="bg-orange-50 dark:bg-orange-950/30 rounded-lg p-3 border border-orange-200 dark:border-orange-800">
                      <p className="font-bold text-foreground mb-2">Contact Details</p>
                      <ul className="space-y-2 text-muted-foreground">
                        
                        {/* <li className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                          <span className="font-medium">+91 9088869996</span>
                        </li> */}
                      </ul>
                    </div>
                    <Badge className="bg-orange-500/20 text-orange-700 dark:text-orange-300 border border-orange-300 dark:border-orange-600 w-full justify-center py-2 text-xs font-bold">
                      Blood Group: O+ve
                    </Badge>
                  </CardContent>
                </Card>
              </div>
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
