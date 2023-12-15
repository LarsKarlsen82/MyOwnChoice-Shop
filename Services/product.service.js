const db = require('../db');

// Function: Get all products
module.exports.getAllProducts = async () => {
    try {
        // Execute a SELECT query to retrieve all products from the database
        const [records] = await db.query("SELECT * FROM products");
        // Return the result of the SELECT query
        return records;
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error for handling at a higher level
    }
}
;
