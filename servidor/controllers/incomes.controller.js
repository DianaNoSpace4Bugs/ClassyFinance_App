const modelsIncomes = require('../models/modelsIncomes'); // Importar el modelo de la BBDD

const getAllIncomes = async (req, res) => {

    let incomes = await modelsIncomes.getAllIncomes();
    res.status(200).json(incomes); 

}

const createIncome = async (req, res) => {
    const newIncome = req.body; // {name,surname,email,image}
    console.log(req.body);
    const response = await modelsIncomes.createIncome(newIncome);//esto accede a authors.models y llama a esa funcion allí
    res.status(201).json({
        "items_created": response,
        data: newIncome
    });
}

const updateIncome = async (req, res) => {
    const changeIncome = req.body; // {name,surname,email,image}
    const response = await modelsIncomes.updateIncome(changeIncome);//esto accede a authors.models y llama a esa funcion allí
    res.status(201).json({
        "items_changed": response,
        data: changeIncome
    });
}

const deleteIncomeById = async (req, res) => {
    const deleteIncomeById = req.body; // {name,surname,email,image}
    const response = await modelsIncomes.deleteIncomeById(deleteIncomeById);//esto accede a authors.models y llama a esa funcion allí
    res.status(201).json({
        "items_deleted": response,
        data: deleteIncomeById
    });
}


module.exports = {
    getAllIncomes,
    updateIncome,
    createIncome,
    deleteIncomeById
}