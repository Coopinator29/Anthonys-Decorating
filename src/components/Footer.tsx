// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-custom-silver py-6 border-t border-white/20">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 text-center text-navy text-xs sm:text-sm">
      © {new Date().getFullYear()} <span className="font-serif">Anthony's Decorating</span>. All rights reserved.
    </div>
  </footer>
);

export default Footer;