const query = {
    getAllExpenses:
    `SELECT *
    FROM expenses`,
    createExpense:
    `INSERT INTO expenses(expense_id, quantity, description, date, is_monthly)
    VALUES ($1,$2,$3,$4,$5)`,
    deleteExpenseById:
    `DELETE FROM expense
    WHERE expense_id = $1`
};

module.exports = query;