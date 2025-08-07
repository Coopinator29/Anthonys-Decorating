import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="text-white py-12 px-6">
      <h2 className="text-gold text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">
        Ready to transform your rooms? Get in touch!
      </p>
      <ul className="space-y-2">
        <li>
          <span className="text-gold font-semibold">Phone:</span> (555) 123-4567
        </li>
        <li>
          <span className="text-gold font-semibold">Email:</span> info@anthonysdecorating.com
        </li>
        <li>
          <span className="text-gold font-semibold">Follow us:</span>{' '}
          <a href="https://www.instagram.com/falmouth_flooring?igsh=MWdveTlzeXc0ZjZtag==" className="hover:text-copper transition">Instagram</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
