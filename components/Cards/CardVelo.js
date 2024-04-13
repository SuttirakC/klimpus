import React, { useEffect } from "react";
import Chart from 'chart.js/auto';

export default function CardVelo() {
  useEffect(() => {
    const config = {
      type: "line",
      data: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#FC6338",
            borderColor: "#FC6338",
            data: [1.65, 1.76, 1.54, 1.63, 1.49, 1.59, 1.68],
            fill: false,
          },
          // {
          //   label: new Date().getFullYear() - 1,
          //   backgroundColor: "#fff",
          //   borderColor: "#fff",
          //   data: [40, 68, 86, 74, 56, 60, 87],
          //   fill: false,
          // },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          title: {
            display: false,
            text: "Sales Charts",
            font: {
              weight: 'bold',
              size: 18,
            },
            color: "black",
          },
          legend: {
            display: true,
            labels: {
              color: "black",
            },
            align: "end",
            position: "bottom",
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
        },
        scales: {
          x: {
            ticks: {
              color: "black",
            },
            display: true,
            title: {
              display: false,
              text: "Month",
              color: "black",
            },
            grid: {
              display: false,
              borderDash: [2],
              borderDashOffset: [2],
              color: "rgba(33, 37, 41, 0.3)",
              zeroLineColor: "rgba(33, 37, 41, 0.3)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
          y: {
            ticks: {
              color: "black",
            },
            display: true,
            title: {
              display: false,
              text: "Value",
              color: "black",
            },
            grid: {
              borderDash: [3],
              borderDashOffset: [3],
              drawBorder: false,
              color: "rgba(33, 37, 41, 0.2)",
              zeroLineColor: "rgba(33, 37, 41, 0.15)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        },
      },
    };
    const ctx = document.getElementById("line-chart-velo").getContext("2d");
    new Chart(ctx, config);
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-3xl bg-white">
        <div className="rounded-t mt-2 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-slate-400 mb-1 text-xs font-semibold">
                Tap Water Usage @ the underground water tank inlet
              </h6>
              <h2 className="text-xl font-semibold text-slate-700">Velocity (m/s)</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-64-px">
            <canvas id="line-chart-velo"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
