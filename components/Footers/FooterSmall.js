import React from "react";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0  text-white"
            : "relative") + " pb-6"
        }
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-8/12 px-4">
              <div className="flex-col text-sm text-slate-200 font-semibold py-1 text-center md:text-left">
                KMUTT Library Monitoring Public Utility Service
              </div>
              <div className="flex-col text-sm text-slate-200 font-semibold py-1 text-center md:text-left">
              © {new Date().getFullYear()}{" "} klimpus.kmutt.ac.th  is a subsidiary website of KMUTT. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
