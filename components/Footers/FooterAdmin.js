import React from "react";

export default function FooterAdmin() {
  return (
    <>
      <footer className="block py-4">
        <div className="px-4 mx-auto">
          <hr className="mb-4 border-b-1 border-slate-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              {/* <div className="text-sm text-slate-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=nnjs-footer-admin"
                  className="text-slate-500 hover:text-slate-700 text-sm font-semibold py-1"
                >
                  Creative Tim
                </a>
              </div> */}
              <div className="flex-col text-sm text-slate-500 font-semibold py-1 text-center md:text-left">
                KMUTT Library Monitoring Public Utility Service
              </div>
            </div>

            <div className="w-full md:w-8/12 px-4">
            <div className="flex-col text-sm text-slate-500 font-semibold py-1 text-right md:text-right">
            © {new Date().getFullYear()}{" "} klimpus.kmutt.ac.th  is a subsidiary website of KMUTT. All rights reserved.
              </div>
            </div>

            {/* <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="https://www.creative-tim.com?ref=nnjs-footer-admin"
                    className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"
                  >
                    Creative Tim
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=nnjs-footer-admin"
                    className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="http://blog.creative-tim.com?ref=nnjs-footer-admin"
                    className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer-admin"
                    className="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
}
