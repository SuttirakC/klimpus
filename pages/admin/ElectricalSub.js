import React from "react";
import Link from "next/link";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardElecInfo from "components/Cards/CardElecInfo";


// layout for page

import Admin from "layouts/Admin.js";

export default function ElectricalSub() {
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

            <div className="flex flex-wrap mt-8 ml-3">

                <div className="box-border h-12 w-full lg:w-2/12 xl:w-1/12 px-4 rounded-3xl text-bold">
                    <h6 className="text-2xl font-semibold text-slate-200 mt-2 ml-3">Device</h6>
                </div>

                <div className="box-border h-12 w-full lg:w-2/12 xl:w-2/12 px-4 rounded-3xl text-bold">

                    <form class="max-w-sm mx-auto">
                        {/* <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
                        <select id="floor" class="bg-white border border-white text-kmutt_orange-400 font-bold text-md rounded-3xl block w-full p-2.5 px-4">
                            <option selected>Choose the floor</option>
                            <option value="ONE">1st Floor</option>
                            {/* <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option> */}
                        </select>
                    </form>

                </div>

                <div className="box-border h-12 w-full lg:w-2/12 xl:w-2/12 px-4 rounded-3xl text-bold">

                    <form class="max-w-sm mx-auto">
                        <select id="floor" class="bg-white border border-white text-kmutt_orange-400 font-bold text-md rounded-3xl block w-full p-2.5 px-4">
                            <option selected>Choose the load panel</option>
                            <option value="ONEONE">LP11</option>
                            <option value="ONETWO">LP12</option>
                            <option value="ONETHREE">LP13</option>
                            <option value="ONEFOUR">LP14</option>
                            <option value="ONEFIVE">LP15</option>
                        </select>
                    </form>

                </div>

                <div className="box-border h-12 w-full lg:w-7/12 xl:w-7/12 px-4 rounded-3xl text-bold text-end">
                    <div className="justify-end flex">
                        <Link href="/admin/ElectricalMain">
                            <button
                                className="bg-white active:bg-kmutt_orange-200 text-kmutt_orange-400 font-bold text-md px-10 py-3 rounded-3xl shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                            >
                                <div className="fas fa-caret-left text-black mr-2"></div>
                                Total

                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap mt-8">
                <div className="w-full lg:w-9/12 xl:w-9/12 px-4">
                    <CardLineChart />
                </div>
                <div className="w-full lg:w-3/12 xl:w-3/12 px-4">
                    <div className="mt-0">
                        <CardElecInfo
                            statSubtitle="kWh"
                            statTitle="20"
                            elecinfo="Energy Unit / Kilowatt-hour"
                        />
                    </div>
                    <div className="mt-8">
                        <CardElecInfo
                            statSubtitle="kW"
                            statTitle="100"
                            elecinfo="Total Power / Watt Unit"
                        />
                    </div>
                    <div className="mt-8">
                        <CardElecInfo
                            statSubtitle="A"
                            statTitle="40"
                            elecinfo="Current Average"
                        />
                    </div>
                    <div className="mt-8">
                        <CardElecInfo
                            statSubtitle="kWh"
                            statTitle="20"
                            elecinfo="Power Factor Average"
                        />
                    </div>
                </div>


            </div>

            <div className="flex flex-wrap mt-4 mb-4">
                <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                    <h6 className="text-xl font-semibold text-slate-200">Current Detail</h6>

                    <div className="flex flex-row flex-wrap mt-4">
                        <div className="w-full lg:w-6/12 xl:w-6/12 px-4">
                            <CardElecInfo
                                statSubtitle="A"
                                statTitle="40"
                                elecinfo="Current in Line 1"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 xl:w-6/12 px-4">
                            <CardElecInfo
                                statSubtitle="A"
                                statTitle="40"
                                elecinfo="Current in Line 2"
                            />
                        </div>

                        {/* Additional CardElecInfo components will start a new row */}
                        <div className="w-full lg:w-6/12 xl:w-6/12 px-4 mt-4">
                            <CardElecInfo
                                statSubtitle="A"
                                statTitle="40"
                                elecinfo="Current in Line 3"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-8/12 xl:w-8/12 px-4 mb-4">
                    <h6 className="text-xl font-semibold text-slate-200">Voltage Detail</h6>

                    <div className="flex flex-row flex-wrap mt-4">
                        <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                            <CardElecInfo
                                statSubtitle="V"
                                statTitle="440"
                                elecinfo="Between Line 1 and Line 2"
                            />
                        </div>
                        <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                            <CardElecInfo
                                statSubtitle="V"
                                statTitle="440"
                                elecinfo="Between Line 1 and Line 3"
                            />
                        </div>
                        <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                            <CardElecInfo
                                statSubtitle="V"
                                statTitle="440"
                                elecinfo="Between Line 2 and Line 3"
                            />
                        </div>

                        {/* Additional CardElecInfo components will start a new row */}
                        <div className="w-full lg:w-4/12 xl:w-4/12 px-4 mt-4">
                            <CardElecInfo
                               statSubtitle="V"
                               statTitle="230"
                               elecinfo="Between Line 1 and Neutral"
                            />
                        </div>
                        <div className="w-full lg:w-4/12 xl:w-4/12 px-4 mt-4">
                            <CardElecInfo
                                statSubtitle="V"
                                statTitle="230"
                                elecinfo="Between Line 2 and Neutral"
                            />
                        </div>
                        <div className="w-full lg:w-4/12 xl:w-4/12 px-4 mt-4">
                            <CardElecInfo
                                statSubtitle="V"
                                statTitle="230"
                                elecinfo="Between Line 3 and Neutral"
                            />
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

ElectricalSub.layout = Admin;
