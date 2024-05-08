import { query } from '../../../lib/db';

export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            // console.log('reqBody', req.body);
            const username = req.body.username;
            const password = req.body.password;


            if (!username || !password) {
                res.status(400).json({ response: { message: 'Username or password is missing' } });
                return;
            }

            // Check if username exists
            const user = await query({
                query: 'SELECT * FROM users WHERE username = ?',
                values: [username],
            });

            const bcrypt = require('bcrypt');
            // Load hash from your password DB.
            // bcrypt.compare(password, user[0].password, function (err, result) {
            //     // result == true
            // });

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


        // const addUser = await query({
        //     query: 'INSERT INTO users (username, password, email, role_id, firstname, lastname) VALUES (?, ?, ?, ?, ?, ?)',
        //     values: [username, hashedPassword, email, role_id, firstname, lastname],
        // });

        // if (addUser.affectedRows) {
        //     message = 'Created Successfully';
        // } else {
        //     message = 'Creation failed';
        // }

        // let userData = {
        //     // user_id: addUser.affectedRows,
        //     username: username,
        //     password: password,
        //     email: email,
        //     role_id: role_id,
        //     firstname: firstname,
        //     lastname: lastname
        // }

        // res.status(200).json({ response: { message: message, user: userData } });
    } catch (error) {
        res.status(400).json({ response: { message: error.message } });
    }
}