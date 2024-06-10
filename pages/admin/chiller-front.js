import React from "react";
import Link from "next/link";



// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardChillerSchedule from "components/Cards/CardChillerSchedule";
import CardLineChartAHU from "components/Cards/CardLineChartAHU";
import CardStats from "components/Cards/CardStats.js";
import CardChillerStatus from "components/Cards/CardChillerStatus.js";
// layout for page

import Admin from "layouts/Admin.js";

export default function Chiller() {
    // const timerDisplay = document.getElementById('timer');
    // const startBtn = document.getElementById('startBtn');
    // const stopBtn = document.getElementById('stopBtn');
    // let intervalId;
    // let seconds = 0;

    // function update() {
    //     const hours =
    //         Math.floor(seconds / 3600).toString().padStart(2, '0');
    //     const minutes =
    //         Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    //     const secs = (seconds % 60).toString().padStart(2, '0');
    //     timerDisplay.textContent = `${hours}:${minutes}:${secs}`;
    // }
    // function start() {
    //     intervalId = setInterval(() => {
    //         seconds++;
    //         update();
    //     }, 1000);
    //     startBtn.disabled = true;

    // }
    // function stop() {
    //     clearInterval(intervalId);
    //     seconds = 0;
    //     update();
    //     startBtn.disabled = false;
    // }
    // startBtn.addEventListener('click', start);
    // stopBtn.addEventListener('click', stop);
    return (
        <>
            <div className="w-full mx-auto items-start flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                <a
                    className="text-white text-2xl uppercase hidden lg:inline-block font-semibold"
                // href="#pablo"
                // onClick={(e) => e.preventDefault()}
                >
                    Chiller
                </a>
            </div>

            <div className="flex flex-wrap mt-8 mb-20">
                <div className="w-full lg:w-8/12 xl:w-8/12 px-4">
                    <div className="w-full lg:h-6/12 xl:h-6/12">
                        <CardChillerStatus />
                        <CardLineChartAHU />

                    </div>
                </div>

                <div className="w-full lg:w-4/12 xl:w-4/12 px-4">

                    <div className="w-full">
                        <CardChillerSchedule
                            chillerinfo="Monday"
                            statTitle="07.00-18.00"
                            statSubtitle="On-Off"
                        />
                    </div>
                    <div className="w-full mt-6">
                        <CardChillerSchedule
                            chillerinfo="Tuesday"
                            statTitle="07.00-18.00"
                            statSubtitle="On-Off"
                        />
                    </div>
                    <div className="w-full mt-6">
                        <CardChillerSchedule
                            chillerinfo="Wednesday"
                            statTitle="07.00-18.00"
                            statSubtitle="On-Off"
                        />
                    </div>
                    <div className="w-full mt-6">
                        <CardChillerSchedule
                            chillerinfo="Thursday"
                            statTitle="07.00-18.00"
                            statSubtitle="On-Off"
                        />
                    </div>
                    <div className="w-full mt-6">
                        <CardChillerSchedule
                            chillerinfo="Friday"
                            statTitle="07.00-18.00"
                            statSubtitle="On-Off"
                        />
                    </div>
                    <div className="w-full mt-6">
                        <CardChillerSchedule
                            chillerinfo="Saturday"
                            statTitle="07.00-18.00"
                            statSubtitle="On-Off"
                        />
                    </div>
                    <div className="w-full mt-6">
                        <CardChillerSchedule
                            chillerinfo="Sunday"
                            statTitle="07.00-18.00"
                            statSubtitle="On-Off"
                        />
                    </div>

                </div>

                <div className="relative flex flex-col w-full break-words mb-6 shadow-lg rounded-3xl bg-slate-100/80 border-0 mt-4">
                    <div className="rounded-3xl bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-slate-700 text-xl font-bold">Chiller No.1</h6>
                        </div>
                    </div>

                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div className="flex flex-wrap mt-8">
                            <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                <CardStats
                                    bgcolor="bg-white"
                                    statSubtitle="Chiller Running State"
                                    statTitleColor="text-kmutt_orange-100"
                                    statTitle="1"
                                    statIconName="fas fa-snowflake"
                                    statIconColor="bg-gray-300"
                                />
                            </div>

                            <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                <CardStats
                                    bgcolor="bg-white"
                                    statSubtitle="Evaporator Water Flow Status"
                                    statTitleColor="text-kmutt_orange-100"
                                    statTitle="1"
                                    statIconName="fas fa-snowflake"
                                    statIconColor="bg-gray-300"
                                />
                            </div>

                            <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                <CardStats
                                    bgcolor="bg-white"
                                    statSubtitle="BAS Chiller ON/OFF Command"
                                    statTitleColor="text-kmutt_orange-100"
                                    statTitle="0"
                                    statIconName="fas fa-snowflake"
                                    statIconColor="bg-gray-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col w-full break-words mb-6 shadow-lg rounded-3xl bg-slate-100/80 border-0">
                    <div className="rounded-3xl bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-slate-700 text-xl font-bold">Chiller No.2</h6>
                        </div>
                    </div>

                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div className="flex flex-wrap mt-8">
                            <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                <CardStats
                                    bgcolor="bg-white"
                                    statSubtitle="Chiller Running State"
                                    statTitleColor="text-kmutt_orange-100"
                                    statTitle="0"
                                    statIconName="fas fa-snowflake"
                                    statIconColor="bg-gray-300"
                                />
                            </div>

                            <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                <CardStats
                                    bgcolor="bg-white"
                                    statSubtitle="Evaporator Water Flow Status"
                                    statTitleColor="text-kmutt_orange-100"
                                    statTitle="1"
                                    statIconName="fas fa-snowflake"
                                    statIconColor="bg-gray-300"
                                />
                            </div>

                            <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                <CardStats
                                    bgcolor="bg-white"
                                    statSubtitle="BAS Chiller ON/OFF Command"
                                    statTitleColor="text-kmutt_orange-100"
                                    statTitle="0"
                                    statIconName="fas fa-snowflake"
                                    statIconColor="bg-gray-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col w-full break-words mb-6 shadow-lg rounded-3xl bg-slate-100/80 border-0">
                    <div className="rounded-3xl bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-slate-700 text-xl font-bold">Chiller No.3</h6>
                        </div>
                    </div>

                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div className="flex flex-wrap mt-8">
                            <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                <CardStats
                                    bgcolor="bg-white"
                                    statSubtitle="Chiller Running State"
                                    statTitleColor="text-kmutt_orange-100"
                                    statTitle="1"
                                    statIconName="fas fa-snowflake"
                                    statIconColor="bg-gray-300"
                                />
                            </div>

                            <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                <CardStats
                                    bgcolor="bg-white"
                                    statSubtitle="Evaporator Water Flow Status"
                                    statTitleColor="text-kmutt_orange-100"
                                    statTitle="1"
                                    statIconName="fas fa-snowflake"
                                    statIconColor="bg-gray-300"
                                />
                            </div>

                            <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                <CardStats
                                    bgcolor="bg-white"
                                    statSubtitle="BAS Chiller ON/OFF Command"
                                    statTitleColor="text-kmutt_orange-100"
                                    statTitle="1"
                                    statIconName="fas fa-snowflake"
                                    statIconColor="bg-gray-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col w-full break-words mb-6 shadow-lg rounded-3xl bg-slate-100/80 border-0">
                    <div className="rounded-3xl bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-slate-700 text-xl font-bold">Chiller No.4</h6>
                        </div>
                    </div>

                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div className="flex flex-wrap mt-8">
                            <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                <CardStats
                                    bgcolor="bg-white"
                                    statSubtitle="Chiller Running State"
                                    statTitleColor="text-kmutt_orange-100"
                                    statTitle="1"
                                    statIconName="fas fa-snowflake"
                                    statIconColor="bg-gray-300"
                                />
                            </div>

                            <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                <CardStats
                                    bgcolor="bg-white"
                                    statSubtitle="Evaporator Water Flow Status"
                                    statTitleColor="text-kmutt_orange-100"
                                    statTitle="0"
                                    statIconName="fas fa-snowflake"
                                    statIconColor="bg-gray-300"
                                />
                            </div>

                            <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                <CardStats
                                    bgcolor="bg-white"
                                    statSubtitle="BAS Chiller ON/OFF Command"
                                    statTitleColor="text-kmutt_orange-100"
                                    statTitle="0"
                                    statIconName="fas fa-snowflake"
                                    statIconColor="bg-gray-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col w-full break-words mb-6 shadow-lg rounded-3xl bg-slate-100/80 border-0">
                    <div className="rounded-3xl bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-slate-700 text-xl font-bold">Chiller No.5</h6>
                        </div>
                    </div>

                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div className="flex flex-wrap mt-8">
                            <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                <CardStats
                                    bgcolor="bg-white"
                                    statSubtitle="Chiller Running State"
                                    statTitleColor="text-kmutt_orange-100"
                                    statTitle="0"
                                    statIconName="fas fa-snowflake"
                                    statIconColor="bg-gray-300"
                                />
                            </div>

                            <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                <CardStats
                                    bgcolor="bg-white"
                                    statSubtitle="Evaporator Water Flow Status"
                                    statTitleColor="text-kmutt_orange-100"
                                    statTitle="0"
                                    statIconName="fas fa-snowflake"
                                    statIconColor="bg-gray-300"
                                />
                            </div>

                            <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                <CardStats
                                    bgcolor="bg-white"
                                    statSubtitle="BAS Chiller ON/OFF Command"
                                    statTitleColor="text-kmutt_orange-100"
                                    statTitle="1"
                                    statIconName="fas fa-snowflake"
                                    statIconColor="bg-gray-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>

    );

}

Chiller.layout = Admin;