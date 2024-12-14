import React from 'react'

const Gallery = () => {
  return (
    <div className='flex flex-col md:h-auto bg-[#DED0C5]'>
      <div className="section-1 ml-8 mt-14 mb-8">
        <img src="/img/Gallery/GALLERY.png" alt="" />
        <p></p>
      </div>

      <div className="section-2 flex flex-col md:flex-row justify-center gap-5 mb-6">
        <div className='flex flex-col md:w-[20%] px-32 py-10 md:px-0 md:py-0 gap-6 relative'>
            <img src="/img/Gallery/gallery-imgs-fram/1.png" className='w-[275px]' alt="" />
            <img className='absolute md:left-4 top-[75px] left-[146px] md:top-9 w-[248px] h-283 object-fill' src="/img/Gallery/fram-img/IMG_5255 1.png" alt="" />
            <div className="container-text py-3 px-6 border-1 rounded-[10px] font-semibold bg-gradient-to-b from-[#F0DDD1] via-[#FFFFFF] to-[#DFD8D4]">
                <p>Captivating art made every wall its canvas. The old paint chipped off of the sturdy bricks that kept the city together. </p>
            </div>
        </div>

        <div className='flex flex-col md:w-[20%] px-32 py-10 md:px-0 md:py-0 relative gap-6'>
            <div className="img-text container-text py-3 px-6 border-1 rounded-[10px] font-semibold bg-gradient-to-b from-[#F0DDD1] via-[#FFFFFF] to-[#DFD8D4]">
            <p>The murals gave the city walls meaning as they grew like a protective barrier over the heart.</p>
            </div>
        <img src="/img/Gallery/gallery-imgs-fram/4.png" className='w-[275px]' alt="" />
        <img className='absolute w-[245px] h-283 md:left-[15px] md:top-[167px] top-[167px] left-[143px]' src="/img/Gallery/fram-img/IMG_5258 1.png" alt="" />
            <div className="container-text img-text container-text py-3 px-6 border-1 rounded-[10px] font-semibold bg-gradient-to-b from-[#F0DDD1] via-[#FFFFFF] to-[#DFD8D4]">
            <p>The boulevard brought all different types of people together. A blend of cultures created a community of diverse beliefs, opinions, and lifestyles. The people join the melting pot and adopt practices from around the world.</p>
            </div>
        </div>

        <div className='flex flex-col md:w-[20%] px-32 py-10 md:px-0 md:py-0 gap-6 relative'>
        <img src="/img/Gallery/gallery-imgs-fram/3 (1).png" className='w-[275px]'  alt="" />
        <img className='absolute w-[245px] h-283 top-[77px] left-[143px] md:left-[15px] md:top-[32px]' src="/img/Gallery/fram-img/IMG_5302 1.png" alt="" />
            <div className="container-text img-text container-text py-3 px-6 border-1 rounded-[10px] font-semibold bg-gradient-to-b from-[#F0DDD1] via-[#FFFFFF] to-[#DFD8D4]">
                <p>People rushed past my side without a second glance.A place full of people can be the most isolating.</p>
            </div>
        </div>

        <div className='flex flex-col md:w-[20%] px-32 py-10 md:px-0 md:py-0 gap-6 relative'>
            <div className="img-text img-text container-text py-3 px-6 border-1 rounded-[10px] font-semibold bg-gradient-to-b from-[#F0DDD1] via-[#FFFFFF] to-[#DFD8D4]">
                <p>People rushed past my side without a second glance.A place full of people can be the most isolating.</p>
            </div>
        <img src="/img/Gallery/gallery-imgs-fram/2.png" className='w-[275px]' alt="" />
        <img className='absolute  w-[245px] h-283 top-[197px] left-[145px] md:left-[13px] md:top-[175px]' src="/img/Gallery/fram-img/IMG_2565_Original 1.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Gallery
