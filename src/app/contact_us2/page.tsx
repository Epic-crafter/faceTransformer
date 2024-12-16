import React from 'react';

export default function Contact() {
  return (
    <div className="bg-[#d9cbb7] min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-6xl font-black text-white mb-8 drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] font-[Helvetica Neue, Arial, sans-serif]">
        CONTACT US
      </h1>
      <div className="bg-[#9c8271] rounded-3xl shadow-2xl flex flex-col lg:flex-row w-full max-w-[1200px] p-8">
        <div className="flex-1 text-black space-y-6">
          <h2 className="text-4xl font-black text-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-[Helvetica Neue, Arial, sans-serif]">
            FILL UP THIS FORM TO GET
            <br />
            <span className="text-white">A FREE CONSULTATION</span>
          </h2>
          <p className="text-base">
            Don't forget to check out our socials!! They will be linked right here for y'all to get an idea about us! Go show us some love!
          </p>
        </div>
        <div className="flex-1 bg-[#967860] p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <h2 className="text-4xl font-black text-white mb-6 drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] font-[Helvetica Neue, Arial, sans-serif]">
            FILL IT UP NOW!!
          </h2>
          <form className="space-y-6">
            <div className="flex space-x-6">
              <div className="flex-1 flex flex-col">
                <label className="text-white font-bold text-sm mb-2">Full name</label>
                <input
                  type="text"
                  className="bg-transparent border-b border-white text-white outline-none placeholder:text-white placeholder:font-normal"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label className="text-white font-bold text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="bg-transparent border-b border-white text-white outline-none placeholder:text-white placeholder:font-normal"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex space-x-6">
              <div className="flex-1 flex flex-col">
                <label className="text-white font-bold text-sm mb-2">Telephone</label>
                <input
                  type="tel"
                  className="bg-transparent border-b border-white text-white outline-none placeholder:text-white placeholder:font-normal"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label className="text-white font-bold text-sm mb-2">Service</label>
                <input
                  type="text"
                  className="bg-transparent border-b border-white text-white outline-none placeholder:text-white placeholder:font-normal"
                  placeholder="Type of service"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-white font-bold text-sm mb-2">Message</label>
              <textarea
                className="bg-transparent border-b border-white text-white outline-none placeholder:text-white placeholder:font-normal"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-[#967860] font-bold py-3 rounded-full shadow-md hover:bg-[#967860] hover:text-white transition-all drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
