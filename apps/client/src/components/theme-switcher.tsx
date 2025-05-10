"use client"

import { useState } from "react"
import { Check, Palette, GripVertical } from "lucide-react"
import { useTheme } from "@/context/theme-context"
import { useSidebar } from "@/context/sidebar-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const themeColors = [
  {
    name: "Purple",
    value: "purple",
    solid: "bg-[hsl(262,83%,58%)]",
    gradient: "bg-gradient-to-br from-[hsl(262,83%,58%)] to-[hsl(262,83%,40%)]",
  },
  {
    name: "Dark",
    value: "dark",
    solid: "bg-[hsl(240,10%,3.9%)]",
    gradient: "bg-gradient-to-br from-[hsl(240,10%,3.9%)] to-[hsl(240,10%,10%)]",
  },
  {
    name: "Light",
    value: "light",
    solid: "bg-[hsl(0,0%,100%)] border border-gray-200",
    gradient: "bg-gradient-to-br from-[hsl(0,0%,100%)] to-[hsl(0,0%,95%)] border border-gray-200",
  },
  {
    name: "Teal",
    value: "teal",
    solid: "bg-[hsl(180,70%,45%)]",
    gradient: "bg-gradient-to-br from-[hsl(180,70%,45%)] to-[hsl(180,70%,30%)]",
  },
  {
    name: "Green",
    value: "green",
    solid: "bg-[hsl(142,76%,36%)]",
    gradient: "bg-gradient-to-br from-[hsl(142,76%,36%)] to-[hsl(142,76%,25%)]",
  },
]

export function ThemeSwitcher() {
  const { color, variant, setColor, toggleVariant } = useTheme()
  const { setIsInteracting, isMobile } = useSidebar()
  const [isOpen, setIsOpen] = useState(false)

  const handleColorChange = (newColor: string) => {
    console.log("Changing color to:", newColor)

    // Prevent the dropdown from closing the sidebar on mobile
    if (isMobile) {
      // Use setTimeout to ensure the color change happens after the click event is processed
      setTimeout(() => {
        setColor(newColor as any)
      }, 50)
    } else {
      setColor(newColor as any)
    }
  }

  const handleVariantToggle = () => {
    console.log("Toggling variant from:", variant)

    // Prevent the dropdown from closing the sidebar on mobile
    if (isMobile) {
      // Use setTimeout to ensure the variant change happens after the click event is processed
      setTimeout(() => {
        toggleVariant()
      }, 50)
    } else {
      toggleVariant()
    }
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    setIsInteracting(open)

    // Log for debugging
    console.log("Dropdown open state:", open)
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "h-8 w-8 text-sidebar-foreground",
            "theme-switcher-button", // Add a class for easier targeting in CSS
          )}
          onMouseEnter={() => !isMobile && setIsInteracting(true)}
          onMouseLeave={() => !isMobile && setIsInteracting(false)}
          onClick={(e) => {
            // Prevent event propagation to avoid closing the sidebar
            if (isMobile) {
              e.stopPropagation()
            }
          }}
        >
          <Palette className="h-5 w-5" />
          <span className="sr-only">Change theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={isMobile ? "start" : "end"}
        className="w-[200px] z-50" // Ensure high z-index
        onMouseEnter={() => !isMobile && setIsInteracting(true)}
        onMouseLeave={() => !isMobile && setIsInteracting(false)}
        onClick={(e) => {
          // Prevent event propagation to avoid closing the sidebar
          if (isMobile) {
            e.stopPropagation()
          }
        }}
      >
        {themeColors.map((t) => (
          <DropdownMenuItem
            key={t.value}
            onClick={(e) => {
              // Prevent event propagation to avoid closing the sidebar
              if (isMobile) {
                e.stopPropagation()
              }
              handleColorChange(t.value)
            }}
            className="flex items-center gap-2"
          >
            <div className={cn("w-5 h-5 rounded-full", variant === "gradient" ? t.gradient : t.solid)} />
            <span>{t.name}</span>
            {color === t.value && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={(e) => {
            // Prevent event propagation to avoid closing the sidebar
            if (isMobile) {
              e.stopPropagation()
            }
            handleVariantToggle()
          }}
          className="flex items-center gap-2"
        >
          <GripVertical className="h-5 w-5" />
          <span>{variant === "gradient" ? "Use Solid Colors" : "Use Gradient Colors"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
