'use strict'

if (process.env.NODE_ENV !== 'production')
	require('dotenv').config()

const mysql = require('mysql');


const connector = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
  connectionLimit: 10
});

module.exports = connector
