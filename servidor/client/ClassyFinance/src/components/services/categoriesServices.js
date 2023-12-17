import axios from 'axios'

async function getCategories(categoryData) {
if (window.location.pathname.includes("/api/categories")) {
    
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
}

export { getCategories }