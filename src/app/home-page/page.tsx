import React from 'react'
// import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Services from './components/Services'
import About from './components/About';
// import Gallery from './components/Gallery';
import Blog from "./components/Blog"
import ContactUS from "./components/ContactUs"
import Faq from './components/Faq';
import Review from './components/Review';

const pages = () => {
  return (
    <div className='w-screen bg-[#DED0C5]'>
      <Hero />
      {/* <Gallery /> */}
      <Services />
      <Blog />
      <About />
      <Faq />
      <Review />
      <ContactUS />
    </div>
  )
}

export default pages
