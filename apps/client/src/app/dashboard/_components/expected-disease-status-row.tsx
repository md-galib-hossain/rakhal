import StatsCard from "@/components/ui/stats-card/stats-card";
import React from "react";

const rowData = [
  { title: "Expected Theileria", value: 2 },
  { title: "Expected Brucellosis", value: 4 },
  { title: "Expected Haermorhaggic Speticaemia (HS)", value: 3 },
  { title: "Expected Black Quarter (BQ)", value: 0 },
  { title: "Expected Foot & Mouth Disease (FMD)", value: 0 },
  { title: "Expected Deworming", value: 0 },
  { title: "Expected Calf Deworming", value: 0 },
];
const ExpectedDiseaseStatusRow = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-4 xl:gap-0 mt-4">
      {rowData.map((item, i) => (
        <StatsCard
          key={i}
          className="xl:first:rounded-tl-[0.4rem] xl:first:rounded-bl-[0.4rem] xl:last:rounded-tr-[0.4rem] xl:last:rounded-br-[0.4rem] xl:rounded-none xl:border-s-0
        xl:border-t-0 xl:border-b-0 xl:border-e-2 xl:last:border-e-0 xl:flex xl:flex-col justify-between"
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
  );
};

export default ExpectedDiseaseStatusRow;
