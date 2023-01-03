import mysql from 'mysql';

export const Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fixwd@2020',
  database: 'task_list_manager',
});