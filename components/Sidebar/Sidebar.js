import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <span
              className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0 cursor-pointer"
              onClick={() => setCollapseShow("hidden")}
            >
              Notus NextJS
            </span>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <span
                      className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0 cursor-pointer"
                      onClick={() => setCollapseShow("hidden")}
                    >
                      Notus NextJS
                    </span>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-slate-500 placeholder-slate-300 text-slate-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/admin/dashboard">
                  <span
                    className={
                      "text-xs uppercase py-3 font-bold block cursor-pointer " +
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                        ? "text-sky-500 hover:text-sky-600"
                        : "text-slate-700 hover:text-slate-500")
                    }
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-slate-300")
                      }
                    ></i>{" "}
                    Dashboard
                  </span>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/settings">
                  <span
                    className={
                      "text-xs uppercase py-3 font-bold block cursor-pointer " +
                      (router.pathname.indexOf("/admin/settings") !== -1
                        ? "text-sky-500 hover:text-sky-600"
                        : "text-slate-700 hover:text-slate-500")
                    }
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i
                      className={
                        "fas fa-tools mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/settings") !== -1
                          ? "opacity-75"
                          : "text-slate-300")
                      }
                    ></i>{" "}
                    Settings
                  </span>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/tables">
                  <span
                    className={
                      "text-xs uppercase py-3 font-bold block cursor-pointer " +
                      (router.pathname.indexOf("/admin/tables") !== -1
                        ? "text-sky-500 hover:text-sky-600"
                        : "text-slate-700 hover:text-slate-500")
                    }
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/tables") !== -1
                          ? "opacity-75"
                          : "text-slate-300")
                      }
                    ></i>{" "}
                    Tables
                  </span>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/maps">
                  <span
                    className={
                      "text-xs uppercase py-3 font-bold block cursor-pointer " +
                      (router.pathname.indexOf("/admin/maps") !== -1
                        ? "text-sky-500 hover:text-sky-600"
                        : "text-slate-700 hover:text-slate-500")
                    }
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i
                      className={
                        "fas fa-map-marked mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/maps") !== -1
                          ? "opacity-75"
                          : "text-slate-300")
                      }
                    ></i>{" "}
                    Maps
                  </span>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Auth Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/auth/login">
                  <span
                    className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block cursor-pointer"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-fingerprint text-slate-400 mr-2 text-sm"></i>{" "}
                    Login
                  </span>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/auth/register">
                  <span
                    className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block cursor-pointer"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-clipboard-list text-slate-300 mr-2 text-sm"></i>{" "}
                    Register
                  </span>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              No Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/landing">
                  <span
                    className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block cursor-pointer"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-newspaper text-slate-400 mr-2 text-sm"></i>{" "}
                    Landing Page
                  </span>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/profile">
                  <span
                    className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block cursor-pointer"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-user-circle text-slate-400 mr-2 text-sm"></i>{" "}
                    Profile Page
                  </span>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            {/* <hr className="my-4 md:min-w-full" /> */}
            {/* Heading */}
            {/* <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Documentation
            </h6> */}
            {/* Navigation */}
            {/* <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="inline-flex">
                <span
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold cursor-pointer"
                  onClick={() => setCollapseShow("hidden")}
                >
                  <i className="fas fa-paint-brush mr-2 text-slate-300 text-base"></i>
                  Styles
                </span>
              </li>

              <li className="inline-flex">
                <span
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold cursor-pointer"
                  onClick={() => setCollapseShow("hidden")}
                >
                  <i className="fab fa-css3-alt mr-2 text-slate-300 text-base"></i>
                  CSS Components
                </span>
              </li>

              <li className="inline-flex">
                <span
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold cursor-pointer"
                  onClick={() => setCollapseShow("hidden")}
                >
                  <i className="fab fa-angular mr-2 text-slate-300 text-base"></i>
                  Angular
                </span>
              </li>

              <li className="inline-flex">
                <span
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold cursor-pointer"
                  onClick={() => setCollapseShow("hidden")}
                >
                  <i className="fab fa-js-square mr-2 text-slate-300 text-base"></i>
                  Javascript
                </span>
              </li>

              <li className="inline-flex">
                <span
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold cursor-pointer"
                  onClick={() => setCollapseShow("hidden")}
                >
                  <i className="fab fa-react mr-2 text-slate-300 text-base"></i>
                  NextJS
                </span>
              </li>

              <li className="inline-flex">
                <span
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold cursor-pointer"
                  onClick={() => setCollapseShow("hidden")}
                >
                  <i className="fab fa-react mr-2 text-slate-300 text-base"></i>
                  React
                </span>
              </li>

              <li className="inline-flex">
                <span
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold cursor-pointer"
                  onClick={() => setCollapseShow("hidden")}
                >
                  <i className="fas fa-link mr-2 text-slate-300 text-base"></i>
                  Svelte
                </span>
              </li>

              <li className="inline-flex">
                <span
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold cursor-pointer"
                  onClick={() => setCollapseShow("hidden")}
                >
                  <i className="fab fa-vuejs mr-2 text-slate-300 text-base"></i>
                  VueJS
                </span>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </>
  );
}
