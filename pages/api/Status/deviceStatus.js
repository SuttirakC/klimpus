import { query }  from "../../../lib/db_connection.js";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const q = "SELECT dc.device_showname, ( SELECT JSON_ARRAYAGG( JSON_OBJECT( 'deviceName', db.deviceName, 'deviceStatus', ds.deviceStatus, 'device_LastSeen', ds.device_LastSeen ) ORDER BY db.deviceName ASC) FROM device_db db JOIN device_status ds ON db.deviceName = ds.deviceName WHERE dc.device_name = db.deviceType ) AS lists FROM device_collaction dc;" 
      const rows = await query({
        name_db:'klimpus_device',
        query: q,
        values: [],
    });
      res.status(200).json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).end(); 
  }
}