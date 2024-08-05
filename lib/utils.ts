import { type ClassValue, clsx } from "clsx"
import { get } from "http";
import { twMerge } from "tailwind-merge"
import getIncomeExpense from "@/app/actions/getIncomeExpense";
import { raw } from "@prisma/client/runtime/library";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function addCommas(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getLastFiveMonths(): string[] {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const currentDate = new Date();
  const lastFiveMonths = [];

  for (let i = 0; i < 5; i++) {
    const monthIndex = currentDate.getMonth() - i;
    const adjustedIndex = monthIndex < 0 ? monthIndex + 12 : monthIndex;
    lastFiveMonths.unshift(months[adjustedIndex]);
  }

  console.log(lastFiveMonths);

  return lastFiveMonths;
}


export function countBalance(income: number, expenses: number): string {
  const balance = income - expenses;
  return addCommas(Number(balance?.toFixed(2)));
}

export async function setLineChartData() {
  const { income, expense } = await getIncomeExpense();
  console.log(income, expense);
  
  const data = {
    labels: ['Food', 'Bills', 'Investments', 'Entertainment', 'Transport', 'Clothes', 'Health', 'Travel', 'Other'],
    datasets: [
      {
        label: 'Value',
        data: [10,20,50,3,99, 300, 199, 47, 100],
        barThickness: 20,
        backgroundColor: [
          'rgba(150, 150, 156, 0.2)',
        ],
        borderColor: [
          'rgba(150, 150, 156, 1)',
        ],
        borderWidth: 1,
      },
    
    ],
  };
  console.log("data",data)
  return data;
}

export async function setDoughnutChartData() {
  const { income, expense } = await getIncomeExpense();
  console.log(income, expense);

 
  const rawData = [
    
  
      {
        label: 'Income',
        data: income,
        color: 'rgba(52, 200, 90, 0.5)',
        borderColor: 'rgba(52, 200, 90, 1)',
        borderWidth: 1,
        cutout: "50%",
      },
      {
        label: 'Expense',
        data: expense,
        color: 'rgba(255, 60, 47, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        cutout: "50%",
      },
    
  ];

  const options: any = {
    plugins: {
      responsive: true,
    },
    cutout: rawData.map((item) => item.cutout),
  };

   const data = {
    labels: rawData.map((item) => item.label),
    datasets: [
      {
        data: rawData.map((item) => item.data),
        backgroundColor: rawData.map((item) => item.color),
        borderColor: rawData.map((item) => item.color),
        borderWidth: rawData.map((item) => item.borderWidth),
        dataVisibility: new Array(rawData.length).fill(true),
      },
    ],
  };
 
/*   const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: income,
        backgroundColor: 'rgba(52, 200, 90, 0.2)',
        borderColor: 'rgba(52, 200, 90, 1)',
        borderWidth: 1,
        dataVisibility: true
      },
      {
        data: expense,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        dataVisibility: true
      },
    ],
  }; */
  console.log("data",data)
  return data;
}

