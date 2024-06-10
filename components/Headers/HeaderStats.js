import React from "react";
import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      <div className="relative md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Total Account"
                  statTitle="003"
                  statIconName="fas fa-users"
                  statIconColor="bg-gray-300"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Admin Role"
                  statTitle="002"
                  statIconName="fas fa-user-lock"
                  statIconColor="bg-gray-300"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Technical Role"
                  statTitle="001"
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
