import React from "react";

export default function FooterAdmin() {
  return (
    <>
      <footer className="block py-4 ">
        <div className="px-4 mx-auto">
          <hr className="mb-4 border-b-1 border-slate-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="flex-col text-sm text-slate-200 font-semibold py-1 text-center md:text-left">
                KMUTT Library Monitoring Public Utility Service
              </div>
            </div>

            <div className="w-full md:w-8/12 px-4">
              <div className="flex-col text-sm text-slate-200 font-semibold py-1 text-right md:text-right">
                © {new Date().getFullYear()}{" "} klimpus.kmutt.ac.th  is a subsidiary website of KMUTT. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
