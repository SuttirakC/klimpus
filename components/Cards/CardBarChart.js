import React, { useEffect } from "react";

export default function CardBarChart() {
  
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
              Total Liters (L)
            </h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        <div className="relative h-350-px">
          <iframe src="http://10.13.253.146:3000/d-solo/bdk67fysuercwa/flowmeter?orgId=1&from=now-30d&to=now&refresh=1m&theme=light&panelId=4"
           width="100%" height="100%"></iframe>
        </div>
      </div>
    </div>
    </>
  );
}
