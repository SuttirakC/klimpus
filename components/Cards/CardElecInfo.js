import React from "react";

export default function CardElecInfo({
    statSubtitle,
    statTitle,
    elecinfo,
}) {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded-3xl mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex flex-row justify-end">
                            <span className="font-bold text-3xl text-kmutt_blue-100 mr-4">
                                {statTitle}
                            </span>
                            <h5 className="text-slate-400 font-bold text-md flex-shrink-0">
                                {statSubtitle}
                            </h5>
                        </div>
                        <div className="relative w-full pr-4 max-w-full flex">
                            <h6 className="text-black font-bold text-md ml-3 ">
                                {elecinfo}
                            </h6>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}


