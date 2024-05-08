import {React, useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// components

import CardTable from "components/Cards/CardTable.js";
import CardStats from "components/Cards/CardStats.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Account() {
  const router = useRouter();
  const [userCount, setUserCount] = useState(null);

  async function getUserCount() {
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/userList`, postData
    );

    const response = await res.json();
    setUserCount(response.response);
  }

  useEffect(() => {
    getUserCount();
  }, []);
  
  return (
    <>
      <div className="w-full mx-auto items-start flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
        <a
          className="text-white text-2xl uppercase hidden lg:inline-block font-semibold"
        // href="#pablo"
        // onClick={(e) => e.preventDefault()}
        >
          Account Control
        </a>
      </div>
      <div className="flex flex-wrap mt-8">
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            bgcolor="bg-gradient-to-b from-white from-90% to-kmutt_gray-100 to-10%"
            statSubtitle="Total Account"
            statTitleColor="text-kmutt_orange-100"
            statTitle={userCount ? userCount.totalAccount : "Loading..."}
            statIconName="fas fa-users"
            statIconColor="bg-gray-300"
          />
        </div>

        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            bgcolor="bg-gradient-to-b from-white from-90% to-kmutt_gray-200 to-10%"
            statSubtitle="Admin Role"
            statTitleColor="text-kmutt_orange-100"
            statTitle={userCount ? userCount.adminRole : "Loading..."}
            statIconName="fas fa-user-lock"
            statIconColor="bg-gray-300"
          />
        </div>

        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            bgcolor="bg-gradient-to-b from-white from-90% to-black to-10%"
            statSubtitle="Technical Role"
            statTitleColor="text-kmutt_orange-100"
            statTitle={userCount ? userCount.technicalRole : "Loading..."}
            statIconName="fas fa-user-gear"
            statIconColor="bg-gray-300"
          />
        </div>

        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-gradient-to-b from-white from-90% to-kmutt_blue-100 to-10% rounded-3xl mb-6 xl:mb-0 shadow-lg">
            <Link href="/admin/CreateAccount">
              <div className="flex-auto p-4">
                <div className="flex flex-wrap">
                  <div className="relative w-full pr-4 py-1 max-w-full flex-grow flex-1">
                    <h5 className="text-slate-400 uppercase font-bold text-md">
                      Create Account
                    </h5>

                    <span
                      className={"font-semibold text-md text-kmutt_blue-100 cursor-pointer "}
                    >
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
            </Link>
          </div>
        </div>

        <div className="w-full mt-10 px-4">
          <CardTable />
        </div>
        {/* <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div> */}
      </div>

      {/* <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardTable />
          { <CardSettings /> }
        </div>
        { <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div> }
        
      </div> */}
    </>
  );
}

Account.layout = Admin;
