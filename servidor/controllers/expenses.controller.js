const modelsExpenses = require('../models/modelsExpenses'); // Importar el modelo de la BBDD

const getAllExpenses = async (req, res) => {
    const {
        userId = 1, // usamos 1 por defecto hasta que haya autenticación
        categoryId = null,
        startDate = null,
        endDate = null,
        offset = null,
        limit = null
    } = req.query ?? {};
    try {
        let expenses = await modelsExpenses.getAllExpenses(userId, categoryId, startDate, endDate, offset, limit);
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            errorMessage: "An unexpected error has ocurred."
        });
    }

}

const createExpense = async (req, res) => {
    const newExpense = req.body;
    if (!newExpense.quantity || !newExpense.category) {
        res.status(400).json({
            statusCode: 400,
            errorMessage: "Quantity and category fields are required."
        });
    }
    // TODO: el email todavía no lo pasamos hasta que no haya autenticación. Usamos uno por defecto de momento.
    const response = await modelsExpenses.createExpense(newExpense, newExpense.email ?? "mariadiana1999@example.com", newExpense.category);
    res.status(201).json({
        "items_created": response,
        data: newExpense
    });
}


const deleteExpenseById = async (req, res) => {
    const { id } = req.query;
    console.log('body delete expense id: ', id);
    try {
        const response = await modelsExpenses.deleteExpenseById(id);
        res.status(201).json({
            "items_deleted": response,
            data: id
        });
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            errorMessage: "An unexpected error has ocurred."
        });
    }
}


module.exports = {
    getAllExpenses,
    createExpense,
    deleteExpenseById
}