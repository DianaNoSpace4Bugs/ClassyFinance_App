const query = {
    getUserById:
    `SELECT *
    FROM users
    WHERE user_id=$1`,
    updateUser:
    `UPDATE users
    SET username = $1
    WHERE username = $2;`,
    createUser:
    `INSERT INTO users(username, email, password, money_limit)
    VALUES ($1,$2,$3,$4);`
};

module.exports = query;