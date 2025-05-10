"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type SidebarContextType = {
  isExpanded: boolean
  setIsExpanded: (isExpanded: boolean) => void
  isInteracting: boolean
  setIsInteracting: (isInteracting: boolean) => void
  isMobile: boolean
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Initialize mobile detection and add resize listener
  useEffect(() => {
    setMounted(true)

    // Function to check if we're on mobile
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
    }

    // Initial check
    checkScreenSize()

    // Add event listener
    window.addEventListener("resize", checkScreenSize)

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  // Debug logging
  useEffect(() => {
    if (mounted) {
      console.log("Sidebar state:", { isExpanded, isMobile, isInteracting })
    }
  }, [isExpanded, isMobile, isInteracting, mounted])

  return (
    <SidebarContext.Provider value={{ isExpanded, setIsExpanded, isInteracting, setIsInteracting, isMobile }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}
