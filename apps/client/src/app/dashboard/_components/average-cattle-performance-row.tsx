import StatsCard from '@/components/ui/stats-card/stats-card'
import React from 'react'
import { BsExclamationCircle } from "react-icons/bs";


const secondRow2ndCol = [
  { title: "Average Dim", value: 245.41, recommendedValue: "<200" },
  { title: "% Of Pregnant Cattle", value: 29.41, recommendedValue: "<200" },
  { title: "% Of Dry Cattle", value: 0, recommendedValue: "<200" },
  { title: "Average Dry Days", value: 0, recommendedValue: "<200" },
];

const AverageCattlePerformanceRow = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
         {secondRow2ndCol.map((item, i) => (
          <StatsCard key={i} className="">
            <StatsCard.Header
              title={item.title}
              titleClassName="text-base text_brand_secondary"
            />
            <StatsCard.Content
              value={item.value}
              valueClassName="text-4xl font-bold text_brand_primary"
            />
            <StatsCard.Footer className="text_brand_secondary bg_bran_secondary text-sm font-medium ">
              <div className="flex items-center justify-between">
                <p className="">{`Recommended ${item.recommendedValue}`}</p>
                <BsExclamationCircle className="hover:fill-slate-700 transition-colors" />
              </div>
            </StatsCard.Footer>
          </StatsCard>
        ))}
    </div>
  )
}

export default AverageCattlePerformanceRow