'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card } from "@/components/ui/card"
import Navbar from '../home-page/components/Navbar';

interface Service {
  title: string;
  description: string;
  imageURL: string;
}

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [services, setServices] = useState<Service[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch('/api/services')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        if (data.success) {
          setServices(data.services)
        } else {
          throw new Error(data.error || 'Failed to fetch services')
        }
      } catch (error) {
        console.error('Error fetching services:', error)
        setError(error instanceof Error ? error.message : 'An unknown error occurred')
      } finally {
        setIsLoading(false)
      }
    }

    fetchServices()
  }, [])

  if (isLoading) {
    return <div className="min-h-screen bg-[rgb(222,208,197)] flex items-center justify-center">Loading...</div>
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[rgb(222,208,197)] flex items-center justify-center">
        <div className="text-red-600 text-center">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p>{error}</p>
          <p className="mt-4 text-sm">Please check the console for more details.</p>
        </div>
      </div>
    )
  }

  return (
    <div>
              <Navbar />

      <div className="min-h-screen bg-[rgb(222,208,197)] p-4 sm:p-8 pb-2">
        <div className="max-w-7xl mx-auto mt-8 sm:mt-[39px]">
          <h1 className="mb-8 sm:mb-12 w-full max-w-md mx-auto text-center text-white text-[clamp(2rem,5vw,4rem)] font-[651]  leading-[1.2] tracking-[0%] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] font-bigerside">
            Services
          </h1>

          <div className="space-y-8 sm:space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="flex justify-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card
                  className={`flex flex-col sm:flex-row max-w-4xl rounded-2xl overflow-hidden shadow-lg bg-[#8d6e63] ${
                    index % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"
                  }`}
                >
                  <div
                    className={`p-6 sm:p-8 flex flex-col items-center justify-center rounded-2xl ${
                      hoveredIndex === index ? 'scale-105 transition-all' : ''
                    }`}
                    style={{
                      backgroundColor: '#d6b196',
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                      flexBasis: '250px',
                    }}
                  >
                    <div className="bg-[#f2e1d0] rounded-full p-4 mb-4">
                      {service.imageURL&&<Image
                        src={service.imageURL}
                        alt={service.title}
                        width={48}
                        height={48}
                        className="w-12 h-12"
                      />}
                    </div>
                    <h2 className="text-base sm:text-lg font-bold text-[#4d2f2f] text-center mb-3 leading-tight">
                      {service.title}
                    </h2>
                    <button className="mt-2 px-4 py-1 border border-[#4d2f2f] text-sm font-medium text-[#4d2f2f] rounded-full hover:bg-[#4d2f2f] hover:text-white transition-all">
                      Know More
                    </button>
                  </div>

                  <div className="flex-1 p-4 sm:p-6 flex items-center">
                    <p className="text-white text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

