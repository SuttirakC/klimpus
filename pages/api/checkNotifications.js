import { query } from '../../lib/db_connection';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const notifications = await query({
        name_db: 'klimpus',
        query: 'SELECT * FROM noti_case WHERE noti_case_status = 1 ORDER BY noti_case_level DESC'
      });
      res.status(200).json(notifications);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch notifications' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
