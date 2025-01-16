'use client';

import React, { useState } from 'react';
import Navbar from '../home-page/components/Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    telephone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('Form submitted successfully!');
        setFormData({
          fullName: '',
          email: '',
          telephone: '',
          service: '',
          message: '',
        });
      } else {
        setSubmitStatus('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#d9cbb7] min-h-screen flex flex-col items-center justify-center p-8 pt-24">
        <h1 className="text-6xl font-black text-white mb-8 drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] font-[Helvetica Neue, Arial, sans-serif]">
          CONTACT US
        </h1>
        <div className="bg-[#9c8271] rounded-3xl shadow-2xl flex flex-col lg:flex-row w-full max-w-[1200px] p-8">
          <div className="flex-1 text-black space-y-6">
            <h2 className="text-2xl font-[Helvetica Neue, Arial, sans-serif]">
              <span className="text-white">
                Fill in the contact form below to get a free consultation
              </span>
            </h2>
            <p className="text-base">
              Let us guide you towards the accomplishment of beauty to create our accomplishment
              as you journey along with personalized care and attentiveness.
            </p>
          </div>
          <div className="flex-1 bg-[#967860] p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <h2 className="text-4xl font-black text-white mb-6 drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] font-[Helvetica Neue, Arial, sans-serif]">
              FILL IT UP NOW!!
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex space-x-6">
                <div className="flex-1 flex flex-col">
                  <label htmlFor="fullName" className="text-white font-bold text-sm mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="bg-transparent border-b border-white text-white outline-none placeholder:text-white placeholder:font-normal"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label htmlFor="email" className="text-white font-bold text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-transparent border-b border-white text-white outline-none placeholder:text-white placeholder:font-normal"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="flex space-x-6">
                <div className="flex-1 flex flex-col">
                  <label htmlFor="telephone" className="text-white font-bold text-sm mb-2">
                    Telephone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="bg-transparent border-b border-white text-white outline-none placeholder:text-white placeholder:font-normal"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label htmlFor="service" className="text-white font-bold text-sm mb-2">
                    Service
                  </label>
                  <input
                    type="text"
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="bg-transparent border-b border-white text-white outline-none placeholder:text-white placeholder:font-normal"
                    placeholder="Type of service"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-white font-bold text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-transparent border-b border-white text-white outline-none placeholder:text-white placeholder:font-normal"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-[#967860] font-bold py-3 rounded-full shadow-md hover:bg-[#967860] hover:text-white transition-all drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Get Started'}
              </button>
            </form>
            {submitStatus && (
              <p
                className={`mt-4 text-center ${
                  submitStatus.includes('successfully') ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {submitStatus}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
