"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
import { getLastFiveMonths } from '@/lib/utils';
const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});
const months = getLastFiveMonths();
const data = {
  labels: months,
  datasets: [
    {
      label: 'Balance',
      data: [65, 59, 80, 81, 56],
      fill: false,
      borderColor: 'rgb(52,200,90)',
      tension: 0.1,
    },
   /*  {
        label: 'Expenses',
        data: [45, 50, 60, 55, 70],
        fill: false,
        borderColor: 'rgb(255,59,48)',
        tension: 0.1,
      }, */
  ],
};
const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
const LineChart = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <h1>Balance</h1>
      <Line data={data} options={options}/>
    </div>
  );
};
export default LineChart;