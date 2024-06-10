import { InfluxDB } from '@influxdata/influxdb-client';

const influxDBClient = new InfluxDB({ url: process.env.InfluxDB_HOST, token: process.env.InfluxDB_TOKEN  });
const queryApi = influxDBClient.getQueryApi('kmutt_lib');
const fetchInfluxData = async () => {
  try {
    const query = 
    `
    import "influxdata/influxdb/schema"
    from(bucket: "raw_data")
    |> range(start: -29d)
    |> filter(fn: (r) => r["device_name"] == "FlowMeter_6FL")
    |> last()
    |> schema.fieldsAsCols()
    `;
  
    const response = await queryApi.collectRows( query );

    if (response.length > 0) {
      return (response[0]);
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
          const data = await fetchInfluxData();
          res.status(200).json(data);
      } catch (error) {
          console.error('Error fetching data from InfluxDB:', error);
          res.status(500).json({ error: 'Error fetching data from InfluxDB' });
      }

}