import React from "react";
import PropTypes from "prop-types";

export default function CardWaterInfo({
    statSubtitle,
    statTitle,
    waterinfo,
    statusicon,
    statuscolor,
}) {
    return (
        <>
            {/* <div className="relative flex flex-col min-w-0 break-words bg-gradient-to-b from-white from-85% to-kmutt_blue-200 to-15% rounded-3xl mb-6 xl:mb-0 shadow-lg"> */}
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded-2xl mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex">
                            <h6 className="text-black font-bold text-md ml-3 ">
                                {waterinfo}
                            </h6>
                        </div>
                        <div className="relative w-full pr-4 max-w-full flex flex-row justify-end">
                            <div className={"p-2 items-center justify-center w-12 h-12 " +
                                statuscolor}>


                                <i className={statusicon}></i>
                            </div>
                            <span className="font-bold text-3xl text-kmutt_blue-100 mr-4">
                                {statTitle}
                            </span>
                            <h5 className="text-slate-400 font-bold text-md flex-shrink-0">
                                {statSubtitle}
                            </h5>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}


