import React from "react";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

export default function Auth({ children }) {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen ">
          <div
            className="absolute top-0 w-full h-screen bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: "url('/img/bg-lib.jpg')",
              filter: "brightness(50%)", // Adjust brightness to darken the image
            }}
          ></div>
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
