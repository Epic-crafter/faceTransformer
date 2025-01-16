"use client"
import React, { useState, useEffect } from 'react'

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
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
  }, []);

  return (
    <div className='flex flex-col bg-[#DED0C5] py-12 px-6'>
      <div className="section-1 flex justify-center mb-12">
        <h1
          className="font-bigerside-expanded uppercase font-[900] text-[50px] md:text-[80px] text-white text-center [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]"
        >
          Blog
        </h1>
      </div>

      <div className="section-2 grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="card bg-[#F1EFEE] p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            <img
              src={blog.imageUrl || "/img/Blog/Image.png"}
              alt={blog.title || "Blog Image"}
              className="w-full h-[200px] object-cover rounded-md mb-4"
            />
            <h1 className="font-bigerside-expanded uppercase font-[900] text-black text-center text-[20px] sm:text-[24px] md:text-[28px] line-clamp-2 mb-4">
              {blog.title || "Blog Title"}
            </h1>
            <p className="font-medium text-[16px] text-center line-clamp-3 mb-4">
              {typeof blog.meta === "string" ? blog.meta : "Meta description"}
            </p>
            <div className="user-info flex items-center gap-3">
              <img
                src="/img/Blog/Avatar.png"
                alt={blog.writer || "Author Avatar"}
                className="h-[50px] w-[50px] rounded-full object-cover"
              />
              <div className="text-[14px] font-medium">
                <h3>{blog.writer || "Unknown Author"}</h3>
                <h3>{blog.upload_time ? new Date(blog.upload_time).toDateString() : "Unknown Date"}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog;
