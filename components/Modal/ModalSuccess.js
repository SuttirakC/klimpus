import React from "react";
import Link from "next/link";

const ModalSuccess = () => {
    return (
        <dialog id="create_success" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <div className="flex flex-row justify-center text-center pt-8 pb-8">
                    <div className="fas fa-circle-check text-3xl text-kmutt_green-100 mr-2"></div>
                    <h3 className="font-bold text-2xl text-kmutt_green-100">Successfully</h3>
                </div>
                <p className="py-2 text-lg">New account has been created successfully.</p>
                <div className="modal-action">
                    <form method="dialog">
                        <Link href="/admin/account">
                            <button className="btn">Close</button>
                        </Link>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default ModalSuccess;