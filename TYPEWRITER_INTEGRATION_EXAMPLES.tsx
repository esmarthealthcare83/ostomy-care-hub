/**
 * TYPEWRITER INTEGRATION EXAMPLES
 * Real-world code snippets showing where to use TypewriterText component
 * Copy and paste these into your components!
 */

import React, { useState } from 'react';
import TypewriterText from './components/TypewriterText';

// ============================================================================
// EXAMPLE 1: UPDATE HEADER WITH TYPEWRITER SEARCH HINTS
// ============================================================================

/**
 * Location: src/components/Header.tsx
 * Replace the static placeholder with animated rotating hints
 */
export function HeaderWithTypewriter() {
  const [searchQuery, setSearchQuery] = useState('');
  const placeholders = [
    'Search By Name',
    'Search By Product Code',
    'Search By Brands or Diameters'
  ];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(prev => (prev + 1) % placeholders.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [placeholders.length]);

  return (
    <div className="search-container">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
        {/* Animated placeholder overlay */}
        {!searchQuery && (
          <span className="absolute left-4 top-2.5 text-gray-400 pointer-events-none">
            <TypewriterText
              key={placeholderIndex}
              text={placeholders[placeholderIndex]}
              speed={100}
              showCursor={true}
              className="text-gray-400"
            />
          </span>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// EXAMPLE 2: HERO SECTION WITH ANIMATED HEADLINE
// ============================================================================

/**
 * Location: src/components/Hero.tsx or src/pages/Index.tsx
 * Add engaging animated headline to hero section
 */
export function HeroWithTypewriter() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center">
      <div className="container mx-auto px-4 text-center">
        {/* Main Headline - Typewriter Effect */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
          <TypewriterText
            text="Welcome to Ostomy Care Hub"
            speed={100}
            showCursor={true}
            className="text-blue-600"
          />
        </h1>

        {/* Subtitle - Delayed */}
        <p className="text-2xl text-gray-600 mb-8">
          <TypewriterText
            text="Professional Care Products Delivered to Your Door"
            speed={80}
            delay={1500}
            showCursor={false}
          />
        </p>

        {/* CTA Button */}
        <button className="btn-hero px-8 py-4 text-lg">
          Shop Now
        </button>
      </div>
    </section>
  );
}

// ============================================================================
// EXAMPLE 3: PRODUCT SHOWCASE WITH ANIMATED TITLES
// ============================================================================

/**
 * Location: src/components/ProductCategories.tsx
 * Add animated titles to product category sections
 */
export function ProductCategoryWithTypewriter() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        {/* Section Title - Fast typing */}
        <h2 className="text-3xl font-bold mb-2">
          <TypewriterText
            text="Featured Products"
            speed={80}
            showCursor={false}
          />
        </h2>

        {/* Section Description - Slower with delay */}
        <p className="text-gray-600 mb-8">
          <TypewriterText
            text="Discover our complete range of premium ostomy care solutions"
            speed={50}
            delay={600}
            showCursor={false}
          />
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product cards would go here */}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// EXAMPLE 4: SERVICES SECTION WITH STAGGERED ANIMATIONS
// ============================================================================

/**
 * Location: src/components/Services.tsx
 * Create staggered typewriter effects for service list
 */
export function ServicesWithTypewriter() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        {/* Main Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          <TypewriterText
            text="Our Services"
            speed={100}
            showCursor={false}
            className="text-blue-600"
          />
        </h2>

        {/* Staggered Service Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              <TypewriterText
                text="✓ 24/7 Support"
                speed={100}
                delay={0}
                showCursor={false}
                className="text-green-600"
              />
            </h3>
            <p className="text-gray-600">Expert support whenever you need it</p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              <TypewriterText
                text="✓ Fast Delivery"
                speed={100}
                delay={400}
                showCursor={false}
                className="text-blue-600"
              />
            </h3>
            <p className="text-gray-600">Quick and discreet delivery to your home</p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              <TypewriterText
                text="✓ Premium Quality"
                speed={100}
                delay={800}
                showCursor={false}
                className="text-purple-600"
              />
            </h3>
            <p className="text-gray-600">Trusted brands and premium products</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// EXAMPLE 5: TESTIMONIALS WITH ANIMATED QUOTES
// ============================================================================

/**
 * Location: src/components/Testimonials.tsx
 * Add typewriter effect to testimonial text
 */
export function TestimonialsWithTypewriter() {
  const testimonials = [
    {
      text: "Outstanding service and premium quality products. Highly recommended!",
      author: "John D.",
      delay: 0
    },
    {
      text: "Fast delivery, discreet packaging, and excellent customer care.",
      author: "Sarah M.",
      delay: 600
    },
    {
      text: "Finally found a reliable source for quality ostomy care products.",
      author: "Michael K.",
      delay: 1200
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          <TypewriterText
            text="What Our Customers Say"
            speed={100}
            showCursor={false}
            className="text-blue-600"
          />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600 italic mb-4">
                <TypewriterText
                  text={`"${testimonial.text}"`}
                  speed={50}
                  delay={testimonial.delay}
                  showCursor={false}
                />
              </p>
              <p className="font-semibold text-gray-900">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// EXAMPLE 6: PRODUCT DETAIL PAGE WITH ANIMATED DESCRIPTION
// ============================================================================

/**
 * Location: src/pages/ProductDetail.tsx
 * Animate product descriptions on detail page
 */
export function ProductDetailWithTypewriter() {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div>{/* Image goes here */}</div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Alterna® 1-Piece Flat Transparent Bag
          </h1>

          {/* Animated Description */}
          <p className="text-lg text-gray-600 mb-6">
            <TypewriterText
              text="Premium ostomy care solution designed for comfort and reliability. Features secure adhesion, transparent design for easy monitoring, and soft, comfortable material for all-day wear."
              speed={40}
              delay={200}
              showCursor={false}
            />
          </p>

          {/* Features */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Key Features:</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-bold">✓ </span>
                <TypewriterText
                  text="Transparent design for easy monitoring"
                  speed={60}
                  delay={400}
                  showCursor={false}
                />
              </li>
              <li>
                <span className="font-bold">✓ </span>
                <TypewriterText
                  text="Secure adhesive for leak prevention"
                  speed={60}
                  delay={800}
                  showCursor={false}
                />
              </li>
              <li>
                <span className="font-bold">✓ </span>
                <TypewriterText
                  text="Soft and comfortable material"
                  speed={60}
                  delay={1200}
                  showCursor={false}
                />
              </li>
            </ul>
          </div>

          {/* CTA */}
          <button className="btn-hero mt-8 px-8 py-3">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// EXAMPLE 7: LANDING PAGE - ANIMATED CALL TO ACTION
// ============================================================================

/**
 * Location: Can be used in any section where CTA is needed
 * Highlight special offers with typewriter effect
 */
export function SpecialOfferWithTypewriter() {
  return (
    <section className="bg-gradient-to-r from-red-500 to-pink-500 py-16 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          <TypewriterText
            text="🎉 LIMITED TIME OFFER 🎉"
            speed={50}
            showCursor={false}
            className="text-white"
          />
        </h2>

        <p className="text-2xl font-bold mb-8">
          <TypewriterText
            text="Save Up to 40% on Premium Products"
            speed={60}
            delay={1000}
            showCursor={false}
            className="text-yellow-200"
          />
        </p>

        <button className="bg-white text-red-600 px-12 py-4 text-xl font-bold rounded-lg hover:shadow-lg transition">
          Shop Limited Deal
        </button>
      </div>
    </section>
  );
}

// ============================================================================
// EXAMPLE 8: ABOUT PAGE WITH COMPANY STORY
// ============================================================================

/**
 * Location: src/pages/About.tsx
 * Tell company story with animated text
 */
export function AboutPageWithTypewriter() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-5xl font-bold mb-8 text-center">
          <TypewriterText
            text="About Ostomy Care Hub"
            speed={100}
            showCursor={false}
            className="text-blue-600"
          />
        </h1>

        <div className="bg-gray-50 p-8 rounded-lg space-y-4">
          <p className="text-lg">
            <TypewriterText
              text="Ostomy Care Hub was founded with a mission to provide high-quality, affordable ostomy care products to patients worldwide."
              speed={45}
              delay={0}
              showCursor={false}
            />
          </p>

          <p className="text-lg">
            <TypewriterText
              text="We partner with leading brands like Coloplast to ensure our customers receive only the best products available."
              speed={45}
              delay={1000}
              showCursor={false}
            />
          </p>

          <p className="text-lg">
            <TypewriterText
              text="Our commitment to excellence, customer service, and discretion has made us a trusted choice for ostomy care needs."
              speed={45}
              delay={2000}
              showCursor={false}
            />
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// EXAMPLE 9: FAQ SECTION WITH ANIMATED QUESTIONS
// ============================================================================

/**
 * Location: src/components/FAQ.tsx
 * Animate FAQ questions for better engagement
 */
export function FAQWithTypewriter() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          <TypewriterText
            text="Frequently Asked Questions"
            speed={100}
            showCursor={false}
            className="text-blue-600"
          />
        </h2>

        <div className="space-y-6 max-w-2xl mx-auto">
          {/* FAQ Item 1 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">
              <TypewriterText
                text="Q: How do I choose the right product size?"
                speed={80}
                delay={0}
                showCursor={false}
                className="text-blue-600"
              />
            </h3>
            <p className="text-gray-600">A: We provide detailed size guides and customer support to help you choose the perfect fit.</p>
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">
              <TypewriterText
                text="Q: Is packaging discreet and confidential?"
                speed={80}
                delay={400}
                showCursor={false}
                className="text-blue-600"
              />
            </h3>
            <p className="text-gray-600">A: Yes! We use plain, unmarked packaging for complete privacy and discretion.</p>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">
              <TypewriterText
                text="Q: What's your return policy?"
                speed={80}
                delay={800}
                showCursor={false}
                className="text-blue-600"
              />
            </h3>
            <p className="text-gray-600">A: We offer a 100% satisfaction guarantee with easy returns within 30 days.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// EXPORT ALL EXAMPLES FOR REFERENCE
// ============================================================================

export const TypewriterExamples = {
  Header: HeaderWithTypewriter,
  Hero: HeroWithTypewriter,
  ProductCategory: ProductCategoryWithTypewriter,
  Services: ServicesWithTypewriter,
  Testimonials: TestimonialsWithTypewriter,
  ProductDetail: ProductDetailWithTypewriter,
  SpecialOffer: SpecialOfferWithTypewriter,
  About: AboutPageWithTypewriter,
  FAQ: FAQWithTypewriter
};

export default TypewriterExamples;