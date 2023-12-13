const query = {
    getCategoryById:
    `SELECT *
    FROM categories
    WHERE category_id=$1`,
    getAllCategories:
    `SELECT *
    FROM categories;`
};

module.exports = query;