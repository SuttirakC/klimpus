import React from "react";
import PropTypes from "prop-types";
import datetime_format from "../../functions/datetime_format.js";

export default function CardOnline({
    statTime,
    statOnline,
    statSubtitle,
}) {
    var Onlineinfo;
    var stime = datetime_format(statTime);

    if(statOnline === 1){
        Onlineinfo = "Online";
    }else{
        Onlineinfo = "Offline";
    }
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded-3xl mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="relative w-full max-w-full flex flex-row justify-end">
                            <span className="font-bold text-3xl mr-4">
                            <i className={statOnline ? "fas fa-circle mr-2  text-kmutt_green-100" : "fas fa-circle mr-2 text-kmutt_red-100" } > </i> {Onlineinfo}
                            </span>
                            <h5 className="text-slate-400 font-bold text-md flex-shrink-0">
                                {/* updated on */}
                                {/* {statSubtitle} */}
                            </h5>
                        </div>
                        <div className="relative w-full pr-4 max-w-full flex">
                            <h6 className="text-black font-bold text-md ml-3 ">
                            updated on {stime}
                            </h6>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}


