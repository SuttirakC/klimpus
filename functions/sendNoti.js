export default async function sendNoti(status) {
    try {
        const response = await fetch('/updateNotification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status }), // Simplified because the variable name matches the property name
        });

        if (!response.ok) {
            throw new Error('Failed to send status to Node-RED');
        }

        const responseData = await response.json(); // Parse response body as JSON

        // Do something with the response data if needed
        console.log('Status sent successfully to Node-RED:', responseData);
    } catch (error) {
        console.error('Error sending status to Node-RED:', error);
    }
}
