// components/Contact.tsx
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-custom-silver shadow-xl rounded-xl text-offwhite py-16 px-4 sm:px-6 lg:px-12"
      aria-label="Contact section"
    >
      <div className="max-w-2xl mx-auto bg-custom-blue backdrop-blur-md rounded-xl shadow-xl p-8 border border-white/10">
        <h2 className="text-white text-3xl sm:text-4xl font-serif font-bold mb-6 text-center drop-shadow-md">
          Let’s Connect
        </h2>
        <p className="text-white mb-8 text-center text-base sm:text-lg text-offwhite/90">
          Ready to transform your space? Reach out and let’s make it happen.
        </p>

        <ul className="space-y-6 text-base sm:text-lg">
          <li className="flex items-center gap-4">
            {FaPhoneAlt({ className: 'text-gold text-xl' })}
            <a
              href="tel:5551234567"
              className="text-white hover:text-copper transition font-medium"
            >
              07545 704 060
            </a>
          </li>
          <li className="flex items-center gap-4">
            {FaEnvelope({ className: 'text-gold text-xl' })}
            <a
              href="mailto:anthony@anthonysdecorating.co.uk"
              className="text-white hover:text-copper transition font-medium"
            >
              anthony@anthonysdecorating.co.uk
            </a>
          </li>
          <li className="flex items-center gap-4">
            {FaInstagram({ className: 'text-gold text-xl' })}
            <a
              href="https://www.instagram.com/anthonysdecorating?utm_source=ig_web_button_share_sheet&igsh=b21qY3N3ZHN4eTgy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-copper transition font-medium"
            >
              anthonysdecorating
            </a>
          </li>
                    <li className="flex items-center gap-4">
            {FaFacebook({ className: 'text-gold text-xl' })}
            <a
              href="https://www.facebook.com/AnthonysDecoratingltd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-copper transition font-medium"
            >
              Anthonys Decorating Limited 
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;