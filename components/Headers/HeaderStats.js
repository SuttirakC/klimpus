import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Total Account"
                  statTitle="003"
                  // statArrow="up"
                  // statPercent="3.48"
                  // statPercentColor="text-emerald-500"
                  // statDescripiron="Since last month"
                  statIconName="fas fa-users"
                  statIconColor="bg-gray-300"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Admin Role"
                  statTitle="002"
                  // statArrow="down"
                  // statPercent="3.48"
                  // statPercentColor="text-red-500"
                  // statDescripiron="Since last week"
                  statIconName="fas fa-user-lock"
                  statIconColor="bg-gray-300"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Technical Role"
                  statTitle="001"
                  // statArrow="down"
                  // statPercent="1.10"
                  // statPercentColor="text-orange-500"
                  // statDescripiron="Since yesterday"
                  statIconName="fas fa-user-gear"
                  statIconColor="bg-gray-300"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded-3xl mb-6 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-slate-400 uppercase font-bold text-md">
                          Create Account
                        </h5>
                        <span className="font-semibold text-2xl text-kmutt_blue-100 ">
                          Create New Account
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div
                          className={
                            "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                            "bg-gray-300"
                          }
                        >
                          <i className={"fas fa-user-plus"}></i>
                        </div>
                      </div>
                    </div>
                    {/* <p className="text-sm text-slate-400 mt-4">
            <span className={statPercentColor + " mr-2"}>
              <i
                className={
                  statArrow === "up"
                    ? "fas fa-arrow-up"
                    : statArrow === "down"
                    ? "fas fa-arrow-down"
                    : ""
                }
              ></i>{" "}
              {statPercent}%
            </span>
            <span className="whitespace-nowrap">{statDescripiron}</span>
          </p> */}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
