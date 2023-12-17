const modelsCategories = require('../models/modelsCategories'); // Importar el modelo de la BBDD


const getCategoryById = async (req, res) => {
    try {
        const id = req.query.id;
        if (!id) {
            res.status(404).json({
                statusCode: 404,
                errorMessage: "Category not found."
            });
        }
        let category = await modelsCategories.getCategoryById(id);
        if (category.length == 0){
            res.status(404).json({
                statusCode: 404,
                errorMessage: "Category not found."
            });
            // Si no lo pongo devuelve un 200
            return;
        }
        res.status(200).json(category); // [] con las entries encontradas
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            errorMessage: "An unexpected error has ocurred."
        });
    }
}
const getAllCategories = async (req, res) => {

    let categories = await modelsCategories.getAllCategories();//esto accede a entries.models y llama a esa funcion allí
    res.status(200).json(categories); // [] con las entries encontradas
}


module.exports = {
    getCategoryById,
    getAllCategories
}