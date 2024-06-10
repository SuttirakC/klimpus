import { InfluxDB } from '@influxdata/influxdb-client';
import { DateTime } from 'luxon';

const influxDBClient = new InfluxDB({ url: process.env.InfluxDB_HOST, token: process.env.InfluxDB_TOKEN  });
const queryApi = influxDBClient.getQueryApi('kmutt_lib');
const tomonth =DateTime.now().startOf('month').toISODate() + "T00:00:00.001Z";

const fetchInfluxData_totalEn = async () => {
  try {
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

    const response = await queryApi.collectRows(query);

    if (response.length > 0) {
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
  try {
    const query =    
    `
    from(bucket: "report_summary_daily_energy")
      |> range(start: -1y)
      |> filter(fn: (r) => r["_measurement"] == "PowerMeter")
      |> filter(fn: (r) => r["_field"] == "energy")
      |> group()
      |> sum()
    `;

    const response = await queryApi.collectRows(query);

    if (response.length > 0) {
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
  try {
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

    const response = await queryApi.collectRows(query);

    if (response.length > 0) {
      return response[0]._value;
    } else {
      throw new Error('No data found from InfluxDB');
    }
  } catch (error) {
    console.error('Error fetching data from InfluxDB:', error);
    throw error;
  }
};


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