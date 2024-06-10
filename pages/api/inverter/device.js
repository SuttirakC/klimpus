import { InfluxDB } from '@influxdata/influxdb-client';

const influxDBClient = new InfluxDB({ url: process.env.InfluxDB_HOST, token: process.env.InfluxDB_TOKEN  });
const queryApi = influxDBClient.getQueryApi('kmutt_lib');

const fetchInfluxData_INVERTER = async () => {
    try {
        const query =
            `
    import "timezone"
    import "influxdata/influxdb/schema"
    
import "influxdata/influxdb/schema"
table1 = from(bucket: "raw_data")
    |> range(start: -1y)
    |> filter(fn: (r) => r["_measurement"] == "Inverter")
    |> filter(fn: (r) => r["_field"] == "inverter_power" )
    |> last()

table2 = from(bucket: "raw_data")
    |> range(start: -1y)
    |> filter(fn: (r) => r["_measurement"] == "Inverter")
    |> filter(fn: (r) => r["_field"] == "output_frequency_monitor_lo")
    |> last()

joinedTables = join(
  tables: {t1: table1, t2: table2},
  on: ["device_name"],
  method: "inner"
)
    |> map(fn: (r) => ({_measurement: r._measurement_t1, device_name: r.device_name,inverter_power: r._value_t1,output_frequency_monitor_lo:r._value_t2,device_eui : r.device_eui_t1,_time:r._time_t1}))

joinedTables

            `;

        const response = await queryApi.collectRows(query);

        if (response.length > 0) {
            return response;
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
        const inv_status = await fetchInfluxData_INVERTER();
       
        res.status(200).json(inv_status);
    } catch (error) {
        console.error('Error fetching data from InfluxDB:', error);
        res.status(500).json({ error: 'Error fetching data from InfluxDB' });
    }

}