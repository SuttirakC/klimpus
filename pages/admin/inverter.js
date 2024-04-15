import React from "react";
import Link from "next/link";


// components

import CardLineChart from "components/Cards/CardLineChart.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Inverter() {
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

                <div className="bg-black w-full lg:w-6/12 xl:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-3xl mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex flex-row">
                                    <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                                        <h6 className="text-kmutt_blue-100 font-bold text-3xl uppercase">
                                            All Control
                                        </h6>
                                    </div>
                                    <div className="w-full lg:w-3/12 xl:w-3/12 flex flex-row items-center justify-center">
                                        <div className="p-1.5 fas fa-circle text-kmutt_orange-200 text-xl"></div>
                                        <h6 className="text-black font-semibold text-lg ml-2">
                                            Mixed
                                        </h6>
                                    </div>
                                    <div className="w-full lg:w-5/12 xl:w-5/12 flex items-start justify-end">
                                        {/* <Link href="/admin/account"> */}
                                        <button
                                            className="bg-kmutt_orange-100 active:bg-kmutt_orange-100 text-white font-bold uppercase text-lg w-5/12 py-1 rounded-3xl shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mr-4"
                                            type="button"
                                        >
                                            Start
                                        </button>
                                        {/* </Link> */}
                                        {/* <Link href="/admin/account"> */}
                                        <button
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
                    </div>
                </div>

            </div >


            {/* <div className="flex flex-wrap mt-2 justify-end">
                <div className="text-center flex">
                    <Link href="/admin/ElectricalSub">
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

            <div className="flex flex-wrap mt-6 ml-3 mr-2">
                <div className="box-border h-20 w-full lg:w-7/12 xl:w-7/12 px-4 bg-white rounded-3xl text-bold">
                    <h6 className="text-2xl font-semibold text-slate-700 text-center mt-6">Kilowatt-hour</h6>
                </div>
                <div className="box-border h-20 w-full lg:w-1/12 xl:w-1/12 px-4 ">

                </div>
                <div className="box-border h-20 w-full lg:w-4/12 xl:w-4/12 px-4 bg-kmutt_blue-100 rounded-3xl">
                    <h6 className="text-3xl font-semibold text-white text-center mt-6">20 kWh</h6>
                </div>
            </div>

            <div className="flex flex-wrap mt-6 justify-end mr-2">

                <div class="inline-flex rounded shadow-sm" role="group">
                    <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-s-3xl hover:bg-slate-100 hover:text-kmutt_orange-100 focus:z-10 focus:bg-kmutt_orange-100 focus:text-white ">
                        Day
                    </button>
                    <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-slate-100 hover:text-kmutt_orange-100 focus:z-10 focus:bg-kmutt_orange-100 focus:text-white">
                        Month
                    </button>
                    <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-e-3xl hover:bg-slate-100 hover:text-kmutt_orange-100 focus:z-10 focus:bg-kmutt_orange-100 focus:text-white">
                        Year
                    </button>
                </div>

            </div>

            <div className="flex flex-wrap">
                <div className="w-full px-4 mt-4 mb-10">
                    <CardLineChart />
                </div>

            </div> */}
        </>
    );
}

Inverter.layout = Admin;