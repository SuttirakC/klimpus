import React from "react";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0"
            : "relative") + " pb-6"
        }
      >
        <div className="container mx-auto px-4">
          {/* <hr className="mb-6 border-b-1 " /> //line footer*/}

          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-white font-semibold py-1 text-center md:text-left">
                © {new Date().getFullYear()}{" "}
                <a>
                  klimpus.kmutt.ac.th  is a subsidiary website of KMUTT. All rights reserved.
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
