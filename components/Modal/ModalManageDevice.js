// components/Modal/ModalManageDevice.js
import React from "react";
import Link from "next/link";

const ModalManageDevice = () => {
  return (
    <dialog id="manage_device_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <div className="flex flex-row justify-center text-center pt-4 pb-8">
          <div className="fas fa-sliders text-3xl text-slate-700 mr-2"></div>
          <h3 className="font-bold text-2xl text-kmutt_orange-200">Manage Device</h3>
        </div>
        <div className="py-2 text-lg">
          <h4 className="font-semibold text-xl text-slate-600 mb-2">ChirpStack</h4>
          <li className="mb-4">
            <a
              href="http://modld146.lib.kmutt.ac.th:8080/"
              target="_blank"
              className="text-blue-500 underline"
            >
              http://modld146.lib.kmutt.ac.th:8080/
            </a>
          </li>
          <hr className="border-t border-slate-300 my-4" />
          <h4 className="font-semibold text-xl text-slate-600 mb-2">InfluxDB</h4>
          <li>
            <a
              href="http://modld146.lib.kmutt.ac.th:8086/"
              target="_blank"
              className="text-blue-500 underline"
            >
              http://modld146.lib.kmutt.ac.th:8086/
            </a>
          </li>
          <hr className="border-t border-slate-300 my-4" />
          <h4 className="font-semibold text-xl text-slate-600 mb-2">MariaDB</h4>
          <li>
            <a
              href="http://modld146.lib.kmutt.ac.th:8081/"
              target="_blank"
              className="text-blue-500 underline"
            >
              http://modld146.lib.kmutt.ac.th:8081/
            </a>
          </li>
          <hr className="border-t border-slate-300 my-4" />
          <h4 className="font-semibold text-xl text-slate-600 mb-2">Grafana</h4>
          <li>
            <a
              href="http://modld146.lib.kmutt.ac.th:3000/"
              target="_blank"
              className="text-blue-500 underline"
            >
              http://modld146.lib.kmutt.ac.th:3000/
            </a>
          </li>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ModalManageDevice;
