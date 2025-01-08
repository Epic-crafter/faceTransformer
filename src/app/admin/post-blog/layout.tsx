"use client"

import React, { useState, useEffect } from 'react'
import { Menu, X, Home, FileText, Image, Settings, Phone, Info } from 'lucide-react'
import { Button } from "@/components/ui/button"
import SequenceFormat from "./page"

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const navigationItems = [
    { icon: <Home className="h-5 w-5" />, label: 'HOME', href: '/' },
    { icon: <Image className="h-5 w-5" />, label: 'GALLERY', href: '/gallery' },
    { icon: <Settings className="h-5 w-5" />, label: 'SERVICES', href: '/services' },
    { icon: <FileText className="h-5 w-5" />, label: 'BLOG', href: '/blog' },
    { icon: <Phone className="h-5 w-5" />, label: 'CONTACT US', href: '/contact' },
    { icon: <Info className="h-5 w-5" />, label: 'ABOUT', href: '/about' },
  ]

  return (
    <div className="flex min-h-screen bg-[rgb(222,208,197)]">
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#DCD0C5] flex justify-around items-center p-2 z-30">
        {navigationItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="p-2 hover:bg-[#BFB69E] rounded-lg transition-colors duration-200"
          >
            {item.icon}
          </a>
        ))}
      </div>

      <aside
        className={`hidden md:block bg-[#DCD0C5] transition-all duration-300 ease-in-out 
          ${isSidebarOpen ? 'w-64' : 'w-16'} 
          h-screen z-30 mt-[60px]`}
      >
        <div className="p-4 flex justify-between items-center">
          {isSidebarOpen && <h2 className="text-xl font-bold">Menu</h2>}
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-700 hover:bg-[#BFB69E]"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2 py-4">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center px-4 py-2 hover:bg-[#BFB69E] transition-colors duration-200"
                >
                  {item.icon}
                  {isSidebarOpen && <span className="ml-3">{item.label}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>


      <main className="flex-1 flex flex-col min-h-screen w-full md:w-auto pb-16 md:pb-0">
        <div className="flex-1 overflow-y-auto">
          <div className="px-4 lg:px-10 py-4">
            <SequenceFormat />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Layout