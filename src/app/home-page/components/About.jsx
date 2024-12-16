import React from 'react'

const About = () => {
  return (
    <div className='flex md:flex-row flex-col md:h-auto bg-[#DED0C5]'>
      <div className="section-1 pt-20 pb-6 ml-8 mt-6 w-auto md:w-[50%]">
        <div className='text-img ml-4 py-6'>
        <img src="/img/AboutUs/about us.png" alt="" />
        </div>
        <div className="text-section text-[#796355] text-md px-12 md:mb-40 font-semibold">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

      </div>
      <div className="section-2 md:flex flex-col md:w-[50%] md:relative bg-[#DED0C5] hidden">
        <img className='absolute md:right-12 md:top-20' src="/img/AboutUs/Rectangle 21.png" alt="" />
        <img className='absolute md:top-60 md:right-80' src="/img/AboutUs/Rectangle 21.png" alt="" />
      </div>
    </div>
  )
}

export default About
