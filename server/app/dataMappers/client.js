// Creation of pool of Postgresql to manage many request at the same time 
const { Pool } = require('pg');

// const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Pool is in charge of connexions
const pool = new Pool({
        // user:'postgres',
        // host:'localhost',
        // database:'airbnb',
        // password:'vanillaninja',
        // port: 5432,
        ssl: {
                rejectUnauthorized: false
              },
        connectionString: process.env.DATABASE_URL,
})
// module.exports = pool;
module.exports = {
    query: (text, params) => pool.query(text, params),
  }