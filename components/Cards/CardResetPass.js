import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

// components

export default function CardResetPass({ userId }) {

  const passwordRef = useRef();
  const rePasswordRef = useRef();
  const [userData, setUserData] = useState([]);
  const [updated, setUpdated] = useState(false);

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
      alert("Please fill password.");
      return;
    }

    // Check if password and re-password match
    if (passwordRef.current.value !== rePasswordRef.current.value) {
      alert('Passwords do not match.');
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
      alert(response.response.message);
      setUpdated(true);
      passwordRef.current.value = ""; // Clear password input
      rePasswordRef.current.value = ""; // Clear re-password input
    } else {
      alert(response.response.message);
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

// P052 Start
            {/* -> pop up for reset pass success*/}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
//             <button className="btn bg-kmutt_orange-200 text-white font-bold uppercase text-xs" onClick={() => document.getElementById('reset_success').showModal()}>Reset Password</button>
            <dialog id="reset_success" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-kmutt_orange-200">Message</h3>
                <div className="flex flex-row justify-center text-center pt-2">
                  <div className="fas fa-circle-check text-3xl text-kmutt_green-100 mr-2"></div>
                  <p className="py-2">Password has been set successfully.</p>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <Link href="/admin/account">
                      <button className="btn">Close</button>
                    </Link>
                  </form>
                </div>
              </div>
            </dialog>

            {/* -> pop up for reset pass fail*/}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="reset_fail" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-kmutt_orange-200">Message</h3>
                <div className="flex flex-row justify-center text-center pt-2">
                  <div className="fas fa-circle-xmark text-3xl text-kmutt_red-100 mr-2"></div>
                  <p className="py-2">Password has been not set!</p>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Try again</button>
                  </form>
                </div>
              </div>
            </dialog>

            {/* -> pop up for password not match*/}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="pass_notmatch" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-kmutt_orange-200">Message</h3>
                <div className="flex flex-row justify-center text-center pt-2">
                  <div className="fas fa-circle-exclamation text-3xl text-kmutt_yellow-100 mr-2"></div>
                  <p className="py-2">Password do not match.</p>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Try again</button>
                  </form>
                </div>
              </div>
            </dialog>
            
// P052 Stop

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
                    type="text"
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
