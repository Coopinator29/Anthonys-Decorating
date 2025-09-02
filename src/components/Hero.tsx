// components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => (
  <section
    id="hero"
    className="relative bg-hero-pattern bg-cover bg-center text-center pt-24 sm:pt-32 pb-20 sm:pb-28"
    role="banner"
  >
    {/* Overlay for better text contrast */}
    <div className="absolute inset-0 bg-black/40"></div>

    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
      <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
        Transform Your Space with Anthony's Decorating
      </h1>
    </div>
  </section>
);

export default Hero;