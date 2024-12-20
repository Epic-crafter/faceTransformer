import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#372E27] p-6 md:p-10 flex flex-col md:flex-row md:flex-wrap">
      
      <div className="section-1 face-transform flex flex-col gap-4 text-white font-medium md:w-[25%]">
        <img src="/img/Footer/FACE TRANSFROM.png" alt="" className="w-32 md:w-40" />
        <p className="w-[100%] md:w-[250px] text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet neque tortor.
        </p>
        <div className="icons flex flex-row gap-5">
          <img src="/img/Footer/Twitter.png" alt="" />
          <img src="/img/Footer/Ig.png" alt=""  />
          <img src="/img/Footer/FB.png" alt="" />
          <img src="/img/Footer/You tube.png" alt="" />
        </div>
      </div>

      <div className="section-2 flex flex-col items-start gap-4 text-white font-semibold md:w-[20%]">
        <h2 className="text-lg md:text-xl">Quick Links</h2>
        <div className="links flex flex-col gap-3 text-[16px] font-medium">
          <a href="/aboutus" className="hover:text-[#D6AF96]">About Us</a>
          <a href="/service" className="hover:text-[#D6AF96]">Service</a>
          <a href="/pricing" className="hover:text-[#D6AF96]">Pricing</a>
          <a href="/blog" className="hover:text-[#D6AF96]">Blog</a>
        </div>
      </div>

      <div className="section-3 text-white font-semibold md:w-[25%]">
        <h2 className="text-lg md:text-xl">Contact Us</h2>
        <div className="info-container flex flex-col gap-4 mt-4 text-[16px] font-medium">
          <div className="info-1 flex items-center">
            <img src="/img/Footer/Vector.png" alt="Icon" className="w-4 h-4" />
            <p className="ml-2 text-md">hello@website.com</p>
          </div>
          <div className="info-2 flex items-start">
            <img src="/img/Footer/Group 62.png" className="w-5 h-5" alt="" />
            <p className="ml-2 text-md">Riverside Building, County Hall, London SE1 7PB, United Kingdom</p>
          </div>
          <div className="info-3 flex items-center">
            <img src="/img/Footer/Group 63.png" className="w-5 h-5" alt="" />
            <p className="ml-2 text-md">451-484-5939</p>
          </div>
        </div>
      </div>

      <div className="section-4 text-white font-semibold md:w-[25%] sm:mt-4">
        <h1 className="text-lg md:text-xl">Newsletter</h1>
        <div className="flex mt-4">
          <input 
            type="text" 
            placeholder="Enter your email" 
            className="w-[70%] md:w-[70%] p-2 rounded-l-[10px] text-black placeholder-gray-400"
          />
          <button className="bg-[#D6AF96] text-white font-semibold px-4 py-4 rounded-r-[10px] hover:bg-[#B88A6C]">
            Subscribe
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
