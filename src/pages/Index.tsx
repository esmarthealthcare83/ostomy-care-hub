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
import { motion } from "framer-motion";

// Animation variants for modern page effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full"
      >
        <Hero />
        <motion.div variants={sectionVariants} className="w-full">
          <ProductCategories />
        </motion.div>
        {/* <motion.div variants={sectionVariants}>
          <WhyChooseUs />
        </motion.div> */}
        <motion.div variants={sectionVariants} className="w-full">
          <Services />
        </motion.div>
        <motion.div variants={sectionVariants} className="w-full">
          <Testimonials />
        </motion.div>
        <motion.div variants={sectionVariants} className="w-full">
          <Branches />
        </motion.div>
        {/* <motion.div variants={sectionVariants}>
          <FAQ />
        </motion.div> */}
        <motion.div variants={sectionVariants} className="w-full">
          <Contact />
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Index;
