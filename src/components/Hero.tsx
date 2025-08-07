import React from 'react'

const Hero: React.FC = () => (
  <section
    id="hero"
    className="relative bg-hero-pattern bg-cover bg-center text-center pt-32 pb-24"
  >
    <div className="absolute inset-0"></div>
    <div className="relative z-10 container mx-auto px-6">
      <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-4 text-white">
        Transform Your Space with Anthony's Decorating
      </h1>
      <p className="text-lg mb-8 text-white/90">
        Premium painter
      </p>
<a
  href="#quote"
  className="
    inline-block
    bg-custom-silver text-navy font-semibold
    px-8 py-3
    rounded-full
    shadow-lg
    transform
    transition-transform duration-200
    hover:scale-105 active:scale-95
  "
>
        Get a Free Quote
      </a>
    </div>
  </section>
)

export default Hero