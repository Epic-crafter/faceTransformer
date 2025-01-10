import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"

// Menu items.
const items = [
  {
    title: "Post blog",
    url: "/admin/post-blog",
    icon: Home,
  },
  {
    title: "Add service",
    url: "/admin/serviceposting",
    icon: Inbox,
  },
  {
    title: "Add image",
    url: "/admin/galleryposting",
    icon: Calendar,
  },
  {
    title: "Delete blog",
    url: "/admin/deleteblog",
    icon: Search,
  },
  {
    title: "Delete service",
    url: "/admin/deleteservices",
    icon: Settings,
  },
  {
    title: "Delete image",
    url: "/admin/deletegallery",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Logo</SidebarGroupLabel>
          <SidebarGroupContent className="mt-10">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
