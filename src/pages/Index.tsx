import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductCategories } from "@/components/ProductCategories";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { Branches } from "@/components/Branches";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductCategories />
        {/* <WhyChooseUs /> */}
        <Services />
        <Testimonials />
        <Branches />
        {/* <FAQ /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
