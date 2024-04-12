import React from "react";
import Link from "next/link";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardDashboard from "components/Cards/CardDashboard";

// layout for page

import Admin from "layouts/Admin.js";
import CardLineChartAHU from "components/Cards/CardLineChartAHU";

export default function Dashboard() {
  return (
    <>
      <div className="w-full mx-auto items-start flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
        <a
          className="text-white text-2xl uppercase hidden lg:inline-block font-semibold"
        // href="#pablo"
        // onClick={(e) => e.preventDefault()}
        >
          Dashboard
        </a>
      </div>

      <div className="flex flex-wrap mt-8  ">

        <div className="w-full max-w-60 px-4">
          <CardDashboard
            statSubtitle="Electric"
            statTitleColor="text-kmutt_orange-100"
            statTitle="Error"
            statIconName="fas fa-bolt"
            statIconColor="bg-gray-300"
            statStatus="fas fa-face-sad-tear"
          // statStatusColor="text-kmutt_red-100"
          />
        </div>

        <div className="w-full max-w-60 px-4">
          <CardDashboard
            statSubtitle="Tap Water"
            statTitleColor="text-kmutt_orange-100"
            statTitle="Error"
            statIconName="fas fa-droplet"
            statIconColor="bg-gray-300"
            statStatus="fas fa-face-sad-tear"
          // statStatusColor="text-kmutt_red-100"
          />
        </div>

        <div className="w-full max-w-60 px-4">
          <CardDashboard
            statSubtitle="Chiller"
            statTitleColor="text-kmutt_green-100"
            statTitle="Normal"
            statIconName="fas fa-snowflake"
            statIconColor="bg-gray-300"
            statStatus="fas fa-face-smile"
          // statStatusColor="text-kmutt_red-100"
          />
        </div>

        <div className="w-full max-w-60 px-4">
          <CardDashboard
            statSubtitle="AHU"
            statTitleColor="text-kmutt_yellow-100"
            statTitle="Warning"
            statIconName="fas fa-wind"
            statIconColor="bg-gray-300"
            statStatus="fas fa-face-surprise"
          // statStatusColor="text-kmutt_red-100"
          />
        </div>

        <div className="w-full max-w-60 px-4">
          <CardDashboard
            statSubtitle="Other"
            statTitleColor="text-kmutt_green-100"
            statTitle="Normal"
            statIconName="fas fa-gear"
            statIconColor="bg-gray-300"
            statStatus="fas fa-face-smile"
          // statStatusColor="text-kmutt_red-100"
          />
        </div>

        <div className="w-full max-w-96 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white rounded-3xl mb-6 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 py-1 max-w-full flex-grow flex-1">
                  <h5 className="text-slate-400 uppercase font-bold text-md">
                    Hot Notification
                  </h5>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div
                    className={
                      "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                      "bg-kmutt_blue-100"
                    }
                  >
                    <i className={"fas fa-bell"}></i>
                  </div>
                </div>
              </div>

              <div role="alert" className="alert shadow-lg mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <div>
                  <h3 className="font-bold">New message!</h3>
                  <div className="text-xs">You have 3 unread message</div>
                </div>
                <Link href="/admin/notification">
                  <button className="btn btn-sm">See</button>
                </Link>
              </div>

            </div>
          </div>
        </div>




        {/* <div className="w-full xl:w-2/12 px-4 mt-8">
        <CardBarChart />
        </div> */}
      </div>

      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mt-8">
          <CardLineChart />
        </div>

        <div className="w-full xl:w-4/12 px-4 mt-8">
          <CardBarChart />
        </div>
        {/* <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardBarChart />
        </div> */}
        {/* <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div> */}
      </div>

      {/* <div className="flex flex-wrap mt-4">
        <div className="w-full px-4 px-4 mt-8">
          <CardBarChart />
        </div>


      </div> */}
    </>
  );
}

Dashboard.layout = Admin;
