import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard - Rakhal",
  description: "Cattle Management Dashboard",
}

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
      <p className="text-muted-foreground">Coming Soon...</p>
    </div>
  )
}
