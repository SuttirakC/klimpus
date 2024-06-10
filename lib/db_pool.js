import mariadb from 'mariadb';

let pool;

export async function createPool() {

    if (!pool) {
        pool = mariadb.createPool({
            host: process.env.MariaDB_HOST,
            user: process.env.MariaDB_USER,
            password: process.env.MariaDB_PASSWORD,
            connectionLimit: 100,
            trace: true,
        });
    }
}


export async function query({ name_db, query, values = [] }) {
    if (!pool) {
        await createPool();
    }
    const conn = await pool.getConnection();
    try {
        await conn.query('USE `' + name_db + '`');
        const result = await conn.query(query, values);
        conn.release();
        conn.end();
        return result;
    } catch (error) {
        closePool();
        throw Error(error.message);
    } finally {
        if (conn) {
            conn.release();
            conn.end();
        }
    }


}


export async function closePool() {
    if (pool) {
        pool.end();
        pool = null;
    }

}
process.on('beforeExit', () => {

    if (pool) {
        closePool();
        console.info('pool closed automatically');
    }
});

process.on('exit', () => {
    if (pool) {
        closePool();
        console.info('pool closed automatically');
    }
});


