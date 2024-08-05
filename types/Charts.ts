export interface LineChartData {
    labels: string[];
    datasets: {
        label: string;
        data: (number | undefined)[];
        barThickness: number;
        backgroundColor: string[];
        borderColor: string[];
        borderWidth: number;
    }[];
}

export interface DoughnutChartData {
    labels: string[];
    datasets: { 
        data: (number | undefined)[];
        backgroundColor: string[];
        borderColor: string[];
        borderWidth: number[];
        dataVisibility: boolean[];
    }[]
}