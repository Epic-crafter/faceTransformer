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
    <div className="flex flex-wrap bg-[#DED0C5] pb-6 relative pt-16">
      <div className="hero-section-1 w-full md:w-[60%] mt-[100px] z-20 px-6 md:px-12">
        <div className='flex flex-col'>
      <h1
  className="font-bigerside-expanded  font-[900] max-[368px]:text-[50px] text-[60px] md:text-[90px] leading-none  text-white [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]"
>
Face
</h1>
<h1
  className=" font-[900] max-[368px]:text-[50px] text-[60px] md:text-[90px] leading-none text-white [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]"
>
Transformer
</h1>
</div>
        <p className="text-[#796355] text-[16px] font-medium leading-relaxed mb-8">
        Unveil the essence of beauty, beyond appearances and into the heart of confidence, self-care, and timeless elegance. 
        Welcome to Beyond Beauty—where your journey to feeling and looking your best begins.
        </p>
        <div className="img-section flex flex-wrap gap-5 justify-center">
          <div onClick={() => handleBothImages("/img/Home-page/hero-section-2-strip-img/enhance.png", "/img/Home-page/hero-menu-img/GAL1.png")}>
            <img
              onClick={() => handleText("/img/Home-page/hero-section-2-strip-img/enhance.png")}
              className="hidden"
              src="/img/Home-page/hero-section-2-strip-img/enhance.png"
              alt=""
            />
            <img
              onClick={() => handleImageClick("/img/Home-page/hero-menu-img/GAL1.png")}
              className="w-[199px] hover:opacity-90 cursor-pointer"
              src="/img/Home-page/hero-menu-img/GAL1.png"
              alt="Gallery Image 1"
            />
          </div>

          <div className='image-1-text' onClick={() => handleBothImages("/img/Home-page/hero-section-2-strip-img/restore.png", "/img/Home-page/hero-menu-img/GAL2.png")}>
            <img
              onClick={() => handleText("/img/Home-page/hero-section-2-strip-img/restore.png")}
              className="hidden"
              src="/img/Home-page/hero-section-2-strip-img/restore.png"
              alt=""
            />
            <img
              onClick={() => handleImageClick("/img/Home-page/hero-menu-img/GAL2.png")}
              className="w-[199px] hover:opacity-90 cursor-pointer"
              src="/img/Home-page/hero-menu-img/GAL2.png"
              alt="Gallery Image 2"
            />
          </div>

          <div onClick={() => handleBothImages("/img/Home-page/hero-section-2-strip-img/confidence.png", "/img/Home-page/hero-menu-img/GAL3.png")}>
            <img
              onClick={() => handleText("/img/Home-page/hero-section-2-strip-img/confidence.png")}
              className="hidden"
              src="/img/Home-page/hero-section-2-strip-img/confidence.png"
              alt=""
            />
            <img
              onClick={() => handleImageClick("/img/Home-page/hero-menu-img/GAL3.png")}
              className="w-[199px] hover:opacity-90 cursor-pointer"
              src="/img/Home-page/hero-menu-img/GAL3.png"
              alt="Gallery Image 3"
            />
          </div>
        </div>
      </div>

      <div className="hero-section-2 w-full md:w-[40%] flex justify-center bg-[url('/img/imgggg 1.png')]">
        <div className="w-[100vw] h-[500px] md:h-[720px] flex justify-center relative bg-cover mt-8 md:mt-0">
          <div
            className={`z-20 absolute top-0 left-0 object-cover transition-transform duration-500 ${
              isSliding ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <img className="md:h-[700px] h-[500px]" src={currentText} />
          </div>
          <div
            className={`absolute top-0 left-0 h-full w-full object-cover transition-transform duration-500 ${
              isSliding ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <img className="h-full w-full object-cover" src={currentImage} alt="Foreground Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
