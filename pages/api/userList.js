import { query } from '../../lib/db';

export default async function handler(req, res) {
    try {
        let usersList;
        if (req.method === 'GET') {
            // Fetch users list
            const usersList = await query({
                query: 'SELECT * FROM users',
                values: [],
            });

            // Query for Total Account count
            const totalAccount = await query({
                query: 'SELECT COUNT(*) AS totalAccount FROM users',
                values: [],
            });

            // Query for Admin Role count
            const adminRole = await query({
                query: 'SELECT COUNT(*) AS adminRole FROM users WHERE role_id = 1',
                values: [],
            });

            // Query for Technical Role count
            const technicalRole = await query({
                query: 'SELECT COUNT(*) AS technicalRole FROM users WHERE role_id = 2',
                values: [],
            });

            res.status(200).json({response: { data: usersList ,
                totalAccount: totalAccount[0].totalAccount.toString(),
                adminRole: adminRole[0].adminRole.toString(),
                technicalRole: technicalRole[0].technicalRole.toString(),
            }
            });
        }

    } catch (error) {
        res.status(400).json({message: error.message });
    }
}