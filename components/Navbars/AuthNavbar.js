import React from "react";
import Link from "next/link";
// components

import PagesDropdown from "components/Dropdowns/PagesDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between navbar-expand-lg ">

        <div className="bg-red-500 h-10 w-full text-white flex items-center  pr-10">
          <p className="text-sm mr-60">King Mongkut's University of Technology Thonburi</p>
        </div>


        <div class="pt-56 pb-20 flex item-center justify-center relative">

          <p variant="small" color="white" className="font-medium mr-5">
            <p className="text-3xl">KLiM</p>
          </p>

          <h2 class="box-decoration-slice bg-yellow-700 text-white px-2 rounded-2xl text-3xl">
            PUS
          </h2>
        </div>

      </nav>
    </>
  );
}
