const queries = require("../queries/incomesQueries")
const pool = require('../config/db_postgresql');//accede al fichero este que es el que accede al .env donde está la info



// GET
const getAllIncomes = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion a bbdd
        const data = await client.query(queries.getAllIncomes)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const updateIncome = async (infoIncome) => {
    const {quantity, newQuantity} = infoIncome
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateIncome,[quantity, newQuantity])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const createIncome = async (infoIncome, email) => {
    const {quantity, description, is_monthly} = infoIncome

    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createIncome,[quantity, description, is_monthly, email])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const deleteIncomeById = async (infoIncome) => {
    const {id} = infoIncome;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteIncomeById,[id])
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
    getAllIncomes,
    updateIncome,
    createIncome,
    deleteIncomeById
}



// let newIncome = {
//     "income_id":6,
//     "quantity": "$50.00",
//     "description": "Dinero de la abuela",
//     "is_monthly": false,
//   }

// createIncome(newIncome,"mariadiana1999@example.com")
//     .then(data => console.log(data))


