"use client";

import * as React from "react";
import { AnimatedTestimonials } from "../../components/galary-carausel";



export default function GalleryCarousel({galleryItems}:any) {
 

  const testimonials = React.useMemo(() => 
    galleryItems?.map((item:any) => ({
      quote: item.description,
      name: item.name,
      designation: "Gallery Item",
      src: item.image,
    })), [galleryItems]
  );

  return (
    <div className="bg-[rgb(222,208,197)] pt-[7rem] px-8">
      <div className="container mx-auto max-w-6xl">
        <h1 className="mb-8 sm:mb-12 w-full max-w-md mx-auto text-center text-white text-[clamp(2rem,5vw,4rem)] font-[651]  leading-[1.2] tracking-[0%] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] font-bigerside ml-[-39px] sm:ml-[-38px]">
          Gallery
        </h1>
        <p className="text-[#766B63] text-left max-w-3xl mb-16 text-lg">
          Behold a visual symphony of beauty, captured frame by frame. Our
          gallery shows art in transformation, radiance, and personality. Every
          image is linked to the story of nurture, style, and the way toward
          embracing true beauty. Chic, astound, get inspired, and undertake
          your beauty journey.
        </p>
        {!testimonials ? (
          <>
          </>
        ) : (
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <AnimatedTestimonials 
              testimonials={testimonials} 
              autoplay={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}

