import { db } from "../Database/DbConnection.js";

export const getUserList = async (request, response) => {
    const { rows } = await db.query("SELECT * FROM users")
    response.send(rows);
}

export const addUser = async (request, response) => {
    const obj = request.body;

    await db.query(`INSERT INTO users (first_name, last_name, email) VALUES ('${obj.first_name}', '${obj.last_name}', '${obj.email}')`);

    const { rows } = await db.query("SELECT * FROM users WHERE email = '" + obj.email + "'");


    response.send(...rows);
}