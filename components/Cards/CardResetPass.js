import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

// components
import ModalPasswordNotMatch from "components/Modal/ModalPasswordNotMatch";
import ModalFillPassword from "components/Modal/ModalFillPassword";
import ModalRePasswordSuccess from "components/Modal/ModalRePasswordSuccess";
import ModalRePasswordFail from "components/Modal/ModalRePasswordFail";

export default function CardResetPass({ userId }) {

  const passwordRef = useRef();
  const rePasswordRef = useRef();
  const [userData, setUserData] = useState([]);

  async function getUser() {
    const postData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/userUpdate?id=${userId}`, postData
    );

    const response = await res.json();
    setUserData(response.response.data[0]);
    // console.log(response.response.data[0]);
  }

  async function updateUser() {

    // Check if any required input is blank
    if (
      !passwordRef.current.value ||
      !rePasswordRef.current.value
    ) {
      // alert("Please fill password.");
      document.getElementById('fillpassword').showModal();
      return;
    }

    // Check if password and re-password match
    if (passwordRef.current.value !== rePasswordRef.current.value) {
      // alert('Passwords do not match.');
      document.getElementById('pass_notmatch').showModal();
      return;
    }

    const postData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        password: passwordRef.current.value,
      }),
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/userUpdate`, postData
    );

    const response = await res.json();
    if (response.response.message === 'Reset Password Successfully') {
      document.getElementById('repassword_success').showModal();
      passwordRef.current.value = ""; // Clear password input
      rePasswordRef.current.value = ""; // Clear re-password input
    } else if (response.response.message === 'Reset Password failed') {
      document.getElementById('repassword_fail').showModal();
    }
  }

  // Handle Enter key press to trigger the "Reset Password" button
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      updateUser();
    }
  };

  useEffect(() => {
    getUser();
  }, [userId]);


  return (
    <>
      <div className="relative flex flex-col w-full break-words mb-6 shadow-lg rounded-3xl bg-slate-100 border-0">
        <div className="rounded-3xl bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">

            {/* Modal components */}
            <ModalPasswordNotMatch />
            <ModalFillPassword />
            <ModalRePasswordSuccess />
            <ModalRePasswordFail />

            <h6 className="text-slate-700 text-xl font-bold">User ID #{userData.user_id}</h6>
            <button
              className="bg-kmutt_orange-200 active:bg-kmutt_orange-200 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="password"
              onClick={updateUser}
            >
              Reset Password
            </button>

          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>

            <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
              Reset Password
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    ref={passwordRef}
                    placeholder="Password"
                    onKeyDown={handleKeyPress}
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  // defaultValue={userData.password}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Re-Password
                  </label>
                  <input
                    type="password"
                    ref={rePasswordRef}
                    placeholder="Re-Password"
                    onKeyDown={handleKeyPress}
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  // defaultValue={userData.password}
                  />
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}
