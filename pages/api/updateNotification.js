// pages/api/updateNotification.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const { status } = req.body;
        const nodeRedEndpoint = process.env.NodeRED_HOST + '/api/unable_influx';
        const response = await fetch(nodeRedEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status }),
        });
  
        if (!response.ok) {
          throw new Error('Failed to send status to Node-RED');
        }
  
        res.status(200).json({ success: true });
      } catch (error) {
        console.error('Error sending status to Node-RED:', error);
        res.status(500).json({ success: false, error: error.message });
      }
    } else {
      res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }
  }
  