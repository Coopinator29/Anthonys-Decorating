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

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

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

  if (submitted) {
    return (
      <section className="max-w-3xl mx-auto mt-10 px-6 py-8 bg-custom-silver text-blue-950 rounded-lg shadow-lg">
        <h2 className="text-3xl font-serif font-bold mb-4 drop-shadow-md">
          🎉 Quote Sent!
        </h2>
        <p className="text-lg">
          Thank you! We’ll be in touch at {formData.email}.
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto mt-10 px-6 py-8 bg-custom-silver text-blue-950 rounded-lg shadow-lg">
      <h2 className="text-3xl font-serif font-bold mb-4 drop-shadow-md">
        📝 Get Your Quote
      </h2>
      <p className="mb-6 text-lg">
        Quickly estimate your project by answering a few questions.
      </p>

      {step === 1 && (
        <div>
          <label className="block text-lg font-semibold mb-2">Paint Colour</label>
          <input
            type="text"
            name="flooringType"
            value={formData.paintColours}
            onChange={handleChange}
            placeholder="e.g., Forest Green"
            className="w-full p-3 rounded text-black shadow focus:outline-none focus:ring"
          />
          <button
            onClick={nextStep}
            className="mt-4 px-6 py-2 bg-white text-blue-950 font-semibold rounded transform transition-transform duration-200 hover:scale-105"
          >
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <label className="block text-lg font-semibold mb-2">Room Size (m²)</label>
          <input
            type="number"
            name="roomSize"
            value={formData.numberOfRooms}
            onChange={handleChange}
            placeholder="Enter size"
            className="w-full p-3 rounded text-black shadow focus:outline-none focus:ring"
          />
          <div className="mt-4 flex justify-between">
            <button
              className="px-6 py-2 bg-white text-blue-950 font-semibold rounded transform transition-transform duration-200 hover:scale-105"
              onClick={prevStep}
            >
              Back
            </button>
            <button
              className="px-6 py-2 bg-white text-blue-950 font-semibold rounded transform transition-transform duration-200 hover:scale-105"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <label className="block text-lg font-semibold mb-2">Budget (£)</label>
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="e.g., 1000"
            className="w-full p-3 rounded text-black shadow focus:outline-none focus:ring"
          />
          <div className="mt-4 flex justify-between">
            <button
              className="px-6 py-2 bg-white text-blue-950 font-semibold rounded transform transition-transform duration-200 hover:scale-105"
              onClick={prevStep}
            >
              Back
            </button>
            <button
              className="px-6 py-2 bg-white text-blue-950 font-semibold rounded transform transition-transform duration-200 hover:scale-105"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <label className="block text-lg font-semibold mb-2">Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full p-3 rounded text-black shadow focus:outline-none focus:ring"
          />
          <div className="mt-4 flex justify-between">
            <button
              className="px-6 py-2 bg-white text-blue-950 font-semibold rounded transform transition-transform duration-200 hover:scale-105"
              onClick={prevStep}
            >
              Back
            </button>
            <button
              disabled={loading}
              className={`px-6 py-2 bg-white text-blue-950 font-semibold rounded transform transition-transform duration-200 hover:scale-105 ${
                loading
                  ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                  : ''
              }`}
              onClick={handleSubmit}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
