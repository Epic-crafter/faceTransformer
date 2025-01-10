"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, FileText, Image, Settings, Phone, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const pathname = usePathname();
  const showSidebarPages = [
    "/admin/serviceposting",
    "/admin/galleryposting",
    "/admin/post-blog",
    "/admin/deleteblog",
    "/admin/deleteservices",
    "/admin/deletegallery",
    "/admin/getcontactus",
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigationItems = [
    {
      icon: <FileText className="h-5 w-5" />,
      label: "SERVICE POSTING",
      href: "/admin/serviceposting",
    },
    {
      icon: <Image className="h-5 w-5" />,
      label: "GALLERY POSTING",
      href: "/admin/galleryposting",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      label: "BLOG POSTING",
      href: "/admin/post-blog",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      label: "DELETE BLOG",
      href: "/admin/deleteblog",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      label: " DELETE SERVICES",
      href: "/admin/deleteservices",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      label: " DELETE GALLERY",
      href: "/admin/deletegallery",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      label: " GET CONTACT US",
      href: "/admin/getcontactus",
    },
  ];

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 flex flex-col relative min-h-screen bg-[#e6c7b3]  overflow-y-auto w-full md:w-auto md:px-10 md:pb-0">
        <div className="w-full p-3 bg-white absolute top-0 left-0">
          <SidebarTrigger className=" w-10" /> </div>
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout;
