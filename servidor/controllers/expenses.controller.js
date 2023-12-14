const modelsExpenses = require('../models/modelsExpenses'); // Importar el modelo de la BBDD

const getAllExpenses = async (req, res) => {
    const {
        userId = null,
        categoryId = null,
        startDate = null,
        endDate = null,
        offset = null,
        limit = null
    } = req.query ?? {};
    let expenses = await modelsExpenses.getAllExpenses(userId, categoryId, startDate, endDate, offset, limit);
    res.status(200).json(expenses);

}

const createExpense = async (req, res) => {
    const newExpense = req.body;
    const response = await modelsExpenses.createExpense(newExpense);
    res.status(201).json({
        "items_created": response,
        data: newExpense
    });
}


const deleteExpenseById = async (req, res) => {
    const deleteExpenseById = req.body;
    const response = await modelsExpenses.deleteExpenseById(deleteExpenseById);
    res.status(201).json({
        "items_deleted": response,
        data: deleteExpenseById
    });
}


module.exports = {
    getAllExpenses,
    createExpense,
    deleteExpenseById
}