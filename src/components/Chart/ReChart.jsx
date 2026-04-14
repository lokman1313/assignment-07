'use client'

import { Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400, fill: '#0088FE' },
  { name: 'Group B', value: 300, fill: '#00C49F' },
  { name: 'Group C', value: 300, fill: '#FFBB28' },
];

const ReChart = () => {
  return (
    <div style={{ width: '300px', height: '450px', margin: '0 auto'}}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            cornerRadius={10}
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
        <Legend  iconType="circle"></Legend>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReChart;