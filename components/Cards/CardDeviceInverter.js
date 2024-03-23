import React from "react";
import Link from "next/link";
import CardStats from "components/Cards/CardStats.js";

// components

export default function CardDeviceInverter() {
    return (
        <>
            <div className="relative flex flex-col w-full break-words w-full mb-6 shadow-lg rounded-3xl bg-slate-100 border-0">
                <div className="rounded-3xl bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-slate-700 text-xl font-bold">Air Handling Unit</h6>
                    </div>
                </div>

                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="flex flex-wrap mt-8">
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats
                                statSubtitle="Inverter_AHU111"
                                statTitleColor="text-kmutt_orange-100"
                                statTitle="Online"
                                statIconName="fas fa-wind"
                                statIconColor="bg-gray-300"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}