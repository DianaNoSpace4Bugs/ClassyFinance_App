const queries = require("../queries/usersQueries")
const incomesQueries = require("../queries/incomesQueries")
const expensesQueries = require("../queries/expensesQueries")
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
    const { name, newName } = infoUser
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateUser, [name, newName])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const createUser = async (infoUser) => {
    const {
        username,
        email,
        password,
        money_limit,
        monthlyIncomeQuantity,
        quantityMonthlyCategory1Expense,
        quantityMonthlyCategory2Expense,
        quantityMonthlyCategory3Expense,
        quantityMonthlyCategory4Expense,
        quantityMonthlyCategory5Expense
    } = infoUser
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        console.log("Insertando el usuario...", [username, email, password, money_limit])
        const data = await client.query(queries.createUser, [username, email, password, money_limit])
        console.log("Insertando ingresos del usuario...", [monthlyIncomeQuantity, '', true, email])
        await client.query(incomesQueries.createIncome, [monthlyIncomeQuantity, '', true, email])
        if (quantityMonthlyCategory1Expense) {
            console.log("Insertando pagos mensuales categoria 1...")
            await client.query(expensesQueries.createExpense, [quantityMonthlyCategory1Expense, '', new Date(), true, email, 1])
        }
        if (quantityMonthlyCategory2Expense) {
            console.log("Insertando pagos mensuales categoria 2...")
            await client.query(expensesQueries.createExpense, [quantityMonthlyCategory2Expense, '', new Date(), true, email, 2])
        }
        if (quantityMonthlyCategory3Expense) {
            console.log("Insertando pagos mensuales categoria 3...")
            await client.query(expensesQueries.createExpense, [quantityMonthlyCategory3Expense, '', new Date(), true, email, 3])
        }
        if (quantityMonthlyCategory4Expense) {
            console.log("Insertando pagos mensuales categoria 4...")
            await client.query(expensesQueries.createExpense, [quantityMonthlyCategory4Expense, '', new Date(), true, email, 4])
        }
        if (quantityMonthlyCategory5Expense) {
            console.log("Insertando pagos mensuales categoria 5...")
            await client.query(expensesQueries.createExpense, [quantityMonthlyCategory5Expense, '', new Date(), true, email, 5])
        }
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
    updateUser,
    createUser
}

