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

      <div
          className="z-0 fixed  top-0 left-0 size-full bottom-0 w-full h-full  bg-center bg-cover bg-no-repeat bg-fixed bg-clip-padding"
          style={{
            backgroundImage: "url('/img/bg-lib.jpg')",
            filter: "brightness(50%)"
          }}
        />
      <Sidebar />
      <div className="relative md:ml-64 ">
        <AdminNavbar />
        <Navbar transparent />
        

        {/* Header */}
        {/* <HeaderStats /> */}
        
        <div className="relative md:pt-32 pb-32 pt-12">
          
        </div>

        <div className="relative px-4 md:px-10 min-h-full mx-auto w-full -m-36">

          {children}
          <FooterAdmin/>
        </div>
       


      </div>

    </>
  );
}
