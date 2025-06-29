import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    try {
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess('✅ Message sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setError('❌ Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      setError('❌ Something went wrong.');
    }
  };

  return (
    <section className="bg-[#212529] text-white py-12 lg:py-18 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-400 to-teal-400 rounded-full opacity-10 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-green-400 text-lg mb-2 flex items-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span> Contact Me
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Let’s talk about your <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-lime-400">next idea</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            Whether you have a question, project idea, or want to connect — I'm always open to meaningful conversations.
          </p>

          <div className="space-y-8 mb-12">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-green-400 to-teal-500 p-3 rounded-full">
                <MapPinIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-lg font-semibold">Sylhet, Bangladesh</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-green-400 to-teal-500 p-3 rounded-full">
                <PhoneIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone /WhatsApp</p>
                <p className="text-lg font-semibold">+880 1795 908 863</p>
              </div>
            </div>
          </div>

          <div className="flex justify-start mt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-32 h-32 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-teal-500"
            >
              <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-spin-slow">
                <path
                  id="circlePath"
                  fill="none"
                  strokeWidth="0"
                  d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                />
                <text>
                  <textPath href="#circlePath" className="text-white text-[12px] font-semibold tracking-wide">
                    VIEW MY RESUME • VIEW MY RESUME •
                  </textPath>
                </text>
              </svg>
              <span className="text-white font-bold z-10">CV</span>
            </a>
          </div>
        </div>

        <div className="bg-[#2c3034] p-8 rounded-2xl shadow-xl space-y-6">
          <p className="text-gray-300 text-lg mb-6">
            Fill out the form and I'll get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="bg-[#212529] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="bg-[#212529] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full bg-[#212529] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="w-full bg-[#212529] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 resize-y"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-br from-green-400 to-teal-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
          {success && <p className="text-green-400 text-sm">{success}</p>}
          {error && <p className="text-red-400 text-sm">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
