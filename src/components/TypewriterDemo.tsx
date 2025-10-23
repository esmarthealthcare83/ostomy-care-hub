import React, { useState, useEffect } from 'react';
import TypewriterText from './TypewriterText';

/**
 * TypewriterDemo Component
 * Showcases different typewriter animation styles
 * Perfect for hero sections, landing pages, or product showcases
 */
export const TypewriterDemo: React.FC = () => {
  const [resetKey, setResetKey] = useState(0);

  // Example messages that could rotate
  const messages = [
    "Discover Premium Ostomy Care Solutions",
    "Shop Trusted Coloplast Products",
    "Your Health, Our Priority"
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length);
      setResetKey(prev => prev + 1);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <div className="py-12 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-4xl mx-auto">
        {/* Example 1: Large Hero Headline */}
        <div className="mb-12 p-8 bg-white rounded-lg shadow-lg hover-lift">
          <p className="text-sm text-gray-500 mb-2 uppercase tracking-widest">
            Example 1: Hero Headline
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <TypewriterText
              text="Welcome to Ostomy Care Hub"
              speed={100}
              showCursor={true}
              className="text-blue-600"
            />
          </h1>
          <p className="text-gray-600">
            Speed: 100ms per character | With cursor | Classic style
          </p>
        </div>

        {/* Example 2: Fast Action Text */}
        <div className="mb-12 p-8 bg-white rounded-lg shadow-lg hover-lift">
          <p className="text-sm text-gray-500 mb-2 uppercase tracking-widest">
            Example 2: Fast Action Text
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <TypewriterText
              text="Limited Time Offer - Save Up to 40%"
              speed={50}
              showCursor={false}
              className="text-red-600"
            />
          </h2>
          <p className="text-gray-600">
            Speed: 50ms per character | No cursor | Urgent feel
          </p>
        </div>

        {/* Example 3: Rotating Messages */}
        <div className="mb-12 p-8 bg-white rounded-lg shadow-lg hover-lift">
          <p className="text-sm text-gray-500 mb-2 uppercase tracking-widest">
            Example 3: Auto-Rotating Messages
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 h-16 flex items-center">
            <TypewriterText
              key={resetKey}
              text={messages[currentMessage]}
              speed={80}
              showCursor={true}
              className="text-cyan-600"
            />
          </h2>
          <p className="text-gray-600">
            Speed: 80ms | Rotates every 5 seconds | Message #{currentMessage + 1}
          </p>
        </div>

        {/* Example 4: Description with Delay */}
        <div className="mb-12 p-8 bg-white rounded-lg shadow-lg hover-lift">
          <p className="text-sm text-gray-500 mb-2 uppercase tracking-widest">
            Example 4: Description with Delay
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Premium Quality Products
          </h3>
          <p className="text-lg text-gray-700">
            <TypewriterText
              text="We provide high-quality ostomy care products from trusted brands like Coloplast, offering comfort, reliability, and discretion for daily use."
              speed={40}
              delay={500}
              showCursor={false}
              className="text-gray-700"
            />
          </p>
          <p className="text-gray-600 mt-4">
            Speed: 40ms | Delay: 500ms | No cursor
          </p>
        </div>

        {/* Example 5: Staggered Multi-Line */}
        <div className="mb-12 p-8 bg-white rounded-lg shadow-lg hover-lift">
          <p className="text-sm text-gray-500 mb-2 uppercase tracking-widest">
            Example 5: Staggered Multi-Line
          </p>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">
              <TypewriterText
                text="Why Choose Us?"
                speed={100}
                delay={0}
                showCursor={false}
                className="text-blue-600"
              />
            </h3>
            <div className="text-lg text-gray-700">
              <div>
                <span className="font-semibold">✓ </span>
                <TypewriterText
                  text="Trusted by thousands worldwide"
                  speed={80}
                  delay={600}
                  showCursor={false}
                  className="text-gray-700"
                />
              </div>
              <div>
                <span className="font-semibold">✓ </span>
                <TypewriterText
                  text="Fast and discreet delivery"
                  speed={80}
                  delay={1200}
                  showCursor={false}
                  className="text-gray-700"
                />
              </div>
              <div>
                <span className="font-semibold">✓ </span>
                <TypewriterText
                  text="Expert customer support 24/7"
                  speed={80}
                  delay={1800}
                  showCursor={false}
                  className="text-gray-700"
                />
              </div>
            </div>
          </div>
          <p className="text-gray-600 mt-4">
            Staggered delays: 0ms, 600ms, 1200ms, 1800ms
          </p>
        </div>

        {/* Example 6: Custom Styling */}
        <div className="mb-12 p-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg shadow-lg hover-lift">
          <p className="text-sm text-blue-100 mb-2 uppercase tracking-widest">
            Example 6: Custom Styled
          </p>
          <h2 className="text-4xl font-bold mb-4">
            <TypewriterText
              text="Transform Your Care Experience"
              speed={100}
              showCursor={true}
              className="text-white"
              cursorClassName="bg-white"
            />
          </h2>
          <p className="text-blue-100">
            Gradient background | White text | White cursor
          </p>
        </div>

        {/* Quick Copy-Paste Examples */}
        <div className="p-8 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            💡 Quick Copy-Paste Examples
          </h3>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm font-mono bg-gray-800 text-green-400 p-4 rounded overflow-auto">
                {`<TypewriterText 
  text="Your text here" 
  speed={100}
  showCursor={true}
/>`}
              </p>
            </div>

            <div>
              <p className="text-sm font-mono bg-gray-800 text-green-400 p-4 rounded overflow-auto">
                {`<TypewriterText 
  text="Fast typing effect"
  speed={50}
  loop={true}
  showCursor={false}
/>`}
              </p>
            </div>

            <div>
              <p className="text-sm font-mono bg-gray-800 text-green-400 p-4 rounded overflow-auto">
                {`<TypewriterText 
  text="With delay..."
  speed={80}
  delay={1000}
  className="text-blue-600 text-2xl font-bold"
/>`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypewriterDemo;