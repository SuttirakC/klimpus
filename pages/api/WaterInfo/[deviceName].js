import { createPool, query, closePool } from "../../../lib/db_connection.js";

const fetchOnlineDevice = async ({ deviceName, res }) => {
    try {
        createPool();
        const query1 = "SELECT deviceStatus FROM `device_status` WHERE deviceName = ?;";
        const status = await query({
            name_db: 'klimpus_device',
            query: query1,
            values: [deviceName],
        });

        const query2 = "SELECT deviceLocation FROM `device_db` WHERE deviceName = ?;";
        const location = await query({
            name_db: 'klimpus_device',
            query: query2,
            values: [deviceName],
        });
        closePool();
        if (status.length && location.length) {
            return { deviceStatus: status[0].deviceStatus, deviceLocation: location[0].deviceLocation };
        } else {
            throw new Error('No data found from InfluxDB');
        }



    } catch (err) {
        console.error(err);
        closePool();
        res.status(500).json({ error: 'Internal server error' });
    }
};


export default async function handler(req, res) {
    var deviceName = req.query.deviceName;
    if (req.method !== 'GET') {
        res.status(405).send('Method Not Allowed');
    } else {
        if (!deviceName) {
            res.status(404).json({ error: 'Missing deviceName parameter' });
        } else {
            try {
                const data = await fetchOnlineDevice({ deviceName, res });
                res.status(200).json(JSON.stringify(data));
            } catch (error) {
                console.error('Error fetching data from MariaDB:', error);
                res.status(500).json({ error: 'Error fetching data from MariaDB' });
            }
        }
    }
}


//แบบเดิม (createConnection)
// import { query } from "../../../lib/db_device.js";

// export default async function handler(req, res) {
//     try {
//         if (req.method === 'GET') {
//             const  deviceName  = req.query.deviceName;

//             const fetchDevice = await query({
//                 query: 'SELECT deviceStatus FROM device_status WHERE deviceName = ?',
//                 values: [deviceName],
//             });
//             // console.log("fetchDev",fetchDevice);

//             const fetchLocation = await query({
//                 query: 'SELECT deviceLocation FROM device_db WHERE deviceName = ?',
//                 values: [deviceName],
//             });
//             // console.log("fetchLoc",fetchLocation);

//             if (fetchDevice.length && fetchLocation.length) {
//                 res.status(200).json({response: { deviceStatus: fetchDevice[0].deviceStatus, deviceLocation: fetchLocation[0].deviceLocation}});
//             } else {
//                 res.status(404).json({ response: { message: 'Device not found' } });
//             }
//         }

//     } catch (error) {
//         res.status(400).json({ response: { message: error.message } });
//     }
// }