import React from "react";

export default function CardLineChartAHU() {

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
          <div className="relative h-350-px">
            <iframe src="http://modld146.lib.kmutt.ac.th:3000/d-solo/edl66s64hn9c0a/chiller?orgId=1&from=now-1d&to=now&refresh=1m&theme=light&panelId=1" width="100%" height="100%"></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
