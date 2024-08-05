"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
import { setLineChartData } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { type LineChartData } from '@/types/Charts';
import Balance from '@/components/Balance';

const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
  ssr: false,
});

  const BarChart = () => {
    const [data, setData] = useState<LineChartData | null>(null);
  
    useEffect(() => {
      async function fetchData() {
        const chartData = await setLineChartData();
        setData(chartData);
        console.log("chartData", chartData)
      }
      fetchData();
    }, []);
  console.log("data2", data)
    if (!data) return <div className='loading-container'>Loading...</div>;
  
  
  return (
    <div className='chart-container' >
      <h1>Income and Expense</h1>
      <Bar data={data} />
    </div>
  );
};
export default BarChart;