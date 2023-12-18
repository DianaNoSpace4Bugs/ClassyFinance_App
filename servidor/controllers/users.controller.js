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
    try {
        let user = await modelsUsers.getUserById(req.query.id);//esto accede a entries.models y llama a esa funcion allí 
        res.status(200).json(user); // [] con las entries encontradas
    }
    catch (error) {
        res.status(500).json({
            statusCode: 500,
            errorMessage: "An unexpected error has ocurred."
        });
    }
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
    console.log("createUser is executing...")
    try {
        const newUser = req.body; // {name,surname,email,image}
        console.log(newUser)
        if (!newUser.username ||
            !newUser.email ||
            !newUser.password ||
            !newUser.money_limit ||
            !newUser.monthlyIncomeQuantity) {
            res.status(400).json({
                statusCode: 400,
                errorMessage: "All the fields are required."
            });
        }
        else {
            const response = await modelsUsers.createUser(newUser);//esto accede a authors.models y llama a esa funcion allí
            res.status(201).json({
                "items_created": response,
                data: newUser
            });
        }
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            errorMessage: "An unexpected error has ocurred during user registration."
        });
    }
}

module.exports = {
    getUserById,
    updateUsersData,
    createUser
}