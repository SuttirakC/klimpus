export default async function sendNoti(status) {
    try {
        const response = await fetch('/updateNotification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status }), 
        });

        if (!response.ok) {
            throw new Error('Failed to send status to Node-RED');
        }

        const responseData = await response.json(); 

        console.log('Status sent successfully to Node-RED:', responseData);
    } catch (error) {
        console.error('Error sending status to Node-RED:', error);
    }
}
