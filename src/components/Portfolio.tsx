import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="bg-custom-blue text-offwhite py-12 px-6">
      <h2 className="text-white text-2xl font-bold mb-6">Our Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-custom-silver rounded p-4 text-navy cursor-pointer 
    transform
    transition-transform duration-200
    hover:scale-105 active:scale-95">
          <h3 className="text-lg font-bold mb-2">Hardwood Flooring</h3>
          <p>Beautiful installations with premium materials.</p>
        </div>
        <div className="bg-custom-silver rounded p-4 text-navy cursor-pointer 
    transform
    transition-transform duration-200
    hover:scale-105 active:scale-95">
          <h3 className="text-lg font-bold mb-2">Tile Work</h3>
          <p>Modern, durable, and stylish tile finishes.</p>
        </div>
        <div className="bg-custom-silver rounded p-4 text-navy cursor-pointer 
    transform
    transition-transform duration-200
    hover:scale-105 active:scale-95">
          <h3 className="text-lg font-bold mb-2">Luxury Vinyl</h3>
          <p>Affordable elegance and easy maintenance.</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
