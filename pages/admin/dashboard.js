import React, { useState, useEffect } from "react";
import Link from "next/link";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardLineChartAHU from "components/Cards/CardLineChartAHU.js";
import CardDashboard from "components/Cards/CardDashboard";

// layout for page

import Admin from "layouts/Admin.js";

export default function Dashboard() {

  const [unreadCount, setUnreadCount] = useState(0);
  const [notifications, setNotifications] = useState({
    elec: [],
    water: [],
    ahu: [],
    chiller: [],
    other: []
  });

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('/api/checkNotifications');
        const data = await response.json();
        const unread = data.filter(noti => noti.noti_case_status === 1);
        setUnreadCount(unread.length);
        // console.log("Data",response);
        const categorized = {
          elec: data.filter(noti => noti.type === 'elec'),
          water: data.filter(noti => noti.type === 'water'),
          ahu: data.filter(noti => noti.type === 'ahu'),
          chiller: data.filter(noti => noti.type === 'chiller'),
          other: data.filter(noti => noti.type === 'other'),
        };
        // console.log("Categorized", categorized);
        if (data.length === 0) {
          setNotifications({
            elec: [],
            water: [],
            ahu: [],
            chiller: [],
            other: []
          });
          return;
        }

        if (data.length > 0) {
          // alert('New notifications available!');
          setNotifications(categorized);
        }
      } catch (error) {
        console.error('Error fetching notifications:', error);
        // Reset notifications to empty if there's an error
        setNotifications({
          elec: [],
          water: [],
          ahu: [],
          chiller: [],
          other: []
        });
      }
    };

    const interval = setInterval(() => {
      fetchNotifications();
    }, 100); // Check every 10 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const getBgColor = (noti_case_level) => {
    if (noti_case_level === 1) return 'bg-gradient-to-b from-white from-50% to-kmutt_yellow-100 to-50%';
    if (noti_case_level === 2) return 'bg-gradient-to-b from-white from-50% to-kmutt_red-100 to-50%';
    return 'bg-gradient-to-b from-white from-50% to-kmutt_green-100 to-50%';
  };

  const getIconName = (noti_case_level) => {
    if (noti_case_level === 1) return 'fas fa-face-surprise';
    if (noti_case_level === 2) return 'fas fa-face-sad-tear';
    return 'fas fa-face-smile';
  };

  const getStatTitle = (noti_case_level) => {
    // console.log("Status:", noti_case_level); 
    return noti_case_level === 1 ? 'Warning' : (noti_case_level === 2 ? 'Error' : 'Normal');
  };

  return (
    <>
      <div className="w-full mx-auto items-start flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
        <a
          className="text-white text-2xl uppercase hidden lg:inline-block font-semibold"
        >
          Dashboard
        </a>
      </div>

      <div className="flex flex-wrap mt-8 justify-center ">

        <div className="w-full xl:w-2/12 px-4 mt-4">
          <CardDashboard
            bgcolor={getBgColor(notifications.elec[0]?.noti_case_level)}
            statSubtitle="Electric"
            statTitle={getStatTitle(notifications.elec[0]?.noti_case_level)}
            statIconName="fas fa-bolt"
            statIconColor="bg-gray-300"
            statStatus={getIconName(notifications.elec[0]?.noti_case_level)}
            notificationCount={notifications.elec.length}
            notifications={notifications.elec}
          />
        </div>

        <div className="w-full xl:w-2/12 px-4 mt-4">
          <CardDashboard
            bgcolor={getBgColor(notifications.water[0]?.noti_case_level)}
            statSubtitle="Tap Water"
            statTitle={getStatTitle(notifications.water[0]?.noti_case_level)}
            statIconName="fas fa-droplet"
            statIconColor="bg-gray-300"
            statStatus={getIconName(notifications.water[0]?.noti_case_level)}
            notificationCount={notifications.water.length}
            notifications={notifications.water}
          />
        </div>

        <div className="w-full xl:w-2/12 px-4 mt-4">
          <CardDashboard
            bgcolor={getBgColor(notifications.chiller[0]?.noti_case_level)}
            statSubtitle="Chiller"
            statTitle={getStatTitle(notifications.chiller[0]?.noti_case_level)}
            statIconName="fas fa-snowflake"
            statIconColor="bg-gray-300"
            statStatus={getIconName(notifications.chiller[0]?.noti_case_level)}
            notificationCount={notifications.chiller.length}
            notifications={notifications.chiller}
          />
        </div>

        <div className="w-full xl:w-2/12 px-4 mt-4">
          <CardDashboard
            bgcolor={getBgColor(notifications.ahu[0]?.noti_case_level)}
            statSubtitle="AHU"
            statTitle={getStatTitle(notifications.ahu[0]?.noti_case_level)}
            statIconName="fas fa-wind"
            statIconColor="bg-gray-300"
            statStatus={getIconName(notifications.ahu[0]?.noti_case_level)}
            notificationCount={notifications.ahu.length}
            notifications={notifications.ahu}
          />
        </div>

        <div className="w-full xl:w-2/12 px-4 mt-4">
          <CardDashboard
            bgcolor={getBgColor(notifications.other[0]?.noti_case_level)}
            statSubtitle="Other"
            statTitle={getStatTitle(notifications.other[0]?.noti_case_level)}
            statIconName="fas fa-gear"
            statIconColor="bg-gray-300"
            statStatus={getIconName(notifications.other[0]?.noti_case_level)}
            notificationCount={notifications.other.length}
            notifications={notifications.other}
          />
          
        </div>
      


        {/* Alert Notification */}
        {/* <div className=" w-95 px-4 mt-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white rounded-3xl mb-6 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 py-1 max-w-full flex-grow flex-1">
                  <h5 className="text-slate-400 uppercase font-bold text-md">
                    Hot Notification
                  </h5>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-kmutt_blue-100">
                    <i className="fas fa-bell"></i>
                  </div>
                </div>
              </div>

              {unreadCount > 0 ? (
                <div role="alert" className="alert shadow-lg mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold">New message!</h3>
                    <div className="text-xs">You have {unreadCount} unread message(s)</div>
                  </div>
                  <Link href="/admin/notification">
                    <button className="btn btn-sm">See</button>
                  </Link>
                </div>
              ) : (
                <div role="alert" className="alert shadow-lg mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold">No message</h3>
                    <div className="text-xs">You have {unreadCount} unread message(s)</div>
                  </div>
                </div>
              )}


            </div>
          </div>
        </div> */}
      </div>

      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4 mt-8">
          <CardLineChart title="Total Power from Power meter LP11-LP15" />
        </div>

        <div className="w-full xl:w-6/12 px-4 mt-8">
          <CardLineChartAHU />
        </div>
        <div className="w-full mb-12 xl:mb-0 px-4 mt-2">
          <CardBarChart />
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;