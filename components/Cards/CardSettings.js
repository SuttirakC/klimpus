import {React, useEffect, useState, useRef } from "react";


// components

export default function CardSettings() {

  const usernameRef = useRef();
  const usernameToDeleteRef = useRef();
  const usernameToUpdateRef = useRef();

  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerRePassword, setRegisterRePassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerFisrtname, setRegisterFisrtname] = useState('');
  const [registerLastname, setRegisterLastname] = useState('');

  const [created, setCreated] = useState(false);


  async function addUser() {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: registerUsername,
        password: registerPassword,
        email: registerEmail,
        role_id: 1,
        firstname: registerFisrtname,
        lastname: registerLastname
      }),
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/register`,postData
      );

    const response = await res.json();
    if(response.response.message === 'Created Successfully') {
      alert('Created Successfully');
      setCreated(true);
    }else {
      alert('Creation failed');
      setCreated(false);
    }
}

  return (
    <>
      <div className="relative flex flex-col w-full break-words w-full mb-6 shadow-lg rounded-3xl bg-slate-100 border-0">
        <div className="rounded-3xl bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-slate-700 text-xl font-bold">New Account</h6>
            {/* <Link href="/admin/account"> */}
              <button
                className="bg-kmutt_orange-200 active:bg-kmutt_orange-200 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={addUser}
              >
                Create Account
              </button>
            {/* </Link> */}
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
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
                  {created ? <div className="text-black text-sm font-bold">User Created Successfully</div> : null}
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // defaultValue="63070501005"
                    name="username"
                    placeholder="Username"
                    onChange={(e) => setRegisterUsername(e.target.value)}
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
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // defaultValue="kantapat.suwa@kmutt.ac.th"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setRegisterEmail(e.target.value)}
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
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // defaultValue="Kantapat"
                    name="firstname"
                    placeholder="First Name"
                    onChange={(e) => setRegisterFisrtname(e.target.value)}
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
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // defaultValue="Suwannahong"
                    name="lastname"
                    placeholder="Last Name"
                    onChange={(e) => setRegisterLastname(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-slate-300" />

            <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
              Type
            </h6>
            <form class="w-full lg:w-6/12 px-4">
                        {/* <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
                        <select id="devices" className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                            <option selected>Choose the role</option>
                            <option value="1">Admin</option>
                            <option value="2">Technical</option>
                            {/* <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option> */}
                        </select>
                    </form>
            {/* <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <button
                  className="bg-slate-700 active:bg-slate-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Technical
                </button>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <button
                  className="bg-slate-700 active:bg-slate-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Admin
                </button>
              </div>
            </div> */}


            <hr className="mt-6 border-b-1 border-slate-300" />

            <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
              Password
            </h6>
            <div className="flex flex-wrap">
              {/* <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                  />
                </div>
              </div> */}
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // defaultValue="kantapatcutyboy12345"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setRegisterPassword(e.target.value)}
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
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // defaultValue="kantapatcutyboy12345"
                    name="re-password"
                    placeholder="Re-Password"
                    onChange={(e) => setRegisterRePassword(e.target.value)}
                  />
                </div>
              </div>
              {/* <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Postal Code"
                  />
                </div>
              </div> */}
            </div>

            {/* <hr className="mt-6 border-b-1 border-slate-300" />

            <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
              About Me
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    About me
                  </label>
                  <textarea
                    type="text"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="4"
                    defaultValue="A beautiful UI Kit and Admin for NextJS & Tailwind CSS. It is Free
                    and Open Source."
                  ></textarea>
                </div>
              </div>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
}
