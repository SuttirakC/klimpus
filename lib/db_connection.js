import mariadb from 'mariadb';

let pool;

export async function createPool() {
    pool = mariadb.createPool({
        host: process.env.MariaDB_HOST,
        user: process.env.MariaDB_USER,
        password: process.env.MariaDB_PASSWORD,
        connectionLimit: 100,
        trace: true,
      });
}


export async function query({name_db ,query, values = []}) {

    // แบบ createPool()
   
    const conn = await pool.getConnection();
    try {
        await conn.query('USE `'+name_db+'`');
        const result = await conn.query(query, values);
        conn.release();
        return result;
    } catch (error) {
        conn.release();
        throw Error(error.message);
    }
}


export async function closePool() {
    if (pool) {
      pool.end();
      pool = null;
    }
  }

