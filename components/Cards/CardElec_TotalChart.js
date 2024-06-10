import React, { useEffect } from "react";

export default function CardElecTotalChart({ title, type, iframeKey }) {
  var src = "";
  var stitle = "";

  switch (type) {
    case "TotalWatt_Line":
      src = "http://modld146.lib.kmutt.ac.th:3000/d-solo/bdk6tg5ev905cb/powermeter?orgId=1&theme=light&panelId=11";
      stitle = "Total Watt Usage (kW) per Time"
      break;
    case "TotalEnergy_Bar":
      src = "http://modld146.lib.kmutt.ac.th:3000/d-solo/bdk6tg5ev905cb/powermeter?orgId=1&from=now-30d&to=now&refresh=1d&theme=light&panelId=12";
      stitle = "Total Energy Usage (kWh) per Day";
      break;
    case "totalEnergy_Line":
      src = "http://modld146.lib.kmutt.ac.th:3000/d-solo/bdk6tg5ev905cb/powermeter?orgId=1&theme=light&panelId=5";
      break;
    case "PowerMeter_LP14":
      src = "http://modld146.lib.kmutt.ac.th:3000/d-solo/bdk6tg5ev905cb/powermeter?orgId=1&theme=light&panelId=5";
      break;
    default:
      src = "http://modld146.lib.kmutt.ac.th:3000/d-solo/bdk6tg5ev905cb/powermeter?orgId=1&theme=light&panelId=11";
      break;
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-3xl bg-white">
        <div className="rounded-t mt-2 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-slate-400 mb-1 text-xs font-semibold">
                {title}
              </h6>
              <h2 className="text-xl font-semibold text-slate-700">{stitle}</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          <div className="relative h-350-px">
            <iframe key={iframeKey} src={src} width="100%" height="100%" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
