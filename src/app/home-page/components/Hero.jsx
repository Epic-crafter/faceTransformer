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
    <div className="flex flex-wrap bg-[#DED0C5] pb-6 relative">
      {/* Mobile Layout */}
      <div className="w-full md:hidden flex flex-col">
        {/* Hero Image Container */}
        <div className="w-full h-[500px] relative">
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          
          <div className={`absolute top-0 left-0 h-full w-full transition-transform duration-500 ${
            isSliding ? "translate-x-full" : "translate-x-0"
          }`}>
            <img 
              className="h-full w-full object-cover" 
              src={currentImage || "/placeholder.svg"} 
              alt="Hero Image"
            />
          </div>
          
          {/* Enhanced Centered Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <div className="text-center px-4 space-y-2">
              <h1 className="font-bigerside-expanded uppercase text-[52px] md:text-[70px] leading-[1.1] tracking-[0.05em] text-[#F5F5F5] font-black "
                  style={{
                    
                    textShadow: '2px 2px 0 rgba(0,0,0,0.2)',
                    letterSpacing: '0.02em',
                  }}>
                Beyond
              </h1>
              <h1 className="font-bigerside-expanded uppercase text-[52px] md:text-[70px] leading-[1.1] tracking-[0.05em] text-[#F5F5F5] font-black"
                  style={{
                    textShadow: '2px 2px 0 rgba(0,0,0,0.2)',
                    letterSpacing: '0.02em',
                  }}>
                Beauty
              </h1>
            </div>
          </div>
        </div>


        <div className="px-6 mt-8">
          <p className="text-[#796355] text-[16px] font-medium leading-relaxed mb-8">
            Unveil the essence of beauty, beyond appearances and into the heart of confidence, self-care, and timeless elegance. 
            Welcome to Beyond Beauty—where your journey to feeling and looking your best begins.
          </p>
          

          <div className="flex flex-wrap gap-5 justify-center">
            <div onClick={() => handleBothImages("/img/Home-page/hero-section-2-strip-img/enhance.png", "/img/Home-page/hero-menu-img/GAL1.png")}>
              <img className="w-[199px] hover:opacity-90 cursor-pointer" src="/img/Home-page/hero-menu-img/GAL1.png" alt="Gallery Image 1" />
            </div>
            <div onClick={() => handleBothImages("/img/Home-page/hero-section-2-strip-img/restore.png", "/img/Home-page/hero-menu-img/GAL2.png")}>
              <img className="w-[199px] hover:opacity-90 cursor-pointer" src="/img/Home-page/hero-menu-img/GAL2.png" alt="Gallery Image 2" />
            </div>
            <div onClick={() => handleBothImages("/img/Home-page/hero-section-2-strip-img/confidence.png", "/img/Home-page/hero-menu-img/GAL3.png")}>
              <img className="w-[199px] hover:opacity-90 cursor-pointer" src="/img/Home-page/hero-menu-img/GAL3.png" alt="Gallery Image 3" />
            </div>
          </div>
        </div>
      </div>


      <div className="hidden md:flex w-full">
        <div className="hero-section-1 w-[60%] mt-[100px] z-20 px-12">
          <div className='flex flex-col items-baseline'>
            <h1 className="font-bigerside-expanded uppercase font-[900] text-[120px] leading-none text-center text-[#F5F5F5] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]">
              Beyond
            </h1>
            <h1 className="font-bigerside-expanded uppercase font-[900] text-[120px] leading-none text-center text-[#F5F5F5] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]">
              Beauty
            </h1>
          </div>
          <p className="text-[#796355] text-[16px] font-medium leading-relaxed mb-8">
            Unveil the essence of beauty, beyond appearances and into the heart of confidence, self-care, and timeless elegance. 
            Welcome to Beyond Beauty—where your journey to feeling and looking your best begins.
          </p>
          <div className="flex flex-wrap gap-5 justify-center">
            <div onClick={() => handleBothImages("/img/Home-page/hero-section-2-strip-img/enhance.png", "/img/Home-page/hero-menu-img/GAL1.png")}>
              <img className="w-[199px] hover:opacity-90 cursor-pointer" src="/img/Home-page/hero-menu-img/GAL1.png" alt="Gallery Image 1" />
            </div>
            <div onClick={() => handleBothImages("/img/Home-page/hero-section-2-strip-img/restore.png", "/img/Home-page/hero-menu-img/GAL2.png")}>
              <img className="w-[199px] hover:opacity-90 cursor-pointer" src="/img/Home-page/hero-menu-img/GAL2.png" alt="Gallery Image 2" />
            </div>
            <div onClick={() => handleBothImages("/img/Home-page/hero-section-2-strip-img/confidence.png", "/img/Home-page/hero-menu-img/GAL3.png")}>
              <img className="w-[199px] hover:opacity-90 cursor-pointer" src="/img/Home-page/hero-menu-img/GAL3.png" alt="Gallery Image 3" />
            </div>
          </div>
        </div>
        <div className="hero-section-2 w-[40%] bg-[url('/img/imgggg 1.png')]">
          <div className="h-[720px] relative bg-cover">
            <div className={`z-20 absolute top-0 left-0 object-cover transition-transform duration-500 ${
              isSliding ? "translate-x-full" : "translate-x-0"
            }`}>
              <img className="h-[700px]" src={currentText || "/placeholder.svg"} alt="Text Overlay" />
            </div>
            <div className={`absolute top-0 left-0 h-full w-full object-cover transition-transform duration-500 ${
              isSliding ? "translate-x-full" : "translate-x-0"
            }`}>
              <img className="h-full w-full object-cover" src={currentImage || "/placeholder.svg"} alt="Foreground Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

