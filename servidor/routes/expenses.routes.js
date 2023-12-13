const express = require('express');
// Rutas de productos
const expensesController = require("../controllers/expenses.controller");
const expensesRouter = express.Router();

expensesRouter.get('/expenses', expensesController.getAllExpenses);
expensesRouter.post('/expense', expensesController.createExpense);
expensesRouter.delete('/expense', expensesController.deleteExpenseById);


module.exports = expensesRouter;