import { createPool, query, closePool } from "../../../lib/db_connection.js";

const fetchOnlineDevice = async ({deviceType}) => {
    // console.log(deviceType);
    try {
        createPool();
        const querys = "SELECT SUM(CASE WHEN ds.deviceStatus = 1 THEN 1 ELSE 0 END) AS ONLINES, COUNT(ds.deviceName) AS ALLS FROM device_db db JOIN device_status ds ON db.deviceName = ds.deviceName WHERE db.deviceType = ?;";
        const rows = await query({
            name_db: 'klimpus_device',
            query: querys,
            values: [deviceType],
        });
        console.log(rows.length);
        closePool();
        // ตรวจสอบว่ามีข้อมูลที่ได้รับมาหรือไม่
          if (rows.length > 0) {
            console.log(rows[0]);
            return ({
                ONLINES: Number(rows[0].ONLINES),
                OFFINES: Number(rows[0].ALLS) - Number(rows[0].ONLINES),
                ALLS: Number(rows[0].ALLS),
            });
        } else {
            throw new Error('No data found from InfluxDB');
        }
        // res.status(200).json(rows);
        

    } catch (err) {
        console.error(err);
        closePool();
        res.status(500).json({ error: 'Internal server error' });
    }
  };


export default async function handler(req, res) {
    var deviceType = req.query.deviceType;
    console.log(deviceType);
    if (req.method !== 'GET') {
        res.status(405).send('Method Not Allowed');
    } else {
        if (!deviceType) {
            res.status(404).json({ error: 'Missing deviceType parameter' });
        } else {
            try {
                // console.log(deviceType);
                const data = await fetchOnlineDevice({deviceType});
                console.log(data);
                res.status(200).json(data);
            } catch (error) {
                console.error('Error fetching data from MariaDB:', error);
                res.status(500).json({ error: 'Error fetching data from MariaDB' });
            }
        }
    }


 
}
