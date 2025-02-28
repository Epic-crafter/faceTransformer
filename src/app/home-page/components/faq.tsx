"use client"
import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

interface FAQItem {
    question: string;
    answer: string;
}

const handleToggle = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
};

  const faqItems = [
    {
      question: "What services does Beyond Beauty offer?",
      answer: "Beyond Beauty offers comprehensive beauty treatments including facials, skin restoration, cosmetic enhancements, anti-aging treatments, and personalized skincare consultations."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment through our website, by calling our reception desk, or by visiting our location in person. We recommend booking 1-2 weeks in advance for optimal availability."
    },
    {
      question: "What should I expect during my first visit?",
      answer: "Your first visit includes a thorough consultation to understand your beauty goals and skin concerns, followed by a personalized treatment recommendation. Our specialists will guide you through each step of the process."
    },
    {
      question: "Are your products suitable for sensitive skin?",
      answer: "Yes, we offer products specifically formulated for sensitive skin. During your consultation, our specialists will assess your skin type and recommend appropriate treatments and products."
    },
    {
      question: "Do you offer gift certificates?",
      answer: "Yes, we offer gift certificates in various denominations. These can be purchased online or at our location and make perfect gifts for special occasions."
    }
  ];

  return (
    <div className="min-h-screen bg-[#DED0C5] py-16">
      <div className="mx-auto px-6 md:px-20">
        {/* Header */}
        <header className="mb-16">
          <h1 className="font-bigerside-expanded uppercase text-[52px] md:text-[70px] text-white font-black mb-8  font-semibold drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] font-[Helvetica Neue, Arial, sans-serif]">
            FAQ
          </h1>
          <div className="h-px w-24 bg-[#796355] mb-8"></div>
          <p className="text-[rgb(121 99 85 / var(--tw-text-opacity))] max-w-2xl text-left">
            Find answers to our most frequently asked questions. If you don't see the information you're looking for, please contact us directly.
          </p>
        </header>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-[#796355]/20">
              <button 
                className="w-full py-4 text-left flex justify-between  focus:outline-none"
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-xl text-[#796355] font-medium">{item.question}</h3>
                <span className="text-[#796355] text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-[#796355]/80 leading-relaxed text-left">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        
        <div className="mt-16 pt-12 border-t border-[#796355]/20">
          <h2 className="text-4xl text-white font-medium mb-6 text-left drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] font-[Helvetica Neue, Arial, sans-serif]">
            Still have questions?
          </h2>
          <p className="text-[#796355]/80 mb-8 text-left">
            Our team is available to answer any additional questions you may have about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-block bg-[#796355] text-[#F5F5F5] px-6 py-3 hover:bg-[#796355]/90 transition-colors duration-300">
              Contact Us
            </a>
            <a href="tel:+1234567890" className="inline-block text-[#796355] px-6 py-3 border border-[#796355] hover:bg-[#796355]/10 transition-colors duration-300">
              Call: (123) 456-7890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;