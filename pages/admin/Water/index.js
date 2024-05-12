import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";


// components
import CardWaterInfo from "components/Cards/CardWaterInfo";
import CardBarChart from "components/Cards/CardBarChart.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Water() {
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    const [iframeKey, setIframeKey] = useState(0);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        async function fetchData() {
            const fetchpath = `/api/waterUsage`;
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

        fetchData()
    }, [data]);

    useEffect(() => {
        setLoading(true)
        async function fetchStatus() {
            const fetchpath = `/api/Status/FlowMeter`;
            try {
                const response = await fetch(fetchpath);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const newData = await response.json();
                // console.log("----->", newData);
                setStatus(newData);
                setLoading(false);
                setIframeKey(prevKey => prevKey + 1);
            } catch (error) {
                setError(error.message);
                setStatus(null);
            }
        }

        fetchStatus()
    }, [status]);

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }
    // if (isLoading) return <p>Loading...</p>
    if (!data || !status) return;
    const obj = JSON.parse(data);
    const obj2 = JSON.parse(status);
    return (
        <>
            <div>
                <div className="w-full mx-auto items-start flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                    <a
                        className="text-white text-2xl uppercase hidden lg:inline-block font-semibold"
                    // href="#pablo"
                    // onClick={(e) => e.preventDefault()}
                    >
                        Tap Water
                    </a>
                </div>

                <div className="flex flex-wrap mt-2 justify-end">
                    <div className="text-center flex">
                        <Link href="/admin/Water/FlowMeter_1FL">
                            <button
                                className="bg-white active:bg-kmutt_orange-200 text-kmutt_orange-400 font-bold text-md px-8 py-3 rounded-3xl shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                            >
                                Devices
                                <div className="fas fa-caret-right text-black ml-2"></div>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-wrap mt-8">
                    <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                        <CardWaterInfo
                            waterinfo="Day Usage"
                            statTitle={obj.flow_day}
                            statSubtitle="Liters"
                        />
                    </div>
                    <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                        <CardWaterInfo
                            waterinfo="Month Usage"
                            statTitle={obj.flow_month * 1000}
                            statSubtitle="Liters"
                        />
                    </div>
                    <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                        <CardWaterInfo
                            waterinfo="Online Devices Status"
                            statusicon="fas fa-circle"
                            statuscolor="text-kmutt_green-100"
                            statTitle={obj2.ONLINES + "/" + obj2.ALLS}
                            statSubtitle="Devices"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap mt-6 justify-end mr-2">

                    <div className="inline-flex rounded shadow-sm" role="group">
                        <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-s-3xl hover:bg-slate-100 hover:text-kmutt_orange-100 focus:z-10 focus:bg-kmutt_orange-100 focus:text-white ">
                            Day
                        </button>
                        <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-slate-100 hover:text-kmutt_orange-100 focus:z-10 focus:bg-kmutt_orange-100 focus:text-white">
                            Month
                        </button>
                        <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-e-3xl hover:bg-slate-100 hover:text-kmutt_orange-100 focus:z-10 focus:bg-kmutt_orange-100 focus:text-white">
                            Year
                        </button>
                    </div>

                </div>

                <div className="flex flex-wrap">
                    <div className="w-full px-4 mt-4 mb-4">
                        <CardBarChart />
                    </div>

                </div>
            </div>
        </>
    );
}

Water.layout = Admin;