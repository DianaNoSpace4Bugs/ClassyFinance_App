const modelsCategories = require('../models/modelsCategories'); // Importar el modelo de la BBDD


const getCategoryById = async (req, res) => {
    
    let category = await modelsCategories.getCategoryById(req.query.id);//esto accede a entries.models y llama a esa funcion allí 
    res.status(200).json(category); // [] con las entries encontradas
}
const getAllCategories = async (req, res) => {

    let categories = await modelsCategories.getAllCategories();//esto accede a entries.models y llama a esa funcion allí
    res.status(200).json(categories); // [] con las entries encontradas
}

module.exports = {
    getCategoryById,
    getAllCategories
}