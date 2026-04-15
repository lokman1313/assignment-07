'use client'

import { InterectiveContext } from '@/context/Interectiv.context';
import { useContext } from 'react';
import { Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';
const ReChart = () => {

  const {call,text,videoCall} =useContext(InterectiveContext)
  const data = [
    { name: 'Call', value: call.length , fill: '#244D3F' },
    { name: 'Text', value: text.length , fill: '#7E35E1' },
    { name: 'Video Call', value: videoCall.length , fill: '#37A163' },
  ];

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