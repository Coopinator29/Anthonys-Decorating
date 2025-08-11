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

      <p className="text-base sm:text-lg mb-8 text-white/90">
        Premium painter
      </p>

      <a
        href="#quote"
        className="
          inline-block
          bg-custom-silver text-navy font-semibold
          px-6 sm:px-8 py-2.5 sm:py-3
          rounded-full
          shadow-lg
          transition-transform duration-200
          hover:scale-105 active:scale-95
        "
        role="button"
      >
        Get a Free Quote
      </a>
    </div>
  </section>
);

export default Hero;