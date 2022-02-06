import * as React from "react";
import { useRef, useState, useEffect } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { useDrop } from "react-dnd";

const Charts = () => {
  const [backgroundColor1, setBackgroundColor1] = useState<string>(
    "#DC6041" as string
  );
  const [backgroundColor2, setBackgroundColor2] = useState<string>(
    "#121C29" as string
  );
  const [showing, setShowing] = useState<boolean>(true as boolean);
  const [type, setType] = useState<string>("line" as string);
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "div",
    drop(details: any) {
      setShowing(false);
      setChartData(details.data);
      setBackgroundColor1(details.backgroundColor1);
      setBackgroundColor2(details.backgroundColor2);
      setType(details.chart);
      setShowing(true);
    },
  });
  drop(ref);

  const [chartData, setChartData] = useState<any>({
    labels: ["1 Oct", "8 Oct", "15 Oct", "20 Oct", "24 Oct", "28 Oct"],
    datasets: [
      {
        id: 1,
        label: "",
        type: "line",
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
        type: "line",
        data: [1400, 1100, 700, 700, 1400, 1450],
        backgroundColor: backgroundColor2,
        borderWidth: 3,
        borderColor: backgroundColor2,
      },
    ],
  } as any);
  return (
    <div className="px-4 py-5 sm:p-6" ref={ref}>
      {showing && <Chart type={type as any} data={chartData as any} />}
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

export default Charts;
