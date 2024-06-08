import { query }  from "../../../lib/db_connection.js";


export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // createPool();
      const q = "SELECT dc.device_showname, ( SELECT JSON_ARRAYAGG( JSON_OBJECT( 'deviceName', db.deviceName, 'deviceStatus', ds.deviceStatus, 'device_LastSeen', ds.device_LastSeen ) ORDER BY db.deviceName ASC) FROM device_db db JOIN device_status ds ON db.deviceName = ds.deviceName WHERE dc.device_name = db.deviceType ) AS lists FROM device_collaction dc;" 
      const rows = await query({
        name_db:'klimpus_device',
        query: q,
        values: [],
    });
      // console.log(rows.length);
      res.status(200).json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
  // closePool();
}

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//       let conn;
//       try {
  
//         conn = await pool.getConnection();
//         const rows = await conn.query("USE '' ");
//         // rows: [ {val: 1}, meta: ... ]
        
//         const rowsData = await conn.query('SELECT 1 + 1 AS solution');
//         console.log('row data: ',rowsData);
//         res.status(200).json(rowsData);
  
//         // const dbResponse = await conn.query(`INSERT INTO myTable value (?, ?)`, [1, "mariadb"]);
//         // res: { affectedRows: 1, insertId: 1, warningStatus: 0 }
//         // res.status(200).json(dbResponse);
  
//       } catch (err) {
//         console.log('error here : ', err);
//         throw err;
//       } finally {
//         if (conn) {
//           conn.release(); //release to pool
//         }
//       }
//     }
//   }