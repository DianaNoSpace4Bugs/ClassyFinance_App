const query = {
    getAllIncomes:
    `SELECT *
    FROM incomes`,
    updateIncome:
    `UPDATE incomes
    SET quantity = $1
    WHERE income_id = $2`,
    createIncome:
    `INSERT INTO incomes(income_id, quantity, description, is_monthly, user_id)
    VALUES ($1,$2,$3,$4,(SELECT user_id FROM users WHERE email=$5))`,
    deleteIncomeById:
    `DELETE FROM incomes
    WHERE income_id = $1`
};

module.exports = query;