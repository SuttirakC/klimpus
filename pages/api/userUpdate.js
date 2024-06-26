import { query } from '../../lib/db';

export default async function handler(req, res) {
    try {
        if (req.method === 'GET') {
            const { id } = req.query;
            const usersList = await query({
                query: 'SELECT * FROM users WHERE user_id = ?',
                values: [id],
            });

            res.status(200).json({
                response: { data: usersList }
            });
        }

        if (req.method === 'PUT' && !req.body.password) {
            const { user_id, username, email, role_id, firstname, lastname } = req.body;

            const existingUsername = await query({
                query: 'SELECT * FROM users WHERE username = ? AND user_id != ?',
                values: [username, user_id],
            });

            const existingEmail = await query({
                query: 'SELECT * FROM users WHERE email = ? AND user_id != ?',
                values: [email, user_id],
            });

            if (existingUsername.length > 0) {
                res.status(400).json({ response: { message: 'Username already exists' } });
                return;
            }

            if (existingEmail.length > 0) {
                res.status(400).json({ response: { message: 'Email already exists' } });
                return;
            }

            const updateUser = await query({
                query: 'UPDATE users SET username = ?, email = ?, role_id = ?, firstname = ?, lastname = ? WHERE user_id = ?',
                values: [username, email, role_id, firstname, lastname, user_id],
            });

            if (updateUser.affectedRows) {
                res.status(200).json({ response: { message: 'Updated Successfully' } });
            } else {
                res.status(400).json({ response: { message: 'Update failed' } });
            }
        }

        if (req.method === 'PUT' && req.body.password) {
            let message;
            const { user_id, password } = req.body;
            const bcrypt = require('bcrypt');
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const updatePassword = await query({
                query: 'UPDATE users SET password = ? WHERE user_id = ?',
                values: [hashedPassword, user_id],
            });

            if (updatePassword.affectedRows) {
                message = 'Reset Password Successfully';
            } else {
                message = 'Reset Password failed';
            }

            res.status(200).json({ response: { message: message } });

        }

    } catch (error) {
        res.status(400).json({ response: { message: error.message } });
    }
}