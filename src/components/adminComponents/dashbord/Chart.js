import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



function Chart({data}) {
  if (data.loading) return 'loading'
  if (data.data === null) return 'Cant find any data!'
  return (
    <ResponsiveContainer >
    <LineChart
    data={data.data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 50,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
  </LineChart>
  </ResponsiveContainer>
  )
}

export default Chart
