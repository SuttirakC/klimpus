import { query } from '../../lib/db';

export default async function handler(req, res) {
    try {
        let usersList;
        let message;
        if (req.method === 'GET') {
            const usersList = await query({
                query: 'SELECT * FROM users',
                values: [],
            });

            res.status(200).json({ data: usersList });
        }

        if (req.method === 'POST') {
            const { username, password, email, role_id, firstname, lastname } = req.body;
            const bcrypt = require('bcrypt');
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const existingUsername = await query({
                query: 'SELECT * FROM users WHERE username = ?',
                values: [username],
            });

            const existingEmail = await query({
                query: 'SELECT * FROM users WHERE email = ?',
                values: [email],
            });

            if (existingUsername.length > 0) {
                res.status(400).json({ response: { message: 'Username already exists' } });
                return;
            }

            if (existingEmail.length > 0) {
                res.status(400).json({ response: { message: 'Email already exists' } });
                return;
            }

            const addUser = await query({
                query: 'INSERT INTO users (username, password, email, role_id, firstname, lastname) VALUES (?, ?, ?, ?, ?, ?)',
                values: [username, hashedPassword, email, role_id, firstname, lastname],
            });

            if (addUser.affectedRows) {
                message = 'Created Successfully';
            } else {
                message = 'Creation failed';
            }

            let userData = {
                username: username,
                password: password,
                email: email,
                role_id: role_id,
                firstname: firstname,
                lastname: lastname
            }

            res.status(200).json({ response: { message: message, data: userData } });
        }
    } catch (error) {
        res.status(400).json({ response: { message: error.message } });
    }
}