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
    async getReviewFromOneAccommodation(id) {
        const result = await client.query(`SELECT * FROM "accommodation" INNER JOIN "review" ON accommodation_id = accommodation.id WHERE accommodation.id =  $1`, [id]
        );
        return result.rows
    },
}