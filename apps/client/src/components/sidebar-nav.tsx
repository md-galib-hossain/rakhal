"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChevronDown,
  ChevronUp,
  Home,
  LayoutDashboard,
  Droplets,
  Warehouse,
  Stethoscope,
  CalendarDays,
  BarChart3,
  Building,
  Leaf,
  Milk,
  Baby,
  Settings,
  Bell,
} from "lucide-react"
import { PiCow } from "react-icons/pi";
import { MdOutlineFoodBank } from "react-icons/md";
import { PiFarm } from "react-icons/pi";
import { LuMilk } from "react-icons/lu";
import { PiChartPieSliceDuotone } from "react-icons/pi";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";

import { cn } from "@/lib/utils"
import { useSidebar } from "@/context/sidebar-context" // Updated path from contexts to context

// Custom Cow icon since it's not in Lucide
function CowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5.5 16c.5 1 2.5 2 4.5 2s4-.99 4.5-2c0 0 2.5 0 3.5-2s-2-3-2-3c-.5-1-1-2-3-2s-3.5 1-4.5 2h-2c-1-1-2.5-2-4.5-2s-2.5 1-3 2c0 0-3 1-2 3s3.5 2 3.5 2z" />
      <path d="M5 13c-1-1-1.5-2-1.5-6 0-1 .5-2.5 2.5-2.5s3 1 3 3c0 .5-.5 2-2 2" />
      <path d="M19 13c1-1 1.5-2 1.5-6 0-1-.5-2.5-2.5-2.5s-3 1-3 3c0 .5.5 2 2 2" />
      <path d="M12 16v4" />
      <path d="M8 20h8" />
    </svg>
  )
}

type NavItem = {
  title: string
  href: string
  icon: React.ElementType
  submenu?: NavItem[]
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
 
  {
    title: "Cattle",
    href: "/cattle",
    icon: PiCow,
    // submenu: [
    //   {
    //     title: "All Cows",
    //     href: "/cows/all",
    //     icon: CowIcon,
    //   },
    //   {
    //     title: "Add New Cow",
    //     href: "/cows/new",
    //     icon: CowIcon,
    //   },
    //   {
    //     title: "Categories",
    //     href: "/cows/categories",
    //     icon: CowIcon,
    //   },
    // ],
  },
  {
    title: "Feed Management",
    href: "/feed-management",
    icon: MdOutlineFoodBank,
    // submenu: [
    //   {
    //     title: "Production",
    //     href: "/milk/production",
    //     icon: Droplets,
    //   },
    //   {
    //     title: "Sales",
    //     href: "/milk/sales",
    //     icon: Droplets,
    //   },
    // ],
  },
  {
    title: "Farm Management",
    href: "/farm-management",
    icon: PiFarm,
  },
  {
    title: "Milk",
    href: "/milk",
    icon: LuMilk,
    // submenu: [
    //   {
    //     title: "Treatments",
    //     href: "/health/treatments",
    //     icon: Stethoscope,
    //   },
    //   {
    //     title: "Vaccinations",
    //     href: "/health/vaccinations",
    //     icon: Stethoscope,
    //   },
    // ],
  },
  {
    title: "Farm Reports",
    href: "/farm-reports",
    icon: PiChartPieSliceDuotone,
  },
  {
    title: "Sales & Expenses",
    href: "/sales-expenses",
    icon: AiOutlineTransaction,
  },
  // {
  //   title: "Farm Management",
  //   href: "/farm",
  //   icon: Building,
  //   submenu: [
  //     {
  //       title: "Shades",
  //       href: "/farm/shades",
  //       icon: Building,
  //     },
  //     {
  //       title: "Pastures",
  //       href: "/farm/pastures",
  //       icon: Leaf,
  //     },
  //   ],
  // },
  // {
  //   title: "Breeding",
  //   href: "/breeding",
  //   icon: Baby,
  //   submenu: [
  //     {
  //       title: "Insemination",
  //       href: "/breeding/insemination",
  //       icon: Baby,
  //     },
  //     {
  //       title: "Lactations",
  //       href: "/breeding/lactations",
  //       icon: Milk,
  //     },
  //   ],
  // },
  {
    title: "Settings",
    href: "/settings",
    icon: IoSettingsOutline,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: GoBell,
  },
]

export function SidebarNav() {
  const pathname = usePathname()
  const { isExpanded } = useSidebar()
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title)
  }

  return (
    <nav className="space-y-1 px-2">
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
        const hasSubmenu = item.submenu && item.submenu.length > 0
        const isSubmenuOpen = openSubmenu === item.title

        return (
          <div key={item.title}>
            {hasSubmenu ? (
              <button
                onClick={() => toggleSubmenu(item.title)}
                className={cn(
                  "flex items-center w-full rounded-md px-2 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-muted hover:text-sidebar-foreground",
                  !isExpanded && "justify-center",
                )}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {isExpanded && (
                  <>
                    <span className="ml-3 flex-1 text-left">{item.title}</span>
                    {isSubmenuOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </>
                )}
              </button>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  "flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-muted hover:text-sidebar-foreground",
                  !isExpanded && "justify-center",
                )}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {isExpanded && <span className="ml-3 flex-1">{item.title}</span>}
              </Link>
            )}

            {hasSubmenu && isSubmenuOpen && isExpanded && (
              <div className="mt-1 ml-4 pl-4 border-l border-sidebar-muted">
                {item.submenu?.map((subItem) => {
                  const isSubActive = pathname === subItem.href
                  return (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className={cn(
                        "flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors",
                        isSubActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-sidebar-foreground hover:bg-sidebar-muted hover:text-sidebar-foreground",
                      )}
                    >
                      <span className="flex-1">{subItem.title}</span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}
