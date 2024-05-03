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
    onDelete(); // Call the onDelete callback when the Delete option is clicked
    closeDropdownPopover(); // Close the dropdown after clicking Delete
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