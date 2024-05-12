import React from "react";
import Link from "next/link";



// components

import CardLineChart from "components/Cards/CardLineChart.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Inverter() {
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
                    Air Handling Unit
                </a>
            </div>

            <div className="flex flex-wrap mt-8 mb-20">
                <div className="w-full lg:w-6/12 xl:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-3xl mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex ">
                                    {/* <div className="fas fa-network-wired py-1"></div> */}
                                    <h6 className="text-black font-bold text-md ml-3 ">
                                        Total AHU
                                    </h6>
                                </div>
                                {/* <div className="flex flex-row flex-wrap"> */}
                                <div className="w-full lg:w-2/12 xl:w-2/12 px-4 py-8">
                                    <div className="box-border h-20 w-full p-5 bg-kmutt_blue-100 rounded-3xl ">
                                        <h6 className="text-3xl font-semibold text-white text-center">08</h6>
                                    </div>
                                </div>
                                <div className="w-full lg:w-10/12 xl:w-10/12 px-4 mb-2">

                                    <div className="flex flex-row">
                                        <div className="w-full lg:w-10/12 xl:w-10/12">
                                            <h6 className="text-md font-semibold text-slate-600 mb-1">Active Air Handling Unit</h6>
                                            <div className="relative w-full">
                                                <div className="overflow-hidden h-2 text-xs flex rounded bg-kmutt_green-300">
                                                    <div
                                                        style={{ width: "12.5%" }}
                                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-kmutt_green-200"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-2/12 xl:w-2/12 flex flex-row justify-end">
                                            <h6 className="text-3xl font-semibold text-black">01</h6>
                                            <h5 className="text-3xl font-semibold text-slate-500">/08</h5>
                                        </div>
                                    </div>

                                    <div className="flex flex-row">
                                        <div className="w-full lg:w-10/12 xl:w-10/12">
                                            <h6 className="text-md font-semibold text-slate-600 mt-4 mb-1">Inactive Air Handling Unit</h6>
                                            <div className="relative w-full">
                                                <div className="overflow-hidden h-2 text-xs flex rounded bg-kmutt_red-300">
                                                    <div
                                                        style={{ width: "12.5%" }}
                                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-kmutt_red-200"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-2/12 xl:w-2/12 flex flex-row items-end justify-end">
                                            <h6 className="text-3xl font-semibold text-black">01</h6>
                                            <h5 className="text-3xl font-semibold text-slate-500">/08</h5>
                                        </div>
                                    </div>

                                    <div className="flex flex-row">
                                        <div className="w-full lg:w-10/12 xl:w-10/12">
                                            <h6 className="text-md font-semibold text-slate-600 mt-4">Not connected Air Handling Unit</h6>
                                            <div className="relative w-full">
                                                <div className="overflow-hidden h-2 text-xs flex rounded bg-kmutt_yellow-200">
                                                    <div
                                                        style={{ width: "75%" }}
                                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-kmutt_yellow-100"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-2/12 xl:w-2/12 flex flex-row items-end justify-end">
                                            <h6 className="text-3xl font-semibold text-black">06</h6>
                                            <h5 className="text-3xl font-semibold text-slate-500">/08</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-6/12 xl:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-3xl mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex flex-row">
                                    <div className="w-full lg:w-5/12 xl:w-5/12 px-4">
                                        <h6 className="text-kmutt_blue-100 font-bold text-3xl uppercase">
                                            All Control
                                        </h6>
                                    </div>
                                    <div className="w-full lg:w-2/12 xl:w-2/12 flex flex-row items-center justify-start">
                                        <div className="p-1.5 fas fa-circle text-kmutt_orange-200 text-xl"></div>
                                        <h6 className="text-black font-semibold text-lg ml-2">
                                            Mixed
                                        </h6>
                                    </div>
                                    <div className="w-full lg:w-5/12 xl:w-5/12 flex items-start justify-end">
                                        {/* <Link href="/admin/account"> */}
                                        <button id="startBtn"
                                            className="bg-kmutt_orange-100 active:bg-kmutt_orange-100 text-white font-bold uppercase text-lg w-5/12 py-1 rounded-3xl shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mr-4 "
                                            type="button"
                                        >
                                            Start
                                        </button>
                                        {/* </Link> */}
                                        {/* <Link href="/admin/account"> */}
                                        <button id="stopBtn"
                                            className="bg-kmutt_blue-100 active:bg-kmutt_blue-100 text-white font-bold uppercase text-lg w-5/12 py-1 rounded-3xl shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            Stop
                                        </button>
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex flex-row">

                            <div className="w-full lg:w-2/12 xl:w-2/12 flex items-start justify-center">
                                <h6 className="text-md font-semibold text-slate-400 ">run time:</h6>
                            </div>
                            <div className="w-full lg:w-2/12 xl:w-2/12 flex items-start">
                                <span id="timer"
                                    className="text-md font-semibold text-slate-400 ">00:00:00</span>
                            </div>
                            <div className="w-full lg:w-2/12 xl:w-2/12 flex items-start justify-start">
                                <h6 className="text-md font-semibold text-slate-400 ">Hr</h6>
                            </div>

                        </div>
                        <div className="w-full flex items-start justify-start mt-3 ml-7">
                            <h6 className="text-md font-semibold text-black">Frequency Speed</h6>
                        </div>

                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex flex-row">
                                    <div className="w-full lg:w-4/12 xl:w-4/12 px-4 flex flex-row">
                                        <button className="fas fa-circle-arrow-left text-3xl flex items-center mr-6" type="button"></button>
                                        <h6 className="text-kmutt_orange-100 font-bold text-3xl uppercase flex items-center">
                                            Mixed
                                        </h6>
                                        <button className="fas fa-circle-arrow-right text-3xl flex items-center ml-6" type="button"></button>
                                    </div>
                                    <div className="w-full lg:w-3/12 xl:w-3/12 flex flex-row items-center justify-center">
                                        <h6 className="text-slate-400 font-semibold text-lg ml-2">
                                            Hz
                                        </h6>
                                    </div>
                                    <div className="w-full lg:w-5/12 xl:w-5/12 flex items-start justify-end">
                                        {/* <Link href="/admin/account"> */}
                                        <button id="lowfreq"
                                            className="bg-slate-200 active:bg-slate-200 text-slate-400 font-bold uppercase text-lg w-5/12 py-1 rounded-3xl shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mr-4 "
                                            type="button"
                                        >
                                            30.00
                                        </button>
                                        {/* </Link> */}
                                        {/* <Link href="/admin/account"> */}
                                        <button id="highfreq"
                                            className="bg-slate-200 active:bg-slate-200 text-slate-400 font-bold uppercase text-lg w-5/12 py-1 rounded-3xl shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            50.00
                                        </button>
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="w-full">
                    <h6 className="text-2xl font-semibold text-slate-200 mt-8 mb-4"> 1st Floor</h6>
                </div>

                <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-3xl mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex flex-row">
                                    <div className="w-full lg:w-6/12 xl:w-6/12 px-4">
                                        <h6 className="text-kmutt_blue-100 font-bold text-3xl uppercase">
                                            AHU 111
                                        </h6>
                                    </div>
                                    <div className="w-full lg:w-3/12 xl:w-3/12 flex flex-row items-center justify-center">
                                        <div className="p-1.5 fas fa-circle text-kmutt_green-100 text-xl"></div>
                                        <h6 className="text-black font-semibold text-lg ml-2">
                                            Running
                                        </h6>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row">

                            <div className="w-full lg:w-4/12 xl:w-4/12 px-8">
                                <h6 className="text-md font-semibold text-slate-400 ">Model</h6>
                            </div>
                            <div className="w-full lg:w-4/12 xl:w-4/12 flex items-start">
                                <h6 className="text-md font-semibold text-slate-500 uppercase">Hitachi WJ200N</h6>
                            </div>

                        </div>
                        <div className="flex flex-row">

                            <div className="w-full lg:w-4/12 xl:w-4/12 px-8">
                                <h6 className="text-md font-semibold text-slate-400 ">Location</h6>
                            </div>
                            <div className="w-full lg:w-4/12 xl:w-4/12 flex items-start">
                                <h6 className="text-md font-semibold text-slate-400">@ LIB209, 1st Floor</h6>
                            </div>

                        </div>

                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex flex-row">
                                    <div className="w-full lg:w-5/12 xl:w-5/12 flex items-start justify-start px-4">
                                        <h6 className="text-md font-semibold text-black">Frequency Speed</h6>
                                    </div>
                                    <div className="w-full lg:w-4/12 xl:w-4/12 px-4 flex flex-row">
                                        <button className="fas fa-circle-arrow-left text-2xl flex items-center mr-6" type="button"></button>
                                        <h6 className="text-kmutt_orange-100 font-bold text-xl uppercase flex items-center">
                                            50.00
                                        </h6>
                                        <button className="fas fa-circle-arrow-right text-2xl flex items-center ml-6" type="button"></button>
                                    </div>
                                    <div className="w-full lg:w-3/12 xl:w-3/12 flex flex-row items-center justify-center">
                                        <h6 className="text-slate-400 font-semibold text-lg ml-2">
                                            Hz
                                        </h6>
                                    </div>

                                </div>
                                <div className="w-full flex items-start justify-start mt-4 ml-4">
                                    {/* <Link href="/admin/account"> */}
                                    <button id="startBtn"
                                        className="bg-kmutt_orange-100 active:bg-kmutt_orange-100 text-white font-bold uppercase text-lg w-3/12 py-1 rounded-3xl shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mr-4 "
                                        type="button"
                                    >
                                        Start
                                    </button>
                                    {/* </Link> */}
                                    {/* <Link href="/admin/account"> */}
                                    <button id="stopBtn"
                                        className="bg-kmutt_blue-100 active:bg-kmutt_blue-100 text-white font-bold uppercase text-lg w-3/12 py-1 rounded-3xl shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        Stop
                                    </button>
                                    {/* </Link> */}
                                </div>
                                <div className="w-full px-4 mt-6">
                                    <h6 className="text-md font-semibold text-slate-400 ">Inverter status details: -</h6>
                                </div>
                                <div className="w-full flex flex-row mt-4">

                                    <div className="w-full lg:w-3/12 xl:w-3/12 flex items-start justify-start px-4">
                                        <h6 className="text-md font-semibold text-slate-500 ">run time:</h6>
                                    </div>
                                    <div className="w-full lg:w-3/12 xl:w-3/12 flex items-start">
                                        <span id="timer"
                                            className="text-md font-semibold text-slate-500 ">00:00:00</span>
                                    </div>
                                    <div className="w-full lg:w-6/12 xl:w-6/12 flex items-start justify-start">
                                        <h6 className="text-md font-semibold text-slate-500 ">Hr</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-full">
                    <h6 className="text-2xl font-semibold text-slate-200 mt-8 mb-4"> 2nd - 5th Floor</h6>
                </div>
                <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-3xl mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full flex justify-center">
                                    <h6 className="text-slate-500 font-bold text-xl">
                                        No data
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >

        </>

    );

}

Inverter.layout = Admin;