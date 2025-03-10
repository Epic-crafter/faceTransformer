"use client"
import { useState } from 'react'

const Home = () => {
  const [currentImage, setCurrentImage] = useState("/img/Home-page/imgggg 1.png");
  const [currentText, setCurrentText] = useState("/img/Home-page/hero-section-2-strip-img/enhance.png");
  const [isSliding, setIsSliding] = useState(false);

  const handleBothImages = (restoreImageSrc, galleryImageSrc) => {
    handleText(restoreImageSrc);
    handleImageClick(galleryImageSrc);  
  };

  const handleText = (newText) => {
    if (newText !== currentText) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentText(newText);
        setIsSliding(false);
      }, 500);
    }
  };

  const handleImageClick = (newImage) => {
    if (newImage !== currentImage) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentImage(newImage);
        setIsSliding(false);
      }, 500);
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-[#DED0C5]  pb-6 relative pt-16">
      <div className="w-full md:w-1/2 flex flex-col md:text-left px-6 md:p-12">
        <h1 className="font-bigerside-expanded font-extrabold text-[40px] md:text-[80px] md:w-auto w-full text-white leading-none text-shadow-md">Face</h1>
        <h1 className="font-extrabold text-[32px] md:text-[80px] text-white md:w-auto w-full leading-none text-shadow-md">Transformer</h1>
        <p className="text-[#796355] text-lg font-medium leading-relaxed mb-8 mt-4">
          Unveil the essence of beauty, beyond appearances and into the heart of confidence, self-care, and timeless elegance.
          Welcome to Face Transformer—where your journey to feeling and looking your best begins.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {[
            { text: "/img/Home-page/hero-section-2-strip-img/enhance.png", img: "/img/Home-page/hero-menu-img/GAL1.png" },
            { text: "/img/Home-page/hero-section-2-strip-img/restore.png", img: "/img/Home-page/hero-menu-img/GAL2.png" },
            { text: "/img/Home-page/hero-section-2-strip-img/confidence.png", img: "/img/Home-page/hero-menu-img/GAL3.png" }
          ].map(({ text, img }, index) => (
            <div key={index} onClick={() => handleBothImages(text, img)} className="cursor-pointer">
              <img className="w-[140px] h-64 object-cover rounded-lg md:w-[180px] hover:opacity-90" src={img} alt={`Gallery Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end relative overflow-hidden mt-10 md:mt-0">
        <div className="relative h-[500px] md:h-[700px] w-[90%] md:w-[80%]">
          <img
            className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ${isSliding ? "translate-x-full" : "translate-x-0"}`}
            src={currentText || "/placeholder.svg"} alt="Text Overlay"
          />
          <img
            className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ${isSliding ? "translate-x-full" : "translate-x-0"}`}
            src={currentImage || "/placeholder.svg"} alt="Foreground Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
