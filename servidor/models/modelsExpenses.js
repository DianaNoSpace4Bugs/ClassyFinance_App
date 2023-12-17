const queries = require("../queries/expensesQueries")
const pool = require('../config/db_postgresql')//accede al fichero este que es el que accede al .env donde está la info


// GET
const getAllExpenses = async (userId, categoryId, startDate, endDate, offset, limit) => {
    let client, result;
    // let startDateWithoutTime = null
    // if (startDate){
    //     const startDateSplitted = startDate.split("T");
    //     startDateWithoutTime = startDateSplitted[0];
    // }
    // let endDateWithoutTime = null
    // if (endDate){
    //     const endDateSplitted = endDate.split("T");
    //     endDateWithoutTime = endDateSplitted[0];
    // }
    console.log([userId, categoryId, startDate, endDate, offset, limit]);
    try {
        client = await pool.connect(); // Espera a abrir conexion a bbdd
        const data = await client.query(queries.getAllExpenses, [userId, categoryId, startDateWithoutTime ?? '', endDateWithoutTime ?? '', offset, limit])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const createExpense = async (infoExpense, email, category) => {
    const {quantity, description, date, is_monthly} = infoExpense
    const fechaSeparada = date.split("T");
    const parteIzquierda = fechaSeparada[0];

    console.log(parteIzquierda);

    console.log(infoExpense);
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createExpense, [quantity, description, parteIzquierda, is_monthly, email, category])
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

// let newExpense = {
//     "expense_id": 16,
//     "quantity": "$11111.45",
//     "description": "Pago a papá",
//     "date": "2022-11-15T23:00:00.000Z",
//     "is_monthly": false
//   }

// createExpense(newExpense,"mariadiana1999@example.com", "bills")
//     .then(data => console.log(data))