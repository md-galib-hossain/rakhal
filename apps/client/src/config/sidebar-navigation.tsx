import type React from "react"
import {
  Home,
  LayoutDashboard,
  ClipboardList,
  Users,
  Shield,
  Settings,
  Bell,
  MilkIcon as Cow,
  Milk,
  CalendarClock,
  BarChart3,
  FileText,
  Syringe,
  DollarSign,
  CreditCard,
  UserCircle,
  Mail,
  Building,
} from "lucide-react"

export interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  isActive?: boolean
  submenu?: NavItem[]
}

export const sidebarNavigation: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Cow Management",
    href: "/cows",
    icon: Cow,
    submenu: [
      {
        title: "All Cows",
        href: "/cows",
        icon: Cow,
      },
      {
        title: "Add New Cow",
        href: "/cows/new",
        icon: Cow,
      },
    ],
  },
  {
    title: "Milk Management",
    href: "/milk",
    icon: Milk,
  },
  {
    title: "Inseminations",
    href: "/inseminations",
    icon: Syringe,
  },
  {
    title: "Lactations",
    href: "/lactations",
    icon: CalendarClock,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    title: "Events",
    href: "/events",
    icon: CalendarClock,
  },
  {
    title: "Tasks",
    href: "/tasks",
    icon: ClipboardList,
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
    submenu: [
      {
        title: "Profile",
        href: "/profile",
        icon: UserCircle,
      },
      {
        title: "Email Address",
        href: "/email",
        icon: Mail,
      },
      {
        title: "Organization",
        href: "/organization",
        icon: Building,
      },
    ],
  },
  {
    title: "Security",
    href: "/security",
    icon: Shield,
  },
  {
    title: "Payments",
    href: "/payments",
    icon: DollarSign,
    submenu: [
      {
        title: "Subscriptions",
        href: "/subscriptions",
        icon: CreditCard,
      },
      {
        title: "Billing",
        href: "/billing",
        icon: CreditCard,
      },
    ],
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
]
