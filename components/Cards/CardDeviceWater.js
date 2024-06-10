import React from "react";
import CardStats from "components/Cards/CardStats.js";

export default function CardDeviceWater() {
    return (
        <>
            <div className="relative flex flex-col w-full break-words mb-6 shadow-lg rounded-3xl bg-slate-100/80 border-0">
                <div className="rounded-3xl bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-slate-700 text-xl font-bold">Tap Water</h6>
                    </div>
                </div>

                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="flex flex-wrap mt-8">
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats
                                bgcolor="bg-white"
                                statSubtitle="Flow Meter_1fl"
                                statTitleColor="text-kmutt_orange-100"
                                statTitle="Offline"
                                statIconName="fas fa-droplet"
                                statIconColor="bg-gray-300"
                            />
                        </div>

                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats
                                bgcolor="bg-white"
                                statSubtitle="Flow Meter_6fl"
                                statTitleColor="text-kmutt_green-100"
                                statTitle="Online"
                                statIconName="fas fa-droplet"
                                statIconColor="bg-gray-300"
                            />
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}