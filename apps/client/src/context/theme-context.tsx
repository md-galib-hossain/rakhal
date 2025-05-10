"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type ThemeColor = "purple" | "dark" | "light" | "teal" | "green"
type ThemeVariant = "solid" | "gradient"

type ThemeContextType = {
  color: ThemeColor
  variant: ThemeVariant
  setColor: (color: ThemeColor) => void
  setVariant: (variant: ThemeVariant) => void
  toggleVariant: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultColor = "purple",
  defaultVariant = "gradient",
}: {
  children: React.ReactNode
  defaultColor?: ThemeColor
  defaultVariant?: ThemeVariant
}) {
  const [color, setColor] = useState<ThemeColor>(defaultColor)
  const [variant, setVariant] = useState<ThemeVariant>(defaultVariant)
  const [mounted, setMounted] = useState(false)

  // Load saved theme from localStorage
  useEffect(() => {
    setMounted(true)
    try {
      const savedColor = localStorage.getItem("themeColor") as ThemeColor | null
      const savedVariant = localStorage.getItem("themeVariant") as ThemeVariant | null

      if (savedColor) {
        setColor(savedColor)
      }

      if (savedVariant) {
        setVariant(savedVariant)
      }
    } catch (error) {
      console.error("Error loading theme from localStorage:", error)
    }
  }, [])

  // Apply theme classes to HTML element
  useEffect(() => {
    if (!mounted) return

    try {
      const root = document.documentElement
      const isDark = color === "dark"

      console.log("Applying theme:", color, variant)

      // Remove all theme classes
      root.classList.remove(
        "theme-light",
        "theme-dark",
        "theme-purple",
        "theme-teal",
        "theme-green",
        "theme-gradient",
        "theme-solid",
      )

      // Add color theme class
      root.classList.add(`theme-${color}`)

      // Add variant class
      root.classList.add(`theme-${variant}`)

      if (isDark) {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }

      // Save theme to localStorage
      localStorage.setItem("themeColor", color)
      localStorage.setItem("themeVariant", variant)
    } catch (error) {
      console.error("Error applying theme:", error)
    }
  }, [color, variant, mounted])

  const toggleVariant = () => {
    setVariant(variant === "solid" ? "gradient" : "solid")
  }

  const value = {
    color,
    variant,
    setColor,
    setVariant,
    toggleVariant,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
