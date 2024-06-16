'use client'

import { data } from '@/data/data'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const WorkLocationTrends = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} className='[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800'>
          <XAxis dataKey="name" stroke="#888888" fontSize={12} />
          <YAxis stroke="#888888" fontSize={12} />

          <Tooltip 
          separator=': ' 
          formatter={(value, name) => {
            if(name === 'wfh'){
              return [value, "Work from home"]
            }
            else if(name === 'office'){
              return [value, 'Work from office']
            }
          }}
          labelClassName='font-bold tracking-wide'
          wrapperClassName='!text-sm dark:!bg-black rounded-md dark:!border-border' />
          <Legend iconType='circle' formatter={(value) => {
            if(value === 'wfh'){
              return <div className='text-sm'>Work from Home</div>
              }
              else if (value === 'office'){
                return <div className='text-sm'>Work from Office</div>
                }
                } } />
                <Bar dataKey="office" stackId={1} fill="#ec4899" />
                <Bar dataKey="wfh" stackId={1} fill="#c8d1e2" radius={[4,4,0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    )
}

export default WorkLocationTrends