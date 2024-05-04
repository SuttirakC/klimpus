import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

// components

export default function CardUpdate({ userId }) {

  const usernameRef = useRef();
  const emailRef = useRef();
  const roleRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();
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
      !usernameRef.current.value ||
      !emailRef.current.value ||
      !roleRef.current.value ||
      !firstnameRef.current.value ||
      !lastnameRef.current.value
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Check email format
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(emailRef.current.value)) {
      alert('Please enter a valid email address.');
      return;
    }

    const postData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        username: usernameRef.current.value.trim(),
        email: emailRef.current.value.trim(),
        role_id: roleRef.current.value,
        firstname: firstnameRef.current.value.trim(),
        lastname: lastnameRef.current.value.trim(),
      }),
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/userUpdate`, postData
    );

    const response = await res.json();
    if (response.response.message === 'Updated Successfully') {
      alert(response.response.message);
      setUpdated(true);
    } else {
      alert(response.response.message);
    }
  }

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
            <h6 className="text-slate-700 text-xl font-bold">User ID #{userData.user_id}</h6>
            <button
              className="bg-kmutt_orange-200 active:bg-kmutt_orange-200 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={updateUser}
            >
              Update Account
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
            User Information
          </h6>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-slate-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Username
                </label>
                <input
                  type="text"
                  ref={usernameRef}
                  onKeyDown={handleKeyPress}
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue={userData.username}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-slate-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email address
                </label>
                <input
                  type="email"
                  ref={emailRef}
                  onKeyDown={handleKeyPress}
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue={userData.email}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-slate-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  First Name
                </label>
                <input
                  type="text"
                  ref={firstnameRef}
                  onKeyDown={handleKeyPress}
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue={userData.firstname}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-slate-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  ref={lastnameRef}
                  onKeyDown={handleKeyPress}
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  defaultValue={userData.lastname}
                />
              </div>
            </div>
          </div>

          <hr className="mt-6 border-b-1 border-slate-300" />

          <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
            Type
          </h6>
          <form className="w-full lg:w-6/12 px-4">
            {/* <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
            <select id="type"
              ref={roleRef}
              className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              value={userData.role_id} // Use value prop instead of defaultValue
              onChange={(e) => {
                setUserData({
                  ...userData,
                  role_id: e.target.value,
                });
                // console.log("Selected role:", e.target.value);
              }}
            >
              <option value="1" >Admin</option>
              <option value="2" >Technical</option>
            </select>
          </form>

        </div>
      </div>
    </>
  );
}
