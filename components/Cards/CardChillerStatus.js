import React from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardChillerStatus({ color, dataStatus }) {

    return (
        <>
            <div
                className={
                    "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-3xl " +
                    (color === "light" ? "bg-white" : "bg-slate-700 text-white")
                }
            >
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className={
                                    "font-semibold text-lg " +
                                    (color === "light" ? "text-slate-700" : "text-white")
                                }
                            >
                                Chiller Performance
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-slate-50 text-slate-500 border-slate-100"
                                            : "bg-slate-600 text-slate-200 border-slate-500")
                                    }
                                >
                                    Device Status
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-slate-50 text-slate-500 border-slate-100"
                                            : "bg-slate-600 text-slate-200 border-slate-500")
                                    }
                                >
                                    No.1
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-slate-50 text-slate-500 border-slate-100"
                                            : "bg-slate-600 text-slate-200 border-slate-500")
                                    }
                                >
                                    No.2
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-slate-50 text-slate-500 border-slate-100"
                                            : "bg-slate-600 text-slate-200 border-slate-500")
                                    }
                                >
                                    No.3
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-slate-50 text-slate-500 border-slate-100"
                                            : "bg-slate-600 text-slate-200 border-slate-500")
                                    }
                                >
                                    No.4
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                        (color === "light"
                                            ? "bg-slate-50 text-slate-500 border-slate-100"
                                            : "bg-slate-600 text-slate-200 border-slate-500")
                                    }
                                >
                                    No.5
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left flex items-center">
                                    Fan Status
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className={dataStatus.showFan_1 ? "fas fa-circle text-kmutt_green-100 mr-2" : "fas fa-circle text-kmutt_red-100 mr-2"}></i> {dataStatus.showFan_1 ? "Online" : "Offline"}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className={dataStatus.showFan_2 ? "fas fa-circle text-kmutt_green-100 mr-2" : "fas fa-circle text-kmutt_red-100 mr-2"}></i> {dataStatus.showFan_2 ? "Online" : "Offline"}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className={dataStatus.showFan_3 ? "fas fa-circle text-kmutt_green-100 mr-2" : "fas fa-circle text-kmutt_red-100 mr-2"}></i> {dataStatus.showFan_3 ? "Online" : "Offline"}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className={dataStatus.showFan_4 ? "fas fa-circle text-kmutt_green-100 mr-2" : "fas fa-circle text-kmutt_red-100 mr-2"}></i> {dataStatus.showFan_4 ? "Online" : "Offline"}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className={dataStatus.showFan_5 ? "fas fa-circle text-kmutt_green-100 mr-2" : "fas fa-circle text-kmutt_red-100 mr-2"}></i> {dataStatus.showFan_5 ? "Online" : "Offline"}
                                </td>
                            </tr>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left flex items-center">
                                    Chiller Status
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className={dataStatus.statusChiller_1 ? "fas fa-circle text-kmutt_green-100 mr-2" : "fas fa-circle text-kmutt_red-100 mr-2"}></i> {dataStatus.statusChiller_1 ? "Online" : "Offline"}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className={dataStatus.statusChiller_2 ? "fas fa-circle text-kmutt_green-100 mr-2" : "fas fa-circle text-kmutt_red-100 mr-2"}></i> {dataStatus.statusChiller_2 ? "Online" : "Offline"}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className={dataStatus.statusChiller_3 ? "fas fa-circle text-kmutt_green-100 mr-2" : "fas fa-circle text-kmutt_red-100 mr-2"}></i> {dataStatus.statusChiller_3 ? "Online" : "Offline"}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className={dataStatus.statusChiller_4 ? "fas fa-circle text-kmutt_green-100 mr-2" : "fas fa-circle text-kmutt_red-100 mr-2"}></i> {dataStatus.statusChiller_4 ? "Online" : "Offline"}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className={dataStatus.statusChiller_5 ? "fas fa-circle text-kmutt_green-100 mr-2" : "fas fa-circle text-kmutt_red-100 mr-2"}></i> {dataStatus.statusChiller_5 ? "Online" : "Offline"}
                                </td>
                            </tr>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left flex items-center">
                                    Pump Status
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className={dataStatus.statusPump_1 ? "fas fa-circle text-kmutt_green-100 mr-2" : "fas fa-circle text-kmutt_red-100 mr-2"}></i> {dataStatus.statusPump_1 ? "Online" : "Offline"}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className={dataStatus.statusPump_2 ? "fas fa-circle text-kmutt_green-100 mr-2" : "fas fa-circle text-kmutt_red-100 mr-2"}></i> {dataStatus.statusPump_2 ? "Online" : "Offline"}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className={dataStatus.statusPump_3 ? "fas fa-circle text-kmutt_green-100 mr-2" : "fas fa-circle text-kmutt_red-100 mr-2"}></i> {dataStatus.statusPump_3 ? "Online" : "Offline"}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className={dataStatus.statusPump_4 ? "fas fa-circle text-kmutt_green-100 mr-2" : "fas fa-circle text-kmutt_red-100 mr-2"}></i> {dataStatus.statusPump_4 ? "Online" : "Offline"}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className={dataStatus.statusPump_5 ? "fas fa-circle text-kmutt_green-100 mr-2" : "fas fa-circle text-kmutt_red-100 mr-2"}></i> {dataStatus.statusPump_5 ? "Online" : "Offline"}
                                </td>
                            </tr>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left flex items-center">
                                    Valve Status
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className={dataStatus.statusValve_1 ? "fas fa-circle text-kmutt_green-100 mr-2" : "fas fa-circle text-kmutt_red-100 mr-2"}></i> {dataStatus.statusValve_1 ? "Online" : "Offline"}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className={dataStatus.statusValve_2 ? "fas fa-circle text-kmutt_green-100 mr-2" : "fas fa-circle text-kmutt_red-100 mr-2"}></i> {dataStatus.statusValve_2 ? "Online" : "Offline"}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className={dataStatus.statusValve_3 ? "fas fa-circle text-kmutt_green-100 mr-2" : "fas fa-circle text-kmutt_red-100 mr-2"}></i> {dataStatus.statusValve_3 ? "Online" : "Offline"}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className={dataStatus.statusValve_4 ? "fas fa-circle text-kmutt_green-100 mr-2" : "fas fa-circle text-kmutt_red-100 mr-2"}></i> {dataStatus.statusValve_4 ? "Online" : "Offline"}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                    <i className={dataStatus.statusValve_5 ? "fas fa-circle text-kmutt_green-100 mr-2" : "fas fa-circle text-kmutt_red-100 mr-2"}></i> {dataStatus.statusValve_5 ? "Online" : "Offline"}
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

CardChillerStatus.defaultProps = {
    color: "light",
};

CardChillerStatus.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
