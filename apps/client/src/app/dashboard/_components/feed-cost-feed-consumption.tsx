import React from "react";
const rowData = [
  {
    title: "Feed Cost This Month",
    value: "₹ 30,000",
    date: "July 2021",
  },
  {
    title: "Current Per Day Feed Consumption",
    value: "₹ 36.68",
  },
];

const FeedCostFeedConsumption = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {rowData.map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center h-36 rounded-lg shadow bg-white text-center p-4"
        >
          <div className="text-base font-medium text_brand_secondary mb-1">
            {item.title}
          </div>
          <div className="text-3xl font-bold text_brand_primary mb-1 flex items-end gap-1">
            {item.value}
          </div>
          <div className="text-sm text_brand_secondary">{item.date}</div>
        </div>
      ))}
    </div>
  );
};

export default FeedCostFeedConsumption;
