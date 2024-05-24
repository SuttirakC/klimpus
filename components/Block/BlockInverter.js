import React, { useState, useEffect } from "react";
import CardInverterControl from "../../components/Cards/CardInverterControl";

function inv_power(data){
    // สร้างตัวแปรสำหรับเก็บจำนวนที่ inverter_power เป็น 0 และ 1
    let countZero = 0;
    let countOne = 0;

    data.forEach(entry => {
        if (entry.inverter_power === 0) {
            countZero++;
        } else if (entry.inverter_power === 1) {
            countOne++;
        }
    });
    // นับจำนวนทั้งหมด
    const totalCount = data.length;
    return {ONLINES: countOne, OFFLINES: countZero, ALLS:totalCount};
}

export default function BlockInverter() {
    const [data_online, setData_online] = useState(null);
    const [isLoading, setLoading] = useState(false)
    const [error_online, setError_online] = useState(null);

    useEffect(() => {
        setLoading(true);

        async function fetchOnline() {
            const fetchpath = `/api/inverter/device`;
            try {
                const response = await fetch(fetchpath);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                console.log(newData);
                const newData = await response.json();
                setData_online(newData);
                setError_online(null);
                setLoading(false);
            } catch (error) {
                setError_online(error.message);
                // setData_online(null);
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
        console.log(inv_set);
        p_on = (on / all) * 100;
        p_off = (off / all) * 100;
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
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-kmutt_green-300">
                                <div
                                    style={{ width: p_on }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-kmutt_green-200"
                                ></div>
                            </div>
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
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-kmutt_red-300">
                                <div
                                    style={{ width: {p_off} }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-kmutt_red-200"
                                ></div>
                            </div>
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
                enableControl="0"
                status="0"
                frequency="auto"
                duration="mex"
                />
            </div>

            <div className="w-full">
                <h6 className="text-2xl font-semibold text-slate-200 mt-8 mb-4"> 1st Floor</h6>
            </div>

            <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded-3xl mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex flex-row">
                                <div className="w-full lg:w-6/12 xl:w-6/12 px-4">
                                    <h6 className="text-kmutt_blue-100 font-bold text-3xl uppercase">
                                        AHU 111
                                    </h6>
                                </div>
                                <div className="w-full lg:w-3/12 xl:w-3/12 flex flex-row items-center justify-center">
                                    <div className="p-1.5 fas fa-circle text-kmutt_green-100 text-xl"></div>
                                    <h6 className="text-black font-semibold text-lg ml-2">
                                        Running
                                    </h6>
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
                            <h6 className="text-md font-semibold text-slate-400">@ LIB209, 1st Floor</h6>
                        </div>

                    </div>

                    <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex flex-row">
                                <div className="w-full lg:w-5/12 xl:w-5/12 flex items-start justify-start px-4">
                                    <h6 className="text-md font-semibold text-black">Frequency Speed</h6>
                                </div>
                                <div className="w-full lg:w-4/12 xl:w-4/12 px-4 flex flex-row">
                                    <button className="fas fa-circle-arrow-left text-2xl flex items-center mr-6" type="button"></button>
                                    <h6 className="text-kmutt_orange-100 font-bold text-xl uppercase flex items-center">
                                        50.00
                                    </h6>
                                    <button className="fas fa-circle-arrow-right text-2xl flex items-center ml-6" type="button"></button>
                                </div>
                                <div className="w-full lg:w-3/12 xl:w-3/12 flex flex-row items-center justify-center">
                                    <h6 className="text-slate-400 font-semibold text-lg ml-2">
                                        Hz
                                    </h6>
                                </div>

                            </div>
                            <div className="w-full flex items-start justify-start mt-4 ml-4">
                                {/* <Link href="/admin/account"> */}
                                <button id="startBtn"
                                    className="bg-kmutt_orange-100 active:bg-kmutt_orange-100 text-white font-bold uppercase text-lg w-3/12 py-1 rounded-3xl shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mr-4 "
                                    type="button"
                                >
                                    Start
                                </button>
                                {/* </Link> */}
                                {/* <Link href="/admin/account"> */}
                                <button id="stopBtn"
                                    className="bg-kmutt_blue-100 active:bg-kmutt_blue-100 text-white font-bold uppercase text-lg w-3/12 py-1 rounded-3xl shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    Stop
                                </button>
                                {/* </Link> */}
                            </div>
                            <div className="w-full px-4 mt-6">
                                <h6 className="text-md font-semibold text-slate-400 ">Inverter status details: -</h6>
                            </div>
                            <div className="w-full flex flex-row mt-4">

                                <div className="w-full lg:w-3/12 xl:w-3/12 flex items-start justify-start px-4">
                                    <h6 className="text-md font-semibold text-slate-500 ">run time:</h6>
                                </div>
                                <div className="w-full lg:w-3/12 xl:w-3/12 flex items-start">
                                    <span id="timer"
                                        className="text-md font-semibold text-slate-500 ">00:00:00</span>
                                </div>
                                <div className="w-full lg:w-6/12 xl:w-6/12 flex items-start justify-start">
                                    <h6 className="text-md font-semibold text-slate-500 ">Hr</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full">
                <h6 className="text-2xl font-semibold text-slate-200 mt-8 mb-4"> 2nd - 5th Floor</h6>
            </div>
            <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded-3xl mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                            <div className="relative w-full flex justify-center">
                                <h6 className="text-slate-500 font-bold text-xl">
                                    No data
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
            
            
            ) : (<div>Loading...</div>)}
        </>
    );
}
// This function gets called at build time
// export async function getStaticProps() {
//     // Call an external API endpoint to get data
//     const res = await fetch('https://www.mecallapi.com/api/attractions')
//     const data = await res.json()
  
//     // By returning { props: { data } }, the HomePage component
//     // will receive `data` as a prop at build time
//     return {
//       props: { data },
//     }
//   }
  