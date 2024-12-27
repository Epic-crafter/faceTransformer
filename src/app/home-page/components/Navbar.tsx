"use client";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  return (
    <div className="bg-[#DED0C5] flex flex-col md:flex-row fixed w-full justify-between items-center h-16 z-40">
      <div className="logo absolute left-6 md:static md:p-4">
        <a href="/">
          <h1 className="font-bigerside-expanded uppercase font-[900] text-[50px] text-white [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]">
            Logo
          </h1>
        </a>
      </div>

      <div
        className={`nav-items font-bold text-[14px] flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center md:static absolute w-full md:w-auto top-16 md:top-auto left-0 md:left-auto md:mr-40 bg-[#DED0C5] md:bg-transparent transition-all duration-300 ${
          isClick ? "block" : "hidden md:flex"
        }`}
      >
        <a
          href="/"
          className="py-2 px-4 md:p-0 text-center md:text-left hover:underline"
        >
          HOME
        </a>
        <a
          href="/gallery"
          className="py-2 px-4 md:p-0 text-center md:text-left hover:underline"
        >
          GALLERY
        </a>
        <a
          href="/services"
          className="py-2 px-4 md:p-0 text-center md:text-left hover:underline"
        >
          SERVICES
        </a>
        <a
          href="/blog"
          className="py-2 px-4 md:p-0 text-center md:text-left hover:underline"
        >
          BLOG
        </a>
        <a
          href="/contact"
          className="py-2 px-4 md:p-0 text-center md:text-left hover:underline"
        >
          CONTACT US
        </a>
        <a
          href="/about"
          className="py-2 px-4 md:p-0 text-center md:text-left hover:underline"
        >
          ABOUT
        </a>
      </div>

      <div className="md:hidden absolute right-6">
        <button
          onClick={toggleNavbar}
          aria-expanded={isClick}
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none"
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
    </div>
  );
};

export default Navbar;
