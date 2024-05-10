import React from "react";

export default function CardVelocityLineChart({ deviceName }) {
    var src = "";
    var fl = "";
    if (deviceName == "FlowMeter_1FL") {
        src = "http://modld146.lib.kmutt.ac.th:3000/d-solo/bdk67fysuercwa/flowmeter?orgId=1&refresh=1m&from=now-1d&to=now&theme=light&panelId=9";
        fl = "1st Floor";
    }
    else if (deviceName == "FlowMeter_6FL") {
        src = "http://modld146.lib.kmutt.ac.th:3000/d-solo/bdk67fysuercwa/flowmeter?orgId=1&refresh=1m&from=now-1d&to=now&theme=light&panelId=2";
        fl = "6th Floor";
    }
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-3xl bg-white">
                <div className="rounded-t mt-2 px-4 py-3 bg-transparent">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <h6 className="uppercase text-slate-400 mb-1 text-xs font-semibold">
                                Velocity @ {fl}.
                            </h6>
                            <h2 className="text-xl font-semibold text-slate-700">Velocity (m/s)</h2>
                        </div>
                    </div>
                </div>
                <div className="p-4 flex-auto">
                    <div className="relative h-64-px">
                        <iframe src={src} width="100%" height="100%"></iframe>
                    </div>

                </div>
            </div>
        </>
    );
}
