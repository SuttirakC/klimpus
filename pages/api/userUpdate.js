import { query } from '../../lib/db';

export default async function handler(req, res) {
    try {
        if (req.method === 'GET') {
            const { id } = req.query; // Access the user_id from query parameters
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

            // Check if username exists for other users
            const existingUsername = await query({
                query: 'SELECT * FROM users WHERE username = ? AND user_id != ?',
                values: [username, user_id],
            });

            // Check if email exists for other users
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
            const { user_id, password } = req.body;

            const updateUser = await query({
                query: 'UPDATE users SET password = ? WHERE user_id = ?',
                values: [password, user_id],
            });

            if (updateUser.affectedRows) {
                res.status(200).json({ response: { message: 'Reset Password Successfully' } });
            } else {
                res.status(400).json({ response: { message: 'Reset Password failed' } });
            }
        }

    } catch (error) {
        res.status(400).json({ response: {message: error.message }});
    }
}