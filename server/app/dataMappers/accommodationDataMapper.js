const client = require('./client');

module.exports = {

    async getAllAccommodation() {

        const result = await client.query(`SELECT * FROM accommodation `);
        return result.rows;
    },

    async getOneAccommodation(id) {

        const result = await client.query(`SELECT * FROM accommodation WHERE id = $1`, [id]
        );
        return result.rows[0]
    },
}