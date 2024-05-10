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
                            <option selected={deviceName === "FlowMeter_1FL"} value="FlowMeter_1FL">Device 1</option>
                            <option selected={deviceName === "FlowMeter_6FL"} value="FlowMeter_6FL">Device 2</option>
                        </select>
                    </form>

                </div>

                <div className="box-border h-12 w-full lg:w-2/12 xl:w-2/12 px-4 rounded-3xl text-bold">

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

            <BlockWater deviceName={deviceName} />
        </>
    );
}

WaterSub.layout = Admin;
