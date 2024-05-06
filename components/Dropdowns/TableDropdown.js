import React, { useState, useRef, useEffect } from "react";
import { createPopper } from "@popperjs/core";
import Link from "next/link";

const TableDropdown = ({ onEdit, onDelete }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = useRef(null);
  const popoverDropdownRef = useRef(null);

  useEffect(() => {
    if (btnDropdownRef.current && popoverDropdownRef.current && dropdownPopoverShow) {
      createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
        placement: "left-start",
      });
    }
  }, [dropdownPopoverShow]);

  const openDropdownPopover = () => {
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const handleEdit = () => {
    onEdit(); // Call the onEdit callback when the Edit option is clicked
    closeDropdownPopover(); // Close the dropdown after clicking Edit
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this account?")) {
      onDelete(); // Call the onDelete callback when the Delete option is clicked
      closeDropdownPopover(); // Close the dropdown after clicking Delete
    }
    // onDelete(); // Call the onDelete callback when the Delete option is clicked
    // closeDropdownPopover(); // Close the dropdown after clicking Delete
};

  return (
    <>
      <a
        className="text-slate-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-pen-to-square"></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded-2xl shadow-2xl min-w-48"
        }
      >
        
// P052 Start
        
         {/* <a
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
          }
          onClick={() => document.getElementById('delete_confirm').showModal()}
        >
          Delete Account
        </a> */}

        {/* -> pop up for delete confirm*/}
        <dialog id="delete_confirm" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-kmutt_orange-200 text-center">Message</h3>
            <div className="flex flex-row justify-center text-center pt-2">
              <div className="fas fa-circle-exclamation  text-3xl text-kmutt_yellow-100 mr-2"></div>
              <p className="py-2">Are you sure, you would like to delete this account?</p>
            </div>
            <div className="modal-action justify-center">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                  <button className="btn mr-10">Close</button>
                  <button className="btn ml-10 bg-kmutt_orange-200 text-white" onClick={() => document.getElementById('delete_success').showModal()}>Delete</button>
              </form>
            </div>
          </div>
        </dialog>

        {/* -> pop up for delete success*/}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="delete_success" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-kmutt_orange-200 text-center">Message</h3>
                <div className="flex flex-row justify-center text-center pt-2">
                  <div className="fas fa-circle-check text-3xl text-kmutt_green-100 mr-2"></div>
                  <p className="py-2">This account has been deleted successfully.</p>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>

            {/* -> pop up for delete fail*/}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="delete_fail" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-kmutt_orange-200 text-center">Message</h3>
                <div className="flex flex-row justify-center text-center pt-2">
                  <div className="fas fa-circle-xmark text-3xl text-kmutt_red-100 mr-2"></div>
                  <p className="py-2">This account has been not deleted!</p>
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

          <span
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 cursor-pointer"
            }
            onClick={handleEdit}
          >
            Update Account
          </span>
          
        <span
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 cursor-pointer"
          }
          onClick={handleDelete}
        >
          Delete Account
        </span>

      </div>
    </>
  );
};

export default TableDropdown;