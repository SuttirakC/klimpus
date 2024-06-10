import mariadb from 'mariadb';

export async function query({ name_db, query, values = [] }) {


    const conn = await mariadb.createConnection({
        host: process.env.MariaDB_HOST,
        user: process.env.MariaDB_USER,
        password: process.env.MariaDB_PASSWORD,
        connectionLimit: 100,
        connectTimeout: 10000,
        trace: true,
    });

    try {
        await conn.query('USE `' + name_db + '`');
        const result = await conn.query(query, values);
        conn.end();
        return result;
    } catch (error) {
        throw Error(error.message);
    } 


}
