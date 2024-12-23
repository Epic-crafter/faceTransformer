import React from 'react';

const Gallery = () => {
  return (
    <div className="flex flex-col md:h-auto bg-[#DED0C5]">
      <div className="section-1 ml-4 sm:ml-8 mt-20 sm:mt-32 md:mt-14 mb-8">
      <h1
  class="font-bigerside-expanded font-[800] md:text-[80px] text-[50px] text-white [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] text-center md:text-start mb-10"
>
GALLERY
</h1>
      

        <p className="text-[#796355] text-base text-[16px] font-medium text-center sm:text-start leading-relaxed mb-8 sm:w-[90%] md:w-[60%] mx-auto sm:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="section-2 flex flex-wrap justify-center gap-5 mb-6 px-4">
        <div className="flex flex-col md:w-[20%] px-6 sm:px-8 py-6 md:px-0 md:py-0 gap-6 relative">
          <img
            src="/img/Gallery/gallery-imgs-fram/1.png"
            className="w-full max-w-[275px] mx-auto"
            alt=""
          />
          <img
            className="absolute left-1/2 top-16 md:top-9 transform -translate-y-/4 -translate-x-1/2 w-[248px] h-[286px] object-cover"
            src="/img/Gallery/fram-img/IMG_5255 1.png"
            alt=""
          />
          <div className="container-text py-3 px-6 border rounded-[10px] text-[14px] font-semibold bg-gradient-to-b from-[#F0DDD1] via-[#FFFFFF] to-[#DFD8D4]">
            <p>
              Captivating art made every wall its canvas. The old paint chipped
              off of the sturdy bricks that kept the city together.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:w-[20%] px-6 sm:px-8 py-6 md:px-0 md:py-0 gap-6 relative">
          <div className="container-text py-3 px-6 border rounded-[10px] font-semibold text-[14px] bg-gradient-to-b from-[#F0DDD1] via-[#FFFFFF] to-[#DFD8D4]">
            <p>
              The murals gave the city walls meaning as they grew like a
              protective barrier over the heart.
            </p>
          </div>
          <img
            src="/img/Gallery/gallery-imgs-fram/4.png"
            className="w-full max-w-[275px] mx-auto"
            alt=""
          />
          <img
            className="absolute left-1/2 top-48 md:top-44 transform -translate-x-1/2 w-[245px] h-[288px] object-cover"
            src="/img/Gallery/fram-img/IMG_5258 1.png"
            alt=""
          />
          <div className="container-text py-3 px-6 border rounded-[10px] font-semibold text-[14px] bg-gradient-to-b from-[#F0DDD1] via-[#FFFFFF] to-[#DFD8D4]">
            <p>
              The boulevard brought all different types of people together. A
              blend of cultures created a community of diverse beliefs,
              opinions, and lifestyles. The people join the melting pot and
              adopt practices from around the world.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:w-[20%] px-6 sm:px-8 py-6 md:px-0 md:py-0 gap-6 relative">
          <img
            src="/img/Gallery/gallery-imgs-fram/3 (1).png"
            className="w-full max-w-[275px] mx-auto"
            alt=""
          />

          <img
            className="absolute left-1/2 top-16 md:top-10 transform -translate-x-1/2 w-[245px] h-[323px] object-cover"
            src="/img/Gallery/fram-img/IMG_5302 1.png"
            alt=""
          />
          <div className="container-text py-3 px-6 border rounded-[10px] font-semibold text-[14px] bg-gradient-to-b from-[#F0DDD1] via-[#FFFFFF] to-[#DFD8D4]">
            <p>
              People rushed past my side without a second glance. A place full
              of people can be the most isolating.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:w-[20%] px-6 sm:px-8 py-6 md:px-0 md:py-0 gap-6 relative">
          <div className="container-text py-3 px-6 border rounded-[10px] font-semibold text-[14px] bg-gradient-to-b from-[#F0DDD1] via-[#FFFFFF] to-[#DFD8D4]">
            <p>
              People rushed past my side without a second glance. A place full
              of people can be the most isolating.
            </p>
          </div>
          <img
            src="/img/Gallery/gallery-imgs-fram/2.png"
            className="w-full max-w-[275px] mx-auto"
            alt=""
          />
          <img
            className="absolute left-1/2 top-48 md:top-44 transform -translate-x-1/2 w-[245px] h-[303px] object-cover"
            src="/img/Gallery/fram-img/IMG_2565_Original 1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
