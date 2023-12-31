const express = require('express');
// Rutas de productos
const usersController = require("../controllers/users.controller");
const usersRouter = express.Router();

usersRouter.get('/users', usersController.getUserById);
usersRouter.put('/user', usersController.updateUsersData);


module.exports = usersRouter;

