// import React, { useState, useEffect } from "react";
// import Chart from 'chart.js/auto';
// import { InfluxDB } from '@influxdata/influxdb-client';

// export default function CardFlowRate() {
  

//   return (
//     <>
//       <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-3xl bg-white">
//         <div className="rounded-t mt-2 px-4 py-3 bg-transparent">
//           <div className="flex flex-wrap items-center">
//             <div className="relative w-full max-w-full flex-grow flex-1">
//               <h6 className="uppercase text-slate-400 mb-1 text-xs font-semibold">
//                 Tap Water Usage @ the underground water tank inlet
//               </h6>
//               <h2 className="text-xl font-semibold text-slate-700">Flow Rate (m3/h)</h2>
//             </div>
//           </div>
//         </div>
//         <div className="p-4 flex-auto">
//           {/* Chart */}
//           <div className="relative h-64-px">
//             {/* <canvas id="line-chart-flow"></canvas> */}
//             <iframe src="http://10.13.253.146:3000/d-solo/bdk67fysuercwa/test-dashboard1?orgId=1&refresh=1m&from=now-1d&to=now&theme=light&panelId=1" 
//             width="100%" height="100%" frameborder="0"></iframe>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
