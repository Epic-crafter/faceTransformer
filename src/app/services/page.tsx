'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card } from "@/components/ui/card"

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const services = [
    {
      title: "LIP AUGMENTATION",
      icon: "/aboutus/image.png",
      description:
        "My expertise includes managing complex maxillofacial trauma cases, and I pride myself on my result-oriented approach and positive attitude. This focus allows me to achieve optimal results and ensure patient satisfaction, fostering happy and content patients.",
    },
    {
      title: "NOSE AUGMENTATION (RHINOPLASTY)",
      icon: "/nose-augmentation-icon.png",
      description:
        "My expertise includes managing complex maxillofacial trauma cases, and I pride myself on my result-oriented approach and positive attitude. This focus allows me to achieve optimal results and ensure patient satisfaction, fostering happy and content patients.",
    },
    {
      title: "CHEEK AUGMENTATION",
      icon: "/cheek-augmentation-icon.png",
      description:
        "My expertise includes managing complex maxillofacial trauma cases, and I pride myself on my result-oriented approach and positive attitude. This focus allows me to achieve optimal results and ensure patient satisfaction, fostering happy and content patients.",
    },
  ]

  return (
    <div>
      <div className="min-h-screen bg-[rgb(222,208,197)] p-4 sm:p-8 pb-2">
        <div className="max-w-7xl mx-auto mt-8 sm:mt-[39px]">
        <h1 className="mb-8 sm:mb-12 w-full max-w-md mx-auto text-center text-white text-[clamp(2rem,5vw,4rem)] font-[651] uppercase leading-[1.2] tracking-[0%] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] font-bigerside">
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
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={48}
                        height={48}
                        className="w-12 h-12"
                      />
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