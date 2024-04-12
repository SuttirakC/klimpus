import React from "react";
import Link from "next/link";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardDashboard from "components/Cards/CardDashboard";

// layout for page

import Admin from "layouts/Admin.js";

export default function ElectricalMain() {
    return (
        <>
            <div className="w-full mx-auto items-start flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                <a
                    className="text-white text-2xl uppercase hidden lg:inline-block font-semibold"
                // href="#pablo"
                // onClick={(e) => e.preventDefault()}
                >
                    Electrical Usage
                </a>
            </div>

            <div className="flex flex-wrap mt-2 justify-end">
                <div className="text-center flex">
                    <Link href="/admin/account">
                        <button
                            className="bg-white active:bg-kmutt_orange-200 text-kmutt_orange-100 font-bold text-md px-6 py-2 rounded-3xl shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
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

            <div className="flex flex-wrap mt-4">
                <div className="w-full px-4 mt-8">
                    <CardLineChart />
                </div>

                {/* <div className="w-full xl:w-4/12 px-4 mt-8">
                    <CardBarChart />
                </div> */}
                {/* <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardBarChart />
        </div> */}
                {/* <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div> */}
            </div>

            {/* <div className="flex flex-wrap mt-4">
        <div className="w-full px-4 px-4 mt-8">
          <CardBarChart />
        </div>


      </div> */}
        </>
    );
}

ElectricalMain.layout = Admin;
