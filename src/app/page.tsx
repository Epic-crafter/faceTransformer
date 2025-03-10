import React from 'react'
import Gallery from './home-page/components/ContactUs';
import Pages from './home-page/page';
import Navbar from './home-page/components/Navbar';

const page = () => {
  return (
    <div className='w-screen overflow-x-hidden'>
            <Navbar />

      <Pages />
    </div>
  )
}

export default page