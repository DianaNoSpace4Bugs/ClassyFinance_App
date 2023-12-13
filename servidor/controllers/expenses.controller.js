const modelsExpenses = require('../models/modelsExpenses'); // Importar el modelo de la BBDD

const getAllExpenses = async (req, res) => {

    let expenses = await modelsExpenses.getAllExpenses();
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