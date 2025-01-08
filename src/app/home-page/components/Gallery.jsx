"use client"
import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch('/api/gallery');
        const data = await response.json();

        if (response.ok) {
          setImages(data);
        } else {
          console.error('Error fetching gallery:', data.error);
        }
      } catch (error) {
        console.error('Error fetching gallery:', error);
      }
    };

    fetchGallery();
  }, []);

  return (
    <div className="flex flex-col md:h-auto bg-[#DED0C5]">
      <div className="section-1 ml-4 sm:ml-8 mt-20 sm:mt-32 md:mt-14 mb-8">
        <h1
          className="font-bigerside-expanded font-[800] md:text-[80px] text-[50px] text-white [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] text-center md:text-start mb-10"
        >
          GALLERY
        </h1>
        <p className="text-[#796355] text-base text-[16px] font-medium text-center sm:text-start leading-relaxed mb-8 sm:w-[90%] md:w-[60%] mx-auto sm:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="section-2 flex flex-wrap justify-center gap-5 mb-6 px-4">
        {images.map((image, index) => (
          <div
            key={image._id || index}
            className="flex flex-col md:w-[20%] px-6 sm:px-8 py-6 md:px-0 md:py-0 gap-6 relative"
          >
            <img
              src={image.imageUrl}
              className="w-full max-w-[275px] mx-auto"
              alt={image.title || 'Gallery Image'}
            />
            <div className="container-text py-3 px-6 border rounded-[10px] text-[14px] font-semibold bg-gradient-to-b from-[#F0DDD1] via-[#FFFFFF] to-[#DFD8D4]">
              <p>{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
