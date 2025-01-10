'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface Blog {
  _id: string
  title: string
  url: string
  imageUrl: string
  writer: string
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const router = useRouter()

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    const response = await fetch('/api/blogs')
    const data = await response.json()
    if (data.status) {
      setBlogs(data.data)
    } else {
      console.error('Failed to fetch blogs:', data.message)
    }
  }

  const deleteBlog = async (id: string) => {
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      })
      const data = await response.json()

      if (data.status) {
        setBlogs(blogs.filter(blog => blog._id !== id))
      } else {
        console.error('Failed to delete blog:', data.message)
      }
    } catch (error) {
      console.error('Error deleting blog:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map(blog => (
          <div key={blog._id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600">By {blog.writer}</p>
            <img src={blog.imageUrl} alt={blog.title} className="mt-2 w-full h-40 object-cover rounded" />
            <div className="mt-4 flex justify-between items-center">
              <a href={blog.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Read Blog
              </a>
              <button
                onClick={() => deleteBlog(blog._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}