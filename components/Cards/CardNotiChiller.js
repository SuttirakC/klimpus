import React from "react";

export default function CardNotiChiller({ notifications }) {
    return (
        <>
            <div className="relative flex flex-col w-full break-words mb-6 shadow-lg rounded-3xl bg-slate-100 border-0">
                <div className="rounded-3xl bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-slate-700 text-xl font-bold">Chiller</h6>
                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    {notifications.length > 0 ? (
                        notifications.map((noti, index) => (
                            <div key={index} role="alert" className={`mt-4 alert bg-kmutt_${noti.noti_case_level === 1 ? 'yellow-100' : 'red-200'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                    {noti.noti_case_level === 1 ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    )}
                                </svg>
                                <span>{noti.noti_case_level === 1 ? 'Warning: ' : 'Error: '}{noti.noti_case_description}</span>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-wrap mt-8 justify-center my-auto text-slate-400">
                            <span>No Notification</span>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}