import StatsCard from "@/components/ui/stats-card/stats-card";

const firstRow = [
  { title: "Expected Heat", value: 2 },
  { title: "Expected Heifer Insemination", value: 4 },
  { title: "Expected Pregnancy Test", value: 3 },
  { title: "Expected Calving", value: 0 },
  { title: "Expected Dry", value: 0 },
];

export default function ExpectedReproductiveEventsRow() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
      {firstRow.map((item, i) => (
        <StatsCard key={i}>
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
  );
}