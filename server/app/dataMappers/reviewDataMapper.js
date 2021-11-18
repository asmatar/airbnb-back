const client = require('./client');

module.exports = {

    async getAllReview() {

        const result = await client.query(`SELECT * FROM review `);
        return result.rows;
    },

    async getOneReview(id) {

        const result = await client.query(`SELECT * FROM review WHERE id = $1`, [id]
        );
        return result.rows[0]
    },
}