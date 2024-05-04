import { InfluxDB } from '@influxdata/influxdb-client';


// สร้าง InfluxDB client instance
const influxDBClient = new InfluxDB({ url: 'http://10.13.253.146:8086/', token: 'rnyByZstwsxmgePL9Y1uDP2xzNvLDkwxk7EjqjkAkSrjozYO4KJ4YlBV4aDOtwC7bd1GYBrcB93tDdu6oD5hMQ=='  });
const queryApi = influxDBClient.getQueryApi('kmutt_lib');

const fetchInfluxData = async (value) => {
    // console.log(deviceName.deviceName);
  try {
    // สร้างคำสั่ง query ข้อมูลจาก InfluxDB
    const query = 
    `
    import "influxdata/influxdb/schema"
    from(bucket: "raw_data")
    |> range(start: -1h)
    |> filter(fn: (r) => r["_measurement"] == "PowerMeter")
    |> filter(fn: (r) => r["device_name"] == "${value}")
    |> last()
    |> schema.fieldsAsCols()
    `;
    
    // // ทำการ query ข้อมูลจาก InfluxDB โดยใช้ getQueryApi
    const response = await queryApi.collectRows( query );

    // ตรวจสอบว่ามีข้อมูลที่ได้รับมาหรือไม่
    if (response.length > 0) {
      // console.log(response)
      return JSON.stringify(response[0]);
    } else {
      throw new Error('No data found from InfluxDB');
    }
  } catch (error) {
    console.error('Error fetching data from InfluxDB:', error);
    throw error;
  }
};


// pages/api/data.js
export default async function handler(req, res) {
  const {deviceName}  = req.query;
  if (!deviceName) {
    res.status(400).json({ error: 'Missing deviceName parameter' });
  } else {
      try {
          const data = await fetchInfluxData(deviceName);
          res.status(200).json(data);
      } catch (error) {
          console.error('Error fetching data from InfluxDB:', error);
          res.status(500).json({ error: 'Error fetching data from InfluxDB' });
      }
  }
}