const query = {
    getAllExpenses:
    `SELECT *
    FROM expenses
    WHERE
      user_id = COALESCE($1, user_id) AND
      category_id = COALESCE($2, category_id) AND
      (NULLIF($3, '') IS NULL OR date >= $3::date) AND
      (NULLIF($4, '') IS NULL OR date <= $4::date)
    ORDER BY date
    OFFSET $5
    LIMIT $6`,
    createExpense:
    `INSERT INTO expenses(expense_id, quantity, description, date, is_monthly, user_id, category_id)
    VALUES ($1,$2,$3,$4,$5,(SELECT user_id FROM users WHERE email=$6),(SELECT category_id FROM categories WHERE name=$7))`,
    deleteExpenseById:
    `DELETE FROM expense
    WHERE expense_id = $1`
};

module.exports = query;