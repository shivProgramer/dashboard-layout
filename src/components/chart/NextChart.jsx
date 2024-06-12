import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";

const NextChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = chartRef.current.chartInstance;
      if (chartInstance) {
        chartInstance.destroy(); // Destroy any existing chart instance before re-rendering
      }
    }
  }, []);

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "linear", // or 'category', 'time', 'logarithmic', etc. depending on your data
      },
      y: {
        type: "linear",
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Line Chart Example</h2>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default NextChart;
