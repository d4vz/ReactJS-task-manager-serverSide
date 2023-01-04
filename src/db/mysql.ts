import mysql from 'mysql';
import * as dotenv from 'dotenv';
dotenv.config();


export const Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'task_list_manager'
});