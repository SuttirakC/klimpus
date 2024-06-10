import React from "react";

export default function CardInverterControl({ enableControl, status, frequency, duration }) {
    enableControl=Number(enableControl)
    if(enableControl){
       
    }else{

    }
    return (
        <>
            <div className="p-4 relative flex flex-col min-w-0 break-words bg-white rounded-3xl mb-6 xl:mb-0 shadow-lg ">
                        <div className="pr-4 flex flex-row">
                            <div className="w-full lg:w-5/12 xl:w-5/12 px-4">
                                <h6 className="text-kmutt_blue-100 font-bold text-3xl uppercase">
                                    All Control
                                </h6>
                            </div>
                            <div className="w-full lg:w-2/12 xl:w-2/12 flex flex-row items-center">
                                <i className="p-1.5 fas fa-circle text-kmutt_orange-200 text-xl"></i>
                                <h6 className="text-black font-semibold text-lg ml-2">
                                    Mixed
                                </h6>
                            </div>
                            <div className="w-full lg:w-5/12 xl:w-5/12 flex items-start justify-end">
                                {enableControl ?
                                <>
                               <button id="startBtn"
                                    className={"bg-kmutt_orange-100 active:bg-kmutt_orange-100 text-white font-bold uppercase text-lg w-5/12 py-1 rounded-3xl shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mr-4"}
                                    type="button"
                                >
                                    Start
                                </button>
                                <button id="stopBtn"
                                    className="bg-kmutt_blue-100 active:bg-kmutt_blue-100 text-white font-bold uppercase text-lg w-5/12 py-1 rounded-3xl shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    Stop
                                </button>
                                </>:
                                <>
                                 <button disabled id="startBtn"
                                    className="bg-slate-200 active:bg-slate-200 text-slate-400 font-bold uppercase text-lg w-5/12 py-1 rounded-3xl shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mr-4 "
                                    type="button"
                                >
                                    Start
                                </button>
                                <button disabled id="stopBtn"
                                    className="bg-slate-200 active:bg-slate-200 text-slate-400 font-bold uppercase text-lg w-5/12 py-1 rounded-3xl shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mr-4 "
                                    type="button"
                                >
                                    Stop
                                </button>
                                </>
                                }
                            
                    </div>
                </div>

                <div className="w-full flex flex-row">

                    <div className="w-full lg:w-2/12 xl:w-2/12 flex items-start justify-center">
                        <h6 className="text-md font-semibold text-slate-400 ">run time:</h6>
                    </div>
                    <div className="w-full lg:w-2/12 xl:w-2/12 flex items-start">
                        <span id="timer"
                            className="text-md font-semibold text-slate-400 ">00:00:00</span>
                    </div>
                    <div className="w-full lg:w-2/12 xl:w-2/12 flex items-start justify-start">
                        <h6 className="text-md font-semibold text-slate-400 ">Hr</h6>
                    </div>

                </div>
                <div className="w-full flex items-start justify-start mt-3 ml-7">
                    <h6 className="text-md font-semibold text-black">Frequency Speed</h6>
                </div>

                <div className="flex-auto p-4">
                    <div className="">
                        <div className=" pr-4 max-w-full flex ">
                            <div className="w-full lg:w-4/12 xl:w-4/12 px-4 flex flex-row">
                                <button className={(enableControl)? "fas fa-circle-arrow-left text-3xl flex items-center mr-6 " : "fas fa-circle-arrow-left text-3xl flex items-center mr-6 text-slate-200"} type="button"></button>
                                <h6 className="text-kmutt_orange-100 font-bold text-3xl uppercase flex items-center">
                                    Mixed
                                </h6>
                                <button className={(enableControl)? "fas fa-circle-arrow-right text-3xl flex items-center ml-6 " : "fas fa-circle-arrow-right text-3xl flex items-center ml-6 text-slate-200"} type="button"></button>
                            </div>
                            <div className="w-full lg:w-3/12 xl:w-3/12 flex flex-row items-center justify-center">
                                <h6 className="text-slate-400 font-semibold text-lg ml-2">
                                    Hz
                                </h6>
                            </div>
                            <div className="w-full lg:w-5/12 xl:w-5/12 flex items-start justify-end">
                                <button disabled id="lowfreq"
                                    className="bg-slate-200 active:bg-slate-200 text-slate-400 font-bold uppercase text-lg w-5/12 py-1 rounded-3xl shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mr-4 "
                                    type="button"
                                >
                                    30.00
                                </button>
                                <button disabled id="highfreq"
                                    className="bg-slate-200 active:bg-slate-200 text-slate-400 font-bold uppercase text-lg w-5/12 py-1 rounded-3xl shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    50.00
                                </button>
                               
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}