import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// components

// layout for page

import Admin from "layouts/Admin.js";
import CardNotiElec from "components/Cards/CardNotiElec";
import CardNotiWater from "components/Cards/CardNotiWater";
import CardNotiAHU from "components/Cards/CardNotiAHU";
import CardNotiChiller from "components/Cards/CardNotiChiller";
import CardNotiOther from "components/Cards/CardNotiOther";


export default function Notification() {
    const router = useRouter();
    return (
        <>
            <div className="w-full mx-auto items-start flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                <a
                    className="text-white text-2xl uppercase hidden lg:inline-block font-semibold"
                // href="#pablo"
                // onClick={(e) => e.preventDefault()}
                >
                    Notification
                </a>
            </div>

            <div className="carousel rounded-box mt-8">
                <div id="elec" className="carousel-item w-full lg:w-5/12 xl:w-5/12 px-2">
                    <CardNotiElec />
                </div>
                <div id="water" className="carousel-item w-full lg:w-5/12 xl:w-5/12 px-2">
                    <CardNotiWater />
                </div>
                <div id="chiller" className="carousel-item w-full lg:w-5/12 xl:w-5/12 px-2">
                    <CardNotiChiller />
                </div>
                <div id="ahu" className="carousel-item w-full lg:w-5/12 xl:w-5/12 px-2">
                    <CardNotiAHU />
                </div>
                <div id="other" className="carousel-item w-full lg:w-5/12 xl:w-5/12 px-2">
                    <CardNotiOther />
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#elec" className="btn btn-xs">1</a>
                <a href="#water" className="btn btn-xs">2</a>
                <a href="#chiller" className="btn btn-xs">3</a>
                <a href="#ahu" className="btn btn-xs">4</a>
                <a href="#other" className="btn btn-xs">5</a>
            </div>

        </>
    );
}

Notification.layout = Admin;