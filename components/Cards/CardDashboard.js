//import React from "react";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function CardDashboard({
  statSubtitle,
  statTitle,
  statIconName,
  statIconColor,
  statStatus,
  notifications,
  notificationCount,
  bgcolor
}) {

  const unreadCount = notifications.filter(noti => noti.noti_case_status === 1).length;

  return (
    <>
      <div className={"relative flex flex-col min-w-0 break-words rounded-3xl mb-6 xl:mb-0 shadow-lg " + bgcolor}>
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-slate-400 uppercase font-bold text-md">
                {statSubtitle}
              </h5>
              <span className={"font-semibold text-xl text-slate-500"}>
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                <i className={statIconName}></i>
              </div>
            </div>
            {/* <hr className="mt-4 md:min-w-full" /> */}

          </div>

        </div>
        {notificationCount > 0 ? (
          <div role="alert" className="bg-white flex flex-row ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6 ml-3">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              {/* <h3 className="font-bold">New message!</h3> */}
              <div className="text-xs ml-4 mb-4">You have {unreadCount} message(s)</div>
            </div>
            <Link href={`/admin/notification?type=${statSubtitle.toLowerCase()}`}>
              <button className="btn btn-sm ml-2 mr-4">See</button>
            </Link>
          </div>
        ) : (
          <div role="alert" className="bg-white flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6 ml-3">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              {/* <h3 className="font-bold">No message</h3> */}
              <div className="text-xs py-1 ml-2 mb-4">You have {unreadCount} message(s)</div>
            </div>
          </div>
        )}

        <div className="relative flex items-center justify-center mt-4 mb-4">
          <div className={"text-5xl text-white"}>

            <i className={statStatus}></i>
          </div>
        </div>
        {/* <div className={"text-5xl text-center mb-4"}>
          <i className={statStatus}></i>
        </div> */}
      </div>
    </>
  );
}

// CardDashboard.defaultProps = {
//   statSubtitle: "Traffic",
//   statTitle: "350,897",
//   // statArrow: "up",
//   // statPercent: "3.48",
//   // statPercentColor: "text-emerald-500",
//   // statDescripiron: "Since last month",
//   statIconName: "far fa-chart-bar",
//   statIconColor: "bg-red-500",
// };

// CardDashboard.propTypes = {
//   statSubtitle: PropTypes.string,
//   statTitle: PropTypes.string,
//   statArrow: PropTypes.oneOf(["up", "down"]),
//   statPercent: PropTypes.string,
//   // can be any of the text color utilities
//   // from tailwindcss
//   statPercentColor: PropTypes.string,
//   statDescripiron: PropTypes.string,
//   statIconName: PropTypes.string,
//   // can be any of the background color utilities
//   // from tailwindcss
//   statIconColor: PropTypes.string,
// };
