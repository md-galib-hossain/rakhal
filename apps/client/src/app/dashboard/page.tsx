import PageHeader from "@/components/ui/section-header";

import type { Metadata } from "next";
import ExpectedReproductiveEventsRow from "./_components/expected-reproductive-events-row";
import CurrentStatusRow from "./_components/current-cattle-status-row";

export const metadata: Metadata = {
  title: "Dashboard - Rakhal",
  description: "Cattle Management Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader>Dashboard</PageHeader>
      <ExpectedReproductiveEventsRow />
      <CurrentStatusRow />
    </div>
  );
}