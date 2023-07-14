const { Pool } = require('pg');

const pool = new Pool({
    user: 'todo',
    host: 'localhost',
    database: 'todo_list',
    password: 'lilia1001',
    port: 5432, // or your PostgreSQL port
  });

module.exports = pool;
