import StatsCard from "@/components/ui/stats-card/stats-card";
import CardHeading from "@/components/ui/card/card-heading";

const secondRow = [
  { title: "Inseminated Cattle", value: 0 },
  { title: "Calf & Heifer", value: 5 },
  { title: "Pregnant Cattle", value: 3 },
  { title: "Open Cattle", value: 9 },
  { title: "Dry Cattle", value: 0 },
  { title: "Issue Cattle", value: 5 },
];

const conceptionRate = {
  title: "Conception Rate",
  value: "100%",
  recommendedValue: ">=50%",
  dateRange: "February 2023 - March 2023",
};
const pregnancyRate = {
  title: "Pregnancy Rate",
  value: "90%",
  recommendedValue: ">=50%",
  dateRange: "February 2023 - March 2023",
};

export default function CurrentStatusRow() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
      <StatsCard className="flex flex-col justify-between items-start gap-4 xl:gap-12">
        <CardHeading>Current Situation</CardHeading>
        <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-2">
          {secondRow.map((item, i) => (
            <StatsCard
              key={i}
              // style={{ backgroundColor: cardColors[i] }}
              className="border-none bg-stone-50 "
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        <ConceptionPregnancyCard item={conceptionRate} />
        <ConceptionPregnancyCard item={pregnancyRate} />
       
      </div>
    </div>
  );
}

function ConceptionPregnancyCard({ item }: { item: typeof conceptionRate }) {
  let color = {
    border: "#4a8e2e",
    bg: "#DDF6D2",
    text: "#4a8e2e",
    badge: "#88cf6c67",
  };
  if (item.title === "Pregnancy Rate") {
    color = {
      border: "#3b968e",
      bg: "#B4EBE6",
      text: "#3b968e",
      badge: "#65c6be5c",
    };
  }
  return (
    <div
      className="border-2 border-dashed rounded-[0.4rem] relative lg:mb-1 lg:me-1 min-h-[220px]"
      style={{ borderColor: color.border }}
    >
      <div
        className="w-full h-full absolute lg:top-1 lg:left-1 rounded-[0.4rem]"
        style={{ backgroundColor: color.bg }}
      >
        <div className="flex flex-col justify-center items-center gap-2 p-4 h-full ">
          <CardHeading className={`mx-auto`} /* color handled by text class below */>
            <span style={{ color: color.text }}>{item.title}</span>
          </CardHeading>
          <div className="flex flex-col items-center justify-between w-full space-y-3">
            <p className="text-6xl font-bold" style={{ color: color.text }}>
              {item.value}
            </p>
            <p
              className="font-semibold text-sm rounded-full px-3 py-1"
              style={{ color: color.text, backgroundColor: color.badge }}
            >
              Recommended {item.recommendedValue}
            </p>
            <p className="text-sm" style={{ color: color.text }}>
              {item.dateRange}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}