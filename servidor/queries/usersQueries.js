const query = {
    getUserById:
    `SELECT *
    FROM users
    WHERE user_id=$1`,
    updateUser:
    `UPDATE users
    SET name = $1
    WHERE name = $2;`
};

module.exports = query;