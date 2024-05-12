import mariadb from 'mariadb';

export async function query({query, values = []}) {
    const dbconnection = await mariadb.createConnection({
        host: process.env.MariaDB_HOST,
        user: process.env.MariaDB_USER,
        password: process.env.MariaDB_PASSWORD,
        database: "klimpus_device",
        connectTimeout: 10000,
    });

    try {
        const result = await dbconnection.execute(query, values);
        dbconnection.end();
        return result;
    } catch (error) {
        throw Error(error.message);
    }
}

