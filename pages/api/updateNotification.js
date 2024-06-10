// pages/api/updateNotification.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        // Assuming you have the status (0 or 1) in the request body
        const { status } = req.body;
  
        // Assuming you have the Node-RED API endpoint
        const nodeRedEndpoint = process.env.NodeRED_HOST + '/api/unable_influx'; // Update with your Node-RED endpoint
  
        // Make a POST request to Node-RED API
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
  
        // If successful, return success response
        res.status(200).json({ success: true });
      } catch (error) {
        // If any error occurs, return error response
        console.error('Error sending status to Node-RED:', error);
        res.status(500).json({ success: false, error: error.message });
      }
    } else {
      // If request method is not POST, return method not allowed
      res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }
  }
  