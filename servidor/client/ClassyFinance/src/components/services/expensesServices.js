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

async function getExpenses(filter = {}) {
    return new Promise(async (resolve, reject) => {
        try {
            const {
                userId = null,
                categoryId = null,
                startDate = null,
                endDate = null,
                offset = null,
                limit = null
            } = filter;

            let url = `http://localhost:3000/api/expenses?`;
            // TODO: añadir las que faltan según me haga falta.
            if (categoryId) url += `categoryId=${categoryId}`;
            
            // Petición HTTP
            const response = await axios.get(url);
            const json = response;
            resolve(json.data);
        } catch (error) {
            console.error("Ha ocurrido un error al obtener los gastos: ", error)
            reject(error.response.data.errorMessage);
        }
    });
}

async function deleteExpense(id) {
    return new Promise(async (resolve, reject) => {
        try {
            // Petición HTTP
            const body = {"id": id};
            const response = await axios.delete(`http://localhost:3000/api/expense?id=${id}`, body);
            const json = response;
            resolve(json.data.data);
        } catch (error) {
            console.error("Ha ocurrido un error al borrar el gasto: ", error)
            reject(error.response.data.errorMessage);
        }
    });
}

export { createExpense, getExpenses, deleteExpense }