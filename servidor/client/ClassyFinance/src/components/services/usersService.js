import axios from 'axios'

async function createUser(userData) {
    return new Promise(async (resolve, reject) => {
        try {
            // Petición HTTP
            const response = await axios.post(`http://localhost:3000/api/user`, userData);
            const json = response;
            resolve(json.data.data);
        } catch (error) {
            console.error("Ha ocurrido un error al registrar el usuario: ", error)
            reject(error.response.data.errorMessage);
        }
    });
}

export { createUser }