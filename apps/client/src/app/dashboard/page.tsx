import PageHeader from "@/components/ui/section-header";

import type { Metadata } from "next";
import ExpectedReproductiveEventsRow from "./_components/expected-reproductive-events-row";
import CurrentStatusRow from "./_components/current-cattle-status-row/current-cattle-status-row";
import ExpectedDiseaseStatusRow from "./_components/expected-disease-status-row";
import AverageCattlePerformanceRow from "./_components/average-cattle-performance-row";
import TotalFinanceStatsRow from "./_components/total-finance-stats-row";
import MilkingStatsRow from "./_components/milking-stats-row";
import CostToProduceFeedToMilkRow from "./_components/cost-to-produce-feed-to-milk-row";
import FeedCostFeedConsumption from "./_components/feed-cost-feed-consumption";

export const metadata: Metadata = {
  title: "Dashboard - Rakhal",
  description: "Cattle Management Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader>Dashboard</PageHeader>
      <AverageCattlePerformanceRow/>
      <CurrentStatusRow />
      <ExpectedReproductiveEventsRow />
      <ExpectedDiseaseStatusRow/>
      <TotalFinanceStatsRow/>
      <MilkingStatsRow/>
      <CostToProduceFeedToMilkRow/>
      <FeedCostFeedConsumption/>
    </div>
  );
}