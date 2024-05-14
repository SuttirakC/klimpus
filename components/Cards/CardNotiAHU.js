import React from "react";
import Link from "next/link";
import CardStats from "components/Cards/CardStats.js";

// components

export default function CardNotiAHU() {
    return (
        <>
            <div className="relative flex flex-col w-full break-words w-full mb-6 shadow-lg rounded-3xl bg-slate-100 border-0">
                <div className="rounded-3xl bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-slate-700 text-xl font-bold">Air Handling Unit</h6>
                    </div>
                </div>

                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                    <div className="flex flex-wrap mt-4">
                        <div role="alert" className="alert alert-warning">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <span>Warning: The AHU101 hasn&apos;t been turned off.</span>
                            {new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}{"  "}{new Date().getHours()}:{new Date().getMinutes()}:{new Date().getSeconds()}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}