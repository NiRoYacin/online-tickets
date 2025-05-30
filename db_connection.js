// إعداد الاتصال بقاعدة البيانات

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'online_tickets',
  password: 'yacin2001',
  port: 5432,
});

module.exports = pool;