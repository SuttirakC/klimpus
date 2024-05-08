import { query } from '../../lib/db';

export default async function handler(req, res) {
    try {
        if (req.method === 'DELETE') {
            const { id } = req.query;

            const deleteUser = await query({
                query: 'DELETE FROM users WHERE user_id = ?',
                values: [id],
            });

            if (deleteUser.affectedRows) {
                res.status(200).json({ response: { message: 'Deleted Successfully' } });
            } else {
                res.status(400).json({ response: { message: 'Delete failed' } });
            }
        }

    } catch (error) {
        res.status(400).json({ response: { message: error.message } });
    }
}