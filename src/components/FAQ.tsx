import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "How do I know which ostomy products are right for me?",
      answer: "Our expert healthcare consultants can help you choose the right products based on your specific needs, stoma type, and lifestyle. You can call us at 1800-102-0550 for a free consultation, or use our online product finder tool."
    },
    {
      question: "Do you deliver across India?",
      answer: "Yes, we provide free doorstep delivery across all states in India. Orders are typically processed within 24 hours and delivered within 3-7 business days depending on your location."
    },
    {
      question: "Are your products authentic and safe?",
      answer: "Absolutely! All our products are 100% authentic and sourced directly from authorized manufacturers like Coloplast. Every product comes with proper certifications and quality assurance."
    },
    {
      question: "Can I return or exchange products if they don't fit?",
      answer: "Yes, we understand that finding the right fit is crucial. We offer hassle-free returns and exchanges within 30 days of purchase for unused products in original packaging."
    },
    {
      question: "Do you accept insurance or provide reimbursement support?",
      answer: "We provide detailed invoices and documentation that can be used for insurance reimbursement. Our team can also help you understand the reimbursement process with your insurance provider."
    },
    {
      question: "How often should I change my ostomy products?",
      answer: "This varies by individual and product type. Generally, bags should be changed every 3-7 days, while baseplates may last 3-5 days. Our healthcare consultants can provide personalized guidance based on your specific situation."
    },
    {
      question: "Do you offer bulk discounts for regular customers?",
      answer: "Yes, we offer volume discounts for bulk orders and loyalty rewards for regular customers. Contact our customer service team to learn about our subscription plans and bulk pricing options."
    },
    {
      question: "Is my personal information kept confidential?",
      answer: "Your privacy is our top priority. All personal and medical information is kept strictly confidential. We use secure, discreet packaging for all deliveries to ensure your privacy."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our products and services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card border rounded-lg px-6 shadow-soft animate-slide-up"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-gradient-medical rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-white/90 mb-6">
              Our healthcare experts are here to help you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-white text-primary hover:bg-white/90">
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat with Expert
              </Button>
              <div className="text-white/90">
                or call us at <strong className="text-white">1800-102-0550</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}