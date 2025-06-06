import express from 'express'
import { addAlarm, deleteAlarmById, getActiveAlarm, getAlarmHistory, getAlarmLogHistoryById, getAlarmTypes, getAlarmsById, getToatlAlarmsByMachineId, getTotalAlarmCount, updateAlarm } from '../Controller/Alarms.js';

export const AlarmRoutes = express.Router()

AlarmRoutes.get('/alarms/:id', getAlarmsById);

AlarmRoutes.get('/alarm_types', getAlarmTypes);

AlarmRoutes.delete('/alarms/:id', deleteAlarmById);

AlarmRoutes.post('/alarms', addAlarm);

AlarmRoutes.put('/alarms', updateAlarm);

AlarmRoutes.get('/active_alarm', getActiveAlarm);

AlarmRoutes.get('/alarm_history', getAlarmHistory);

AlarmRoutes.get('/alarm_count', getTotalAlarmCount);

AlarmRoutes.get('/machine_alarm_count/:id', getToatlAlarmsByMachineId);

AlarmRoutes.get('/alarm_history_log/:id', getAlarmLogHistoryById);

