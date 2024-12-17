// pages/index.js
import React from 'react';
import Navbar from './nav';

export default function Home() {
  return (
    <div>
      {/* Navbar with fixed positioning */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Main content container with padding to avoid overlap */}
      <div className="min-h-screen bg-[#D6CDC4] p-6 pt-20 font-sans"> {/* Add `pt-20` to push content below the fixed navbar */}
        <div className="max-w-6xl mx-auto">
          {/* Heading replaced with an Image */}
          <div className="text-center mb-4">
            <img
              src="./image.png" // Replace with the actual image path in the public folder
              alt="Resources and Insights"
              className="mx-auto w-full max-w-[72rem]"
            />
          </div>

          <p className="text-center text-[#6B6B6B] mb-8">
            The latest industry news, interviews, technologies, and resources.
          </p>

          {/* Search bar */}
          <div className="flex justify-center mb-8">
            <input
              type="text"
              placeholder="Search"
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3C3C3C]"
            />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="./image copy.png" // Replace with actual image paths in the public folder
                alt="UX review presentations"
                className="w-full h-48 object-cover p-2"
              />
              <div className="p-4">
                <span className="text-[#8F00FF] font-semibold text-sm">Design</span>
                <h2 className="text-2xl font-bold mt-2 text-[#3C3C3C]">UX review presentations</h2>
                <p className="text-[#6B6B6B] mt-2">
                  How do you create compelling presentations that wow your colleagues and impress your managers?
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src="/avatar1.jpg" // Replace with actual avatar paths in the public folder
                    alt="Olivia Rhye"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-[#3C3C3C]">Olivia Rhye</p>
                    <p className="text-sm text-[#A3A3A3]">20 Jan 2022</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/image2.jpg" // Replace with actual image paths in the public folder
                alt="Migrating to Linear 101"
                className="w-full h-48 object-cover p-2"
              />
              <div className="p-4">
                <span className="text-[#8F00FF] font-semibold text-sm">Product</span>
                <h2 className="text-2xl font-bold mt-2 text-[#3C3C3C]">Migrating to Linear 101</h2>
                <p className="text-[#6B6B6B] mt-2">
                  Linear helps streamline software projects, sprints, tasks, and bug tracking. Here&apos;s how to get started.
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src="/avatar2.jpg" // Replace with actual avatar paths in the public folder
                    alt="Phoenix Baker"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-[#3C3C3C]">Phoenix Baker</p>
                    <p className="text-sm text-[#A3A3A3]">19 Jan 2022</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/image3.jpg" // Replace with actual image paths in the public folder
                alt="Streamlining Workflows"
                className="w-full h-48 object-cover p-2"
              />
              <div className="p-4">
                <span className="text-[#8F00FF] font-semibold text-sm">Workflow</span>
                <h2 className="text-2xl font-bold mt-2 text-[#3C3C3C]">Streamlining Workflows</h2>
                <p className="text-[#6B6B6B] mt-2">
                  Tips and tricks to make your workflows more efficient and productive.
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src="/avatar3.jpg" // Replace with actual avatar paths in the public folder
                    alt="John Doe"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-[#3C3C3C]">John Doe</p>
                    <p className="text-sm text-[#A3A3A3]">18 Jan 2022</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/image4.jpg" // Replace with actual image paths in the public folder
                alt="Effective Team Collaboration"
                className="w-full h-48 object-cover p-2"
              />
              <div className="p-4">
                <span className="text-[#8F00FF] font-semibold text-sm">Collaboration</span>
                <h2 className="text-2xl font-bold mt-2 text-[#3C3C3C]">Effective Team Collaboration</h2>
                <p className="text-[#6B6B6B] mt-2">
                  How to foster effective communication and collaboration in your team.
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src="/avatar4.jpg" // Replace with actual avatar paths in the public folder
                    alt="Jane Smith"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-[#3C3C3C]">Jane Smith</p>
                    <p className="text-sm text-[#A3A3A3]">17 Jan 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
