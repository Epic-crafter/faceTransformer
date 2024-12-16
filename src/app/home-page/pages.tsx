import React from 'react'
import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Services from './components/Services'
import About from './components/About';
import Gallery from './components/Gallery';
import Blog from "./components/Blog"
import Footer from './components/Footer';
import ContactUS from "./components/ContactUs"

const pages = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery />
      <Services />
      <Blog />
      <ContactUS />
      <About />
      <Footer />
    </div>
  )
}

export default pages
