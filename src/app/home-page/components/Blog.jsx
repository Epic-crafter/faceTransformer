"use client"
import React, { useState } from 'react'
import { useEffect } from 'react';

const Blog = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(()=> {
    const fetchBlogs = async() => {
      try {
        const res = await fetch('/api/blog/get-recent-3');
        const data = await res.json();
        console.log(data)
        setBlogs(data);
      } catch (err) {
        console.log("Error fetching blogs", err);
      }
    };

    fetchBlogs();
  }, [])


  return (
    <div className='flex flex-col md:h-auto bg-[#DED0C5]'>
        <div className="section-1 md:ml-20 flex md:justify-start justify-center mt-12">
        <h1
  className="font-bigerside-expanded uppercase font-[900] md:text-[80px] text-[50px] text-white [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] text-start mb-10"
>
Blog
</h1>
        </div>

        <div className="section-2 gap-3 flex flex-col md:flex-row ml-4 mb-16">
  {blogs[0] && (
    <div className="container-1 flex flex-col bg-[#F1EFEE] p-4 mr-4 md:mr-0">
      <img
        src={blogs[0]?.imageUrl || "/img/Blog/Image.png"}
        alt={blogs[0]?.title || "Blog Image"}
      />
      <h1 className="font-bigerside-expanded uppercase font-[900] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-[90%] text-black text-center text-[20px] sm:text-[34px] md:text-[30px]">
        {blogs[0]?.title || "Blog Title"}
      </h1>
      <p className="font-medium text-[16px]">
        {typeof blogs[0]?.meta === "string" ? blogs[0]?.meta : "Meta description"}
      </p>
      <div className="user-info flex flex-row gap-2 p-2">
        <img src="/img/Blog/Avatar.png" alt={blogs[0]?.writer || "Author Avatar"} />
        <div className="flex flex-col text-[14px] font-medium">
          <h3>{blogs[0]?.writer || "Unknown Author"}</h3>
          <h3>{blogs[0]?.upload_time ? new Date(blogs[0]?.upload_time).toDateString() : "Unknown Date"}</h3>
        </div>
      </div>
    </div>
  )}

  {blogs[1] && (
    <div className="container-2 flex flex-col bg-[#F1EFEE] p-4 mr-4 md:mr-0">
      <img
        src={blogs[1]?.imageUrl || "/img/Blog/Image.png"}
        alt={blogs[1]?.title || "Blog Image"}
        className='md:h-[38vh]'
      />
      <h1 className="font-bigerside-expanded uppercase font-[900] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-[90%] text-black text-center text-[20px] sm:text-[34px] md:text-[30px]">
        {blogs[1]?.title || "Blog Title"}
      </h1>
      <p className="font-medium text-[16px]">
        {typeof blogs[1]?.meta === "string" ? blogs[1]?.meta : "Meta description"}
      </p>
      <div className="user-info flex flex-row gap-2 p-2">
        <img src="/img/Blog/Avatar.png" alt={blogs[1]?.writer || "Author Avatar"} />
        <div className="flex flex-col text-[14px] font-medium">
          <h3>{blogs[1]?.writer || "Unknown Author"}</h3>
          <h3>{blogs[1]?.upload_time ? new Date(blogs[1]?.upload_time).toDateString() : "Unknown Date"}</h3>
        </div>
      </div>
    </div>
  )}

  {blogs[2] && (
    <div className="container-3 flex flex-col bg-[#F1EFEE] p-4 mr-4 md:mr-0">
      <img
        src={blogs[2]?.imageUrl || "/img/Blog/Image.png"}
        alt={blogs[2]?.title || "Blog Image"}
      />
      <h1 className="font-bigerside-expanded uppercase font-[900] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] w-[90%] text-black text-center text-[20px] sm:text-[34px] md:text-[30px]">
        {blogs[2]?.title || "Blog Title"}
      </h1>
      <p className="font-medium text-[16px]">
        {typeof blogs[2]?.meta === "string" ? blogs[2]?.meta : "Meta description"}
      </p>
      <div className="user-info flex flex-row gap-2 p-2">
        <img src="/img/Blog/Avatar.png" alt={blogs[2]?.writer || "Author Avatar"} />
        <div className="flex flex-col text-[14px] font-medium">
          <h3>{blogs[2]?.writer || "Unknown Author"}</h3>
          <h3>{blogs[2]?.upload_time ? new Date(blogs[2]?.upload_time).toDateString() : "Unknown Date"}</h3>
        </div>
      </div>
    </div>
  )}
</div>


      
    </div>
  )
}

export default Blog
