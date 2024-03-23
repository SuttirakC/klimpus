import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import CardTable from "components/Cards/CardTable.js";
import CardStats from "components/Cards/CardStats.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Account() {
  const router = useRouter();
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
                <div className="relative w-full pr-4 py-1 max-w-full flex-grow flex-1">
                  <h5 className="text-slate-400 uppercase font-bold text-md">
                    Create Account
                  </h5>

                  
                <Link href="/admin/CreateAccount">
                  <span
                    className={"font-semibold text-md text-kmutt_blue-100 cursor-pointer " }
                  >
                    Create New Account
                  </span>
                </Link>

                  {/* <span className="font-semibold text-md text-kmutt_blue-100 " 
                  >
                    Create New Account
                  </span> */}
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
