import { db } from "../Database/DbConnection.js";

export const getMachineList = async (request, response) => {
    const { rows } = await db.query("SELECT * FROM machines ORDER BY id ASC")
    response.send(rows);
}