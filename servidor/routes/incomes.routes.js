const express = require('express');
// Rutas de productos
const incomesController = require("../controllers/incomes.controller");
const incomesRouter = express.Router();

incomesRouter.get('/incomes', incomesController.getAllIncomes);
incomesRouter.post('/income', incomesController.createIncome);
incomesRouter.put('/income', incomesController.updateIncome);
incomesRouter.delete('/income', incomesController.deleteIncomeById);


module.exports = incomesRouter;