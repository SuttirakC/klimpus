import React from "react";

const ModalUpdateFail = () => {
    return (
        <dialog id="update_fail" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <div className="flex flex-row justify-center text-center pt-8 pb-8">
                    <div className="fas fa-circle-xmark text-3xl text-kmutt_red-100 mr-2"></div>
                    <h3 className="font-bold text-2xl text-kmutt_orange-200">Failed</h3>
                </div>
                <p className="py-2 text-lg">This account has been not updated!</p>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Try again</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default ModalUpdateFail;