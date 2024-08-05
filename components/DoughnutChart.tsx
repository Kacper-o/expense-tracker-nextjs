"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { type DoughnutChartData } from "@/types/Charts";
import { setDoughnutChartData } from "@/lib/utils";
import { useState, useEffect } from "react"


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
console.log("data2", data)
  if (!data) return <div>Loading...</div>;
 

  return <Doughnut data={data}  className="doughnut-chart" />
 
}

export default DoughnutChart