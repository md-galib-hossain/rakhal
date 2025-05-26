import React from "react";

const chartUpperRow = [
  {
    title: "This Month Total Milking",
    value: "960",
    unit: "Kilograms",
  },
  {
    title: "This Month Average Milking",
    value: "32",
    unit: "Kilograms/Day",
  },
  {
    title: "Today's Herd Average",
    value: "0",
    unit: "Kilograms/Day",
  },
];

const MilkingStatsRow = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      
        <div className="p-2 xl:p-4 flex flex-col items-center justify-center rounded-lg shadow bg-white text-center p-4">
          <div className="text-base font-medium text_brand_secondary mb-1">
            Milking Cattle
          </div>
          <div className="text-3xl font-bold text_brand_primary mb-1">17</div>
          <div className="text-sm text_brand_secondary">June 2021</div>
          <LactationProgress />
        </div>
     
      <div className="md:col-span-2 bg-white rounded-lg shadow p-2 xl:p-4 flex flex-col h-full">
        {/* upper row start */}
        <div className="flex items-center justify-between flex-none">
          {chartUpperRow.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center p-4"
            >
              <div className="text-base font-medium text_brand_secondary mb-1">
                {item.title}
              </div>
              <div className="text-3xl font-bold text_brand_primary mb-1">
                {item.value}
              </div>
              <div className="text-sm text_brand_secondary">{item.unit}</div>
            </div>
          ))}
        </div>
        {/* upper row end */}
        <div className="border border-dashed flex-1 min-h-0 mt-2 flex items-center justify-center">
          Bar Chart should be here
        </div>
      </div>
    </div>
  );
};

export default MilkingStatsRow;

function LactationProgress() {
  return (
    <div className="w-full">
      <ProgressBar
        label="Early Lactation"
        range="(0 - 100 days)"
        value={2}
        total={17}
        color="bg-green-500"
      />
      <ProgressBar
        label="Mid Lactation"
        range="(101 - 200 days)"
        value={10}
        total={17}
        color="bg-yellow-500"
      />
      <ProgressBar
        label="Late Lactation"
        range="(201+ days)"
        value={5}
        total={17}
        color="bg-blue-500"
      />
    </div>
  );
}

function ProgressBar({
  label,
  range,
  value,
  total,
  color,
}: {
  label: string;
  range: string;
  value: number;
  total: number;
  color: string;
}) {
  const percent = (value / total) * 100;
  return (
    <div className="mb-2">
      <p className="text-start text-xs">{label}</p>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-xs text-gray-500 mt-1">{range}</span>

        <span>
          {value}/{total}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`${color} h-3 rounded-full`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
