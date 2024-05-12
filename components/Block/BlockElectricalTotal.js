import Link from "next/link";
import React, { useState, useEffect } from "react";
// import 
// components
import CardInfoMain from "components/Cards/CardMainLineChartInfo.js";
import numberFormat from "../../functions/number_format";

// layout for page

import Admin from "layouts/Admin.js";

export default function BlockElectricalMain() {
    const [data_total, setData_total] = useState(null);
    const [data_online, setData_online] = useState(null);
    const [isLoading, setLoading] = useState(false)
    const [error_total, setError_total] = useState(null);
    const [error_online, setError_online] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(error_total &&  error_online){
            setError(error_total.message + ":/" + error_online.message);
        }else{
            setError(null);
        }
    },[error_total,error_online]);

    useEffect(() => {
        setLoading(true)

        async function fetchOnline() {
            const fetchpath = `/api/Status/PowerMeter`;
            try {
                const response = await fetch(fetchpath);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const newData = await response.json();
                // console.log("----->", newData);
                setData_online(newData);
                setError_online(null);
                // setLoading(false);
            } catch (error) {
                setError_online(error.message);
                setData_online(null);
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
                // console.log("----->", newData);
                setData_total(newData);
                setError_total(null);
                // setLoading(false);
            } catch (error) {
                setError_total(error.message);
                setData_total(null);
            }
        }

        async function fetchData() {
            try {
                fetchEnergyTotal()
                fetchOnline();
                setLoading(false);
            } catch (error) {
                setError(error.message);
            }
        }

        fetchData();
    }, [data_total]);

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }
    // if (isLoading) return <p>Loading...</p>
    if (!data_total && !data_online ) return <p>No data</p>
    // var obj = JSON.parse(data);

    return (
        <>
            {(data_total && data_online) ? (

                <div className="flex flex-wrap mt-8">
                <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                    <CardInfoMain
                        waterinfo="This Day Energy Usage (kWh)"
                        statTitle={numberFormat(data_total.energy_today)}
                        statSubtitle="kWh"
                    />
                </div>
                <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                    <CardInfoMain
                        waterinfo="Cumulative Energy Usage (kWh)"
                        statTitle={numberFormat(data_total.energy_total)}
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
  