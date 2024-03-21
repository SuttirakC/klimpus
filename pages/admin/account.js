import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import CardTable from "components/Cards/CardTable.js";
import CardStats from "components/Cards/CardStats.js";
import Navbar from "components/Navbars/AuthNavbar.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Settings() {
  return (
    <>
   <div className="flex flex-wrap mt-4">
        
        <div className="w-full mb-12 px-4">
          
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

Settings.layout = Admin;
