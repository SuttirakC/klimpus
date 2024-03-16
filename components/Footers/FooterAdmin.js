import React from "react";

export default function FooterAdmin() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-slate-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-slate-500 font-semibold py-1 text-center md:text-left">
              KMUTT Library Monitoring Public Utility Service
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
            <div className="text-sm text-slate-500 font-semibold text-center">
                © {new Date().getFullYear()}{" "}
                <a>
                  klimpus.kmutt.ac.th  is a subsidiary website of KMUTT. All rights reserved.
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
