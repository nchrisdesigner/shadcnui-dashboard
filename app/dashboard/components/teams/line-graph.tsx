'use client'

import { data } from "@/data/support-tickets-data"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const LineGraph = () => {
  return (
    <ResponsiveContainer height={350} width="100%">
      <LineChart data={data}>
        <Tooltip
          labelClassName='font-bold tracking-wide'
          wrapperClassName='!text-sm dark:!bg-black rounded-md dark:!border-border'
        />
        <XAxis fontSize={12} dataKey="name" />
        <YAxis fontSize={12} />
        <CartesianGrid strokeDasharray="5 5" />
        <Line type="monotone" dataKey="delta" stroke="#00C49F" />
        <Line type="monotone" dataKey="alpha" stroke="#FFBB27" />
        <Line type="monotone" dataKey="canary" stroke="#FF8041" />
        <Legend formatter={(value) => <span className="capitalize">{value}</span>} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default LineGraph