"use client"
import React, { useState, useEffect } from 'react'
import { formatDate } from '../../../lib/format-date';
import Image from 'next/image';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blog/get-recent-3');
        const data = await res.json();
        console.log(data);
        setBlogs(data);
      } catch (err) {
        console.log("Error fetching blogs", err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className='flex flex-col mt-10 md:h-auto bg-[#DED0C5] px-4 md:p-12'>
      <div className="section-1 flex md:justify-start justify-center mt-12">
        <h1
          className="font-bigerside-expanded font-[900] text-[50px] sm:text-[60px] text-white [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] text-start mb-10"
        >
          Blog
        </h1>
      </div>

      <div className="section-2 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-[#F1EFEE] p-6 rounded-lg shadow-lg">
            <Image width={100} height={100}
              src={blog?.imageUrl || "/img/Blog/Image.png"}
              alt={blog?.title || "Blog Image"}
              className="w-full h-[250px] object-cover rounded-md"
            />
            <h1 className="font-bigerside-expanded font-[900] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] text-black text-left text-[20px] sm:text-[34px] md:text-[30px] truncate">
              {blog?.title || "Blog Title"}
            </h1>
            <p className="font-medium text-[16px] text-left">
              {typeof blog?.meta === "string" ? blog?.meta : "Meta description"}
            </p>
            <div className="user-info flex items-center gap-3 p-2">
              <Image width={100} height={100} src="/img/Blog/Avatar.png" alt={blog?.writer || "Author Avatar"} className="w-10 h-10 rounded-full" />
              <div className="flex flex-col text-[14px] font-medium text-left">
                <p>{blog?.writer || "Unknown Author"}</p>
                <span>{formatDate(blog?.upload_time)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog;
