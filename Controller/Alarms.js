import { db } from "../Database/DbConnection.js";
import { sendEmail } from "./EmailSender.js";

export const getAlarmsById = async (request, response) => {
  const { id } = request.params;
  const { rows } = await db.query(`SELECT * FROM get_alarms_by_id(${id});`);
  response.send(rows);
};

export const deleteAlarmById = async (request, response) => {
  const { id } = request.params;
  const { rows } = await db.query(`DELETE FROM alarms WHERE id = ${id}`);
  response.send(rows);
};

export const getAlarmTypes = async (request, response) => {
  const { rows } = await db.query("SELECT * FROM alarm_types");
  response.send(rows);
};

export const addAlarm = async (request, response) => {
  const {
    name,
    description,
    value,
    notification_list,
    threshold_value,
    alarm_type_id,
    machine_id,
  } = request.body;
  await db.query(`
  SELECT add_alarm(
    '${name}',
    '${description}',
    ${value},
    ${threshold_value},
    Array[${notification_list}],
    ${alarm_type_id},
    ${machine_id}
    );
  `);

  const { rows } = await db.query(`SELECT * FROM get_last_alarm();`);

  response.send(...rows);
};

export const updateAlarm = async (request, response) => {
  const {
    id,
    name,
    description,
    value,
    notification_list,
    threshold_value,
    alarm_type_id,
  } = request.body;
  const query = `
        SELECT update_alarm(
          ${id},             -- id of the record to update
          '${name}',    -- new name
          '${description}', -- new description
          ${value},        -- new value
          ${threshold_value},        -- new threshold_value
          ${alarm_type_id},             -- new alarm_type_id
          ARRAY[${notification_list}] -- new notification_list
      );
`;
  await db.query(query);
  const { rows } = await db.query(`SELECT * FROM get_alarm_by_alarmId(${id})`);

  // if (rows[0].status) {
  //   await sendEmail("nikhilsarode2020@gmail.com");
  // }

  response.send(...rows);
};

export const getActiveAlarm = async (request, response) => {
  const { rows } = await db.query(`SELECT * FROM get_active_alarms();`);
  response.send(rows);
};

export const getAlarmHistory = async (request, response) => {
  const { rows } = await db.query(`SELECT * FROM get_alarm_history()`);
  response.send(rows);
};

export const getTotalAlarmCount = async (request, response) => {

  const { rows } = await db.query(`SELECT * FROM get_alarm_counts()`);
  response.send(rows);
};

export const getToatlAlarmsByMachineId = async (request, response) => {
  const { id } = request.params
  const { rows } = await db.query(`SELECT * FROM get_machine_alarm_count(${id})`);
  response.send(rows);
};

export const getAlarmLogHistoryById = async (request, response) => {
  const { id } = request.params
  const { rows } = await db.query(`SELECT * FROM get_alarm_log_history_by_id(${id})`);
  response.send(rows);
};
