"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { useSidebar } from "@/context/sidebar-context"
import { useTheme } from "@/context/theme-context"
import { SidebarNav } from "@/components/sidebar-nav"
import { SidebarHeader } from "@/components/sidebar-header"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SubscriptionBox } from "@/components/subscription-box"

export function Sidebar() {
  const { isExpanded, setIsExpanded, isInteracting, setIsInteracting, isMobile } = useSidebar()
  const { variant } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Handle scroll events to show/hide scrollbar
  const handleScroll = () => {
    setIsScrolling(true)

    // Clear previous timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    // Set a timeout to hide the scrollbar after scrolling stops
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false)
    }, 1000) // Hide after 1 second of inactivity
  }

  // Add scroll event listener
  useEffect(() => {
    const navElement = navRef.current
    if (navElement) {
      navElement.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (navElement) {
        navElement.removeEventListener("scroll", handleScroll)
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  // Handle clicks outside the sidebar to close it on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile && isExpanded && !isInteracting) {
        // Check if the click is outside the sidebar
        const sidebar = document.getElementById("mobile-sidebar")
        const hamburgerButton = document.getElementById("hamburger-button")
        const themeSwitcherButton = document.querySelector(".theme-switcher-button")
        const dropdownContent = document.querySelector("[data-radix-popper-content-wrapper]")

        // Don't close if clicking on the sidebar, hamburger button, theme switcher, or dropdown
        if (
          sidebar &&
          !sidebar.contains(event.target as Node) &&
          hamburgerButton &&
          !hamburgerButton.contains(event.target as Node) &&
          themeSwitcherButton &&
          !themeSwitcherButton.contains(event.target as Node) &&
          dropdownContent &&
          !dropdownContent.contains(event.target as Node)
        ) {
          setIsExpanded(false)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobile, isExpanded, isInteracting, setIsExpanded])

  // Toggle sidebar function for mobile
  const toggleMobileSidebar = () => {
    console.log("Toggling sidebar. Current state:", isExpanded, "Mobile:", isMobile)
    setIsExpanded(!isExpanded)
  }

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isExpanded && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={(e) => {
            // Only close if not interacting with dropdown
            if (!isInteracting) {
              setIsExpanded(false)
            }
            e.stopPropagation()
          }}
          aria-hidden="true"
        />
      )}

      {/* Mobile toggle button - absolutely positioned */}
      <Button
        id="hamburger-button"
        variant="outline"
        size="icon"
        className={cn(
          "fixed top-4 left-4 z-50 md:hidden",
          isExpanded && "left-[calc(16rem-3.5rem)]", 
        )}
        onClick={toggleMobileSidebar}
        aria-label="Toggle sidebar"
        aria-expanded={isExpanded}
        aria-controls="mobile-sidebar"
      >
        {isExpanded ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span className="sr-only">Toggle Sidebar</span>
      </Button>



      {/* Sidebar */}
       <aside
        id="mobile-sidebar"
        ref={sidebarRef}
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex flex-col text-sidebar-foreground transition-all duration-300 ease-in-out",
          variant === "gradient" ? "sidebar-gradient" : "sidebar-solid", // Apply gradient or solid background
          isExpanded ? "w-64" : "w-16",
          !isExpanded && "sidebar-collapsed",
          isMobile && !isExpanded && "-translate-x-full",
          "border-r border-sidebar-muted shadow-md",
        )}
        onMouseEnter={() => !isMobile && !isInteracting && setIsExpanded(true)}
        onMouseLeave={() => !isMobile && !isInteracting && setIsExpanded(false)}
        aria-hidden={isMobile && !isExpanded}
        onClick={(e) => {
          // Prevent clicks inside the sidebar from closing it
          e.stopPropagation()
        }}
      >
        {/* Sidebar header */}
        <SidebarHeader isExpanded={isExpanded} isMobile={isMobile} />

        {/* Navigation */}
        <div
          ref={navRef}
          className={cn("flex-1 overflow-y-auto py-2 custom-scrollbar", isScrolling && "scrollbar-visible")}
        >
          <SidebarNav />

          {/* Subscription/Promo Box */}
          <div className="mt-4">
            <SubscriptionBox isExpanded={isExpanded} />
          </div>
        </div>

        {/* User profile */}
        <div className="p-4 border-t border-sidebar-muted/30">
          <div className={cn("flex items-center", isExpanded ? "justify-between" : "justify-center")}>
            <div className="flex items-center">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                <AvatarFallback>UD</AvatarFallback>
              </Avatar>
              {isExpanded && (
                <div className="ml-3">
                  <p className="text-sm font-medium">Md Galib Hossain</p>
                  <p className="text-xs text-sidebar-muted-foreground">Admin</p>
                </div>
              )}
            </div>
            {isExpanded && (
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
                <span className="sr-only">Log out</span>
              </Button>
            )}
          </div>
        </div>
      </aside>

      {/* Main content wrapper with proper padding */}
      <div className="md:pl-16">
        {/* This div ensures the main content is properly positioned relative to the sidebar */}
      </div>
    </>
  )
}
