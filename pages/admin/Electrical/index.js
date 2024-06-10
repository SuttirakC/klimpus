import React from "react";
import Link from "next/link";
import CardElecTotalChart from "components/Cards/CardElec_TotalChart.js";
import Admin from "layouts/Admin.js";
import BlockElectricalTotal from "components/Block/BlockElectricalTotal";

export default function Electrical() {

    return (
        <>
            <div className="w-full mx-auto items-start flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                <a
                    className="text-white text-2xl uppercase hidden lg:inline-block font-semibold"
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

            <BlockElectricalTotal/>

            <div className="flex flex-wrap mt-6">
                <div className="w-1/2 px-4 mt-4 mb-10">
                    <CardElecTotalChart
                        title="Electrical Usage @ 1 Fl."
                        type="TotalWatt_Line"
                        iframeKey=""
                    />
                </div>
                <div className="w-1/2 px-4 mt-4 mb-10">
                    <CardElecTotalChart
                        title="Electrical Usage @ 1 Fl."
                        type="TotalEnergy_Bar"
                        iframeKey=""
                    />
                </div>
            </div>
        </>
    );
}

Electrical.layout = Admin;
