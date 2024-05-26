// components/Modal/ModalManageDevice.js
import React from "react";

const ModalManageDevice = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <dialog id="manage_device_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <div className="flex flex-row justify-center text-center pt-4 pb-8">
          <div className="fas fa-sliders text-3xl text-slate-700 mr-2"></div>
          <h3 className="font-bold text-2xl text-kmutt_orange-200">Manage Device</h3>
        </div>
        <div className="py-2 text-lg grid grid-cols-2 gap-4">
          <button
            onClick={() => openLink("http://modld146.lib.kmutt.ac.th:8080/")}
            className="bg-kmutt_blue-100 font-semibold text-white px-4 py-2 rounded-xl shadow hover:bg-kmutt_blue-300"
          >
            ChirpStack
          </button>
          <button
            onClick={() => openLink("http://modld146.lib.kmutt.ac.th:1880/")}
            className="bg-kmutt_blue-100 font-semibold text-white px-4 py-2 rounded-xl shadow hover:bg-kmutt_blue-300"
          >
            Node-Red
          </button>
          <button
            onClick={() => openLink("http://modld146.lib.kmutt.ac.th:8086/")}
            className="bg-kmutt_blue-100 font-semibold text-white px-4 py-2 rounded-xl shadow hover:bg-kmutt_blue-300"
          >
            InfluxDB
          </button>
          <button
            onClick={() => openLink("http://modld146.lib.kmutt.ac.th:3000/")}
            className="bg-kmutt_blue-100 font-semibold text-white px-4 py-2 rounded-xl shadow hover:bg-kmutt_blue-300"
          >
            Grafana
          </button>
          <button
            onClick={() => openLink("http://modld146.lib.kmutt.ac.th:8081/")}
            className="bg-kmutt_blue-100 font-semibold text-white px-4 py-2 rounded-xl shadow hover:bg-kmutt_blue-300"
          >
            MariaDB
          </button>          
          <button
            onClick={() => openLink("http://modld146.lib.kmutt.ac.th:9000/")}
            className="bg-kmutt_blue-100 font-semibold text-white px-4 py-2 rounded-xl shadow hover:bg-kmutt_blue-300"
          >
            Portainer
          </button>          
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
