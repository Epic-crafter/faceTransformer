"use client"
import { Facebook } from '@mui/icons-material';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Footer = () => {
  const [adminPage,setAdminPage] = useState(false)
  const pathname = usePathname();
  useEffect(()=>{
    const isAdminPath = pathname.includes('admin') ? false : true;
   setAdminPage(isAdminPath)
  },[pathname])
  if (!adminPage){
    return;
  }
  return (
    <div className="bg-[#372E27] p-6 md:p-10 flex flex-col md:flex-row md:flex-wrap">
      
      <div className="section-1 face-transform flex flex-col md:mb-0 mb-6 gap-3 md:gap-0 text-white font-medium md:w-[25%]">
        <h1 className="font-bigerside-expanded  font-[900] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-[90%] text-white text-start text-[20px] sm:text-[24px] md:text-[28px]">Face</h1>
    <h1 className="font-bigerside-expanded  font-[900] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-[90%] text-white text-start text-[20px] sm:text-[24px] md:text-[28px]">Transform</h1>
        <p className="w-[100%] md:w-[300px] text-sm">
        Unveil the essence of beauty, beyond appearances and into the heart of confidence.</p>
        <div className="icons flex flex-row mt-2 gap-1">
          <img src="/img/Footer/Twitter.png" alt="" />
          <img src="/img/Footer/Ig.png" alt=""  />
          <Facebook />
          <img src="/img/Footer/You tube.png" alt="" />
        </div>
      </div>

      <div className="section-2 flex flex-col items-start text-white font-semibold md:w-[20%] md:mb-0 mb-6 gap-2 md:gap-0">
      <h1 className="font-bigerside-expanded font-[700] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-[90%] text-white text-start text-[20px] sm:text-[24px] md:text-[20px]">Quich Links</h1>
        <div className="links flex flex-col gap-3 text-[16px] font-medium">
          <a href="/aboutus" className="hover:text-[#D6AF96]">About Us</a>
          <a href="/service" className="hover:text-[#D6AF96]">Service</a>
          <a href="/pricing" className="hover:text-[#D6AF96]">Pricing</a>
          <a href="/blog" className="hover:text-[#D6AF96]">Blog</a>
        </div>
      </div>

      <div className="section-3 text-white font-semibold md:w-[25%] md:mb-0 mb-6 gap-2 md:gap-0">
      <h1 className="font-bigerside-expanded font-[700] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-[90%] text-white text-start text-[20px] sm:text-[24px] md:text-[20px]">Contact Us</h1>
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
      <h1 className="font-bigerside-expanded font-[700] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-[90%] text-white text-start text-[20px] sm:text-[24px] md:text-[20px]">Newsletter</h1>
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
