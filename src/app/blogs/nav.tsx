"use client"
import {useState} from 'react'

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  return (
    <div className="w-[100%] bg-[transparent] flex flex-col md:flex-row fixed justify-center items-center h-16 z-40 px-4 md:mb-0 mb-[200px]">
      <div className="logo absolute left-8">
        <a href="/"><img src="./logo.png" alt="Logo" /></a>
      </div>
      <div
        className={`nav-items flex-col justify-center items-center md:flex md:flex-row md:gap-16 static right-0 bg-[transparent] md:bg-none transition-all duration-300 ${
          showMenu ? "flex" : "hidden"
        }`}
      >
        <a
          href="/"
          className="py-2 px-4 md:p-0 text-center md:text-left hover:text-blue-500 transition"
        >
          HOME
        </a>
        <a
          href="/gallery"
          className="py-2 px-4 md:p-0 text-center md:text-left hover:text-blue-500 transition"
        >
          GALLERY
        </a>
        <a
          href="/services"
          className="py-2 px-4 md:p-0 text-center md:text-left hover:text-blue-500 transition"
        >
          SERVICES
        </a>
        <a
          href="/blog"
          className="py-2 px-4 md:p-0 text-center md:text-left hover:text-blue-500 transition"
        >
          BLOG
        </a>
        <a
          href="/contact"
          className="py-2 px-4 md:p-0 text-center md:text-left hover:text-blue-500 transition"
        >
          CONTACT US
        </a>
        <a
          href="/about"
          className="py-2 px-4 md:p-0 text-center md:text-left hover:text-blue-500 transition"
        >
          ABOUT
        </a>
      </div>
      <div className="md:hidden flex items-center absolute right-6">
        <button
          onClick={toggleNavbar}
          className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-inset focus:ring-white"
        >
          {isClick ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      {isClick && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block p-5">
              HOME
            </a>
            <a
              href="/gallery"
              className="py-2 px-4 block md:p-0 text-center md:text-left hover:text-blue-500 transition"
            >
              GALLERY
            </a>
            <a
              href="/services"
              className="py-2 px-4 block md:p-0 text-center md:text-left hover:text-blue-500 transition"
            >
              SERVICES
            </a>
            <a
              href="/blog"
              className="py-2 px-4 block md:p-0 text-center md:text-left hover:text-blue-500 transition"
            >
              BLOG
            </a>
            <a
              href="/contact"
              className="py-2 px-4 block md:p-0 text-center md:text-left hover:text-blue-500 transition"
            >
              CONTACT US
            </a>
            <a
              href="/about"
              className="py-2 px-4 block md:p-0 text-center md:text-left hover:text-blue-500 transition"
            >
              ABOUT
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

    
    export default Navbar;