import React from "react";

const ModalRePasswordSuccess = () => {
    return (
        <dialog id="repassword_success" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <div className="flex flex-row justify-center text-center pt-8 pb-8">
                    <div className="fas fa-circle-check text-3xl text-kmutt_green-100 mr-2"></div>
                    <h3 className="font-bold text-2xl text-kmutt_green-100">Successfully</h3>
                </div>
                <p className="py-2 text-lg">Password has been set successfully.</p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default ModalRePasswordSuccess;