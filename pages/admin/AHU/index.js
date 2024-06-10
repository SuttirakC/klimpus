import React from "react";
import BlockInverter from "../../../components/Block/BlockInverter";
// components

// layout for page

import Admin from "layouts/Admin.js";

export default function Inverter() {
    // sendNoti(1);
    return (
        <>
            <div className="w-full mx-auto items-start flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                <a
                    className="text-white text-2xl uppercase hidden lg:inline-block font-semibold"
                // href="#pablo"
                // onClick={(e) => e.preventDefault()}
                >
                    Air Handling Unit
                </a>
            </div>

            <BlockInverter />

        </>

    );

}

Inverter.layout = Admin;