import Link from "next/link";
import React, { useState, useEffect } from "react";

// components

import CardWattLineChart from "../Cards/CardWattLineChart.js";
import CardElecInfo from "../Cards/CardElecInfo";
import CardOnilne from "../Cards/CardOnilne.js";


// layout for page

import Admin from "layouts/Admin.js";

export default function BlockElectrical({ deviceName }) {
    const [data, setData] = useState(null);
    const [data_online, setData_online] = useState(null);
    const [error, setError] = useState(null);
    const [iframeKey, setIframeKey] = useState(0);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        async function fetchData_info() {
            const fetchpath = `/api/dataPM/${deviceName}`;
            try {
                const response = await fetch(fetchpath);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const newData = await response.json();
                // return newData;
                setData(newData);

            } catch (error) {
                throw new Error('Network response was not ok');
                // setError(error.message);
                // setData(null);
                // setData_online(null);
            }
        }

        async function fetchData_online() {
            const fetchpath = `/api/Status/Individual/${deviceName}`;
            try {
                const response = await fetch(fetchpath);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const newData = await response.json();
                // return newData;
                setData_online(newData);

            } catch (error) {
                throw new Error('Network response was not ok');
                // setError(error.message);
                // setData(null);
                // setData_online(null);
            }
        }

        async function fetchData() {
            
            try {
                await fetchData_info();
                await fetchData_online();
                setIframeKey(prevKey => prevKey + 1);
            } catch (error) {
                setError(error.message);
                // setData(null);
                // setData_online(null);
            }
        }

        fetchData();
    }, [data,deviceName]);

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }
    // if (isLoading) return <p>Loading...</p>
    if (!data) return (
        <div className="relative flex flex-col break-words  m-12  shadow-lg rounded-3xl bg-slate-100/80 border-0" >
            <div className="rounded-3xl bg-white  px-6 py-6">
                <div className="text-center flex justify-between">
                    <h6 className="text-slate-700  text-xl font-bold"> No {deviceName}'s Data Found From DB <span className="loading loading-infinity loading-md"></span></h6> 
                    
                </div>
            </div>
            </div>
    )
    // console.log(data_online);
    return (
        <>
            {data&&data_online ? (

                <div>

                    <div className="flex flex-wrap mt-8">
                        <div className="w-full lg:w-9/12 xl:w-9/12 px-4">

                            <CardWattLineChart deviceName={deviceName} key={data.times}/>
                        </div>
                        <div className="w-full lg:w-3/12 xl:w-3/12 px-4">
                        <div className="mt-0">
                                <CardOnilne
                                 statTime = {data.times}
                                 statOnline = {data_online.result}
                                 statSubtitle = "status"
                                />
                            </div>
                            <div className="mt-8">
                                <CardElecInfo
                                    statSubtitle="kWh"
                                    statTitle={data.energy}
                                    elecinfo="Energy Unit / Kilowatt-hour"
                                />
                            </div>
                            <div className="mt-8">
                                <CardElecInfo
                                    statSubtitle="kW"
                                    statTitle={data.watt}
                                    elecinfo="Total Power / Watt Unit"
                                />
                            </div>
                            <div className="mt-8">
                                <CardElecInfo
                                    statSubtitle="A"
                                    statTitle={parseFloat(data.avg_current).toFixed(2)}
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
                                        statTitle={data.current_phase1}
                                        elecinfo="Current in Line 1"
                                    />
                                </div>
                                <div className="w-full lg:w-6/12 xl:w-6/12 px-4">
                                    <CardElecInfo
                                        statSubtitle="A"
                                        statTitle={data.current_phase2}
                                        elecinfo="Current in Line 2"
                                    />
                                </div>

                                {/* Additional CardElecInfo components will start a new row */}
                                <div className="w-full lg:w-6/12 xl:w-6/12 px-4 mt-4">
                                    <CardElecInfo
                                        statSubtitle="A"
                                        statTitle={data.current_phase3}
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
                                        statTitle={data.vll_1}
                                        elecinfo="Between Line 1 and Line 2"
                                    />
                                </div>
                                <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                    <CardElecInfo
                                        statSubtitle="V"
                                        statTitle={data.vll_2}
                                        elecinfo="Between Line 1 and Line 3"
                                    />
                                </div>
                                <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                    <CardElecInfo
                                        statSubtitle="V"
                                        statTitle={data.vll_3}
                                        elecinfo="Between Line 2 and Line 3"
                                    />
                                </div>

                                {/* Additional CardElecInfo components will start a new row */}
                                <div className="w-full lg:w-4/12 xl:w-4/12 px-4 mt-4">
                                    <CardElecInfo
                                        statSubtitle="V"
                                        statTitle={data.volt_phase1}
                                        elecinfo="Between Line 1 and Neutral"
                                    />
                                </div>
                                <div className="w-full lg:w-4/12 xl:w-4/12 px-4 mt-4">
                                    <CardElecInfo
                                        statSubtitle="V"
                                        statTitle={data.volt_phase2}
                                        elecinfo="Between Line 2 and Neutral"
                                    />
                                </div>
                                <div className="w-full lg:w-4/12 xl:w-4/12 px-4 mt-4">
                                    <CardElecInfo
                                        statSubtitle="V"
                                        statTitle={data.volt_phase3}
                                        elecinfo="Between Line 3 and Neutral"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            ) : (<div className="relative flex flex-col w-full break-words w-full mb-6 shadow-lg rounded-3xl bg-slate-100/80 border-0" >
            <div className="rounded-3xl bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h6 className="text-slate-700 text-xl font-bold"> Loading <span className="loading loading-dots loading-md"></span></h6> 
                    
                </div>
            </div>
            </div>)}
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
  