import React from "react";

const ModalPasswordNotMatch = () => {
    return (
        <dialog id="pass_notmatch" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <div className="flex flex-row justify-center text-center pt-8 pb-8">
                    <div className="fas fa-circle-exclamation text-3xl text-kmutt_yellow-100 mr-2"></div>
                    <h3 className="font-bold text-2xl text-kmutt_orange-200">Message</h3>
                </div>
                <p className="py- text-lg">Password do not match.</p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Try again</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default ModalPasswordNotMatch;