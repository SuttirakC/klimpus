import React from "react";
import Link from "next/link";
import CardStats from "components/Cards/CardStats.js";

// components

export default function CardDeviceChiller() {
    return (
        <>
            <div className="relative flex flex-col w-full break-words w-full mb-6 shadow-lg rounded-3xl bg-slate-100/80 border-0">
                <div className="rounded-3xl bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-slate-700 text-xl font-bold">Chiller</h6>
                    </div>
                </div>

                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="flex flex-wrap mt-8">
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats
                                bgcolor="bg-white"
                                statSubtitle="Chiller_1"
                                statTitleColor="text-kmutt_green-100"
                                statTitle="Online"
                                statIconName="fas fa-snowflake"
                                statIconColor="bg-gray-300"
                            />
                        </div>

                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats
                                bgcolor="bg-white"
                                statSubtitle="Chiller_2"
                                statTitleColor="text-kmutt_green-100"
                                statTitle="Online"
                                statIconName="fas fa-snowflake"
                                statIconColor="bg-gray-300"
                            />
                        </div>

                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats
                                bgcolor="bg-white"
                                statSubtitle="Chiller_3"
                                statTitleColor="text-kmutt_orange-100"
                                statTitle="Offline"
                                statIconName="fas fa-snowflake"
                                statIconColor="bg-gray-300"
                            />
                        </div>

                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats
                                bgcolor="bg-white"
                                statSubtitle="Chiller_4"
                                statTitleColor="text-kmutt_orange-100"
                                statTitle="Offline"
                                statIconName="fas fa-snowflake"
                                statIconColor="bg-gray-300"
                            />
                        </div>

                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4 mt-8">
                            <CardStats
                                bgcolor="bg-white"
                                statSubtitle="Chiller_5"
                                statTitleColor="text-kmutt_green-100"
                                statTitle="Online"
                                statIconName="fas fa-snowflake"
                                statIconColor="bg-gray-300"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}