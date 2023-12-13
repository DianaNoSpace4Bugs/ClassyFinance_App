const queries = require("../queries/expensesQueries")
const pool = require('../config/db_postgresql')//accede al fichero este que es el que accede al .env donde está la info


// GET
const getAllExpenses = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion a bbdd
        const data = await client.query(queries.getAllExpenses)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const createExpense = async (infoExpense) => {
    const { expense_id, quantity, description, date, is_monthly } = infoExpense
    const fechaSeparada = date.split("T");
    const parteIzquierda = fechaSeparada[0];

    console.log(parteIzquierda);

    console.log(infoExpense);
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createExpense, [expense_id, quantity, description, parteIzquierda, is_monthly])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const deleteExpenseById = async (infoExpense) => {
    const { id } = infoExpense;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteExpenseById, [id])
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
    getAllExpenses,
    createExpense,
    deleteExpenseById
}

