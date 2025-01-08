"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Image, Settings, Phone, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation'; 
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const pathname = usePathname(); 
  const showSidebarPages = ['/admin/serviceposting', '/admin/galleryposting', '/admin/post-blog'];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigationItems = [
    { icon: <FileText className="h-5 w-5" />, label: 'SERVICE POSTING', href: '/admin/serviceposting' },
    { icon: <Image className="h-5 w-5" />, label: 'GALLERY POSTING', href: '/admin/galleryposting' },
    { icon: <FileText className="h-5 w-5" />, label: 'B POSTING', href: '/admin/post-blog' },
  ];

  return (
    <div className="flex min-h-screen bg-[rgb(222,208,197)]">
      {/* Mobile Sidebar */}
      {isMobile && showSidebarPages.includes(pathname) && (
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
      )}

      {/* Desktop Sidebar */}
      {!isMobile && showSidebarPages.includes(pathname) && (
        <aside
          className={`hidden md:block bg-[#DCD0C5] transition-all duration-300 ease-in-out 
            ${isSidebarOpen ? 'w-64' : 'w-16'} 
            h-screen z-30 mt-[60px]`}
        >
          <div className="p-4 flex justify-between items-center">
            {isSidebarOpen && <h2 className="text-xl font-bold">POSTING PAGES</h2>}
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
      )}

   
      <main className="flex-1 flex flex-col min-h-screen w-full md:w-auto pb-16 md:pb-0">
        <div className="flex-1 overflow-y-auto">
          <div className="px-4 lg:px-10 py-4">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
