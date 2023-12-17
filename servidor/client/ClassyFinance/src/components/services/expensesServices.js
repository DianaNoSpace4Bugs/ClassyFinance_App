import axios from 'axios'

async function createExpense(expenseData) {
    return new Promise(async (resolve, reject) => {
        try {
            // Petición HTTP
            const response = await axios.post(`http://localhost:3000/api/expense`, expenseData);
            const json = response;
            resolve(json.data.data);
        } catch (error) {
            console.error("Ha ocurrido un error al registrar el gasto: ", error)
            reject(error.response.data.errorMessage);
        }
    });
}

export { createExpense }