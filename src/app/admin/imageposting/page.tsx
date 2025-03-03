'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Camera } from 'lucide-react'
import Image from 'next/image'

export default function PostGalleryImagePage() {
  const [imageUrl, setImageUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrl }),
      })

      if (!response.ok) {
        throw new Error('Failed to post image')
      }

      const data = await response.json()
      console.log('Image posted successfully:', data)
      router.push('/gallery')
    } catch (error) {
      console.error('Error posting image:', error)
      // Handle error (e.g., show error message to user)
    } finally {
      setIsLoading(false)
    }
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
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <div className="relative group">
                <Camera className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-600 transition duration-200" size={18} />
                <input
                  type="url"
                  id="imageUrl"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  required
                  className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-200 group-hover:shadow-lg"
                  placeholder="Enter image URL"
                />
              </div>
              {imageUrl && (
                <div className="mt-4">
                  <p className="text-sm text-gray-500 mb-2">Image Preview:</p>
                  <Image fill
                    src={imageUrl}
                    alt="Preview"
                    className="max-w-full max-h-64 border rounded shadow-lg"
                    onError={(e) => (e.currentTarget.style.display = 'none')} // Hide image if URL is invalid
                  />
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white p-3 rounded-md shadow-lg hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out disabled:opacity-50"
            >
              {isLoading ? 'Posting...' : 'Post Image'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
