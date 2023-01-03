import express, { Request, Response } from 'express';
import { createConnection } from 'mysql2';

const app = express();
const port = 3000;

const connection = createConnection({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'nome_do_banco'
});

app.get('/tasks', (req: Request, res: Response) => {
  
});


app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
