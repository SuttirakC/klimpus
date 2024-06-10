import React, { useState, useRef, useEffect } from "react";
import { createPopper } from "@popperjs/core";
import ModalDeleteConfirm from "components/Modal/ModalDeleteConfirm";

const TableDropdown = ({ onEdit, onDelete }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = useRef(null);
  const popoverDropdownRef = useRef(null);
  const deleteModalRef = useRef(null);

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
    onEdit(); 
    closeDropdownPopover(); 
  };

  const handleDelete = () => {
    if (deleteModalRef.current) {
      deleteModalRef.current.showModal();
    }
  };

  const confirmDelete = () => {
    onDelete();
    closeDropdownPopover();
  };

  return (
    <>
      <a
        className="text-slate-500 py-1 px-3"
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

        <ModalDeleteConfirm
          deleteModalRef={deleteModalRef}
          confirmDelete={confirmDelete}
          closeDropdownPopover={closeDropdownPopover}
        />

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