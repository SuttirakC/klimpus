import React from "react";
import { useRouter } from "next/router";
import Admin from "layouts/Admin.js";
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
                >
                    Devices
                </a>
            </div>

            <div className="flex flex-wrap">

                <div className="w-full mt-8 px-4">
                    <BlockDevice />
                </div>

            </div>

            <div className="flex flex-wrap mt-8 justify-end mr-4">
                <div className="text-center mb-6">
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
