import { query} from "../../../lib/db_connection.js";

const fetchOnlineDevice = async ({deviceType}) => {
    try {

        const querys = "SELECT SUM(CASE WHEN ds.deviceStatus = 1 THEN 1 ELSE 0 END) AS ONLINES, COUNT(ds.deviceName) AS ALLS FROM device_db db JOIN device_status ds ON db.deviceName = ds.deviceName WHERE db.deviceType = ?;";
        const rows = await query({
            name_db: 'klimpus_device',
            query: querys,
            values: [deviceType],
        });
          if (rows[0].ALLS > 0) {
            return ({
                ONLINES: Number(rows[0].ONLINES),
                OFFLINES: Number(rows[0].ALLS) - Number(rows[0].ONLINES),
                ALLS: Number(rows[0].ALLS),
            });
        } else {
            throw new Error('No data found from InfluxDB');
        }
        

    } catch (err) {
        console.error(err);
        throw new Error('Internal server error');
    }
  };


export default async function handler(req, res) {
    var deviceType = req.query.deviceType;
    if (req.method !== 'GET') {
        res.status(405).send('Method Not Allowed');
    } else {
        if (!deviceType) {
            res.status(404).json({ error: 'Missing deviceType parameter' });
        } else {
            try {
                const data = await fetchOnlineDevice({deviceType});
                res.status(200).json(data);
            } catch (error) {
                console.error('Error fetching data from MariaDB:', error);
                res.status(500).json({ error: 'Error fetching data from MariaDB' });
            }
        }
    }
}
