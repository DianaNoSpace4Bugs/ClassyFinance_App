const queries = require("../queries/usersQueries")
const pool = require('../config/db_postgresql')//accede al fichero este que es el que accede al .env donde está la info


// GET
const getUserById = async (id) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion a bbdd
        const data = await client.query(queries.getUserById, [id])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const updateUser = async (infoUser) => {
    const {name, newName} = infoUser
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateUser,[name, newName])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

module.exports = {
    getUserById,
    updateUser
}

