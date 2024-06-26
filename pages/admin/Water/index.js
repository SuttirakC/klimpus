import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import CardWaterInfo from "components/Cards/CardWaterInfo";
import CardBarChart from "components/Cards/CardBarChart.js";
import numberFormat from "functions/number_format";
import Admin from "layouts/Admin.js";

export default function Water() {
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const fetchpath = `/api/waterUsage`;
            try {
                const response = await fetch(fetchpath);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const newData = await response.json();
                setData(newData);
            } catch (error) {
                setError(error.message);
                setData(null);
            }
        }

        fetchData()
    }, [data]);

    useEffect(() => {
        async function fetchStatus() {
            const fetchpath = `/api/Status/FlowMeter`;
            try {
                const response = await fetch(fetchpath);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const newData = await response.json();
                setStatus(newData);
            } catch (error) {
                setError(error.message);
                setStatus(null);
            }
        }

        fetchStatus()
    }, [status]);

    if (!data || !status) return;
    const obj = (data);
    const obj2 = (status);
    return (
        <>
            <div>
                <div className="w-full mx-auto items-start flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                    <a
                        className="text-white text-2xl uppercase hidden lg:inline-block font-semibold"
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
                            waterinfo="Today Usage"
                            statTitle={numberFormat(obj.flow_day * 1000)}
                            statSubtitle="Liters"
                        />
                    </div>
                    <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                        <CardWaterInfo
                            waterinfo="This Month Usage"
                            statTitle={numberFormat(obj.flow_month * 1000)}
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


                <div className="flex flex-wrap mt-6">
                    <div className="w-full px-4 mt-4 mb-4">
                        <CardBarChart />
                    </div>

                </div>
            </div>
        </>
    );
}

Water.layout = Admin;