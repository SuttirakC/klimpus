import { query } from '../../../lib/db';

export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            const bcrypt = require('bcrypt');
            const username = req.body.username;
            const password = req.body.password;


            if (!username || !password) {
                res.status(400).json({ response: { message: 'Username or password is missing' } });
                return;
            }

            const user = await query({
                query: 'SELECT * FROM users WHERE username = ?',
                values: [username],
            });

            if (user.length === 0) {
                res.status(400).json({ response: { message: 'User not found' } });
                return;
            }

            const validPassword = await bcrypt.compare(password, user[0].password);

            if (!validPassword) {
                res.status(400).json({ response: { message: 'Invalid password' } });
                return;
            }

            res.status(200).json({ response: { message: 'ok', user: user[0] } });
        }

    } catch (error) {
        res.status(400).json({ response: { message: error.message } });
    }
}