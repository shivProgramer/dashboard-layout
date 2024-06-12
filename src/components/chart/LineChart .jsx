import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    if (chartRef && chartRef.current) {
      chartInstance = chartRef.current.chartInstance;
    }

    // Ensure chart destruction when component unmounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
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
        type: "linear",
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

export default LineChart;
