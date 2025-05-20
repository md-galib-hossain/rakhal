import StatsCard from "@/components/ui/stats-card/stats-card";
import CardHeading from "@/components/ui/card/card-heading";
import { BsExclamationCircle } from "react-icons/bs";

const secondRow = [
  { title: "Inseminated Cattle", value: 0 },
  { title: "Calf & Heifer", value: 5 },
  { title: "Pregnant Cattle", value: 3 },
  { title: "Open Cattle", value: 9 },
  { title: "Dry Cattle", value: 0 },
  { title: "Issue Cattle", value: 5 },
];

const secondRow2ndCol = [
  { title: "Average Dim", value: 245.41, recommendedValue: "<200" },
  { title: "% Of Pregnant Cattle", value: 29.41, recommendedValue: "<200" },
  { title: "% Of Dry Cattle", value: 0, recommendedValue: "<200" },
  { title: "Average Dry Days", value: 0, recommendedValue: "<200" },
];

const cardColors = [
  "#DDF6D2",
  "#FDAB9E",
  "#B4EBE6",
  "#FFF574",
  "#A0DEFF",
  "#E5D0AC",
];

export default function CurrentStatusRow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <StatsCard className="flex flex-col justify-between items-start gap-12">
        <CardHeading>Current Situation</CardHeading>
        <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-2">
          {secondRow.map((item, i) => (
            <StatsCard
              key={i}
              style={{ backgroundColor: cardColors[i] }}
              className="border-none"
            >
              <StatsCard.Header
                title={item.title}
                titleClassName="text-base text_brand_secondary"
              />
              <StatsCard.Content
                value={item.value}
                valueClassName="text-4xl font-bold text_brand_primary"
              />
            </StatsCard>
          ))}
        </div>
      </StatsCard>
      <div className="grid grid-cols-2 gap-4">
        {secondRow2ndCol.map((item, i) => (
          <StatsCard key={i}>
            <StatsCard.Header
              title={item.title}
              titleClassName="text-base text_brand_secondary"
            />
            <StatsCard.Content
              value={item.value}
              valueClassName="text-4xl font-bold text_brand_primary"
            />
            <StatsCard.Footer className="text_brand_secondary text-sm font-medium">
              <div className="flex items-center justify-between">
                <p className="">{`Recommended ${item.recommendedValue}`}</p>
                <BsExclamationCircle className="hover:fill-slate-700 transition-colors" />
              </div>
            </StatsCard.Footer>
          </StatsCard>
        ))}
      </div>
    </div>
  );
}