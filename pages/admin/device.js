import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// components

// layout for page

import Admin from "layouts/Admin.js";
import CardDeviceElec from "components/Cards/CardDeviceElec";
import CardDeviceWater from "components/Cards/CardDeviceWater";
import CardDeviceChiller from "components/Cards/CardDeviceChiller";
import CardDeviceInverter from "components/Cards/CardDeviceInverter";
import BlockDevice from "components/Block/BlockDevice";
import ModalManageDevice from "components/Modal/ModalManageDevice";

export default function Device() {
    const router = useRouter();
    const openModal = () => {
        document.getElementById('manage_device_modal').showModal();
    };

    return (
        <>
            <div className="w-full mx-auto items-start flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                <a
                    className="text-white text-2xl uppercase hidden lg:inline-block font-semibold"
                // href="#pablo"
                // onClick={(e) => e.preventDefault()}
                >
                    Devices
                </a>
            </div>

            <div className="flex flex-wrap">

                <div className="w-full mt-8 px-4">
                    <BlockDevice />
                    {/* <CardDeviceElec />
                    <CardDeviceWater />
                    <CardDeviceChiller />
                    <CardDeviceInverter /> */}
                </div>

            </div>

            <div className="flex flex-wrap mt-8 justify-end mr-4">
                <div className="text-center mb-6">
                    {/* <Link href="/admin/dashboard"> */}
                    <span href="#pablo" className="text-slate-200 cursor-pointer">
                        <button
                            className={"bg-kmutt_orange-100 text-white active:bg-slate-600 text-xs font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"}
                            type="button"
                            onClick={openModal}
                        >
                            <div className="fas fa-sliders text-center mr-3">

                            </div>

                            Manage Device
                        </button>
                    </span>
                    {/* </Link> */}
                </div>
            </div>
            <ModalManageDevice />
        </>
    );
}

Device.layout = Admin;
