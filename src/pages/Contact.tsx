import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact as ContactSection } from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;