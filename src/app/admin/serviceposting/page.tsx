'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Link, FileText, Type } from 'lucide-react'
// import Layout from '../layout' // Adjust the import path to your Layout component

export default function PostServicePage() {
  const [title, setTitle] = useState('') 
  const [blogLink, setBlogLink] = useState('') 
  const [description, setDescription] = useState('')
  const [imageURL, setImageURL] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = {
      title,
      description,
      blogLink,
      imageURL,
    }

    try {
      const response = await fetch('/api/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to post service')
      }

      const result = await response.json()
      console.log(result)
      setIsSuccess(true)
      
      setTimeout(() => {
        router.push('/services')
      }, 5000)
    } catch (err) {
      console.error('Error posting service:', err)
      setError('Failed to post service. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageURL(e.target.value)
  }

  return (
    // <Layout>
      <div className="min-h-screen  flex justify-center items-center p-4 relative">
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
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Blog link
                  </label>
                  <div className="relative group">
                    <Type className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-600 transition duration-150" size={18} />
                    <input
                      type="text"
                      id="bloglink"
                      value={blogLink}
                      onChange={(e) => setBlogLink(e.target.value)}
                      className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-200 group-hover:shadow-lg"
                      placeholder="Enter related blog link"
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
                  <label htmlFor="imageURL" className="block text-sm font-medium text-gray-700 mb-1">
                    Image URL
                  </label>
                  <div className="relative group">
                    <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-600 transition duration-150" size={18} />
                    <input
                      type="url"
                      id="imageURL"
                      value={imageURL}
                      onChange={handleURLChange}
                      className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-200 group-hover:shadow-lg"
                      placeholder="Enter image URL"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  {imageURL ? (
                    <img src={imageURL} alt="Image Preview" className="w-full h-56 object-cover rounded-md" />
                  ) : (
                    <p className="text-center text-gray-500">No image URL provided</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white p-3 rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Posting...' : 'Post Service'}
                </button>
              </form>

              {isSuccess && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                  <p className="font-semibold">Service submitted successfully!</p>
                  <p>Redirecting to services page in 5 seconds...</p>
                </div>
              )}

              {error && (
                <p className="text-red-500 text-center mt-2">{error}</p>
              )}
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
