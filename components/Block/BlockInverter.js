import React, { useState, useEffect } from "react";
import CardInverterControl from "../../components/Cards/CardInverterControl";

function inv_power(data){
    let countZero = 0;
    let countOne = 0;

    data.forEach(entry => {
        if (entry.inverter_power === 0) {
            countZero++;
        } else if (entry.inverter_power === 1) {
            countOne++;
        }
    });
    const totalCount = data.length;
    return {ONLINES: countOne, OFFLINES: countZero, ALLS:totalCount};
}

export default function BlockInverter() {
    const enableControl = 0;
    const [data_online, setData_online] = useState(null);
    const [error_online, setError_online] = useState(null);

    useEffect(() => {
        async function fetchOnline() {
            const fetchpath = `/api/inverter/device`;
            try {
                const response = await fetch(fetchpath);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const newData = await response.json();
                setData_online(newData);
                setError_online(null);
            } catch (error) {
                setError_online(error.message);
            }
        }


        fetchOnline();
    }, [data_online]);
    var on, off, all, p_on, p_off;

    if(!data_online){
        on = 0;
        off = 0;
        all = 0;
        p_on =  100;
        p_off =  100;
    }else{
        const inv_set = inv_power(data_online);
        on = inv_set.ONLINES;
        off = inv_set.OFFLINES;
        all = inv_set.ALLS;
        p_on = (Number(on) / Number(all)) * 100;
        p_off = (Number(off) / Number(all)) * 100;
    }
    return (
        <>
            {(data_online) ? (
            <div className="flex flex-wrap mt-8 mb-20">
            <div className="w-full lg:w-6/12 xl:w-6/12 px-4">
            <div className="relative p-4 flex flex-wrap min-w-0 break-words bg-white rounded-3xl mb-6 xl:mb-0 shadow-lg">
            <h6 className="w-full text-black font-bold text-md ml-3 pr-4">
                    Total AHU
             </h6>
            <div className="w-full lg:w-2/12 xl:w-2/12 px-4 py-8">
                <div className="box-border h-20 w-full p-5 bg-kmutt_blue-100 rounded-3xl ">
                    <h6 className="text-3xl font-semibold text-white text-center">{all}</h6>
                </div>
            </div>
            <div className="w-full lg:w-10/12 xl:w-10/12 px-4 mb-2">

                <div className="flex flex-row">
                    <div className="w-full lg:w-10/12 xl:w-10/12">
                        <h6 className="text-md font-semibold text-slate-600 mb-1">Active Air Handling Unit</h6>
                        <div className="relative w-full">
                            <progress className="progress progress-info" value={p_on} max="100"></progress>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/12 xl:w-2/12 flex flex-row justify-end">
                        <h6 className="text-3xl font-semibold text-black">{on}</h6>
                        <h5 className="text-3xl font-semibold text-slate-500">/{all}</h5>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="w-full lg:w-10/12 xl:w-10/12">
                        <h6 className="text-md font-semibold text-slate-600 mt-4 mb-1">Inactive Air Handling Unit</h6>
                        <div className="relative w-full">
                            <progress className="progress progress-error" value={p_off} max="100"></progress>
                          
                        </div>
                    </div>
                    <div className="w-full lg:w-2/12 xl:w-2/12 flex flex-row items-end justify-end">
                        <h6 className="text-3xl font-semibold text-black">{off}</h6>
                        <h5 className="text-3xl font-semibold text-slate-500">/{all}</h5>
                    </div>
                </div>
      
        </div>
    </div>
            </div>

            <div className="w-full lg:w-6/12 xl:w-6/12 px-4">
                <CardInverterControl 
                enableControl={enableControl}
                status="0"
                frequency="auto"
                duration="mex"
                />
            </div>

            <div className="w-full">
                <h6 className="text-2xl font-semibold text-slate-200 mt-8 mb-4"> 1st Floor</h6>
            </div>

           {data_online.map((data, index) => (
           <div className="w-full lg:w-6/12 xl:w-6/12 px-4" key={index}  >
           <div className="relative flex flex-col min-w-0 break-words bg-white rounded-3xl mb-6 xl:mb-0 shadow-lg">
               <div className="flex-auto p-4">
                   <div className="flex flex-wrap">
                       <div className="relative w-full pr-4 max-w-full flex flex-row">
                           <div className="w-full lg:w-6/12 xl:w-6/12 px-4">
                               <h6 className="text-kmutt_blue-100 font-bold text-3xl uppercase">
                                   {data.device_name}
                               </h6>
                           </div>
                           <div className="w-full lg:w-3/12 xl:w-3/12 flex flex-row items-center justify-center">
                                {data.inverter_power ? 
                                <>
                                <i className="p-1.5 fas fa-circle text-kmutt_green-100 text-xl"/>
                               <h6 className="text-black font-semibold text-lg ml-2">
                                   Running
                               </h6>
                                </> :
                                <>
                                <i className="p-1.5 fas fa-circle text-kmutt_red-100 text-xl"/>
                               <h6 className="text-black font-semibold text-lg ml-2">
                                   Stopped
                               </h6>
                                </>
                                }
                               
                           </div>

                       </div>
                   </div>
               </div>

               <div className="flex flex-row">

                   <div className="w-full lg:w-4/12 xl:w-4/12 px-8">
                       <h6 className="text-md font-semibold text-slate-400 ">Model</h6>
                   </div>
                   <div className="w-full lg:w-4/12 xl:w-4/12 flex items-start">
                       <h6 className="text-md font-semibold text-slate-500 uppercase">Hitachi WJ200N</h6>
                   </div>

               </div>
               <div className="flex flex-row">

                   <div className="w-full lg:w-4/12 xl:w-4/12 px-8">
                       <h6 className="text-md font-semibold text-slate-400 ">Location</h6>
                   </div>
                   <div className="w-full lg:w-4/12 xl:w-4/12 flex items-start">
                       <h6 className="text-md font-semibold text-slate-400">@ LIB105, 1st Floor</h6>
                   </div>

               </div>

               <div className="flex-auto p-4">
                   <div className="flex flex-wrap">
                       <div className="relative w-full pr-4 max-w-full flex flex-row">
                           <div className="w-full lg:w-5/12 xl:w-5/12 flex items-start justify-start px-4">
                               <h6 className="text-md font-semibold text-black">Frequency Speed</h6>
                           </div>
                           <div className="w-full lg:w-4/12 xl:w-4/12 px-4 flex flex-row">
                               { enableControl?
                                <button className="fas fa-circle-arrow-left text-2xl flex items-center mr-6" type="button"></button>
                                :
                                <button className="fas fa-circle-arrow-left text-2xl flex items-center mr-6 text-slate-200" type="button"></button>
                               }
                               <h6 className="text-kmutt_orange-100 font-bold text-xl uppercase flex items-center">
                               {data.output_frequency_monitor_lo/100}
                               </h6>
                               { enableControl?
                                <button className="fas fa-circle-arrow-right text-2xl flex items-center ml-6" type="button"></button>
                                :
                                <button className="fas fa-circle-arrow-right text-2xl flex items-center ml-6 text-slate-200" type="button"></button>
                               }
                           </div>
                           <div className="w-full lg:w-3/12 xl:w-3/12 flex flex-row items-center justify-center">
                               <h6 className="text-slate-400 font-semibold text-lg ml-2">
                                   Hz
                               </h6>
                           </div>

                       </div>
                       <div className="w-full flex items-start justify-start mt-4 ml-4">
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
               </div>

           </div>
       </div>
           ))}

        </div >
            
            
            ) : (<div>is Loading...</div>)}
        </>
    );
}
  