import {  query ,closePool} from "../../../../lib/db_connection.js";

const fetchOnlineDevice = async ({ deviceName }) => {
    try {
        const querys = "SELECT deviceStatus AS result FROM device_status WHERE deviceName = ?;";
        const rows = await query({
            name_db: 'klimpus_device',
            query: querys,
            values: [deviceName],
        });

        if (rows.length > 0) {
            return (rows[0]);
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
            res.status(404).json({ error: 'Missing devicename parameter' });
        } else {
            try {
                const data = await fetchOnlineDevice({ deviceName });
                res.status(200).json(data);
            } catch (error) {
                console.error('Error fetching data from MariaDB:', error);
                res.status(500).json({ error: 'Error fetching data from MariaDB' });
            }
        }
    }
}
