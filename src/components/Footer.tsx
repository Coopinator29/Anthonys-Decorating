import React from 'react'

const Footer: React.FC = () => (
  <footer className="bg-custom-silver py-6">
    <div className="container mx-auto px-6 text-center text-blue-950 text-sm">
      © {new Date().getFullYear()} Anthony's Decorating. All rights reserved.
    </div>
  </footer>
)

export default Footer