import Link from "next/link";
import React, { useState, useEffect } from "react";
import CardStats from "components/Cards/CardStats.js";



// components

export default function BlockDevice() {
    const [state, setState] = useState({ data: null, error: false, loading: true })

    // Function to get role name based on role_id
    const getIcon = (type) => {
        // console.log(type);
        if (type == "Electrical") return "fas fa-bolt";
        else if (type == "Tap Water") return "fas fa-droplet"
        else if (type == "Air Handling Unit") return "fas fa-wind";
        else return "Unknown";
    }

    useEffect(() => {
        const postData = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        async function fetchData() {
            const fetchpath = `/api/Status/deviceStatus`;
            try {
                const response = await fetch(fetchpath, postData);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const newData = await response.json();
                // console.log(newData);
                setState({ data: newData, error: false, loading: false })
            } catch (error) {
                setState({ data: state.data, error: error.message, loading: false })
            }
        }
        const intervalId = setInterval(() => {  //assign interval to a variable to clear it. 

            setState(state => ({ data: state.data, error: false, loading: true }))
            fetchData()
                //  .then(newData => setState({ data: newData, error: false, loading: false }))
                .catch(function (error) {
                    console.log(error)
                    setState({ data: null, error: true, loading: false })
                })
        }, 2000)

        return () => clearInterval(intervalId); //This is important

    }, [state]);

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }
    // if (isLoading) return <p>Loading...</p>
    // if (!(state.data)) return <p>No data</p>
    var obj = state.data;
    // console.log(state.data);
    return (
        <>
            {obj ? (
                obj.map((data, index) => (
                    <div key={index} className="relative flex flex-col w-full break-words mb-6 shadow-lg rounded-3xl bg-slate-100/80 border-0">
                        <div className="rounded-3xl bg-white mb-0 px-6 py-6">
                            <div className="text-center flex justify-between">
                                <h6 className="text-slate-700 text-xl font-bold">{data.device_showname}</h6>
                            </div>
                        </div>

                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <div className="flex flex-wrap mt-8">
                                {data.lists.map((data2, index2) => (
                                    <div key={index2} className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                        <CardStats
                                            bgcolor="bg-white"
                                            statSubtitle={data2.deviceName}
                                            statTitleColor={data2.deviceStatus ? "text-kmutt_green-100" : "text-kmutt_orange-100"}
                                            statTitle={data2.deviceStatus ? "Online" : "Offline"}
                                            statIconName={getIcon(data.device_showname)}
                                            statIconColor="bg-gray-300"
                                        />
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div key="loading" className="relative flex flex-col w-full break-words mb-6 shadow-lg rounded-3xl bg-slate-100/80 border-0" >
                    <div className="rounded-3xl bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-slate-700 text-xl font-bold"> Loading <span className="loading loading-dots loading-md"></span></h6>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
}