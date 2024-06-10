import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react"

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  const { data: session, status } = useSession()
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('/api/checkNotifications');
        const data = await response.json();
        const unread = data.filter(noti => noti.noti_case_status === 1);
        setUnreadCount(unread.length);

      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    const interval = setInterval(() => {
      fetchNotifications();
    }, 100);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    if (status === "loading") {
      return; 
    }
    if (!session) {
      router.push("/auth/login"); 
    }
  }, [session, status, router]);

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/auth/login" });
    router.push("/auth/login");
  };

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          <Link href="/">
            <span
              className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm font-bold p-4 px-0 cursor-pointer"
              onClick={() => setCollapseShow("hidden")}
            >
              <div className="flex item-center justify-center relative mt-2">
                <div variant="small" color="white" className="font-medium mr-2">
                  <p className="text-3xl font-semibold text-black">KLiM</p>
                </div>
                <h2 className="box-decoration-slice bg-kmutt_orange-100 text-white px-2 rounded-2xl text-3xl font-semibold">
                  PUS
                </h2>
              </div>
            </span>
          </Link>
        
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              
            </li>
            <li className="inline-block relative">
              
            </li>
          </ul>
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <span
                      className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0 cursor-pointer"
                      onClick={() => setCollapseShow("hidden")}
                    >
                      KLiMPUS
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

            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-slate-500 placeholder-slate-300 text-slate-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            <hr className="my-4 md:min-w-full" />
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Dashboard
            </h6>

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/admin/dashboard">
                  <span
                    className={
                      "text-xs uppercase py-3 font-bold block cursor-pointer " +
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                        ? "text-kmutt_orange-200 hover:text-kmutt_orange-100"
                        : "text-slate-700 hover:text-kmutt_orange-300")
                    }
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-xs " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-slate-300")
                      }
                    ></i>{" "}
                    Home
                  </span>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/Electrical">
                  <span
                    className={
                      "text-xs uppercase py-3 font-bold block cursor-pointer " +
                      (router.pathname.indexOf("/admin/Electrical") !== -1
                        ? "text-kmutt_orange-200 hover:text-kmutt_orange-100"
                        : "text-slate-700 hover:text-kmutt_orange-300")
                    }
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i
                      className={
                        "fas fa-bolt mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/Electrical") !== -1
                          ? "opacity-75"
                          : "text-slate-300")
                      }
                    ></i>{" "}
                    Electrical
                  </span>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/Water">
                  <span
                    className={
                      "text-xs uppercase py-3 font-bold block cursor-pointer " +
                      (router.pathname.indexOf("/admin/Water") !== -1
                        ? "text-kmutt_orange-200 hover:text-kmutt_orange-100"
                        : "text-slate-700 hover:text-kmutt_orange-300")
                    }
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i
                      className={
                        "fas fa-droplet mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/Water") !== -1
                          ? "opacity-75"
                          : "text-slate-300")
                      }
                    ></i>{" "}
                    Tap Water
                  </span>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/Chiller">
                  <span
                    className={
                      "text-xs uppercase py-3 font-bold block cursor-pointer " +
                      (router.pathname.indexOf("/admin/Chiller") !== -1
                        ? "text-kmutt_orange-200 hover:text-kmutt_orange-100"
                        : "text-slate-700 hover:text-kmutt_orange-300")
                    }
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i
                      className={
                        "fas fa-snowflake mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/Chiller") !== -1
                          ? "opacity-75"
                          : "text-slate-300")
                      }
                    ></i>{" "}
                    Chiller
                  </span>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/AHU">
                  <span
                    className={
                      "text-xs uppercase py-3 font-bold block cursor-pointer " +
                      (router.pathname.indexOf("/admin/AHU") !== -1
                        ? "text-kmutt_orange-200 hover:text-kmutt_orange-100"
                        : "text-slate-700 hover:text-kmutt_orange-300")
                    }
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i
                      className={
                        "fas fa-wind mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/AHU") !== -1
                          ? "opacity-75"
                          : "text-slate-300")
                      }
                    ></i>{" "}
                    Air Handling Unit
                  </span>
                </Link>
              </li>
            </ul>


            <hr className="my-4 md:min-w-full" />
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Utility
            </h6>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/admin/notification">
                  <span
                    className={
                      "text-xs uppercase py-3 font-bold block cursor-pointer " +
                      (router.pathname.indexOf("/admin/notification") !== -1
                        ? "text-kmutt_orange-200 hover:text-kmutt_orange-100"
                        : "text-slate-700 hover:text-kmutt_orange-300")
                    }
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i
                      className={
                        "fas fa-bell mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/notification") !== -1
                          ? "opacity-75"
                          : "text-slate-300")
                      }
                    ></i>{" "}
                    Notification  {unreadCount ?(<i className="fas fa-exclamation-circle text-base text-red-500 ml-2"></i>):null}
                  </span>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/device">
                  <span
                    className={
                      "text-xs uppercase py-3 font-bold block cursor-pointer " +
                      (router.pathname.indexOf("/admin/device") !== -1
                        ? "text-kmutt_orange-200 hover:text-kmutt_orange-100"
                        : "text-slate-700 hover:text-kmutt_orange-300")
                    }
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i
                      className={
                        "fas fa-power-off mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/device") !== -1
                          ? "opacity-75"
                          : "text-slate-300")
                      }
                    ></i>{" "}
                    Devices
                  </span>
                </Link>
              </li>
              
            </ul>

            {session?.user?.role_id === 1 ? (
              <>
                <hr className="my-4 md:min-w-full" />
                <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                  Admin Panel
                </h6>
                <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">

                  <li className="items-center">
                    <Link href="/admin/account">
                      <span
                        className={
                          "text-xs uppercase py-3 font-bold block cursor-pointer " +
                          (router.pathname.indexOf("/admin/account") !== -1
                            ? "text-kmutt_orange-200 hover:text-kmutt_orange-100"
                            : "text-slate-700 hover:text-kmutt_orange-300")
                        }
                        onClick={() => setCollapseShow("hidden")}
                      >
                        <i
                          className={
                            "fas fa-users mr-2 text-sm " +
                            (router.pathname.indexOf("/admin/maps") !== -1
                              ? "opacity-75"
                              : "text-slate-300")
                          }
                        ></i>{" "}
                        Account Control
                      </span>
                    </Link>
                  </li>
                </ul>
              </>
            ) : null
            }

            <hr className="my-4 md:min-w-full" />
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">

              <li className="items-center">
                <span
                  className={
                    "text-xs uppercase py-3 font-bold block cursor-pointer " +
                    (router.pathname.indexOf("/auth/login") !== -1
                      ? "text-kmutt_orange-200 hover:text-kmutt_orange-100"
                      : "text-slate-700 hover:text-yellow-500")
                  }
                  onClick={handleSignOut}

                >
                  <i
                    className={
                      "fas fa-person-walking-arrow-right mr-2 text-sm " +
                      (router.pathname.indexOf("/auth/login") !== -1
                        ? "opacity-75"
                        : "text-slate-300")
                    }
                  ></i>{" "}
                  Sign out
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
