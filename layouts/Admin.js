import React from "react";

// components
import Navbar from "components/Navbars/AuthNavbar.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Admin({ children }) {
  return (
    <>

      <Sidebar />
      <div className="relative md:ml-64 ">
        <AdminNavbar />
        <Navbar transparent />
        <div
          className="absolute top-0 w-full h-screen bg-contain bg-center bg-cover bg-scroll"
          style={{
            backgroundImage: "url('/img/bg-lib.jpg')",
            filter: "brightness(50%)"
          }}
        />

        {/* Header */}
        <HeaderStats />

        <div className="px-4 md:px-10 mx-auto w-full -m-24">

          {children}
          <FooterAdmin/>
        </div>


      </div>

    </>
  );
}
