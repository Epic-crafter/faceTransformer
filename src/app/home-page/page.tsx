import React from 'react'
// import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Services from './components/Services'
import About from './components/About';
// import Gallery from './components/Gallery';
import Blog from "./components/Blog"
import ContactUS from "./components/ContactUs"
import Faq from './components/faq';

const pages = () => {
  return (
    <div>
      <Hero />
      {/* <Gallery /> */}
      <Services />
      <Blog />
      <ContactUS />
      <About />
      <Faq />
    </div>
  )
}

export default pages
