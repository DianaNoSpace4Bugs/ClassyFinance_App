const modelsUsers = require('../models/modelsCategories'); // Importar el modelo de la BBDD


const getCategoryById = async (req, res) => {
    let user = await modelsUsers.getUserById(req.query.id);//esto accede a entries.models y llama a esa funcion allí 


    res.status(200).json(user); // [] con las entries encontradas
}