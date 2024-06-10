import React from "react";

const ModalEmailFormat = () => {
    return (
        <dialog id="email_format" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <div className="flex flex-row justify-center text-center pt-8 pb-8">
                    <div className="fas fa-circle-exclamation text-3xl text-kmutt_yellow-100 mr-2"></div>
                    <h3 className="font-bold text-2xl text-kmutt_orange-200">Message</h3>
                </div>
                <p className="py-2 text-lg">Please enter a valid email address.</p>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Try again</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default ModalEmailFormat;