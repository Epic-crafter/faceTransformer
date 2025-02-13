import React from 'react'

const About = () => {
  return (
    <div className='flex md:flex-row flex-col md:h-auto bg-[#DED0C5]'>
      <div className="section-1 pt-20 pb-6 md:ml-8 mt-6 w-auto md:w-[50%]">
        <div className='text-img ml-4 py-6'>
        <h1
  className="font-bigerside-expanded  font-[900] md:text-[80px] text-[50px] text-white [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] text-start"
>
About Us
</h1>
        </div>
        <div className="text-section text-[#796355] font-semibold px-12 md:mb-40 text-[16px]">
          <p>Welcome to Beyond Beauty, a pioneer in ensuring that beauty goes beyond the surface. We assist you to feel and look amazing and astounding through transformation and personalized aesthetic treatments. With a fine blend of talented artisans and modern techniques, results are delivered to elegantly enhance your natural self while remaining in balance.</p>
          <br />
          <p>My priority at Beyond Beauty is always your comfort and confidence. This means you’ll enjoy a seamless, rewarding experience with us at every stage, from the first consultation to the last post-procedure after-care by caring professionals. Whether you aim for a subtle enhancement or a full transformation, we will work to get you there.</p>
          <br />
          <p>Experience individualized care, professionalism, and results that speak for itself. At Beyond Beauty, your journey toward eternal elegance starts now. </p>
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
