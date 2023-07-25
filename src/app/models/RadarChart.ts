export interface RadarChart {
    labels: string[],
    datasets: {
        label: string;
        borderColor: string;
        pointBackgroundColor: string;
        pointBorderColor: string;
        pointHoverBackgroundColor: string;
        pointHoverBorderColor: string;
        data: number[]
    }[]
}