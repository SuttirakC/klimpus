import React, { useState, useEffect } from "react";

// components
import CardFlowrateLineChart from "../Cards/CardFlowrateLineChart";
import CardVelocityLineChart from "../Cards/CardVelocityLineChart";
import CardFlowRate from "../Cards/CardFlowRate";
import CardVelo from "../Cards/CardVelo";

// layout for page

import Admin from "layouts/Admin.js";

export default function BlockWater({ deviceName }) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [iframeKey, setIframeKey] = useState(0);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        async function fetchData() {
            const fetchpath = `/api/dataPM/${deviceName}`;
            try {
                const response = await fetch(fetchpath);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const newData = await response.json();
                // console.log("----->", newData);
                setData(newData);
                setLoading(false);
                setIframeKey(prevKey => prevKey + 1);
            } catch (error) {
                setError(error.message);
                setData(null);
            }
        }

        fetchData();
    }, [data, deviceName]);

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }
    // if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No data</p>
    var obj = JSON.parse(data);

    var deviceNo;
    if (deviceName == "FlowMeter_1FL") {
        deviceNo = "01";
    }
    else if (deviceName == "FlowMeter_6FL") {
        deviceNo = "02";
    }

    return (
        <>
            {data ? (

                <div className="flex flex-wrap mt-8 mb-20">

                    <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                        <h6 className="text-2xl font-semibold text-slate-200 mb-6"> # Device {deviceNo}</h6>

                        <div className="relative flex flex-col min-w-0 break-words bg-white rounded-3xl mb-6 xl:mb-0 shadow-lg">
                            <div className="flex-auto p-4">
                                <div className="flex flex-wrap">
                                    <div className="relative w-full pr-4 max-w-full flex ">
                                        <div className="fas fa-network-wired py-1"></div>
                                        <h6 className="text-black font-bold text-md ml-3 ">
                                            Connect
                                        </h6>
                                    </div>
                                    <div className="relative w-full pr-4 max-w-full flex flex-row justify-end">
                                        <div className={"p-3 items-center justify-center w-12 h-12 fas fa-circle text-kmutt_green-100"}>

                                        </div>
                                        <h6 className="font-bold text-3xl text-kmutt_green-100 ">
                                            Online
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex flex-col min-w-0 break-words bg-white rounded-3xl mb-6 mt-8 xl:mb-0 shadow-lg">
                            <div className="flex-auto p-4">
                                <div className="flex flex-wrap">
                                    <div className="relative w-full pr-4 max-w-full flex ">
                                        <div className="fas fa-location-dot py-1"></div>
                                        <h6 className="text-black font-bold text-md ml-3 ">
                                            Location
                                        </h6>
                                    </div>
                                    <div className="relative w-full pr-4 max-w-full flex flex-row justify-end">
                                        <h6 className="font-bold text-xl text-slate-500 mb-3 mt-2">
                                            Located at the underground water tank inlet
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex flex-col min-w-0 break-words bg-white rounded-3xl mb-6 mt-8 xl:mb-0 shadow-lg">
                            <div className="flex-auto p-4">
                                <div className="flex flex-wrap">
                                    <div className="relative w-full pr-4 max-w-full flex ">
                                        <div className="fas fa-water py-1"></div>
                                        <h6 className="text-black font-bold text-md ml-3 ">
                                            Flow Rate
                                        </h6>
                                    </div>
                                    <div className="relative w-full pr-4 max-w-full flex flex-row justify-end">
                                        <span className="font-bold text-3xl text-kmutt_blue-100 mr-4">
                                            {obj.flow_rate}
                                        </span>
                                        <h5 className="text-slate-400 font-bold text-md flex-shrink-0">
                                            m3/h
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex flex-col min-w-0 break-words bg-white rounded-3xl mb-6 mt-8 xl:mb-0 shadow-lg">
                            <div className="flex-auto p-4">
                                <div className="flex flex-wrap">
                                    <div className="relative w-full pr-4 max-w-full flex ">
                                        <div className="fas fa-forward py-1"></div>
                                        <h6 className="text-black font-bold text-md ml-3 ">
                                            Velocity
                                        </h6>
                                    </div>
                                    <div className="relative w-full pr-4 max-w-full flex flex-row justify-end">
                                        <span className="font-bold text-3xl text-kmutt_blue-100 mr-4">
                                            {obj.velocity}
                                        </span>
                                        <h5 className="text-slate-400 font-bold text-md flex-shrink-0">
                                            m/s
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="w-full lg:w-8/12 xl:w-8/12 px-4">
                        {/* <CardFlowRate /> */}
                        <CardFlowrateLineChart deviceName={deviceName} />   
                        {/* <CardVelo /> */}
                        <CardVelocityLineChart deviceName={deviceName} />
                    </div>

                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}