import React from "react";

const ModalFail = () => {
    return (
        <dialog id="create_fail" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <div className="flex flex-row justify-center text-center pt-8 pb-8">
                    <div className="fas fa-circle-xmark text-3xl text-kmutt_red-100 mr-2"></div>
                    <h3 className="font-bold text-2xl text-kmutt_orange-200">Failed</h3>
                </div>
                <p className="py-2 text-lg">New account has been not created!</p>
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

export default ModalFail;