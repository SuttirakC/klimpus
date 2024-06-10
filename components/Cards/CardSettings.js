import { React, useRef } from "react";
import ModalSuccess from "components/Modal/ModalSuccess";
import ModalFail from "components/Modal/ModalFail";
import ModalUsernameExist from "components/Modal/ModalUsernameExist";
import ModalEmailExist from "components/Modal/ModalEmailExist";
import ModalEmailFormat from "components/Modal/ModalEmailFormat";
import ModalPasswordNotMatch from "components/Modal/ModalPasswordNotMatch";
import ModalPasswordValidation from "components/Modal/ModalPasswordValidation";
import ModalFillInAll from "components/Modal/ModalFillInAll";

export default function CardSettings() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();
  const emailRef = useRef();
  const roleRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addUser();
    }
  };

  async function addUser() {
    if (
      !usernameRef.current.value ||
      !passwordRef.current.value ||
      !rePasswordRef.current.value ||
      !emailRef.current.value ||
      !roleRef.current.value ||
      !firstnameRef.current.value ||
      !lastnameRef.current.value
    ) {
      document.getElementById('fillinall').showModal();
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

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(emailRef.current.value)) {
      document.getElementById('email_format').showModal();
      return;
    }

    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameRef.current.value.trim(),
        password: passwordRef.current.value.trim(),
        email: emailRef.current.value.trim(),
        role_id: roleRef.current.value,
        firstname: firstnameRef.current.value.trim(),
        lastname: lastnameRef.current.value.trim(),
      }),
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/register`, postData
    );

    const response = await res.json();
    if (response.response && response.response.message === 'Created Successfully') {
      document.getElementById('create_success').showModal();
    } else if (response.response && response.response.message === 'Creation failed') {
      document.getElementById('create_fail').showModal();
    } else if (response.response && response.response.message === 'Username already exists') {
      document.getElementById('username_already').showModal();
    } else if (response.response && response.response.message === 'Email already exists') {
      document.getElementById('email_already').showModal();
    }


  }

  return (
    <>
      <div className="relative flex flex-col w-full break-words mb-6 shadow-lg rounded-3xl bg-slate-100 border-0">
        <div className="rounded-3xl bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-slate-700 text-xl font-bold">New Account</h6>

            <ModalSuccess />
            <ModalFail />
            <ModalFillInAll />
            <ModalUsernameExist />
            <ModalPasswordNotMatch />
            <ModalEmailExist />
            <ModalEmailFormat />
            <ModalPasswordValidation />

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
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  name="username"
                  id="username"
                  placeholder="Username"
                  onKeyDown={handleKeyPress}
                  ref={usernameRef}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-slate-600 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onKeyDown={handleKeyPress}
                  ref={emailRef}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-slate-600 text-xs font-bold mb-2"
                  htmlFor="firstname"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  onKeyDown={handleKeyPress}
                  ref={firstnameRef}
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-slate-600 text-xs font-bold mb-2"
                  htmlFor="lastname"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  onKeyDown={handleKeyPress}
                  ref={lastnameRef}
                />
              </div>
            </div>
          </div>

          <hr className="mt-6 border-b-1 border-slate-300" />

          <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
            Type
          </h6>
          <form className="w-full lg:w-6/12 px-4">
            <select id="type" ref={roleRef} className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
              <option value="" hidden>Choose the role</option>
              <option value="1">Admin</option>
              <option value="2">Technical</option>
            </select>
          </form>


          <hr className="mt-6 border-b-1 border-slate-300" />

          <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
            Password
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
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onKeyDown={handleKeyPress}
                  ref={passwordRef}
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
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  name="re-password"
                  id="re-password"
                  placeholder="Re-Password"
                  onKeyDown={handleKeyPress}
                  ref={rePasswordRef}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-6 justify-end">
            <button
              className="bg-kmutt_blue-100 hover:bg-kmutt_blue-300 active:bg-kmutt_blue-100 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={addUser}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
