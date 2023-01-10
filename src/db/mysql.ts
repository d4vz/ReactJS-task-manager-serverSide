import mysql from 'mysql';
import * as dotenv from 'dotenv';
dotenv.config();

export const Connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'task_list_manager'
});

Connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL');
  }
});