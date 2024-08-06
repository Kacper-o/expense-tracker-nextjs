"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { setDoughnutChartData } from "@/lib/utils";
import { useState, useEffect } from "react"
import { type DoughnutChartData } from "@/types/Charts";


const Doughnut = dynamic(() => import('react-chartjs-2').then((mod) => mod.Doughnut), {
  ssr: false,
});

ChartJS.register(ArcElement, Tooltip, Legend);


function DoughnutChart() {
  const [data, setData] = useState<DoughnutChartData | null>(null);
  useEffect(() => {
    async function fetchData() {
      const chartData = await setDoughnutChartData();
      setData(chartData);
      console.log("chartData", chartData)
    }
    fetchData();
  }, []);

  const options: any = {
    plugins: {
      responsive: true,
      legend: {
        display: false
      }
    },
  };
console.log("data2", data)
  if (!data) return <div className="loading-container">Loading...</div>;
 

  return <Doughnut data={data} options={options} className="doughnut-chart" />
 
}

export default DoughnutChart