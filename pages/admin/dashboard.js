import React, { useState, useEffect } from "react";
import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardLineChartAHU from "components/Cards/CardLineChartAHU.js";
import CardDashboard from "components/Cards/CardDashboard";
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
        const categorized = {
          elec: data.filter(noti => noti.type === 'elec'),
          water: data.filter(noti => noti.type === 'water'),
          ahu: data.filter(noti => noti.type === 'ahu'),
          chiller: data.filter(noti => noti.type === 'chiller'),
          other: data.filter(noti => noti.type === 'other'),
        };
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
          setNotifications(categorized);
        }
      } catch (error) {
        console.error('Error fetching notifications:', error);
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
    }, 100); 
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

        <div className="w-full xl:w-1/5 lg:w-1/3 md:w-1/2 px-4 mt-4">
          <CardDashboard
            bgcolor={getBgColor(notifications.elec[0]?.noti_case_level)}
            statSubtitle="Electric"
            statTitle={getStatTitle(notifications.elec[0]?.noti_case_level)}
            statIconName="fas fa-bolt"
            statIconColor="bg-gray-300"
            statStatus={getIconName(notifications.elec[0]?.noti_case_level)}
            staCount={notifications.elec.length}
            linktrack="elec"
          />
        </div>

        <div className="w-full xl:w-1/5 lg:w-1/3 md:w-1/2 px-4 mt-4">
          <CardDashboard
            bgcolor={getBgColor(notifications.water[0]?.noti_case_level)}
            statSubtitle="Tap Water"
            statTitle={getStatTitle(notifications.water[0]?.noti_case_level)}
            statIconName="fas fa-droplet"
            statIconColor="bg-gray-300"
            statStatus={getIconName(notifications.water[0]?.noti_case_level)}
            staCount={notifications.water.length}
            linktrack="water"
          />
        </div>

        <div className="w-full xl:w-1/5 lg:w-1/3 md:w-1/2 px-4 mt-4">
          <CardDashboard
            bgcolor={getBgColor(notifications.chiller[0]?.noti_case_level)}
            statSubtitle="Chiller"
            statTitle={getStatTitle(notifications.chiller[0]?.noti_case_level)}
            statIconName="fas fa-snowflake"
            statIconColor="bg-gray-300"
            statStatus={getIconName(notifications.chiller[0]?.noti_case_level)}
            staCount={notifications.chiller.length}
            linktrack="chiller"
          />
        </div>

        <div className="w-full xl:w-1/5 lg:w-1/3 md:w-1/2 px-4 mt-4">
          <CardDashboard
            bgcolor={getBgColor(notifications.ahu[0]?.noti_case_level)}
            statSubtitle="AHU"
            statTitle={getStatTitle(notifications.ahu[0]?.noti_case_level)}
            statIconName="fas fa-wind"
            statIconColor="bg-gray-300"
            statStatus={getIconName(notifications.ahu[0]?.noti_case_level)}
            staCount={notifications.ahu.length}
            linktrack="ahu"
          />
        </div>

        <div className="w-full xl:w-1/5 lg:w-1/3 md:w-1/2 px-4 mt-4">
          <CardDashboard
            bgcolor={getBgColor(notifications.other[0]?.noti_case_level)}
            statSubtitle="Other"
            statTitle={getStatTitle(notifications.other[0]?.noti_case_level)}
            statIconName="fas fa-gear"
            statIconColor="bg-gray-300"
            statStatus={getIconName(notifications.other[0]?.noti_case_level)}
            staCount={notifications.other.length}
            linktrack="other"
          />
          
        </div>
      

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