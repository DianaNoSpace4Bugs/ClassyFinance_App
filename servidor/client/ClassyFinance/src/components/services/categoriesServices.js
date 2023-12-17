import axios from 'axios'

async function getCategories(categoryData) {
    return new Promise(async (resolve, reject) => {
        try {
            // Petición HTTP
            const response = await axios.get(`http://localhost:3000/api/categories`, categoryData);
            const json = response;
            console.log(json);
            resolve(json.data);
        } catch (error) {
            console.error("Ha ocurrido un error al obtener las categorías: ", error)
            reject(error.response.data.errorMessage);
        }
    });
}

async function getCategoryById(id) {
    return new Promise(async (resolve, reject) => {
        try {
            // Petición HTTP
            const response = await axios.get(`http://localhost:3000/api/category?id=${id}`);
            const json = response;
            console.log(json);
            resolve(json.data);
        } catch (error) {
            console.error("Ha ocurrido un error al obtener la categoría con id " + id + ": ", error)
            reject(error.response.data.errorMessage);
        }
    });
}

export { getCategories, getCategoryById }