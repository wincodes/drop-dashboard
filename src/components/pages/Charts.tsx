import * as React from "react";
import { useState } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

export default () => {
  const [backgroundColor1, setBackgroundColor1] = useState("#DC6041");
  const [backgroundColor2, setBackgroundColor2] = useState("#121C29");

  const [chartData, setChartData] = useState({
    labels: ["1 Oct", "8 Oct", "15 Oct", "20 Oct", "24 Oct", "28 Oct"],
    datasets: [
      {
        id: 1,
        label: "",
        data: [
          900, 1100, 100, 1400, 1800, 1550, 1800, 2300, 2050, 1400, 1400, 1600,
        ],
        backgroundColor: backgroundColor1,
        borderWidth: 3,
        borderColor: backgroundColor1,
      },
      {
        id: 2,
        label: "",
        data: [1400, 1100, 700, 700, 1400, 1450],
        backgroundColor: backgroundColor2,
        borderWidth: 3,
        borderColor: backgroundColor2,
      },
    ],
    options: {
      // label:
    },
  });
  return (
    <div className="px-4 py-5 sm:p-6">
      <Chart type="line" data={chartData} />
      <div className="py-8 flex items-center text-gray-400 font-semibold text-sm">
        <div className="flex items-center">
          <span
            className="indicator"
            style={{ backgroundColor: backgroundColor1 }}
          ></span>
          <span className="px-3"> YTD (2021) </span>
        </div>
        <div className="flex items-center px-10">
          <span
            className="indicator"
            style={{ backgroundColor: backgroundColor2 }}
          ></span>
          <span className="px-3"> Last Year (2020) </span>
        </div>
      </div>
    </div>
  );
};
