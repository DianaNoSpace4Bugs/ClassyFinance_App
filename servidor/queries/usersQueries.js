const query = {
    getUserById:
    `SELECT *
    FROM users
    WHERE user_id=$1`,
    updateUser:
    `UPDATE users
    SET name = $1
    WHERE name = $2;`,
    createUser:
    `INSERT INTO users(user_id, name, email, password, money_limit)
    VALUES ($1,$2,$3,$4);`
};

module.exports = query;