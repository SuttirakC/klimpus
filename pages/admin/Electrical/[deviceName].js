import React from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import BlockElectrical from "components/Block/BlockElectrical.js";
import Admin from "layouts/Admin.js";

export default function ElectricalSub() {
    const router = useRouter();
    const deviceName = router.query.deviceName;
    return (
        <>
            <div className="w-full mx-auto items-start flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                <a
                    className="text-white text-2xl uppercase hidden lg:inline-block font-semibold"
                >
                    Electrical Usage
                </a>
            </div>

            <div className="flex flex-wrap mt-8 ml-3">

                <div className="box-border h-12 w-full lg:w-2/12 xl:w-1/12 px-4 rounded-3xl text-bold">
                    <h6 className="text-2xl font-semibold text-slate-200 mt-2 ml-3">Device</h6>
                </div>

                <div className="box-border h-12 w-full lg:w-2/12 xl:w-2/12 px-4 rounded-3xl text-bold">

                    <form className="max-w-sm mx-auto">
                        <select id="floor" className="bg-white border border-white text-kmutt_orange-400 font-bold text-md rounded-3xl block w-full p-2.5 px-4">
                            <option disabled defaultValue="" >Choose the floor</option>
                            <option selected defaultValue="ONE">1st Floor</option>
                        </select>
                    </form>

                </div>

                <div className="box-border h-12 w-full lg:w-2/12 xl:w-2/12 px-4 rounded-3xl text-bold">

                    <form className="max-w-sm mx-auto">
                        <select id="floor" className="bg-white border border-white text-kmutt_orange-400 font-bold text-md rounded-3xl block w-full p-2.5 px-4"
                        onChange={(e) => {
                              router.push(e.target.value);

                            }}>
                            <option disabled defaultValue="" >Choose the load panel</option>
                            <option selected={deviceName === "PowerMeter_LP11"} defaultValue="PowerMeter_LP11" value="PowerMeter_LP11" >LP11</option>
                            <option selected={deviceName === "PowerMeter_LP12"} defaultValue="PowerMeter_LP12" value="PowerMeter_LP12">LP12</option>
                            <option selected={deviceName === "PowerMeter_LP13"} defaultValue="PowerMeter_LP13" value="PowerMeter_LP13">LP13</option>
                            <option selected={deviceName === "PowerMeter_LP14"} defaultValue="PowerMeter_LP14" value="PowerMeter_LP14">LP14</option>
                            <option selected={deviceName === "PowerMeter_LP15"} defaultValue="PowerMeter_LP15" value="PowerMeter_LP15">LP15</option>
                        </select>
                    </form>

                </div>

                <div className="box-border h-12 w-full lg:w-7/12 xl:w-7/12 px-4 rounded-3xl text-bold text-end">
                    <div className="justify-end flex">
                        <Link href="/admin/Electrical">
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

            <BlockElectrical deviceName={deviceName} />
        </>
    );
}

ElectricalSub.layout = Admin;
