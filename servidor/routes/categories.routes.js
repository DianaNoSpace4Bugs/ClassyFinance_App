const express = require('express');
// Rutas de productos
const categoriesController = require("../controllers/categories.controller");
const categoriesRouter = express.Router();

categoriesRouter.get('/categories', categoriesController.getAllCategories);
categoriesRouter.get('/category', categoriesController.getCategoryById);

module.exports = categoriesRouter;