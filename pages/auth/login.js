import React from "react";
import Link from "next/link";
import Image from 'next/image'

// layout for page

import Auth from "layouts/Auth.js";

export default function Login() {
  return (
    <>    
      <div className="container mx-auto h-full">
        <div className="relative flex justify-start ">
          <Image
            alt="KMUTT Logo"
            src="/img/brand/kmuttLib_logo.png"
            width={191}
            height={70}
            quality={100}
          />
        </div>

        <div className="flex item-center justify-center relative mt-12 mb-12">
          <div variant="small" color="white" className="font-medium mr-2">
            <p className="text-3xl font-semibold text-white">KLiM</p>
          </div>
          <h2 className="box-decoration-slice bg-kmutt_yellow-100 text-white px-2 rounded-2xl text-3xl font-semibold">
            PUS
          </h2>
        </div>

        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">

              <div className="flex-auto px-12 lg:px-10 py-10 pt-6">
                <div className="text-slate-400 text-center mb-3 font-bold">
                  {/* <small>Or sign in with credentials</small> */}
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-slate-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Username
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-slate-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-slate-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded bg-slate-100 text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-slate-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <Link href="/admin/dashboard">
                      <a href="#pablo" className="text-slate-200">
                        <button
                          className="bg-kmutt_orange-100 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="button"
                        >
                          Login
                        </button>
                      </a>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-slate-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link href="/auth/register">
                  <a href="#pablo" className="text-slate-200">
                    <small>Create new account</small>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Login.layout = Auth;
