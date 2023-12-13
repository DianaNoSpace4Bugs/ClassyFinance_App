const modelsUsers = require('../models/modelsUsers'); // Importar el modelo de la BBDD

//getAuthors
// if(hay email)
//     busca por mail
// else
//     busca todo


// GET http://localhost:3000/api/authors --> ALL
// GET http://localhost:3000/api/authors?email=hola@gmail.com --> por email
//lo vamos a engachar a una ruta que si hay mail busca por correo, si no hay mail busca todo. 
const getUserById = async (req, res) => {
    let user = await modelsUsers.getUserById(req.query.id);//esto accede a entries.models y llama a esa funcion allí 


    res.status(200).json(user); // [] con las entries encontradas
}

const updateUsersData = async (req, res) => {
    const changeUser = req.body; // {name,surname,email,image}
    const response = await modelsUsers.updateUser(changeUser);//esto accede a authors.models y llama a esa funcion allí
    res.status(201).json({
        "items_changed": response,
        data: changeUser
    });
}

const createUser = async (req, res) => {
    const newUser = req.body; // {name,surname,email,image}
    const response = await modelsUsers.createUser(newUser);//esto accede a authors.models y llama a esa funcion allí
    res.status(201).json({
        "items_created": response,
        data: newUser
    });
}

module.exports = {
    getUserById,
    updateUsersData,
    createUser
}