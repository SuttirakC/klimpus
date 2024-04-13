import React, { useEffect } from "react";
import Chart from 'chart.js/auto';

export default function CardBarChart() {
  useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#FC6338",
            borderColor: "#FC6338",
            data: [100245, 95637, 89643, 118642, 124972, 50753, 43751, 60237, 80453, 100234, 139284, 90437],
            fill: false,
            barThickness: 8,
          },
          // {
          //   label: new Date().getFullYear() - 1,
          //   fill: false,
          //   backgroundColor: "#4c51bf",
          //   borderColor: "#4c51bf",
          //   data: [27, 68, 86, 74, 10, 4, 87],
          //   barThickness: 8,
          // },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: "rgba(0,0,0,.4)",
            },
            align: "end",
            position: "bottom",
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "Month",
            },
            grid: {
              display: false,
              borderDash: [2],
              color: "rgba(33, 37, 41, 0.3)",
              zeroLineColor: "rgba(33, 37, 41, 0.3)",
              zeroLineBorderDash: [2],
            },
          },
          y: {
            display: true,
            title: {
              display: false,
              text: "Value",
            },
            grid: {
              borderDash: [2],
              drawBorder: false,
              borderDashOffset: [2],
              color: "rgba(33, 37, 41, 0.2)",
              zeroLineColor: "rgba(33, 37, 41, 0.15)",
              zeroLineBorderDash: [2],
            },
          },
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    new Chart(ctx, config);
  }, []);

  return (
    <>
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-3xl">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase text-slate-400 mb-1 text-xs font-semibold">
              Tap Water Usage
            </h6>
            <h2 className="text-slate-700 text-xl font-semibold">
              Total Liters
            </h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        {/* Chart */}
        <div className="relative h-350-px">
          <canvas id="bar-chart"></canvas>
        </div>
      </div>
    </div>
    </>
  );
}
