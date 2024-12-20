'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Camera, FileText, Type } from 'lucide-react'

export default function PostServicePage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    if (imageFile) {
      formData.append('image', imageFile)
    }

    console.log({ title, description, imageFile })

    router.push('/')
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6c7b3] to-[#f5e5d3] flex justify-center items-center p-4 relative">
      <div className="absolute top-16 left-8 w-40 h-40 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 right-16 w-56 h-56 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105 duration-200">
        <div className="md:flex">
          <div className="md:flex-1 p-6 md:p-8">
            <h1 className="text-3xl font-bold mb-6 text-center md:text-left text-blue-700">
              Post a New Service
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <div className="relative group">
                  <Type className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-600 transition duration-150" size={18} />
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-200 group-hover:shadow-lg"
                    placeholder="Enter service title"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <div className="relative group">
                  <FileText className="absolute left-3 top-3 text-gray-400 group-hover:text-blue-600 transition duration-150" size={18} />
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    rows={4}
                    className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-200 group-hover:shadow-lg"
                    placeholder="Describe your service"
                  ></textarea>
                </div>
              </div>
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Image
                </label>
                <div className="relative group">
                  <Camera className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-600 transition duration-150" size={18} />
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                    className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-200 group-hover:shadow-lg"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
              >
                Post Service
              </button>
            </form>
          </div>
          <div className="hidden md:block md:flex-1 bg-blue-100 p-8">
            <div className="h-full flex flex-col justify-center items-center text-center transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">Why Post a Service?</h2>
              <ul className="list-disc list-inside text-left space-y-2 text-gray-700">
                <li>Reach a wider audience</li>
                <li>Showcase your expertise</li>
                <li>Grow your business</li>
                <li>Connect with potential clients</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
