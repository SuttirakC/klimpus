import React, { useEffect } from "react";
import Chart from 'chart.js/auto';

export default function CardLineChartAHU() {
  useEffect(() => {
    const config = {
      type: "line",
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
            label: "Chiller No.1",
            backgroundColor: "#B101B5",
            borderColor: "#B101B5",
            data: [1910, 2453, 1532, 3152, 2311, 2456, 3544, 2931, 1836, 1384, 1538, 1183],
            fill: false,
          },
          {
            label: "Chiller No.2",
            backgroundColor: "#1E0458",
            borderColor: "#1E0458",
            data: [1912, 2353, 3532, 2152, 2331, 2457, 3542, 1931, 1236, 1784, 1578, 1383],
            fill: false,
          },
          {
            label: "Chiller No.3",
            backgroundColor: "#70DB98",
            borderColor: "#70DB98",
            data: [1784, 2353, 3532, 2152, 2331, 1784, 3542, 1931, 1236, 1784, 1578, 3532],
            fill: false,
          },
          {
            label: "Chiller No.4",
            backgroundColor: "#7AB1A9",
            borderColor: "#7AB1A9",
            data: [1236, 1578, 2331, 2152, 1578, 1784, 2542, 1931, 1784, 1184, 1578, 2331],
            fill: false,
          },
          {
            label: "Chiller No.5",
            backgroundColor: "#0062FF",
            borderColor: "#0062FF",
            data: [1936, 3578, 2331, 1152, 2578, 1784, 1842, 1931, 1784, 1684, 1578, 1331],
            fill: false,
          },
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
    const ctx = document.getElementById("line-chart-AHU").getContext("2d");
    new Chart(ctx, config);
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-3xl bg-white">
        <div className="rounded-t mt-2 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-slate-400 mb-1 text-xs font-semibold">
                Current Average of Chiller No. 1-5
              </h6>
              <h2 className="text-xl font-semibold text-slate-700">Current Average (A)</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="line-chart-AHU"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
