// components/Modal/ModalManageDevice.js
import React from "react";

const ModalManageDevice = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  const chirpstackUrl = process.env.NEXT_PUBLIC_Chirpstack_URL;
  const nodeRedUrl = process.env.NEXT_PUBLIC_NodeRed_URL;
  const influxdbUrl = process.env.NEXT_PUBLIC_InfluxDB_URL;
  const grafanaUrl = process.env.NEXT_PUBLIC_Grafana_URL;
  const mariadbUrl = process.env.NEXT_PUBLIC_MariaDB_URL;
  const portainerUrl = process.env.NEXT_PUBLIC_Portainer_URL;

  return (
    <dialog id="manage_device_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <div className="flex flex-row justify-center text-center pt-4 pb-8">
          <div className="fas fa-sliders text-3xl text-slate-700 mr-2"></div>
          <h3 className="font-bold text-2xl text-kmutt_orange-200">Manage Device</h3>
        </div>
        <div className="py-2 text-lg grid grid-cols-2 gap-4">
          <button
            onClick={() => openLink(chirpstackUrl)}
            className="bg-kmutt_blue-100 font-semibold text-white px-4 py-2 rounded-xl shadow hover:bg-kmutt_blue-300"
          >
            ChirpStack
          </button>
          <button
            onClick={() => openLink(nodeRedUrl)}
            className="bg-kmutt_blue-100 font-semibold text-white px-4 py-2 rounded-xl shadow hover:bg-kmutt_blue-300"
          >
            Node-Red
          </button>
          <button
            onClick={() => openLink(influxdbUrl)}
            className="bg-kmutt_blue-100 font-semibold text-white px-4 py-2 rounded-xl shadow hover:bg-kmutt_blue-300"
          >
            InfluxDB
          </button>
          <button
            onClick={() => openLink(grafanaUrl)}
            className="bg-kmutt_blue-100 font-semibold text-white px-4 py-2 rounded-xl shadow hover:bg-kmutt_blue-300"
          >
            Grafana
          </button>
          <button
            onClick={() => openLink(mariadbUrl)}
            className="bg-kmutt_blue-100 font-semibold text-white px-4 py-2 rounded-xl shadow hover:bg-kmutt_blue-300"
          >
            MariaDB
          </button>          
          <button
            onClick={() => openLink(portainerUrl)}
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
