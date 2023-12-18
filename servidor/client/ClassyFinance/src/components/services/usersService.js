import axios from 'axios'

async function createUser(userData) {
    return new Promise(async (resolve, reject) => {
        try {
            // Petición HTTP
            const response = await axios.post(`http://localhost:3000/api/user`, userData);
            console.log(response);
            resolve(response.data.data);
        } catch (error) {
            console.error("Ha ocurrido un error al registrar el usuario: ", error)
            reject(error.response.data.errorMessage);
        }
    });
}

async function getUserById(id) {
    return new Promise(async (resolve, reject) => {
        try {
            // Petición HTTP
            const response = await axios.get(`http://localhost:3000/api/user?id=${id}`);
            const json = response;
            console.log(json);
            resolve(json.data);
        } catch (error) {
            console.error("Ha ocurrido un error al obtener tu usuario " + id + ": ", error)
            reject(error.response.data.errorMessage);
        }
    });
}

export { createUser, getUserById }