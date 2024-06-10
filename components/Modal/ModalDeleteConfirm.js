import React from 'react';

const ModalDeleteConfirm = ({deleteModalRef, closeDropdownPopover, confirmDelete }) => {
    return (
        <dialog id="delete_confirm" ref={deleteModalRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <div className="flex flex-row justify-center text-center pt-8 pb-8">
                    <div className="fas fa-circle-exclamation  text-3xl text-kmutt_yellow-100 mr-2"></div>
                    <h3 className="font-bold text-2xl text-kmutt_orange-200 text-center">Message</h3>
                </div>
                <p className="py-2 text-lg text-center">Are you sure, you would like to delete this account?</p>
                <div className="modal-action justify-center">
                    <form method="dialog">
                        <button className="btn mr-10" onClick={closeDropdownPopover}>Close</button>
                        <button className="btn ml-10 bg-kmutt_orange-200 text-white" onClick={confirmDelete}>Delete</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default ModalDeleteConfirm;