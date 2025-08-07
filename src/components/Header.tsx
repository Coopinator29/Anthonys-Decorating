// components/Header.tsx
import React from 'react';

const Header: React.FC = () => (
<header className="bg-custom-silver sticky top-0 z-50 px-2 sm:px-4 lg:px-8 py-2 sm:py-4 shadow-xl">
    <div className="mx-auto flex items-center justify-between">
      <div className="flex items-center space-x-2 sm:space-x-4">
        <h1 className="text-blue-950 text-xl sm:text-4xl font-serif">
          Anthony's Decorating
        </h1>
      </div>

      <nav className="hidden sm:flex space-x-4 md:space-x-6">
        {['portfolio', 'service-area', 'quote', 'contact'].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="text-blue-950 hover:text-navy transition text-sm sm:text-base"
          >
            {id.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;
