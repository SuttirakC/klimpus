import React, { useState, useEffect } from "react";
import CardInfoMain from "components/Cards/CardMainLineChartInfo.js";
import numberFormat from "../../functions/number_format";


export default function BlockElectricalMain() {
    const [data_total, setData_total] = useState(null);
    const [data_online, setData_online] = useState(null);
    const [error_total, setError_total] = useState(null);
    const [error_online, setError_online] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (error_total && error_online) {
            setError(error_total.message + ":/" + error_online.message);
        } else {
            setError(null);
        }
    }, [error_total, error_online]);

    useEffect(() => {
        async function fetchOnline() {
            const fetchpath = `/api/Status/PowerMeter`;
            try {
                const response = await fetch(fetchpath);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const newData = await response.json();
                setData_online(newData);
                setError_online(null);
            } catch (error) {
                setError_online(error.message);
            }
        }

        async function fetchEnergyTotal() {
            const fetchpath = `/api/dataPM/Total`;
            try {
                const response = await fetch(fetchpath);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const newData = await response.json();
                setData_total(newData);
            } catch (error) {
                setError_total(error.message);
            }
        }

        async function fetchData() {
            try {
                fetchEnergyTotal()
                fetchOnline();
            } catch (error) {
                setError(error.message);
            }
        }

        fetchData();
    }, [data_total]);

    return (
        <>
            {(data_total && data_online) ? (

                <div className="flex flex-wrap mt-8">
                    <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                        <CardInfoMain
                            waterinfo="Today Total Energy Usage (kWh)"
                            statTitle={numberFormat(data_total.energy_today)}
                            statSubtitle="kWh"
                        />
                    </div>
                    <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                        <CardInfoMain
                            waterinfo="This Month Total Energy Usage (kWh)"
                            statTitle={numberFormat(data_total.energy_thisMonth)}
                            statSubtitle="kWh"
                        />
                    </div>
                    <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                        <CardInfoMain
                            waterinfo="Online Devices Status"
                            statusicon="fas fa-circle"
                            statuscolor="text-kmutt_green-100"
                            statTitle={data_online.ONLINES + "/" + data_online.ALLS}
                            statSubtitle="Devices"
                        />
                    </div>
                </div>


            ) : (<div className="flex flex-wrap mt-8">
                <div className=" w-full lg:w-4/12 xl:w-4/12 px-4">
                    <div class="skeleton  h-32 w-full "></div>
                </div>
                <div className=" w-full lg:w-4/12 xl:w-4/12 px-4">
                    <div class="skeleton  h-32 w-full "></div>
                </div>
                <div className="  w-full lg:w-4/12 xl:w-4/12 px-4">
                    <div class="skeleton h-32 w-full "></div>
                </div>
            </div>)}
        </>
    );
}
