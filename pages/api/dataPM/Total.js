import { InfluxDB } from '@influxdata/influxdb-client';
import { DateTime } from 'luxon';

// สร้าง InfluxDB client instance
const influxDBClient = new InfluxDB({ url: process.env.InfluxDB_HOST, token: process.env.InfluxDB_TOKEN  });
const queryApi = influxDBClient.getQueryApi('kmutt_lib');
// Calculate the current date in the required format
const tomonth =DateTime.now().startOf('month').toISODate() + "T00:00:00.001Z";
// console.log(tomonth);

const fetchInfluxData_totalEn = async () => {
  // console.log(deviceName.deviceName);
  try {
    // สร้างคำสั่ง query ข้อมูลจาก InfluxDB
    const query =    
    `
    import "timezone"
    from(bucket: "raw_data")
      |> range(start: -1y)
      |> filter(fn: (r) => r["_measurement"] == "PowerMeter" )
      |> filter(fn: (r) => r["_field"] == "energy")
      |> aggregateWindow(every: 1d, fn: last, location: timezone.location(name: "Asia/Bangkok"))
      |> last()
      |> group()
      |> sum()
    `;

    // // ทำการ query ข้อมูลจาก InfluxDB โดยใช้ getQueryApi
    const response = await queryApi.collectRows(query);

    // ตรวจสอบว่ามีข้อมูลที่ได้รับมาหรือไม่
    if (response.length > 0) {
      // console.log(response)
      // return JSON.stringify(response[0]);
      return response[0]._value;
    } else {
      throw new Error('No data found from InfluxDB');
    }
  } catch (error) {
    console.error('Error fetching data from InfluxDB:', error);
    throw error;
  }
};

const fetchInfluxData_yesEn = async () => {
  // console.log(deviceName.deviceName);
  try {
    // สร้างคำสั่ง query ข้อมูลจาก InfluxDB
    const query =    
    `
    from(bucket: "report_summary_daily_energy")
      |> range(start: -1y)
      |> filter(fn: (r) => r["_measurement"] == "PowerMeter")
      |> filter(fn: (r) => r["_field"] == "energy")
      |> group()
      |> sum()
    `;

    // // ทำการ query ข้อมูลจาก InfluxDB โดยใช้ getQueryApi
    const response = await queryApi.collectRows(query);

    // ตรวจสอบว่ามีข้อมูลที่ได้รับมาหรือไม่
    if (response.length > 0) {
      // console.log(response)
      // return JSON.stringify(response[0]);
      return response[0]._value;
    } else {
      throw new Error('No data found from InfluxDB');
    }
  } catch (error) {
    console.error('Error fetching data from InfluxDB:', error);
    throw error;
  }
};

const fetchInfluxData_moEn = async () => {
  // console.log(deviceName.deviceName);
  try {
    // สร้างคำสั่ง query ข้อมูลจาก InfluxDB
    const query =    
    `
    import "strings"
    import "timezone"
   
    cur_mo = time(v: "${tomonth}")
    from(bucket: "report_summary_daily_energy")
      |> range(start: -1y, stop: cur_mo)
      |> filter(fn: (r) => r["_measurement"] == "PowerMeter")
      |> filter(fn: (r) => r["_field"] == "energy")
      |> group()
      |> sum()
    `;

    // // ทำการ query ข้อมูลจาก InfluxDB โดยใช้ getQueryApi
    const response = await queryApi.collectRows(query);

    // ตรวจสอบว่ามีข้อมูลที่ได้รับมาหรือไม่
    if (response.length > 0) {
      // console.log(response)
      // return JSON.stringify(response[0]);
      return response[0]._value;
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

    try {
      const energy_total = await fetchInfluxData_totalEn();
      const energy_yestd = await fetchInfluxData_yesEn();
      const energy_premo = await fetchInfluxData_moEn();
      const energy_today = energy_total - energy_yestd;
      const energy_tomon = energy_total - energy_premo;

      res.status(200).json({
        "energy_today": energy_today,
        "energy_thisMonth" : energy_tomon,
        "energy_total": energy_total,
      });
    } catch (error) {
      console.error('Error fetching data from InfluxDB:', error);
      res.status(500).json({ error: 'Error fetching data from InfluxDB' });
    }
  
}