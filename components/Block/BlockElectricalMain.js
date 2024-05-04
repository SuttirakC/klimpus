import Link from "next/link";
import React, { useState, useEffect } from "react";

// components

import CardWattLineChart from "../Cards/CardWattLineChart.js";
import CardElecInfo from "../Cards/CardElecInfo";


// layout for page

import Admin from "layouts/Admin.js";

export default function BlockElectricalMain() {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false)

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
            } catch (error) {
                setError(error.message);
                setData(null);
            }
        }

        fetchData();
    }, [data,deviceName]);

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }
    // if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No data</p>
    var obj = JSON.parse(data);

    return (
        <>
            {data ? (

                <div>

                    <div className="flex flex-wrap mt-8">
                        <div className="w-full lg:w-9/12 xl:w-9/12 px-4">

                            <CardWattLineChart deviceName={deviceName}/>
                        </div>
                        <div className="w-full lg:w-3/12 xl:w-3/12 px-4">
                        <div className="mt-0">
                                <CardElecInfo
                                    // statSubtitle="Timr"
                                    statTitle="Time"
                                    elecinfo={obj.times}
                                />
                            </div>
                            <div className="mt-8">
                                <CardElecInfo
                                    statSubtitle="kWh"
                                    statTitle="20"
                                    elecinfo="Energy Unit / Kilowatt-hour"
                                />
                            </div>
                            <div className="mt-8">
                                <CardElecInfo
                                    statSubtitle="kW"
                                    statTitle={obj.watt}
                                    elecinfo="Total Power / Watt Unit"
                                />
                            </div>
                            <div className="mt-8">
                                <CardElecInfo
                                    statSubtitle="A"
                                    statTitle={parseFloat(obj.avg_current).toFixed(2)}
                                    elecinfo="Current Average"
                                />
                            </div>
                           
                        </div>


                    </div>

                    <div className="flex flex-wrap mt-4 mb-4">
                        <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                            <h6 className="text-xl font-semibold text-slate-200">Current Detail</h6>

                            <div className="flex flex-row flex-wrap mt-4">
                                <div className="w-full lg:w-6/12 xl:w-6/12 px-4">
                                    <CardElecInfo
                                        statSubtitle="A"
                                        statTitle={obj.current_phase1}
                                        elecinfo="Current in Line 1"
                                    />
                                </div>
                                <div className="w-full lg:w-6/12 xl:w-6/12 px-4">
                                    <CardElecInfo
                                        statSubtitle="A"
                                        statTitle={obj.current_phase2}
                                        elecinfo="Current in Line 2"
                                    />
                                </div>

                                {/* Additional CardElecInfo components will start a new row */}
                                <div className="w-full lg:w-6/12 xl:w-6/12 px-4 mt-4">
                                    <CardElecInfo
                                        statSubtitle="A"
                                        statTitle={obj.current_phase3}
                                        elecinfo="Current in Line 3"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-8/12 xl:w-8/12 px-4 mb-4">
                            <h6 className="text-xl font-semibold text-slate-200">Voltage Detail</h6>

                            <div className="flex flex-row flex-wrap mt-4">
                                <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                    <CardElecInfo
                                        statSubtitle="V"
                                        statTitle={obj.vll_1}
                                        elecinfo="Between Line 1 and Line 2"
                                    />
                                </div>
                                <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                    <CardElecInfo
                                        statSubtitle="V"
                                        statTitle={obj.vll_2}
                                        elecinfo="Between Line 1 and Line 3"
                                    />
                                </div>
                                <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                    <CardElecInfo
                                        statSubtitle="V"
                                        statTitle={obj.vll_3}
                                        elecinfo="Between Line 2 and Line 3"
                                    />
                                </div>

                                {/* Additional CardElecInfo components will start a new row */}
                                <div className="w-full lg:w-4/12 xl:w-4/12 px-4 mt-4">
                                    <CardElecInfo
                                        statSubtitle="V"
                                        statTitle={obj.volt_phase1}
                                        elecinfo="Between Line 1 and Neutral"
                                    />
                                </div>
                                <div className="w-full lg:w-4/12 xl:w-4/12 px-4 mt-4">
                                    <CardElecInfo
                                        statSubtitle="V"
                                        statTitle={obj.volt_phase2}
                                        elecinfo="Between Line 2 and Neutral"
                                    />
                                </div>
                                <div className="w-full lg:w-4/12 xl:w-4/12 px-4 mt-4">
                                    <CardElecInfo
                                        statSubtitle="V"
                                        statTitle={obj.volt_phase3}
                                        elecinfo="Between Line 3 and Neutral"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            ) : (<div>Loading...</div>)}
        </>
    );
}
// This function gets called at build time
// export async function getStaticProps() {
//     // Call an external API endpoint to get data
//     const res = await fetch('https://www.mecallapi.com/api/attractions')
//     const data = await res.json()
  
//     // By returning { props: { data } }, the HomePage component
//     // will receive `data` as a prop at build time
//     return {
//       props: { data },
//     }
//   }
  