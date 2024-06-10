import { query  } from "../../../lib/db_connection.js";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const deviceInfo = await query({
        name_db: 'klimpus_device',
        query: 'SELECT * FROM device_db WHERE deviceType="FlowMeter" ORDER BY deviceName ASC'
      });
    //   console.log(notifications);
      res.status(200).json(deviceInfo);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch deviceInformation' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}