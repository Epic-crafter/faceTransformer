'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Camera, Type } from 'lucide-react'

export default function PostGalleryImagePage() {
  const [title, setTitle] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const router = useRouter()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0])
      setImagePreview(URL.createObjectURL(e.target.files[0]))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', title)
    if (imageFile) {
      formData.append('image', imageFile)
    }

    console.log({ title, imageFile })

    // Example redirection
    router.push('/gallery')
  }

  return (
    <div className="min-h-screen bg-[#e6c7b3] flex justify-center items-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-2xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-3xl">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 hover:text-blue-600 transition duration-300">
            Post a Gallery Image
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Image Title
              </label>
              <div className="relative group">
                <Type className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-600 transition duration-200" size={18} />
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-200 group-hover:shadow-lg"
                  placeholder="Enter image title"
                />
              </div>
            </div>
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                Upload Image
              </label>
              <div className="relative group">
                <Camera className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-600 transition duration-200" size={18} />
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                  className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-200 group-hover:shadow-lg"
                />
              </div>
              {imagePreview && (
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Preview:</p>
                  <img src={imagePreview} alt="Preview" className="w-full h-auto rounded-md shadow-md transition-transform transform hover:scale-105" />
                </div>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md shadow-lg hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              Post Image
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
