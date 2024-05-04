import { React, useEffect, useState, useRef } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";


// components

export default function CardSettings() {

  const router = useRouter();

  const usernameRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();
  const emailRef = useRef();
  const roleRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();

  // const usernameToDeleteRef = useRef();
  // const usernameToUpdateRef = useRef();

  // const [registerUsername, setRegisterUsername] = useState(null);
  // const [registerPassword, setRegisterPassword] = useState(null);
  // const [registerRePassword, setRegisterRePassword] = useState(null);
  // const [registerEmail, setRegisterEmail] = useState(null);
  // const [registerFisrtname, setRegisterFisrtname] = useState(null);
  // const [registerLastname, setRegisterLastname] = useState(null);

  const [created, setCreated] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addUser();
    }
  };

  async function addUser() {
    // Check if any required fields are blank
    if (
      !usernameRef.current.value ||
      !passwordRef.current.value ||
      !rePasswordRef.current.value ||
      !emailRef.current.value ||
      !roleRef.current.value ||
      !firstnameRef.current.value ||
      !lastnameRef.current.value
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    // Check if password and re-password match
    if (passwordRef.current.value !== rePasswordRef.current.value) {
      alert('Passwords do not match.');
      return;
    }

    // Check email format
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(emailRef.current.value)) {
      alert('Please enter a valid email address.');
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
      alert(response.response.message);
      // alert(response.response.data.username);
      setCreated(true);
      router.push('/admin/account');
    } else {
      alert(response.response.message);
      setCreated(false);
    }
  }

  return (
    <>
      <div className="relative flex flex-col w-full break-words mb-6 shadow-lg rounded-3xl bg-slate-100 border-0">
        <div className="rounded-3xl bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-slate-700 text-xl font-bold">New Account</h6>

// P052 Start
            {/* -> pop up for create account success*/}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
//             <button className="btn bg-kmutt_orange-200 text-white font-bold uppercase text-xs" onClick={() => document.getElementById('create_success').showModal()}>Create Account</button>
            <dialog id="create_success" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-kmutt_orange-200">Message</h3>
                <div className="flex flex-row justify-center text-center pt-2">
                  <div className="fas fa-circle-check text-3xl text-kmutt_green-100 mr-2"></div>
                  <p className="py-2">New account has been created successfully.</p>
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

            {/* -> pop up for create account fail*/}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="create_fail" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-kmutt_orange-200">Message</h3>
                <div className="flex flex-row justify-center text-center pt-2">
                  <div className="fas fa-circle-xmark text-3xl text-kmutt_red-100 mr-2"></div>
                  <p className="py-2">New account has been not created!</p>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Try again</button>
                  </form>
                </div>
              </div>
            </dialog>

            {/* -> pop up for username already exist*/}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="username_already" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-kmutt_orange-200">Message</h3>
                <div className="flex flex-row justify-center text-center pt-2">
                  <div className="fas fa-circle-exclamation text-3xl text-kmutt_yellow-100 mr-2"></div>
                  <p className="py-2">Username already exist.</p>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Try again</button>
                  </form>
                </div>
              </div>
            </dialog>

            {/* -> pop up for email already exist*/}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="email_already" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-kmutt_orange-200">Message</h3>
                <div className="flex flex-row justify-center text-center pt-2">
                  <div className="fas fa-circle-exclamation text-3xl text-kmutt_yellow-100 mr-2"></div>
                  <p className="py-2">Email already exist.</p>
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

            {/* -> pop up for fill in all*/}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="fillinall" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-kmutt_orange-200">Message</h3>
                <div className="flex flex-row justify-center text-center pt-2">
                  <div className="fas fa-circle-exclamation text-3xl text-kmutt_yellow-100 mr-2"></div>
                  <p className="py-2">Please fill in all required fields.</p>
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

            {/* <Link href="/admin/account"> */}
            <button
              className="bg-kmutt_orange-200 active:bg-kmutt_orange-200 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="submit"
              onClick={addUser}
            >
              Create Account
            </button>
            {/* </Link> */}

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
                {/* {created ? <div className="text-black text-sm font-bold">User Created Successfully</div> : null} */}
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  // defaultValue="63070501005"
                  name="username"
                  placeholder="Username"
                  onKeyDown={handleKeyPress}
                  ref={usernameRef}
                // onChange={(e) => setRegisterUsername(e.target.value)}
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
                  onKeyDown={handleKeyPress}
                  ref={emailRef}
                // onChange={(e) => setRegisterEmail(e.target.value)}
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
                  onKeyDown={handleKeyPress}
                  ref={firstnameRef}
                // onChange={(e) => setRegisterFisrtname(e.target.value)}
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
                  onKeyDown={handleKeyPress}
                  ref={lastnameRef}
                // onChange={(e) => setRegisterLastname(e.target.value)}
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
                  onKeyDown={handleKeyPress}
                  ref={passwordRef}
                // onChange={(e) => setRegisterPassword(e.target.value)}
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
                  onKeyDown={handleKeyPress}
                  ref={rePasswordRef}
                // onChange={(e) => setRegisterRePassword(e.target.value)}
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
        </div>
      </div>
    </>
  );
}
