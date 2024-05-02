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
            // const username = req.body.username;
            // const password = req.body.password;
            // const email = req.body.email;
            // const role_id = req.body.role_id;
            // const firstname = req.body.firstname;
            // const lastname = req.body.lastname;

            // Check if username exists
            const existingUsername = await query({
                query: 'SELECT * FROM users WHERE username = ?',
                values: [username],
            });

            // Check if email exists
            const existingEmail = await query({
                query: 'SELECT * FROM users WHERE email = ?',
                values: [email],
            });

            if (existingUsername.length > 0) {
                res.status(400).json({response: {message: 'Username already exists' }});
                return;
            }

            if (existingEmail.length > 0) {
                res.status(400).json({response:{ message: 'Email already exists' }});
                return;
            }

            const addUser = await query({
                query: 'INSERT INTO users (username, password, email, role_id, firstname, lastname) VALUES (?, ?, ?, ?, ?, ?)',
                values: [username, password, email, role_id, firstname, lastname],
            });

            if (addUser.affectedRows) {
                message = 'Created Successfully';
            } else {
                message = 'Creation failed';
            }

            let userData = {
                // user_id: addUser.affectedRows,
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
        res.status(400).json({ response: { message: error.message }});
    }
}