import React from "react";
import { useSession } from "next-auth/react";

import UserDropdown from "components/Dropdowns/UserDropdown.js";


export default function Navbar() {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">

        <div className="w-full mx-auto items-center flex justify-end md:flex-nowrap flex-wrap md:px-10 px-4 mt-12">
          {/* Brand */}
          {/* <a
            className="text-white text-md uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a> */}
          {/* Form */}
          {/* <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form> */}
          {/* User */}
          <div className="flex-col md:flex-row list-none items-center hidden md:flex text-white text-md font-semibold">
            {/* <UserDropdown /> */}
            Hi! {session?.user?.firstname}
          </div>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
