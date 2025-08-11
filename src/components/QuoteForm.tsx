// components/QuoteWizard.tsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export const QuoteWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    paintColours: '',
    numberOfRooms: '',
    budget: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    if (!formData.email) {
      alert('Please enter your email address.');
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        'service_2zmccg6',
        'template_ipkm335',
        {
          flooring_type: formData.paintColours,
          number_of_rooms: formData.numberOfRooms,
          budget: formData.budget,
          user_email: formData.email,
          to_email: 'jay.cooper752@gmail.com',
        },
        'Ess5eG4X_Q5reZK-3'
      );

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert('Something went wrong sending your quote.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full p-3 rounded text-black shadow focus:outline-none focus:ring focus:ring-blue-300';

  const buttonClass =
    'px-6 py-2 bg-white text-blue-950 font-semibold rounded transition-transform duration-200 hover:scale-105';

  if (submitted) {
    return (
      <section className="max-w-3xl mx-auto mt-10 px-4 sm:px-6 py-8 bg-custom-silver text-blue-950 rounded-xl shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4 drop-shadow-md">
          🎉 Quote Sent!
        </h2>
        <p className="text-base sm:text-lg">
          Thank you! We’ll be in touch at <strong>{formData.email}</strong>.
        </p>
      </section>
    );
  }

  return (
    <section
      id="quote"
      className="max-w-3xl mx-auto mt-10 px-4 sm:px-6 py-8 bg-custom-silver text-blue-950 rounded-xl shadow-xl"
      aria-label="Quote form"
    >
      <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4 drop-shadow-md">
        📝 Get Your Quote
      </h2>
      <p className="mb-6 text-base sm:text-lg">
        Quickly estimate your project by answering a few questions.
      </p>

      {step === 1 && (
        <div>
          <label htmlFor="paintColours" className="block text-lg font-semibold mb-2">
            Paint Colour
          </label>
          <input
            type="text"
            name="paintColours"
            id="paintColours"
            value={formData.paintColours}
            onChange={handleChange}
            placeholder="e.g., Forest Green"
            className={inputClass}
          />
          <button onClick={nextStep} className={`${buttonClass} mt-4`}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <label htmlFor="numberOfRooms" className="block text-lg font-semibold mb-2">
            Room Size (m²)
          </label>
          <input
            type="number"
            name="numberOfRooms"
            id="numberOfRooms"
            value={formData.numberOfRooms}
            onChange={handleChange}
            placeholder="Enter size"
            className={inputClass}
          />
          <div className="mt-4 flex justify-between">
            <button onClick={prevStep} className={buttonClass}>
              Back
            </button>
            <button onClick={nextStep} className={buttonClass}>
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <label htmlFor="budget" className="block text-lg font-semibold mb-2">
            Budget (£)
          </label>
          <input
            type="number"
            name="budget"
            id="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="e.g., 1000"
            className={inputClass}
          />
          <div className="mt-4 flex justify-between">
            <button onClick={prevStep} className={buttonClass}>
              Back
            </button>
            <button onClick={nextStep} className={buttonClass}>
              Next
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <label htmlFor="email" className="block text-lg font-semibold mb-2">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClass}
          />
          <div className="mt-4 flex justify-between">
            <button onClick={prevStep} className={buttonClass}>
              Back
            </button>
            <button
              disabled={loading}
              onClick={handleSubmit}
              className={`${buttonClass} ${
                loading ? 'bg-gray-300 text-gray-700 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};