import React from 'react'
import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Services from './components/Services'
import About from './components/About';
import Gallery from './components/Gallery';
import Blog from "./components/Blog"
import ContactUS from "./components/ContactUs"

const pages = () => {
  return (
    <div className='w-screen bg-[#DED0C5]'>
      <Hero />
      <Gallery />
      <Services />
      <Blog />
      <ContactUS />
      <About />
    </div>
  )
}

export default pages
