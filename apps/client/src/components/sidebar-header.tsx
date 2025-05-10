"use client"

import { ThemeSwitcher } from "@/components/theme-switcher"
import { cn } from "@/lib/utils"
import { SiHappycow } from "react-icons/si";

interface SidebarHeaderProps {
  isExpanded: boolean
  isMobile: boolean
}

export function SidebarHeader({ isExpanded, isMobile }: SidebarHeaderProps) {
  return (
    <div
      className="flex items-center justify-between h-16 px-4 border-b border-sidebar-muted/30"
      onClick={(e) => {
        // Prevent clicks in the header from closing the sidebar
        if (isMobile) {
          e.stopPropagation()
        }
      }}
    >
      <div className="flex items-center">
        {/* <div className="flex items-center justify-center w-8 h-8 rounded-md bg-black">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 8L3 12L7 16" stroke="#00FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 8L21 12L17 16" stroke="#00FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 4L10 20" stroke="#00FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div> */}
        <div className="flex items-center justify-center w-8 h-8 rounded-md">
         <SiHappycow size={30}/>
        </div>
        {isExpanded && <span className="ml-2 text-lg font-semibold">Rakhal</span>}
      </div>

      {/* Theme switcher with adjusted positioning for mobile */}
      {isExpanded && (
        <div className={cn("relative", isMobile ? "mr-10" : "")}>
          <ThemeSwitcher />
        </div>
      )}
    </div>
  )
}
