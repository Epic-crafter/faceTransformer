import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#372E27] p-10 flex flex-wrap flex-col md:flex-row justify-center items-center gap-8'>
      <div className="section-1 face-transform flex flex-col md:w-[25%] gap-4 text-white font-semibold">
        <img src="/img/Footer/FACE TRANSFROM.png" alt="" />
        <p className='w-[250px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Morbi sit amet neque tortor. </p>
            <div className="icons flex flex-row gap-5">
                <img src="/img/Footer/Twitter.png" alt="" />
                <img src="/img/Footer/Ig.png" alt="" />
                <img src="/img/Footer/FB.png" alt="" />
                <img src="/img/Footer/You tube.png" alt="" />
            </div>
      </div>

      <div className="section-2 md:w-[10%] gap-4  text-white font-semibold">
      <h2 className='text-xl'>Quick Links</h2>
      <div className="links flex flex-col gap-3 mt-8 text-white font-semibold">
        <a href="/aboutus">About Us</a>
        <a href="/service">Service</a>
        <a href="/pricing">Pricing</a>
        <a href="/blog">Blog</a>
      </div>
      </div>

      <div className="section-3 md:w-[25%] text-white font-semibold">
        <h2 className='text-xl'>Contact Us</h2>
        <div className="info-container flex flex-col gap-4 mt-8">
        <div className="info-1 flex flex-row items-center">
  <img src="/img/Footer/Vector.png" alt="Icon" className="w-4 h-4" />
  <p className="ml-2">hello@website.com</p>
</div>

          <div className="info-2 flex flex-row items-center">
            <img src="/img/Footer/Group 62.png" className='w-5 h-5' alt="" />
            <p className='ml-2'>Riverside Building, County Hall, London SE1 7PB, United Kingdom</p>
          </div>

          <div className="info-3 flex flex-row items-center">
            <img src="/img/Footer/Group 63.png" className='w-5 h-5' alt="" />
            <p className='ml-2'>451-484-5939</p>
          </div>
        </div>
      </div>

      <div className="section-4 text-white font-semibold gap-8">
        <h1 className='text-xl'>Newsletter</h1>
        <div className='flex mt-20'>
        <input type="text" placeholder='Enter your email' className='md:px-8 md:py-5 rounded-l-[10px]'/>
        <button className='bg-[#D6AF96] rounded-r-[10px] px-5 py-3'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
