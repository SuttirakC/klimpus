import { query  } from "../../../lib/db_connection.js";

const fetchOnlineDevice = async ({ deviceName, res }) => {
    try {
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

        const query3 = "SELECT deviceName FROM `device_db` WHERE deviceName = ?;";
        const deviceName1 = await query({
            name_db: 'klimpus_device',
            query: query3,
            values: [deviceName],
        });

        if (status.length && location.length) {
            return { deviceName: deviceName1[0].deviceName, deviceStatus: status[0].deviceStatus, deviceLocation: location[0].deviceLocation};
        } else {
            throw new Error('No data found from InfluxDB');
        }

    } catch (err) {
        console.error(err);
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
                res.status(200).json(data);
            } catch (error) {
                console.error('Error fetching data from MariaDB:', error);
                res.status(500).json({ error: 'Error fetching data from MariaDB' });
            }
        }
    }
}
