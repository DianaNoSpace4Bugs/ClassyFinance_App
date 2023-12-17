const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
const cowsay = require('cowsay');
require('dotenv').config()
// console.log(process.env) //luego quitar
const { Pool } = require('pg');
//Rutas
const usersRoutes = require("./routes/users.routes");
const expensesRoutes = require("./routes/expenses.routes");
const categoriesRoutes = require("./routes/categories.routes");
const incomesRoutes = require("./routes/incomes.routes");


app.use(cors())
app.options('*', cors())
app.use(express.json());

app.use('/api', usersRoutes);
app.use('/api', categoriesRoutes);
app.use('/api', incomesRoutes);
app.use('/api', expensesRoutes);


// Configuración de la conexión a PostgreSQL
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

// Ruta de ejemplo para obtener todos los usuarios
// app.get('/users', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM users');
//     res.json(result.rows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error en el servidor');
//   }
// });
// app.get('/categories', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM categories');
//     res.json(result.rows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error en el servidor');
//   }
// });

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});




