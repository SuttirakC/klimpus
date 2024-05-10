import React from "react";
import Link from "next/link";


// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardInfoMain from "components/Cards/CardMainLineChartInfo.js";
// layout for page

import Admin from "layouts/Admin.js";

export default function Electrical() {

    

    return (
        <>
            <div className="w-full mx-auto items-start flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                <a
                    className="text-white text-2xl uppercase hidden lg:inline-block font-semibold"
                // href="#pablo"
                // onClick={(e) => e.preventDefault()}
                >
                    Electrical
                </a>
            </div>

            <div className="flex flex-wrap mt-2 justify-end">
                <div className="text-center flex">
                    <Link href="/admin/Electrical/PowerMeter_LP11">
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
                    <CardInfoMain
                        waterinfo="Month Energy Unit"
                        statTitle="300"
                        statSubtitle="kWh"
                    />
                </div>
                <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                    <CardInfoMain
                        waterinfo="Cumulative Energy Usage"
                        statTitle="3,298"
                        statSubtitle="kWh"
                    />
                </div>
                <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                    <CardInfoMain
                        waterinfo="Online Devices Status"
                        statusicon="fas fa-circle"
                        statuscolor="text-kmutt_green-100"
                        statTitle="2/3"
                        statSubtitle="App"
                    />
                </div>
            </div>

            {/* <div className="flex flex-wrap mt-6 ml-3 mr-2">
                <div className="box-border h-20 w-full lg:w-7/12 xl:w-7/12 px-4 bg-white rounded-3xl text-bold">
                    <h6 className="text-2xl font-semibold text-slate-700 text-center mt-6">Kilowatt-hour</h6>
                </div>0
                <div className="box-border h-20 w-full lg:w-1/12 xl:w-1/12 px-4 ">

                </div>
                <div className="box-border h-20 w-full lg:w-4/12 xl:w-4/12 px-4 bg-kmutt_blue-100 rounded-3xl">
                    <h6 className="text-3xl font-semibold text-white text-center mt-6">20 kWh</h6>
                </div>
            </div> */}
            


            <div className="flex flex-wrap mt-6">
                <div className="w-1/2 px-4 mt-4 mb-10">
                    <CardLineChart />
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

                </div>
                <div className="w-1/2 px-4 mt-4 mb-10">
                    <CardLineChart />
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

                </div>


            </div>
        </>
    );
}

Electrical.layout = Admin;
