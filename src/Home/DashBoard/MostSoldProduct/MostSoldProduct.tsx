import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Top20ProductSold } from "./RetieveData";
import { ChartOptions } from 'chart.js';


// Register Chart.js components and plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function PieChart() {
  const [topProductSold] = useState({
    labels: Top20ProductSold.map((data) => data.product_name),
    datasets: [{
      label: "Product Sold",
      data: Top20ProductSold.map((data) => data.product_sold),
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#4BC0C0",
        "#9966FF"
      ]
    }]
  });

  // Options for the Pie chart
  const options: ChartOptions<'pie'> = {
    plugins: {
      legend: {
        position: 'bottom',
      },
      datalabels: {
        formatter: (value, context) => {
          const dataArr = context.chart.data.datasets[0].data as number[];
          const sum = dataArr.reduce((a, b) => a + b, 0);
          const percentage = ((value * 100) / sum).toFixed(0) + '%';
          return percentage;
        },
        color: '#fff',
        font: {
          weight: 'bold',
        },
      },
    },
  };

  return (
    <div style={{ width: "400px", height: "400px" }}>
      <Pie data={topProductSold} options={options} />
    </div>
  );
}
