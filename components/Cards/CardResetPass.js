import React, { useState, useRef, useEffect } from "react";
import ModalPasswordNotMatch from "components/Modal/ModalPasswordNotMatch";
import ModalFillPassword from "components/Modal/ModalFillPassword";
import ModalRePasswordSuccess from "components/Modal/ModalRePasswordSuccess";
import ModalRePasswordFail from "components/Modal/ModalRePasswordFail";
import ModalPasswordValidation from "components/Modal/ModalPasswordValidation";

export default function CardResetPass({ userId }) {

  const passwordRef = useRef();
  const rePasswordRef = useRef();
  const [userData, setUserData] = useState([]);

  async function updateUser() {
    if (
      !passwordRef.current.value ||
      !rePasswordRef.current.value
    ) {
      document.getElementById('fillpassword').showModal();
      return;
    }

    if (passwordRef.current.value.length < 8) {
      document.getElementById('pass_too_short').showModal();
      return;
    }

    if (passwordRef.current.value !== rePasswordRef.current.value) {
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
      passwordRef.current.value = ""; 
      rePasswordRef.current.value = ""; 
    } else if (response.response.message === 'Reset Password failed') {
      document.getElementById('repassword_fail').showModal();
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      updateUser();
    }
  };

  useEffect(() => {
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
    }

    getUser();
  }, [userId]);


  return (
    <>
      <div className="relative flex flex-col w-full break-words mb-6 shadow-lg rounded-3xl bg-slate-100 border-0">
        <div className="rounded-3xl bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">

            <ModalPasswordNotMatch />
            <ModalFillPassword />
            <ModalRePasswordSuccess />
            <ModalRePasswordFail />
            <ModalPasswordValidation />


            <h6 className="text-slate-700 text-xl font-bold">User ID #{userData.user_id}</h6>

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
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    ref={passwordRef}
                    placeholder="Password"
                    onKeyDown={handleKeyPress}
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="re-password"
                  >
                    Re-Password
                  </label>
                  <input
                    type="password"
                    id="re-password"
                    ref={rePasswordRef}
                    placeholder="Re-Password"
                    onKeyDown={handleKeyPress}
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>

            </div>

          </form>
          <div className="flex flex-wrap mt-6 justify-end">
            <button
              className="bg-kmutt_blue-100 hover:bg-kmutt_blue-300 active:bg-kmutt_blue-100 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={updateUser}
            >
              Reset Password
            </button>
          </div>
        </div>

      </div>
    </>
  );
}
