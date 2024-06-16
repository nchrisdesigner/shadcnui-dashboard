'use client'

import { data } from '@/data/data-pie';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const TeamDistribution = () => {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <PieChart>
        <Tooltip 
          labelClassName='font-bold tracking-wide'
          wrapperClassName='!text-sm dark:!bg-black rounded-md dark:!border-border [&_.recharts-tooltip-item]:!text-black dark:[&_.recharts-tooltip-item]:!text-white'
        />
        <Pie data={data} dataKey="value" nameKey="name">
          {data.map((dataItem,i) => {
            return (
              <Cell fill={dataItem.color} key={i} />
            )
          })}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default TeamDistribution