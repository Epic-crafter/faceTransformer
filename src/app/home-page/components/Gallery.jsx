"use client"
import Image from 'next/image';
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
    <div className="flex flex-col mt-10 bg-[#DED0C5] px-6 md:p-12">
      <div className="section-1 text-center sm:text-left mb-12">
        <h1 className="font-bigerside-expanded font-[800] text-[50px] sm:text-[60px] text-white [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] mb-6">
          GALLERY
        </h1>
        <p className="text-[#796355] text-base text-[16px] font-medium leading-relaxed sm:w-[90%] md:w-[60%] mx-auto sm:mx-0">
          Behold a visual symphony of beauty, captured frame by frame. Our gallery shows art in transformation, radiance, and personality. Every image is linked to the story of nurture, style, and the way toward embracing true beauty. Chic, astound, get inspired, and undertake your beauty journey.
        </p>
      </div>

      <div className="section-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2">
        {images.map((image, index) => (
          <div
            key={image._id || index}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Image fill
              src={image.imageUrl}
              className="w-full h-[200px] object-cover"
              alt={image.title || 'Gallery Image'}
            />
            <div className="container-text py-4 px-6 text-[14px] font-semibold bg-white">
              <p className="truncate">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
