import mariadb from 'mariadb';

let pool;

// export async function isPoolCreated() {
//     return !pool;
// }

export async function createPool() {

    if (!pool) {
        pool = mariadb.createPool({
            host: process.env.MariaDB_HOST,
            user: process.env.MariaDB_USER,
            password: process.env.MariaDB_PASSWORD,
            connectionLimit: 100,
            trace: true,
        });
        //   console.info('pool created');
    }
}


export async function query({ name_db, query, values = [] }) {

    // แบบ createPool()
    if (!pool) {
        await createPool();
    }
    // console.log("Total connections: ", pool.totalConnections());
    // console.log("Active connections: ", pool.activeConnections());
    // console.log("Idle connections: ", pool.idleConnections());
    const conn = await pool.getConnection();
    try {
        await conn.query('USE `' + name_db + '`');
        const result = await conn.query(query, values);
        conn.release();
        conn.end();
        return result;
    } catch (error) {
        // conn.release();
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
        // console.info('pool closed');
    }

}

// เพิ่มเหตุการณ์ที่จัดการ pool ในส่วนสุดท้ายของโค้ด
process.on('beforeExit', () => {
    // ตรวจสอบว่า pool ถูกสร้างแล้วหรือไม่
    if (pool) {
        // ปิด pool
        closePool();
        console.info('pool closed automatically');
    }
});

// เพิ่มเหตุการณ์ที่จัดการ pool ในส่วนสุดท้ายของโค้ด
process.on('exit', () => {
    // ตรวจสอบว่า pool ถูกสร้างแล้วหรือไม่
    if (pool) {
        // ปิด pool
        closePool();
        console.info('pool closed automatically');
    }
});


