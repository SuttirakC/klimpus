import React from "react";
import { useRouter } from 'next/router';
import Link from "next/link";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardElecInfo from "components/Cards/CardElecInfo";
import CardBarChart from "components/Cards/CardBarChart.js";
import BlockWater from "components/Block/BlockWater.js";

// layout for page

import Admin from "layouts/Admin.js";
import CardFlowRate from "components/Cards/CardFlowRate";
import CardVelo from "components/Cards/CardVelo";

export default function WaterSub() {
    const router = useRouter();
    const deviceName = router.query.deviceName;
    return (
        <>
            <div className="w-full mx-auto items-start flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                <a
                    className="text-white text-2xl uppercase hidden lg:inline-block font-semibold"
                // href="#pablo"
                // onClick={(e) => e.preventDefault()}
                >
                    Tap Water Usage
                </a>
            </div>

            <div className="flex flex-wrap mt-8 ml-3">

                <div className="box-border h-12 w-full lg:w-2/12 xl:w-1/12 px-4 rounded-3xl text-bold">
                    <h6 className="text-2xl font-semibold text-slate-200 mt-2 ml-3">Device</h6>
                </div>

                <div className="box-border h-12 w-full lg:w-2/12 xl:w-2/12 px-4 rounded-3xl text-bold">

                    <form class="max-w-sm mx-auto">
                        {/* <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
                        <select id="devices" class="bg-white border border-white text-kmutt_orange-400 font-bold text-md rounded-3xl block w-full p-2.5 px-4"
                            onChange={(e) => {
                                router.push(e.target.value);
                            }
                            }
                        >
                            <option value="" hidden>Choose the device</option>
                            <option selected={deviceName==="FlowMeter_1FL"} value="FlowMeter_1FL">Device 1</option>
                            <option selected={deviceName==="FlowMeter_6FL"} value="FlowMeter_6FL">Device 2</option>
                        </select>
                    </form>

                </div>

                <div className="box-border h-12 w-full lg:w-2/12 xl:w-2/12 px-4 rounded-3xl text-bold">

                    {/* <form class="max-w-sm mx-auto">
                        <select id="floor" class="bg-white border border-white text-kmutt_orange-400 font-bold text-md rounded-3xl block w-full p-2.5 px-4">
                            <option selected>Choose the load panel</option>
                            <option value="ONEONE">LP11</option>
                            <option value="ONETWO">LP12</option>
                            <option value="ONETHREE">LP13</option>
                            <option value="ONEFOUR">LP14</option>
                            <option value="ONEFIVE">LP15</option>
                        </select>
                    </form> */}

                </div>

                <div className="box-border h-12 w-full lg:w-7/12 xl:w-7/12 px-4 rounded-3xl text-bold text-end">
                    <div className="justify-end flex">
                        <Link href="/admin/Water">
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

            {/* <div className="flex flex-wrap mt-8 mb-20">

                <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                    <h6 className="text-2xl font-semibold text-slate-200 mb-6"> # Device 01</h6>

                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-3xl mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex ">
                                    <div className="fas fa-network-wired py-1"></div>
                                    <h6 className="text-black font-bold text-md ml-3 ">
                                        Connect
                                    </h6>
                                </div>
                                <div className="relative w-full pr-4 max-w-full flex flex-row justify-end">
                                    <div className={"p-3 items-center justify-center w-12 h-12 fas fa-circle text-kmutt_green-100"}>

                                    </div>
                                    <h6 className="font-bold text-3xl text-kmutt_green-100 ">
                                        Online
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-3xl mb-6 mt-8 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex ">
                                    <div className="fas fa-location-dot py-1"></div>
                                    <h6 className="text-black font-bold text-md ml-3 ">
                                        Location
                                    </h6>
                                </div>
                                <div className="relative w-full pr-4 max-w-full flex flex-row justify-end">
                                    <h6 className="font-bold text-xl text-slate-500 mb-3 mt-2">
                                        Located at the underground water tank inlet
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-3xl mb-6 mt-8 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex ">
                                    <div className="fas fa-water py-1"></div>
                                    <h6 className="text-black font-bold text-md ml-3 ">
                                        Flow Rate
                                    </h6>
                                </div>
                                <div className="relative w-full pr-4 max-w-full flex flex-row justify-end">
                                    <span className="font-bold text-3xl text-kmutt_blue-100 mr-4">
                                        300
                                    </span>
                                    <h5 className="text-slate-400 font-bold text-md flex-shrink-0">
                                        m3/h
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-3xl mb-6 mt-8 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex ">
                                    <div className="fas fa-forward py-1"></div>
                                    <h6 className="text-black font-bold text-md ml-3 ">
                                        Velocity
                                    </h6>
                                </div>
                                <div className="relative w-full pr-4 max-w-full flex flex-row justify-end">
                                    <span className="font-bold text-3xl text-kmutt_blue-100 mr-4">
                                        3,298
                                    </span>
                                    <h5 className="text-slate-400 font-bold text-md flex-shrink-0">
                                        m/s
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="w-full lg:w-8/12 xl:w-8/12 px-4">
                    <CardFlowRate />
                    <CardVelo />
                </div>

            </div> */}

            <BlockWater deviceName={deviceName} />
        </>
    );
}

WaterSub.layout = Admin;
