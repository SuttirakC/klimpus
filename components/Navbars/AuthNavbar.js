import React from "react";
import Link from "next/link";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-20 w-full flex flex-wrap items-center justify-between navbar-expand-lg">
        <div className="bg-kmutt_orange-100 h-10 w-full text-white items-center">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-end">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start
            sm:w-auto sm:static sm:block sm:justify-start
            md:w-auto md:static md:block md:justify-start">
              <Link href="/">
                <span
                  className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap cursor-pointer"
                >
                  King Mongkut&apos;s University of Technology Thonburi
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
