import React, { useEffect } from "react";
import Chart from 'chart.js/auto';

export default function CardWattLineChart({deviceName}) {
    var src="";
    if(deviceName == "PowerMeter_LP11"){
        src="http://modld146.lib.kmutt.ac.th:3000/d-solo/bdk6tg5ev905cb/powermeter?orgId=1&theme=light&panelId=4";
    }
    else if(deviceName == "PowerMeter_LP12"){
        src="http://modld146.lib.kmutt.ac.th:3000/d-solo/bdk6tg5ev905cb/powermeter?orgId=1&theme=light&panelId=6";
    }
    else if(deviceName == "PowerMeter_LP13"){
        src="http://modld146.lib.kmutt.ac.th:3000/d-solo/bdk6tg5ev905cb/powermeter?orgId=1&theme=light&panelId=5";
    }
    else if(deviceName == "PowerMeter_LP14"){
        src="http://modld146.lib.kmutt.ac.th:3000/d-solo/bdk6tg5ev905cb/powermeter?orgId=1&theme=light&panelId=7";
    }
    else if(deviceName == "PowerMeter_LP15"){
        src="http://modld146.lib.kmutt.ac.th:3000/d-solo/bdk6tg5ev905cb/powermeter?orgId=1&theme=light&panelId=8";
    }
    else{
        src="http://modld146.lib.kmutt.ac.th:3000/d-solo/bdk6tg5ev905cb/powermeter?orgId=1&theme=light&panelId=1";
    }
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-3xl bg-white">
        <div className="rounded-t mt-2 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-slate-400 mb-1 text-xs font-semibold">
                Electrical Power Usage @ 1 Fl.
              </h6>
              <h2 className="text-xl font-semibold text-slate-700">Total Power (kW)</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
        <div className="relative h-350-px">
        <iframe src={src} width="100%" height="100%" frameborder="0"></iframe>
        </div>
          {/* Chart */}
          {/* <div className="relative h-350-px">
            <canvas id="line-chart"></canvas>
          </div> */}
        </div>
      </div>
    </>
  );
}
