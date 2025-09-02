// components/Header.tsx
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['portfolio', 'service-area', 'contact'];

  return (
    <header className="bg-custom-silver sticky top-0 z-50 shadow-xl px-4 sm:px-6 lg:px-12 py-3 sm:py-5">
      <div className="mx-auto flex items-center justify-between max-w-screen-xl">
        {/* Logo / Title */}
        <h1 className="text-blue-950 text-lg sm:text-3xl font-serif">
          Anthony's Decorating
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-4 md:space-x-6" aria-label="Main navigation">
          {navItems.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-blue-950 hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base"
            >
              {id.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-blue-950 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="sm:hidden mt-2 px-4 space-y-2" aria-label="Mobile navigation">
          {navItems.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="block text-blue-950 hover:text-navy transition-colors duration-200 text-base"
            >
              {id.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;