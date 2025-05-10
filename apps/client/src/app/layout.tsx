import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { Sidebar } from "@/components/sidebar"
import { ThemeProvider } from "@/context/theme-context"
import { SidebarProvider } from "@/context/sidebar-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rakhal - Cattle Management System",
  description: "A comprehensive cattle management system",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultColor="purple" defaultVariant="gradient">
          <SidebarProvider>
            <div className="flex min-h-screen">
              <Sidebar />
              <main className="flex-1 transition-all duration-300 ease-in-out md:ml-16 p-4 pt-16 md:pt-4">
                {children}
              </main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
